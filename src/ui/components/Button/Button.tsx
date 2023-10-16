import tw from "twin.macro";
import { styled as styledMUI } from "@mui/material/styles";
import { Button as ButtonMUI, ButtonProps } from "@mui/material";

interface ButtonCustomProps extends ButtonProps {
  color?: "primary" | "secondary";
}

export const Button = styledMUI(ButtonMUI)<ButtonCustomProps>(({ color }) => {
  let colorButton = "transparent";
  let colorFont = "#FFFFFF";
  let colorBorder = "transparent";
  let shadow = "none";

  switch (color) {
    case "primary":
      colorButton = "#FFFFFF";
      colorFont = "#4175FA";
      shadow = "0px 4px 18px rgba(0, 0, 0, 0.25)";
      break;
    case "secondary":
      colorButton = "#4175FA";
      colorFont = "#FFFFFF";
      break;
    default:
      colorButton = "transparent";
      colorFont = "#FFFFFF";
      colorBorder = "#FFFFFF";
      break;
  }

  return {
    width: "max-content",
    height: "48px",
    padding: "10px 32px",
    backgroundColor: colorButton,
    borderColor: colorBorder,
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "50px",
    textTransform: "none",
    boxShadow: shadow,
    fontFamily: "Poppins-Regular",
    color: colorFont,
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "24px",

    "&:hover": {
      backgroundColor: colorButton,
      opacity: 0.8,
    },
  };
});
