import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import Item from "./Item";
import Toggle from "./Toggle"
import { useDimensions } from "./useDimensions";

export interface links {
  icon: any,
  route: string,
  text: string
}

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Navigation = ({links, toggle}:{links: links[], toggle:()=>void}) => (
  <motion.ul className="p-6 absolute top-24 w-56" variants={variants}>
    {links.map((link, i) => (
      <Item i={i} key={i} icon={link.icon} route={link.route} text={link.text} toggle={toggle}/>
    ))}
  </motion.ul>
)

const nav = ({links}:{links:links[]}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav className="absolute top-0 left-0 bottom-0 w-80" initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
        <motion.div className="absolute top-0 left-0 bottom-0 w-80 bg-slate-50" variants={sidebar}/>
        <Navigation links={links} toggle={toggleOpen}/>
        <Toggle toggle={()=> toggleOpen()}/>
      </motion.nav>
    </>
  )
}

export default nav