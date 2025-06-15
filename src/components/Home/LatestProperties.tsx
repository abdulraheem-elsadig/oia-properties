"use client";

import { useState } from "react";
import SectionTitle from "../global/SectionTitle";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PropertyCard from "../global/PropertyCard";

export default function LatestProperties() {
  const [activeTab, setActiveTab] = useState(tabList[0]);
  return (
    <section className="py-10 lg:py-14">
      <div className="container">
        <SectionTitle title="latest properties" />
        {/* tabs */}
        <Tabs
          className="my-4 lg:my-6"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="rounded-sm border h-10 p-0 bg-white">
            {tabList.map((item, index) => (
              <TabsTrigger
                key={index}
                value={item}
                className="cursor-pointer data-[state=active]:bg-primary px-6 uppercase font-medium rounded-sm"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      {/* cards */}
      <div className="container">
        <Swiper
          modules={[Navigation]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="w-full h-full"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".prev-btn-property",
            nextEl: ".next-btn-property",
          }}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index}>
              <PropertyCard data={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const tabList = ["for sale", "for rent"];

const properties = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Rent",
    price: 899,
    name: "Palm View Residence",
    location: "Dubai, Palm Jumeirah",
    bed: 2,
    bath: 2,
    area: 980,
    agent: {
      name: "Ali Rahman",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f8f0a814b8ad?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 1750,
    name: "Skyline Heights",
    location: "Dubai Marina",
    bed: 4,
    bath: 3,
    area: 1500,
    agent: {
      name: "Maya Al Farsi",
      avatar:
        "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Rent",
    price: 720,
    name: "Corniche Tower",
    location: "Abu Dhabi, Corniche Road",
    bed: 1,
    bath: 1,
    area: 750,
    agent: {
      name: "David Lee",
      avatar:
        "https://images.unsplash.com/photo-1614285691370-2a24f53ff2d0?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 4,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 2100,
    name: "Marina Bay Towers",
    location: "Sharjah Waterfront",
    bed: 5,
    bath: 4,
    area: 1980,
    agent: {
      name: "Fatima Zahra",
      avatar:
        "https://images.unsplash.com/photo-1614284479991-c39b51ecb8c2?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 5,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 1300,
    name: "Desert Pearl Villa",
    location: "Al Ain, Zakher",
    bed: 3,
    bath: 2,
    area: 1200,
    agent: {
      name: "Omar Khalid",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 6,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Rent",
    price: 650,
    name: "Oasis Heights",
    location: "Dubai, Al Barsha",
    bed: 1,
    bath: 1,
    area: 800,
    agent: {
      name: "Sara Imran",
      avatar:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 7,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 1899,
    name: "Sunset Bay Villas",
    location: "Abu Dhabi, Saadiyat Island",
    bed: 4,
    bath: 5,
    area: 2200,
    agent: {
      name: "Mohammed Al Hadi",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 8,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Rent",
    price: 780,
    name: "Green Leaf Apartments",
    location: "Sharjah, Al Majaz",
    bed: 2,
    bath: 2,
    area: 950,
    agent: {
      name: "Linda George",
      avatar:
        "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f5?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 9,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 1450,
    name: "Bluewater Residence",
    location: "Dubai, Bluewaters Island",
    bed: 3,
    bath: 3,
    area: 1350,
    agent: {
      name: "Youssef Hamdan",
      avatar:
        "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 10,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 990,
    name: "Al Reef Homes",
    location: "Abu Dhabi, Al Reef",
    bed: 2,
    bath: 2,
    area: 1100,
    agent: {
      name: "Nadia Hassan",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 11,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Rent",
    price: 580,
    name: "City Centre Lofts",
    location: "Ajman, Al Nuaimiya",
    bed: 1,
    bath: 1,
    area: 720,
    agent: {
      name: "Rashid Qasim",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 12,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 1600,
    name: "Pearl Coast Villas",
    location: "Ras Al Khaimah, Mina Al Arab",
    bed: 4,
    bath: 3,
    area: 1750,
    agent: {
      name: "Aaliyah Noor",
      avatar:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 13,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Rent",
    price: 940,
    name: "The Address Residences",
    location: "Dubai, Downtown",
    bed: 2,
    bath: 2,
    area: 1000,
    agent: {
      name: "Hamza Sultan",
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f8f0a814b8ad?w=500&auto=format&fit=crop&q=60",
    },
  },
  {
    id: 14,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    type: "For Sale",
    price: 2200,
    name: "Palm Breeze Estate",
    location: "Dubai, Palm Jumeirah",
    bed: 5,
    bath: 6,
    area: 2600,
    agent: {
      name: "Zara Ahmed",
      avatar:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&auto=format&fit=crop&q=60",
    },
  },
];
