
export const chessConfig = {
    chessTableSelector: '.chess-table',
    chessPieceBoxSelector: '.piece-box',  // стили дивов, в которые вставятся spanы с наименованиями позиций в рендеринге
    chessPieceSelector: '.piece',
    blackWinsSelector: '.chess-message .black-wins',
    whiteWinsSelector: '.chess-message .white-wins',
    whitePlaysDown: false,  // false - белые сверху и true - белые снизу
    useInitialGame: false
}

// делаем глобальный доступ к объекту
window.chessConfig = chessConfig