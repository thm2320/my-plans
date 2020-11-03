import React from 'react';
import { Route } from 'react-router-dom';
import { TaskContainer } from '../../containers/TaskContainer/TaskContainer';

export const Layout = () => {
  return (
    <div>
      <Route exact path="/">
        <TaskContainer />
      </Route>
      <Route path="/task">
        <div>new Task</div>
      </Route>


    </div>
  );
}


