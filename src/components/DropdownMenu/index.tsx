import React, { MouseEventHandler, ReactNode, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export type DropdownOptionsT = { displayText: string; value: string }[];

type DropdownMenuT = {
  displayText: string;
  options: DropdownOptionsT;
  onOptionClick: (nationality: string) => void;
};

const DropdownMenu = ({
  displayText,
  options,
  onOptionClick,
}: DropdownMenuT) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickMenuItem = (nationality: string) => {
    onOptionClick(nationality);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          width: "300px",
          border: "1px lightgrey solid",
          borderRadius: "5px",
        }}
      >
        {displayText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {
          options.map((option) => (
            <MenuItem
              key={option.value}
              onClick={() => onClickMenuItem(option.value)}
              sx={{
                width: '200px'
              }}
            >
              {option.displayText}
            </MenuItem>
          )) as ReactNode[]
        }
      </Menu>
    </div>
  );
};

export default DropdownMenu;
