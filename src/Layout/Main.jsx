import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import "./Main.css";

const Main = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Navbar></Navbar>
      <motion.div className="z-50 progress-bar mt-16" style={{ scaleX }} />
      <div className="min-h-[calc(100vh-448px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
