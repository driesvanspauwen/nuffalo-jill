import { Link } from "@/navigation"
import NextLink from "next/link"
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
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

  return (
    <>
      <header
          className={`header left-0 top-0 z-40 flex w-full items-center fixed transition ${
              isScrolled ? "bg-gradient-to-t from-transparent to-black/80" : "bg-transparent"
          }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-1/8 brown-dark">
              Logo
            </div>
            <div className="flex max-w-full items-center justify-center px-4">
              <div>
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
                          ) : (
                              <Link href="/"
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
                          )}
                        </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="justify-end pr-16 lg:pr-0">
              {/*<Link
                  href="/signin"
                  className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
                >
                  Sign In
                </Link>*/}
              <LocaleSwitcher styling={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 uppercase ${
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
