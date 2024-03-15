import About from "./components/About";
import ContactUsPage from "./components/ContactUsPage.tsx";
import Footer from "./components/Footer.tsx";
import NavBar from "./components/NavBar";
import Staff from "./components/Staff.tsx";
import Students from "./components/Students.tsx";

function App() {
  return (
    <div className="w-full h-[95vh] mx-auto p-4 main-bg-img bg-cover bg-center">
      <div id="main-section">
        <NavBar />
        <main className="">
          <div className="flex flex-col justify-center items-center h-[85vh] w-[65%] mx-auto gap-4 lg:flex-col">
            <h1 className="text-xl text-[--primary-color] text-center lg:text-center lg:text-7xl sm:text-4xl font-semibold w-full text-shadow-white slide-in">
              Ruhaama Secondary School
            </h1>
            <h1 className="text-sm  text-white text-shadow text-center lg:text-2xl w-[65%] fade-in">
              Ruhaama secondary school is located along Ntungamo-Mirama Hills
              road 21km from Ntungamo and 200M from the main road.
            </h1>
            <div className="text-center">
              <button className="py-4 px-6 bg-black border-white text-white slide-in-bottom">
                Explore
              </button>
            </div>
          </div>
        </main>
      </div>

      <div id="students">
        <Students />
      </div>

      <div id="staff">
        <Staff />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <ContactUsPage />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
