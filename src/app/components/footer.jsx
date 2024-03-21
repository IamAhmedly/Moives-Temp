 
const Footer = () => {
  const teamMembers = [
    {
      name: "Ahmed",
      role: "Project Lead",
      github: "https://github.com/AhmedGithub",
      linkedin: "https://www.linkedin.com/in/AhmedLinkedin",
    },
    {
      name: "Amal",
      role: "To be determined",
      github: "https://github.com/AmalGithub",
      linkedin: "https://www.linkedin.com/in/AmalLinkedin",
    },
    {
      name: "Yuosra",
      role: "To be determined",
      github: "https://github.com/YusraGithub",
      linkedin: "https://www.linkedin.com/in/YusraLinkedin",
    },
    {
      name: "Abdulrahman",
      role: "To be determined",
      github: "https://github.com/AbdulrahmanGithub",
      linkedin: "https://www.linkedin.com/in/AbdulrahmanLinkedin",
    },
  ];

  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <div className="container mx-auto">
        <p>Designed and developed by:</p>
        <div className="flex justify-center space-x-4 mt-2">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <p>{member.name}</p>
              <p>{member.role}</p>
              <div className="flex justify-center space-x-2">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;