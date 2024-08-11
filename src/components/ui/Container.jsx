export const Container = ({ className, children }) => {
  return (
    <div className={`${className} mx-auto max-w-[1200px] px-[32px]`}>
      {children}
    </div>
  );
};
