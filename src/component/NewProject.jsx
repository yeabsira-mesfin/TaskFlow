import React, { useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";
const NewProject = ({ onAdd }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDesc = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDesc.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption = 'Close'>
        <h2>Invalid Input</h2>
        <p>Please make sure you fill all the fileds.</p>
      </Modal>
      <div className="w-[35rem] mt-16 text-gray-50">
        <menu className=" flex items-center justify-end gap-4 my-4">
          <li>
            <button className="hover:text-gray-100">Cancel</button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md
             bg-blue-300 hover:bg-gray-500 hover:text-gray-100"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDate} label="Due" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
