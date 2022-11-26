import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFFFFF;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 80%;
  padding-left: 30px;
  right: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .1s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 18.75rem;
    }
  }
`;

export const Content = styled.div`
  margin-top: 6.25rem;
`;

export const Button = styled.button`
    position: fixed;
    background-color: black;
    color: white;
    width: 80px;
    height: 40px;
    margin-top: 2rem;

    border-radius: 20px;
    text-align: center;
    cursor: pointer;
`