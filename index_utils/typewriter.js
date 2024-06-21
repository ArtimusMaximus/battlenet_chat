
    async function typeWriter(el, speed) {
        let letters = el.innerHTML.split("");
        el.innerHTML = "";
        for (const letter of letters) {
            await new Promise(res => setTimeout(res, speed));
            el.innerHTML += letter;
        }
    }

    // typeWriter(document.getElementById("hOne"), 55);
