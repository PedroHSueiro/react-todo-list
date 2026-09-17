import "./fab-button.style.css";

export function FabButton({ children, aditiveClass = "", ...rest }) {
  return (
    <button className={`fab ${aditiveClass}`} {...rest}>
      {children}
    </button>
  );
}
