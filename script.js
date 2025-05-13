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
    });

    // コントロールパネルのクリックイベント
    controlPanel.addEventListener('click', (event) => {
        const rect = controlPanel.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        console.log(`Control Panel clicked at (${x}, ${y})`);
        // ここに設定の変更ロジックを追加
    });
});
