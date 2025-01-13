import {closestCorners, DndContext} from "@dnd-kit/core"
import {arrayMove, SortableContext , verticalListSortingStrategy} from "@dnd-kit/sortable"
import questions from "../Questions"
import Type6_options from "./Type6_options";
import { useState } from "react";
const Type6 = () => {
    const quest = questions[15]
    console.log(quest);
    const [quotes,setQuotes] = useState([
        {
            id:1,
            quote:quest.answears1[0]
        },
        {
            id:2,
            quote:quest.answears1[1]
        },
        {
            id:3,
            quote:quest.answears1[2]
        }
    ]);

    
    return(
        <DndContext collisionDetection={closestCorners}>
            <SortableContext items={quotes} strategy={verticalListSortingStrategy}>
                <div>
                    <div className="mt-3  h3">
                        {quest.question}
                    </div>
                    <div className="d-flex justify-content-center gap-3 mt-5">
                        {quotes.map((option,index) => {return <Type6_options key={option.id} op={option.quote} id={option.id}/>})}
                    </div>
                    
                    <div className="d-flex flex-column gap-5 mt-5 text-start mx-5">
                        {quest.answears2.map((ans,index) => {return <div className="ans border rounded p-3 d-flex justify-content-between align-items-center" ><div>{ans}</div><div className="empty" id={{index}}>{index}</div></div>})}
                    </div>
                </div>
            </SortableContext>
        </DndContext>
    )
}

export default Type6