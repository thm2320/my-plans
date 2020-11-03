import React from 'react';
import { TaskListProps, TaskProps } from '../../types/task';
import { Task } from './Task/Task';
import './TaskList.scss';

export const TaskList = (props: TaskListProps) => {
  return (
    <div className="TaskList">
      {
        props.tasks.map((taskData: TaskProps) => (
          <Task
            {...taskData}
          />
        ))
      }
    </div>
  );
}


