import { Link } from 'react-router-dom'
import Form from '../sidebar_components/form';

function Sidebar({AddTask,data}) {
  return (
    <div>
        <Form AddTask={AddTask}/>
        {/* {data.map((el,indexEl)=><li key={indexEl}><Link to={el.day}>{el.day}</Link></li>)} */}
    </div>
  );
}

export default Sidebar;
