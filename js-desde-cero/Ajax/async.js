// const getName = async () =>{
//     return new Promise ((resolve, reject) =>{
//         setTimeout(() =>{
//             resolve ("Marco")  
//         }, 1500)
//     })
// }

// const sayHello = async () =>{
//     const name = await getName()
//     return `Hi ${name}`
// }

// sayHello().then(res => console.log(res))

// console.log(sayHello())
// getName().then(name => console.log(name))
// console.log(getName())


const users = [
    {
        id : 1,
        name : "Marco"
    },{
        id : 2,
        name : "David"
    },{
        id : 3,
        name : "Jessica"
    }
]

const emails = [
    {
        id : 1,
        email : "marco@gmail.com"
    },{
        id : 2,
        email : "david@gmail.com"
    }
]

const getUser = async (id) => {
    const user = users.find(user => user.id == id)
        if(!user) throw new Error(`Doesn't exist an user with id ${id}`)
        else return user
}

const getEmail = async (user) =>{
    const email = emails.find(email => email.id == user.id)
        if (!email) throw new Error(`${user.name} hasn't email`)
        else return ({
            id: user.id,
            name: user.name,
            email: email.email
        })
}

getInfo = async (id) =>{
    try{
        const user = await getUser(id)
        const res = await getEmail(user)
        return `${user.name} email  is ${res.email}`
    }catch (error){
        console.log(error)
    }
}


getInfo(3).then(res => console.log(res))


// getUser(3)
//     .then(user => getEm7ail(user))
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
