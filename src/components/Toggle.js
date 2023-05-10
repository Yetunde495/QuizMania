import React, { useState } from 'react'
import { styled } from 'styled-components';
import setTheme from '../utils/setTheme';


const ToggleButton = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 20px;


input {
    opacity: 0;
    width: 0;
    height: 0;

  &:checked + span {
  background-color: #00c853;
}

&:checked + span:before {
  transform: translateX(29px);
}
}

span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2c3e50;
    transition: 0.3s;
    border-radius: 30px;

  &:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 21px;
  left: 3px;
  bottom: 2.6px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s;
}
}

`

export const Toggle = ({ label, toggled, onClick }) => {
  const [togClass, setToggleClass] = useState('dark');
    const [isToggled, toggle] = useState(toggled);
    let theme = localStorage.getItem('theme');
    const SwitchTheme = () => {
      console.log(theme)
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setToggleClass('light')
        } else {
            setTheme('theme-dark');
            setToggleClass('dark')
        }
    }

    React.useEffect( () => {
        if (localStorage.getItem('theme') === 'theme-light') {
            setToggleClass('light')
            setTheme('theme-light');
        } else {
            setToggleClass('dark')
            setTheme('theme-dark');
        }
    }, [theme]);

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <ToggleButton>
            <input id="toggle" type="checkbox" onChange={SwitchTheme} checked={togClass === "light" ? 'checked' : ''} />
            <span />
            <strong>{label}</strong>
        </ToggleButton>
    )
}