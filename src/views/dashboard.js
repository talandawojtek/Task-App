import { Outlet } from "react-router-dom";
import Sidebar from "../components/partial/sidebar";

function Dashboard(props) {

  return (
        <div>
            <h1> App !</h1>
            <Sidebar data={props.data}/>
            <Outlet/>
        </div>
  );
}

export default Dashboard;
