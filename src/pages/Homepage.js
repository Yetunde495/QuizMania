import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// import Button from './Button';

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5%;
  color: var(--main-text-color);

  .hero-text {
    display: flex;
    flex-direction:column;
    justify-content: left;
    align-items: left;
    text-align:center;
    gap:0.7rem;
    padding: 2%;
  }
  button {
    width: 150px;
    background-color: #6665dd;
    padding:15px 25px;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column;
    padding: 25px 0;

    .hero-text {
      justify-content: center;
    }
  }
`;
const Column = styled.div`
  width: 50%;
  padding: 15px 5px;
  text-align: center;

  img {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding: 25px 15px;
    width: 100%;
    order: 2;

    &:nth-child(2) {
      order: 1;
    }
  }
`;

const Heading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 1.3;
  text-align: left;
  strong {
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;





export const Homepage = () => {
  const navigate = useNavigate()
  return (
    <Banner>
    <Column>
    <div className="hero-text">
    <Heading>
       Unlock Your Knowledge! Take Our  <strong> Quiz</strong> and Discover How Smart You Really Are
       
      </Heading>

      <button onClick={() => navigate('/quiz')}>Start Quiz</button>
    </div>
      
    </Column>
    <Column>
      <img
        src={require('../assets/images/quiz-img.png')}
        alt="Quiz"
      />
    </Column>
  </Banner>
  );
};
