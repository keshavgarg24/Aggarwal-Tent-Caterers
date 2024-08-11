"use client";

import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedQuestion(null); // Reset selected question when closing
    }
  };

  const questions = [
    "How to contact?",
    "Services",
    "Address",
    "Who is the Owner",
    "What is your Belief",
  ];

  const getResponse = (question) => {
    const responses = {
      "How to contact?": "Contact us at <a href='tel:+918851151548'>8851151548</a> or <a href='tel:+919250866911'>9250866911</a>.",
      "Services": "We provide various Tent and catering services and various decoratives.",
      "Address": "U-1, Bindapur Matiala Rd, Subhash Park, Uttam Nagar, New Delhi, Delhi, 110059.",
      "Who is the Owner": "This Business is Owned By Mr. Shyam Lal Garg.",
      "What is your Belief": "We believe in providing best class tent and catering services, we never compromise on the quality and believe that the satisfied customer comes again.",
    };

    return responses[question] || "Sorry, I don't understand that question.";
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.chatbotIcon} onClick={toggleChatbot}>
        <span style={styles.iconText}>💬</span>
      </div>
      {isOpen && (
        <div style={styles.chatbotBox}>
          <div style={styles.chatbotHeader}>
            <h3>Chatbot</h3>
            <button onClick={toggleChatbot} style={styles.closeBtn}>X</button>
          </div>
          <div style={styles.chatbotBody}>
            <div style={styles.questionsList}>
              {questions.map((question, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedQuestion(question)}
                  style={styles.questionItem}
                >
                  {question}
                </div>
              ))}
            </div>
            <div style={styles.answerBox}>
              {selectedQuestion && (
                <div
                  dangerouslySetInnerHTML={{ __html: getResponse(selectedQuestion) }}
                  style={styles.answerText}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  chatbotIcon: {
    width: '50px',
    height: '50px',
    backgroundColor: 'hsl(16, 100%, 50%)', // Neon orange
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  iconText: {
    color: 'hsl(30, 100%, 98%)', // Primary foreground color
    fontSize: '24px',
  },
  chatbotBox: {
    position: 'absolute',
    bottom: '70px',
    right: '0',
    width: '300px',
    backgroundColor: 'hsl(24, 100%, 97%)', // Card color
    border: '1px solid hsl(24, 100%, 85%)', // Border color
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  },
  chatbotHeader: {
    backgroundColor: 'hsl(16, 100%, 50%)', // Neon orange
    color: 'hsl(30, 100%, 98%)', // Primary foreground color
    padding: '10px',
    borderRadius: '0.5rem 0.5rem 0 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: 'hsl(30, 100%, 98%)', // Primary foreground color
    fontSize: '18px',
    cursor: 'pointer',
  },
  chatbotBody: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  questionsList: {
    marginBottom: '10px',
  },
  questionItem: {
    padding: '8px',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    marginBottom: '4px',
    backgroundColor: 'hsl(24, 100%, 97%)', // Card color
    border: '1px solid hsl(24, 100%, 85%)', // Border color
  },
  answerBox: {
    marginTop: '10px',
  },
  answerText: {
    padding: '8px',
    borderRadius: '0.5rem',
    backgroundColor: 'hsl(24, 100%, 97%)', // Card color
    border: '1px solid hsl(24, 100%, 85%)', // Border color
    color: 'hsl(20, 100%, 20%)', // Text color
  },
};

export default Chatbot;
