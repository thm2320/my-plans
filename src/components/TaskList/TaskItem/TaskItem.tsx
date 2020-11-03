import React from 'react';
import { Task } from '../../../types/task';
import './TaskItem.scss';

export const TaskItem = (props: Task) => {

  return (
    <div className="Task">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}


