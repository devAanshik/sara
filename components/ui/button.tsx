import { ReactNode } from "react";

type PropTypes = {
  size?: string;
  variant?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const styles = {
  base: "cursor-pointer flex items-center justify-center",
  variant: { default: "" },
  size: {
    default: "",
    icon: "",
  },
};

export function Button({
  size,
  variant,
  className,
  onClick,
  children,
}: PropTypes) {
  return (
    <button onClick={onClick} className={`${styles.base} ${className}`}>
      {children}
    </button>
  );
}
