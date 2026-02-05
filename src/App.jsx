import { useState } from "react";
import Item from "./components/Item";

export default function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() !== "") {
      setList([...list, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

    const handleToggle = (index) => {
    const updated = [...list];
    updated[index].completed = !updated[index].completed;
    setList(updated);
  };

  return (
    <div className="min-h-screen bg-[#14181B] font-sans">
      <header className="relative bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white h-100">
        <div className="absolute bottom-12 left-12">
          <h1 className="text-[7rem] font-extrabold leading-tight tracking-tight">
            Mi Lista de Tareas
          </h1>
          <p className="mt-4 text-3xl font-light">
            Escribe tus pendientes de forma simple y rápida.
          </p>
        </div>
      </header>
      <section className="max-w-3xl mx-auto mt-50 p-10 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg">
        <div className="flex mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe una tarea..."
            className="flex-1 px-4 py-4 rounded-l-lg bg-gray-800 text-white shadow-sm focus:outline-none"
          />
          <button
            onClick={handleAdd}
            className="bg-gray-800 text-indigo-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-r-lg font-semibold cursor-pointer transition duration-200"
          >
            Agregar
          </button>
        </div>
        <ul className="space-y-4">
          {list.map((item, index) => (
            <Item
              key={index}
              text={item.text}
              completed={item.completed}
              onDelete={() => handleDelete(index)}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}