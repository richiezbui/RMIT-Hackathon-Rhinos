import "../globals.css";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen flex-col text-xl bg-gradient-to-br from-blue-500 to-purple-600 p-10">
      <h1 className="text-5xl text-center mb-10 font-bold text-white shadow-md">Semester 1 Computer Science</h1>
      <div className="flex flex-col items-center gap-6 w-full max-w-md mb-10">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full text-center">
          <div className="text-2xl font-semibold">1</div>
          <div className="text-xl mt-2 flex items-center justify-center gap-2">
            <img src="https://via.placeholder.com/40" alt="avatar" className="rounded-full" />
            <span>Liv</span>
          </div>
          <div className="text-green-500 font-bold text-lg mt-2">8000</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 w-full text-center">
          <div className="text-2xl font-semibold">2</div>
          <div className="text-xl mt-2 flex items-center justify-center gap-2">
            <img src="https://via.placeholder.com/40" alt="avatar" className="rounded-full" />
            <span>Liv</span>
          </div>
          <div className="text-green-500 font-bold text-lg mt-2">7500</div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4 w-full text-center">
          <div className="text-2xl font-semibold">3</div>
          <div className="text-xl mt-2 flex items-center justify-center gap-2">
            <img src="https://via.placeholder.com/40" alt="avatar" className="rounded-full" />
            <span>Liv</span>
          </div>
          <div className="text-green-500 font-bold text-lg mt-2">7200</div>
        </div>
      </div>

      <ul className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg">
        <li className="flex justify-between p-3 border-b border-gray-200">
          <span className="font-semibold">4</span>
          <span>Alex</span>
          <span className="text-green-500">6800</span>
        </li>
        <li className="flex justify-between p-3 border-b border-gray-200">
          <span className="font-semibold">5</span>
          <span>Sam</span>
          <span className="text-green-500">6600</span>
        </li>
        <li className="flex justify-between p-3 border-b border-gray-200">
          <span className="font-semibold">6</span>
          <span>Chris</span>
          <span className="text-green-500">6500</span>
        </li>
        <li className="flex justify-between p-3 border-b border-gray-200">
          <span className="font-semibold">7</span>
          <span>Jordan</span>
          <span className="text-green-500">6400</span>
        </li>
      </ul>
    </div>
  );
}