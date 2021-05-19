import React, { useState } from "react";

export default function FormAddWork({ handleCreate }) {
  const [memorize, setMemorize] = useState("");

  const handelCreateChild = (e) => {
    if (e.key === "Enter") {
      handleCreate(memorize);
      setMemorize("");
    } else {
      setMemorize(e.target.value);
    }
  };

  return (
    <div className="top___todolist---input">
      <input
        type="text"
        onChange={(e) => handelCreateChild(e)}
        value={memorize}
        onKeyDown={(e) => handelCreateChild(e)}
      />
    </div>
  );
}
