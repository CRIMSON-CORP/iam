"use client";
import { viewport } from "@/utils/general-viewport-property";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Variants, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function page() {
  return (
    <div className="font-jomhuria">
      <Header />
      <Main />
    </div>
  );
}

export default page;

const headerVariants: Variants = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      ease: [0.17, 0.67, 0.16, 0.99],
      delayChildren: 0.5,
    },
  },
};

const logoVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.25,
      ease: [0.17, 0.67, 0.16, 0.99],
    },
  },
};

function Header() {
  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className="absolute left-0 right-0 top-0 p-8 md:py-12  justify-center items-center flex  z-header"
    >
      <motion.div variants={logoVariants}>
        <Image
          src="/iam-logo-pink.svg"
          width={125}
          height={41}
          alt="IAM logo"
          className="w-[clamp(45px,10vw,125px)]"
        />
      </motion.div>
    </motion.header>
  );
}

function Main() {
  return (
    <ReactLenis root>
      <Hero />
      <main className="flex flex-col">
        <OurProduct />
        <WhyUs />
      </main>
      <Footer />
    </ReactLenis>
  );
}

const heroContentVariants: Variants = {
  initial: {},
  animate: (i) => ({
    transition: {
      staggerChildren: 0.125,
      delayChildren: (i || 1) * 1,
    },
  }),
};

const heroTextVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.25,
      ease: [0.17, 0.67, 0.16, 0.99],
    },
  },
};

function Hero() {
  return (
    <section
      id="hero"
      className="bg-primary-pink pb-0 xl:pb-44 pt-20 sm:pt-56 relative overflow-hidden isolate"
    >
      <div className="container grid grid-cols-1 xl:grid-cols-[0.53fr_0.47fr] gap-10 items-center">
        <motion.div
          variants={heroContentVariants}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="flex flex-col"
        >
          <motion.h1
            variants={heroTextVariants}
            className="text-[#BE046A] text-5xl sm:text-[56px] md:text-[100px] font-normal font-jomhuria leading-[42px] sm:leading-[67px] mb-1 sm:mb-2.5"
          >
            Sustainable Period Care Curated For You
          </motion.h1>
          <motion.p
            variants={heroTextVariants}
            className="font-montserrat text-[#BE046A] font-medium text-sm sm:text-xl leading-[30px] mb-5 sm:mb-7"
          >
            Embrace Your Cycle with Confidence
          </motion.p>
          <motion.form
            action=""
            custom={1.5}
            variants={heroContentVariants}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="flex flex-col gap-6 max-w-[422px]"
          >
            <motion.div
              variants={heroTextVariants}
              className="flex flex-col w-fullgap-4 sm:gap-6"
            >
              <input
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Enter your email"
                className="bg-white text-xs md:text-base font-montserrat rounded-[10px] border border-[#D1D1D1] w-full p-3 md:p-5 text-body-text placeholder:text-body-text placeholder:text-opacity-50 font-medium flex-1 shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)]"
              />
              <button
                type="submit"
                className="w-full pt-1 md:py-4 bg-[#BE046A] text-[30px] text-white rounded-[10px] shadow-[0px_15px_30px_-10px_#7754f645]"
              >
                Join The Waiting List
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
        <Image
          src="/iam-boxes.png"
          alt="background"
          width={637}
          height={598}
          className="w-full xl:max-w-[637px] translate-y-3"
        />
      </div>
    </section>
  );
}

const OurProductImageVariants = {
  ImageInitial: {
    opacity: 0,
    y: "100%",
  },
  imageAnimate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const wavyBounceInVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: (i || 0) * 0.5,
      damping: 15,
      mass: 3,
      stiffness: 120,
      type: "spring",
    },
  }),

  spin: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const wavyBounceInContentVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      damping: 18,
      mass: 2,
      stiffness: 120,
      type: "spring",
    },
  },
};

function OurProduct() {
  return (
    <section id="our-product" className="relative">
      <div className="container">
        <div className="flex flex-col-reverse xl:flex-row text-[#BE046A]">
          <Image
            src="/girl-with-pad.png"
            width={441}
            height={605}
            alt="girl with pad"
            className="self-center md:self-end flex-none mx-auto"
          />
          <div className="sm:px-6 pt-12 sm:pt-16 pb-20 flex flex-col gap-8 self-center [&>*]:flex [&>*]:flex-col [&>*]:gap-4 [&_p]:text-sm md:[&_p]:text-xl [&_p]:font-medium [&_li]:text-sm [&_li]:font-medium md:[&_li]:text-xl [&_h2]:text-4xl md:[&_h2]:text-[50px] [&_h2]:font-jomhuria [&_h2]:leading-[0.5] [&_h2]:drop-shadow-[0px_4px_8px_rgba(190,4,106,0.39)]">
            <div className="flex flex-col">
              <h2>Our Product</h2>
              <p className="font-montserrat">
                At LAM, we recognize that period care isn&apos;t a one size fits
                all solution. As a result we&apos;ve curated a diverse range of
                disposable and reusable menstrual products.
              </p>
            </div>
            <div className="flex flex-col">
              <h2>Why us</h2>
              <ul className="flex flex-col gap-5 [&>*]:before:bg-[url('/heart.svg')] [&>*]:font-montserrat [&>*]:before:w-[30px] [&>*]:before:h-7 [&>*]:before:flex-none [&>*]:before:block [&>*]:flex [&>*]:gap-4">
                <li>
                  We envision a world where sustainable period care products are
                  universally accessible, irrespective of one&apos;s
                  socio-economic status.
                </li>
                <li>
                  We aim to create a supportive community and integrate good
                  menstrual health practices into your lifestyle.
                </li>
                <li>
                  We are committed to challenging the stigma and taboos
                  surrounding menstruation in Africa by fostering open and
                  honest dialogue, empowering women and girls, dismantle
                  barriers, and ensuring access to essential menstrual health
                  resources.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Organic({
  word,
  subWord = "Community Empowerment",
}: {
  word?: string;
  subWord?: string;
}) {
  const container = useRef<HTMLDivElement | null>(null);
  const inView = useInView(container, { once: true });
  return (
    <div
      ref={container}
      className="absolute right-0 bottom-1/4 translate-y-1/2 translate-x-1/2 sm:translate-x-full aspect-square flex justify-center items-center isolate"
    >
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
        <motion.div
          variants={wavyBounceInVariants}
          animate={inView ? "spin" : ""}
        >
          <motion.svg
            variants={wavyBounceInVariants}
            initial="initial"
            animate={inView ? "animate" : ""}
            viewport={viewport}
            width={119}
            height={119}
          >
            <use href="/icons.svg#wavy-star" />
          </motion.svg>
        </motion.div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-20">
        <motion.div
          variants={wavyBounceInVariants}
          animate={inView ? "spin" : ""}
          viewport={viewport}
        >
          <motion.svg
            custom={0.5}
            variants={wavyBounceInVariants}
            initial="initial"
            animate={inView ? "animate" : ""}
            viewport={viewport}
            width={131}
            height={131}
          >
            <use href="/icons.svg#wavy-star-stroke" />
          </motion.svg>
        </motion.div>
      </div>
      <motion.div
        initial="initial"
        animate={inView ? "animate" : ""}
        viewport={viewport}
        variants={heroContentVariants}
        className="flex flex-col items-center gap-1 w-3/4"
      >
        {word ? (
          <motion.span
            className="text-center text-[#BE046A] text-opacity-70 text-sm font-bold font-dm"
            variants={wavyBounceInContentVariants}
          >
            {word}
          </motion.span>
        ) : (
          <>
            <motion.svg
              variants={wavyBounceInContentVariants}
              width="70"
              height="19"
            >
              <use href="/icons.svg#100-perc-pink" width="70" height="19" />
            </motion.svg>
            <motion.p
              variants={wavyBounceInContentVariants}
              className="text-center text-[#BE046A] text-opacity-70 text-sm font-bold font-dm"
            >
              {subWord}
            </motion.p>
          </>
        )}
      </motion.div>
    </div>
  );
}

const whyUsParagraphWrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const whyUsParagraphVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-[#BE046A] bg-[url('/product-background-mobile.png')] md:bg-[url('/product-background-desktop.png')] bg-cover bg-center py-16 text-white relative overflow-hidden isolate"
    >
      <div className="*:absolute *:-z-10 hidden md:blo">
        <div className="rotate-[-20deg] top-[20%] left-[5%]">
          <Organic />
        </div>
        <div className="rotate-[20deg] scale-75 top-[75%] left-[10%]">
          <Organic word="Accessible For All" />
        </div>
        <div className="rotate-[-20deg] scale-75 top-[15%] left-[80%]">
          <Organic word="Toxin Free" />
        </div>
        <div className="rotate-[20deg] top-[55%] left-[85%]">
          <Organic subWord="Organic" />
        </div>
      </div>
      <div className="container">
        <div className="flex items-center flex-col  text-center gap-9 max-w-[829px] mx-auto text-whi">
          <h2 className="text-sm md:text-2xl font-montserrat">Our Promise</h2>
          <p className="text-[clamp(36px,10.5vw,150px)] leading-[0.75] drop-shadow-[0_4px_4px_#00000020]">
            Empowering Menstrual Health with{" "}
            <span className="text-[#FCF298]">Earth-Friendly</span> Solutions
          </p>
        </div>
      </div>
    </section>
  );
}

const elementVariants: Variants = {
  initial: {
    stroke: "#ED35CB",
    fill: "#ffffff00",
    pathLength: 0,
    strokeWidth: 2,
  },
  animate: (i) => ({
    stroke: "#ffffff00",
    fill: i,
    pathLength: 1,
    strokeWidth: 2,
    transition: {
      duration: 3,
      stroke: {
        delay: 1,
        duration: 3,
      },
    },
  }),
};

const heartSlideUp: Variants = {
  initial: {
    opacity: 0,
    scale: 0.5,
    y: 100,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.17, 0.67, 0.16, 0.99],
    },
  },
};

const heartHover: Variants = {
  animate: {
    y: [10, -10, 10],
    transition: {
      delay: 1,
      ease: "easeOut",
      duration: 2,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const heartBeat: Variants = {
  animate: {
    scale: [1, 1.1, 1, 1.05, 1],
    transition: {
      delay: 1.25,
      ease: "easeOut",
      duration: 0.75,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

function Footer() {
  return (
    <footer className="relative bg-[#FFFEF2] overflow-x-clip flex flex-col">
      <div className="container py-6 pb-56 sm:py-10 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-32">
          <form className="flex flex-col gap-5 font-noto text-body-text">
            <header className=" flex flex-col gap-5">
              <h2 className="text-base font-bold leading-none text-[#BE046A] font-dm">
                Talk to us.
              </h2>
              <h3 className="text-5xl md:text-[80px] text-[#BE046A] font-normal font-jomhuria leading-[0.5]">
                We Hear You. Let&apos;s Start the Conversation.
              </h3>
            </header>
            <p className="text-[#BE046A] font-dm font-normal">
              Every question brings us closer. Every story empowers our
              community. Reach out to us - let&apos;s make menstrual care better
              together!
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="on"
                className="px-6 py-5 font-montserrat rounded-[10px] leading-none bg-[#FCF298] border border-[#D1D1D1] placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <input
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Email Address"
                className="px-6 py-5 font-montserrat rounded-[10px] leading-none bg-[#FCF298] border border-[#D1D1D1] placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <textarea
                name="mesage"
                rows={5}
                placeholder="Write message, Your insights are invaluable. Drop us a message!"
                className="px-6 py-5 font-montserrat rounded-[10px] bg-[#FCF298] placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              ></textarea>
            </div>
            <footer className="flex items-center gap-2">
              <button
                type="submit"
                className="w-full px-6 py-1 md:py-3.5 bg-[#BE046A] rounded-[10px] border justify-center items-center gap-0.5 inline-flex text-white font-jomhuria text-[30px]"
              >
                Log in
              </button>
            </footer>
          </form>
          <div className="">
            <Image
              src="/lettering.png"
              width={644}
              height={642.85}
              alt="lettring"
              className="text-center mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="py-7 md:py-8 bg-[#FCF298]">
        <div className="container flex items-center justify-between gap-2">
          <div className="text-[#BE046A] text-[36px] sm:text-7xl font-normal font-jomhuria">
            <p className="flex items-center">Follow us</p>
          </div>
          <div className="flex items-center gap-8">
            <a href="">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0801 2.63989C7.77272 2.63989 2.64014 7.77248 2.64014 14.0799V29.9199C2.64014 36.2273 7.77272 41.3599 14.0801 41.3599H29.9201C36.2276 41.3599 41.3601 36.2273 41.3601 29.9199V14.0799C41.3601 7.77248 36.2276 2.63989 29.9201 2.63989H14.0801ZM14.0801 4.39989H29.9201C35.2762 4.39989 39.6001 8.72379 39.6001 14.0799V29.9199C39.6001 35.276 35.2762 39.5999 29.9201 39.5999H14.0801C8.72403 39.5999 4.40014 35.276 4.40014 29.9199V14.0799C4.40014 8.72379 8.72403 4.39989 14.0801 4.39989ZM32.5601 9.67989C32.0934 9.67989 31.6457 9.86532 31.3156 10.1954C30.9856 10.5254 30.8001 10.9731 30.8001 11.4399C30.8001 11.9067 30.9856 12.3543 31.3156 12.6844C31.6457 13.0145 32.0934 13.1999 32.5601 13.1999C33.0269 13.1999 33.4746 13.0145 33.8046 12.6844C34.1347 12.3543 34.3201 11.9067 34.3201 11.4399C34.3201 10.9731 34.1347 10.5254 33.8046 10.1954C33.4746 9.86532 33.0269 9.67989 32.5601 9.67989ZM22.0001 12.3199C16.6644 12.3199 12.3201 16.6642 12.3201 21.9999C12.3201 27.3356 16.6644 31.6799 22.0001 31.6799C27.3358 31.6799 31.6801 27.3356 31.6801 21.9999C31.6801 16.6642 27.3358 12.3199 22.0001 12.3199ZM22.0001 14.0799C26.3847 14.0799 29.9201 17.6154 29.9201 21.9999C29.9201 26.3844 26.3847 29.9199 22.0001 29.9199C17.6156 29.9199 14.0801 26.3844 14.0801 21.9999C14.0801 17.6154 17.6156 14.0799 22.0001 14.0799Z"
                  fill="#BE046A"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.52793 3.52026C6.10756 3.52026 4.12793 5.49989 4.12793 7.92026V36.0803C4.12793 38.5006 6.10756 40.4803 8.52793 40.4803H36.6879C39.1083 40.4803 41.0879 38.5006 41.0879 36.0803V7.92026C41.0879 5.49989 39.1083 3.52026 36.6879 3.52026H8.52793ZM8.52793 5.28026H36.6879C38.1589 5.28026 39.3279 6.44928 39.3279 7.92026V36.0803C39.3279 37.5513 38.1589 38.7203 36.6879 38.7203H8.52793C7.05694 38.7203 5.88793 37.5513 5.88793 36.0803V7.92026C5.88793 6.44928 7.05694 5.28026 8.52793 5.28026ZM23.5257 8.80026C23.2927 8.80029 23.0691 8.89277 22.9041 9.05743C22.7391 9.22208 22.6462 9.44546 22.6457 9.67855C22.6457 9.67855 22.6361 13.9687 22.6268 18.2689C22.6222 20.4189 22.6166 22.5712 22.6131 24.1917C22.6096 25.8121 22.6079 26.8375 22.6079 26.9228C22.6079 28.5202 21.1572 29.8257 19.5039 29.8257C17.8637 29.8257 16.5545 28.5148 16.5545 26.8746C16.5545 25.2345 17.8637 23.9253 19.5039 23.9253C19.5594 23.9253 19.6714 23.9435 19.8631 23.9665C19.9867 23.9813 20.1121 23.9698 20.2309 23.9325C20.3497 23.8953 20.4592 23.8333 20.5523 23.7507C20.6454 23.668 20.7199 23.5665 20.7708 23.4529C20.8218 23.3393 20.8481 23.2162 20.8479 23.0917V19.3946C20.8479 19.1708 20.7626 18.9553 20.6093 18.7922C20.456 18.629 20.2464 18.5304 20.0229 18.5164C19.8858 18.5077 19.7132 18.4906 19.5039 18.4906C14.8843 18.4906 11.1198 22.2551 11.1198 26.8746C11.1198 31.4942 14.8843 35.2587 19.5039 35.2587C24.1233 35.2587 27.8879 31.4942 27.8879 26.8746V18.9117C29.168 19.9355 30.7633 20.584 32.5251 20.584C32.7654 20.584 32.994 20.5698 33.2126 20.5496C33.4311 20.5295 33.6342 20.4284 33.7821 20.2662C33.9299 20.1041 34.0119 19.8925 34.0118 19.6731V15.5635C34.012 15.3411 33.9278 15.1268 33.7764 14.9638C33.6249 14.8009 33.4173 14.7014 33.1954 14.6853C30.4281 14.4867 28.2222 12.331 27.9343 9.58917C27.9118 9.3728 27.8099 9.17245 27.6484 9.02676C27.4868 8.88108 27.277 8.80039 27.0595 8.80026H23.5257ZM24.404 10.5603H26.4115C27.0511 13.4631 29.3195 15.6769 32.2518 16.2321V18.7535C30.3696 18.658 28.7164 17.719 27.7436 16.239C27.6395 16.0806 27.4871 15.9601 27.309 15.8952C27.1309 15.8304 26.9367 15.8248 26.7551 15.8793C26.5736 15.9338 26.4145 16.0454 26.3015 16.1975C26.1885 16.3496 26.1276 16.5342 26.1279 16.7237V26.8746C26.1279 30.5429 23.1723 33.4987 19.5039 33.4987C15.8356 33.4987 12.8798 30.5429 12.8798 26.8746C12.8798 23.3542 15.6261 20.5599 19.0879 20.3348V22.2495C16.7 22.4717 14.7945 24.431 14.7945 26.8746C14.7945 29.4655 16.913 31.5857 19.5039 31.5857C22.0816 31.5857 24.3679 29.5564 24.3679 26.9228C24.3679 26.9658 24.3696 25.8156 24.3731 24.1951C24.3765 22.5746 24.3822 20.4224 24.3868 18.2723C24.3951 14.4118 24.4024 11.3076 24.404 10.5603Z"
                  fill="#BE046A"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.21436 4L18.2065 24.3983L4.51071 40.2636H7.5451L19.5466 26.3516L29.0897 40.2636H40.5544L25.936 18.9539L38.8359 4H35.8108L24.594 16.9949L15.6791 4H4.21436ZM7.83773 5.90861H14.6744L36.931 38.355H30.0943L7.83773 5.90861Z"
                  fill="#BE046A"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
