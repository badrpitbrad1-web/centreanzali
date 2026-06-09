import { useState } from 'react';

const serviceOptions = [
  'الحجامة الجافة',
  'الحجامة الرطبة',
  'الحجامة بالنار',
  'العلاج بالأعشاب',
  'المساج العلاجي',
  'جلسات الاسترخاء',
];

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

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
      <div style={styles.page}>
        <div style={styles.successWrap}>
          <div className="success-card">
            <div style={styles.successIcon}>✅</div>
            <h2 style={styles.successTitle}>تم تأكيد حجزك!</h2>
            <p style={styles.successText}>
              شكراً <strong>{form.name}</strong>، تم فتح واتساب لإرسال طلب الحجز لـ <strong>{form.service}</strong>.
            </p>
            <div style={styles.summaryBox}>
              <div style={styles.summaryRow}><span>📅 التاريخ:</span> <span>{form.date}</span></div>
              <div style={styles.summaryRow}><span>⏰ الوقت:</span> <span>{form.time}</span></div>
              <div style={styles.summaryRow}><span>📞 الهاتف:</span> <span style={{ direction: 'ltr' }}>{form.phone}</span></div>
            </div>
            <p style={styles.confirmNote}>لم يفتح واتساب تلقائياً؟</p>
            <a
              href={`https://wa.me/212638038900?text=${encodeURIComponent(
                `مرحباً، أودّ تأكيد حجز موعد:\n👤 الاسم: ${form.name}\n📞 الهاتف: ${form.phone}\n🩺 الخدمة: ${form.service}\n📅 التاريخ: ${form.date}\n⏰ الوقت: ${form.time}${form.notes ? `\n📝 ملاحظات: ${form.notes}` : ''}`
              )}`}
              target="_blank"
              rel="noreferrer"
              style={styles.whatsappBtn}
            >
              💬 إرسال عبر واتساب
            </a>
            <button onClick={() => { setSubmitted(false); setForm(initialForm); }} style={styles.resetBtn}>
              حجز موعد آخر
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      {/* Header */}
      <section style={styles.header} className="page-header">
        <div style={styles.headerInner}>
          <span style={styles.badge}>📅 الحجز</span>
          <h1 style={styles.title}>احجز موعدك</h1>
          <p style={styles.subtitle}>اختر الخدمة والوقت المناسب لك وسنتواصل معك للتأكيد</p>
        </div>
      </section>

      <section style={styles.section} className="section-pad">
        {/* Two-column layout — collapses to one on mobile via CSS */}
        <div className="booking-layout">

          {/* Form */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <h2 style={styles.formTitle}>بيانات الحجز</h2>

            {/* Name + Phone */}
            <div className="booking-form-grid">
              <div style={styles.field}>
                <label style={styles.label}>الاسم الكامل *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="محمد الأمين"
                  style={styles.input}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>رقم الهاتف *</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="0638038900"
                  style={styles.input}
                  type="tel"
                  required
                />
              </div>
            </div>

            {/* Service */}
            <div style={styles.field}>
              <label style={styles.label}>الخدمة المطلوبة *</label>
              <select name="service" value={form.service} onChange={handleChange} style={styles.input} required>
                <option value="">اختر خدمة...</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Date + Time */}
            <div className="booking-form-grid">
              <div style={styles.field}>
                <label style={styles.label}>التاريخ *</label>
                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  style={styles.input}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>الوقت *</label>
                <select name="time" value={form.time} onChange={handleChange} style={styles.input} required>
                  <option value="">اختر وقتاً...</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div style={styles.field}>
              <label style={styles.label}>ملاحظات إضافية</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder="اذكر أي معلومات صحية مهمة أو استفسارات..."
                style={{ ...styles.input, minHeight: '100px', resize: 'vertical' }}
              />
            </div>

            {error && <p style={styles.error}>{error}</p>}

            <button type="submit" style={styles.submitBtn}>
              💬 تأكيد الحجز عبر واتساب
            </button>
          </form>

          {/* Info panel */}
          <div className="booking-info-panel">
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>📍 موقعنا</h3>
              <a
                href="https://maps.app.goo.gl/pYBHCQcB2VF9BkZT9?g_st=ac"
                target="_blank"
                rel="noreferrer"
                style={styles.mapLink}
              >
                سيدي موسى كم 9<br />مراكش، المغرب 44000
                <span style={styles.mapHint}>🗺️ افتح في خرائط Google</span>
              </a>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>⏰ أوقات العمل</h3>
              <p style={styles.infoText}>كل أيام الأسبوع<br />08:00 صباحاً — 22:00 مساءً</p>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>📞 التواصل</h3>
              <p style={styles.infoText}>
                <a href="tel:+212638038900" style={{ ...styles.infoLink, direction: 'ltr', display: 'inline-block' }}>
                  +212 638 038 900
                </a><br />
                <a href="https://wa.me/212638038900" target="_blank" rel="noreferrer" style={styles.infoLink}>
                  واتساب متاح
                </a><br />
                <a href="mailto:centre.anzali@gmail.com" style={styles.infoLink}>
                  centre.anzali@gmail.com
                </a>
              </p>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>💡 قبل زيارتك</h3>
              <ul style={styles.tipsList}>
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

const styles = {
  page: {
    fontFamily: "'Cairo', 'Segoe UI', Tahoma, sans-serif",
    direction: 'rtl',
    color: '#1a1a2e',
  },
  header: {
    background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    padding: '80px 24px',
    textAlign: 'center',
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
    marginBottom: '12px',
  },
  subtitle: { color: '#aaaaaa', fontSize: '1rem', lineHeight: 1.8, margin: 0 },
  section: {
    padding: '60px 24px',
    backgroundColor: '#f9f7f2',
  },
  formTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '28px',
    paddingBottom: '16px',
    borderBottom: '2px solid #f0e8d8',
    color: '#1a1a2e',
    marginTop: 0,
  },
  field: { display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' },
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
    padding: '15px 32px',
    borderRadius: '10px',
    border: 'none',
    fontWeight: 'bold',
    fontSize: '1.05rem',
    cursor: 'pointer',
    width: '100%',
    fontFamily: 'inherit',
    marginTop: '8px',
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
  tipsList: {
    color: '#666',
    fontSize: '0.88rem',
    lineHeight: 2,
    paddingRight: '20px',
    margin: 0,
    listStyle: 'disc',
  },
  successWrap: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f7f2',
    padding: '40px 16px',
  },
  successIcon: { fontSize: '4rem', marginBottom: '16px' },
  successTitle: { fontSize: '1.8rem', color: '#1a1a2e', marginBottom: '12px', marginTop: 0 },
  successText: { color: '#555', lineHeight: 1.7, marginBottom: '24px' },
  summaryBox: {
    backgroundColor: '#f9f7f2',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'right',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #eee',
    fontSize: '0.95rem',
    color: '#444',
  },
  confirmNote: { color: '#888', fontSize: '0.9rem', marginBottom: '12px' },
  whatsappBtn: {
    display: 'block',
    backgroundColor: '#25d366',
    color: '#ffffff',
    padding: '13px 28px',
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
    padding: '12px 28px',
    borderRadius: '8px',
    border: '2px solid #ddd',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    cursor: 'pointer',
    fontFamily: 'inherit',
    width: '100%',
  },
  infoLink: {
    color: '#c9a84c',
    textDecoration: 'none',
  },
  mapLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.9rem',
    lineHeight: 1.8,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  mapHint: {
    color: '#c9a84c',
    fontSize: '0.8rem',
  },
};
