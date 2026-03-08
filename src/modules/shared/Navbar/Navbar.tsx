"use client";
import * as motion from "motion/react-client";
// import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";
// import { useSwiperStore } from "@/wrappers/MainSwiperWrapper/MainSwiperWrapper";
import Link from "next/link";
import useActiveLink from "@/lib/hooks/useActiveLink";
import "./style.css";
export default function Navbar() {
  // let { swiper } = useSwiperStore();
  const isLinkActive = useActiveLink("nav-link-active");
  // function handleNavClick(slideIndex) {
  // if (swiper) {
  //     swiper.slideTo(slideIndex);
  // }
  // }

  return (
    <div className="h-25 fixed  bottom-0   z-50 flex justify-center items-center w-full  ">
      {/* <nav className={"nav    sm:bg-transparent "}> */}
      <motion.div
        initial={{ opacity: 0, scale: 0, translateY: 100 }}
        animate={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{
          duration: 0.5,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
        }}
        className="nav-con    backdrop-blur-3xl bg-gray-500/10 border border-background   relative flex justify-center p-1 m-auto gap-1 w-max rounded-lg text-foreground  " style={{ boxShadow : "0px 0px 20px 0 #ffffff30" }}
      >
        <nav
          className="links *:rounded-lg [&>*] *:bg-background *:bg-opacity-90 flex text-ntext gap-1 rounded-lg items-center text-sm ml:text-base *:py-1 *:px-3 *:transition-all *:hover:scale-107 *:hover:text-yellow-400"
          
        >
          <Link
            id="aboutBtn"
            href="/"
            className={"about   transition-colors border border-transparent  " + isLinkActive("/")}
          >
            About
          </Link>

          <Link
            className={"border border-transparent " + isLinkActive("/projects")}
            id="workBtn"
            // onClick={() => handleNavClick(1)}
            // target="_blank"
            // href="https://github.com/yousofo?tab=repositories"
            href="/projects"
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1jA9k2vd63ndzKSrnsgr8Gl2syp3GVHvc/view?usp=drive_link"
            className="border border-transparent "
            target="_blank"
            id="contactBtn"
            // onClick={() => handleNavClick(2)}
          >
            Resume
            {/* Contact &amp; CV */}
          </a>
          <Link
            className={"border border-transparent p-2 "}
            id="workBtn"
            target="_blank"
            // onClick={() => handleNavClick(1)}
            href="https://github.com/yousofo?tab=repositories"
          >
            Github
          </Link>
          {/* <div className="border border-transparent [&>*]:rounded-md text-background  " id="contactBtn">
                <ThemeSwitcher />
              </div> */}
        </nav>
      </motion.div>
      {/* </nav> */}
    </div>
  );
}
