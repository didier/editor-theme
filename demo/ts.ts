type Person = {
    name: string
    age: number
}

const person: Person = {
    name: 'John',
    age: 30,
}

async function getPerson(): Promise<Person> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const person = await res.json()

    if (!person) {
        throw new Error('Person not found')
    }

    return person
}
