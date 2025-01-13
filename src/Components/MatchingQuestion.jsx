
import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './MatchingQuestion.css';

// QuestionItem component
const QuestionItem = ({ question, answerId, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'ANSWER',
    drop: (item) => onDrop(question.id, item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`question-item ${isOver ? 'hover' : ''}`}>
      <span>{question.text}</span>
      <div className="drop-zone">
        {answerId ? <span>Answer: {answerId}</span> : <span>Απάντησε εδώ</span>}
      </div>
    </div>
  );
};

// AnswerItem component
const AnswerItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'ANSWER',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={`answer-item ${isDragging ? 'dragging' : ''}`}>
      {text}
    </div>
  );
};

// MatchingQuestion component
const MatchingQuestion = ({ questions = [], answers = [], correctAnswers = {}, question }) => {
  const [matches, setMatches] = useState({});

  const handleDrop = (questionId, answerId) => {
    setMatches((prevMatches) => ({
      ...prevMatches,
      [questionId]: answerId,
    }));
  };

  useEffect(() => {
    const checkAnswers = () => {
      const allAnswered = questions.every((question) => matches[question.id] !== undefined);

      if (allAnswered) {
        const isCorrect = Object.keys(correctAnswers).every(
          (questionId) => correctAnswers[questionId] === matches[questionId]
        );

        // Log the result
        const question = localStorage.getItem('question');
        if (isCorrect) {
          console.log('Correct!');
          localStorage.setItem('question'+question,1)
        } else {
          console.log('Incorrect, try again.');
          localStorage.setItem('question'+question,1)
        }
      }
    };

    checkAnswers();  // Call the function to check the answers
  }, [matches]);  // Trigger useEffect when 'matches' changes

  return (
    <DndProvider backend={HTML5Backend}>
      <div className='mt-3 h3'>{question}</div>
      <div className="matching-question mt-5 d-flex justify-content-between">
        <div className="questions">
          {questions.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              answerId={matches[question.id]}
              onDrop={handleDrop}
            />
          ))}
        </div>
        <div className="answers">
          {answers.map((answer) => (
            <AnswerItem key={answer.id} id={answer.id} text={answer.text} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default MatchingQuestion;


