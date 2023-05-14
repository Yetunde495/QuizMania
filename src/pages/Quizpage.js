import React, { useState } from "react";

//types
import { styled } from "styled-components";
import { fetchQuizQuestions } from "../services/api";
import QuestionCard from "../components/QuestionCard";
import { Container } from "../globalStyles";
import { CATEGORIES } from "../categoryList";

//Quiz Header
const QuizHeader = () => {
  return (
    <QuizHeaderWrapper>
      <h1>Welcome to QuizMania!</h1>
      <p>
        Ready to test your knowledge? Choose your category, level of difficulty,
        and number of questions to get started.
      </p>
    </QuizHeaderWrapper>
  );
};

// global variables for quiz parameters
export let TOTAL_QUESTIONS = 5;
export let Difficulty = "easy";
export let Category = "0";

// form for quiz parameters
export const QuizForm = () => {
  return (
    <QuizFormWrapper>
      <form>
        <div className="field">
          <label htmlFor="category">Choose a Category:</label>
          <Select
            id="category"
            onChange={(e) => {
              Category = e.target.value;
            }}
          >
            {CATEGORIES.map((val, index) => (
              <option value={val.value} key={index}>
                {val.text}
              </option>
            ))}
          </Select>
        </div>

        <div className="field">
          <label htmlFor="difficulty">Select Difficulty Level:</label>
          <Select
            id="difficulty"
            onChange={(e) => {
              Difficulty = e.target.value;
            }}
          >
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </Select>
        </div>

        <div className="field">
          <label htmlFor="total-questions"> Number of Questions</label>
          <Select
            id="total-questions"
            onChange={(e) => {
              TOTAL_QUESTIONS = e.target.value;
            }}
          >
            {Array.from({ length: 10 }, (_, index) => (
              <option value={index + 1} key={index}>
                {index + 1}
              </option>
            ))}
          </Select>
        </div>
      </form>
    </QuizFormWrapper>
  );
};

//Quiz Component
const Quiz = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [error, setError] = useState(false);

  const startTrivia = async () => {
    setError(false);

    setLoading(true);
    setGameOver(false);
    try {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty,
        Category
      );
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
      setQuestions(newQuestions);
    } catch (err) {
      setLoading(false);
      if (err) {
        setError(true);
      }
    }
  };

  const checkAnswer = (e) => {
    if (!gameOver) {
      //users answer
      const answer = e.currentTarget.value;
      //check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      //add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      //save answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    //move on to the next question if not the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <Container>
      <QuizHeader />
      <QuizForm />
      <Wrapper>
        <>
          <div>
            <button
              className="start"
              onClick={() => {
                startTrivia();
              }}
            >
              {loading ? "Loading Questions" : "Start Quiz"}
            </button>
          </div>
          {questions.length > 0 ? (
            <div>
              {!gameOver ? (
                <div>
                  <p className="score">
                    Your Score: {score} / {TOTAL_QUESTIONS}
                  </p>
                  {error === true ? (
                    <p className="error">
                      An error occured while processing your request. Try again
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ) : null}
              {!loading && !gameOver && (
                <QuestionCard
                  questionNr={number + 1}
                  totalQuestions={TOTAL_QUESTIONS}
                  question={
                    questions.length > 0 ? questions[number].question : []
                  }
                  answers={
                    questions.length > 0 ? questions[number].answers : []
                  }
                  userAnswer={userAnswers ? userAnswers[number] : undefined}
                  callback={checkAnswer}
                />
              )}

              <div className="button-wrapper">
                {!gameOver && !loading ? (
                  <button className="restart" onClick={() => startTrivia()}>
                    Restart
                  </button>
                ) : (
                  ""
                )}
                {!gameOver &&
                !loading &&
                userAnswers.length === number + 1 &&
                number !== TOTAL_QUESTIONS - 1 ? (
                  <button className="next" onClick={nextQuestion}>
                    Next
                  </button>
                ) : null}
              </div>
            </div>
          ) : null}
        </>

        {error === true && questions.length === 0 ? (
          <p className="error">
            An error occured while processing your request. Try again
          </p>
        ) : (
          ""
        )}
      </Wrapper>
    </Container>
  );
};

// Styles for quiz components
export const Wrapper = styled.div`
  color: var(--main-text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3% 7%;
  background-color: var(--secondary-bg-color) .score {
    color: #333;
    font-weight: 600;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 20px 0;

    .restart {
      border: 1px solid #00112c;
    }
  }
  .start,
  .next {
    cursor: pointer;
    background: #6665dd;
    border: transparent;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    height: 40px;
  }
  .start {
    width: 200px;
  }
  .score {
    font-weight: 500;
    font-size: 16px;
  }
  .error {
    color: #ff0000;
    font-weight: 500;
  }
`;
const QuizHeaderWrapper = styled.div`
  text-align: center;
  padding: 1% 3%;
  color: var(--main-text-color);

  h1 {
    margin-bottom: 0;
    color: #6665dd;
  }
  p {
    margin-top: 0.3rem;
    font-weight: 500;
    font-size: 15px;
  }
`;
const QuizFormWrapper = styled.div`
margin: 1rem 0;
color: var(--main-text-color);

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .field {
  flex: 1 0 30%;
  margin: 0 1%;
  }
  label {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding:4%;
  .field {
    flex: 1 0 100%;
    margin-left: 4%
    padding: 2%;
    margin-bottom: 1rem;
   select {
    padding:2% 3%;
   } 
  }
}
}
`;

const Select = styled.select`
  padding: 5px 3px;
  width: 100%;
  height: 38px;
  border: 1px solid #cecece;
  border-radius: 5px;
  outline: transparent;
  margin-top: 0.5rem;

  :focus-visible {
    outline: transparent;
  }
`;

export default Quiz;
