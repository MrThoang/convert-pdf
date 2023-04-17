import { ButtonHTMLType } from 'antd/lib/button/button';
import { ReactNode } from 'react';

export type TButtonProps = {
  classNames?: string;
  title?: string;
  type?: 'primary' | 'success' | 'warning' | 'default' | 'disabled';
  htmlType?: ButtonHTMLType;
  disabled?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
};
