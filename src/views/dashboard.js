import { Outlet } from "react-router-dom";
import Sidebar from "../components/partial/sidebar";

function Dashboard({AddTask,data}) {

  return (
        <div>
            <h1> App !</h1>
            <Sidebar AddTask={AddTask} data={data}/>
            <Outlet/>
        </div>
  );
}

export default Dashboard;
