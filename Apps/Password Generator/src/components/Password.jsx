import styled from "styled-components";

const StyledPassword = styled.form`
  background-color: #1c2141;
  height: 7rem;
  width: 40rem;
  border-radius: 1rem;
  margin: 2rem;

  input {
    background-color: inherit;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    border: 1px solid #1c2141;
    border-radius: inherit;
    text-align: center;
  }
  input::placeholder {
    color: #fff;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
`;

function Password({ value }) {
  return (
    <StyledPassword>
      <input type="text" placeholder="Click Generate" readOnly value={value} />
    </StyledPassword>
  );
}

export default Password;
