import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { TaskList } from '../../components/TaskList/TaskList';
import { Button } from '../../components/UI/Button/Button';
import { Task } from '../../types/task';

export const TasksContainer = () => {

  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {

    axios.get('/tasks')
      .then((res) => {
        if (res.data.success) {
          setTasks(res.data.data)
        }
      })
  }, [])

  let history = useHistory();

  const goToNewTaskPage = () => {
    history.push('/task')
  }

  return (
    <div>
      <TaskList tasks={tasks} />
      <Button btnClickHandler={goToNewTaskPage}>New Task</Button>
    </div>
  );
}


