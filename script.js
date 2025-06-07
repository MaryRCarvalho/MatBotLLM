async function getResposta(chatBox, messageText) {

    console.log("1");
        
    await fetch("http://127.0.0.1:5000/enviaMensagem",{
        method: "POST",
        body: JSON.stringify({Mensagem:messageText}),
        headers: {"Content-Type":"application/json"}
    }).then((response) => {
        console.log("2");
        if (response.ok) {
            console.log("4");
            return response.json();
        } else {
            console.log("3");
            throw new Error("Erro na resposta do servidor");
        }
    }).then((data) => {
                const resposta = data.resultado;
        let newResponse = document.createElement("div");
        newResponse.classList.add("message", "received");
        newResponse.innerHTML = `<p>${resposta}</p><span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
        chatBox.appendChild(newResponse);

    }).catch((error) => {
            console.error("Erro:", error);
    });
}

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const messageText = inputField.value;
    
    if (messageText.trim() === "") return;

    const chatBox = document.querySelector(".chat-box");
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", "sent");
    newMessage.innerHTML = `<p>${messageText}</p><span class="timestamp">${new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>`;
    chatBox.appendChild(newMessage);

    getResposta(chatBox, messageText);
    
    inputField.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
}
