export default function joiningChannelMessage(msg, messages, channelNameDiv) {
    channelNameDiv.innerText = msg;
    let li = document.createElement('li');
        li.className = "joinChannelColor";
        li.innerText = `Joining Channel: ${msg}`;
    messages.appendChild(li);
}