import React, { ReactNode } from 'react';
import './Button.scss';

type Props = {
  btnClickHandler: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  children: ReactNode
}

export const Button = (props: Props) => (
  <button
    className="Button"
    onClick={props.btnClickHandler}
  >
    {props.children}
  </button>
);



