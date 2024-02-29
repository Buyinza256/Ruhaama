import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-white ">
      <div className="w-full h-[95vh] mx-auto p-4 main-bg-img bg-cover bg-center">
        <NavBar />
        <main className="">
          <div className="flex flex-col justify-center items-center h-[85vh] w-[65%] mx-auto gap-4 lg:flex-col">
            {/* <img
              className="inline shadow-lg shadow-indigo-500/50"
              src={img_logo}
              alt="..."
            /> */}

            <h1 className="text-xl text-[--primary-color] text-center lg:text-center lg:text-7xl sm:text-4xl font-semibold w-full text-shadow-white">
              Ruhaama Secondary School
            </h1>
            <h1 className="text-sm  text-white text-shadow text-center lg:text-2xl w-[65%]">
              Ruhaama secondary school is located along Ntungamo-Mirama Hills
              road 21km from Ntungamo and 200M from the main road.
            </h1>
            <div className="text-center">
              <button className="py-4 px-6 bg-black border-white text-white">
                Expore
              </button>
            </div>
          </div>
        </main>
        <About />
      </div>
    </div>
  );
}

export default App;
