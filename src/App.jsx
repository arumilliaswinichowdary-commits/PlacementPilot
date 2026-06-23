import "./App.css";
import { useState } from "react";

function App() {
  const [hrOutput, setHrOutput] = useState([]);
  const [pythonOutput, setPythonOutput] = useState([]);
  const [sqlOutput, setSqlOutput] = useState([]);
  const [intro, setIntro] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [resumeScore, setResumeScore] = useState(null);

  const hrQuestions = [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Describe a challenge you faced and how you solved it.",
    "Where do you see yourself in 5 years?",
    "Why do you want this internship?",
    "How do you handle pressure?",
    "What motivates you?",
    "Tell me about a team project."
  ];

  const pythonQuestions = [
    "Difference between List and Tuple?",
    "What is OOP?",
    "Explain Inheritance.",
    "What is a Dictionary?",
    "What is Flask?",
    "What is a Generator?",
    "Difference between Deep Copy and Shallow Copy?",
    "What is Exception Handling?",
    "What are Decorators?",
    "What is List Comprehension?"
  ];

  const sqlQuestions = [
    "What is a Primary Key?",
    "What is a Foreign Key?",
    "Difference between WHERE and HAVING?",
    "Explain Joins.",
    "What is Normalization?",
    "What is Denormalization?",
    "What is a View?",
    "What is an Index?",
    "Difference between DELETE and TRUNCATE?",
    "What is a Stored Procedure?"
  ];

const generateHR = () => {
  setHrOutput(hrQuestions);
};

const generatePython = () => {
  setPythonOutput(pythonQuestions);
};

const generateSQL = () => {
  setSqlOutput(sqlQuestions);
};

  const generateIntro = () => {
    setIntro(
      "Good morning sir/madam. My name is Supriya Chowdary. I am passionate about software development, web technologies, AI and problem solving. I have worked on projects using Python, Flask, SQL and modern web development technologies. I enjoy learning new skills and building real-world applications. I am looking forward to contributing to an organization where I can learn, grow and create meaningful impact."
    );
  };

  const analyzeResume = () => {
    let score = 50;

    const text = resumeText.toLowerCase();

    if (text.includes("python")) score += 10;
    if (text.includes("sql")) score += 10;
    if (text.includes("project")) score += 10;
    if (text.includes("internship")) score += 10;
    if (text.includes("github")) score += 10;

    if (score > 100) score = 100;

    setResumeScore(score);
  };

  return (
    <div>

      <nav className="navbar">
        <div className="logo">🚀 PlacementPilot</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Tools</li>
          <li>Dashboard</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>AI-Powered Placement Preparation Toolkit</h1>

        <p>
          Prepare Smarter. Interview Better. Get Hired Faster.
        </p>

        <button className="hero-btn">
          Start Preparing
        </button>
      </section>

      <section className="dashboard">

        <div className="score-card">
          <h2>Placement Readiness</h2>

          <h1>82%</h1>

          <p>
            Based on Skills, Projects and Resume Strength
          </p>
        </div>

      </section>

      <section className="tools">

  <div className="card">

    <h2>🎤 HR Interview Generator</h2>

    <button onClick={generateHR}>
      Generate HR Questions
    </button>

    {hrOutput.map((q, index) => (
      <p key={index}>✅ {q}</p>
    ))}

  </div>

  <div className="card">

    <h2>💻 Python Interview Generator</h2>

    <button onClick={generatePython}>
      Generate Python Questions
    </button>

    {pythonOutput.map((q, index) => (
      <p key={index}>✅ {q}</p>
    ))}

  </div>

  <div className="card">

    <h2>🗄 SQL Interview Generator</h2>

    <button onClick={generateSQL}>
      Generate SQL Questions
    </button>

    {sqlOutput.map((q, index) => (
      <p key={index}>✅ {q}</p>
    ))}

  </div>

</section>

      <section className="tools">

        <div className="card">

          <h2>📝 Self Introduction Builder</h2>

          <button onClick={generateIntro}>
            Generate Introduction
          </button>

          <p>{intro}</p>

        </div>

        <div className="card">

          <h2>📄 Resume Analyzer</h2>

          <textarea
            rows="8"
            placeholder="Paste your resume here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />

          <br />

          <button onClick={analyzeResume}>
            Analyze Resume
          </button>

          {resumeScore && (
            <h3>Resume Score: {resumeScore}/100</h3>
          )}

        </div>

      </section>

      <section className="tools">

        <div className="card">

          <h2>📚 30 Day Study Planner</h2>

          <ul>
            <li>Days 1-10 → Python</li>
            <li>Days 11-20 → SQL</li>
            <li>Days 21-25 → DSA</li>
            <li>Days 26-30 → Interview Preparation</li>
          </ul>

        </div>

        <div className="card">

          <h2>⭐ Why PlacementPilot?</h2>

          <p>
            A free toolkit designed to help students prepare
            for placements and internships efficiently.
          </p>

        </div>

      </section>

      <footer>

        <h3>Supriya Chowdary</h3>

        <p>arumilliaswinichowdary@gmail.com</p>

        <a
          href="https://digitalheroesco.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="digital-btn">
            Built for Digital Heroes
          </button>
        </a>

      </footer>

    </div>
  );
}

export default App;