"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false); // Ganti isScroll menjadi isScrolled untuk kejelasan
  const sideMenuRef = useRef();
  const { theme, setTheme } = useTheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // const isDarkMode = theme === "dark";
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");

    // isDarkMode ? setTheme("light") : setTheme(dark);
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translatex(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translatex(16rem)";
  };

  // useEffect(()=> {
  //     window.addEventListener('scroll', ()=>{
  //         if(scrollY > 50){
  //             setIsScroll(true)
  //         }else{
  //             setIsScroll(false)
  //         }
  //     })
  // },[])

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      // Gunakan window.scrollY untuk memastikan akses yang benar ke posisi scroll
      if (window.scrollY > 50) {
        setIsScrolled(true); // Perbarui state isScrolled
      } else {
        setIsScrolled(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Fungsi cleanup: hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Array dependensi kosong agar efek ini hanya berjalan sekali saat mount

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ease-in-out
                ${isScrolled ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        <a href="#top">
          {/* <Image src={assets.logo} alt="" className='w-28 cursor-pointer mr-14'/> */}
          <h1 className="text-2xl font-bold">
            Noverio<span className="text-red-500">.</span>
          </h1>
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:bg-[#11001F] dark:text-white
        ${isScrolled ? "" : "bg-white shadow-sm bg-opacity-50"}`}
        >
          <li>
            <a className="font-Outfit" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Outfit" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={toggleTheme}
            size="icon"
            aria-label="Toggle theme"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 dark:hidden" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu> */}

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10  
            py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.right_arrow_white : assets.arrow_icon}
              alt=""
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        {/* ----- mobile menu ---- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 
         transition duration-500 dark:bg-[#2a004a]"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#service">
              Service
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
