import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useEffect, useState } from 'react';
import './ChatbotStyles.css';

function GeminiChatbot() {
  // State management
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [genAI, setGenAI] = useState(null);

  // Initialize Gemini AI
  useEffect(() => {
    const initializeGeminiAI = async () => {
      try {
        const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
        if (!apiKey) {
          throw new Error('Gemini API key is missing');
        }
        
        const generativeAI = new GoogleGenerativeAI(apiKey);
        setGenAI(generativeAI);

        // Welcome message
        addMessage({
          id: 'welcome',
          text: 'Hello! I\'m your AI assistant. How can I help you today?',
          sender: 'bot'
        });
      } catch (error) {
        console.error('Failed to initialize Gemini AI:', error);
      }
    };

    initializeGeminiAI();
  }, []);

  // Add message to chat
  const addMessage = (message) => {
    setMessages(prevMessages => [
      ...prevMessages, 
      { ...message, id: `msg-${Date.now()}` }
    ]);
  };

  // Send message to Gemini
  const sendMessage = async () => {
    if (!inputMessage.trim() || !genAI) return;

    // Add user message
    const userMessage = {
      text: inputMessage,
      sender: 'user'
    };
    addMessage(userMessage);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Create model instance
      const model = genAI.getGenerativeModel({ 
        model: "gemini-pro",
        generationConfig: {
          temperature: 0.7,
          topK: 1,
          topP: 1,
          maxOutputTokens: 2048,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_HARASSMENT',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          },
          {
            category: 'HARM_CATEGORY_HATE_SPEECH',
            threshold: 'BLOCK_MEDIUM_AND_ABOVE'
          }
        ]
      });

      // Generate response
      const result = await model.generateContent(inputMessage);
      const botResponse = result.response.text();

      // Add bot message
      addMessage({
        text: botResponse,
        sender: 'bot'
      });
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Error message
      addMessage({
        text: 'Sorry, I couldn\'t process your message. Please try again.',
        sender: 'bot'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  // Clear chat history
  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="gemini-chatbot-container">
      <div className="chatbot-header">
        <h2>AI Chatbot</h2>
        <button 
          onClick={clearChat} 
          className="clear-chat-btn"
          disabled={messages.length === 0}
        >
          Clear Chat
        </button>
      </div>
      
      <div className="chat-messages-container">
        {messages.map((msg, index) => (
          <div 
            key={`${msg.id}-${index}`} 
            className={`message ${msg.sender}-message`}
          >
            {msg.text}
          </div>
        ))}
        
        {isLoading && (
          <div className="loading-indicator">
            <span>Typing...</span>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="chat-input-container">
        <input 
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
          disabled={isLoading || !genAI}
        />
        <button 
          type="submit" 
          className="send-button"
          disabled={!inputMessage.trim() || isLoading || !genAI}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default GeminiChatbot;