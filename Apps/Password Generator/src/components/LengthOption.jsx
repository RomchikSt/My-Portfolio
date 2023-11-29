import styled from "styled-components";

const StyledLength = styled.form`
  background-color: #1c2141;
  height: 7rem;
  width: 40rem;
  border-radius: 1rem;
  margin: 2rem 0 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 1.6rem;
  }

  input {
    width: 10rem;
  }

  div {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.6rem;
    }
  }
`;

function LengthOption({ value, setPasswordLength }) {
  return (
    <StyledLength>
      <p>Length: {value}</p>
      <div>
        <p>8</p>
        <input
          type="range"
          min="8"
          max="32"
          value={value}
          onChange={(e) => setPasswordLength(e)}
        />
        <p>32</p>
      </div>
    </StyledLength>
  );
}

export default LengthOption;
