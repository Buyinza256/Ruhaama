import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaChurch,
  FaFlipboard,
  FaUserNurse,
} from "react-icons/fa";
import {
  GiChefToque,
  GiClothes,
  GiReceiveMoney,
  GiSaloon,
} from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { IoLibrary } from "react-icons/io5";
import { MdCleaningServices, MdOutlineStorefront } from "react-icons/md";

type Props = {};

const Staff = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState("staff heads");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  // Dummy data for teachers
  const teachers = [
    {
      id: 1,
      name: "NAJUNA ABETH",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 2,
      name: "TWEBAZE DAN",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 3,
      name: "MWESIGYE JULIUS",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 4,
      name: "MUCUREEZI ZAKARIYA",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 5,
      name: "NINSIIMA GIFT<",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 6,
      name: "TURYATUNGA JULIUS",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 7,
      name: "AIJUKA JOSHUA",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 8,
      name: "KARATUNGYE ELIAS",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 9,
      name: "KANYESIGYE PEDSON",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 10,
      name: "BUKABEEBA STANLEY",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 11,
      name: "MUGUME CHARLES",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 12,
      name: "AGABA PHILEMON",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 13,
      name: "TWIJUKYE AARON",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 14,
      name: "MUCUNGUZI JAMES",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 15,
      name: "ZIRABA TOMSON",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 16,
      name: "TUSIIME LOYCE",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 17,
      name: "ATURINDE SOSTENE",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 18,
      name: "MPAMIRE NICHOLAS",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 19,
      name: "KAMURASI CALEB",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 20,
      name: "LODIGO ADOLPH",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 21,
      name: "KATEGA STUART",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 22,
      name: "KANYESIGYE GLORIOUS",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 23,
      name: "KAPASIKA AGNES",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 24,
      name: "GUMISIRIZA RESTY",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 25,
      name: "ACHIEVEMENT BRIAN",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 26,
      name: "NYESIGA JORAM",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 27,
      name: "MUGUME BENARD",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 27,
      name: "AHIMBISIBWE DENIS",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 27,
      name: "ANYIKIRIZA INNOCENT",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 27,
      name: "MWINE FRANCISCO<",
      position: "TEACHER",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    {
      id: 27,
      name: "David Johnson",
      position: "English Teacher",
      image: null,
      icon: (
        <FaChalkboardTeacher className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
    // Add more teachers as needed
  ];

  const staffHeads = [
    {
      id: 1,
      name: "Mr. Tumutoreine Nicholas",
      position: "Head Teacher",
      image: null,
      icon: <FaChalkboardTeacher className="icon" />,
    },
    {
      id: 2,
      name: "Bainomugisha Patrick ",
      position: "DEPUTY HEADTEACHER IN CHARGE OF ACADEMICS",
      image: null,
      icon: <FaChalkboardTeacher className="icon" />,
    },
    {
      id: 3,
      name: "NDYABAHIKA GEORGE",
      position: " DEPUTY HEADTEACHER INCHARGE OF DISCIPLINE",
      image: null,
      icon: <FaChalkboardTeacher className="icon" />,
    },
    {
      id: 4,
      name: "MUYAMBI AMON",
      position: "DIRECTOR OF STUDIES",
      image: null,
      icon: <FaChalkboardTeacher className="icon" />,
    },
    {
      id: 5,
      name: "ARINDA PRECIOUS",
      position: " SCHOOL SECRETARY",
      image: null,
      icon: <FaChalkboardTeacher className="icon" />,
    },
    {
      id: 6,
      name: "AHARIZIRA MOREEN",
      position: " SCHOOL BURSAR",
      image: null,
      icon: <GiReceiveMoney className="icon" />,
    },
    // Add more teachers as needed
  ];
  const religous = [
    {
      id: 1,
      name: "REV. CAN JULIET BARIGYE",
      position: "CHAPLAIN",
      image: null,
      icon: <FaChurch className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    // Add more teachers as needed
  ];
  const Other_Staff = [
    {
      id: 1,
      name: "NAMANYA EMILY",
      position: "SCHOOL LIBRARIAN",
      image: null,
      icon: <IoLibrary className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 2,
      name: "TURYOMURUGYENDO DOROTH",
      position: "TAILORING INSTRUCTOR",
      image: null,
      icon: <GiClothes className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 3,
      name: "ARINAITWE LATONA",
      position: "SCHOOL NURSE",
      image: null,
      icon: <FaUserNurse className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 4,
      name: "AKAMPWERA SOPHIA",
      position: "SALOON INSTRUCTOR",
      image: null,
      icon: <GiSaloon className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 5,
      name: "TUMUSHABE SHALLON",
      position: "MATRON",
      image: null,
      icon: <FaFlipboard className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 6,
      name: " AKORABIRUNGI BENJAMIN",
      position: "STORE KEEPER",
      image: null,
      icon: (
        <MdOutlineStorefront className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },

    {
      id: 7,
      name: "    TWESIGYE CHRISTOPHER",
      position: "COOK",
      image: null,
      icon: <GiChefToque className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 8,
      name: "BAHAME JOHN",
      position: "COOK",
      image: null,
      icon: <GiChefToque className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 9,
      name: "NAMAARA JACENTA",
      position: "COOK",
      image: null,
      icon: <GiChefToque className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 10,
      name: "  ASIIMWE JOHNSON",
      position: "COOK",
      image: null,
      icon: <GiChefToque className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 11,
      name: "NABATANZI FLORENCE",
      position: "COOK",
      image: null,
      icon: <GiChefToque className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 12,
      name: "MUHEREZA WILLIAM",
      position: " COOK",
      image: null,
      icon: <GiChefToque className="staff-icon" style={{ opacity: 0.8 }} />,
    },

    {
      id: 13,
      name: "MUHAIRWE ALFRED",
      position: "ASKARI",
      image: null,
      icon: (
        <GrShieldSecurity className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },

    {
      id: 14,
      name: " EBENU BOSCO",
      position: "ASKARI",
      image: null,
      icon: (
        <GrShieldSecurity className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },

    {
      id: 15,
      name: " BETUNGURA LIVING",
      position: "ASKARI",
      image: null,
      icon: (
        <GrShieldSecurity className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },

    {
      id: 16,
      name: "TWINAMASIKO BRIGHT",
      position: "COMPOUND",
      image: null,
      icon: (
        <MdCleaningServices className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },

    {
      id: 17,
      name: "TWINAMASIKO BRIGHT",
      position: "COMPOUND",
      image: null,
      icon: (
        <MdCleaningServices className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },

    {
      id: 18,
      name: "RUGOGAMU BESTON",
      position: "PORTER",
      image: null,
      icon: (
        <MdCleaningServices className="staff-icon" style={{ opacity: 0.8 }} />
      ),
    },
  ];

  return (
    <div className="bg-[lightblue] min-w-[1248px] px-4 py-16">
      <h1 className="capitalize text-center text-shadow">
        Meet the Engine that moves this school
      </h1>

      {/* Tab View For the Respective Staff */}
      <div className="min-w-[1260px] mx-auto px-4 py-8">
        <div className="bg-white min-w-[450px] rounded-md flex h-[55px] shadow-md justify-evenly items-center">
          <div
            className={`mr-2 cursor-pointer hover:text-[--primary-color] ${
              selectedTab === "staffHeads" && "text-[--primary-color]"
            }`}
            role="button"
            onClick={() => handleTabChange("staff heads")}
          >
            <h3 className="font-normal cursor-pointer hover:text-[--primary-color]">
              Staff Heads
            </h3>
          </div>
          <span className="border border-black w-[35px] h-[1px] block rotate-90"></span>
          <div
            className={`mr-2 cursor-pointer hover:text-[--primary-color] ${
              selectedTab === "teachers" && "text-[--primary-color]"
            }`}
            role="button"
            onClick={() => handleTabChange("teachers")}
          >
            <h3 className="font-normal cursor-pointer hover:text-[--primary-color]">
              Teachers
            </h3>
          </div>
          <span className="border border-black w-[35px] h-[1px] block rotate-90"></span>

          <div
            className={`mr-2 cursor-pointer hover:text-[--primary-color] ${
              selectedTab === "religous" && "text-[--primary-color]"
            }`}
            role="button"
            onClick={() => handleTabChange("religious")}
          >
            <h3 className="font-normal cursor-pointer hover:text-[--primary-color]">
              Religous Heads
            </h3>
          </div>
          <span className="border border-black w-[35px] h-[1px] block rotate-90"></span>

          <div
            className={`mr-2 cursor-pointer hover:text-[--primary-color] ${
              selectedTab === "other staff" && "text-[--primary-color]"
            }`}
            role="button"
            onClick={() => handleTabChange("other staff")}
          >
            <h3 className="font-normal cursor-pointer hover:text-[--primary-color]">
              Other Staff
            </h3>
          </div>
        </div>

        <div>
          {selectedTab === "staff heads" && (
            <div>
              <h2 className="text-lg font-light italic mb-4">Staff Heads</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* Here you can map through the staff heads and display them */}

                {staffHeads.map((head) => (
                  <div
                    key={head.id}
                    className="bg-white rounded-md p-4 shadow-md"
                  >
                    <h3 className="text-xl font-semibold">{head.name}</h3>
                    <p className="text-gray-600">{head.position}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "teachers" && (
            <div>
              <h2 className="text-lg font-light italic mb-4">Teachers</h2>
              <div className="overflow-y-auto">
                <div className="bg-[lightblue] flex flex-col items-center justify-center">
                  <h1 className="text-3xl font-bold mb-8">Teachers</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.map((teacher, index) => (
                      <div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                      >
                        {teacher?.image ? (
                          <img
                            src={teacher?.image ? teacher.image : ""}
                            alt={teacher.name}
                            className="w-24 h-24 rounded-full mb-4"
                          />
                        ) : (
                          <div className="w-24 h-24 rounded-full mb-4 flex justify-center items-center">
                            {teacher.icon}
                          </div>
                        )}

                        <h2 className="text-xl font-semibold">
                          {teacher.name}
                        </h2>
                        <p className="text-gray-600">{teacher.position}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "religious" && (
            <>
              <h2 className="text-lg font-light italic mb-4">
                Religious Heads
              </h2>

              <div className="flex items-center justify-between w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {religous.map((teacher, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center min-h-[350px] min-w-[250px]"
                    >
                      {teacher?.image ? (
                        <img
                          src={teacher?.image ? teacher.image : ""}
                          alt={teacher.name}
                          className="w-24 h-24 rounded-full mb-4"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full mb-4 flex justify-center items-center">
                          {teacher.icon}
                        </div>
                      )}
                      <h2 className="text-xl font-semibold p-4 mb-4">
                        {teacher.name}
                      </h2>
                      <p className="text-gray-600">{teacher.position}</p>
                    </div>
                  ))}
                </div>
                <div className="ml-[-4rem] bg-white px-6 py-4 mt-[-8rem] rounded-md">
                  <div className="w-full p-6">
                    <h2 className="w-full text-left text-shadow">
                      Brief Summary
                    </h2>
                  </div>
                  <div className=" bg-white h-[40%]">
                    Our Chaplain is a compassionate guide, offering spiritual
                    support and pastrol care to all members of our school
                    community. With a listening ear and open heart, they provide
                    comfort during times of need, foster inclusivity, and
                    promote personal growth. Dedicated to nurturing the holistic
                    well-being of students, satff and families, our Chaplain is
                    here to support you on your Journey.
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedTab === "other staff" && (
            <div className="flex flex-col items-center justify-center w-full mx-auto">
              <h2 className="text-lg font-light italic mb-4">Other Staff</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Other_Staff.map((teacher, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                  >
                    {teacher?.image ? (
                      <img
                        src={teacher?.image ? teacher.image : ""}
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full mb-4"
                      />
                    ) : (
                      <div className="w-24 h-24 rounded-full mb-4 flex justify-center items-center">
                        {teacher.icon}
                      </div>
                    )}
                    <h2 className="text-xl font-semibold">{teacher.name}</h2>
                    <p className="text-gray-600">{teacher.position}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="flex px-4 py-6 justify-center gap-[16rem]">
        <div className="head-teacher">
          <div className="h-[140px] w-[140px] rounded-[50%] bg-white shadow-[paleblack]-100 shadow-md">
        <div>
          <h2>Followed by a list of Staff Members</h2>{" "}
          <table>
            <tr>
              <th>NAME</th> <br></br>
              <th>POSITION</th>
            </tr>
            
           
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default Staff;
