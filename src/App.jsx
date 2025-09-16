export default function App() {
  return (
    <div className="min-h-screen p-4 bg-lime-200 flex flex-col gap-4">

      {/* Top Section */}
      <div className="flex justify-between gap-4 p-2 border-4 border-blue-600 bg-sky-200">
        <div className="flex-1 border-4 border-rose-300 bg-orange-200"></div>
        <div className="flex border-4 border-red-600 bg-rose-200">
          <div className="flex-1 border-4 border-rose-400"></div>
          <div className="flex-1 border-4 border-rose-400"></div>
        </div>
        <div className="flex-1 border-4 border-rose-300 bg-orange-200"></div>
      </div>

      {/* Middle Section */}
      <div className="flex gap-4 p-2">
        <div className="flex-1 border-4 border-rose-700 bg-rose-300 min-h-[200px]"></div>
        <div className="flex flex-col gap-4 flex-1">
          <div className="border-4 border-rose-700 bg-rose-300 flex-1"></div>
          <div className="border-4 border-rose-700 bg-rose-300 flex-1"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between gap-4 p-2 border-4 border-blue-600 bg-sky-200">
        <div className="flex-1 border-4 border-blue-400 bg-indigo-200"></div>
        <div className="flex-1 border-4 border-rose-400 bg-orange-200"></div>
        <div className="flex-1 border-4 border-rose-400 bg-orange-200"></div>
        <div className="flex-1 border-4 border-blue-400 bg-indigo-200"></div>
      </div>

    </div>
  );
}
