const uberuser=new Object()


uberuser.id="1323"
uberuser.name="bhardwaj"
uberuser.isloggedin=false

 console.log(uberuser)
 console.log(Object.keys(uberuser));
 console.log(Object.values(uberuser))

const reguser={
    email:"abc@.gmail.com",
    full_name:{
        userfulllname:{
            firstname:"gamit",
            middilename:"bhardwaj"
        }
    }
}

// console.log(reguser.full_name?.userfulllname)

// const newuser=Object.assign({},reguser,uberuser)

// const newuser={...reguser,...uberuser}

// console.log(newuser)


// const user=[
//     {
//         id:1,
//         mail:"b@mail.com"
//     },
//     {
//         id:2,
//         mail:"b@mail.com"
//     },
//     {
//         id:3,
//         mail:"b@mail.com"
//     },
//     {
//         id:4,
//         mail:"b@mail.com"
//     },
// ]