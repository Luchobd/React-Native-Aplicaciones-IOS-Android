export interface MenuItem {
  name: string;
  icon: string;
  component: string;
}

export interface ChildrenProps {
  children: JSX.Element | JSX.Element[];
}
