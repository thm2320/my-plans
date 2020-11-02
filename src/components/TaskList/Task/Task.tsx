import React from 'react';
import './Task.scss';

export type TaskProps = {
  name: string,
  description: string,
}

export const Task = (props: TaskProps) => {

  return (
    <div className="Task">
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}


