"use client";
import MadeWithLove from "@/components/MadeWithLove";
import { viewport } from "@/utils/general-viewport-property";
import { sendButtonAnimation } from "@/utils/send-button-icon-animation";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Variants, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

function page() {
  return (
    <div>
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
      className="fixed left-0 right-0 top-0 py-6 bg-white justify-center items-center flex md:rounded-b-[20px] border-black md:border !border-b !border-t-0 md:mx-12 z-header"
    >
      <motion.div variants={logoVariants}>
        <Image src="/iam-logo.svg" width={66} height={22} alt="IAM logo" />
      </motion.div>
    </motion.header>
  );
}

function Main() {
  return (
    <ReactLenis root>
      <Hero />
      <main className="flex flex-col gap-8 pt-16 sm:pt-36 pb-40">
        <OurProduct />
        <WhyUs />
        <FindUs />
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
  const [scope, animate] = useAnimate();
  const [scopeMarquee, animateMarquee] = useAnimate();

  useEffect(() => {
    sendButtonAnimation(scope, animate);

    (async () => {
      animateMarquee(
        scopeMarquee.current,
        {
          x: "-97%",
        },
        {
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }
      );
    })();
  }, [animate, animateMarquee, scope, scopeMarquee]);

  return (
    <section
      id="hero"
      className="bg-primary-pink py-28 sm:pt-56 sm:pb-48 relative overflow-x-clip"
    >
      <div className="container grid grid-cols-1 xl:grid-cols-[0.53fr_0.47fr] gap-10">
        <motion.div
          variants={heroContentVariants}
          initial="initial"
          whileInView="animate"
          viewport={viewport}
          className="flex flex-col"
        >
          <motion.h1
            variants={heroTextVariants}
            className="text-body-text text-[42px] sm:text-[64px] font-normal font-millik leading-[42px] sm:leading-[67px] mb-8"
          >
            Sustainable Period Care Curated For You
          </motion.h1>
          <motion.p
            variants={heroTextVariants}
            className="font-noto text-body-text font-medium font-['Noto Sans Mono'] leading-[30px] mb-12"
          >
            LAM stands as a sustainable period care company based in Africa,
            committed to offering eco-friendly, affordable, and high-quality
            menstrual products for women and girls across the continent and
            globally. Our primary goal is to enhance access to sustainable
            period care solutions, mitigate the impact of conventional products,
            and empower women and girls to manage their periods with dignity and
            confidence.
          </motion.p>
          <motion.form
            action=""
            custom={1.5}
            variants={heroContentVariants}
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            className="flex flex-col gap-6"
          >
            <motion.h2
              variants={heroTextVariants}
              className="textbody-text text-[32px] font-normal font-['Millik'] leading-10 text-center sm:text-left"
            >
              Join the waiting list
            </motion.h2>
            <motion.div
              variants={heroTextVariants}
              className="flex items-center w-full gap-6"
            >
              <input
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Enter your email"
                className="py-5 px-8 bg-primary-custard rounded-[50px] border-b border-body-text justify-start items-center gap-0.5 inline-flex text-body-text placeholder:text-body-text placeholder:text-opacity-50 text-base font-medium font-noto flex-1"
              />
              <button
                type="submit"
                className="size-14 p-4 bg-body-text rounded-[50px] border border-body-text justify-center items-center gap-0.5 inline-flex overflow-hidden"
              >
                <svg ref={scope} width={24} height={24}>
                  <use href="/icons.svg#arrow-left-up" fill="white" />
                </svg>
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
        <MadeWithLove width={456} className="max-w-[456px] h-auto w-full" />
      </div>
      <div ref={scopeMarquee} className="absolute bottom-0 left-0 w-full ">
        <div className="translate-y-[calc(100%-2px)] flex items-center">
          <Image
            src="/wavy-pink.svg"
            width={1920}
            height={62.5}
            alt="wavy"
            className="w-full absolute top-0 left-0"
          />
          <Image
            src="/wavy-pink.svg"
            width={1920}
            height={62.5}
            alt="wavy"
            className="w-full top-0 left-0 translate-x-[97%]"
          />
        </div>
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
  animte: (i) => ({
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
    <section id="our-product">
      <div className="container">
        <div className="bg-primary-pink grid grid-cols-1 lg:grid-cols-[auto_auto] gap-8 lg:gap-56 rounded-[20px]  shadow-pink border border-body-text items-center p-6 sm:px-10 pb-6 md:pb-0 overflow-hidden">
          <div className="relative w-fit mr-12 sm:mr-0">
            <motion.div
              initial="ImageInitial"
              whileInView="imageAnimate"
              viewport={viewport}
            >
              <motion.div
                variants={OurProductImageVariants}
                viewport={viewport}
              >
                <Image
                  src="/girl-with-pad.png"
                  width={374.06}
                  height={513}
                  alt="girl with pad"
                />
              </motion.div>
            </motion.div>
            <MadeWithLove
              width={97}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[10%] md:-translate-y-1/2"
            />
            <div className="absolute right-0 bottom-1/4 translate-y-1/2 translate-x-1/2 sm:translate-x-full aspect-square grid place-items-center items-center isolate">
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10">
                <motion.div variants={wavyBounceInVariants} whileInView="spin">
                  <motion.svg
                    variants={wavyBounceInVariants}
                    initial="initial"
                    whileInView="animte"
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
                  whileInView="spin"
                  viewport={viewport}
                >
                  <motion.svg
                    custom={0.5}
                    variants={wavyBounceInVariants}
                    initial="initial"
                    whileInView="animte"
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
                whileInView="animate"
                viewport={viewport}
                variants={heroContentVariants}
                className="flex flex-col items-center gap-1 w-3/4"
              >
                <motion.svg
                  variants={wavyBounceInContentVariants}
                  width="70"
                  height="19"
                >
                  <use href="/icons.svg#100-perc" width="70" height="19" />
                </motion.svg>
                <motion.p
                  variants={wavyBounceInContentVariants}
                  className="text-center text-black text-opacity-70 text-sm font-bold font-dm"
                >
                  Organic & Toxin-free
                </motion.p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={viewport}
            variants={heroContentVariants}
            className="flex flex-col gap-8"
          >
            <motion.h2
              variants={heroTextVariants}
              className="text-body-text text-[42px] leading-[42px] font-normal font-millik"
            >
              Our Product
            </motion.h2>
            <motion.p
              variants={heroTextVariants}
              className="text-body-text text-opacity-70 text-base font-medium font-noto leading-[30px]"
            >
              At LAM, we recognize that period care isn&apos;t a
              one-size-fits-all solution. As a result we&apos;ve curated a
              diverse range of reusable and disposable menstrual products, all
              crafted from the finest eco-friendly materials. Providing options
              ensures that we can cater to your unique preferences and needs,
              offering a personalised approach to your menstrual care journey.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
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
    <section id="why-us">
      <div className="container">
        <div className="bg-primary-custard shadow-pink p-12 rounded-[20px] border border-body-text">
          <div className="flex flex-col gap-8 w-full">
            <motion.h2
              variants={whyUsParagraphVariants}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="text-body-text text-[42px] font-normal font-['Millik']"
            >
              Why Us?
            </motion.h2>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={whyUsParagraphWrapperVariants}
              viewport={viewport}
              className="text-body-text font-noto text-opacity-70 text-base font-medium leading-[30px] flex flex-col gap-11"
            >
              <motion.p variants={whyUsParagraphVariants}>
                At LAM, we envision a world where sustainable period care
                products are universally accessible, irrespective of one&apos;s
                socio-economic status. Our dedication lies in providing
                affordable and eco-friendly menstrual products globally, with a
                primary focus on Africa. We are committed to addressing
                menstrual health challenges on the continent, ensuring product
                accessibility in underserved communities, raising awareness
                about menstrual health, fostering environmental stewardship, and
                contributing to socio-economic development.
              </motion.p>
              <motion.p variants={whyUsParagraphVariants}>
                To distinguish ourselves from conventional brands, we aim to
                create a supportive community and integrate good menstrual
                health practices into your lifestyle and well-being.
              </motion.p>
              <motion.p variants={whyUsParagraphVariants}>
                Our commitment extends beyond providing menstrual products: we
                are unwavering in our resolve to challenge the stigma and taboos
                surrounding menstruation in Africa. Through promoting open and
                honest dialogue about menstrual health and hygiene, our aim is
                to dismantle barriers, empower women and girls, and provide
                access to additional menstrual health resources. By addressing
                larger systemic issues, such as the lack of basic sanitation and
                hygiene infrastructure in many African countries, we strive to
                contribute to the reduction of period poverty and the promotion
                of improved menstrual health and hygiene practices.
              </motion.p>
              <motion.p variants={whyUsParagraphVariants}>
                We set ourselves apart through the implementation of zero-waste
                practices, community health initiatives, advocacy for policy
                changes, economic empowerment, and continuous research and
                development. By ensuring that our products are not only
                eco-friendly but of the highest quality, we aspire to create a
                positive impact on both individuals and the planet.
              </motion.p>
              <motion.p variants={whyUsParagraphVariants}>
                Choosing to join us means more than selecting a product: it
                means becoming part of a movement and lifestyle that seeks
                positive change in menstrual health, environmental
                sustainability, and community empowerment.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

const locationIconWrapperVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.75,
    },
  },
};

const curve: Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const pop: Variants = {
  initial: {
    scale: 0.2,
    y: 20,
    opacity: 0,
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    originX: "50%",
    originY: "100%",
    transition: {
      mass: 2.5,
      type: "spring",
      damping: 18,
      stiffness: 120,
    },
  },
};

const dot: Variants = {
  initial: {
    scale: 0.2,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      mass: 2.5,
      type: "spring",
      damping: 18,
      stiffness: 120,
    },
  },
};

function FindUs() {
  return (
    <section id="find-us">
      <div className="container">
        <div className="bg-white shadow-pink p-12 rounded-[20px] border border-body-text">
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-7">
            <div className="flex flex-col gap-8 w-full">
              <motion.h2
                variants={whyUsParagraphVariants}
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                className="text-body-text text-[42px] leading-[42px] font-normal font-['Millik']"
              >
                Find us
              </motion.h2>
              <motion.p
                initial="initial"
                whileInView="animate"
                variants={whyUsParagraphVariants}
                viewport={viewport}
                className="text-body-text font-noto text-opacity-70 text-base font-medium leading-[30px]"
              >
                Our user-friendly e-commerce platform enables global access,
                allowing customers to effortlessly browse, purchase, and receive
                our products at their convenience. In addition, we have formed
                retail partnerships with local establishments - this
                collaboration aims to provide our customers with an additional
                way to access our products. <br /> Our commitment extends to
                various initiatives aimed at expanding accessibility and
                ensuring that our products are readily available to meet diverse
                needs.
              </motion.p>
            </div>
            <motion.svg
              width="260"
              height="260"
              viewBox="0 0 260 260"
              fill="none"
              className="hidden md:block overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              variants={locationIconWrapperVariants}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
            >
              <motion.path
                d="M195 173.507C208.488 179.237 216.667 186.756 216.667 195C216.667 212.951 177.862 227.5 130 227.5C82.1383 227.5 43.3333 212.951 43.3333 195C43.3333 186.767 51.5125 179.227 65 173.507"
                stroke="#1E1E1E"
                strokeOpacity="0.1"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={curve}
              />
              <motion.path
                d="M184.167 91.4767C184.167 124.984 130 184.167 130 184.167C130 184.167 75.8333 124.984 75.8333 91.4767C75.8333 57.98 100.089 32.5 130 32.5C159.911 32.5 184.167 57.98 184.167 91.4767Z"
                stroke="#1E1E1E"
                strokeOpacity="0.1"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={pop}
              />
              <motion.path
                d="M130 97.5C135.983 97.5 140.833 92.6497 140.833 86.6666C140.833 80.6836 135.983 75.8333 130 75.8333C124.017 75.8333 119.167 80.6836 119.167 86.6666C119.167 92.6497 124.017 97.5 130 97.5Z"
                stroke="#1E1E1E"
                strokeOpacity="0.1"
                strokeWidth="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={dot}
              />
            </motion.svg>
          </div>
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
  const [scope, animate] = useAnimate();
  const [scopeMarquee, animateMarquee] = useAnimate();

  useEffect(() => {
    sendButtonAnimation(scope, animate);

    (async () => {
      animateMarquee(
        scopeMarquee.current,
        {
          x: "-97%",
        },
        {
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }
      );
    })();
  }, [animate, animateMarquee, scope, scopeMarquee]);
  return (
    <footer className="relative bg-[#ED35CB]/10 pt-40 lg:pt-0 px-9 overflow-x-clip">
      <div ref={scopeMarquee} className="absolute top-0 left-0 w-full ">
        <div className="-translate-y-[calc(100%-1px)] flex items-center">
          <Image
            src="/wavy-pink-footer.svg"
            width={1920}
            height={62.5}
            alt="wavy"
            className="w-full absolute top-0 left-0"
          />
          <Image
            src="/wavy-pink-footer.svg"
            width={1920}
            height={62.5}
            alt="wavy"
            className="w-full top-0 left-0 translate-x-[100%]"
          />
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 sm:gap-32">
          <div className="relative aspect-[576.3/384.48] rounded-[20px] bg-primary-pink *:absolute">
            <svg
              width="108"
              height="46"
              id="spring"
              viewBox="0 0 108 46"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[17.5%] h-auto left-0 top-1/3 -translate-x-1/3"
            >
              <motion.path
                custom="#ED35CB"
                initial="initial"
                animate="animate"
                variants={elementVariants}
                d="M0 38.668V42.3629C0.742582 42.441 1.63359 42.3148 2.42957 41.6341C3.24825 40.9339 3.85079 39.9594 4.31332 38.9415C4.78428 37.9051 5.16537 36.6993 5.48046 35.4147C6.11039 32.8466 6.51963 29.7817 6.80197 26.7395C7.01537 24.4401 7.15914 22.1198 7.2677 19.9902C7.45188 22.0364 7.63448 24.3375 7.813 26.8996C7.85592 27.5155 7.89253 28.2241 7.93204 28.9889L7.93205 28.9892C8.04568 31.1887 8.18331 33.8529 8.56401 36.1139C8.82141 37.6425 9.21857 39.2005 9.90905 40.4195C10.623 41.68 11.8276 42.843 13.662 42.843C14.3835 42.843 14.9732 42.5494 15.3906 42.2517C15.8101 41.9523 16.1633 41.5734 16.4537 41.2058C17.034 40.4715 17.5493 39.5428 17.9779 38.6609C19.5251 35.4779 20.5086 32.099 21.31 28.6599C21.844 26.3683 22.3435 24.0716 22.8112 21.7724C22.8193 22.9292 22.8337 24.086 22.8574 25.2412C22.9698 30.7076 23.6804 36.3399 26.2834 41.225C26.9466 42.4697 27.8945 43.8189 29.3256 44.7382C30.1441 45.2639 31.1488 45.4722 32.1267 45.028C32.9569 44.651 33.4334 43.9426 33.6907 43.4655C35.1816 40.702 35.4662 37.0873 35.72 33.8641C35.7783 33.1227 35.8351 32.402 35.9045 31.7171L35.9046 31.7165L35.9046 31.7159C36.0249 30.5294 36.1424 29.3698 36.2824 28.2562C36.5395 26.2098 36.8218 24.1697 37.1402 22.1361C37.1773 24.3069 37.3556 26.5083 37.8064 28.6884C38.6997 33.0087 40.0843 38.4707 43.8393 41.3012C44.5458 41.8338 45.8268 42.5132 47.3213 41.9464C51.1164 40.5071 52.8144 32.7409 53.7984 28.2401C53.9745 27.4348 54.1277 26.734 54.266 26.1927C54.8962 29.7196 55.908 33.0952 57.1506 36.4468L57.1507 36.447C57.3341 36.9417 57.645 37.7802 58.0726 38.5143C58.6116 39.4397 59.5397 40.5836 61.0987 40.9652C62.3169 41.2634 63.2994 40.7352 63.9152 40.1092C64.4741 39.5409 64.8339 38.8117 65.0683 38.2318C65.3152 37.6212 65.4923 36.9976 65.6154 36.5175C65.793 35.8245 65.9715 35.1322 66.15 34.4403L66.1504 34.4389C67.2551 30.157 68.3565 25.8879 69.2013 21.5331C69.264 23.2423 69.3858 24.9606 69.6144 26.6688C70.223 31.2179 71.6307 36.3605 74.3024 40.2225C74.5499 40.5802 74.9022 41.0187 75.3689 41.3644C75.8473 41.7189 76.5754 42.0649 77.4688 41.9385C78.6079 41.7775 79.2818 40.9594 79.5885 40.5138C81.8477 37.2313 82.409 32.8173 82.9242 28.7664L82.9242 28.7662C83.0481 27.7919 83.1694 26.8387 83.3109 25.9272C83.665 30.5765 84.3492 35.4976 86.0009 39.9136C86.3085 40.7363 86.9815 42.2034 88.4854 42.7397C89.8173 43.2147 90.8685 42.4708 91.3777 41.9603C91.9072 41.4296 92.3072 40.7376 92.5908 40.1681C93.1262 39.0924 93.4988 37.9198 93.5986 37.6057C94.8695 33.5896 95.3302 29.8881 95.8294 25.8772L95.8294 25.877C96.1675 23.1605 96.5233 20.302 97.1604 17.1076C97.4231 15.7905 97.9522 18.1928 98.7842 21.9708C100.388 29.2554 103.119 41.6546 107.238 42.3664V38.6447C106.364 35.8495 105.728 32.9654 105.094 30.0929C104.861 29.0356 104.628 27.9798 104.384 26.9306C102.279 17.8907 99.6685 6.68219 98.8691 5.12783C97.618 2.6951 94.9694 3.19736 94.5102 4.46312C91.8324 11.8438 89.3461 38.6447 89.3461 38.6447L89.0575 37.6854C89.0575 37.6854 86.5744 23.1845 86.5825 13.8098C86.5839 12.1915 86.5825 9.96066 86.5825 9.96066C86.5825 9.9484 86.5826 9.9321 86.5828 9.912L86.5832 9.86466C86.5921 8.93841 86.6481 3.11084 84.63 3.28642C81.34 3.57269 80.5307 19.9442 79.8437 25.2502C79.2975 29.4692 78.7122 33.9892 76.9966 37.7778C75.0283 34.2313 73.6945 30.2057 73.1569 26.188C72.6815 22.6341 72.7024 19.0565 72.7241 15.3488C72.7287 14.5671 72.7333 13.7797 72.7333 12.9855C72.7333 12.0672 72.7501 11.1133 72.7673 10.1402C72.7752 9.69206 72.8376 9.12257 72.9068 8.49122C73.1234 6.51525 73.4064 3.93345 72.2921 2.57078C72.1007 2.33667 71.6761 1.95081 71.003 1.9143C69.0797 1.80998 68.705 4.41551 68.4667 6.07302L68.4666 6.07331C68.4209 6.39088 68.3803 6.67364 68.3347 6.89585C67.2361 12.2491 65.0378 35.4692 61.7577 36.8741C60.2833 37.5056 58.139 27.7187 57.3307 21.5331C56.6342 16.2023 57.3307 7.76513 57.3307 7.76513C57.3495 7.50801 57.3907 7.20462 57.4355 6.87473C57.6161 5.54562 57.8551 3.78628 56.9172 2.88932C56.707 2.68831 56.3618 2.459 55.887 2.40301C55.4111 2.34688 55.0107 2.57079 54.266 4.46312C52.859 8.03818 47.4651 36.8941 47.4651 36.8941C47.4651 36.8941 47.154 38.1282 46.521 38.2696C45.912 38.4057 45.1151 37.5056 45.1151 37.5056C42.9579 34.8556 42.0085 31.3519 41.3059 27.9544C40.5091 24.101 40.6622 20.0838 40.8919 15.9249C41.024 13.5317 41.3042 11.2572 41.5925 8.91631C41.6286 8.62279 41.6656 8.32934 41.7025 8.0359C41.9327 6.20751 42.1629 4.37949 42.2 2.53654C42.2227 1.41076 41.3806 0.934774 40.5454 0.823744C39.3065 0.659059 38.6332 1.63134 38.191 2.65915C36.8307 5.82056 36.0652 9.12213 35.3764 12.1915C34.2102 17.3881 33.3898 22.6012 32.7361 27.8042C32.1827 32.2079 32.0477 36.7185 30.8295 41.0032C27.9186 35.5402 26.5703 31.9318 26.4313 25.1666C26.3483 21.1301 26.0795 17.0046 26.532 12.9793C26.8739 9.93719 27.5302 4.09886 24.8394 3.40506C23.8827 3.15838 23.239 3.74137 23.0758 3.91009C20.7854 6.27793 19.6167 15.1925 18.7619 21.7125C18.4179 24.336 18.1248 26.5717 17.8299 27.8373C17.09 31.0125 16.1962 34.1384 14.7674 37.078C14.381 37.8729 13.999 38.5309 13.6567 38.9641C13.6567 38.9641 12.5294 36.9264 12.0883 35.5119C10.9874 31.9815 11.3111 26.5579 11.3287 22.8453C11.3558 17.1147 11.3977 8.27873 8.01735 5.42963C7.68895 5.15285 7.13455 4.886 6.45564 5.01695C5.86787 5.13032 5.51232 5.48529 5.36016 5.6633C3.80839 7.47857 3.84686 11.2265 3.8761 14.0765C3.88402 14.8476 3.89126 15.5529 3.86615 16.1364C3.84311 16.6719 3.81912 17.2295 3.79334 17.8025C3.67553 20.4209 3.51794 23.4405 3.24287 26.4044C2.96679 29.3792 2.57739 32.2389 2.01017 34.5513C1.72668 35.7071 1.40957 36.6805 1.06292 37.4434C1.03753 37.4992 1.00983 37.5653 0.979592 37.6374C0.781753 38.1091 0.475375 38.8396 0 38.668Z"
                fillOpacity="0.1"
              />
            </svg>
            <svg
              width="160"
              height="160"
              id="smiley"
              viewBox="0 0 160 160"
              fill="#ED35CB"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[26%] h-auto bottom-[1%] left-[6%]"
            >
              <motion.path
                custom="#ED35CB"
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={elementVariants}
                d="M152.391 68.1993C155.363 68.1993 160.19 70.5337 158.771 78.5112C158.349 80.8835 158.604 81.7801 157.65 84.2347C157.142 85.5401 156.568 86.8445 155.872 88.0977C155.183 89.3367 154.437 90.5493 153.582 91.678C151.205 94.8461 148.186 97.8175 144.809 100.54C140.184 104.269 134.97 107.594 130.097 110.325C118.76 117.588 107.085 122.97 94.7839 126.524C82.5759 130.051 69.7658 131.713 56.1462 131.834C49.9803 131.78 43.3257 131.604 36.974 130.537C32.3542 129.76 27.8909 128.516 23.8358 126.583C19.9055 124.709 16.4525 122.264 13.3773 119.454C8.88939 115.352 5.21255 110.473 1.9932 105.578C0.355556 103.097 0.0454352 94.8276 2.52628 93.1898C5.00693 91.5522 8.35052 92.2366 9.98816 94.7174C12.3049 98.2134 14.8711 101.718 17.9053 104.815C20.649 107.616 23.7838 110.08 27.5024 111.837C30.6716 113.336 34.1699 114.254 37.7763 114.853C43.564 115.814 49.627 115.942 55.2437 115.987C67.9038 116.312 79.8376 115.087 91.3203 112.302C102.978 109.474 114.181 105.091 125.141 98.8476C129.443 96.0479 134.072 92.7383 138.046 88.9957C140.606 86.5851 142.829 83.9626 144.525 81.2356C145.585 78.2782 146.429 75.4896 147.089 72.4931C147.89 68.8642 150.794 68.1993 152.391 68.1993Z"
              />
              <motion.path
                custom="#ED35CB"
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={elementVariants}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M111.473 31.1909C114.64 32.5435 114.438 38.835 114.728 41.7365C115.634 50.7898 116.313 61.7314 113.316 70.4465C112.18 73.7505 108.513 81.3067 103.715 79.9681C100.89 79.1802 99.3935 73.9877 98.6689 71.6194C95.8174 62.2989 98.6955 53.5195 99.1569 43.9347C99.5287 36.2181 102.585 27.3945 111.473 31.1909Z"
              />
              <motion.path
                custom="#ED35CB"
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={elementVariants}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.2671 31.1909C45.1001 32.5435 45.302 38.835 45.0119 41.7365C44.1067 50.7898 43.4271 61.7314 46.4237 70.4465C47.5599 73.7505 51.2273 81.3067 56.0257 79.9681C58.8499 79.1802 60.3468 73.9877 61.0713 71.6194C63.9228 62.2989 61.0447 53.5195 60.5833 43.9347C60.2115 36.2181 57.1549 27.3945 48.2671 31.1909Z"
              />
            </svg>
            <svg
              id="butterfly"
              width="165"
              height="165"
              viewBox="0 0 165 165"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[27%] h-auto right-[1%] top-0 -translate-y-[40%]"
            >
              <motion.path
                custom="#FDC0E0"
                initial="initial"
                whileInView="animate"
                viewport={viewport}
                variants={elementVariants}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M91.5727 160.209C80.4725 160.378 62.505 129.42 56.3894 120.869C47.4736 108.404 47.5402 108.436 38.3563 96.1019C31.5565 86.9692 23.5761 77.5439 18.8142 67.1856C17.4996 64.3256 14.9328 56.8577 14.2888 55.017C10.6908 44.7334 6.51541 32.7054 10.0611 21.8357C12.458 14.4881 21.6965 13.0607 28.5572 13.1575C45.0483 13.3904 59.0841 23.5882 68.3678 36.1294C73.4533 42.9989 76.7364 50.6728 80.5223 58.2502C81.5496 60.3063 82.64 62.3321 83.6933 64.3759C84.1667 65.2953 84.6027 66.2333 85.1023 67.1396C85.4262 67.7274 85.7364 68.3309 86.1613 68.8551C86.3353 69.0694 86.6964 69.5299 86.864 69.3107C87.62 68.3206 87.9497 67.0818 88.3956 65.9294C90.0634 61.6163 91.8076 55.2679 93.2053 51.2735C94.3167 48.0984 96.4585 43.2758 98.1522 40.3979C100.379 36.6153 102.633 32.837 105.185 29.2517C107.74 25.6625 110.596 22.2793 113.45 18.9069C114.797 17.3146 116.284 15.8346 117.778 14.3699C124.263 8.01418 133.841 0.724651 143.761 3.62868C155.284 7.00156 157.704 21.2226 157.28 31.1942C157.135 34.6052 156.923 38.0216 156.444 41.4043C151.894 73.5952 134.767 102.551 116.81 129.378C114.301 133.126 98.5403 160.102 91.5727 160.209Z"
              />
            </svg>
            <motion.div
              variants={heartSlideUp}
              initial="initial"
              whileInView="animate"
              viewport={viewport}
              className="w-[45%] right-[17%] top-[11%]"
            >
              <motion.div variants={heartHover}>
                <motion.div variants={heartBeat}>
                  <Image
                    src="/pink-heart.png"
                    width={277}
                    height={302}
                    alt="wavy"
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <form className="flex flex-col gap-8 font-noto text-body-text">
            <header className=" flex flex-col gap-4">
              <h2 className="text-base font-bold leading-none">Talk to us.</h2>
              <h3 className="text-[42px] font-normal font-millik leading-none">
                We are here to help. Start your journey here.
              </h3>
            </header>
            <p className="font-bold leading-none">
              We&apos;d like to hear from you.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="on"
                className="px-7 py-2.5 leading-none bg-[#ED35CB]/10 border-b border-body-text text-body-text placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <input
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Email"
                className="px-7 py-2.5 leading-none bg-[#ED35CB]/10 border-b border-body-text text-body-text placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <input
                type="tel"
                name="phone-number"
                autoComplete="on"
                placeholder="+234 800 123 4567"
                className="px-7 py-2.5 leading-none bg-[#ED35CB]/10 border-b border-body-text text-body-text placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <textarea
                name="mesage"
                rows={5}
                placeholder="Write message, Your message is very important to us, we treat them as diamond 💎"
                className="px-7 py-2.5 bg-[#ED35CB]/10 border-b border-body-text text-body-text placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              ></textarea>
            </div>
            <footer className="flex items-center gap-2">
              <button
                type="submit"
                className="px-6 py-3.5 bg-primary-pink-deep rounded-[50px] border border-body-text justify-center items-center gap-0.5 inline-flex text-white font-dm font-bold"
              >
                Send Message
              </button>
              <button
                type="submit"
                className="w-14 h-14 p-4 bg-white rounded-[50px] shadow-pink border border-stone-900 justify-center items-center inline-flex overflow-hidden"
              >
                <svg ref={scope} width="24" height="24">
                  <use href="/icons.svg#send-message" />
                </svg>
              </button>
            </footer>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="p-12 text-body-text text-opacity-50 text-base font-bold font-noto text-center">
          <p>© 2024. LAM</p>
        </div>
      </div>
    </footer>
  );
}
