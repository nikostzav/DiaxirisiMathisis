
import { useEffect, useState } from "react";
import Navbar from './Components/Navbar';
import QuestionsContainer from './Components/QuestionsContainer';
import questions from './Questions';
import Finals from "./Components/Finals";

function App() {
  const [show, setShow] = useState(true);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [numberOfQuestion,setNumberOfQuestion] = useState(1);
  const [score,setScore] = useState([]);
  //timer
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isQuizActive, setIsQuizActive] = useState(true); 
   useEffect(() => {
    if (timeLeft === 0) {
      setIsQuizActive(false);
      
      getScore();
      console.log("Time's up!");
      return;
    }

    if (isQuizActive) {
      const intervalId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);

     
      return () => clearInterval(intervalId);
    }
  }, [timeLeft, isQuizActive]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  

  const [finished,setFinshed] = useState(false)

  const increment = () => {
    if(numberOfQuestion<6){
      localStorage.setItem('question',numberOfQuestion);
    }
  }

  const getScore = () => {
    const retrievedScores = [];
      setFinshed(true)
    for (let i = 0; i < 6; i++) {
      const value = localStorage.getItem('question' +i);
      console.log(`Retrieved value for key questions${i}:`, value);
      if (value) {
        retrievedScores.push(value);
      }
    }
    localStorage.setItem('score',retrievedScores);

    setScore(retrievedScores);

    console.log(retrievedScores);
  }

  useEffect(() => {
    console.log(numberOfQuestion)
    if(numberOfQuestion<7)
      increment(localStorage.setItem('question',numberOfQuestion));
    else{
      const retrievedScores = [];
      setFinshed(true)
    for (let i = 0; i < 6; i++) {
      const value = localStorage.getItem('question' +i);
      console.log(`Retrieved value for key questions${i}:`, value);
      if (value) {
        retrievedScores.push(value);
      }
    }
    localStorage.setItem('score',retrievedScores);
    
    setScore(retrievedScores);

    console.log(retrievedScores);
    }
  },[numberOfQuestion,isQuizActive])


  
  useEffect(() => {
    const generateRandomNumbers = () => {
      const numbers = new Set();
      while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 18); // 1-18 range
        numbers.add(randomNum);
      }
      console.log(numbers)
      return Array.from(numbers);
    };
    console.log('CLEARING LOCAL STORAGE')
    const numbers = generateRandomNumbers();
    setRandomNumbers(numbers);
    localStorage.setItem('question',1);
    localStorage.setItem('score',[0,0,0,0,0,0]);
    localStorage.setItem('question1',0);
    localStorage.setItem('question2',0);
    localStorage.setItem('question3',0);
    localStorage.setItem('question4',0);
    localStorage.setItem('question5',0);
    localStorage.setItem('question6',0);
  }, []);

  
  const handleClick = () => {
    setShow(false);
    const selectedQuestions = randomNumbers.map((index) => questions[index]);
    setQuestionsArray(selectedQuestions);
    setCurrentQuestion(selectedQuestions[0]); 
  };

 
  const removeItem = (id) => {
    const itemToRemove = questionsArray.find(item => item.id === id);
    if (itemToRemove) {
      const updatedArray = questionsArray.filter(item => item.id !== id);
      setQuestionsArray(updatedArray);
      setCurrentQuestion(itemToRemove);
    }
  };

  
  const handleSubmit = () => {
    const lastQuestion = questionsArray[questionsArray.length - 1];
    if (lastQuestion) {
      removeItem(lastQuestion.id);
    }
    const curr = numberOfQuestion+1;
    setNumberOfQuestion(curr);
    increment(localStorage.getItem('question'));
  };

  const handleSkip = () => {
    console.log('Skipping question', currentQuestion);
  };

  const containerStyle = `container vh-100 d-flex justify-content-center flex-column gap-3 ${show ? 'align-items-center' : ''}`;

  return (
    <div className="App bg-warning mx-2" style={{ width: '99vw', height: '100vh', overflowY: 'hidden' }}>
      <Navbar />
      <div className={containerStyle}>
        {show || finished ? null : (
          <div className='d-flex justify-content-center'>
            <div className="d-flex flex-column align-items-center">
      <h1 className="h1">Quiz Timer</h1>
      <p className="fs-4">Time Left: {formatTime(timeLeft)}</p>
      { !isQuizActive && <p>Time's up!</p> }
      
    </div>
          </div>
        )}

        {show ? (
          <button className="reset anim-bg-gradient" onClick={handleClick} style={{ scale: '1' }}>Start test</button>
        ) : !finished ? (

          <div className='container d-flex align-items-center'>
            <QuestionsContainer question={currentQuestion} />
            <div className='mx-2 d-flex justify-content-center flex-column gap-3 align-items-center border border-black bg-light rounded' style={{ width: '200px', height: '100%' }}>
              {/* <div className='btn btn-danger p-2 w-75' onClick={handleSkip}>Skip</div> */}
              <div className='btn btn-success p-2 w-75' onClick={handleSubmit}>Submit</div>
            </div>
          </div>

        ) : 
          <div className="container-fluid d-flex justify-content-center" style={{height:'50%'}}><Finals /></div>
        }
        
        {show || finished ?  null : (
          <div className='d-flex justify-content-center'>
            <div className='bot-bar border rounded'>asd</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
// import { useEffect, useState } from "react";
// import Navbar from './Components/Navbar';
// import QuestionsContainer from './Components/QuestionsContainer';
// import questions from './Questions';
// import Finals from "./Components/Finals";

// function App() {
//   const [show, setShow] = useState(true);
//   const [questionsArray, setQuestionsArray] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0); // Time left for the current question
//   const [isQuizActive, setIsQuizActive] = useState(false);
//   const [finished, setFinished] = useState(false);
//   const [lockedQuestions, setLockedQuestions] = useState(new Set());

//   // Set up the timer for the current question
//   useEffect(() => {
//     if (!isQuizActive) return;

//     if (timeLeft === 0) {
//       lockCurrentQuestion();
//       return;
//     }

//     const intervalId = setInterval(() => {
//       setTimeLeft(prevTime => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [timeLeft, isQuizActive]);

//   // Format time as mm:ss
//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
//   };

//   // Lock the current question
//   const lockCurrentQuestion = () => {
//     setLockedQuestions(prev => new Set(prev).add(currentQuestionIndex));
//     setCurrentQuestionIndex(prev => {
//       const nextIndex = prev + 1;
//       if (nextIndex < questionsArray.length) {
//         startNewQuestion(nextIndex);
//       } else {
//         endQuiz();
//       }
//       return nextIndex;
//     });
//   };

//   // Initialize a new question
//   const startNewQuestion = (index) => {
//     setTimeLeft(80); // Reset timer for new question
//     setIsQuizActive(true);
//   };

//   // End the quiz
//   const endQuiz = () => {
//     setFinished(true);
//     setIsQuizActive(false);
//     getScore();
//   };

//   // Handle clicking on Start Test button
//   const handleClick = () => {
//     setShow(false);
//     const selectedQuestions = randomNumbers.map(index => questions[index]);
//     setQuestionsArray(selectedQuestions);
//     startNewQuestion(0);
//   };

//   // Handle Submit action
//   const handleSubmit = () => {
//     lockCurrentQuestion();
//   };

//   // Handle Skip action
//   const handleSkip = () => {
//     lockCurrentQuestion();
//   };

//   // Generate random numbers on initial load
//   useEffect(() => {
//     const generateRandomNumbers = () => {
//       const numbers = new Set();
//       while (numbers.size < 6) {
//         const randomNum = Math.floor(Math.random() * 16); // 1-15 range
//         numbers.add(randomNum);
//       }
//       return Array.from(numbers);
//     };

//     const numbers = generateRandomNumbers();
//     setRandomNumbers(numbers);
//   }, []);

//   // End quiz and calculate score
//   const getScore = () => {
//     const retrievedScores = [];
//     for (let i = 0; i < questionsArray.length; i++) {
//       const value = localStorage.getItem('question' + i);
//       if (value) {
//         retrievedScores.push(value);
//       }
//     }
//     localStorage.setItem('score', JSON.stringify(retrievedScores));
//     setScore(retrievedScores);
//   };

//   const containerStyle = `container vh-100 d-flex justify-content-center flex-column gap-3 ${show ? 'align-items-center' : ''}`;

//   return (
//     <div className="App bg-warning mx-2" style={{ width: '99vw', height: '100vh', overflowY: 'hidden' }}>
//       <Navbar />
//       <div className={containerStyle}>
//         {show || finished ? null : (
//           <div className='d-flex justify-content-center'>
//             <div>
//               <h1>Quiz Timer</h1>
//               <p>Time Left: {formatTime(timeLeft)}</p>
//               { !isQuizActive && <p>Time's up!</p> }
//             </div>
//           </div>
//         )}

//         {show ? (
//           <button className="reset anim-bg-gradient" onClick={handleClick} style={{ scale: '1' }}>Start test</button>
//         ) : !finished ? (
//           <div className='container d-flex align-items-center'>
//             <QuestionsContainer
//               question={questionsArray[currentQuestionIndex]}
//               isLocked={lockedQuestions.has(currentQuestionIndex)}
//             />
//             <div className='mx-2 d-flex justify-content-center flex-column gap-3 align-items-center border border-black bg-light rounded' style={{ width: '200px', height: '100%' }}>
//               <div className='btn btn-danger p-2 w-75' onClick={handleSkip}>Skip</div>
//               <div className='btn btn-success p-2 w-75' onClick={handleSubmit}>Submit</div>
//             </div>
//           </div>
//         ) : (
//           <div className="container-fluid" style={{ height: '50%' }}>
//             <Finals />
//           </div>
//         )}

//         {show || finished ? null : (
//           <div className='d-flex justify-content-center'>
//             <div className='bot-bar border rounded'>asd</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
