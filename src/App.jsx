import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🚀 PlacementPilot</div>

        <ul className="nav-links">
          <li>Home</li>
          <li>Tools</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <h1>AI-Powered Placement Preparation Toolkit</h1>

        <p>
          Practice smarter, improve your resume, prepare for interviews,
          and get placement-ready faster.
        </p>

        <button className="hero-btn">
          Start Preparing
        </button>
      </section>

      <section className="tools">

        <div className="card">
          <h2>🎤 HR Interview Generator</h2>
          <p>
            Generate common HR interview questions instantly.
          </p>
        </div>

        <div className="card">
          <h2>💻 Technical Questions</h2>
          <p>
            Practice Python, Java, SQL and Web Development.
          </p>
        </div>

        <div className="card">
          <h2>📄 Resume Analyzer</h2>
          <p>
            Analyze resume strength and improve ATS score.
          </p>
        </div>

        <div className="card">
          <h2>📚 Study Planner</h2>
          <p>
            Create a preparation roadmap before interviews.
          </p>
        </div>

      </section>

      <footer>

        <h3>Supriya Chowdary</h3>

        <p>your-email@gmail.com</p>

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
    </>
  );
}

export default App;