"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function Hero() {
  const [propertyType, setPropertyType] = useState("sale");
  const [price, setPrice] = useState<[null | number, null | number]>([
    null,
    null,
  ]);
  const [size, setSize] = useState<[null | number, null | number]>([
    null,
    null,
  ]);
  const [activeRoom, setActiveRoom] = useState("");
  const [activeType, setActiveType] = useState("");

  const handleReset = () => {
    setPrice([null, null]);
    setSize([null, null]);
    setActiveRoom("");
    setActiveType("");
  };
  const formatNum = (num: number): string => {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    } else {
      return num.toString();
    }
  };

  return (
    <section className="relative h-[calc(100vh_-_60px)] lg:h-[calc(100vh_-_120px)]">
      {/* background slider */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={4000}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="project image"
              fill
              className="object-cover brightness-50"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* main content */}
      <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full z-10 py-10 flex flex-col justify-between">
        {/* title part  */}
        <div className="flex flex-col items-center gap-10 w-full  lg:items-start">
          <h1 className="text-white text-3xl text-center font-medium lg:text-6xl lg:text-start">
            Discover Your Most Comfort <br className="hidden lg:block" /> Place
            For Your Future Life
          </h1>
          <div className="flex items-center justify-center w-full lg:justify-between">
            {/* info section */}
            <div className="hidden gap-4 flex-row backdrop-blur-md bg-white/10 text-white p-6 rounded-sm lg:flex">
              {info.map((info) => (
                <div className="flex gap-2 items-center border-r last:border-r-0">
                  <h2 className="text-4xl font-medium">{info.value}</h2>
                  <p className="w-[100px] uppercase text-sm leading-[16px]">
                    {info.label}
                  </p>
                </div>
              ))}
            </div>
            <Button className="text-white min-w-[120px]">
              All Projects <ArrowRight className="hidden  lg:flex" />
            </Button>
          </div>
          {/* cusome navigation arrows */}
          <div className="flex justify-between items-center w-full">
            <Button className="prev-btn size-10 rounded-full  backdrop-blur-md bg-white/10">
              <ChevronLeft className="size-6 text-white" />
            </Button>
            <Button className="prev-btn size-10 rounded-full  backdrop-blur-md bg-white/10">
              <ChevronRight className="size- text-white" />
            </Button>
          </div>
        </div>
        {/* search part */}
        <div className="flex flex-col items-center justify-center backdrop-blur-md bg-white/10 rounded-lg p-8 gap-3">
          {/* switch +  clear button */}
          <div className="flex gap-3 w-full justify-center lg:justify-start  ">
            {/* switch */}
            <Tabs value={propertyType} onValueChange={setPropertyType}>
              <TabsList className="rounded-full h-10">
                {propertyStatus.map((item) => (
                  <TabsTrigger
                    value={item.value}
                    className="cursor-pointer data-[state=active]:bg-[#01062D] data-[state=active]:text-white rounded-full px-6 uppercase font-medium"
                  >
                    {item.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            {/* reset button */}

            <Button
              variant="ghost"
              className="hidden border-b rounded-none text-white px-4 font-semibold lg:flex"
              onClick={handleReset}
            >
              <RotateCw className="rotate-[250deg]" />
              RESET
            </Button>
          </div>

          {/* search fields */}

          <div className="flex gap-2 flex-1 w-full justify-center lg:justify-start">
            {/* search input */}
            <div className="relative w-[200px] m-w-[200px]  bg-white rounded-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="text"
                placeholder="City, community, area"
                className="pl-10"
              />
            </div>

            {/* property type select */}
            <Select>
              <SelectTrigger className="hidden flex-1 bg-white md:flex">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* bedroom select */}
            <Select>
              <SelectTrigger className="hidden  bg-white flex-1 md:flex">
                <SelectValue placeholder="Bedroom" />
              </SelectTrigger>
              <SelectContent>
                {bedrooms.map((room) => (
                  <SelectItem value={room}>{room}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* price select */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden  rounded-lg flex-1 h-9 bg-white lg:flex items-center px-3 text-sm justify-between">
                {price[0] && price[1] ? (
                  <span>
                    AED {formatNum(price[0])} - {formatNum(price[1])}
                  </span>
                ) : (
                  <span className="text-gray-500">Price</span>
                )}
                <ChevronDown className="size-4 text-gray-400 rounded-md" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <h3>Price (AED)</h3>
                <div className="flex gap-2 items-center justify-center">
                  <div className="">
                    <div className="">
                      <label className="text-sm text-gray-500">Minimum</label>
                      <Input
                        value={price[0] || ""}
                        type="number"
                        placeholder="0"
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setPrice((prev) => [newValue, prev[1]]);
                        }}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="text-sm text-gray-500">Maximum</label>
                    <Input
                      value={price[1] || ""}
                      placeholder="Any"
                      type="number"
                      onChange={(e) => {
                        const newValue = Number(e.target.value);
                        setPrice((prev) => [prev[0], newValue]);
                      }}
                    />
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* size select */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden bg-white rounded-lg h-9 lg:flex items-center px-3 text-sm justify-between flex-1">
                {size[0] && size[1] ? (
                  <span>
                    Area {formatNum(size[0])} - {formatNum(size[1])}
                  </span>
                ) : (
                  <span className="text-gray-500">Size (sqft)</span>
                )}
                <ChevronDown className="size-4 text-gray-400 rounded-md" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <h3>Size (sqft)</h3>
                <div className="flex gap-2 items-center justify-center">
                  <div className="">
                    <div className="">
                      <label className="text-sm text-gray-500">Minimum</label>
                      <Input
                        value={size[0] || ""}
                        type="number"
                        placeholder="0"
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSize((prev) => [newValue, prev[1]]);
                        }}
                      />
                    </div>
                  </div>

                  <div className="">
                    <label className="text-sm text-gray-500">Maximum</label>
                    <Input
                      value={size[1] || ""}
                      placeholder="Any"
                      type="number"
                      onChange={(e) => {
                        const newValue = Number(e.target.value);
                        setSize((prev) => [prev[0], newValue]);
                      }}
                    />
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* mobile search */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button className="bg-white rounded-sm lg:hidden">
                  <SlidersHorizontal />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="flex flex-col gap-5 p-8">
                {/* mobile price */}
                <div>
                  <h3>Price</h3>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-sm text-gray-500">Minimum</label>
                      <Input
                        value={price[0] || ""}
                        type="number"
                        placeholder="0"
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setPrice((prev) => [newValue, prev[1]]);
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-sm text-gray-500">Maximum</label>
                      <Input
                        value={price[1] || ""}
                        placeholder="Any"
                        type="number"
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setPrice((prev) => [prev[0], newValue]);
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* mobile size */}
                <div>
                  <h3>Size</h3>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label className="text-sm text-gray-500">Minimum</label>
                      <Input
                        value={size[0] || ""}
                        type="number"
                        placeholder="0"
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSize((prev) => [newValue, prev[1]]);
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <label className="text-sm text-gray-500">Maximum</label>
                      <Input
                        value={size[1] || ""}
                        placeholder="Any"
                        type="number"
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          setSize((prev) => [prev[0], newValue]);
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* mobile bedroom */}
                <div>
                  <h3 className="mb-3">Bedroom</h3>

                  <div className="flex gap-2 flex-wrap">
                    {bedrooms.map((room) => (
                      <Button
                        variant={activeRoom === room ? "default" : "outline"}
                        onClick={() => setActiveRoom(room)}
                      >
                        {room}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* mobile type */}
                <div>
                  <h3 className="mb-3">Property Type</h3>

                  <div className="flex gap-2 flex-wrap">
                    {propertyTypes.map((type) => (
                      <Button
                        variant={activeType === type ? "default" : "outline"}
                        onClick={() => setActiveType(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                {/* mobile clear */}
                {/* actions */}
                <div className="flex w-full justify-end item-end gap-3 mt-10">
                  <Button>
                    Search
                    <Search />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-b px-4 font-semibold flex"
                    onClick={handleReset}
                  >
                    <RotateCw className="rotate-[250deg]" />
                    RESET
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>

            <Button className="text-white">
              <span className="hidden lg:block">Search</span>
              <Search className="lg:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const sliderImages = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const info = [
  {
    label: "Popular Areas",
    value: "5+",
  },

  {
    label: "Projects",
    value: "11+",
  },
  {
    label: "Years Experience",
    value: "6+",
  },
];

const propertyStatus = [
  {
    label: "For Sale",
    value: "sale",
  },
  {
    label: "For Rent",
    value: "rent",
  },
];

const bedrooms = [
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "+5 Bedrooms",
];

const propertyTypes = ["Vill", "Apartment", "Townhouse", "Compound", "Duplex"];
