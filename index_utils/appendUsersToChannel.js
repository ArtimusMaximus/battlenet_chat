export default function appendUsersToChannel(arr, iconsArr, latencyArr) {
    let channelUserList = document.getElementById('channelUserName');
    channelUserList.innerHTML = "";
    arr.forEach((user) => {
        // console.log('user.inChannel \t', user.inChannel);
        // console.log('user.currentChannel \t', user);
        let li = document.createElement('li');

            li.className = "channelLI";
        let iconImg = document.createElement('img');
            iconImg.className = "iconImg"
            iconImg.style.paddingRight = "2px";
            iconImg.style.height = "14px";
            iconImg.style.width = "28px";
            // iconImg.height = 6;
            // iconImg.width = 32;
            iconImg.src = iconsArr[Math.floor(Math.random() * iconsArr.length)];
        let latencyImg = document.createElement('img');
            latencyImg.src = latencyArr[Math.floor(Math.random() * latencyArr.length)];
            latencyImg.className = "latencyImg";
            latencyImg.style.height = "14px";
            // latencyImg.width = 24;
        li.innerText = user;
        li.prepend(iconImg);
        li.appendChild(latencyImg);

        if (li.querySelector('img').src.includes('/channel_icons/gavel.jpg')) {
            channelUserList.insertBefore(li, channelUserList.firstChild)
        } else {
            channelUserList.appendChild(li);
        }
    });
}
