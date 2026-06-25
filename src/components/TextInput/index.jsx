import "./text-input.style.css";

export function TextInput({ ...props }) {
  return <input type="text" className="text-input" {...props} />;
}
