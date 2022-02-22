import styled from "styled-components";
const style=()=>{

    const Title=styled.h1`
        color:orange;
        background-color:red;
        border-radius:2rem;
        text-align:center;
        padding:2rem
    `
    const Title2=styled(Title)`
        color:blue;
        
    `

    return(
        <div>
            <Title>
                Styled Component
            </Title>
            <Title2>
                Styled Component 2
            </Title2>
        </div>
    )
}
export default style;