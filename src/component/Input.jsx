import React, { forwardRef } from "react";

const Input = forwardRef(({ label, textArea, ...props }, ref) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref}
          {...props}
          className="text-gray-800 w-full p-1 border-b-2 rounded-md
           border-gray-300 focus:outline-none focus:border-gray-800"
        />
      ) : (
        <input ref={ref} {...props} className="text-gray-800 rounded-md" />
      )}
    </p>
  );
});

export default Input;
