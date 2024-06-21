import React from "react";
import Logo from "./assets/Logo/bg-logo.png";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-[url('../src/assets/Banner/Banner.jpg')] bg-center bg-cover">
        <div
          id="style"
          className="lg:w-[60%] md:w-[75%] w-[85%] md:min-h-[60vh] h-[75vh] rounded-lg flex md:flex-row flex-col md:justify-around md:items-start justify-around items-center  lg:px-[2%] px-[1%] py-[2%] "
        >
          <div className="lg:w-[42%] md:w-[40%]">
            <h1 className="font-normal xl:text-6xl text-5xl text-center ">
              শীঘ্রই দেখা <br /> হচ্ছে{" "}
            </h1>
          </div>
          <div className="lg:pt-[80px] md:pt-[50px] lg:w-[38%] md:w-[37%] w-[80%]">
            <img src={Logo} alt="text-logo" />
          </div>
          <div className=" lg:pt-[200px] md:pt-[190px] xl:pl-[10px] lg:w-[20%] md:w-[23%]">
            <h2 className="text-[#fff] font-normal lg:text-9xl text-8xl">এ</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
