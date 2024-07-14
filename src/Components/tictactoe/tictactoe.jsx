import React from 'react'
import  './tictactoe.css'


const tictactoe = () => {
    return (
        <div className='container'>
            <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
            <div className="board">

            </div>
            <button className='reset'></button>
        </div>
    )
}

export default tictactoe