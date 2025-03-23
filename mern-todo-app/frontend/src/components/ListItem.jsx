import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { deleteData } from "../stores/data.js";
import { useDispatch} from "react-redux";
import { openEditModal } from "../stores/modal.js";

const ListItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <div className="listItem">
    <section placeholder='Your List İtem...' type="text" >{item.text}</section>
    <div className='buttons'>
    <button className="editButton" onClick={()=>{
      dispatch(openEditModal(item));
    }}><FaRegEdit /></button>
    <button className="deleteButton" onClick={async()=>{
      let formData = {
        id:item._id
      }
      let response = await axios.post('/delete',formData);
      response = response.data;
      if(response.type){
        dispatch(deleteData(formData));

      }
    }}><FaRegTrashAlt /></button>
    
    </div>

</div>
  )
}

export default ListItem