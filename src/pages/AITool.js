import { useState } from 'react';

const questions = [
  {
    id: 'pain',
    question: 'هل تعاني من آلام مزمنة في الجسم؟',
    options: ['نعم، بشكل متكرر', 'أحياناً', 'لا تقريباً'],
  },
  {
    id: 'fatigue',
    question: 'هل تشعر بإرهاق شديد أو تعب مستمر؟',
    options: ['نعم دائماً', 'أحياناً', 'نادراً'],
  },
  {
    id: 'blood',
    question: 'هل لديك ضغط دم مرتفع أو مشاكل في الدورة الدموية؟',
    options: ['نعم', 'لست متأكداً', 'لا'],
  },
  {
    id: 'conditions',
    question: 'هل تتناول مضادات التخثر أو لديك أمراض جلدية؟',
    options: ['نعم', 'لا'],
  },
  {
    id: 'age',
    question: 'ما هو نطاق عمرك؟',
    options: ['أقل من 18', '18 - 60', 'أكثر من 60'],
  },
];

function getRecommendation(answers) {
  const hasContraindication = answers['conditions'] === 'نعم';
  const isTooYoung = answers['age'] === 'أقل من 18';
  const hasPain = answers['pain'] === 'نعم، بشكل متكرر';
  const hasFatigue = answers['fatigue'] === 'نعم دائماً';

  if (hasContraindication) {
    return {
      level: 'caution',
      icon: '⚠️',
      title: 'يُنصح بالاستشارة الطبية أولاً',
      text: 'بناءً على إجاباتك، قد تكون هناك بعض الموانع الطبية. ننصحك باستشارة طبيبك قبل البدء بجلسات الحجامة. فريقنا مستعد لمساعدتك في تقييم حالتك.',
      color: '#e67e22',
      bg: '#fef5e7',
    };
  }
  if (isTooYoung) {
    return {
      level: 'caution',
      icon: '📋',
      title: 'يلزم موافقة ولي الأمر',
      text: 'الحجامة للأحداث تتطلب تقييماً خاصاً وموافقة ولي الأمر. تواصل معنا لنحدد الخطة المناسبة لعمرك.',
      color: '#e67e22',
      bg: '#fef5e7',
    };
  }
  if (hasPain || hasFatigue) {
    return {
      level: 'good',
      icon: '✅',
      title: 'أنت مرشح جيد للحجامة!',
      text: 'بناءً على إجاباتك، قد تستفيد كثيراً من جلسات الحجامة. الأعراض التي تعاني منها هي من الحالات التي يتميز فيها هذا العلاج بنتائج إيجابية ملحوظة.',
      color: '#27ae60',
      bg: '#eafaf1',
    };
  }
  return {
    level: 'neutral',
    icon: '💬',
    title: 'استشارة شخصية مُستحسنة',
    text: 'الحجامة قد تكون مفيدة لك حتى للوقاية وتعزيز الصحة. ننصحك بالتواصل مع فريقنا للحصول على تقييم شخصي دقيق بناءً على تاريخك الصحي الكامل.',
    color: '#2980b9',
    bg: '#eaf4fb',
  };
}

export default function AITool() {
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');

  const question = questions[current];
  const progress = Math.round((current / questions.length) * 100);

  function handleAnswer(option) {
    const updated = { ...answers, [question.id]: option };
    setAnswers(updated);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
      fetchAIAdvice(updated);
    }
  }

  async function fetchAIAdvice(ans) {
    setAiLoading(true);
    const prompt = `أنت مساعد طبي متخصص في الحجامة والطب البديل. العميل أجاب على الأسئلة التالية:
${questions.map((q) => `- ${q.question}: ${ans[q.id] || 'لم يجب'}`).join('\n')}

قدم نصيحة موجزة (3-4 جمل) بالعربية حول مدى ملاءمة الحجامة لهذا الشخص، مع ذكر أي احتياطات.`;

    try {
      // Try Gemini first
      const geminiKey = process.env.REACT_APP_GEMINI_API_KEY;
      if (geminiKey) {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          }
        );
        if (res.ok) {
          const data = await res.json();
          const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            setAiResponse(text);
            setAiLoading(false);
            return;
          }
        }
      }

      // Fallback: Groq
      const groqKey = process.env.REACT_APP_GROQ_API_KEY;
      if (groqKey) {
        const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 300,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const text = data.choices?.[0]?.message?.content;
          if (text) {
            setAiResponse(text);
            setAiLoading(false);
            return;
          }
        }
      }

      setAiResponse('');
    } catch {
      setAiResponse('');
    } finally {
      setAiLoading(false);
    }
  }

  function reset() {
    setAnswers({});
    setCurrent(0);
    setFinished(false);
    setAiResponse('');
  }

  const recommendation = finished ? getRecommendation(answers) : null;

  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.header}>
        <div style={styles.headerInner}>
          <span style={styles.badge}>🤖 أداة الذكاء الاصطناعي</span>
          <h1 style={styles.title}>هل أنت مرشح للحجامة؟</h1>
          <p style={styles.subtitle}>
            أجب على بضعة أسئلة بسيطة وسيساعدك ذكاؤنا الاصطناعي في تقييم مدى استفادتك من علاجاتنا
          </p>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.card}>
          {!finished ? (
            <>
              {/* Progress */}
              <div style={styles.progressBar}>
                <div style={{ ...styles.progressFill, width: `${progress}%` }} />
              </div>
              <p style={styles.progressLabel}>السؤال {current + 1} من {questions.length}</p>

              {/* Question */}
              <h2 style={styles.question}>{question.question}</h2>
              <div style={styles.options}>
                {question.options.map((opt) => (
                  <button key={opt} style={styles.optionBtn} onClick={() => handleAnswer(opt)}>
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Result */}
              <div style={{ ...styles.resultBox, backgroundColor: recommendation.bg, borderColor: recommendation.color }}>
                <div style={styles.resultIcon}>{recommendation.icon}</div>
                <h2 style={{ ...styles.resultTitle, color: recommendation.color }}>{recommendation.title}</h2>
                <p style={styles.resultText}>{recommendation.text}</p>
              </div>

              {/* AI Response */}
              {aiLoading && (
                <div style={styles.aiBox}>
                  <div style={styles.aiLoader}>
                    <span style={styles.dot} /> <span style={styles.dot} /> <span style={styles.dot} />
                  </div>
                  <p style={styles.aiLoadingText}>الذكاء الاصطناعي يحلل إجاباتك...</p>
                </div>
              )}

              {!aiLoading && aiResponse && (
                <div style={styles.aiBox}>
                  <p style={styles.aiLabel}>🤖 تحليل الذكاء الاصطناعي:</p>
                  <p style={styles.aiText}>{aiResponse}</p>
                </div>
              )}

              <div style={styles.resultActions}>
                <a href="/booking" style={styles.btnPrimary}>احجز موعدك الآن</a>
                <button onClick={reset} style={styles.btnReset}>إعادة التقييم</button>
              </div>
            </>
          )}
        </div>
      </section>

      <section style={styles.disclaimer}>
        <p>
          ⚕️ هذه الأداة للاسترشاد فقط وليست تشخيصاً طبياً. استشر متخصصاً للحصول على تقييم دقيق لحالتك.
        </p>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, sans-serif",
    direction: 'rtl',
    color: '#1a1a2e',
    minHeight: '100vh',
  },
  header: {
    background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    padding: 'clamp(40px,8vw,80px) 16px',
    textAlign: 'center',
    width: '100%',
  },
  headerInner: { maxWidth: '700px', margin: '0 auto' },
  badge: {
    backgroundColor: 'rgba(201,168,76,0.2)',
    color: '#c9a84c',
    padding: '6px 18px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  title: {
    color: '#ffffff',
    fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
    marginTop: '16px',
    marginBottom: '16px',
  },
  subtitle: { color: '#aaaaaa', fontSize: '1rem', lineHeight: 1.8, margin: 0 },
  section: {
    padding: 'clamp(24px,5vw,60px) 16px',
    backgroundColor: '#f9f7f2',
    minHeight: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: 'clamp(20px,5vw,48px)',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
  },
  progressBar: {
    height: '6px',
    backgroundColor: '#f0e8d8',
    borderRadius: '4px',
    overflow: 'hidden',
    marginBottom: '8px',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#c9a84c',
    borderRadius: '4px',
    transition: 'width 0.3s ease',
  },
  progressLabel: { color: '#999', fontSize: '0.85rem', marginBottom: '32px', textAlign: 'left' },
  question: { fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '28px', lineHeight: 1.5 },
  options: { display: 'flex', flexDirection: 'column', gap: '12px' },
  optionBtn: {
    backgroundColor: '#f9f7f2',
    border: '2px solid #e8dcc8',
    borderRadius: '10px',
    padding: '14px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    textAlign: 'right',
    fontFamily: 'inherit',
    transition: 'all 0.2s',
    color: '#1a1a2e',
  },
  resultBox: {
    borderRadius: '12px',
    padding: '32px',
    border: '2px solid',
    textAlign: 'center',
    marginBottom: '24px',
  },
  resultIcon: { fontSize: '3rem', marginBottom: '12px' },
  resultTitle: { fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '12px' },
  resultText: { color: '#555', lineHeight: 1.8, margin: 0 },
  aiBox: {
    backgroundColor: '#f0f4ff',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    border: '1px solid #d0d8f0',
  },
  aiLoader: { display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '8px' },
  dot: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    backgroundColor: '#c9a84c',
    borderRadius: '50%',
    animation: 'pulse 1s infinite',
  },
  aiLoadingText: { color: '#666', textAlign: 'center', margin: 0 },
  aiLabel: { color: '#3a5296', fontWeight: 'bold', marginBottom: '8px' },
  aiText: { color: '#333', lineHeight: 1.8, margin: 0 },
  resultActions: { display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' },
  btnPrimary: {
    backgroundColor: '#c9a84c',
    color: '#1a1a2e',
    padding: '14px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    flex: 1,
    textAlign: 'center',
  },
  btnReset: {
    backgroundColor: 'transparent',
    color: '#666',
    padding: '14px 28px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    flex: 1,
  },
  disclaimer: {
    backgroundColor: '#fff8e7',
    padding: '20px 24px',
    textAlign: 'center',
    color: '#888',
    fontSize: '0.85rem',
    borderTop: '1px solid #e8dcc8',
  },
};
