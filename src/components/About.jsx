import React from "react";
import img_logo from "../assets/logos/LOGO RSS.jpg  5.png";

const About = () => {
  const about_info = [
    { title: "Founded In", description: 1970 },
    { title: "Founded By", description: "Ruhaama" },
    { title: "Located", description: 1970 },
    { title: "Founded In", description: 1970 },
  ];

  const head_teachers = [
    { title: "Mr. Kanyesigye John ", period_of_service: "1985-1986" },
    { title: "Mr. Byangumaho David ", period_of_service: "1986-1987" },
    { title: "Mr. Aryatunga Wilson ", period_of_service: "1987-1994" },
    { title: "Mr. Ruhakana Wellen ", period_of_service: "1994-1998" },
    { title: "Mr Morrison Patrick Murindwa", period_of_service: "2010-2017" },
    { title: "Mr Tumutoreine Nicholas", period_of_service: " 2018 to date" },
  ];

  const governers = [
    { title: "The right Rev Bishop Amos Betungura" },
    { title: "Ven Keith Katakanya" },
    { title: "Mr. Eriphaz Bindeeba " },
    { title: "Mr. Katto Eliakim" },
  ];

  return (
    <section className="min-h-[100vh] w-full bg-white p-2 ">
      <div className="flex justify-center items-center flex-col">
        <div className="p-4">
          <h1 className="text-shadow lg:text-4xl">Know More About Ruhaama</h1>
        </div>
        <div className="p-4">
          <h2 className="text-shadow text-center text-sm lg:text-2xl opacity-[0.9] border-b-black ">
            What is Ruhaama Secondary School
          </h2>

          <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <div className="w-[85%] h-full mx-auto p-4 mt-4 bg-gray-100 min-h-[400px] col-span-2 md:col-span-3 row-span-2">
              <div className="flex flex-col justify-center items-center w-[95%] mx-auto">
                <img
                  className="inline shadow-lg shadow-indigo-500/50"
                  src={img_logo}
                  alt="..."
                />

                <div className="w-full mx-auto mt-4">
                  <p className="text-justify">
                    Ruhaama secondary school is located along Ntungamo-Mirama
                    Hills road 21km from Ntungamo and 200M from the main road.
                    The school started on 13/03/1985 under the efforts of Hon
                    Rwaboona Kagurutsi (RIP) It started as single girls boarding
                    "O" level school registered with ministry of Education and
                    Sports. The school originated from Ruhaama primary school
                    after the parents showed interests for secondary education
                    of their children especially girls It started as single
                    girls boarding "O" level school registered with ministry of
                    Education and Sports. The school originated from Ruhaama
                    primary school after the parents showed interests for
                    secondary education of their children especially girls. In
                    1983 under the leadership of Mr. Aryatunga Wilson (head
                    teacher) the Board of Governors agreed to change the school
                    to a mixed due to low numbers in students' population and
                    need for secondary education for boys. When mixed secondary
                    was introduced the number rose from 18 to 45 that year.
                    Since then, the school has been mixed for both boys and
                    girls In 2011 after the concern for advanced level
                    education, the Board of Governors resolved that the school
                    starts "A" level which started term 1 2012.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="ml-4">
                <b>FOUNDATION</b>
              </h4>
              <ul className="border-s-8 border-b-gray-100 flex flex-col">
                {about_info.map((item, index) => (
                  <li key={index}>
                    {item.title}:
                    <span className="font-bold italic">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="ml-4 font-bold"> BOARD OF GOVERNERS </h4>
              <ul className="border-s-8 border-b-gray-100 flex flex-col">
                {governers.map((item, index) => (
                  <li key={index} className="mb-[-1rem]">
                    {item.title}:
                    <span className="font-bold italic">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="ml-4 font-bold">HEAD TEACHERS </h4>
              <ul className="border-s-8 border-b-gray-100 flex flex-col">
                {head_teachers.map((item, index) => (
                  <li key={index} className="mb-[-1rem]">
                    {item.title}:
                    <span className="font-bold italic">
                      {item.period_of_service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="ml-4">Title</h4>
              <ul className="border-s-8 border-b-gray-100 flex flex-col">
                {about_info.map((item, index) => (
                  <li key={index} className="mb-[-1rem]">
                    {item.title}:
                    <span className="font-bold italic">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
