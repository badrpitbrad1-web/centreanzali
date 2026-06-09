import { useState } from 'react';

const serviceOptions = [
  'الحجامة الجافة',
  'الحجامة الرطبة',
  'الحجامة بالنار',
  'العلاج بالأعشاب',
  'المساج العلاجي',
  'جلسات الاسترخاء',
];

const timeSlots = [
  '08:00','09:00','10:00','11:00','12:00',
  '14:00','15:00','16:00','17:00','18:00','19:00','20:00',
];

const initialForm = { name: '', phone: '', service: '', date: '', time: '', notes: '' };

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.date || !form.time) {
      setError('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }
    const msg = [
      'مرحباً، أودّ حجز موعد في مركز الأنزالي:',
      `👤 الاسم: ${form.name}`,
      `📞 الهاتف: ${form.phone}`,
      `🩺 الخدمة: ${form.service}`,
      `📅 التاريخ: ${form.date}`,
      `⏰ الوقت: ${form.time}`,
      form.notes ? `📝 ملاحظات: ${form.notes}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/212638038900?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div style={s.page}>
        <div style={s.successWrap}>
          <div style={s.successCard}>
            <div style={{ fontSize: '4rem', marginBottom: '16px' }}>✅</div>
            <h2 style={{ fontSize: 'clamp(1.4rem,4vw,1.8rem)', color: '#1a1a2e', marginBottom: '12px', marginTop: 0 }}>
              تم تأكيد حجزك!
            </h2>
            <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
              شكراً <strong>{form.name}</strong>، تم فتح واتساب لإرسال طلب الحجز لـ <strong>{form.service}</strong>.
            </p>
            <div style={s.summaryBox}>
              <div style={s.summaryRow}><span>📅 التاريخ:</span><span>{form.date}</span></div>
              <div style={s.summaryRow}><span>⏰ الوقت:</span><span>{form.time}</span></div>
              <div style={s.summaryRow}><span>📞 الهاتف:</span><span style={{ direction: 'ltr' }}>{form.phone}</span></div>
            </div>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '12px' }}>لم يفتح واتساب تلقائياً؟</p>
            <a
              href={`https://wa.me/212638038900?text=${encodeURIComponent(
                `مرحباً، أودّ تأكيد حجز موعد:\n👤 الاسم: ${form.name}\n📞 الهاتف: ${form.phone}\n🩺 الخدمة: ${form.service}\n📅 التاريخ: ${form.date}\n⏰ الوقت: ${form.time}${form.notes ? `\n📝 ملاحظات: ${form.notes}` : ''}`
              )}`}
              target="_blank"
              rel="noreferrer"
              style={s.whatsappBtn}
            >
              💬 إرسال عبر واتساب
            </a>
            <button
              onClick={() => { setSubmitted(false); setForm(initialForm); }}
              style={s.resetBtn}
            >
              حجز موعد آخر
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={s.page}>
      {/* ── Header ── */}
      <section style={s.header}>
        <div style={s.headerInner}>
          <span style={s.badge}>📅 الحجز</span>
          <h1 style={s.title}>احجز موعدك</h1>
          <p style={s.subtitle}>اختر الخدمة والوقت المناسب لك وسنتواصل معك للتأكيد</p>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={s.section}>
        {/*
          layout = flex + wrap
          على الكمبيوتر: الفورم (flex:1) | المعلومات (300px)
          على الموبايل: يتكدس تلقائياً لأن flexWrap=wrap
        */}
        <div style={s.layout}>

          {/* ── Form ── */}
          <form style={s.form} onSubmit={handleSubmit}>
            <h2 style={s.formTitle}>بيانات الحجز</h2>

            {/* الاسم + الهاتف */}
            <div style={s.row}>
              <div style={{ ...s.field, flex: 1, minWidth: '140px' }}>
                <label style={s.label}>الاسم الكامل *</label>
                <input name="name" value={form.name} onChange={handleChange}
                  placeholder="محمد الأمين" style={s.input} required />
              </div>
              <div style={{ ...s.field, flex: 1, minWidth: '140px' }}>
                <label style={s.label}>رقم الهاتف *</label>
                <input name="phone" value={form.phone} onChange={handleChange}
                  placeholder="0638038900" style={s.input} type="tel" required />
              </div>
            </div>

            {/* الخدمة */}
            <div style={s.field}>
              <label style={s.label}>الخدمة المطلوبة *</label>
              <select name="service" value={form.service} onChange={handleChange} style={s.input} required>
                <option value="">اختر خدمة...</option>
                {serviceOptions.map((sv) => <option key={sv} value={sv}>{sv}</option>)}
              </select>
            </div>

            {/* التاريخ + الوقت */}
            <div style={s.row}>
              <div style={{ ...s.field, flex: 1, minWidth: '140px' }}>
                <label style={s.label}>التاريخ *</label>
                <input name="date" value={form.date} onChange={handleChange}
                  type="date" style={s.input}
                  min={new Date().toISOString().split('T')[0]} required />
              </div>
              <div style={{ ...s.field, flex: 1, minWidth: '140px' }}>
                <label style={s.label}>الوقت *</label>
                <select name="time" value={form.time} onChange={handleChange} style={s.input} required>
                  <option value="">اختر وقتاً...</option>
                  {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* ملاحظات */}
            <div style={s.field}>
              <label style={s.label}>ملاحظات إضافية</label>
              <textarea name="notes" value={form.notes} onChange={handleChange}
                placeholder="اذكر أي معلومات صحية مهمة أو استفسارات..."
                style={{ ...s.input, minHeight: '100px', resize: 'vertical' }} />
            </div>

            {error && <p style={s.error}>{error}</p>}

            <button type="submit" style={s.submitBtn}>
              💬 تأكيد الحجز عبر واتساب
            </button>
          </form>

          {/* ── Info panel ── */}
          <div style={s.infoPanel}>
            <div style={s.infoCard}>
              <h3 style={s.infoTitle}>📍 موقعنا</h3>
              <a href="https://maps.app.goo.gl/pYBHCQcB2VF9BkZT9?g_st=ac"
                target="_blank" rel="noreferrer" style={s.mapLink}>
                سيدي موسى كم 9<br />مراكش، المغرب 44000
                <span style={s.mapHint}>🗺️ افتح في خرائط Google</span>
              </a>
            </div>
            <div style={s.infoCard}>
              <h3 style={s.infoTitle}>⏰ أوقات العمل</h3>
              <p style={s.infoText}>كل أيام الأسبوع<br />08:00 صباحاً — 22:00 مساءً</p>
            </div>
            <div style={s.infoCard}>
              <h3 style={s.infoTitle}>📞 التواصل</h3>
              <p style={s.infoText}>
                <a href="tel:+212638038900"
                  style={{ ...s.infoLink, direction: 'ltr', display: 'inline-block' }}>
                  +212 638 038 900
                </a><br />
                <a href="https://wa.me/212638038900" target="_blank" rel="noreferrer" style={s.infoLink}>واتساب متاح</a><br />
                <a href="mailto:centre.anzali@gmail.com" style={s.infoLink}>centre.anzali@gmail.com</a>
              </p>
            </div>
            <div style={s.infoCard}>
              <h3 style={s.infoTitle}>💡 قبل زيارتك</h3>
              <ul style={{ color: '#666', fontSize: '0.88rem', lineHeight: 2, paddingRight: '20px', margin: 0 }}>
                <li>تجنب الأكل الثقيل قبل الجلسة</li>
                <li>ارتدِ ملابس فضفاضة ومريحة</li>
                <li>أحضر نتائج فحوصاتك إن وجدت</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

const s = {
  page: {
    fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
    direction: 'rtl',
    color: '#1a1a2e',
    width: '100%',
    overflowX: 'hidden',
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
    fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
    marginTop: '16px',
    marginBottom: '12px',
  },
  subtitle: { color: '#aaaaaa', fontSize: 'clamp(0.85rem,2.5vw,1rem)', lineHeight: 1.8, margin: 0 },
  section: {
    padding: 'clamp(24px,5vw,60px) 16px',
    backgroundColor: '#f9f7f2',
    width: '100%',
  },
  /* ↓ المفتاح: flex + wrap → عمود واحد على الموبايل تلقائياً */
  layout: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    alignItems: 'flex-start',
    width: '100%',
  },
  form: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: 'clamp(20px,4vw,40px)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
    flex: '1 1 300px',   /* يتمدد ويتقلص — الحد الأدنى 300px */
    minWidth: 0,
    width: '100%',
  },
  formTitle: {
    fontSize: 'clamp(1.1rem,3vw,1.3rem)',
    fontWeight: 'bold',
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '2px solid #f0e8d8',
    color: '#1a1a2e',
    marginTop: 0,
  },
  /* صف من حقلين يتكدس تلقائياً */
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '0',
  },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px', width: '100%' },
  label: { fontSize: '0.9rem', fontWeight: 'bold', color: '#444' },
  input: {
    padding: '12px 14px',
    borderRadius: '8px',
    border: '2px solid #e8dcc8',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    color: '#1a1a2e',
    outline: 'none',
    backgroundColor: '#fafafa',
    width: '100%',
    boxSizing: 'border-box',
    direction: 'rtl',
  },
  error: {
    color: '#e74c3c',
    backgroundColor: '#fde8e8',
    padding: '10px 16px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    marginBottom: '16px',
  },
  submitBtn: {
    backgroundColor: '#25d366',
    color: '#ffffff',
    padding: '15px 24px',
    borderRadius: '10px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: 'clamp(0.95rem,2.5vw,1.05rem)',
    cursor: 'pointer',
    width: '100%',
    fontFamily: 'inherit',
    marginTop: '8px',
  },
  /* لوحة المعلومات تنزل تحت الفورم على الموبايل */
  infoPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: '0 1 300px',   /* لا تتمدد، الحد الأقصى 300px */
    minWidth: 0,
    width: '100%',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    borderRight: '3px solid #c9a84c',
  },
  infoTitle: { fontSize: '1rem', fontWeight: 'bold', marginBottom: '8px', color: '#1a1a2e', marginTop: 0 },
  infoText: { color: '#666', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 },
  infoLink: { color: '#c9a84c', textDecoration: 'none' },
  mapLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.9rem',
    lineHeight: 1.8,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  mapHint: { color: '#c9a84c', fontSize: '0.8rem' },
  /* صفحة النجاح */
  successWrap: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f7f2',
    padding: '40px 16px',
  },
  successCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: 'clamp(24px,5vw,48px)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
  },
  summaryBox: {
    backgroundColor: '#f9f7f2',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '20px',
    textAlign: 'right',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    fontSize: '0.9rem',
    color: '#444',
  },
  whatsappBtn: {
    display: 'block',
    backgroundColor: '#25d366',
    color: '#ffffff',
    padding: '13px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    marginBottom: '12px',
    textAlign: 'center',
  },
  resetBtn: {
    backgroundColor: 'transparent',
    color: '#666',
    padding: '12px 24px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    width: '100%',
  },
};
