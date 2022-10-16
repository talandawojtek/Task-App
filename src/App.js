import './App.css';
import Sidebar from './components/partial/sidebar';
import SectionTask from './components/partial/section_task';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const data = [
    {
      "id":1,
      "day":"Monday",
      "completed":false,
      "tasks":[
        {"title":"Zrobić kupę w poniedziałek","description":"Lorem Ipsum","done":true,"created":""},
        {"title":"Umyć włosy","description":"Lorem Ipsum","done":false,"created":""},
      ]
    },
    {
      "id":2,
      "day":"Tuesday",
      "completed":false,
      "tasks":[
        {"title":"Zrobić kupę we wtorek","description":"Lorem Ipsum","done":true,"created":""},
        {"title":"Umyć włosy","description":"Lorem Ipsum","done":false,"created":""},
      ]
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
                <Route index element="Wybierz dzień tygodnia"/>
                {data.map((el,indexEl)=><Route exact path={el.day} element={<SectionTask data={data} day={indexEl}/>} />)}
            </Routes>
            <Sidebar data={data}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
