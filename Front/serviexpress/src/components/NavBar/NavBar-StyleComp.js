import styled from "@emotion/styled";

const MyHeader = styled.header`
  * {
    margin: 0;
  }
  padding: 0 4vw;
  .burgerFigure {
    display: none;
  }
  background-color: #fcdc3c;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #f0ce77;

  .initial {
    height: 10vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  .NavBar-login_user{
    display: flex;
    width: 20vw;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 650px) {
    .header-input-container {
      display: none;
    }
    .NavBar-login_user{
      display: none;
    }
    align-items: normal;
    flex-flow: column nowrap;
    .burgerFigure {
      display: flex;
    }
    z-index: 3;
    height: ${({ pOpen }) => (!pOpen ? "12vh" : "100vh")};
    clip-path: ${({ pOpen }) =>
      !pOpen ? "none" : "polygon(0 0, 100% 0, 100% 100%, 30% 100%);"};
    position: ${({ pOpen }) => (!pOpen ? "inherit" : "fixed")};
    top: 0;
  }
`;
//===============================================================

const ListNav = styled.ul`
  display: none;
  padding: 0;
  flex-flow: row wrap;
  list-style: none;
  text-align: right;
  li {
    text-decoration: none;
    align-self: center;
    margin-left: 12px;
    a {
      text-decoration: none;
      color: white;
      font-weight: bold;
    }
  }
  .active {
    background-color: #aaa;
  }

  @media (max-width: 650px) {
    display: ${({ pOpen }) => !pOpen ? "none" : "flex"};
    transform: ${({ pOpen }) => (pOpen ? "translateX(0)" : "translateX(100%)")};
    flex-flow: column nowrap;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: white;
      align-self: end;
    }
  }
`;
//===============================================================
const StyledBurger = styled.figure`
  width: 2rem;
  height: 2rem;
  /* position: absolute; */
  top: 0px;
  right: 0px;

  z-index: 2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;

  span {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ pOpen }) => (pOpen ? "#63451d" : "#3C2F1E")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ pOpen }) => (pOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ pOpen }) => (pOpen ? "traslate(100%)" : "traslateX(0)")};
      opacity: ${({ pOpen }) => (pOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ pOpen }) => (pOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MyNav = styled.nav`
  ol{
    display: flex;
    list-style: none;
    li{
      margin-left: 12px;
    }
  }
`;

export { MyNav, MyHeader, ListNav, StyledBurger };
