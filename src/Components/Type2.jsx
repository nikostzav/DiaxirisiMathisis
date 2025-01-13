import { useEffect, useState } from "react";
const Type2 = (props) => {
    const [ans,setAns] = useState();

    return(
       <div>
            <div className="mt-4 h1">
                Πολλαπλής επιλογής
            </div>
            <div className="fs-3 mx-5 text-start" style={{marginTop:'10%',whiteSpace:'pre-line'}}>
                {props.quest.question}
            </div>
            <div className="m-3 h2">Επέλεξε την σωστή απάντηση:</div>
            <div className="container-fluid  d-flex flex-column gap-2 my-2"> 
                {props.quest.answears.map((ans,index) => {return(<div className="btn btn-warning text-dark" onClick={(i) => {
                    setAns(index);
                    console.log(index)
                    const q = localStorage.getItem('question');
                    if(index == props.quest.correct){   
                        localStorage.setItem('question'+q,1)
                        console.log('CORRECT')
                    }else{
                        localStorage.setItem('question'+q,2);
                        console.log('False')
                    }
                }}>{ans}</div>)})}              
                
            </div>
        </div>
    )
}

export default Type2