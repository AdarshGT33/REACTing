import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
function Cards({ data, reference }) {
  return (
    <>
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} className=" relative flex-shrink-0 w-44 h-60 rounded-2xl p-3 bg-slate-300 overflow-hidden">
        <FaFileAlt />
        <p className="text-xs mt-4 leading-tight">{data.desc}</p>
        <div className=" footer absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between px-4 py-1 mb-1">
            <h5>{data.fileSize}</h5>
            <span className="w-4 h-4 rounded-full flex items-center justify-center bg-sky-900">
              {data.close ? (
                <IoIosClose color="white" />
              ) : (
                <LuDownload size={".67em"} color="white" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div className={`tag w-full py-2 ${data.tag.color === "blue" ? "bg-blue-500" : "bg-green-500" }`}>
              <h3 className="text-xs font-semibold flex items-center justify-center">
                {data.tag.desc}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Cards;
