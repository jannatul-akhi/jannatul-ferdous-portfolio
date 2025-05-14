/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Avater from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiCanva,
} from "react-icons/si";



//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTypescript />,
          <SiTailwindcss />,
          <SiBootstrap />
        ],
      },
      {
        title: "Backend Development",
        icons: [
          <SiExpress />,
          <SiMongodb />,
          <SiRedux />,
          <FaNode />,
        ],
      },
      {
        title: "Tools & Technologies",
        icons: [
          <FaGithub />,
          <SiPostman />,
          <SiVercel />,
          <SiNetlify />,
          

        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiCanva /> ]
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "Programming Hero- Level1- Batch7",
        stage: "2023",
      },
      {
        title: "Programming Hero- Level2- Batch3",
        stage: "2024",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Developer - Zaimah Technology",
        stage: "February, 2025 - Running",
      },
      {
        title: "Backend Developer Intern - Space Zee",
        stage: "March, 2025 - Running",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Computer Science & Engineering - Daffodil International University",
        stage: "2020-2024",
      },
      {
        title: "Higher Secondary Certificate - Adamjee Cantonment College",
        stage: "2016-2018",
      },
      {
        title: "Secondary School Certificate - Saidpur Cantonment Public School & College",
        stage: "2014-2016",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[180px]" // 370
      >
        <Avater />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px]  mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Three years ago, I began my journey as a developer. Since then, I’ve gained technical skills, completed several courses, and learned how to create responsive designs.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of learning experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
                </div>
              </div>

              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-0.5 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60" */}

                  <div className="font-light mb-2 md:mb-0 ">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  
                  <div className="flex gap-x-6">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div key={itemIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                  <div>{item.stage}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
