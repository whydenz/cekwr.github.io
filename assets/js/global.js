function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    
    const takapediaWA = `<a href="https://api.whatsapp.com/send?phone=6282177344150" target="_blank">Rayden</a>`;
    const linkTiktokGua = `<a href="https://tiktok.com/@gw.rayden" target="_blank">Tiktok</a>`

    
    const msg3 = `<p class="animation mb-0 text-truncate">Ready JOKI WR </p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Follow ${linkTiktokGua} gw ya</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Jangan lupa follow sosmed gua dibawah ya</p>`;

    let arrayEl = [msg3, msg4, msg5];
    let arrayMax = 5;
    setInterval(() => {
        welcomeMsgEl.innerHTML = arrayEl[array];

        array++;
        if (array >= arrayMax) {
            array = 0;
        }
    }, 4000);
}
