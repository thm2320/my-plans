import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Task } from '../../types/task';
import { Button } from '../UI/Button/Button';
import './TaskForm.scss';

type Props = {
  addNewTaskHandler: (task: Task) => void,
}

type FormFields = {
  title: string,
  description: string,
}

export const TaskForm = (props: Props) => {
  const [fields, setFields] = useState<FormFields>({
    title: '',
    description: '',
  });

  const history = useHistory();

  const addBtnClickHandler = () => {
    const { title, description } = fields;

    const newTask: Task = {
      title: title,
      description: description,
    }

    props.addNewTaskHandler(newTask);
    history.push('/');
  }

  const onInputChange = (evt: any) => {
    const input = evt.target;
    const updatedFields = {
      ...fields,
      [input.name]: input.value
    }
    setFields(updatedFields);
  }

  return (
    <form className="TaskForm">
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={fields.title}
        onChange={onInputChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={fields.description}
        onChange={onInputChange}
      />
      <Button btnClickHandler={addBtnClickHandler}>Add New Task</Button>
    </form>
  );
}


