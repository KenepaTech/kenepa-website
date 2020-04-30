import styled from 'styled-components';


const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background-image: linear-gradient(purple, black);
height: 100vh;
text-align: center;
position: relative;
top: 0;
right: 0;
transition: transform 0.3s ease-in-out;

@media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
  }
a {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s linear;
  @media (max-width: ${({ theme }) => theme.tablet}) {
    font-size: 1.5rem;
    text-align: center;
  }
  &:hover {
    color: orangered;
  }
}
`;

export default StyledMenu;
