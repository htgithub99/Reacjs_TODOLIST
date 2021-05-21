import React, { useState, useEffect } from "react";

export default function FormAddWork({ handleAllFunction, todoEdit }) {
  const [memorize, setMemorize] = useState('');
  const handelCreateChild = (e) => {
    if (e.key === "Enter" && memorize !== '') {
      handleAllFunction(memorize, todoEdit.items?.id);
      setMemorize('');
    } else {
      setMemorize(e.target.value);
    }
  };
  useEffect(() => {
    todoEdit ? setMemorize(todoEdit.items?.name) : setMemorize('')
  }, [todoEdit])

  return (
    <>
      <div className="top___todolist---input">
        <input
          type="text"
          onChange={(e) => handelCreateChild(e)}
          value={memorize}
          onKeyDown={(e) => handelCreateChild(e)}
        />
      </div>
      <div className="top___todolist---submit">
          <button onClick={() => {
            handleAllFunction(memorize, todoEdit.items?.id);
            setMemorize("");
          }}>Create</button>
      </div>
    </>
  );
}
