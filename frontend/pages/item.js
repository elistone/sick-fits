import SingleItem from "../components/SingleItem";
import UpdateItem from "../components/UpdateItem";

const Item = ({query}) => (
    <div>
        <SingleItem id={query.id}/>
    </div>
)

export default Item;