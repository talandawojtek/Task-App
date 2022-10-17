
import { Link, Route, Outlet} from 'react-router-dom'

function ContentTask(props) {

  return (
        <div className='content_task'>
            <h1>{props.task.title}</h1>
            <p>{props.task.description}</p>
        </div>
  );
}

export default ContentTask;
