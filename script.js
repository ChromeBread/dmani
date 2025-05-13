document.addEventListener('DOMContentLoaded', () => {
    const drumScreen = document.querySelector('.drum-screen');
    const controlPanel = document.querySelector('.control-panel');

    // ドラムスクリーンのクリックイベント
    drumScreen.addEventListener('click', (event) => {
        const rect = drumScreen.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log(`Clicked at (${x}, ${y})`);
        // ここにドラムの判定ロジックを追加
        playSound('drum-hit'); // 音声ファイルが無い場合のフォールバック
    });

    // コントロールパネルのクリックイベント
    controlPanel.addEventListener('click', (event) => {
        const rect = controlPanel.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log(`Control Panel clicked at (${x}, ${y})`);
        // ここに設定の変更ロジックを追加
    });

    // 音声ファイルのフォールバック関数
    function playSound(soundName) {
        try {
            const audio = new Audio(`assets/sounds/${soundName}.mp3`);
            audio.play();
        } catch (error) {
            console.warn(`Sound file ${soundName}.mp3 not found. Using fallback.`);
            // フォールバックとして、ビープ音やその他の方法で音を再生
            const context = new AudioContext();
            const oscillator = context.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, context.currentTime);
            oscillator.connect(context.destination);
            oscillator.start();
            oscillator.stop(context.currentTime + 0.1);
        }
    }
});
