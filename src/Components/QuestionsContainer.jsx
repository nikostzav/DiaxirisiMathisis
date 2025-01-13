import { useState } from "react";
import "../styles.css"
import question from '../Questions.js';
import Type1 from "./Type1.jsx";
import Type2 from "./Type2.jsx";
import Type4 from "./Type4.jsx";
import Type5 from "./Type5.jsx";
import Type6 from "./Type6.jsx";
import Type6_v2 from "./Type6_v2.jsx";
import Test2 from './Test2.jsx'
import Type3 from './Type3.jsx'
import MatchingQuestion from "./MatchingQuestion.jsx";
const QuestionsContainer = ( {question} ) => {
    const [quest,setQuest] = useState();
    const quest2 = question;
    
    function render() {
        switch(question.type){
            case 1:
                return <Type1 quest={question} />
            case 2:
                return <Type2 quest={question} />
            case 3:
                return <Type3 quest={question} />
            case 4:
                return <Type4 quest={question} />
            case 5:
                return <Type5 quest={question} />
            case 6:
                return <Test2 quest2={question}/>
        }
    }

    return (
        <div className="container border questionContainer border-black rounded bg-light  flex-column " style={{height:'70vh',width:'100%'}}>
            {render()}
        </div>
    )
}

export default QuestionsContainer