import shuffle from "../utils/shuffle";


export const fetchQuizQuestions = async (amount, difficulty, category) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question) => ({
    ...question,
    answers: shuffle([
      ...question.incorrect_answers,
      question.correct_answer
    ])
  }));
};

