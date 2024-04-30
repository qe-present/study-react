import {useState} from "react";

export default function GameBoard({onSelectSquare,board}) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playSymbol, cellIndex) => (
                            <li key={cellIndex} className="cell">
                                <button onClick={() => onSelectSquare(rowIndex, cellIndex)}
                                        disabled={playSymbol !== null}
                                >{playSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}

        </ol>

    )
}
