import "./row.css"
const Row=(props)=>{
    const data=props.rowData;
    console.log(data.fname)
    return(
        <>
           <tr>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td><button className="edit">Edit</button></td>
                <td><button className="delete">Delete</button></td>
            </tr>
        </>
    )
}
export default Row;