import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store";

export function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  function handleNewTodo(e: FormEvent) {
    e.preventDefault();

    dispatch(add({ newTodo }));

    setNewTodo("");
  }

  return (
    <form onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="New to-do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
