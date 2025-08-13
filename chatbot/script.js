// Define conversation flow
const chatFlow = {
  start: {
    message: "Hi! Choose a question below:",
    options: [
      "What is this website about?",
      "How do the cards work?",
      "What did you use JavaScript for?"
    ]
  },

  "What is this website about?": {
    message: "This website is a digital trading card experience. You can explore gaming-style cards and interact with them.",
    options: [
      "Who is this website for?",
      "What inspired you to make it?"
    ]
  },

  "Who is this website for?": {
    message: "It's designed for gamers and collectors who enjoy exploring interactive digital content.",
    options: ["Anything else you need help with?"]
  },

  "What inspired you to make it?": {
    message: "I was inspired by trading card games like Pokémon and Yu-Gi-Oh!",
    options: ["Anything else you need help with?"]
  },

  "How do the cards work?": {
    message: "Each card has hidden stats that appear when clicked. Some cards expand or animate using JavaScript and CSS.",
    options: [
      "Can you flip the cards?",
      "Are the cards random?"
    ]
  },

  "Can you flip the cards?": {
    message: "Yes! I used JavaScript events to make the cards flip when clicked.",
    options: ["Anything else you need help with?"]
  },

  "Are the cards random?": {
    message: "No, they’re hand-made with unique stats and styles for each one.",
    options: ["Anything else you need help with?"]
  },

  "What did you use JavaScript for?": {
    message: "I used JavaScript for interactivity — like flipping cards, animating elements, and responding to user clicks.",
    options: [
      "What events did you use?",
      "Did you use functions?"
    ]
  },

  "What events did you use?": {
    message: "I used onclick and addEventListener to make elements respond to user actions.",
    options: ["Anything else you need help with?"]
  },

  "Did you use functions?": {
    message: "Yes, I used functions to organize the code and make it reusable.",
    options: ["Anything else you need help with?"]
  },

  "Anything else you need help with?": {
    message: "No problem! Choose another question below.",
    options: [
      "What is this website about?",
      "How do the cards work?",
      "What did you use JavaScript for?"
    ]
  }
};

// Start state
let currentQuestion = "start";

// Toggle the chat open/closed
function toggleChat() {
  const chat = document.getElementById("chatContainer");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";

  // Reset when opened
  if (chat.style.display === "flex") {
    document.getElementById("chatBox").innerHTML = ""; // Clear previous messages
    showMessage("bot", chatFlow.start.message);
    showOptions(chatFlow.start.options);
    currentQuestion = "start";
  }
}

// Handle sending a question
function sendQuestion(question) {
  showMessage("user", question);

  if (chatFlow[question]) {
    const response = chatFlow[question];
    showMessage("bot", response.message);
    showOptions(response.options);
    currentQuestion = question;
  } else {
    showMessage("bot", "Sorry, I don't understand that.");
    showOptions(chatFlow.start.options);
  }
}

// Show a message in the chat box
function showMessage(type, text) {
  const chatBox = document.getElementById("chatBox");
  const message = document.createElement("p");
  message.className = type;
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Show clickable options based on current step
function showOptions(options) {
  const optionsContainer = document.querySelector(".chat-options");
  optionsContainer.innerHTML = ""; // Clear previous buttons

  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => sendQuestion(opt);
    optionsContainer.appendChild(btn);
  });
}

