import styled from 'styled-components';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;  
    align-items: center;
    min-height: 8vh;
    background-color: #5d4954;
    font-family: 'Poppins', sans-serif;

    .logo{
        color:rgb(226, 226, 226);
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 20px;
    }
    
    .nav-links{
        display: flex;
        justify-content: space-around;
        width: 30%;
    }
    
    .nav-links li{
        list-style:none;
        text-transform: uppercase;
    }
    
    .nav-links a{
        color:rgb(226, 226, 226);
        text-decoration: none;
        letter-spacing: 3px;
        font-weight: bold;
        font-size: 14px;
    }
    
    .burger{
        display: none;
    }
    .burger div{
        width: 25px;
        height: 5px;
        background-color:rgb(226, 226, 226);
        margin: 3px;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
            .nav-links li {
                display: none;
            }
    
        }
`

export default StyledNavbar;