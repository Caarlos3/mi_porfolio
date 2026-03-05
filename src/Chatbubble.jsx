import React, { useState, useRef, useEffect } from "react";
import "./ChatBubble.css";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMsgId = Math.random().toString(36).substr(2, 9);
    const userMessage = { id: userMsgId, text: input, sender: "user" };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://simple-node-production-b87f.up.railway.app/chat/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input_data: input,
          session_id: "portfolio-session-" + Date.now()
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let aiText = "";

      const aiMsgId = Math.random().toString(36).substr(2, 9);
      setMessages((prev) => [...prev, { id: aiMsgId, text: "", sender: "ai" }]);

      const updateAIMessage = (currentMessages, id, newText) => {
        return currentMessages.map((msg) =>
          msg.id === id ? { ...msg, text: newText } : msg
        );
      };

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          aiText += chunk;
          setMessages((prev) => updateAIMessage(prev, aiMsgId, aiText));
        }
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setMessages((prev) => [
        ...prev,
        { id: "err-" + Date.now(), text: "❌ Error de conexión. Revisa los logs del backend.", sender: "system" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-wrapper">
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)} title="Chat con IA">
        {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-message"></i>}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <img src="/mi-foto.png" alt="Avatar" className="chat-avatar" />
              <div>
                <h3 className="chat-title">Ai Assistant</h3>
                <span className="chat-status">Online</span>
              </div>
            </div>
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <div style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", marginTop: "20px", fontSize: "0.9rem" }}>
                ¡Hola! Pregúntame sobre la experiencia, habilidades o proyectos de Carlos.
              </div>
            )}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble chat-bubble-${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="chat-typing">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-container">
            <input
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Escribe tu mensaje..."
            />
            <button className="chat-send-btn" onClick={handleSendMessage}>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;