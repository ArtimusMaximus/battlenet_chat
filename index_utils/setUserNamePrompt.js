export default function setUserNamePrompt(socket) {
    let username = prompt("Set your battle.net name:");
    if (username) {
        socket.emit('set username', `${username}`);
    } else if (!username) {
        const defaultNames = ["TheMarine", "SlayerS`BoxeR`", "Zerg", "Protoss", "Terran", "Templar", "Zealot", "Dragoon", "BattleCruiser"];
        socket.emit('set username', `${defaultNames[Math.floor(Math.random() * defaultNames.length)]}`);
    }
    return username;
}

