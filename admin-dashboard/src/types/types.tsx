import { ReactElement } from "react";
import { SvgIconProps } from "@mui/material";

export type MenuItemChildren = {
    id: number | string;
    label: string;
    route: string;
  }

export type MenuItem = {
    id: number;
    icon: ReactElement<SvgIconProps>;
    label: string;
    route: string;
    children?: MenuItemChildren[];
};

export type selectedMenuItem = MenuItem | undefined;

export type modalprops = {
    keepMounted: boolean
}

export type display = {
    xs: string
    sm: string
}

export type clickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>