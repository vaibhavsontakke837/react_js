const B=(props)=>{

    const getValue=(e)=>{
        props.receiveText(e.target.value)
    }
    return(
        <div>
            <input type="text" onChange={getValue}/>
        </div>
    )
}
export default B;