import React, { useState } from "react";
import TogetherAI from "./TogetherAI.jsx";
import "./AISection.css";
import { useTheme } from '../common/ThemeContext.jsx';

function AISection() {
    const { theme, toggleTheme } = useTheme();

    const [question, setQuestion] = useState(""); // State to hold the question input
    const [messages, setMessages] = useState([]); // State to hold all chat messages

    const handleAskQuestion = async () => {
        if (question.trim() === "") {
            alert("Please enter a question");
            return;
        }

        // Add user's message to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "user", content: question },
        ]);

        // Call the API to get the response
        const response = await TogetherAI(question);

        // Add AI's response to the chat
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: "assistant", content: response.choices[0].message.content },
        ]);

        // Clear the input after asking the question
        setQuestion("");
    };

    return (
        <div className={`chat-container ${theme}-mode`}>
            <div className="chat-box">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.role === "assistant" ? "assistant" : "user"}`}
                        >
                            <p>{message.content}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="input-container">
                <input
                    type="text"
                    placeholder="Ask me anything"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button onClick={handleAskQuestion}>Ask</button>
            </div>

            {/* Theme toggle button */}
           
        </div>
    );
}

export default AISection;