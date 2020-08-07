import styled from 'styled-components';


const StyledAbout = styled.div`
color:white;
padding: 4em;
background: ${(props) => props.color};
// text-align:center;


h1{
  font-family: 'Poppins', sans-serif;
}

.intro{
    padding-top:110px;
    background-color:#240611;   
    opacity: 0.8; 
    margin-top:60px;
    margin-bot:80;
}

.introImg{
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
    
`;

export const Row = styled.div`
  
`;

export const Col = styled.div`
   


`;