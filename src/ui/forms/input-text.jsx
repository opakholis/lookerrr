import React from 'react';
import clsx from 'clsx';

export const InputText = React.forwardRef(
  ({ type = 'text', children, className, ...rest }, ref) => {
    if (children) {
      return (
        <div className="relative mt-1">
          <input
            className={clsx(
              'w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm',
              className
            )}
            type={type}
            ref={ref}
            {...rest}
          />
          {children}
        </div>
      );
    }

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
