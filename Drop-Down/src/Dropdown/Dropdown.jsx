import React, { useEffect, useRef, useState } from 'react'
import DropdownBtn from '../DropdownBtn/DropdownBtn'
import DropdownContent from '../DropdownContent/DropdownContent'

function Dropdown({buttonText, content}) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef();

    const toggleDropdown = () => {
        setOpen((open) => !open);
    };

    useEffect(() => {
        const handler = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setOpen(false);
            }
            
        };
        document.addEventListener("click",handler);

            return () => {
                document.removeEventListener("click", handler);
            }
    },[dropdownRef])

  return (
    <div ref={dropdownRef}>
        <DropdownBtn toggle = {toggleDropdown} open = {open}>{buttonText}</DropdownBtn>
        <DropdownContent open = {open}>{content}</DropdownContent>
    </div>
  )
}

export default Dropdown