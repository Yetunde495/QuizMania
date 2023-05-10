import { render, screen, act, fireEvent } from "@testing-library/react";
import Quiz, { Category, Difficulty, QuizForm, TOTAL_QUESTIONS } from "../pages/Quizpage";

//test that QuizForm component renders correctly and all the required fields are present.
test("QuizForm renders correctly", () => {
    render(<div><QuizForm /></div>);
    expect(screen.getByLabelText(/Choose a Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Difficulty Level/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Questions/i)).toBeInTheDocument();
  });
  

//Test that user inputs are saved correctly in the global variables when they select values from the form.
  test("User inputs are saved correctly", () => {
    render(<div><QuizForm /></div>);
    fireEvent.change(screen.getByLabelText(/Choose a Category/i), { target: { value: "9" } });
    fireEvent.change(screen.getByLabelText(/Select Difficulty Level/i), { target: { value: "hard" } });
    fireEvent.change(screen.getByLabelText(/Number of Questions/i), { target: { value: "10" } });
    expect(Category).toBe("9");
    expect(Difficulty).toBe("hard");
    expect(TOTAL_QUESTIONS).toBe("10");
  });
  



 // Test that checkAnswer function updates the score and userAnswers state variables correctly when called.
//   test("checkAnswer function updates the score and userAnswers correctly", async () => {
//     render(<div><Quiz /></div>);
//     await act(async () => {
//       fireEvent.click(screen.getByRole("button", { name: /Start Quiz/i }));
//     });
//     await act(async () => {
//       fireEvent.click(screen.getByText(questions[0].correct_answer));
//     });
//     expect(score).toBe(1);
//     expect(userAnswers.length).toBe(1);
//     expect(userAnswers[0].answer).toBe(questions[0].correct_answer);
//     expect(userAnswers[0].correct).toBe(true);
//   });
  

//Test that nextQuestion function updates the state variables correctly when called.
//   test("nextQuestion function updates the state variables correctly", async () => {
//     render(<div><Quiz /></div>);
//     await act(async () => {
//       fireEvent.click(screen.getByRole("button", { name: /Start Quiz/i }));
//     });
//     await act(async () => {
//       fireEvent.click(screen.getByText(questions[0].correct_answer));
//     });
//     await act(async () => {
//       fireEvent.click(screen.getByText(/Next/i));
//     });
//     expect(number).toBe(1);
//   });
  
