'use server'

import { auth } from "@/auth"
import { prisma } from "./prisma"

export const getCurrentUser = async () => {
    const data = await auth()
    return data?.user
}

// for some odd reason the username needs to be destructured else  it get an error
export const getCurrentUserData = async ({ username }: { username: string }) => {
    const user = await prisma.users.findFirst({
        where: {
            username
        }
    })
    return user
}

export const createTask = async ({ userid, title, description }: NewTask) => {

    try {
        await prisma.tasks.create({
            data: {
                title,
                description,
                userid
            }
        })
    } catch (error: any) {
        console.log(error.message)
        return;
    }
}

export const getTasks = async () => {

    const user = await getCurrentUser()
    const userData = await getCurrentUserData({ username: user?.name! })
    try {
        const tasks = await prisma.tasks.findMany({
            where: {
                userid: userData?.id
            }
        })
        return tasks
    } catch (error: any) {
        console.log(error.message)
        return []
    }

}