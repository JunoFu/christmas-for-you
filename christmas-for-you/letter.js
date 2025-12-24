function openLetter() {
    document.getElementById("hint").classList.remove("hidden");
    document.getElementById("password-box").classList.remove("hidden");
}


function checkPassword() {
    const pwd = document.getElementById("password").value;

    if (pwd === "070521") {  // 你可以改成你们的暗号
        document.getElementById("password-box").classList.add("hidden");
        document.getElementById("letter-content").classList.remove("hidden");
    } else {
        alert("try again");
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

