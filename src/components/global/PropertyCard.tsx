import Image from "next/image";
import { Button } from "../ui/button";
import {
  BathIcon,
  BedIcon,
  ChevronLeft,
  ChevronRight,
  HeartIcon,
  MapPin,
  MessageCircle,
  RulerDimensionLineIcon,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export type TProperty = {
  id: number;
  images: string[];
  type: string;
  price: number;
  name: string;
  location: string;
  bed: number;
  bath: number;
  area: number;
  agent: {
    name: string;
    avatar: string;
  };
};

export default function PropertyCard({ data }: { data: TProperty }) {
  return (
    <div className="border rounded-sm overflow-hidden cursor-pointer">
      {/* image */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          allowTouchMove={false}
          className="w-full h-full "
          navigation={{
            prevEl: ".prev-btn-property-" + data.id,
            nextEl: ".next-btn-property-" + data.id,
          }}
        >
          {data.images.map((property, index) => (
            <SwiperSlide key={index} className="w-full h-8">
              <Image
                src={property}
                alt="propery image"
                width={300}
                height={300}
                className="w-full object-cover aspect-video"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-3 px-3 flex items-start w-full justify-between z-10 ">
          <div className="space-y-2">
            <div className="bg-primary rounded-sm h-7 text-center p-3 flex items-center justify-center w-fit">
              <span className="text-sm text-white">{data.type}</span>
            </div>

            <div className="backdrop-blur-md bg-black/50 rounded-sm h-7 text-center p-3 flex items-center justify-center">
              <span className="text-sm text-white">Property Type</span>
            </div>
          </div>

          <Button className="rounded-full bg-black size-8 p-0  ">
            <HeartIcon className="size-4 text-primary" />
          </Button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/4 z-10 w-full px-3 flex items-center justify-between">
          <Button
            className={`next-btn-property-${data.id} size-7 rounded-full backdrop-blur-md bg-black/50`}
          >
            <ChevronLeft className="text-white size-5" />
          </Button>

          <Button
            className={`prev-btn-property-${data.id} size-7 rounded-full backdrop-blur-md bg-black/50`}
          >
            <ChevronRight className="text-white size-5" />
          </Button>
        </div>
        <span className=" absolute left-3 bottom-3 z-10 text-white font-medium  ">
          $ {data.price}
        </span>
      </div>
      {/* content */}
      <div className="p-3 flex  flex-col gap-3">
        <span className="font-bold">{data.name}</span>
        <span className="text-gray-400 text-sm flex items-center gap-1 ">
          <MapPin className="text-primary size-4" />
          {data.location}
        </span>
        {/* info */}
        <div className="flex flex-row items-center gap-2">
          <div className="flex items-center font-medium text-sm border-e pe-2 gap-1">
            <BedIcon className="text-primary size-5" />
            {data.bed} Bed
          </div>

          <div className="flex items-center font-medium text-sm border-e pe-2 gap-1">
            <BathIcon className="text-primary size-5 " />
            {data.bath} Bath
          </div>

          <div className="flex items-center font-medium text-sm">
            <RulerDimensionLineIcon className="text-primary size-5" />
            {data.area} FT
          </div>
        </div>
        {/* buttons */}
        <div className="flex flex-row gap-1">
          <Button variant="outline" className="rounded-sm text-sm flex-1">
            <MessageCircle className="text-[#60D669]" />
          </Button>

          <Button variant="outline" className="rounded-sm text-sm flex-1">
            Call
          </Button>
          <Button variant="outline" className="rounded-sm text-sm flex-1">
            Email
          </Button>
        </div>
        {/* agent */}
        <div className="flex items-center justify-between border-t pt-3 gap-1">
          <div className="flex items-center gap-3">
            <Image
              src={data.agent.avatar}
              className="rounded-full size-10 object-cover"
              alt={data.agent.name + "avatar"}
              width={40}
              height={40}
            />
            <span className="text-sm">{data.agent.name}</span>
          </div>
          <Button variant="outline" className="text-primary border-primary">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}
