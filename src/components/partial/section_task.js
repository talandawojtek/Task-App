
import { Link, Outlet} from 'react-router-dom'

function SectionTask(props) {

  return (
        <div>
          {props.tasks.tasks.map((task,indexTask)=><Link key={indexTask} to={`${task.id}`}>{task.title}</Link>)}
          <Outlet/>
        </div>
  );
}

export default SectionTask;
