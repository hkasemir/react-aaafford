import React from 'react';
import classnames from 'classnames';
import './unstyled-button.css';

export function UnstyledButton({
  label,
  onClick,
  className,
  children,
  ...otherProps
}) {
  return (
    <button
      className={classnames('unstyled-btn', className)}
      onClick={onClick}
      {...otherProps}
    >
      {label || children}
    </button>
  );
}

export default UnstyledButton;
