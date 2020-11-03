import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { TasksDisplayer } from '../../components/TasksDisplayer/TasksDisplayer';
import { TaskForm } from '../../components/TaskForm/TaskForm';
import { Task } from '../../types/task';

export const TasksContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    setTasks([
      {
        title: 'Task A',
        description: 'Description for A! '
      },
      {
        title: 'Task B',
        description: 'Description for B! '
      }
    ])
  }, [])

  const addNewTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div>
      <Route exact path="/">
        <TasksDisplayer tasks={tasks} />
      </Route>
      <Route path="/task">
        <TaskForm addNewTaskHandler={addNewTask} />
      </Route>
    </div>
  );
}


