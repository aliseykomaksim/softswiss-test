export default function Button({filled, children}) {
  return (
    <a className={`button ${filled ? "button-filled" : ""}`}>{children}</a>
  );
};
