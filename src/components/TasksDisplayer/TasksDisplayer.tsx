import React from 'react';
import { useHistory } from 'react-router-dom';
import { TaskList } from '../TaskList/TaskList';
import { Button } from '../UI/Button/Button';
import { Task } from '../../types/task';

type Props = {
  tasks: Task[],
}

export const TasksDisplayer = (props: Props) => {

  let history = useHistory();

  const goToNewTaskPage = () => {
    history.push('/task')
  }

  return (
    <div>
      <TaskList tasks={props.tasks} />
      <Button btnClickHandler={goToNewTaskPage}>New Task</Button>
    </div>
  );
}


