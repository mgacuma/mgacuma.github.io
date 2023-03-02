
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./shared/layout";
import Home from "./home/home";
import TodoApp from './todo-app/todo-app'
import { BrowserRouter as Router, Routes as Switch, Route, Outlet } from "react-router-dom";

import './shared/styles/styles.css'
import QuizApp from "./quiz-app/quiz-app";


const App = () => {

  return (
    <Router>
      <Switch>
          <Route path='/hq' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/hq/todo-app' element={<TodoApp />} />
            <Route path='/hq/quiz-app' element={<QuizApp />} />
          </Route>
      </Switch>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);