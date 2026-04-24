export default function ChatbotPage() {
  return (
    <main className="chat-page">
      <div className="chat-header">
        <p className="section-label">✦ AI Assistant</p>
        <h1>Chatbot</h1>
        <p>Coming soon.</p>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: '1rem',
        padding: '6rem 3rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem' }}>🔧</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 700 }}>
          Under Construction
        </h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.8 }}>
          The chatbot is currently disabled. Check back soon!
        </p>
      </div>
    </main>
  );
}
