export default function Button({ text }) {
  return (
    <button className="bg-blue-400 py-4 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">

      {text}

      <span className="text-lg">
        →
      </span>

    </button>
  );
}