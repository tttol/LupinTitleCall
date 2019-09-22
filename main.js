let audioElem;
const BGM = "./mp3/bgm.mp3";
const KASYA = "./mp3/kasya.mp3";

// 200ミリ秒待つ
const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 200));
}

// mp3ファイルの音声を再生
const playSound = (filename) => { 
    audioElem = new Audio();
    audioElem.src = filename;
    audioElem.play();
}

const showString = async () => {
    const elm = document.getElementById("show");
    const str = document.getElementById("strValue").value;

    elm.style.textAlign = "center";
    elm.style.fontSize = "200px";

    // 音とともに一文字ずつ表示
    for(let i = 0; i < str.length; i++){
        elm.innerHTML = "";
        elm.innerHTML = str[i];
        playSound(KASYA);
        
        // 200ミリ秒待つ
        await sleep();
    }
    // 全文表示
    elm.innerHTML = str;
    elm.style.textAlign = "left";
    elm.style.fontSize = "50px";
    playSound(BGM)
}

