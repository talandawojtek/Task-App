import { Link } from 'react-router-dom'
function Sidebar(props) {

  return (
    <div>
        {props.data.map((el,indexEl)=><li key={indexEl}><Link to={el.day}>{el.day}</Link></li>)}
    </div>
  );
}

export default Sidebar;
