import React from 'react';
import { useHistory } from 'react-router-dom';
import { Task } from '../../types/task';
import { TaskItem } from './TaskItem/TaskItem';
import './TaskList.scss';

type Props = {
  tasks: Task[],
}

export const TaskList = (props: Props) => {
  return (
    <div className="TaskList">
      {
        props.tasks.map((taskData: Task) => (
          <TaskItem
            key={taskData._id}
            {...taskData}
          />
        ))
      }
    </div>
  );
}


