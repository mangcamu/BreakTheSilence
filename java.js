

function getBotResponse(userInput) {
    const responses = {
        "hello": "Hello! Welcome to our Emotional Abuse Prevention Chatbot. How can we assist you today?",
        "how are you": "I'm just a bot, but thanks for asking!",
        "help": "I'm here to provide information and support on emotional abuse prevention. If you have any questions or need resources, feel free to ask.",
        "resources": "Here are some helpful resources on emotional abuse prevention:\n1. National Domestic Violence Hotline: 1-800-799-SAFE (7233)\n2. Love Is Respect: 1-866-331-9474\n3. Your local domestic violence or crisis center",
        "signs of emotional abuse": "Recognizing signs of emotional abuse can be challenging, but some common signs include constant criticism, manipulation, gaslighting, and isolation from friends and family. If you're unsure, consider talking to a counselor or seeking support from a domestic violence hotline.",
        "what to do if someone is experiencing emotional abuse": "If you suspect someone is experiencing emotional abuse, it's important to offer your support and listen without judgment. Encourage them to seek professional help from a counselor or a domestic violence hotline. Remember, safety is the top priority, so if you believe the situation is dangerous, consider contacting local authorities.",
        "feeling overwhelmed": "I'm really sorry to hear that you're feeling overwhelmed. Remember, you don't have to go through this alone. Reach out to a friend, family member, or a counselor who can provide support and understanding. Prioritize self-care and consider talking to a professional who can help you navigate through these emotions.",
        // Add more key-value pairs for additional user input and bot responses.
    };

    userInput = userInput.toLowerCase().trim();
    return responses[userInput] || "I'm sorry, I didn't understand that. Can you please rephrase?";
}

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        const chatBody = document.getElementById("chat-body");
        const userMessage = document.createElement("div");
        userMessage.classList.add("chat-message", "user-message");
        userMessage.innerHTML = `<p>${userInput}</p>`;
        chatBody.appendChild(userMessage);
        document.getElementById("user-input").value = "";

        // Get bot response
        setTimeout(() => {
            const botMessage = document.createElement("div");
            botMessage.classList.add("chat-message", "bot-message");
            const botResponse = getBotResponse(userInput);
            botMessage.innerHTML = `<p>${botResponse}</p>`;
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 500);
    }
}
