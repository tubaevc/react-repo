import React from "react";
import { useState } from "react";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue);
      setInputValue("");
    }
  };
  const addItem = (text) => {
    const newItem = {
      text,
      id: Date.now(),
      isComplete: false,
      isEditing: false,
    };
    setItems([...items, newItem]);
  };
  const delItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const completeItem = (id) => {
    setItems(
      items.map((item) =>
        item.id == id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };
  const editItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };
  const handleItemBlur = (id) => {
    //after the editing focus out
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  };
  return (
    <div>
      <h1>todos</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
        </form>
        <div>
          {items.map((item) =>
            item.isEditing ? (
              <input
                key={item.id}
                value={item.text}
                onChange={(e) =>
                  setItems(
                    items.map((i) =>
                      i.id === item.id ? { ...i, text: e.target.value } : i
                    )
                  )
                }
                onBlur={() => handleItemBlur(item.id)}
                autoFocus
              />
            ) : (
              <li
                className="todo-item"
                key={item.id}
                style={{
                  textDecoration: item.isComplete ? "line-through" : "none",
                }}
              >
                {" "}
                <span onClick={() => editItem(item.id)}> {item.text} </span>
                <button
                  onClick={() => completeItem(item.id)}
                  className={item.isComplete ? "complete-btn" : "no-click"}
                >
                  {" "}
                  &#10003;{" "}
                </button>
                <button onClick={() => delItem(item.id)} className="delete-btn">
                  {" "}
                  X{" "}
                </button>
              </li>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
