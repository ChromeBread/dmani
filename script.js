document.addEventListener('DOMContentLoaded', () => {
    const pads = document.querySelectorAll('.pad');
    pads.forEach(pad => {
        pad.addEventListener('click', () => {
            // 音を再生する関数を呼び出す
            playSound(pad.id);
            // ビジュアルフィードバック
            pad.classList.add('active');
            setTimeout(() => pad.classList.remove('active'), 100);
        });
    });
});

function playSound(id) {
    const audio = new Audio(`sounds/${id}.mp3`);
    audio.play();
}
