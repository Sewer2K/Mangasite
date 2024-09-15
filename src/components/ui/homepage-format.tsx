"use client";
import { FlamescansPopular } from "../data/types";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const Homepage = ({
  popularData,
  updatedData,
  newAddedData
}: {
  popularData: FlamescansPopular;
  updatedData: FlamescansPopular;
  newAddedData: FlamescansPopular;
}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Swiper Section */}
      <section className="w-full lg:w-3/4" aria-label="Recently Updated Mangas">
        <Swiper
          pagination={{ type: "fraction", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Pagination]}
          aria-label="Recently Updated Mangas Swiper"
        >
          {updatedData &&
            updatedData.results.map((item, index) => (
              <SwiperSlide key={index} aria-label={`Updated Slide ${index + 1}`}>
                <Link
                  href={`/read/manganato/${item.id}`}
                  aria-label={`Read ${item.title}`}
                >
                  <div
                    className="flex flex-row items-center p-1 bg-slate-700/50 shadow-2xl"
                    aria-label="Updated Manga Item"
                  >
                    <Image
                      src={item.img}
                      width={200}
                      height={250}
                      alt={`${item.title} Poster`}
                      className="lg:h-60 lg:w-40 h-48 w-32 rounded-md drop-shadow-2xl border-zinc-700 border-4"
                    />
                    <section className="ml-1 w-full">
                      <p
                        className="font-semibold text-xl flex md:hidden"
                      >
                        {item.title.length > 25
                          ? item.title.slice(0, 25) + "..."
                          : item.title}
                      </p>
                      <p
                        className="font-semibold text-xl hidden md:flex"
                      >
                        {item.title}
                      </p>
                      <div
                        className="flex flex-col"
                      >
                        <div
                          className="badge badge-accent badge-outline"
                        >
                          {item.date}
                        </div>
                        <p
                          className="ml-1 my-1 text-sm font-semibold text-info"
                        >
                          Author:{" "}
                          <span className="font-normal text-white">
                            {item.author}
                          </span>
                        </p>
                      </div>
                      <p
                        className="ml-1 text-sm hidden lg:flex"
                      >
                        {item.description ? item.description : "?"}...
                      </p>
                    </section>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4">
        <section aria-label="Popular Mangas">
          <h2 className="text-2xl font-semibold mb-4">Popular Mangas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularData &&
              popularData.results.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Link
                    href={`/read/manganato/${item.id}`}
                    aria-label={`Read ${item.title}`}
                  >
                    <Image
                      src={item.img}
                      width={150}
                      height={200}
                      alt={`${item.title} Poster`}
                      className="w-full h-auto rounded-md border border-zinc-700"
                    />
                  </Link>
                  <p className="mt-2 font-semibold text-center">
                    {item.title.length > 20
                      ? item.title.slice(0, 20) + "..."
                      : item.title}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </main>

      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-gray-100">
        <section aria-label="Newly Added Mangas">
          <h2 className="text-2xl font-semibold mb-4">Newly Added Mangas</h2>
          <ul>
            {newAddedData &&
              newAddedData.results.map((item, index) => (
                <li key={index} className="flex items-center mb-4">
                  <Link
                    href={`/read/manganato/${item.id}`}
                    aria-label={`Read ${item.title}`}
                  >
                    <Image
                      src={item.img}
                      width={80}
                      height={100}
                      alt={`${item.title} Poster`}
                      className="w-16 h-20 rounded-md border border-zinc-700"
                    />
                  </Link>
                  <p className="ml-2 text-sm font-semibold">
                    {item.title.length > 15
                      ? item.title.slice(0, 15) + "..."
                      : item.title}
                  </p>
                </li>
              ))}
          </ul>
        </section>
      </aside>
    </div>
  );
};

export default Homepage;
