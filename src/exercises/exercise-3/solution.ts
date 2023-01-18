type User = {
    name: string
    age: number
}

export async function fetchApi<T>(url: string): Promise<T> {
    const response = await fetch(url)
    return response.json()
}

(async () => {
    const user = await fetchApi<User>('/api/users/24')

    console.log(user.age, user.name)
})()