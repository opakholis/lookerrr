import clsx from 'clsx';

export const FormLabel = ({ className, children, htmlFor, ...rest }) => {
  return (
    <label
      className={clsx('mb-2 block text-sm font-medium', className)}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </label>
  );
};
