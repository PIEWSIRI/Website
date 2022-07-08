import Link from 'next/link';
import React from 'react';
export default function Contatc2() {
  return (
    <div>
      <div className="flex h-15 items-center px-4 justify-between mt-10">
        <Link href="/">
          <a> </a>
        </Link>
        <div className="text-xl ">
          <Link href="/home">
            <a className=" p-2">หน้าแรก</a>
          </Link>
          <Link href="/contact">
            <a className="p-2">ติดต่อเรา</a>
          </Link>
          <Link href="/login">
            <a className="p-2">เข้าสู่ระบบ</a>
          </Link>
          <Link href="/register">
            <a className="p-2">สมัครสมาชิก</a>
          </Link>
          <Link href="/add_announce">
            <a className="p-2 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
              ลงประกาศ ฟรี
            </a>
          </Link>
        </div>
      </div>
      <div className="ml-5 -mt-16">
        <img
          src="../../images/logo.png"
          width="250"
          height="250"
          alt="contact"
        />
      </div>
      <div>
        <div className=" flex items-center justify-center mt-28">
          <form className="flex items-center">
            <label form="simple-search" className="sr-only">
              Search
            </label>
            <div className=" relative w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img
                  src="../../images/Search.png"
                  width="35"
                  height="35"
                  alt="search"
                />
              </div>
              <input
                type="text"
                id="simple-search"
                className=" text-gray-900 text-xl rounded-xl  block w-full pl-14 p-2.5   "
                placeholder="ค้นหา ชื่อ/ทำเล/โครงการ"
                required
              />
            </div>
            <div className="flex h-10 items-center px-4 justify-center text-lg">
              <Link href="/เงื่อนไข">
                <a className="p-4 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                  เงื่อนไข
                </a>
              </Link>
              <a className="p-4"></a>
              <Link href="/ใกล้ฉัน">
                <a className="p-4 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                  ใกล้ฉัน
                </a>
              </Link>
              <a className="p-4"></a>
              <Link href="/ประเภทประกาศ">
                <a className="p-4 inline-block px-4 py-1 rounded-xl  bg-yellow-300 shadow-lg shadow-yellow-500/50">
                  ประเภทประกาศ
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="mt-10 flex ml-20 space-x-2 ">
          <img src="../../images/home2.png" width="50" height="50" alt="home" />
          <a className=" text-4xl mt-2">หน้าแรก/ติดต่อเรา</a>
        </div>


        <div className="flex items-end ">
          <div className="mt-12 ml-10">  
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1723.8958896977144!2d100.60300813108661!3d14.076291736332484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27f3976f2bcb7%3A0x684b5b7c3833c45b!2z4Lia4Lij4Li04Lip4Lix4LiXIOC4oeC4tOC4quC4suC5gOC4reC5h-C4mSAo4Liq4Liz4LiZ4Lix4LiB4LiH4Liy4LiZ4LmD4Lir4LiN4LmIKQ!5e0!3m2!1sen!2sth!4v1657263275567!5m2!1sen!2sth"
           width="500" 
           height="250"  
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"></iframe>
        <h1 className="text-3xl">Cozy Property</h1>
        <p className="text-2xl">ที่อยู่ : </p>
        <p className="text-2xl">Email: cozy.th@gmail.com</p>
          <p className="text-2xl">Tel.+66</p>
          <img
              src="../../images/contactIcon.png"
              width="170"
              height="170"
              alt="contact"
            />
      </div>
        <div className= "" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
        <div
            className="
          flex flex-col
          bg-white
          shadow-2xl
          px-4
          sm:px-40
          md:px-36
          lg:px-36
          py-8
          rounded-3xl
          w-50
          max-w-screen-sm
          ml-96
        "
          >
            <div className="mt-10">
              <form action="#">
                <div className="flex flex-col mb-5">
                  <div className="relative">
                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-900
                  "
                    >
                      <i className="fas fa-user text-blue-500"></i>
                    </div>

                    <input
                    id="full_name"
                    name="full_name"
                      type="text"
                      className="
                    
                    placeholder-gray-500
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-900
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="ชื่อ - นามสกุล"
                    />
                     <div
                      className="
                      
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-900
                  "
                    >
                      <i className="fas fa-user text-blue-500"></i>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="
                      mt-5
                    placeholder-gray-500
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-900
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="อีเมล"
                    />
                                      <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-900
                  "
                    >
                      <i className="fas fa-user text-blue-500"></i>
                    </div>

                    <input
                     inputMode="numeric"
                      id="number"
                      name="number"
                      className="
                      mt-5
                    placeholder-gray-500
                    pl-5
                    pr-4
                    rounded-2xl
                    border border-gray-900
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                      placeholder="เบอร์โทรศัพท์"
                    />
                                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-900
                  "
                    >
                      <i className="fas fa-user text-blue-500"></i>
                    </div>
                    <div className="mt-5"></div>
                    <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="รายละเอียด"
                    className="
                    w-full
                    p-3
                    rounded-2xl

                    border border-gray-900
                    focus:outline-none focus:border-blue-400
                    
                                    "
                                    ></textarea>
                                    
                    <div className=" mt-5 flex justify-end">
                        <button className="rounded-2xl py-3 px-7 text-white text-xl bg-blue-500
                  hover:bg-blue-600">ส่ง</button>
                    </div>
                  </div>
                </div>
                </form>
                
                </div>
                </div>
        </div>
        </div>
        </div>
    </div>
  );
}
