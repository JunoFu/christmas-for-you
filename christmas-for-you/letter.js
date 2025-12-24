function openLetter() {
    document.getElementById("hint").classList.remove("hidden");
    document.getElementById("password-box").classList.remove("hidden");
}


function checkPassword() {
    const pwd = document.getElementById("password").value;

    if (pwd === "panda") {  
        document.getElementById("password-box").classList.add("hidden");
        document.getElementById("letter-content").classList.remove("hidden");
    } else {
        alert("under the christmas tree");
    }
}

function toggleMusic() {
    const music = document.getElementById("bgm");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

