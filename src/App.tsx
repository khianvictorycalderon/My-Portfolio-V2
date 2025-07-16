
import { useEffect, useState } from "react";
const titleMessage = "I'm a web developer committed to building high-quality, modern websites with passion, precision, and a focus on meeting client expectations."

const mySkills = [
  "Front-End Website Development",
  "Back-End Website System Development",
  "Website Search Engine Optimization",
  "Website UI Designing",
  "Website Responsive UI Designing",
  "Website Publishing (Static Deployment)",
  "Website Analytics",
  "Website Testing and Debugging",
]

const myTech = [
  {
    title:"React",
    percentage:77,
  },
  {
    title:"Bootstrap",
    percentage:79,
  },
  {
    title:"Firebase Web",
    percentage:62,
  },
  {
    title:"Google Analytics",
    percentage:12,
  },
  {
    title:"PHP (Hypertext Preprocessor)",
    percentage:65,
  },
  {
    title:"MySQL",
    percentage:55,
  },
  {
    title:"Python",
    percentage:47,
  },
  {
    title:"JavaScript",
    percentage:91,
  },
  {
    title:"CSS (Cascading Style Sheets)",
    percentage:85,
  },
  {
    title:"HTML (Hypertext Markup Language)",
    percentage:87,
  },
  /*
  {
    title:"",
    percentage:,
  },
  */
];

const mySocMed = [
  {
    title:"UpWork",
    link:"https://www.upwork.com/freelancers/~013a9c6d4543925f1e"
  },
  {
    title:"Donate",
    link:"https://khianvictorycalderon.github.io/donation/donate.html"
  },
  {
    title:"GitHub",
    link:"https://github.com/khianvictorycalderon"
  },
  {
    title:"Linkedin",
    link:"https://www.linkedin.com/in/khian-victory-d-calderon-b1493030a/"
  },
  {
    title:"X (Former Twitter)",
    link:"https://x.com/KhianVictory"
  },
  {
    title:"Instagram",
    link:"https://www.instagram.com/khiandelapena/"
  },
  {
    title:"TikTok",
    link:"https://www.tiktok.com/@khian.vc"
  }
  /*
  {
    title:"",
    link:""
  },
  */
];

const myProjects = [
  {
    "image": "images/chatterplex.png",
    "title": "Chatterplex: Real-Time Chat",
    "link": "https://chatterplex.netlify.app/",
    "desc": "A react and firebase website. My first real-time chat website that allows users to chat anonymously or with nicknames without signing-in."
  },
  {
    "image": "images/realestatewireframe1.png",
    "title": "Real-Estate WireFrame",
    "link": "https://www.figma.com/proto/sBA6D40raiROKRjZ44Ut4x/Real-Estate-Wireframe-1",
    "desc": "A wireframe template for real-estate website designed in figma used for showcasing."
  },
  {
    "image": "images/businesswireframe1.png",
    "title": "Business WireFrame",
    "link": "https://www.figma.com/proto/lhnRVZDtoBZzcDA4JvwfyT/Business-WireFrame-1",
    "desc": "A wireframe template for business clothing website designed in figma used for showcasing (Desktop design only)."
  },
  {
    "image": "images/kvbot.png",
    "title": "KV ChatBot (AI)",
    "link": "https://kvbot.netlify.app/",
    "desc": "A react website that allows you to interact with a custom-built chatbot featuring diverse capabilities and a model developed from scratch."
  },
  {
    "image": "images/unigma.png",
    "title": "Unigma: Ultimate Enigma",
    "link": "https://unigma.netlify.app/",
    "desc": "A react website that primarily encrypts and decrypts text and characters using a specific key for secure, anonymous communication."
  },
  {
    "image": "images/litesalesanalyzer.png",
    "title": "Lite Sales Analyzer",
    "link": "https://lite-sales-analyzer.netlify.app/",
    "desc": "A react website that analyzes your sales data to calculate metrics like profit margins and predict future sales."
  },
  {
    "image": "images/articlestory.png",
    "title": "Articles & Stories",
    "link": "https://articlestory.netlify.app/",
    "desc": "My first react website featuring English articles and original Tagalog stories written by me for hobby purposes."
  },
  {
    "image": "images/sampleportfolio.png",
    "title": "Sample Portfolio Templates",
    "link": "https://sampleportfoliostyles.netlify.app/",
    "desc": "A JQuery website featuring a variety of templates for online portfolios, designed to help users choose the best option for showcasing their work."
  },
  {
    "image": "images/elevencrushtips.png",
    "title": "Eleven Crush Tips",
    "link": "https://elevencrushtips.github.io/",
    "desc": "My first published website, built using plain HTML and CSS, featuring group collaboration capabilities."
  },
  {
    "image": "images/rlsfirebase.png",
    "title": "React Firebase Register Login System",
    "link": "videos/rls_firebase_react.mp4",
    "desc": "A demo video with React and Firebase showcasing the basic functionalities of CRUD (Create, Read, Update, Delete) and effective data management techniques."
  },
  {
    "image": "images/rlsphpmysql.png",
    "title": "PHP MySQL Register Login System",
    "link": "videos/rls_php_mysql.mp4",
    "desc": "A demo video with PHP and MySQL showcasing the basic functionalities of CRUD (Create, Read, Update, Delete) and effective data management techniques."
  }
];

export default function App() {
  const [page] = useState<string>("home");
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme || (userPrefersDark ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-95-mobile">
      <div className={theme === "dark" ? "background-dark" : "background-light"}></div>
      <div className={theme === "dark" ? "text-light" : "text-dark"}>
        {page === "home" && (
          <>
            <div className="theme-option">
              <button className={`sun-icon theme-button ${theme === "dark" ? "btn-theme-light" : "btn-theme-dark"}`} onClick={handleChangeTheme} />
            </div>
            <div className="hidden">
              <h1>Khian Victory D. Calderon</h1>
              <h1>Khian Victory</h1>
              <h1>Khian DelaPeña</h1>
              <h1>Khian Calderon</h1>
              <h1>Calderon Khian</h1>
              <h1>Calderon Khian Victory</h1>
              <h1>Web Developer</h1>
              <h1>Freelancer</h1>
            </div>
            <div className={`center-h front-page-title ${theme === "dark" ? "text-light" : "text-dark"}`}>
              <div className="content">
                <h1>
                  <img src="icons/Khian_Icon_Logo.png" alt="Khian's Logo | Khian Victory D. Calderon - Web Developer & Freelancer" className="main-logo anim1" />
                  <br />
                  <div className="anim2">
                    Hello, I'm Khian Victory<br />
                    I'm a Web Developer <br />
                  </div>
                  {myProjects && <button type="button" className="btn btn-primary m-2 anim3" onClick={() => scrollTo("myprojects")}>
                    My Projects
                  </button>}
                  <button type="button" className="btn btn-primary m-2 anim4" onClick={() => scrollTo("skills")}>
                    Skills
                  </button>
                  <button type="button" className="btn btn-primary m-2 anim5" onClick={() => window.open("mailto:khianpublicmail@gmail.com", "_blank")}>
                    Contact Me
                  </button>
                </h1>
              </div>
            </div>
            <div className="aboutme">
              <h2 className="lsp-5 center-h">ABOUT ME</h2>
              <div className="w-70-d lh-2 fs-4 justify">{titleMessage}</div>
              <div id="skills">
                <br /><br /><br />
                <h2 className="lsp-5 center-h">SKILLS</h2>
                <div className="w-70-d fs-4 lsp-2">
                  <ul className="lh-2">
                    {mySkills.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {myProjects && <div className="w-100-d">
                <div className="projects m-4" id="myprojects">
                  <br /><br />
                  <h2 className="lsp-5 center-h">MY PROJECTS</h2>
                  <br />
                  <div className="box-3">
                    {myProjects.map((item, index) => (
                      <a href={item.link} key={index} className={`card-box project ${theme === "dark" ? "text-light" : "text-dark"}`}>
                        <div>
                          <div className="card-img" style={{backgroundImage: `url(${item.image})`}}>
                            <div className="project-data">
                              <h3 className="center-h">{item.title}</h3>
                              <div className="center-h">{item.desc}</div>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <h6 className="lsp-5 center-h">MORE SMALL PROJECTS AND CODE FILES AT MY <a href="https://github.com/khianvictorycalderon?tab=repositories" className="no-design" style={{color: theme === "dark" ? "cyan" : "darkblue"}}><b>GITHUB</b></a></h6>
              </div>}
              <br /><br />
              <h2 className="lsp-5 center-h">TECHNOLOGIES</h2>
              <div className={`w-70-d lsp-2 tech-box ${theme === "dark" ? "dark-bg" : "light-bg"}`}>
                {myTech.map((item, index) => (
                  <div key={index}>
                    <b>{item.title}</b><br />
                    <div className={`percentage-box ${theme === "dark" ? "tech-box-dark-bg" : "tech-box-light-bg"}`}>
                      <div style={{ width: `${item.percentage}%` }} className={`percent ${theme === "light" ? "tech-box-dark-bg" : "tech-box-light-bg"}`}>
                        {item.percentage}%
                      </div>
                    </div>
                    <br />
                  </div>
                ))}
              </div>

              <br /><br />
              <div className="social-media center-h">
                {mySocMed.map((item, index) => (
                  <a href={item.link} key={index} className="btn btn-primary m-2">
                    {item.title}
                  </a>
                ))}
              </div>
              <br /><br />
            </div>
          </>
        )}
      </div>
    </div>
  );
}