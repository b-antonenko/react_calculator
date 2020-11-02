import React from 'react';
import './numbers.css';

const Numbers = ({onClickNum, clear}) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    function remember (e) {
       onClickNum(e.target.textContent);
    }

    return (
        <div className='container numbers'>
            <div className='row'>
            {numbers.map((item) =>
                <button type="button" className="btn btn-secondary number" onClick={remember}>{item}</button>
            )}
                <button type="button" className="btn btn-warning btn-lg" id='clear' onClick={clear}>Clear</button>
            </div>
        </div>
    )
};

export default Numbers;