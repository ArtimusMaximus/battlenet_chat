export default function setUserNamePrompt(socket, rejoining) {
    // let username;
    if (rejoining) {
        let username = prompt("You have been disconnected due to inactivity, please re-assign your bnet name.");
        if (username?.length) {
            socket.emit('set username', `${username}`);
            return username;
        } else if (!username?.length) {
            const defaultNames = ["TheMarine", "SlayerS`BoxeR`", "Zerg", "Protoss", "Terran", "Templar", "Zealot", "Dragoon", "BattleCruiser"];
            socket.emit('set username', `${defaultNames[Math.floor(Math.random() * defaultNames.length)]}`);
            return username;
        }
    } else {
        let username = prompt("Set your battle.net name:");
        if (username?.length) {
            socket.emit('set username', `${username}`);
            return username;
        } else if (!username?.length) {
            const defaultNames = ["TheMarine", "SlayerS`BoxeR`", "Zerg", "Protoss", "Terran", "Templar", "Zealot", "Dragoon", "BattleCruiser"];
            socket.emit('set username', `${defaultNames[Math.floor(Math.random() * defaultNames.length)]}`);
            return username;
        }
    }

}

