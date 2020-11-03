import React, { useEffect, useState } from 'react';
import { TaskList } from '../../components/TaskList/TaskList';
import { TaskProps } from '../../types/task';

export const TaskContainer = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

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

  return (
    <TaskList tasks={tasks} />
  );
}


