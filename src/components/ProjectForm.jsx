import React from "react";

function ProjectForm({
  handleSubmit,
  heading,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) {
  return (
    <form className="ProjectForm" onSubmit={handleSubmit}>
      <h3>{heading}</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="project name..."
        autoFocus
      />
      <button
        className="cancel"
        role="button"
        onClick={() => setShowModal(false)}
      >
        Cancel
      </button>
      <button className="confirm">{confirmButtonText}</button>
    </form>
  );
}

export default ProjectForm;
