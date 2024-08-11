export const Button = ({ children, className, variant }) => {
  return (
    <button
      className={`h-[40px] rounded-lg px-4  ${className} ${
        variant === "primary" && "bg-[#1EB45E] text-white hover:bg-[#1ba557] "
      }  ${
        variant === "secondary" && "text-[#1EB45E] border border-[#1EB45E] "
      }`}
    >
      {children}
    </button>
  );
};
