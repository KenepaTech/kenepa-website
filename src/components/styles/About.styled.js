import styled from 'styled-components';


const StyledAbout = styled.div`
color:white;
padding: 4em;
background: ${(props) => props.color};
text-align:center;
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');


h1{
  font-family: 'Poppins', sans-serif;
}

`;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 480px){
    //@media only screen and (max-width: 480px) { display: none; }
        ${styles}
    }
    `,
}

export default StyledAbout;

export const Grid = styled.div`
    // border-color:green;
    //border-style: solid;
`;

export const Row = styled.div`
    display:flex;
`;



export const Col = styled.div`
    flex: ${(props) => props.size};
    ${(props) => props.collapse && media[props.collapse](`
    display:none;
    `)};
    //to be removed
    //border-color:red;
    //border-style: solid;
    //padding:5px;
    //to be removed


`;