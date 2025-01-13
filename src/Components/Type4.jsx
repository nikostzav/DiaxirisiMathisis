import { useState } from "react";
const Type4 = (props) => {
    const [ans,setAns] = useState("");
    const question = localStorage.getItem('question');

    const handleChange = (e) => {
        const v = e.target.value
        setAns(v)
        console.log(ans)
        if(v==props.quest.correct){
            localStorage.setItem('question'+question,1);
        }else{
            localStorage.setItem('question'+question,2);
        }
    }
    return(
        <div>
            <div className="mt-4 h1">
                Συμπλήρωσης κενού
            </div>
            <div className="fs-3 mx-5 text-start" style={{marginTop:'10%',whiteSpace:'pre-line'}}>
                {props.quest.question}
            </div>
            <div className="my-1 h2">Γράψε την σωστή απάντηση:</div>
            <div className="container-fluid  d-flex flex-column gap-2 my-5 justify-content-center"> 
                <input className="form-control" type="text" value={ans} onChange={handleChange} />
            </div>
            <div className="btn btn-success w-25 p-4">Submit</div>
        </div>
    )
}

export default Type4