import React, { useEffect, useState } from 'react';
import { Task, TaskProps } from './Task/Task';

import './TaskList.scss';



export const TaskList = () => {
  const [taskList, setTaskList] = useState<TaskProps[]>([])

  useEffect(() => {
    setTaskList([
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
    <div className="TaskList">
      {
        taskList.map((taskData: TaskProps) => (
          <Task
            {...taskData}
          />
        ))
      }
    </div>
  );
}


