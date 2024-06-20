import React from "react";

const Input = ({label, textArea,...props}) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm font-bold uppercase">{label}</label>
      {textArea ? <textarea {...props} className="text-gray-800 w-full p-1 border-b-2 rounded-md border-gray-300 focus:outline-none focus:border-gray-800" /> : <input {...props} className="text-gray-800 rounded-md"/>}
    </p>
  );
};

export default Input;
