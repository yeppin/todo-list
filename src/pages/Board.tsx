import React from 'react';
import styled from '@emotion/styled';

const BoardLayout = styled.section`
  margin: 0 auto;
  max-width: 768px;
  min-width: 500px;

`
const Header = styled.h1`
`
// .toggle-all + label {
// 	width: 60px;
// 	height: 34px;
// 	font-size: 0;
// 	position: absolute;
// 	top: -52px;
// 	left: -13px;
// 	-webkit-transform: rotate(90deg);
// 	transform: rotate(90deg);
// }

// .toggle-all + label:before {
// 	content: '❯';
// 	font-size: 22px;
// 	color: #e6e6e6;
// color: #737373;
// 	padding: 10px 27px 10px 27px;
// }

const TodosHeader = styled.div`
  display: flex;
  width: 100%;
`
const ToggleCheckAll = styled.div`
  width: 60px;
  height: 34px;
  transform: rotate(90deg);
  &::before {
    font-size: 22px;
    color: #e6e6e6;
    content: '❯';
  }
`


const InputWrapper = styled.div`
  width: calc(100% - 60px);
  height: 65px;
  padding: 15px;
`
const Input = styled.input`
  font-size: 24px;
  width: 100%;
  height: 100%;
`

const TodoList = styled.div`
`
const Todo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;
  transition: color 0.2s ease-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`
const CheckBox = styled.div`
  width: 40px;
  height: 40px;
  /* background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E'); */
  /* background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'); */
`;
const Content = styled.div`
`;

const Delete = styled.div`
  position: absolute;
  display: none;
  width: 40px;
  height: 40px;
  right: 15px;
  cursor: pointer;
`;

const Footer = styled.div`
`;

const Board = () => {
  return (
    <BoardLayout>
      <Header>
        TodoList
      </Header>
      <TodosHeader>
        <ToggleCheckAll>
        </ToggleCheckAll>
        <InputWrapper>
          <Input></Input>
        </InputWrapper>
      </TodosHeader>
      
      <TodoList>
        <Todo>
          <CheckBox></CheckBox>
          <Content></Content>
          <Delete></Delete>
        </Todo>
      </TodoList>
      <Footer></Footer>
    </BoardLayout>
  );
};

export default Board;