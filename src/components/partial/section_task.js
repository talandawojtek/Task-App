
import { Link, Route, useRouteMatch} from 'react-router-dom'

function SectionTask(props) {

  return (

        <>{props.data[props.day].tasks.map(task=><li>{task.title}</li>)}</>
  );
}

export default SectionTask;
