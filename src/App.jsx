import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import sunny from "./images/sunny.jpg";
import menu from "./images/menu.png";

function App() {
  const [activeTab, setActiveTab] = useState('Skills');
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });
  const [status, setStatus] = useState('');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw-P7c_mCb1VpaFSov5AfA6LE-lbMMKoEGNhe7zOohOoPPiQajSy6r8Yx1FkVzzkWYN3w/exec';

  const opentab = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (tabName) => {
    if (window.innerWidth > 768) {
      setActiveTab(tabName);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveTab(''); // Reset when mouse leaves
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/my-portfolio/Resume_Nithil.pdf";
    link.download = "Resume_Nithil.pdf";
    link.click();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => {
        setStatus('Thank you for reaching out! Your message has been sent successfully. I’ll get back to you soon.');
        setFormData({ Name: '', Email: '', Message: '' }); // Clear form fields
        console.log('Success!', response);

        setTimeout(() => {
          setStatus('');
        }, 3000);
      })
      .catch((error) => {
        setStatus('Error! Please try again.');
        console.error('Error!', error.message);

        setTimeout(() => {
          setStatus('');
        }, 3000);
      });
  };

  return (
    <>
      <Helmet>
      <meta name="msvalidate.01" content="5A68D3F926B85AE5C533FD35F64525F1" />
  <title>Nithil Varma | Frontend Developer Portfolio</title>
  <meta
    name="description"
    content="Portfolio of Nithil Varma, a React.js frontend developer specializing in web and app interfaces. Explore projects, skills, and get in touch."
  />
  <meta
    name="keywords"
    content="Frontend Developer, React.js Developer, Portfolio Website, UI/UX Design, JavaScript Developer, Hyderabad Developer"
  />
  <meta name="author" content="Nithil Varma" />

  {/* Canonical Link */}
  <link rel="canonical" href="https://strong-gingersnap-96332e.netlify.app/" />

  {/* Correct JSON-LD */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nithil Varma",
      "jobTitle": "Frontend Developer",
      "url": "https://strong-gingersnap-96332e.netlify.app/",
      "sameAs": [
        "https://www.instagram.com/varma.nithil_",
        "https://in.linkedin.com/in/nithil-varma-16a59a341",
        "https://github.com/Nithil435"
      ]
    })
  }}
></script>

    {/* Open Graph Meta Tags */}
  <meta property="og:title" content="Nithil Varma | Frontend Developer Portfolio" />
  <meta property="og:description" content="Portfolio of Nithil Varma, a React.js frontend developer specializing in web and app interfaces. Explore projects, skills, and get in touch." />
  <meta property="og:image" content="https://strong-gingersnap-96332e.netlify.app/images/sunny.jpg" />
  <meta property="og:url" content="https://strong-gingersnap-96332e.netlify.app/" />
  <meta property="og:type" content="website" />
</Helmet>



     
      {/* Header Section */}
      <div id="header">
        <nav>
          <ul className={menuOpen ? "menu-toggle" : ""}>
            <a href="#header">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </ul>
          <img className="fa" src={menu} alt="Menu Icon" onClick={toggleMenu} aria-label="Toggle Navigation Menu" />
        </nav>
        <div className="header-text">
          <p>Frontend Developer</p>
          <h1>Hi, I'm <span>Nithil varma</span> <br /> Shivarathri </h1>
        </div>
      </div>

      {/* About Section */}
      <div id="about"> 
        <div className="container">
          <div className="row">
            <div className="about-col1">
              <img src={sunny} alt="Nithil Varma" />
            </div>
            <div className="about-col2">
              <h1 className='sub-title'>About Me</h1>
              <p>Hello! I’m Nithil Varma, a frontend developer with a passion for UI/UX design. I enjoy creating intuitive, visually appealing experiences, and my portfolio site is a recent project showcasing my work. When I’m not coding, you’ll find me listening to music or diving into the latest in IoT and tech innovations. Let’s connect and bring ideas to life!</p>

              <div className="tab-titles">
                <p
                  className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`}
                  onClick={() => opentab('Skills')}
                  onMouseEnter={() => handleMouseEnter('Skills')}
                  onMouseLeave={handleMouseLeave}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${activeTab === 'Projects' ? 'active-link' : ''}`}
                  onClick={() => opentab('Projects')}
                  onMouseEnter={() => handleMouseEnter('Projects')}
                  onMouseLeave={handleMouseLeave}
                >
                  Projects
                </p>
                <p
                  className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`}
                  onClick={() => opentab('Education')}
                  onMouseEnter={() => handleMouseEnter('Education')}
                  onMouseLeave={handleMouseLeave}
                >
                  Education
                </p>
              </div>

              <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id='Skills'>
                <ul>
                  <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
                  <li><span>Frontend Development</span><br />Web development</li>
                  <li><span>JavaScript</span><br />Programming Language</li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'Projects' ? 'active-tab' : ''}`} id='Projects'>
                <ul>
                  <li><span>Portfolio Website</span><br />Created to showcase my work</li>
                  <li><span>The Future of Home Electronics: Bluetooth Connectivity</span><br />Major project completed in college</li>
                </ul>
              </div>

              <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id='Education'>
                <ul>
                  <li><span>Intermediate</span><br />Alphores College, 2019</li>
                  <li><span>B.Tech in ECE</span><br />Vaageswari College, 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">Portfolio</h1>
          <p>Here is a collection of my recent projects that showcase my skills in frontend development and UI/UX design.</p>
          <div className="portfolio-projects">
            <div className="project">
              <h3>Self-Portfolio Website</h3>
              <p>This is a personal project to showcase my skills, experience, and design capabilities. I used React to build an interactive and responsive user interface and leveraged CSS for styling and animations.</p>
              <ul>
                <li>Skills: React, JavaScript, CSS, Responsive Design</li>
                <li>Highlights: Smooth animations, intuitive navigation, and modern layout.</li>
              </ul>
            </div>
            <div className="project">
              <h3>Weather App with React</h3>
              <p>Developed a weather forecasting app that retrieves real-time data and displays it in an easy-to-read format. The design emphasizes readability and quick access to weather details by city or GPS location.</p>
              <ul>
                <li>Skills: React, API Integration, JavaScript</li>
                <li>Highlights: Real-time data updates, responsive design, and user-friendly interface.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className='sub-title'> Contact Me </h1>
              <p>nithilvarmashivarathri@gmail.com</p>
              <p>91+ 9177937942</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/varma.nithil_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://in.linkedin.com/in/nithil-varma-shivarathri-16a59a341" className='Link'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://github.com/Nithil435" className='Git'><FontAwesomeIcon icon={faGithub} /></a>
              </div>
              <a href="/my-portfolio/Resume_Nithil.pdf" download="Resume_Nithil.pdf" className="button">Download CV</a>
            </div>
            <div className="contact-right">
              <form name='submit-to-google-sheet' onSubmit={handleSubmit}>
                <input type="text" name='Name' placeholder='Your Name' required value={formData.Name} onChange={handleChange} />
                <input type="email" name='Email' placeholder='Your Email' required value={formData.Email} onChange={handleChange} />
                <textarea name="Message" rows={6} placeholder='Your Message' value={formData.Message} onChange={handleChange}></textarea>
                <button className='submit' type='submit'>Submit</button>
              </form>
              {status && <p className="status-message">{status}</p>}
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Powered by React | &#169; 2025 Nithil Varma</p>
        </div>
      </div>
    </>
  );
}

export default App;
