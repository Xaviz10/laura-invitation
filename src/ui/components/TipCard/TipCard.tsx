import { DrawerProps, List, ListItemButton } from "@mui/material";
import { StyledCard, StyledText } from "./TipCard.styles";
import { FC } from "react";
import { IconEntity } from "../../../domain/entities";

interface CardProps {
  Icon: FC<IconEntity>;
  text: string;
}

export const TipCard: FC<CardProps> = ({ Icon, text }) => {
  return (
    <StyledCard>
      <Icon width="100px" height="100px" />
      <StyledText>{text}</StyledText>
    </StyledCard>
  );
};
