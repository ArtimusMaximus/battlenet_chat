export default function createAppendMessage(msg, messages) {
    let userSpan = document.createElement('span');
        userSpan.className = "userColor";
        userSpan.innerText = `\<${msg.name}\>`;
    let msgSpan = document.createElement('span');
        msgSpan.className = "msgColor";
        msgSpan.innerText = msg.value;
    let li = document.createElement('li');
        // li.innerText = msg;
        // li.innerText = `${msg.name}: ${msg.value}`;
        li.appendChild(userSpan);
        li.appendChild(msgSpan);
        messages.appendChild(li);
        document.getElementById("chatOutputContainer").scrollTo(0, document.body.scrollHeight)
}