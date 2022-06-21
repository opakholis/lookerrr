import React from 'react';
import clsx from 'clsx';

export const InputCheckbox = React.forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      className={clsx('h-5 w-5 rounded', className)}
      type="checkbox"
      ref={ref}
      {...rest}
    />
  );
});
