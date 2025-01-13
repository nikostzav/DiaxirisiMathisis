import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import "./Quotes.css"
const Quotes = ({id,quote}) => {
    const {attributes,listeners,setNodeRef,transform,transition} = useSortable({id})
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    return(
        <div  ref={setNodeRef} {...attributes} {...listeners} style={style} key={id} className="d-flex quotes justify-content-center mt-5 h3 border ">
            {quote}
        </div>
    )
}

export default Quotes