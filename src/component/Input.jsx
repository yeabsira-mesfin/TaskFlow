import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textArea, ...props }, ref) => {
 const classes = "text-gray-800 w-full p-1 px-2 border-b-2 rounded-mdborder-gray-300 focus:outline-none focus:border-blue-300 ";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref}
          {...props}
          className={classes}
        />
      ) : (
        <input ref={ref} {...props} className={classes} />
      )}
    </p>
  );
});

export default Input;
