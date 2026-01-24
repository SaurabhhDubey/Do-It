const BASE_URL = "http://localhost:5000"

console.log(BASE_URL);

export const registerUser = async(username,email,password)=>{

 const response = await fetch(`${BASE_URL}/api/users/register`,{
    method: 'post',
    headers:{
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        username,
        email,
        password
    })
})
    const data = await response.json();
    return data.user;

};



 export const loginUser = async(email , password)=>{
    const response = await fetch(`${BASE_URL}/api/users/login` , {method:"post" , headers:{"Content-Type":"application/json"},body:JSON.stringify({email , password})  });
    const data = await  response.json();
    return data;
 };
