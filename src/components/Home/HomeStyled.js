import styled from "styled-components";

export const Form = styled.form`
  padding: 20px 50px;
  display: flex;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  padding: 7px 10px;
  width: 400px;
  height: 40px;
  color: black;
  outline: none;
`;

export const LoadingIcon = styled.div`
  height: 100px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    width: 80px;
    height: 80px;
    animation: spin alternate 3s infinite;
  }
`;
