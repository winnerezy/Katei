declare type Task = {
    userid: string
    title: string
    description: string
    status: string
    createdat: Date

}

declare type NewTask = {
    userid: string
    title: string
    description: string

}

declare type User = {
    id: string
    username: string
    avatar: string | null
}
