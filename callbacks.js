// setTimeout(() => {
//     console.log("merhaba");
// }, 2000) //2 sn sonra

import axios from 'axios';
// setInterval(()=>{
//     console.log("her saniye çalışır");
// },1000)

// const sayHi = (cb) => {
//     cb();
// };
// sayHi(()=>{
//     console.log("hello");
// });

import fetch from 'node-fetch'

// fetch("https://jsonplaceholder.typicode.com/users") 
// .then((data) => console.log(data.json())
// .then((users) => 
// {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(data=> data.json())
//     .then(posts=>console.log(posts));

// }));

// (async () => {
//     const users = await (
//         await fetch ("https://jsonplaceholder.typicode.com/users")
//     ).json();
//     console.log("users",users);
// })();

// (async () => {
//     const { data: users } = await axios ("https://jsonplaceholder.typicode.com/users");
//     console.log("users",users);
// })();

// const getComments = (number) => {
//     return new Promise((resolve,reject) => { //resolve başarılı , reject red
//         // console.log("comments");
//         // resolve("comments");
//         if(number===1){
//             resolve("başarılı");
//         }
//         reject("red");
//     });
// };
// getComments(1)
// .then((data) => console.log(data))
// .catch((e)=>console.log(e)); //resolve then e reject de catch e düşer

// const getUsers = (number) => {
//     return new Promise(async (resolve,reject) => { //resolve başarılı , reject red
//         const { data } = await axios("https://jsonplaceholder.typicode.com/users")
//         resolve(data);
//     });
// };
// getUsers(1)
// .then((data) => console.log(data))
// .catch((e)=>console.log(e)); //resolve then e reject de catch e düşer


//  bu çalışmadı 
// const getUsers = () => {
//         return new Promise(async (resolve,reject) => { //resolve başarılı , reject red
//             const { data } = await axios("https://jsonplaceholder.typicode.com/users")
//             resolve(data);
//         });
//     };
// (async ()=> {
//   await  getUsers()
//     .then((data) => console.log(data))
//     .catch((e)=>console.log(e)); //resolve then e reject de catch e düşer
// })

//map 
// const users= [ "ahmet" , "mehmet"];
// for(let i=0; i<users.length; i++){
//     console.log(users[i])
// }
// users.map((item) => { //üstteki for ile aynı işlevi görür
//     console.log(item);
// });


