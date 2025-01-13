
import React, { useEffect, useState } from 'react';

const Type1 = (props) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null); 

    useEffect(() => {
    
    }, [selectedAnswer]);

    
    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        console.log('Answer giver :  '+ answer + 'Correct ans: ' + props.quest.correct)
        const question = localStorage.getItem('question');
        if(answer===props.quest.correct){
            localStorage.setItem('question'+question,1)
        }else{
            localStorage.setItem('question'+question,2)
        }
    };

    const getButtonClass = (answer) => {
        if (selectedAnswer === answer) {
            return answer === 1 ? 'btn btn-success p-5' : 'btn btn-danger p-5';
        }
        return answer === 1 ? 'btn btn-outline-success p-5' : 'btn btn-outline-danger p-5';
    };

    return (
        <div className=''>
            <div className="mt-4 h1">
                Σωστό - Λάθος
            </div>
            <div className="fs-3 mx-5 text-start" style={{ marginTop: '10%', whiteSpace: 'pre-line' }}>
                {props.quest.question}
            </div>
            <div className="container-fluid d-flex justify-content-center my-5 align-items-center">
                <div className="mt-5">
                    <div
                        className={getButtonClass(1)}
                        onClick={() => handleAnswerClick(1)}
                    >
                        Σωστό
                    </div>
                    <div
                        className={getButtonClass(2)}
                        onClick={() => handleAnswerClick(2)}
                    >
                        Λάθος
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Type1;
