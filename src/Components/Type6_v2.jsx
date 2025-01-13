import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import './Options.css'
import Options from './Options'
import { useState } from 'react'
import { useDrop } from 'react-dnd'

const Type6_v2 = ({quest}) => {
    
    const anwears = [
        {
            id:1,
            text: quest.answears1[0]
        },
        {
            id:2,
            text: quest.answears1[1]
        },
        {
            id:3,
            text: quest.answears1[2]
        }
    ]

    console.log(anwears);
    const [board,setBoard] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addText(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addText = (id) => {
        console.log(id)
    };

    return(
        <DndProvider backend={HTML5Backend}>
            <div>
                <div className='m-4 h3'>{quest.question}</div>
                <div className='pics d-flex justify-content-center gap-3 bg-light mt-5'>
                    {anwears.map((i) => {return <Options id={i.id} text={i.text} />})}
                </div>
                <div className='ans1' >asd</div>
                <div className='ans2'></div>
                <div className='ans3'></div>
            </div>
            
        </DndProvider>
        )
}

export default Type6_v2