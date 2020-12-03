import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Task } from '../../types/task';
import { Button } from '../../components/UI/Button/Button';
import './TaskForm.scss';

type FormFields = {
  title: string,
  description: string,
}

type PathParams = {
  id: string,
}

export const TaskForm = () => {

  const { id } = useParams<PathParams>();
  const isUpdating = !!id;
  const [fields, setFields] = useState<FormFields>({
    title: '',
    description: '',
  });

  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`/tasks/get-task/${id}`)
        .then(res => {

          if (res.data.success) {
            const taskData = res.data.data
            setFields({
              ...taskData
            })
          }
        });
    }

  }, [id])

  const btnClickHandler = async (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.preventDefault();
    const { title, description } = fields;
    const taskData: Task = {
      title: title,
      description: description,
    }
    let url = '/tasks/add-task';
    if (isUpdating) {
      url = `/tasks/update-task`;
      taskData._id = id;
    }

    const res = await axios.post(url, taskData);
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
      <Button btnClickHandler={btnClickHandler}>{isUpdating ? "Update Task" : "Add New Task"}</Button>

    </form>
  );
}


