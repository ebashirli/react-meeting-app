// eslint-disable-next-line react/prop-types
function Button({ children, className }) {
  return (
    <div
      className={
        "flex items-center gap-2 " +
        (className ? className : "px-4 py-3 bg-primary-500/50 rounded-lg ")
      }
    >
      {children}
    </div>
  );
}

export default Button;
