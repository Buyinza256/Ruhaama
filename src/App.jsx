import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import ContactUsPage from "./components/ContactUsPage.tsx";
import Footer from "./components/Footer.tsx";
import NavBar from "./components/NavBar";
import Staff from "./components/Staff.tsx";
import Students from "./components/Students.tsx";

function App() {
  return (
    <BrowserRouter basename="/">
      {/* Specify the basename here */}
      <div className="w-full h-[95vh] mx-auto p-4 main-bg-img bg-cover bg-center">
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
        <Students />
        <Staff />

        <About />

        <ContactUsPage />

        <Footer />

        <Routes>
          <Route path="/students" element={<Students />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
