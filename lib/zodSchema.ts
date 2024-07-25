import { string, z } from "zod"

export const TaskSchema = z.object({
    title: z.string().min(1, {
        message: 'Please input a title.'
    }),
    description: z.string()
})

