export default function Item({ text, completed = false, onDelete, onToggle }) {
  return (
    <li className="flex justify-between items-center bg-gray-800 px-5 py-3 rounded-lg shadow-sm hover:shadow-lg transition">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="w-5 h-5 rounded-md border-none bg-white/10 cursor-pointer transition duration-200 hover:scale-110"
        />
        <span
          className={`text-white font-medium ${
            completed ? "line-through text-white/50" : ""
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-indigo-400 hover:bg-red-600 hover:text-white px-3 py-1 rounded-md font-semibold cursor-pointer transition duration-200"
      >
        Borrar
      </button>
    </li>
  );
}
