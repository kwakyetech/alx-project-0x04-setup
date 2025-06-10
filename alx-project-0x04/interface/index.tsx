export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor?: string;
}

export interface LayoutProps {
    children: React.ReactNode;
  }

export interface PageRouteProps {
    pageRoute: string
  }