import styled from 'styled-components';

const StyledBurger = styled.button`
    position: absolute;
    top: 3%;
    right: 2rem;
    display:none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
    outline: none;
    }

    div {
    width: 2rem;
    height: 0.25rem;
    margin: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
        transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
        opacity: ${({ open }) => open ? '0' : '1'};
        transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
        transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
        display:block;
        padding-top: 2rem;
        padding-right: 2rem;
        }

     

  
`;


// // rezising burger
// @media screen and (max-width:1024px){
//     .nav-links {
//         width: 50%;
//     }
//  }

export default StyledBurger;
