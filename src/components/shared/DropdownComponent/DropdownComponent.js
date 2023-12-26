import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';

function DropdownComponent({buttonLabel, options, selectedOption, handleOptionClick, color, className}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown className={className} isOpen={isOpen} toggle={toggle}>
      <DropdownToggle caret color={color} className="border border-secondary">
        {selectedOption.value || buttonLabel}
      </DropdownToggle>
      <DropdownMenu>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownComponent;
