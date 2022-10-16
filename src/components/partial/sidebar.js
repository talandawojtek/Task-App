import SectionTask from "./section_task";
import { Link, Outlet} from 'react-router-dom'
function Sidebar(props) {

  return (
    <div>
        {props.data.map(el=><li><Link to={el.day}>{el.day}</Link></li>)}
    </div>
  );
}

export default Sidebar;
