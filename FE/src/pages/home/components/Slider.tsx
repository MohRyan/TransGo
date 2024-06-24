import React from "react";
import { IBus } from "..";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ImTicket } from "react-icons/im";

const Slider = ({ dataBus }: { dataBus: IBus[] }) => {
  return (
    <div className="flex flex-col ">
      <span>Recomended for you</span>
      <Carousel>
        <CarouselContent>
          {dataBus.map((item, index) => (
            <CarouselItem className="flex justify-evenly cursor-pointer">
              <img
                key={index}
                src="./src/assets/bus baru 1.png"
                className="w-28 h-24 rounded-lg object-cover "
                alt=""
              />
              <div>
                <div className="flex flex-col">
                  <b>{item.poBus?.PO}</b>
                  <b>{item.bus}</b>
                </div>
                <div className="flex items-center gap-2">
                  <p>{item.from}</p>
                  <FaArrowAltCircleRight />
                  <p>{item.to}</p>
                </div>
                <div className="flex justify-between">
                  <p>Rp.{item.price}</p>
                  <div className="flex gap-1 items-center">
                    <ImTicket />
                    <p>{item.totalTiket}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {/* <div className="flex gap-2 w-full overflow-y-scroll">
        {dataBus.map((item, index) => (
          <img
            key={index}
            src="./src/assets/bus baru 1.png"
            className="w-28 h-24 rounded-lg object-cover "
            alt=""
          />
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
