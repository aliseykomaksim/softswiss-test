export default function Button({ filled, children }) {
  return (
    <button className={`button ${filled ? "button-filled" : ""}`}>{children}</button>
  );
};
