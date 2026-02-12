import AnimationCard from "./animationCard";
import CountUp from "./counter";

const AnimationCardRender = () => {
  return (
    <>
      {" "}
      <div className="mt-16">
        <h2 className="text-xl text-green-600 text-center font-bold">
          Why to Choose Us
        </h2>
        <h1 className="text-2xl lg:text-4xl font-bold text-center mt-2">
          Why Choose Our Islamic <br /> Institute
        </h1>
      </div>
      <div className="min-h-screen bg-gray-100 px-6 pt-12">
        {/* Card Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto ">
          <AnimationCard
            imgsrc="/logo/bismillah-2.png"
            altText="circle icon"
            icon="/icon/full-moon.png"
            heading="Expert Quran Tutor"
            desc="All the classes of online Quran teaching are conducted by well qualified Islamic scholars"
          />
          <AnimationCard
            imgsrc="/logo/bismillah-2.png"
            altText="circle icon"
            icon="/icon/full-moon.png"
            heading="We Value Our Students"
            desc="All the classes of online Quran teaching are conducted by well qualified Islamic scholars"
          />
          <AnimationCard
            imgsrc="/logo/bismillah-2.png"
            altText="circle icon"
            icon="/icon/full-moon.png"
            heading="Male Female Teachers"
            desc="All the classes of online Quran teaching are conducted by well qualified Islamic scholars"
          />
          <AnimationCard
            imgsrc="/logo/bismillah-2.png"
            altText="circle icon"
            icon="/icon/full-moon.png"
            heading="Flexible Timings"
            desc="All the classes of online Quran teaching are conducted by well qualified Islamic scholars"
          />
        </div>
      </div>
      <div className="bg-green-800 text-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-10  ">
        <div className="mx-20">
          <h1 className="text-4xl text-white font-bold  ">
            Alhamdulillah we have reached over
          </h1>
          <p className="text-white pt-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="relative w-32 flex my-5">
            <img src="/icon/full-moon.png" alt="moon" className="w-28 h-28" />
            <div>
              <h1 className="  flex items-center justify-center text-5xl text-white font-bold ml-5 ">
                <CountUp end={18000} duration={4500} />
              </h1>
              <p className="text-right justify-center text-xl text-white font-bold my-5">
                Active students
              </p>
            </div>
          </div>
        </div>
        <div className=" flex px-10 md:pr-20  ">
          <div className="bg-white rounded-[40px]  p-10 max-w-5xl  ">
            {/* ITEM 1 */}
            <div className="flex items-start gap-8 mb-10 flex-col lg:flex-row">
              {/* LEFT BOX */}
              <div className="bg-yellow-400 lg:flex row flex-col border border-black rounded-2xl w-auto h-24 lg:w-28 lg:h-28 flex  items-center justify-center">
                <div className="flex gap-1 mb-1 p-3">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
                <h1 className="text-4xl font-bold">4.5</h1>
              </div>

              {/* RIGHT TEXT */}
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Top Ratings On Trustpilot
                </h2>
                <p className="text-gray-600 leading-relaxed ">
                  Lorem ipsum generators on the internet tend to repeat
                  predefined chunks necessary on making this the first velit
                  esse cillum dolore
                </p>
              </div>
            </div>
            {/* ITEM 2 */}
            <div className="flex items-start gap-5 flex-col lg:flex-row">
              {/* LEFT BOX */}
              <div className="bg-green-700 border flex-col lg:flex-row sm:items-center border-black rounded-2xl w-32 h-32 md:w-28 md:h-28 flex items-center justify-center">
                <h1 className="text-4xl text-white font-bold p-3">22k</h1>
              </div>

              {/* RIGHT TEXT */}
              <div>
                <h2 className="text-2xl font-bold mb-2">Pass Out</h2>
                <p className="text-gray-600 ml-5 text-start md:text-center md:leading-relaxed ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt to labore et dolore pass out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AnimationCardRender;
