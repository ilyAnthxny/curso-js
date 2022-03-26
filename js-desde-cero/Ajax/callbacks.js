// Callbasc
// Un callback es una funcion que se ejecuta atravez de otra funcion
// Los callbacks no son asincronos

// const getUser = (id, cb) =>{
//     const user = {
//         name: "Marco",
//         id: id
//     }
//     if(id==2) cb(`User not exist`)
//     else cb(null, user)

// }

// getUser(1, (err, user)=>{
//     if(err) return console.log(err)
//     console.log(`User name is ${user.name}`)
// })

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

const getUser = (id, cb) => {
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject)=>{
        if(!user) reject(`Doesn't exist an user with id ${id}`)
        else resolve(user) 
    })
    return promise
}

const getEmail = (user) =>{
    const email = emails.find(email => email.id == user.id)
    
    return promise = new Promise((resolve, reject) => {
        if (!email) reject(`${user.name} hasn't email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}

getUser(3)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))

// SIMPLIFICADO
// getUser(1)
//     .the(getEmail)
//     .then(console.log)
//     .then(console.log)s

// const getEmail = (user, cb) =>{
// }

// getUser(5)
//     .then(user => console.log(user))
//     .catch(err=> console.log(err))
// console.log(getUser(1))



// getUser(3, (err, user) =>{
//     if(err) return console.log(err)

//     getEmail(user, (err, res) =>{
//         if(err) return console.log(err)
//         console.log(res)
//     })
// })

// Una promesa es un objeto que dentro contiene 2 callbacks 