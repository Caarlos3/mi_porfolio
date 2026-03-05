import React, { useState } from "react";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("simple-node-production-b87f.up.railway.app/chat/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input_data: input, session_id: "portfolio-session-" + Date.now() }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let aiText = "";

      setMessages((prev) => [...prev, { text: "", sender: "ai" }]);

      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          aiText += chunk;
          setMessages((prev) => {
            const updated = [...prev];
            updated[updated.length - 1].text = aiText;
            return updated;
          });
        }
      }
    } catch (error) {
      console.error("Error al conectar con el backend:", error);
      setMessages((prev) => [
        ...prev,
        { text: "❌ Error al conectar con el asistente. Inténtalo más tarde.", sender: "system" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) handleSendMessage();
  };

  return (
    <div className="chat-wrapper">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Chat con Carlos</div>

          <div className="chat-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                ¡Hola! Soy el asistente de Carlos. ¿En qué puedo ayudarte?
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))
            )}
            {isLoading && <div className="loading-indicator">Escribiendo...</div>}
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              disabled={isLoading}
            />
            <button onClick={handleSendMessage} disabled={isLoading || input.trim() === ""}>
              Enviar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;