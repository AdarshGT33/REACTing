import React from "react";
import { GoUpload } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";

function Browse() {
  return (
    <div className="card mt-20 mb-10">
      <div>
        {[
          "https://images.unsplash.com/photo-1710292036904-3dc60dd14e53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ].map((item, index) => {
          return (
            <div className="h-full w-[50vw] border-[1px] ml-[25vw] mb-[0.5vw] relative flex justify-between border-zinc-950 rounded-lg bg-stone-100 px-2 py-4">
              <div className="flex gap-3">
                <img
                  className="w-[10vw] h-[7vw]"
                  src= {item}
                  alt="thumbnail"
                />
                <div>
                  <h4 className="font-semibold">Thumbnail Related Title.</h4>
                  <p className="font-light text-xs">Some Discription</p>
                </div>
              </div>
              <div className="flex absolute bottom-[12%] right-[3%] gap-2">
                <GoUpload />
                <IoMdHeartEmpty />
              </div>
            </div>
          )
        })};
      </div>
    </div>
  );
}

export default Browse;
