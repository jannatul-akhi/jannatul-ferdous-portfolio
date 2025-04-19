import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Mousewheel, Keyboard } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Bistro Boss",
          path: "/projects/bistro-boss.png",
          liveLink: "https://bistro-boss-fd747.web.app/",
          githubLink: "",
        },
        {
          title: "Techno Soft",
          path: "/projects/travel.jpg",
          liveLink: "https://travel-tips-and-destination-guide-client.vercel.app/",
          githubLink: "",
        },
        {
          title: "Glide Wash",
          path: "/projects/GlideWash.png",
          liveLink: "https://car-wash-client-three.vercel.app/",
          githubLink: "",
        },
        {
          title: "Elegant International",
          path: "/projects/elegant-international.png",
          liveLink: "https://elegant-international.vercel.app/",
          githubLink: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Smile Health Thailand",
          path: "/projects/smile-health.png",
          liveLink: "https://smile-health.vercel.app/",
          githubLink: "",
        },
        {
          title: "Perfume Shop",
          path: "/projects/perfume-shop.png",
          liveLink: "https://perfume-shop-liard.vercel.app/",
          githubLink: "",
        },
        {
          title: "GoAero",
          path: "/projects/GoAero.jpg",
          liveLink: "https://lucky-bombolone-991dd3.netlify.app/",
          githubLink: "",
        },
        {
          title: "Geometry Genius",
          path: "/projects/geometry.png",
          liveLink: "https://geometry-genius-assignment5.vercel.app/",
          githubLink: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      keyboard={true}
      modules={[FreeMode, Pagination, Mousewheel, Keyboard]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-start justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group  ">
                      <Image
                        src={image.path}
                        height={300}
                        width={500}
                        alt="image"
                        className="aspect-[4/2]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex flex-col space-y-2 items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <div className="text-sm font-semibold">
                            {image.title}
                          </div>

                          <a
                            href={image.liveLink} // Replace with your actual Vercel link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center gap-x-1 group"
                          >
                            <div className="delay-100 inline">LIVE Project</div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </a>

                          {/* <div className="flex flex-row">
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              GitHub Link
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
