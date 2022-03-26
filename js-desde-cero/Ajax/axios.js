const button = document.getElementById("button")

// button.addEventListener("click", () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")

//     .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
//         .then(res => res.json())
//         .then(res => {
//             const list = document.getElementById("list")
//             const fragment = document.createDocumentFragment()
//             for(const userInfo of res){
//                 const listItem = document.createElement("LI")
//                 listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//                 fragment.appendChild(listItem)
//             }
//             list.appendChild(fragment)
//         })
// })


// AXIOS GET
// button.addEventListener("click", () =>{
//     axios({
//         method: "GET",
//         url:"https://jsonplaceholder.typicode.com/users"
//     }).then(res =>{
//         const list = document.getElementById("list")
//         const fragment = document.createDocumentFragment()
//         for(const userInfo of res.data){  
//         const listItem = document.createElement("LI")
//                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
//                 fragment.appendChild(listItem)
//         }
//         list.appendChild(fragment)
//         }).catch(err => console.log(err))
// })


// Axios POST

button.addEventListener("click", () =>{
    axios({
        method:"POST",
        url:"https://jsonplaceholder.typicode.com/users",
        data:{
            title:"A new Post",
            body:"Lorem ipsum solor sit amet",
            userId: 1
        }
    }).then(res => console.log(res.data))
    .catch(err => console.log(err))
})