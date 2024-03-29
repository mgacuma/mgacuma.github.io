import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Home } from './home/home';
import QuizApp from "./quiz-app/quiz-app";
import TodoApp from "./todo-app/todo-app";
import { Layout } from './shared/layout';

const router = createHashRouter([
  {
    path: '/',
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