import './StyledComponent.css'
import Styled from 'styled-components';
const StyledComponent = () =>{

    const Demo=Styled.div`
        background:red;

        & h1{
            color:gray;
        }
    `

    const Button = Styled.button`
        background-color:green;
        padding:0.5rem 2rem;
        border:none;
        font-weight:bold
    `
    const Outer=Styled.div`
        background-color:yellow;
        padding:2rem;
        border:1px solid red;
        margin:10px
    `
    const H1=Styled.h1`
        background-color:gray;
        padding:0.5rem;
        text-align:center;
    `
    return(
        <div>
            <Demo className="styled">
                <h1>Assign #19</h1>
                <Button>Log In</Button>
            </Demo>
            <Outer>
                <H1>Styled Component</H1>
            </Outer>
        </div>
    )
}
export default StyledComponent;