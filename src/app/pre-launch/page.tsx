import MadeWithLove from "@/components/MadeWithLove";
import Image from "next/image";

function page() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default page;

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 py-6 bg-white justify-center items-center flex rounded-bl-[20px] rounded-br-[20px] border border-black border-t-0 mx-12 z-header">
      <Image src="/iam-logo.svg" width={66} height={22} alt="IAM logo" />
    </header>
  );
}

function Main() {
  return (
    <>
      <Hero />
      <main className="flex flex-col gap-8 pt-36 pb-40">
        <OurProduct />
        <WhyUs />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section id="hero" className="bg-primary-pink pt-56 pb-48 relative">
      <div className="container grid grid-cols-[0.53fr_0.47fr] gap-10">
        <div className="flex flex-col">
          <h1 className="text-body-text text-[64px] font-normal font-millik leading-[67px] mb-8">
            Sustainable Period Care Curated For You
          </h1>
          <p className="font-noto text-body-text font-medium font-['Noto Sans Mono'] leading-[30px] mb-12">
            LAM stands as a sustainable period care company based in Africa,
            committed to offering eco-friendly, affordable, and high-quality
            menstrual products for women and girls across the continent and
            globally. Our primary goal is to enhance access to sustainable
            period care solutions, mitigate the impact of conventional products,
            and empower women and girls to manage their periods with dignity and
            confidence.
          </p>
          <form action="" className="flex flex-col gap-6">
            <h2 className="textbody-text text-[32px] font-normal font-['Millik'] leading-10">
              Join the waiting list
            </h2>
            <div className="flex items-center w-full gap-6">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="py-5 px-8 bg-primary-custard rounded-[50px] border-b border-body-text justify-start items-center gap-0.5 inline-flex text-body-text placeholder:text-body-text placeholder:text-opacity-50 text-base font-medium font-noto flex-1"
              />
              <button
                type="submit"
                className="size-14 p-4 bg-body-text rounded-[50px] border border-body-text justify-center items-center gap-0.5 inline-flex"
              >
                <svg width={24} height={24}>
                  <use href="/icons.svg#arrow-left-up" fill="white" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <MadeWithLove width={460} />
      </div>
      <Image
        src="/wavy-pink.svg"
        width={1920}
        height={62.5}
        alt="wavy"
        className="absolute bottom-0 left-0 w-full translate-y-[calc(100%-2px)]"
      />
    </section>
  );
}

function OurProduct() {
  return (
    <section id="our-product">
      <div className="container">
        <div className="bg-primary-pink grid grid-cols-[auto_auto] gap-56 rounded-[20px]  shadow-pink border border-body-text items-center px-10">
          <div className="relative w-fit">
            <Image
              src="/girl-with-pad.png"
              width={374.06}
              height={513}
              alt="girl with pad"
            />
            <MadeWithLove
              width={97}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            <div className="absolute right-0 bottom-1/4 translate-y-1/2 translate-x-full aspect-square grid place-items-center items-center isolate">
              <svg
                width={117.06}
                height={117.06}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10"
              >
                <use href="/icons.svg#wavy-star" />
              </svg>
              <svg
                width={131}
                height={131}
                className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10"
              >
                <use href="/icons.svg#wavy-star-stroke" />
              </svg>
              <div className="flex flex-col items-center gap-1 w-3/4">
                <svg width="70" height="19">
                  <use href="/icons.svg#100-perc" width="70" height="19" />
                </svg>
                <p className="text-center text-black text-opacity-70 text-sm font-bold font-dm">
                  Organic & Toxin-free
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-body-text text-[42px] leading-[42px] font-normal font-millik">
              Our Product
            </h2>
            <p className="text-body-text text-opacity-70 text-base font-medium font-noto leading-[30px]">
              At LAM, we recognize that period care isn&apos;t a
              one-size-fits-all solution. As a result we&apos;ve curated a
              diverse range of reusable and disposable menstrual products, all
              crafted from the finest eco-friendly materials. Providing options
              ensures that we can cater to your unique preferences and needs,
              offering a personalised approach to your menstrual care journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us">
      <div className="container">
        <div className="bg-primary-custard shadow-pink p-12 rounded-[20px] border border-body-text">
          <div className="flex flex-col gap-8 w-full">
            <h2 className="text-body-text text-[42px] font-normal font-['Millik']">
              Why Us?
            </h2>
            <div className="text-body-text font-noto text-opacity-70 text-base font-medium leading-[30px] flex flex-col gap-11">
              <p>
                At LAM, we envision a world where sustainable period care
                products are universally accessible, irrespective of one&apos;s
                socio-economic status. Our dedication lies in providing
                affordable and eco-friendly menstrual products globally, with a
                primary focus on Africa. We are committed to addressing
                menstrual health challenges on the continent, ensuring product
                accessibility in underserved communities, raising awareness
                about menstrual health, fostering environmental stewardship, and
                contributing to socio-economic development.
              </p>
              <p>
                To distinguish ourselves from conventional brands, we aim to
                create a supportive community and integrate good menstrual
                health practices into your lifestyle and well-being.
              </p>
              <p>
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
              </p>
              <p>
                We set ourselves apart through the implementation of zero-waste
                practices, community health initiatives, advocacy for policy
                changes, economic empowerment, and continuous research and
                development. By ensuring that our products are not only
                eco-friendly but of the highest quality, we aspire to create a
                positive impact on both individuals and the planet.
              </p>
              <p>
                Choosing to join us means more than selecting a product: it
                means becoming part of a movement and lifestyle that seeks
                positive change in menstrual health, environmental
                sustainability, and community empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FindUs() {
  return (
    <section id="find-us">
      <div className="container">
        <div className="bg-white shadow-pink p-12 rounded-[20px] border border-body-text">
          <div className="grid grid-cols-[auto_auto] gap-7">
            <div className="flex flex-col gap-8 w-full">
              <h2 className="text-body-text text-[42px] leading-[42px] font-normal font-['Millik']">
                Find us
              </h2>
              <p className="text-body-text font-noto text-opacity-70 text-base font-medium leading-[30px]">
                Our user-friendly e-commerce platform enables global access,
                allowing customers to effortlessly browse, purchase, and receive
                our products at their convenience. In addition, we have formed
                retail partnerships with local establishments - this
                collaboration aims to provide our customers with an additional
                way to access our products. <br /> Our commitment extends to
                various initiatives aimed at expanding accessibility and
                ensuring that our products are readily available to meet diverse
                needs.
              </p>
            </div>
            <svg width="260" height="260">
              <use href="/icons.svg#location" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-[#ED35CB]/10">
      <Image
        src="/wavy-pink-footer.svg"
        width={1920}
        height={62.5}
        alt="wavy"
        className="absolute top-0 left-0 w-full -translate-y-[calc(100%-1px)]"
      />
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-32">
          <div className="relative aspect-[576.3/384.48] rounded-[20px] bg-primary-pink *:absolute">
            <svg
              width="108"
              height="46"
              className="w-[17.5%] h-auto left-0 top-1/3 -translate-x-1/3"
            >
              <use href="/generic.svg#spring" />
            </svg>
            <svg
              width="160"
              height="160"
              className="w-[26%] h-auto bottom-[1%] left-[6%]"
            >
              <use href="/generic.svg#smiley" />
            </svg>
            <svg
              width="165"
              height="165"
              className="w-[27%] h-auto right-[1%] top-0 -translate-y-[40%]"
            >
              <use href="/generic.svg#butterfly" />
            </svg>
            <Image
              src="/pink-heart.png"
              width={277}
              height={302}
              alt="wavy"
              className="w-[45%] h-auto right-[17%] top-[11%]"
            />
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
                className="px-7 py-2.5 leading-none bg-[#ED35CB]/10 border-b border-body-text text-body-text placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-7 py-2.5 leading-none bg-[#ED35CB]/10 border-b border-body-text text-body-text placeholder:text-body-text border-opacity-50 placeholder:opacity-50"
              />
              <input
                type="tel"
                name="phone-number"
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
                className="w-14 h-14 p-4 bg-white rounded-[50px] shadow-pink border border-stone-900 justify-center items-center inline-flex"
              >
                <svg width="24" height="24">
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
