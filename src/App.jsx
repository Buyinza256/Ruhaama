import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-white">
      <div className="max-w-[1288px] h-[95vh] mx-auto mt-4 bg-orange-100 p-4">
      <NavBar />
      <main>
        <div className="flex justify-center items-center h-[85vh] w-[65%] mx-auto gap-4 lg:flex-col">
          <h1 className="text-xl text-center lg:text-center lg:text-5xl sm:text-4xl font-semibold w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam, delectus iure .
          </h1>
          <h1 className="text-xs text-center lg:text-2xl font-thin w-[65%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam, delectus iure aspernatur nam maiores deserunt est ex aperiam, autem veritatis perspiciatis incidunt, sapiente quisquam eligendi quasi adipisci repellat velit!
          </h1>
          <div className="text-center">
            <button className="py-4 px-6 bg-black border-white text-white">Click Me</button>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}

export default App;
