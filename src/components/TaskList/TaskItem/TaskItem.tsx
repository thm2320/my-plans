import React from 'react';
import { useHistory } from 'react-router-dom';
import { Task } from '../../../types/task';
import './TaskItem.scss';

export const TaskItem = (props: Task) => {
  const history = useHistory()
  const goToUpdateTask = (taskId: string) => {
    history.push(`/task/${taskId}`)
  }
  return (
    <div className="Task"
      onClick={() => { goToUpdateTask(props._id || '') }}
    >
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}


