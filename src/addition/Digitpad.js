import React from 'react';

function Digitpad({ handleClick, handleDelete, checkAnswer, nextQuestion }) {
  return (
    <div>
      <div className='button-div'>
        <button
          className='nr'
          name='1'
          onClick={e => handleClick(e.target.name)}
        >
          1
        </button>
        <button
          className='nr'
          name='2'
          onClick={e => handleClick(e.target.name)}
        >
          2
        </button>
        <button
          className='nr'
          name='3'
          onClick={e => handleClick(e.target.name)}
        >
          3
        </button>
        <br />
        <button
          className='nr'
          name='4'
          onClick={e => handleClick(e.target.name)}
        >
          4
        </button>
        <button
          className='nr'
          name='5'
          onClick={e => handleClick(e.target.name)}
        >
          5
        </button>
        <button
          className='nr'
          name='6'
          onClick={e => handleClick(e.target.name)}
        >
          6
        </button>
        <br />
        <button
          className='nr'
          name='7'
          onClick={e => handleClick(e.target.name)}
        >
          7
        </button>
        <button
          className='nr'
          name='8'
          onClick={e => handleClick(e.target.name)}
        >
          8
        </button>
        <button
          className='nr'
          name='9'
          onClick={e => handleClick(e.target.name)}
        >
          9
        </button>
        <br />
        <button
          className='button-0'
          name='0'
          onClick={e => handleClick(e.target.name)}
        >
          0
        </button>
        <button className='button-c' onClick={index => handleDelete(index)}>
          C
        </button>
        <p></p>
        <button className='btn btn-success answer' onClick={checkAnswer}>
          Check answer
        </button>
        <button
          className='btn btn-success nextQuestion'
          onClick={() => nextQuestion()}
        >
          Next question
        </button>
      </div>
    </div>
  );
}

export default Digitpad;
