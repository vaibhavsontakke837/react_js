import Sms , { Mss2 , sms3 } from './message'
const Greeting=()=>{

    const styleSheet={
        // color:"",
        // textAlign:"center",
        // fontWeight:800
    }

    let greetingMessage="";
    const date=new Date(2020, 5, 5, 16);
    let hours=date.getHours();

    if(hours >= 1 && hours < 12){
        greetingMessage=" Good Morning";
        styleSheet.color="green";
    }else if(hours >=12 && hours <19){
        greetingMessage=" Good Afternoon";
        styleSheet.color="Orange"
    }else{
        greetingMessage=" Good Night";
        styleSheet.color="Black"
    }

    return(
        <div>
            <h1>Hello Vaibhav,<span style={styleSheet}>{ greetingMessage}</span></h1>
            <Sms />
            <Mss2 />
            {sms3}
        </div>
    )
}
export default Greeting;