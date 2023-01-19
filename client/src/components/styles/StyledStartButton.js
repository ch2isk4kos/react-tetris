import styled from "styled-components";

// export const StyledStartButton = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 20px;
//   color: #999;
//   background: #000;

//   top: 200px;
//   left: calc((100vw / 2) - 75px);
//   width: 150px;
//   height: 100px;

//   border: 4px solid #333;
//   font-family: Pixel, Arial, Helvetica, sans-serif;
// `;
export const StyledStartButton = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 10px;
  border: 4px solid #333;
  border-radius: 20px;
  width: 100%;
  min-height: 30px;
  color: ${(props) => (props.gameOver ? "red" : "#fff")};
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  cursor: pointer;
`;
