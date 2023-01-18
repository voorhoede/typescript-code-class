type User = {
    name: string
    email: string
    interests: string | string[]
    age?: number
};

export const users: User[] = [
    {
        name: 'Hank',
        email: 'hank@gmail.com',
        interests: [
            'piano',
            'tennis'
        ],
        age: 52
    },
    {
        name: 'Lisa',
        email: 'hank@gmail.com',
        interests: 'programming'
    }
];

users.forEach((user: User) => {
    console.log(user.name, user.email, user.age, user.interests)
})
