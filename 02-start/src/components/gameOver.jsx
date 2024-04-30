export default function GameOver({winner,onReset}) {
    return (
        <div id="game-over">
            <h1>Game Over</h1>
            {winner &&<p>The winner is {winner}!</p>}
            {!winner && <p>It's a draw!</p>}
            <button onClick={onReset}>Play Again</button>
        </div>
    )
}
