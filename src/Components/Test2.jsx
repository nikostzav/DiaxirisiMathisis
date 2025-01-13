import React, { useState } from 'react';
import MatchingQuestion from './MatchingQuestion.jsx';
import questions from '../Questions.js';

function Test2({quest2}) {
  const quest = questions[15];
  const [questions2,setQuestions] = useState([
    {id:1,text:quest2.answears2[0]},
    {id:2,text:quest2.answears2[1]},
    {id:3,text:quest2.answears2[2]}
  ])

  const [ans,setAns] = useState([
    {id:1,text:quest2.answears1[0]},
    {id:2,text:quest2.answears1[1]},
    {id:3,text:quest2.answears1[2]}
  ])

  // console.log(questions2)
  return (
    <div className="App">
      <MatchingQuestion questions={questions2} answers={ans} question={quest.question} />
    </div>
  );
}

export default Test2;
