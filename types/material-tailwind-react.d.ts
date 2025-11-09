declare module "@material-tailwind/react" {
  import * as React from "react";

  // Relaxed typing for a subset of components used in this project.
  // This prevents strict library type mismatches (duplicate React types etc.)
  export const Avatar: React.ComponentType<any>;
  export const Button: React.ComponentType<any>;
  export const Card: React.ComponentType<any>;
  export const IconButton: React.ComponentType<any>;
  export const Menu: React.ComponentType<any>;
  export const MenuHandler: React.ComponentType<any>;
  export const MenuItem: React.ComponentType<any>;
  export const MenuList: React.ComponentType<any>;
  export const MobileNav: React.ComponentType<any>;
  export const Navbar: React.ComponentType<any>;
  export const Typography: React.ComponentType<any>;

  // default export alias (some packages export both named + default)
  const _default: React.ComponentType<any>;
  export default _default;
}
