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
  const user = await prisma.users.findFirst({
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
  due
}: NewDocument) => {
  if (type === "Task") {
    try {
      await prisma.tasks.create({
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
      await prisma.assignments.create({
        data: {
          title,
          due: due.toISOString(),
          userid,
        },
      });
    } catch (error: any) {
      console.log(error.message);
      return;
    }
  }
};

export const createTask = async ({ userid, title, description }: NewTask) => {
  try {
    await prisma.tasks.create({
      data: {
        title,
        description,
        userid,
      },
    });
  } catch (error: any) {
    console.log(error.message);
    return;
  }
};

export const createAssignment = async ({ userid, title }: Assignment) => {
  try {
    await prisma.assignments.create({
      data: {
        title,
        due: new Date(),
        userid,
      },
    });
  } catch (error: any) {
    console.log(error.message);
    return;
  }
};

export const getTasks = async () => {
  const user = await getCurrentUser();
  const userData = await getCurrentUserData({ username: user?.name! });
  try {
    const tasks = await prisma.tasks.findMany({
      where: {
        userid: userData?.id,
      },
    });
    return tasks;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};

export const changeStatus = async (id: string) => {
  try {
    const task = await prisma.tasks.findUnique({
      where: {
        id,
      },
      select: {
        status: true,
      },
    });
    await prisma.tasks.update({
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
    const userAssignments = await prisma.assignments.findMany({
      where: {
        userid: userData?.id,
      },
    });
    return userAssignments;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
};
