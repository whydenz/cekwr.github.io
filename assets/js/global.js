function welcomeMsg() {
    const welcomeMsgEl = document.querySelector("#welcomeMsg");
    let array = 0;

    
    const wAgw = `<a href="https://api.whatsapp.com/send?phone=6282177344150" target="_blank">Rayden</a>`;
    
    
    const msg3 = `<p class="animation mb-0 text-truncate">Ready JOKI WR - Hide history pertandingan - Create akun advance server</p>`;
    const msg4 = `<p class="animation mb-0 text-truncate">Chat WA ${wAgw}</p>`;
    const msg5 = `<p class="animation mb-0 text-truncate">Selamat menggunakan tools ini ;)</p>`;

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
