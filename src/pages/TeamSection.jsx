import React from 'react';
import TeamMemberCard from './TeamMemberCard.jsx';
import '../styles/TeamSection.css';

// Datos de los miembros del equipodo (ahora con el campo 'profileUrl')
const teamMembers = [
  {
    id: 1,
    name: 'ALEJANDRO TENORIO',
    title: 'CEO Boosting sas',
    specialty: 'Msc. Eng electrónico- especialista en visión artificial y análisis termográfico',
    email: 'gerencia@boostingsas.com',
    imageUrl: '/img/foto-alejandro.jpeg',
    profileUrl: 'https://api.whatsapp.com/send/?phone=3173852916&text=Hola!%20Estoy%20interesado(a)%20en%20los%20servicios%20de%20BOOSTING&type=phone_number&app_absent=0' // Reemplaza con el enlace real
  },
  {
    id: 2,
    name: 'JUAN DAVID ZORRILLA H.',
    title: 'DIRECTOR DE OPERACIONES',
    specialty: 'Msc. Eng Electricista - especialista IA para Descargas Parciales en Máquinas Rotativas',
    email: 'juan.zorrilla@boostingsas.com',
    imageUrl: '/img/foto-juan.jpeg',
    profileUrl: 'https://api.whatsapp.com/send/?phone=3167068565&text=Hola!%20Estoy%20interesado(a)%20en%20los%20servicios%20de%20BOOSTING.&type=phone_number&app_absent=0' // Reemplaza con el enlace real
  },
  {
    id: 3,
    name: 'STEFANIA SEGURA',
    title: 'COORDINADORA DPTO COMERCIAL',
    specialty: 'Administradora de empresas',
    email: 'auxiliar@boostingsas.com',
    imageUrl: '/img/foto-stefania.jpeg',
    profileUrl: 'https://api.whatsapp.com/send/?phone=3148287297&text=Hola!%20Estoy%20interesado(a)%20en%20los%20servicios%20de%20BOOSTING&type=phone_number&app_absent=0' // Reemplaza con el enlace real
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Nuestro Equipo</h2>
      <div className="team-members-container">
        {teamMembers.map(member => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            title={member.title}
            specialty={member.specialty}
            email={member.email}
            imageUrl={member.imageUrl}
            profileUrl={member.profileUrl} // Pasamos la nueva prop
          />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;