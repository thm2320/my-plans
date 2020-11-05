import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Task } from '../../types/task';
import { Button } from '../../components/UI/Button/Button';
import './TaskForm.scss';

type FormFields = {
  title: string,
  description: string,
}

export const TaskForm = () => {

  const [fields, setFields] = useState<FormFields>({
    title: '',
    description: '',
  });

  const history = useHistory();

  const addBtnClickHandler = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    const { title, description } = fields;
    const newTask: Task = {
      title: title,
      description: description,
    }
    const res = await axios.post('/tasks/add-task', newTask)
    if (res) {
      history.push('/');
    }
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


