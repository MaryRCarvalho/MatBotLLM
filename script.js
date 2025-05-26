function sendMessage() {
    const inputField = document.getElementById("messageInput");
    const messageText = inputField.value;
    
    if (messageText.trim() === "") return;

    const chatBox = document.querySelector(".chat-box");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", "sent");
    newMessage.innerHTML = `<p>${messageText}</p><span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
    
    chatBox.appendChild(newMessage);
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
}