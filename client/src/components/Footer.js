// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/priyanxhh29/"
        target="_blank"
        title="Priyanshu Pal Linkedin Profile"
      >
        Priyanshu
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/priyanxhh29/Savory"
        target="_blank"
        title="Savory Github Repository"
      >
        <strong>
          <span>Savory</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;