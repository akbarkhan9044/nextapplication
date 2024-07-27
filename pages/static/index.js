
export default function StaticPage(props) {
  return (
    <div>
     {props.data.users && props.data.users.map((item)=>(
      <div key={item.id}>
        <h3>{item.firstName}</h3>
      </div>
     ))}
    </div>
  )
}

export const getStaticProps=async()=>{
    const response=await fetch("https://dummyjson.com/users");
  const data=await response.json();
    return{
        props:{
            data
        }
    }
}
