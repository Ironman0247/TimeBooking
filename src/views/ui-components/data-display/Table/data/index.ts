export type Person = {
    id: number
    firstName: string
    lastName: string
    email: string
    gender: string
}

export type PersonWithSubRow = {
    firstName: string
    lastName: string
    age: number
    visits: number
    progress: number
    status: string
    subRows?: PersonWithSubRow[]
}

export const data100: Person[] = [
]

export const data10: Person[] = [
    {
        id: 1,
        firstName: 'Enkhjin',
        lastName: 'Gantumur',
        email: '20b1num2451',
        gender: 'Male',
    },
]

export const dataWithSubRows: PersonWithSubRow[] = [
]
