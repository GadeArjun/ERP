import React from "react";
import "./SubjectCard.css";

function SubjectCard({
  subjectName,
  subjectId,
  setSelectedSubjectId,
  setIsSelect,
}) {
  const handleCardClick = (subjectId) => {
    setSelectedSubjectId(subjectId);
    console.log(subjectId);
    setIsSelect(true);
  };

  return (
    <div className="subject-card" onClick={() => handleCardClick(subjectId)}>
      <h3>{subjectName.replace(subjectId, "")}</h3>
    </div>
  );
}

export default SubjectCard;
