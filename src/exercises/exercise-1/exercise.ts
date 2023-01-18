/*

    Exercise 1
    
    Step 1: Implement the user type in the users and user variables
    Step 2: Create a User type that makes the errors in the console log dissapear

*/

type User = unknown

export const users: unknown = [
    {
        name: 'Hank',
        email: 'hank@gmail.com',
        interests: ['piano', 'tennis'],
        age: 52
    },
    {
        name: 'Lisa',
        email: 'hank@gmail.com',
        interests: 'programming'
    }
];

users.forEach((user: unknown) => {
    console.log(user.name, user.email, user.age, user.interests)
})
