export const Tag = ({ children, className, variant }) => {
  return (
    <div
      className={`h-[30px] rounded-lg px-2 w-fit flex items-center text-sm font-semibold  ${className} ${
        variant === "primary" &&
        "bg-[white]/10 text-white border-[0.5px]  border-[white]/30 backdrop-blur-sm"
      }  ${
        variant === "secondary" &&
        "text-[#15624C] bg-[#15624C]/10 border-[0.5px] border-[#15624C]/10"
      }`}
    >
      {children}
    </div>
  );
};
