"use client";
import { useRef, useState, useEffect } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import Nav from "../components/Nav";
import "./globals.css";



const videos = [
  {
    title: "Central Cee x Dave - Sprinter [music Video]",
    channelName: "Central Cee",
    views: "245M views",
    uploadDate: "1 year ago",
    thumbnail: "/photo/playlist1.png",
  },
  {
    title: "Hanumankind – Big Dawgs | Ft. Kalmi (Official Music Video) | Def Jam India",
    channelName: "Hanumankind",
    views: "114M views",
    uploadDate: "2 months ago",
    thumbnail: "/photo/playlist2.png",
  },
  {
    title: "CAMO - Life is Wet (feat. JMIN) [Official Music Video]",
    channelName: "502",
    views: "32M views",
    uploadDate: "3 years ago",
    thumbnail: "/photo/playlist7.png",
  },
  {
    title: "21 Savage - a lot (Official Video) ft. J. Cole",
    channelName: "21 Savage",
    views: "708M views",
    uploadDate: "5 years ago",
    thumbnail: "/photo/playlist4.png",
  },
  {
    title: "Kendrick Lamar - Not Like Us",
    channelName: "Kendrick Lamar",
    views: "135M views",
    uploadDate: "2 months ago",
    thumbnail: "/photo/playlist5.png",
  },
  {
    title: "Old Love - Yuji / Putri Dahlia (Official Lyrics Video)",
    channelName: "Yuji",
    views: "116M views",
    uploadDate: "2 years ago",
    thumbnail: "/photo/playlist6.png",
  },
  {
    title: "keshi - LIMBO (Visualizer)",
    channelName: "keshi",
    views: "33M views",
    uploadDate: "2 years ago",
    thumbnail: "/photo/playlist8.png",
  },
  {
    title: "Another Video Title",
    channelName: "Another Channel",
    views: "100M views",
    uploadDate: "6 months ago",
    thumbnail: "/photo/playlist2.png",
  },
  {
    title: "Another Video Title",
    channelName: "Another Channel",
    views: "100M views",
    uploadDate: "6 months ago",
    thumbnail: "/photo/playlist3.png",
  },
  {
    title: "Central Cee x Dave - Sprinter [music Video]",
    channelName: "Central Cee",
    views: "245M views",
    uploadDate: "1 year ago",
    thumbnail: "/photo/playlist1.png",
  },
  
];

export default function Home() {
  const scrollRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#0f0f0f] text-white font-sans">
      <div className="flex flex-col lg:flex-row justify-center mt-3 items-center lg:items-start">
        <div className="lg:flex-none lg:pr-6 px-4">
          {/* Video Player */}
          <div className="relative w-full lg:w-[1240px] lg:h-[700px] overflow-hidden aspect-w-16 aspect-h-9">
          <iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/tFXnN6Onrbg?autoplay=1"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="border-none rounded-xl"
></iframe>


          </div>

          {/* Title */}
          <div className="text-center lg:text-left mt-3">
            <h1 className="text-xl md:text-2xl font-bold">
              The Kid LAROI - BABY I'M BACK (Official Audio)
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col lg:flex-row justify-between items-center my-2">
            <div className="flex items-center space-x-4 mb-2 lg:mb-0">
              <img
                src="/photo/channels4_profile.jpg"
                alt="channel profile"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-center lg:text-left">
                <span className="font-bold text-lg block">The Kid LAROI</span>
                <span className="text-gray-400 text-sm block">ผู้ติดตาม 5.69 ล้านคน</span>
              </div>
              <button className="ml-2 bg-gray-200 text-black px-4 text-sm py-2 rounded-full hover:bg-red-700 transition">
                ติดตาม
              </button>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 items-center text-gray-400 text-sm">
              {/* Action Buttons */}
              <div className="flex flex-wrap lg:flex-nowrap space-x-2 lg:space-x-4 items-center text-gray-400 text-sm">
                <div className="flex items-center space-x-2 cursor-pointer py-1 px-3 bg-[#272727] rounded-full text-white/90 hover:bg-[#303030] transition-all duration-200">
                  <BiLike size={20} />
                  <span className="hidden lg:inline">6.5 หมื่น</span>
                  <div className="mx-1 hidden lg:inline">|</div>
                  <BiDislike size={20} />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer bg-[#272727] py-1 px-3 rounded-full text-white/90 hover:text-white transition">
                  <PiShareFat size={20} />
                  <span className="hidden lg:inline">แชร์</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer bg-[#272727] py-1 px-3 rounded-full text-white/90 hover:text-white transition">
                  <TfiDownload size={20} />
                  <span className="hidden lg:inline">ดาวน์โหลด</span>
                </div>
                <div className="flex items-center space-x-1 cursor-pointer bg-[#272727] py-1 px-3 rounded-full text-white/90 hover:text-white transition">
                  <CiStar size={20} />
                  <span className="hidden lg:inline">บันทึก</span>
                </div>
                <div className="cursor-pointer bg-[#272727] py-1 px-3 rounded-full text-white/90 hover:text-white transition">
                  <span className="lg:hidden xl:inline-block">...</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="text-sm text-white my-3 bg-[#272727] p-4 rounded-lg">
            <p>
              การดู 2.7 ล้าน ครั้ง • 1 เดือนที่ผ่านมา • #THEFIRSTTIME #BABYIMBACK #TheKidLAROI
            </p>
            <p>OFFICIAL AUDIO FOR “BABY I’M BACK” BY THE KID LAROI</p>
            <p>
              THE FIRST TIME (DELUXE) OUT NOW:
              <a href="https://thekidlaroi.lnk.to/thefirstti" className="text-blue-400">
                https://thekidlaroi.lnk.to/thefirstti
              </a>
            </p>

            {showMore ? (
              <div>
                <p>TEXT ME: +1 (310) 634-1373</p>
                <p>MERCH:
                  <a href="https://tklmerch.com/" className="text-blue-400">
                    https://tklmerch.com/
                  </a>
                </p>
                <p>FOLLOW THE KID LAROI</p>
                <p>FACEBOOK -
                  <a href="https://facebook.com/thekidlaroi" className="text-blue-400">
                    facebook.com/thekidlaroi
                  </a>
                </p>
                <p>INSTAGRAM -
                  <a href="https://instagram.com/thekidlaroi" className="text-blue-400">
                    instagram.com/thekidlaroi
                  </a>
                </p>
                <p>TWITTER -
                  <a href="https://twitter.com/thekidlaroi" className="text-blue-400">
                    twitter.com/thekidlaroi
                  </a>
                </p>
                <p>TIKTOK -
                  <a href="https://tiktok.com/thekidlaroi" className="text-blue-400">
                    tiktok.com/thekidlaroi
                  </a>
                </p>
                <p>DISCORD - discord</p>
                <button
                  onClick={() => setShowMore(false)}
                  className="text-blue-400 mt-2"
                >
                  Show Less
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowMore(true)}
                className="text-blue-400"
              >
                Show More
              </button>
            )}
          </div>
        </div>

        {/* Related Videos */}
        <div className="flex-1 max-w-full lg:max-w-md">
          <div className="relative mb-4">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent p-2 rounded-full shadow-lg hover:bg-[#303030] transition-all duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M15.53 4.47a.75.75 0 0 1 0 1.06L10.56 10.5l4.97 4.97a.75.75 0 1 1-1.06 1.06l-5.5-5.5a.75.75 0 0 1 0-1.06l5.5-5.5a.75.75 0 0 1 1.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="overflow-x-auto whitespace-nowrap mb-4 flex space-x-2 mx-4 scrollbar-hide" ref={scrollRef}>
              {["ทั้งหมด", "วีดีโอที่เกี่ยวข้อง", "สำหรับคุณ", "อัปโหลดล่าสุด", "ดูแล้ว"].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#2b2b2b] px-3 py-1 rounded-md text-center cursor-pointer text-sm hover:bg-[#202020] transition"
                >
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent p-2 rounded-full shadow-lg hover:bg-[#303030] transition-all duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.47 4.47a.75.75 0 0 0 0 1.06L13.44 10.5l-4.97 4.97a.75.75 0 1 0 1.06 1.06l5.5-5.5a.75.75 0 0 0 0-1.06l-5.5-5.5a.75.75 0 0 0-1.06 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul>
            {videos.map((video, index) => (
              <li key={index} className="flex items-start pt-2 rounded-md transition hover:bg-[#202020] p-2">
                <img
                  src={video.thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-32 h-18 object-cover rounded-md"
                />
                <div className="flex-1 ml-3">
                  <a href="#" className="text-white text-sm font-semibold block mb-1 hover:underline line-clamp-2">
                    {video.title}
                  </a>
                  <p className="text-gray-400 text-xs">{video.channelName}</p>
                  <p className="text-gray-500 text-xs">
                    {video.views} • {video.uploadDate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}