import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Mousewheel, Keyboard } from "swiper";
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import Link from "next/link";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Figma to Code",
    description:
      "Convert modern UI designs from Figma into pixel-perfect, responsive web applications.",
  },
  {
    icon: <RxDesktop />,
    title: "Frontend Development",
    description:
      "Build dynamic and responsive websites using JavaScript, React.js, and Next.js.",
  },
  {
    icon: <RxPencil2 />,
    title: "UI Implementation",
    description:
      "Implement clean and reusable UI components using Tailwind CSS and Material UI.",
  },
  {
    icon: <RxRocket />,
    title: "Deployment & Hosting",
    description:
      "Deploy websites on Vercel, Netlify, and Firebase with domain setup and optimization.",
  },
  {
    icon: <RxReader />,
    title: "Backend Development",
    description:
      "I can build APIs and CRUD operation using Node.js, Express.js, and MongoDB.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[FreeMode, Pagination, Mousewheel, Keyboard]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rouded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal flex-grow">
                  {item.description}
                </p>
              </div>
              <Link href="/work">
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
