import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Calender,
  ColorPicker,
  Customers,
  ECommerce,
  Editor,
  Employees,
  Kanban,
  Orders,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
} from "./pages";
import { ThemeSettings, Navbar, SideBar, Footer } from "./components";
import { useStateContext } from "./context/StateContext";
import "./App.css";

function App() {
  const {activeMenu} = useStateContext();

  return (
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
              <TooltipComponent content="Settings" position="top">
                <button
                  type="button"
                  className="text-3xl hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: "Blue", borderRadius: "50%" }}
                >
                  <FiSettings className="p-2" />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="sidebar fixed w-72 dark:bg-secondary-dark-bg bg-white">
                <SideBar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <SideBar />
              </div>
            )}
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? "md:ml-72" : "flex-2"
              }`}
            >
              <div className="fixed md:static dark:bg-main-dark-bg bg-main-bg navbar w-full">
                <Navbar />
              </div>
            
            <div>
              <Routes>
                <Route path="/" element={<ECommerce />} />
                <Route path="ecommerce" element={<ECommerce />} />
                // pages
                <Route path="orders" element={<Orders />} />
                <Route path="employees" element={<Employees />} />
                <Route path="customers" element={<Customers />} />
                // apps
                <Route path="calender" element={<Calender />} />
                <Route path="kanban" element={<Kanban />} />
                <Route path="editor" element={<Editor />} />
                <Route path="color-picker" element={<ColorPicker />} />
                //charts
                <Route path="line" element={<Line />} />
                <Route path="area" element={<Area />} />
                <Route path="bar" element={<Bar />} />
                <Route path="pie" element={<Pie />} />
                <Route path="financial" element={<Financial />} />
                <Route path="color-mapping" element={<ColorMapping />} />
                <Route path="pyramid" element={<Pyramid />} />
              </Routes>
            </div>
            </div>
          </div>
        </BrowserRouter>
  );
}

export default App;
