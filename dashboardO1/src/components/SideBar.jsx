import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy.jsx";
import { useStateContext } from "../context/StateContext";

function SideBar() {
  const { activeMenu, setActiveMenu, screenSize} = useStateContext();

  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'

  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:hover:text-black dark:text-gray-200 hover:bg-light-gray text-md m-2'
  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tighter dark:text-white text-stone-950"
            >
              <SiShopware />
              <span>StatEye</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" onClick={() => setActiveMenu((prev) => !prev)} className="text-2xl rounded-full p-3 hover:bg-light-gray mt-4 block">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
              {links.map((item) => (
                <div key={item.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                  {item.links.map((link) => (
                    <NavLink to={`/${link.name}`} key={link.name} onClick={handleCloseSidebar} className={({isActive}) => isActive ? activeLink : normalLink}>
                      {link.icon}
                      <span className="capitalize">
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SideBar;
