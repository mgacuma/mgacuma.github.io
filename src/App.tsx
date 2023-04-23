import { Home } from "@mui/icons-material";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import QuizApp from "./quiz-app/quiz-app";
import { Layout } from "./shared/layout";
import NavBar from "./shared/navigation/nav-bar";
import TodoApp from "./todo-app/todo-app";

const router = createBrowserRouter([
  {
    path: 'hq',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'todo-app',
        element: <TodoApp />
      },
      {
        path: 'quiz-app',
        element: <QuizApp />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)