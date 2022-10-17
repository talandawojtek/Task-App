import SectionTask from './partial/section_task';
import ContentTask from './partial/content_task';
import Sidebar from './partial/sidebar';
import { Routes, Route } from "react-router-dom";

function Container(props) {
  return (
    <div className='container'>
        <Sidebar data={props.data} />
        <Routes>
            <Route index element="Wybierz dzień tygodnia"/>
            <Route path='*'element="Niepoprawny adres URL"/>
                {props.data.map((el,indexEl)=><Route key={indexEl} exact path={el.day} element={<SectionTask data={props.data} day={indexEl}/>}>
                {el.tasks.map((task,indexTask)=><Route key={indexTask} path={`${task.id}`} element={<ContentTask task={task}/>} />)}
            </Route>)}
        </Routes>
    </div>
  );
}

export default Container;
