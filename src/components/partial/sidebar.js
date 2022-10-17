import SectionTask from "./section_task";
import { Link, Outlet} from 'react-router-dom'
function Sidebar(props) {

  return (
    <div>
      <Outlet/>
        {props.data.map((el,indexEl)=><li key={indexEl}><Link to={el.day}>{el.day}</Link></li>)}
    </div>
  );
}

export default Sidebar;
