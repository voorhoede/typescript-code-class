/*

    Exercise 3
    
    Step 1: Make the fetchApi function generic
    Step 2: Create a type so you know the properties in the console log exist
    Step 3: Implement your newly created type when you call the function

*/

type User = unknown

export async function fetchApi(url: string) {
    const response = await fetch(url)
    return response.json()
}

(async () => {
    const user: unknown = await fetchApi('/api/users/24')

    console.log(user.age, user.name)
})()