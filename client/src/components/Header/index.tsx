import { Link } from "@/navigation"
import { useRouter } from 'next/router';
import NextLink from "next/link"
import Image from "next/image";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import { menuDataDutch, menuDataEnglish } from "./menuData";
import styles from './styles.module.css';
import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Dynamic Navbar
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setIsScrolled(true);
    } else {
      // set to false for dynamic Navbar
      setIsScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  let menuData;
  if (usePathName.substring(0, 3) === "/nl") {
    menuData = menuDataDutch;
  } else {
    menuData = menuDataEnglish;
  }

  function SamePageScroll({menuItem}) {
    return (
        <NextLink href="/"
                  className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                      isScrolled
                          ? "text-sky hover:text-sky"
                          : (window.innerWidth < 500 ? "text-sky hover:text-sky" : "text-brown-dark hover:text-brown-medium")
                  }`}
                  onClick={(e) => {
                    {
                      e.preventDefault()
                      setTimeout(() => {
                        (window.innerWidth < 500 ?
                                document.getElementById(menuItem.path) &&
                                document
                                    .getElementById(menuItem.path)
                                    .scrollIntoView({ behavior: "smooth", block: "start",
                                    })
                                :
                                document.getElementById(menuItem.path) &&
                                document
                                    .getElementById(menuItem.path)
                                    .scrollIntoView({ behavior: "smooth", block: "end",
                                    })
                        )
                      }, 50)
                    }}}
        >
          {menuItem.title}
        </NextLink>
    )
  }

  function OtherPageScroll({menuItem, otherPageHref}) {
    return (
      <Link href={otherPageHref}
        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
            isScrolled
                ? "text-sky hover:text-sky"
                : (window.innerWidth < 500 ? "text-sky hover:text-sky" : "text-brown-dark hover:text-brown-medium")
        }`}
        onClick={(e) => {
          {
            setTimeout(() => {
              (window.innerWidth < 500 ?
                      document.getElementById(menuItem.path) &&
                      document
                          .getElementById(menuItem.path)
                          .scrollIntoView({ behavior: "smooth", block: "start",
                          })
                      :
                      document.getElementById(menuItem.path) &&
                      document
                          .getElementById(menuItem.path)
                          .scrollIntoView({ behavior: "smooth", block: "end",
                          })
              )
            }, 100)
          }}}
      >
        {menuItem.title}
      </Link>
    )
  }

  return (
      <>
      <header
          className={`header left-0 top-0 z-40 flex w-full items-center fixed transition-all duration-600 ${
              isScrolled ? "bg-gradient-to-t from-transparent to-black/80 h-20" : "bg-transparent h-28"
          }`}
      >
        <div className={`container`}>
          <div className={`relative flex items-center justify-between`}>

            <div className={`w-1/8 brown-dark block relative transition-all duration-600 ${isScrolled ? 'scale-50' : 'scale-100'}`}>
              <Link href="/" className="header-logo block">
                <Image
                    src={isScrolled ? "/images/header/nuffalo-jill-logo-sky.png" : "/images/header/nuffalo-jill-logo-brown.png"}
                    alt="logo"
                    width={80}
                    height={80}
                    className="w-full transition-all duration-600"
                />
              </Link>
            </div>

            <div className="flex max-w-full items-end justify-end px-4">
              <div>
                <LocaleSwitcher
                    styling={`flex h-20 w-20 text-xl lg:inline-flex uppercase absolute right-4 top-1/2 block translate-y-[-50%] lg:hidden ${
                        isScrolled
                            ? "text-sky hover:text-sky"
                            : "text-brown-dark hover:text-brown-medium"
                    }`}/>
                <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                          navbarOpen ? " top-[7px] rotate-45" : " "
                      }`}
                  />
                  <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                          navbarOpen ? "opacity-0 " : " "
                      }`}
                  />
                  <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                          navbarOpen ? " top-[-8px] -rotate-45" : " "
                      }`}
                  />
                </button>

                <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                        navbarOpen
                            ? "visibility top-full opacity-100"
                            : "invisible top-[120%] opacity-0"
                    }`}
                >
                  <ul
                      className={`block items-center justify-center lg:flex lg:space-x-12`}
                  >
                    {menuData.map((menuItem, index) => (
                        <li key={index} className="group relative max-w-1/8">
                          {window.location.pathname === "/" || window.location.pathname === "/en" || window.location.pathname === "/nl" ? (
                                  menuItem.path === "ploeg" ? (
                                      <OtherPageScroll menuItem={menuItem} otherPageHref="/ploeg" />
                                  ) : (
                                      <SamePageScroll menuItem={menuItem} />
                                  )
                            ) : (
                              menuItem.path === "ploeg" ? (
                                  <SamePageScroll menuItem={menuItem} />
                              ) : (
                                  <OtherPageScroll menuItem={menuItem} otherPageHref="/" />
                              )
                    )}
                  </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className={`flex items-center justify-end pr-16 lg:pr-0 relative`}>
            <LocaleSwitcher
                styling={`flex h-20 w-20 text-xl lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 uppercase hidden lg:block ${
                    isScrolled
                        ? "text-sky hover:text-sky"
                        : "text-brown-dark hover:text-brown-medium"
                }`} />
          </div>
        </div>
      </div>
      </header>
</>
);
};

export default Header;
