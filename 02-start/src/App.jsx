import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import LOG from './components/Log.jsx';
import {useState} from "react";
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import GameOver from './components/gameOver.jsx'
const PLAYRERS={
    X:'Player 1',
    O:'Player 2'
}
let INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveGameBoard(gameTurns) {
    let gameBoard=[...INITIAL_GAME_BOARD.map(array=>[...array])]
    for(let turn of gameTurns){
        const {square,player} =turn
        const {row,col} =square
        gameBoard[row][col]=player
    }
    return gameBoard
}

function deriveActivePlayer(gameTurns) {
    let nowPlayer = 'X';
    if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
        nowPlayer = 'O'
    }

    return nowPlayer
}
function deriveWinner(gameBoard,players) {
    let winner;
    for(let combination of WINNING_COMBINATIONS ){
        const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
        const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
        const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
        if(firstSquareSymbol&& firstSquareSymbol===secondSquareSymbol&&secondSquareSymbol===thirdSquareSymbol){
            winner=players[firstSquareSymbol]
            break
        }
    }
    return winner? winner : null
}

function App() {
    const [gameTurns, setGameTurns] = useState([])
    const [players, setPlayers] =useState(
        PLAYRERS
    )

    const activePlayer = deriveActivePlayer(gameTurns)
    const gameBoard = deriveGameBoard(gameTurns)

    let winner = deriveWinner(gameBoard,players)
    const hasDraw=gameTurns.length===9&&!winner;

    function handleGameOver() {
        setGameTurns([])
    }
    function handlePlayerChange(symbol, name) {
        setPlayers(
            prePlayers => {
                return {
                    ...prePlayers,
                    [symbol]: name
                }
            }
        )
    }
    function handSelectSquare(rowIndex, colIndex) {
        setGameTurns(preTurn => {
            return [
                {
                    square: {row: rowIndex, col: colIndex},
                    player: deriveActivePlayer(preTurn)
                },
                ...preTurn]
        });
    }

    return (
        <main>

            <div id="game-container">
                <ol id="players" className="highlight-player">
                    <Player name={PLAYRERS.X}
                            symbol="X"
                            isActive={activePlayer === 'X'} onNameChange={handlePlayerChange}></Player>
                    <Player name={PLAYRERS.O}
                            symbol="O" isActive={activePlayer === 'O'}></Player>
                </ol>
                {(winner || hasDraw) && <GameOver winner={winner} onReset={handleGameOver}/>}
                <GameBoard onSelectSquare={handSelectSquare} board={gameBoard}></GameBoard>
            </div>
            <LOG turns={gameTurns}></LOG>
        </main>
    )
}

export default App
