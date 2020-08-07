import styled from 'styled-components';

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-around;  
    align-items: center;
    min-height: 8vh;
    // background-color: #756C80;
    font-family: 'Poppins', sans-serif;
    background-color: transparent;

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
        border: solid 1px;
        padding: 10px;
        margin: 10px;
        
        &:hover {
            transition: 800ms ease;
            border-color: red;s
        }
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