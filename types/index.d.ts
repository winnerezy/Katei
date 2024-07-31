declare type Task = {
    id: string
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

declare type NewDocument = {
    type: string
    userid: string
    title: string
    description: string | null
    due: Date
}

declare type User = {
    id: string
    username: string
    avatar: string | null
}

declare type Assignment = {
    id: string
    title: string
    description: string | null
    due: Date
    userid: string
}

declare type Deck = {
    id: string
    name: string
    description: string | null
    userid: string
    createdat: Date
    flashcards: FlashCard[]
}

declare type FlashCard = {
    id: string
    question: string
    answer: string
    userid: string
}