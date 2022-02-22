import Row from "./row";
import AddForm from "./AddForm";
import "./form.css"
const Form=()=>{
    const data=[
        {
        fname:"Vaibhav",
        lname:"sontakke"
        },
        {
        fname:"Daya",
        lname:"Kale"
        },
        {
        fname:"Prasad",
        lname:"Surase"
        }
]
    return(
        <div className="container">
            <input type="button" className="add"  value="Add"/>            
            <table className="table">
               <tr>
                   <th>Full Name</th>
                   <th>Last Name</th>
                   <th>Edit</th>
                   <th>Delete</th>
               </tr>
                {
                    data.map((row,index)=>{
                        return <Row key={row} rowData={row}/>
                    })
                }
           </table>
           <AddForm />
        </div>
    )
}
export default Form;