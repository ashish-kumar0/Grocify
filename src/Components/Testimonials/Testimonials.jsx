import React from "react";
import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  //   const

  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto py-20">
        <Heading highlight="Customers" heading="Sayings" />

        <div className="flex justify-end mt-5 py-5 gap-x-3">
          <button className="custom-prev flex text-2xl text-zinc-800 rounded-lg w-11 h-11 justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next flex text-2xl text-zinc-800 rounded-lg w-11 h-11 justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev"
        }} 
        loop={true}
        breakpoints={{
            640:{slidesPerView: 1, spaceBetween: 20},
            768:{slidesPerView: 2, spaceBetween: 20},
            1024:{slidesPerView: 3, spaceBetween: 20},
        }}
        modules={[Navigation]} className="mySwiper">
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8">
                <div className="flex gap-5 items-center ">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline outline-2 outline-orange-500 outline-offset-4 overflow-hidden">
                    <img src={item.image} className="w-full h-full" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-yellow-400 mt-3 text-xl gap-1">
                        {Array.from({length: item.rating},(_, index)=>(
                            <FaStar/>
                        ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "Jasmin",
    profession: "Food Vlogger",
    rating: 4,
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet?",
    image: Customer1,
  },
  {
    id: 2,
    name: "Mukul ",
    profession: "Chef",
    rating: 4,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magni.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Raddhika",
    profession: "Model",
    rating: 4,
    para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, aliquam!",
    image: Customer3,
  },
  {
    id: 4,
    name: "Ashish ",
    profession: "Fitness Coach",
    rating: 3,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perferendis?",
    image: Customer4,
  },
  {
    id: 5,
    name: "Riya Singh",
    profession: "Nutritionist",
    rating: 4,
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eveniet.",
    image: Customer5,
  },
];
