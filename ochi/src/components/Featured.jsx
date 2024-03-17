import React from "react";

function Featured() {
  return (
    <div className="w-full py-10 rounded-tl-2xl rounded-tr-2xl">
      <div className="w-full px-10 border-b-[1px] border-white pb-14">
        <h1 className="text-6xl">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className=" cardcontainer w-1/2 h-[65vh]">
            <div className="card relative w-full h-full rounded-xl">
              <h1 className="absolute text-8xl left-full top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-green-700 tracking-tighter">
                {"FYDE".split("").map((item, index) => {
                  <span>{item}</span>;
                })}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </div>
          <div className="cardcontainer w-1/2 h-[65vh]">
            <div className="card relative w-full h-full rounded-xl">
              <h1 className="absolute text-8xl right-full top-1/2 translate-x-1/2 -translate-y-1/2 font-semibold text-green-700 tracking-tighter">
                {"VISE".split("").map((item, index) => {
                  <span>{item}</span>;
                })}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
