'use client'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'


export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<>
  <div className={`flex flex-col fixed m-auto w-full z-10 ${
        scrolling ? 'bg-white transition-colors duration-300' : ''
      }`}>
    <section
      className={`px-4 py-2 lg:p-4 w-full`}
    >
      <div className="menu flex justify-between w-[80%] m-auto items-center">
        <Logo />
        <div className="menuItems flex items-center">
          <Button className="mx-2" variant={`${scrolling ? 'link' : 'ghost'}`}>אודות</Button>
          <Button className="mx-2" variant={`${scrolling ? 'link' : 'ghost'}`}>שירותים</Button>
          <Button className="mx-2" variant={`${scrolling ? 'link' : 'ghost'}`}>צור קשר</Button>
        </div>
      </div>
    </section>
    {scrolling? <Separator /> : ""}
  </div>
</>
  );
}