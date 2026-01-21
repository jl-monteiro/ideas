const Button = ({
  type = "button",
  children,
  onClick,
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const base =
    "rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors cursor-pointer";

  const variants = {
    primary: "bg-black text-white hover:bg-zinc-800",
    secondary: "bg-zinc-200 text-black hover:bg-zinc-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${base} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
