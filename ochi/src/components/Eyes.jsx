import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });

  return (
    <div className="eyes w-full h-screen rounded-tl-2xl rounded-tr-2xl">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-stone-200 rounded-full">
            <div className="w-[9.5vw] h-[9.5vw] relative bg-black rounded-full">
              <div
                style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[1.8vw] h-[1.8vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-stone-200 rounded-full">
            <div className="w-[9.5vw] h-[9.5vw] relative bg-black rounded-full">
              <div
                style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)` }}
                className="w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
              >
                <div className="w-[1.8vw] h-[1.8vw] bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
