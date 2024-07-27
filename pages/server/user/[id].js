
export default function UserID(props) {
 let result=props.data;
  return (
    <div>
      <h1>{result.firstName}</h1>
    </div>
  )
}

export const getServerSideProps=async(params)=>{
    
    const id=params.query.id;
    
    const response=await fetch('https://dummyjson.com/users/'+id);
    const data=await response.json();
    return{
        props:{
            data
        }
    }
}




