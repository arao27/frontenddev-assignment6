// src/components/ErrorMessage.jsx
export default function ErrorMessage({ message }) {
  return (
    <div style={{ color: "red", textAlign: "center", marginTop: "2rem" }}>
      <p>Error: {message}</p>
    </div>
  );
}