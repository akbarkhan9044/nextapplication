import React from 'react'

export default function Dynamic(props) {
    console.log(props);
  return (
    <div>
      {props.data &&(
        <h1>{props.data.firstName}</h1>
      )}
    </div>
  )
}

export const getStaticPaths=async()=>{
    const response=await fetch("https://dummyjson.com/users");
    const data=await response.json();

    const allUserId=data.users.map((item)=>{
        return item.id;
    });
    return{
        paths:allUserId.map((item)=>{
            return {params:{id:`${item}`}}
        }),
        fallback:false
    }
}
export const getStaticProps=async(context)=>{
    const id=context.params.id;
    console.log("ID",id);
    const response=await fetch("https://dummyjson.com/users/"+id);
  const data=await response.json();
    return{
        props:{
            data
        }
    }
}


