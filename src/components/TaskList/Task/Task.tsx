import React from 'react';
import { TaskProps } from '../../../types/task';
import './Task.scss';

export const Task = (props: TaskProps) => {

  return (
    <div className="Task">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}


