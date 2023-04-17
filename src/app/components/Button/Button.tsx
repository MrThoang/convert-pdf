import React from 'react';
import { TButtonProps } from './TButtonProps.type';

export const Button = ({
  classNames,
  title,
  htmlType,
  disabled,
  onClick,
}: TButtonProps) => {
  return (
    <button
      className={`${classNames}
      font-700 text-lg rounded-lg py-1.5 leading-4 w-auto px-2 border border-transparent`}
      onClick={onClick}
      disabled={disabled}
      type={htmlType}
    >
      <div className='text-gray-500'
      >
        {title}
      </div>
    </button>
  );
};
