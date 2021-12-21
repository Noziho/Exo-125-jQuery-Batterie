const div1 = $('div[data-key=65]');
const div2 = $('div[data-key=83]');
const div3 = $('div[data-key=68]');
const div4 = $('div[data-key=70]');
const div5 = $('div[data-key=71]');
const div6 = $('div[data-key=72]');
const div7 = $('div[data-key=74]');
const div8 = $('div[data-key=75]');
const div9 = $('div[data-key=76]');

document.addEventListener('keypress', (e) => {
    switch (e.key) {
        case 'a':
            div1.toggleClass('playing');
            div9.removeClass('playing');
            let audioA = new Audio("sounds/clap.wav");
            audioA.play();
            break;

        case 's':
            div2.toggleClass('playing');
            div1.removeClass('playing');
            let audioB = new Audio("sounds/hihat.wav");
            audioB.play();
            break;

        case 'd':
            div3.toggleClass('playing');
            div2.removeClass('playing');
            let audioC = new Audio("sounds/kick.wav");
            audioC.play();
            break;

        case 'f':
            div4.toggleClass('playing');
            div3.removeClass('playing');
            let audioD = new Audio("sounds/openhat.wav");
            audioD.play();
            break;
        case 'g':
            div5.toggleClass('playing');
            div4.removeClass('playing');
            let audioE = new Audio("sounds/boom.wav");
            audioE.play();
            break;

        case 'h':
            div6.toggleClass('playing');
            div5.removeClass('playing');
            let audioF = new Audio("sounds/ride.wav");
            audioF.play();
            break;

        case 'j':
            div7.toggleClass('playing');
            div6.removeClass('playing');
            let audioG = new Audio("sounds/snare.wav");
            audioG.play();
            break;

        case 'k':
            div8.toggleClass('playing');
            div7.removeClass('playing');
            let audioH = new Audio("sounds/tom.wav");
            audioH.play();
            break;

        case 'l':
            div9.toggleClass('playing');
            div8.removeClass('playing');
            let audioI = new Audio("sounds/tink.wav");
            audioI.play();
            break;
    }
})