import { useSortable } from "@dnd-kit/sortable"
import {CSS} from "@dnd-kit/utilities"
import "./Options.css"

const Type6_options = ({op,id}) => {
    const {attributes,listeners,setNodeRef,transform,transition} = useSortable({id})
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }

    return(
        <div ref={setNodeRef} {...attributes} {...listeners} style={style} key={id} className="options">
            {op}
        </div>
    )
}

export default Type6_options