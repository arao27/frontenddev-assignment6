// src/components/LoadingSpinner.jsx
import "./LoadingSpinner.css"; // optional for styling

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p>Loading movies...</p>
    </div>
  );
}