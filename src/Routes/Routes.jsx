import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Main from '../Layout/Main';
import AddedTask from '../Home/Task/AddedTask';
import TaskList from '../Home/Task/TaskList/TaskList';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/addtask',
          element: <AddedTask></AddedTask>
        },
        {
          path: '/tasklist',
          element: <TaskList></TaskList>
        }

        
    
      ]
    }
  ]);

export default router;