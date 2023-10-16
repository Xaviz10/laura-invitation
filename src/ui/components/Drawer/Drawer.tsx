import { DrawerProps, List, ListItemButton } from "@mui/material";
import {
  StyledDrawer,
  StyledDrawerHeader,
  StyledListItemButton,
  StyledListItemIcon,
} from "./Drawer.styles";
import { FC } from "react";

export const Drawer: FC<DrawerProps> = ({
  variant = "permanent",
  anchor = "left",
  open = true,
}) => {
  return (
    <StyledDrawer variant={variant} anchor={anchor} open={open}>
      <StyledDrawerHeader></StyledDrawerHeader>
      <List>
        <StyledListItemButton>
          <StyledListItemIcon></StyledListItemIcon>
          Order Management
        </StyledListItemButton>
        <ListItemButton>
          <StyledListItemIcon></StyledListItemIcon>
          Product List
        </ListItemButton>
      </List>
    </StyledDrawer>
  );
};
