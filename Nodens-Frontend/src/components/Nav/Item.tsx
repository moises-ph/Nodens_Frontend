import { color, motion } from "framer-motion";
import { Link,  } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Item = ({i, icon, route, text, toggle}:{i:number, icon: any, route: string, text: string, toggle: ()=>void}) => {
  return (
    <motion.li className="list-none mt-5 flex items-center cursor-pointer" variants={variants} whileTap={{scale: 1.1}} onClick={toggle}>
      <Link to={route} className="flex items-center cursor-pointer">
        <div className={`w-10 h-10 rounded-full flex-[40px, 0] mr-5 border-2 border-solid border-[${colors[i]}]`}>{icon}</div>
        <p className='w-48 h-5 rounded-md flex-1 text-slate-50'>{text}</p>
      </Link>
    </motion.li>
  )
};

export default Item;
