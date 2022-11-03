import './App.css';
import React, { useState, useEffect } from 'react';
import Dashboard from './views/dashboard';
import NoFoundPage from './views/no_found_page';
import ContentTask from './components/partial/content_task';
import SectionTask from './components/partial/section_task';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataTasks from "./data.json"

function App() {
const [data, setData] = useState(dataTasks);

const AddTask = (e,id) =>{
  e.preventDefault()
  // localStorage.setItem("dataBase", JSON.stringify([...data,{id}]))
  setData([localStorage.getItem("dataBase"),{"id":id}]);
  // setData([...data,{"day":id}])
}

  return (
    <div className="App">
      <BrowserRouter>

            <Routes>
              <Route path="/" element={<Dashboard AddTask={(e,id)=>AddTask(e,id)} data={data}/>}>
                {/* {data.map((el,indexEl)=>
                  <Route key={indexEl} path={el.day} element={<SectionTask tasks={el}/>}>
                    {el.tasks.map((task,indexTask)=><Route key={indexTask} path={`${task.id}`} element={<ContentTask task={task}/>} />)}
                  </Route>
                  )} */}
              </Route>
              <Route path="*" element={<NoFoundPage/>}/>
            </Routes>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
