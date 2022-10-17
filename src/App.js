import './App.css';
import Container from './components/container';
import { BrowserRouter } from "react-router-dom";

function App() {

  const data = [
    {
      "id":1,
      "day":"Monday",
      "completed":false,
      "tasks":[
        {"id":534,"title":"LP w poniedziałek","description":"Lorem Ipsum","done":true,"created":""},
        {"id":645654,"title":"Zrobić promo","description":"Lorem Ipsum","done":false,"created":""},
      ]
    },
    {
      "id":2,
      "day":"Tuesday",
      "completed":false,
      "tasks":[
        {"id":3123,"title":"LP we wtorek","description":"Lorem Ipsum","done":true,"created":""},
        {"id":45454,"title":"zrobić LPKA","description":"Lorem Ipsum","done":false,"created":""},
      ]
    }
  ]

  return (
    <div className="App">
      <BrowserRouter>
            <Container data={data} />
        </BrowserRouter>
    </div>
  );
}

export default App;
