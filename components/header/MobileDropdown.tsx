import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Routes } from '../../constants';

export default function MobileDropdown() {
  const menuAnchor = useRef(null);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  function toggleDrawer(val?: boolean) {
    val !== undefined ? setOpen(val) : setOpen(!open);
  }

  function handleMenuClick(href: string) {
    toggleDrawer(false);
    router.push(href);
  }

  return (
    <>
      <IconButton onClick={() => toggleDrawer(true)} ref={menuAnchor}>
        <MenuIcon />
      </IconButton>
      <Menu
        open={open}
        onClose={() => toggleDrawer()}
        anchorEl={menuAnchor.current}
      >
        {Routes.map((item, index) => (
          <MenuItem
            onClick={() => handleMenuClick(item.href)}
            disabled={item.href === router.route}
            key={`menuItem-${index}`}
          >
            <Typography>{item.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
