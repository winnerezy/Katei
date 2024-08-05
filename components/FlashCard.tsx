'use client'

import { motion } from "framer-motion"
import { useState } from "react"

export const FlashCard = ({ question, answer }: { question: string, answer: string }) => {

  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  return (
    <motion.div 
    className="max-w-[600px] h-[300px] w-full rounded-md p-2 flex items-center justify-center border border-black self-center bg-[--bg]"
    onClick={() => setIsFlipped(!isFlipped) }
    animate={{ rotateX: isFlipped ? 180 : 0 }}
    transition={{ duration: 0.5 }}
    style={{
      transformStyle: "preserve-3d",
      cursor: "pointer",
    }}
    >
      <motion.div
        className="flashcard-front"
        style={{
          backfaceVisibility: "hidden",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <p className="absolute top-4 font-bold underline">Question</p>
        { question }
      </motion.div>
      <motion.div
        className="flashcard-back"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateX(180deg)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
         <p className="absolute top-4 font-bold underline">Answer</p>
        { answer }
      </motion.div>
    </motion.div>
  )
}
