import React, {useState, useEffect} from 'react';
import './App.css';

const winningPatttern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function TICTACTOE(){

    const [ticArray, setTicArray] = useState(["","","","","","","","",""]);
    const [player, setPlayer] = useState("X");
    const [win, setWin] = useState("");

    const addSquare = (i) => {
        if (win === "") {
            if (ticArray[i] === "") {
                if (player === 'X') {
                    ticArray[i] = 'X';
                    setTicArray([...ticArray]);
                    setPlayer('O');
                } else {
                    ticArray[i] = 'O';
                    setTicArray([...ticArray]);
                    setPlayer('X');
                }
            }
        } else {
            alert(`Player ${win} won, please start a new game`);
        }
    }

    const checkWin = (ticArray) => {
        for (let i = 0; i < winningPatttern.length; i++) {
            const ar = winningPatttern[i];
            if(ticArray[ar[0]] !== "" && ticArray[ar[1]] !== "" && ticArray[ar[2]] !== ""){
                if(ticArray[ar[0]] === ticArray[ar[1]] && ticArray[ar[0]] === ticArray[ar[2]] ){
                    setWin(ticArray[ar[0]]);
                    break;
                }
            }
        };
    }

    const onReset = ()=>{
        setTicArray(["","","","","","","","",""]);
        setWin("");
        setPlayer("X");
    }

    useEffect(()=>{
        checkWin(ticArray);
    },[ticArray]);

    useEffect(()=>{
        if(win !== ""){
            alert(`Player ${win} won`);
        }
    },[win]);

    return(
       <div className='mainContainer'>
        <div className='board'>
            <div className='squaresRow'>
                <div className='squaresBox' onClick={()=>addSquare(0)}>{ticArray[0]}</div>
                <div className='squaresBox' onClick={()=>addSquare(1)}>{ticArray[1]}</div>
                <div className='squaresBox' onClick={()=>addSquare(2)}>{ticArray[2]}</div>
            </div>
            <div className='squaresRow'>
                <div className='squaresBox' onClick={()=>addSquare(3)}>{ticArray[3]}</div>
                <div className='squaresBox' onClick={()=>addSquare(4)}>{ticArray[4]}</div>
                <div className='squaresBox' onClick={()=>addSquare(5)}>{ticArray[5]}</div>
            </div>
            <div className='squaresRow'>
                <div className='squaresBox' onClick={()=>addSquare(6)}>{ticArray[6]}</div>
                <div className='squaresBox' onClick={()=>addSquare(7)}>{ticArray[7]}</div>
                <div className='squaresBox' onClick={()=>addSquare(8)}>{ticArray[8]}</div>
            </div>
        </div>
        <button className='newGameButton' onClick={onReset}>New Game</button>
        </div>
    )
}

export default TICTACTOE;