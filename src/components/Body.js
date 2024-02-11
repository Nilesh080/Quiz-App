import { useEffect, useState } from "react";

const val = JSON.parse(localStorage.getItem('MY_CURRENT_QUESTION'));
const s = JSON.parse(localStorage.getItem('MY_CURRENT_SCORE'));
const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "Kolkata", isCorrect: false },
        { id: 2, text: "Lucknow", isCorrect: false },
        { id: 3, text: "Delhi", isCorrect: true },
      ],
    },
    {
      text: "What is the longest river in India?",
      options: [
        { id: 0, text: "River Ganga", isCorrect: true },
        { id: 1, text: "River Jalangi", isCorrect: false },
        { id: 2, text: "River Brahmaputra", isCorrect: false },
        { id: 3, text: "River Damodar", isCorrect: false },
      ],
    },
    {
      text: "What is the least populous state in India?",
      options: [
        { id: 0, text: "Goa", isCorrect: false },
        { id: 1, text: "Kerala", isCorrect: false },
        { id: 2, text: "Sikkim", isCorrect: true },
        { id: 3, text: "Assam", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the largest country in the world by area?",
      options: [
        { id: 0, text: "India", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "USA", isCorrect: false },
        { id: 3, text: "China", isCorrect: false },
      ],
    },
    {
      text: "What is the name of the hottest planet in the solar system?",
      options: [
        { id: 0, text: "Venus", isCorrect: true },
        { id: 1, text: "Jupiter", isCorrect: false },
        { id: 2, text: "Mars", isCorrect: false },
        { id: 3, text: "Earth", isCorrect: false },
      ],
    },
  ];
  
const Body = () => {
  

  const [score, setScore] = useState(s);
  const [currentQuestion, setCurrentQuestion] = useState(val);

  const handleOptionClick = (result) => {
    if (result) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  useEffect(() => {
    localStorage.setItem('MY_CURRENT_QUESTION', JSON.stringify(currentQuestion));
  }, [currentQuestion]);

  useEffect(() => {
    localStorage.setItem('MY_CURRENT_SCORE', JSON.stringify(score));
  }, [score]);

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex-col items-center justify-center">
      <div className="mb-6 py-20 text-center text-3xl font-bold text-white">Welcome to Quick Quiz</div>
      <div className="w-[600px] h-[460px] mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6 animate-fadeIn">
        
        {currentQuestion === 5 ? (
          <>
            <h1 className="text-center pt-18 text-5xl font-bold mb-4 text-purple-600">Final Results</h1>
            <p className="font-bold mb-2 text-center text-orange-600">{score} out of {questions.length} correct - ({(score * 100) / questions.length}%)</p>
            <div className="text-lg font-semibold text-gray-800 mb-4">
              <h2 className="text-center text-3xl font-bold mb-2">Correct Answers</h2>
              <ul className="list-disc pl-6">
                {questions.map((question, index) => (
                  <li key={index} className="mb-2">
                    <span className="text-purple-600">{question.text}</span>:{" "}
                    {question.options.find(option => option.isCorrect).text}
                  </li>
                ))}
              </ul>
            </div>
            <button onClick={handleRestart} className="block mx-auto px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50">Restart 💯</button>
          </>
        ) : (
          <>
            <h1 className="text-center text-3xl font-bold mb-6 text-purple-600">Question {currentQuestion + 1}</h1>
            <div className="text-gray-800 text-lg mb-4">
              <p className="mb-2 font-semibold">{questions[currentQuestion].text}</p>
              <ul className="list-disc pl-6">
                {questions[currentQuestion].options.map((option) => (
                  <li
                    key={option.id}
                    onClick={() => handleOptionClick(option.isCorrect)}
                    className="mb-2 cursor-pointer hover:bg-gray-200 px-4 py-2 rounded-md"
                  >
                    {option.text}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Body;
