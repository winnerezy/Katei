import Image from "next/image"

export const AssignmentCard = () => {
  return (
    <article className="max-w-[600px] w-full h-[150px] rounded-[10px] shadow-sm border p-2">
      <Image src="../assets/card.svg" alt="assignment" width={30} height={30}/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, eius!</p>
    </article>
  )
}
