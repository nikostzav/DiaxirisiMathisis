
// import React, { useState } from 'react';
// import '../styles.css'; // Make sure this path is correct

// const Type2 = (props) => {
//   // Initialize the selectedAnswers state to track selection for each answer
//   const [selectedAnswers, setSelectedAnswers] = useState(
//     new Array(props.quest.answears.length).fill(false)
//   );
//   const [correctAns,setCorrectAns] = useState(false);
//   // Function to toggle the selection state of an answer
//   const toggleAnswer = (index,correct) => {
//     setSelectedAnswers(prevState => {
//       // Create a copy of the current state and toggle the value at the specific index
//       const newSelectedAnswers = [...prevState];
//       newSelectedAnswers[index] = !newSelectedAnswers[index];
//       console.log('Correct answears: ' + correct + 'Array given' + newSelectedAnswers);
//       correct.map((i,index) => {
//         let corr = true
//         if(newSelectedAnswers[(i-1)] == true){
//             corr = true
//         }else{
//             const wrong = correctAns;
//             console.log('Missed the test')
//             setCorrectAns(!correctAns);
//             corr = false
//         }
//         console.log(corr);
//         const question = localStorage.getItem('question');
//         if(corr){
            
//             localStorage.setItem('question'+question,1)
//         }else{
//             localStorage.setItem('question'+question,2);
//         }
//       })
//       return newSelectedAnswers;
//     });
//   };

//   // Function to determine button style based on the selection state
//   const getButtonClass = (isSelected) => {
//     return isSelected ? 'btn btn-warning text-dark' : 'btn btn-outline-warning text-dark';
//   };

//   return (
//     <div>
//       <div className="mt-4 h1">
//         Πολλαπλής επιλογής
//       </div>
//       <div className="fs-3 mx-5 text-start" style={{ marginTop: '10%', whiteSpace: 'pre-line' }}>
//         {props.quest.question}
//       </div>
//       <div className="m-3 h2">Επέλεξε τις σωστές απαντήσεις:</div>
//       <div className="container-fluid d-flex flex-column gap-2 my-2">
//         {props.quest.answears.map((answer, index) => (
//           <button 
//             key={index}
//             className={getButtonClass(selectedAnswers[index])}
//             onClick={() => toggleAnswer(index,props.quest.correct)}
//           >
//             {answer}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Type2;




import React, { useState } from 'react';
import '../styles.css'; // Make sure this path is correct

const Type2 = (props) => {
  // Initialize the selectedAnswers state to track selection for each answer
  const [selectedAnswers, setSelectedAnswers] = useState(
    new Array(props.quest.answears.length).fill(false)
  );
  const [isCorrect, setIsCorrect] = useState(null); // Track correctness of the answers

  // Function to toggle the selection state of an answer
  const toggleAnswer = (index) => {
    setSelectedAnswers(prevState => {
      // Create a copy of the current state and toggle the value at the specific index
      const newSelectedAnswers = [...prevState];
      newSelectedAnswers[index] = !newSelectedAnswers[index];
      
      // Determine correctness
      const isCorrectAnswer = props.quest.correct.every((correctIndex) => 
        newSelectedAnswers[correctIndex - 1]
      ) && props.quest.correct.length === newSelectedAnswers.filter(Boolean).length;

      // Update state based on correctness
      setIsCorrect(isCorrectAnswer);

      // Save to localStorage
      const question = localStorage.getItem('question');
      localStorage.setItem('question' + question, isCorrectAnswer ? 1 : 2);

      return newSelectedAnswers;
    });
  };

  // Function to determine button style based on the selection state
  const getButtonClass = (isSelected) => {
    return isSelected ? 'btn btn-warning text-dark' : 'btn btn-outline-warning text-dark';
  };

  return (
    <div>
      <div className="mt-4 h1">
        Πολλαπλής επιλογής
      </div>
      <div className="fs-3 mx-5 text-start" style={{ marginTop: '10%', whiteSpace: 'pre-line' }}>
        {props.quest.question}
      </div>
      <div className="m-3 h2">Επέλεξε τις σωστές απαντήσεις:</div>
      <div className="container-fluid d-flex flex-column gap-2 my-2">
        {props.quest.answears.map((answer, index) => (
          <button 
            key={index}
            className={getButtonClass(selectedAnswers[index])}
            onClick={() => toggleAnswer(index)}
          >
            {answer}
          </button>
        ))}
      </div>
      {isCorrect !== null && (
        <div className="mt-3">
          {/* {isCorrect ? 'Σωστή απάντηση!' : 'Λάθος απάντηση!'} */}
        </div>
      )}
    </div>
  );
};

export default Type2;




