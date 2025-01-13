
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import Quotes from "./Quotes";
import { useState } from "react";
import questions from "../Questions.js";

// Helper function to compare two arrays
const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
};

const Type5 = ({ quest }) => {
    const [ans, setAns] = useState([1, 2, 3]);
    const [quotes, setQuotes] = useState([
        { id: 1, quote: quest.answears[0] },
        { id: 2, quote: quest.answears[1] },
        { id: 3, quote: quest.answears[2] }
    ]);

    const getQuotesPos = id => quotes.findIndex(quote => quote.id === id);

    const handleDrag = event => {
        const { active, over } = event;
        if (active.id === over.id) return;

        setQuotes(quotes => {
            const originalPos = getQuotesPos(active.id);
            const newPos = getQuotesPos(over.id);

            // Update the array after the drag operation
            const newQuotes = arrayMove(quotes, originalPos, newPos);
            const ansArray = newQuotes.map(q => q.id);

            console.log('ANS ARRAY:', ansArray);
            console.log('CORRECT ARRAY:', quest.correct);

            // Compare arrays
            if (arraysAreEqual(ansArray, quest.correct)) {
                console.log('CORRECT ANSWER');
                const question = localStorage.getItem('question');
                localStorage.setItem('question' + question, 1);
            } else {
                console.log('INCORRECT ANSWER');
                const question = localStorage.getItem('question');
                localStorage.setItem('question' + question, 2);
            }

            return newQuotes;
        });
    };

    return (
        <div className="d-flex flex-column justify-content-center h-100">
            <DndContext onDragEnd={handleDrag} collisionDetection={closestCorners}>
                <SortableContext items={quotes} strategy={verticalListSortingStrategy}>
                    <div className="h3">
                        {quest.question}
                    </div>
                    <div className="border p-4">
                        {quotes.map(q => (
                            <Quotes key={q.id} id={q.id} quote={q.quote} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default Type5;
