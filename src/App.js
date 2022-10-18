import './App.css';
import React, { useState, useEffect } from 'react';
import Dashboard from './views/dashboard';
import NoFoundPage from './views/no_found_page';
import ContentTask from './components/partial/content_task';
import SectionTask from './components/partial/section_task';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import dataTasks from "./data.json"

function App() {
const [data, setData] = useState(dataTasks)
useEffect(()=>{
   const data = JSON.parse(localStorage.getItem('db'));
   if(data){
    setData(data);
   }
},[])

  return (
    <div className="App">
      <BrowserRouter>
      {data.map(a=><li>{a.id}</li>)}
        {/* <button onClick={()=>setData([...data,{"id":8,"tasks":[{"title":"ciul"}]}],localStorage.setItem('db',JSON.stringify(data)))}>Kliknij</button> */}

            <Routes>
              <Route path="/" element={<Dashboard data={data}/>}>
                {data.map((el,indexEl)=>
                  <Route key={indexEl} path={el.day} element={<SectionTask tasks={el}/>}>
                    {el.tasks.map((task,indexTask)=><Route key={indexTask} path={`${task.id}`} element={<ContentTask task={task}/>} />)}
                  </Route>
                  )}
              </Route>
              <Route path="*" element={<NoFoundPage/>}/>
            </Routes>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
