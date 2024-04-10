"use client";

import React, { useState } from "react";
import { Button, Group, Text, Collapse, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const FAQ = () => {
  // const [opened, { toggle }] = useDisclosure(false);
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(false);

  const data = [
    {
      id: 1,
      title: "Is there a time limit for each session?",
      desc: "No, you are free to complete the questions at your own speed, making the most of your critical thinking and problem-solving abilities.",
    },
    {
      id: 2,
      title: "Are the 12 categories comprehensive enough?",
      desc: "It has been thoroughly investigated and demonstrated that the 12 categories encompass the majority of issues that we may face in the real world.",
    },
    {
      id: 3,
      title:
        "Is the critical thinking formula capable of solving real life problems",
      desc: "Of course! The critical thinking formula has been meticulously crafted to guide you through each step of problem solving, brainstorming solutions, critical thinking, implementation, and evaluation. By following our guidance, you'll be able to approach any problem or difficulty from new perspectives.",
    },
    {
      id: 4,
      title: "How do I view my session after it is completed?",
      desc: "At the conclusion of each completed session, you will be able to download it, and you will also receive a PDF copy of the completed session. You can view all of the data in this way and become better informed.",
    },
    {
      id: 5,
      title: "Do I need a high IQ to use the critical thinking  formula?",
      desc: "The critical thinking  formula is meant to amplify your intelligence, so that you can figure out difficult situations on your own. It is not required of you to be highly intelligent or gifted to use it.",
    },
    {
      id: 6,
      title: "Can I save my progress and come back to finish at a later time?",
      desc: "Yes, Treep allows users to schedule rides in advance. Simply select the 'Schedule Ride' option in the app, choose your desired date and time, and confirm your booking.",
    },
  ];

  const handleOpen = (e, i, item) => {
    console.log(e.target.value, item.id, i);
    if (item.id === i+1) {
      setShow((prev) => !prev);
    }
  };

  // const {setPageTitle} = useContext(AppContext)

  // useEffect(() => {
  //  setPageTitle("FAQs")
  // }, [])

  return (
    <div className="flex items-center bg-[#FBF7F0] justify-center w-full md:min-h-[918px] max-sm:py-12 max-sm:px-5">
      <div className=" text-oscuro pt-10 md:pt-24 md:px-16 text-black">
        <div>
          <section className="text-gray-700">
            <div className="px-5 py-16 lg:py-24 mx-auto">
              <div className="text-center mb-20">
                <h1 className="text-2xl md:text-[44px] text-[#4B5563] font-bold">
                  Frequently asked questions
                </h1>
              </div>

              <div className="flex w-full sm:mx-auto sm:mb-2">
                <div className="w-[760px] py-2 flex flex-col gap-3 justify-center">
                  {data?.map((item, i) => (
                    <div
                      key={item.id}
                      className={`${
                        show ? "bg-white" : "border"
                      }  px-8 py-5 flex flex-col gap-2 items-center justify-center mb-4 cursor-pointer rounded-2xl`}
                    >
                      <span
                        onClick={(e) => handleOpen(e, i, item)}
                        className={`${
                          show && "border-b "
                        } text-xl text-[#4B5563] font-bold w-full rounded-md py-2 flex items-center justify-between`}
                      >
                        {item.title}

                        {!show ? (
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="39"
                              height="39"
                              rx="19.5"
                              stroke="#4B5563"
                            />
                            <path
                              d="M19.25 20.75H13V19.25H19.25V13H20.75V19.25H27V20.75H20.75V27H19.25V20.75Z"
                              fill="#4B5563"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="20"
                              fill="#347566"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.25 20.75H13V19.25H19.25H20.75H27V20.75H20.75H19.25Z"
                              fill="white"
                            />
                          </svg>
                        )}
                      </span>

                      <span className={`${!show ? "hidden" : "flex"}`}>
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
