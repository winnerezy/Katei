"use server";

import { auth } from "@/auth";
import { prisma } from "./prisma";

export const getCurrentUser = async () => {
  const data = await auth();
  return data?.user;
};

// for some odd reason the username needs to be destructured else  it get an error
export const getCurrentUserData = async ({
  username,
}: {
  username: string;
}) => {
  const user = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  return user;
};

//  switching between creating task and creating assignment
export const createItem = async ({
  userid,
  title,
  description,
  type,
  due,
}: NewDocument) => {
  if (type === "Task") {
    try {
      await prisma.task.create({
        data: {
          title,
          description: description!,
          userid,
        },
      });
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  } else if (type === "Assignment") {
    try {
      await prisma.assignment.create({
        data: {
          title,
          due: due.toISOString(),
          description,
          userid,
        },
      });
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  }
};

export const getTasks = async () => {
  const user = await getCurrentUser();
  const userData = await getCurrentUserData({ username: user?.name! });
  try {
    const task = await prisma.task.findMany({
      where: {
        userid: userData?.id,
      },
    });
    return task;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};

export const changeStatus = async (id: string) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id,
      },
      select: {
        status: true,
      },
    });
    await prisma.task.update({
      where: {
        id,
      },
      data: {
        status: task?.status === "completed" ? "not_done" : "completed",
      },
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getAssignments = async () => {
  try {
    const user = await getCurrentUser();
    const userData = await getCurrentUserData({ username: user?.name! });
    const userassignment = await prisma.assignment.findMany({
      where: {
        userid: userData?.id,
      },
    });
    return userassignment;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};

export const getAssignment = async (id: string) => {
  try {
    const data = await prisma.assignment.findUnique({
      where: {
        id,
      },
    });
    return data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
};

export const editItem = async (
  id: string,
  title: string,
  description: string,
  due: Date
) => {
  // if (type === "Task") {
    try {
      await prisma.assignment.update({
        where: {
          id,
        },
        data: {
          title,
          due,
          description
        },
      });
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  // } else if (type === "Assignment") {
  //   try {
  //     await prisma.assignment.update({
  //       where: {
  //         id,
  //       },
  //       data: {
  //         title,
  //         due: due.toISOString(),
  //       },
  //     });
  //   } catch (error: any) {
  //     console.log(error.message);
  //     return;
  //   }
  // }
};

export const deleteAssignment = async (id: string) => {
  try {
    await prisma.assignment.delete({
      where: {
        id,
      },
    });
    return "Done"
  } catch (error: any) {
    console.log(error.message);
    return error.message
  }
}

export const createFlashCardDeck = async (name: string, description: string | null) => {
  try {
    const user = await getCurrentUser();
    const userData = await getCurrentUserData({ username: user?.name! });
    await prisma.flashCardFolder.create({
     data: {
      userid: userData?.id!,
      name,
      description
     }
    });
  } catch (error: any) {
    console.log(error.message);
  }
}

export const getFlashCardDecks = async () => {
  try {
    const user = await getCurrentUser();
    const userData = await getCurrentUserData({ username: user?.name! });
    const decks = await prisma.flashCardFolder.findMany({
      where: {
        userid: userData?.id
      },
      select: {
        id: true,
        userid: true,
        name: true,
        description: true,
        createdat: true,
        flashcards: {
          select: {
            id: true,
            question: true,
            answer: true,
            userid: true
          }
        }
      }
    });
    return decks;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}

export const createFlashCard = async (question: string, answer: string, folderid: string) => {
  try {
    const user = await getCurrentUser();
    const userData = await getCurrentUserData({ username: user?.name! });
    await prisma.flashCard.create({
     data: {
      userid: userData?.id!,
      question,
      answer,
      folderid
     }
    });
  } catch (error: any) {
    console.log(error.message);
  }
}