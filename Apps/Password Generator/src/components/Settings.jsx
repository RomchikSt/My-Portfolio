import styled from "styled-components";

const StyledSettings = styled.form`
  background-color: #1c2141;
  height: 7rem;
  width: 40rem;
  border-radius: 1rem;
  margin: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 1.6rem;
  }
`;

const StyledToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle-slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 22px;
  }

  .toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .toggle-slider {
    background-color: #2196f3;
  }

  input:checked + .toggle-slider:before {
    transform: translateX(18px);
  }

  .toggle-slider.round {
    border-radius: 22px;
  }

  .toggle-slider.round:before {
    border-radius: 50%;
  }
`;

function Settings({ children, checked, onChange }) {
  return (
    <StyledSettings>
      <p>{children}</p>
      <StyledToggleWrapper>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e)}
        />
        <span className="toggle-slider round"></span>
      </StyledToggleWrapper>
    </StyledSettings>
  );
}

export default Settings;
