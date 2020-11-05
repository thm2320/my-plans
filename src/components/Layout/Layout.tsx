import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TaskForm } from '../../containers/TaskForm/TaskForm';
import { TasksContainer } from '../../containers/TasksContainer/TasksContainer';

export const Layout = () => {
  return (
    <div>
      <Switch>

        <Route path="/task" render={() => <TaskForm />} />
        <Route exact path="/" render={() => <TasksContainer />} />

      </Switch>
    </div>
  );
}


