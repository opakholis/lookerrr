import React from 'react';
import clsx from 'clsx';

export const InputSelect = React.forwardRef(
  ({ type = 'text', className, children, ...rest }, ref) => {
    return (
      <select
        className={clsx(
          'w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm',
          className
        )}
        type="select"
        ref={ref}
        {...rest}
      >
        {children}
      </select>
    );
  }
);
