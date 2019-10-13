import React, { useState, useEffect } from 'react';
import Digitpad from './Digitpad';

function Digits() {
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [firstDigit, setFirstDigit] = useState(0);
  const [secondDigit, setSecondDigit] = useState(0);
  const [showDigits, setShowDigits] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  let numberList = [];

  useEffect(() => {
    let random = Math.floor(Math.random() * 20 + 1);
    setFirstDigit(random);
  }, []);

  useEffect(() => {
    let random = Math.floor(Math.random() * 30 + 1);
    setSecondDigit(random);
  }, []);

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      numberList.push(i);
    }
    setList(numberList);
  }, []);

  const handleClick = e => {
    const newNumber = [...list2, e];
    list2.push(e);
    setList2(newNumber);
    setShowDigits(true);
  };

  const handleDelete = index => {
    const newNumber = [...list2];
    newNumber.splice(index, 1);
    setList2(newNumber);
  };

  const checkAnswer = e => {
    let num2 = parseInt(list2[1]);
    let num1 = parseInt(list2[0]);
    let userSum = parseInt('' + num1 + num2);
    let answerSum = firstDigit + secondDigit;

    if (answerSum !== userSum) {
      setWrong(true);
    } else if (answerSum === userSum) {
      setCorrect(true);
    }
  };

  const nextQuestion = e => {
    document.location.reload(true);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm coll-2'>
          <section>
            <div>
              <h1>
                What is {firstDigit} + {secondDigit} ?{' '}
              </h1>
            </div>
          </section>

          <div>
            <hr />
            {correct ? (
              <div>
                <h1 className='correct'>Correct 🏅</h1>
              </div>
            ) : (
              ''
            )}
            {wrong ? <h1>Wrong...try again! 🤓</h1> : ''}
          </div>
        </div>

        <div className='col-sm coll-1'>
          <div>
            <img className='bee' src={require('./images/bee-1.png')} />
          </div>
          <h3 className='digit-display'>
            {showDigits
              ? list2.map((e, index) => <span key={index}>{e}</span>)
              : '0'}
          </h3>

          <Digitpad
            handleClick={handleClick}
            handleDelete={handleDelete}
            checkAnswer={checkAnswer}
            nextQuestion={nextQuestion}
          />
        </div>
      </div>
    </div>
  );
}

export default Digits;
