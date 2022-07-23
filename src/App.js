import "./App.css";
import AddNewTodo from "./components/AddNewTodo";
import Calendar from "./components/Calendar";
import EditTodo from "./components/EditTodo";
import SideBar from "./components/SideBar";
import Main from "./components/Main.jsx";
import Projects from "./components/Projects";
import Todos from "./components/Todos";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <SideBar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </SideBar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
