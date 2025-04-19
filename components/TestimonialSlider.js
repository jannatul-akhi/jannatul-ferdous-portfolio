import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

// testimonial data
const testimonialData = [
  {
    image: "/blog/javascript.jpg",
    name: "Exploring Modern JavaScript Features",
    date: "October 20, 2024",
    message:
      "JavaScript has come a long way, evolving into a language full of powerful features that make coding cleaner, faster, and more efficient. Let’s explore some modern JS features you can start using today!",
  },
  {
    image: "/blog/responsive.jpg",
    name: "Building Responsive Web Apps",
    date: "November 24, 2024",
    message:
      "In today’s mobile-first world, building responsive web apps isn’t optional; it’s essential. Let’s dive into best practices and tools to create stunning web apps that look great on any screen size.",
  },
  {
    image: "/blog/nextjs.jpg",
    name: "Exploring Next.js",
    date: "September 28, 2024",
    message:
      "Next.js has taken the web development world by storm, offering features like server-side rendering and static site generation out of the box. Here’s why it’s the perfect choice for modern web apps.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      keyboard={true}
      modules={[Navigation, Pagination, Keyboard]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      height={200}
                      width={200}
                      alt="image"
                    />
                  </div>
                  <div className="text-lg">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.date}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div >
                <a href="">
                <div className="flex flex-row items-center gap-x-1 group justify-end mt-4 text-accent">
                  <div className="font-bold">Read More</div>
                  <div className="text-xl ">
                    <BsArrowRight />
                  </div>
                </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
