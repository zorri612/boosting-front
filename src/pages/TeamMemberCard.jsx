import React from 'react';
import '../styles/TeamMemberCard.css';

// Agregamos la prop 'profileUrl'
const TeamMemberCard = ({ name, title, specialty, email, imageUrl, profileUrl }) => {
  return (
    // La card completa tendrá un efecto hover
    <div className="team-member-card">
      {/* Usamos un enlace para hacer la imagen clicable */}
      <a href={profileUrl} target="_blank" rel="noopener noreferrer" className="member-image-link">
        <div className="member-image-container">
          <img src={imageUrl} alt={`Foto de ${name}`} className="member-image" />
        </div>
      </a>
      <div className="member-info-box">
        <h3 className="member-name">{name}</h3>
        <p className="member-title">{title}</p>
        <p className="member-specialty">{specialty}</p>
        <a href={`mailto:${email}`} className="member-email">{email}</a>
      </div>
    </div>
  );
};

export default TeamMemberCard;