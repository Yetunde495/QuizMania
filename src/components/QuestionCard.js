import React from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
  max-width: 900px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1rem;
    font-weight: 500;
    color: #000000;
  }
`;

const ButtonWrapper = styled.div`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    padding: 0.25rem 0.75rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? "#7fd91e" : !correct && userClicked ? "#ff5656" : "#f3f4f5"};
    border: transparent;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #3a3a36;
  }
`;

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <QuestionWrapper>
    {questionNr === 0 ? null : (
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
    )}
    <p>{question}</p>
    <div>
      {answers.length === 0
        ? null
        : answers.map((answer) => (
            <ButtonWrapper
              key={answer}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span>{answer}</span>
              </button>
            </ButtonWrapper>
          ))}
    </div>
  </QuestionWrapper>
);

export default QuestionCard;
