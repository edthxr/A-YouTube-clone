import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { BiLike } from "react-icons/bi";

const Sidebar = ({ isOpen, onClose }) => {
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 opacity-50 z-40" onClick={onClose} />
            )}

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full bg-[#0f0f0f] pt-[13px] pr-1 pb-4 pl-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} xl:w-[240px] z-50`}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <button onClick={onClose} className="text-white text-2xl pl-2 mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" aria-hidden="true">
                                <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z" fill="white" />
                            </svg>
                        </button>
                        <img src="/photo/logoyt.png" alt="logoty" width={29} />
                        <span className="text-white font-medium text-[20px] pl-[3px] tracking-tighter transition hidden md:inline">Premium</span>

                        {/* Language Tag */}
                        <span className="language-tag text-white/50 text-[10px] mb-[10px] ml-[5px] hidden md:inline">TH</span>
                    </div>
                </div>




                <div className="text-white text-sm overflow-y-auto h-[calc(100vh-80px)]">
                    {/* Icon Links */}
                    <Link href="/">
                        <div className="flex items-center py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                            <span className="pl-3">หน้าแรก</span>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="flex items-center py-2">
                            <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                    <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z" />
                                </svg>
                            </div>
                            <span className="pl-3">Shorts</span>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="flex items-center py-2">
                            <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                    <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z" />
                                </svg>
                            </div>
                            <span className="pl-3">การติดตาม</span>
                        </div>
                    </Link>

                    <Link href="#">
                        <div className="flex items-center py-2">
                            <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                    <path d="M10 9.35L15 12l-5 2.65zM12 7a5 5 0 105 5 5 5 0 00-5-5m0-1a6 6 0 11-6 6 6 6 0 016-6zm0-3a9 9 0 109 9 9 9 0 00-9-9m0-1A10 10 0 112 12 10 10 0 0112 2z" />
                                </svg>
                            </div>
                            <span className="pl-3">YouTube Music</span>
                        </div>
                    </Link>



                    {/* Add more links here */}

                    <hr className="border-gray-600 my-3" />

                    {/* User Section */}
                    <Link href="#">
                        <div className="flex items-center justify-between py-2">
                            <span>คุณ</span>
                            <FaArrowRight />
                        </div>
                    </Link>

                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="M4 20h14v1H3V6h1v14zM6 3v15h15V3H6zm2.02 14c.36-2.13 1.93-4.1 5.48-4.1s5.12 1.97 5.48 4.1H8.02zM11 8.5a2.5 2.5 0 015 0 2.5 2.5 0 01-5 0zm3.21 3.43A3.507 3.507 0 0017 8.5C17 6.57 15.43 5 13.5 5S10 6.57 10 8.5c0 1.69 1.2 3.1 2.79 3.43-3.48.26-5.4 2.42-5.78 5.07H7V4h13v13h-.01c-.38-2.65-2.31-4.81-5.78-5.07z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">ช่องของคุณ</span>
                    </div>


                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">ประวัติการเข้าชม</span>
                    </div>

                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">เพลย์ลิสต์</span>
                    </div>

                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">วีดีโอของคุณ</span>
                    </div>

                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">ดูภายหลัง</span>
                    </div>

                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">วีดีโอที่ชอบ</span>
                    </div>

                    <div className="py-2 flex items-center">
                        <div style={{ width: '24px', height: '24px', display: 'block', fill: 'currentColor' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}>
                                <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
                            </svg>
                        </div>
                        <span className="pl-3">การดาวน์โหลด</span>
                    </div>

                    {/* Add more links here */}

                    <hr className="border-gray-600 my-3" />

                    <div className="flex items-center justify-between py-2">
                        <span >การติดตาม</span>
                    </div>

                    {/* "Show More" section */}
                    <h3 className="text-white font-semibold flex items-center py-2">
                        แสดงเพิ่มเติม
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M7 10l5 5 5-5z" />
                        </svg>
                    </h3>

                    <hr className="border-gray-600 my-3" />

                    {/* Explore Section */}
                    <div className="py-2">สำรวจ</div>
                    <div className="flex items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M12 2L1 21h22L12 2zm0 3.75L18.15 19H5.85L12 5.75zM11 15h2v2h-2v-2zm0-6h2v5h-2V9z" />
                        </svg>
                        <span className="pl-3">มาแรง</span>
                    </div>

                    <div className="flex items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M12 3v10.55a3.99 3.99 0 1 0 2 0V5h4V3h-6z" />
                        </svg>
                        <span className="pl-3">เพลง</span>
                    </div>

                    <div className="flex items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M16 7H8v2h8V7zm0 4H8v2h8v-2zm0 4H8v2h8v-2zm4-10H4v14h16V5zm2-2v18H2V3h20z" />
                        </svg>
                        <span className="pl-3">เกม</span>
                    </div>

                    <div className="flex items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 8.13 4 5 7.13 5 11s3.13 7 7 7c2.95 0 5.44-1.85 6.47-4.44l-1.9-.73C15.44 15.43 13.83 16 12 16c-2.76 0-5-2.24-5-5s2.24-5 5-5c2.07 0 3.85 1.28 4.6 3.13l-2.6 1L19.36 10l1-1.96z" />
                        </svg>
                        <span className="pl-3">กีฬา</span>
                    </div>

                    <div className="flex items-center py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M19 4h-3L9 20h3l1.6-4h4.8L19 20h3L19 4z" />
                        </svg>
                        <span className="pl-3">เล่นเกม</span>
                    </div>

                    <hr className="border-gray-600 my-3" />

                    {/* Additional Sections */}
                    <div className="py-2">เพิ่มเติมจาก YouTube</div>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>YouTube Studio</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>YouTube Music</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>YouTube Kids</span>
                        </div>
                    </Link>

                    <hr className="border-gray-600 my-3" />

                    {/* Settings and Information */}
                    <div className="py-2">การตั้งค่า</div>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>ประวัติรายงาน</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>ความช่วยเหลือ</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>ส่งความคิดเห็น</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>เกี่ยวกับ</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>สื่อลิขสิทธิ์</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>ติดต่อเรา</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>ครีเอเตอร์</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>โฆษณา</span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className="flex items-center py-2">
                            <span>นักพัฒนาซอฟต์แวร์</span>
                        </div>
                    </Link>

                    <hr className="border-gray-600 my-3" />

                    {/* Legal and Other Information */}
                    <div className="py-2">ข้อกำหนด</div>
                    <div className="py-2">ความเป็นส่วนตัว</div>
                    <div className="py-2">นโยบายและความปลอดภัย</div>
                    <div className="py-2">วิธีการทำงานของ YouTube</div>
                    <div className="py-2">ทดลองใช้ฟีเจอร์ใหม่</div>

                    <hr className="border-gray-600 my-3" />

                    <div className="text-xs text-gray-400 py-2">© 2024 Google LLC</div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
