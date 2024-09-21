import "../globals.css";

export default function Home() {
  return (
    <div className="flex items-center min-h-screen flex-col text-xl">
      <h1 className="text-4xl text-center mb-6">Semester 1 Computer Science</h1>
      <div className="flex w-96 justify-center content-center">
        <div className="flex-none w-14 text-center">1</div>
        <div className="flex-1 w-64 text-center">Liv</div>
        <div className="flex-none w-14 text-center">8000</div>
      </div>
      <div className="flex w-96 justify-center content-center">
        <div className="flex-none w-14 text-center">2</div>
        <div className="flex-1 w-64 text-center">Liv</div>
        <div className="flex-none w-14 text-center">8000</div>
      </div>
      <div className="flex w-96 justify-center content-center">
        <div className="flex-none w-14 text-center">3</div>
        <div className="flex-1 w-64 text-center">Liv</div>
        <div className="flex-none w-14 text-center">8000</div>
      </div>
    </div>
  );
}