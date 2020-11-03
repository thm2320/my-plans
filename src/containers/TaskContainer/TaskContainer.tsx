import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TaskList } from '../../components/TaskList/TaskList';
import { Button } from '../../components/UI/Button/Button';
import { TaskProps } from '../../types/task';

export const TaskContainer = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  let history = useHistory();

  useEffect(() => {
    setTasks([
      {
        name: 'Task A',
        description: 'Description for A! '
      },
      {
        name: 'Task B',
        description: 'Description for B! '
      }
    ])
  }, [])

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


