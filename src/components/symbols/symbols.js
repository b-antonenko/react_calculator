import React from 'react';
import './symbols.css'

const Symbols = ({onClickSym, countRes}) => {
    const symbol = ['+', '-', '*', '/'];
    function e(e) {
        onClickSym(e.target.textContent)
    }

    return(
        <div className="container">
            <div className="row">
            {symbol.map((item) =>
                <button type="button" className="btn btn-outline-dark btn-lg symb" onClick={e}>{item}</button>
            )}
                <button type="button" className="btn btn-outline-success btn-lg" id='count' onClick={countRes}>=</button>
            </div>
        </div>
    )
};

export default Symbols;