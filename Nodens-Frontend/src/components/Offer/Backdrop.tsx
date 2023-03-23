import React from 'react'
import { motion } from 'framer-motion'
const Backdrop = ({children, onClick}: {children: any, onClick: any}) => {
  return (
    <>
        <motion.div
        onClick={onClick}
        className="Backdrop"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
            {children}
        </motion.div>
    </>

  )
}

export default Backdrop