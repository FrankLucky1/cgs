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
      title: "How do i install the AC?",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.",
    },
    {
      id: 2,
      title: "How do i install the AC?",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.",
    },
    {
      id: 3,
      title:
        "How do i install the AC?",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.",
    },
    {
      id: 4,
      title: "How do i install the AC?",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.",
    },
    {
      id: 5,
      title: "How do i install the AC?",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.",
    },
    {
      id: 6,
      title: "How do i install the AC?",
      desc: "Lorem ipsum dolor sit amet consectetur. Ultricies at eu tristique in quam vel ultricies. Volutpat vel odio iaculis viverra auctor semper. Velit tortor nisi porttitor at fermentum congue sapien augue id. A at at felis lacinia ac. Amet sed nunc sit volutpat cras felis. Dolor feugiat at.",
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
    <div className="flex items-center bg-[#FBF7F0] justify-center w-full md:min-h-[918px] max-sm:py-12 max-sm:px-">
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
                <div className="w-full md:w-[760px] py-2 flex flex-col gap-3 justify-center">
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
                        } text-sm md:text-xl text-[#4B5563] font-bold w-full rounded-md py-2 flex items-center justify-between`}
                      >
                        <span className=" max-sm:max-w-[80%]">

                        {item.title}
                        </span>

                        {!show ? (
                          <svg
                          className="w-[20px] md:w-[40px]"
                       
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
                          className="w-[20px] md:w-[40px]"
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

                      <span className={`${!show ? "hidden" : "flex"} max-sm:text-sm`}>
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
