
import { Link, Outlet} from 'react-router-dom'

function SectionTask(props) {

  return (
        <>
        {props.data[props.day].tasks.map((task,indexTask)=><li key={indexTask}><Link to={`${task.id}`}>{task.title}</Link></li>)}
        <Outlet/>
        </>
  );
}

export default SectionTask;
