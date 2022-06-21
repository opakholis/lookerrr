import React from 'react';
import clsx from 'clsx';

export const InputText = React.forwardRef(
  ({ type = 'text', className, ...rest }, ref) => {
    return (
      <input
        className={clsx(
          'w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm',
          className
        )}
        type={type}
        ref={ref}
        {...rest}
      />
    );
  }
);
