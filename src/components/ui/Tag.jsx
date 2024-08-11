export const Tag = ({ children, className, variant }) => {
  return (
    <div
      className={`h-[30px] rounded-xl px-2 w-fit flex items-center text-sm font-semibold  ${className} ${
        variant === "primary" &&
        "bg-[white]/10 text-white border-[0.5px]  border-[white]/30 backdrop-blur-sm"
      }  ${
        variant === "secondary" &&
        "text-[#15624C] bg-[#EDFBF7] border-[0.5px] border-[#CDE4DD]"
      }`}
    >
      {children}
    </div>
  );
};
