'use client';
import { useState, useRef, useEffect } from 'react';

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');

    const newMessages = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: 'assistant', content: data.content || data.error }]);
    } catch {
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  }

  return (
    <main className="chat-page">
      <div className="chat-header">
        <p className="section-label">✦ AI Assistant</p>
        <h1>Chat with Claude</h1>
        <p>Powered by Anthropic's Claude. Ask anything — ideas, writing, questions.</p>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.length === 0 && (
            <div style={{ color: 'var(--text-faint)', fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.08em', textAlign: 'center', marginTop: '4rem' }}>
              Start a conversation below ↓
            </div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role}`}>
              <span className="chat-msg-label">{msg.role === 'user' ? 'You' : 'Claude'}</span>
              <div className="chat-bubble">{msg.content}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-msg assistant">
              <span className="chat-msg-label">Claude</span>
              <div className="thinking"><span /><span /><span /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-row">
          <textarea
            className="chat-input"
            rows={1}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type a message… (Enter to send)"
          />
          <button className="chat-send" onClick={send} disabled={loading || !input.trim()}>
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
