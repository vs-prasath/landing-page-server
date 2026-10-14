import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        MindFlow<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#testimonials">Testimonials</a>
      </div>

      <a href="#get-started" className="nav-button">
        Get Started
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          ✨ Your ideas deserve to grow
        </div>

        <h1>
          Turn Your Ideas
          <br />
          Into <span>Progress.</span>
        </h1>

        <p>
          Meet MindFlow, your personal productivity companion.
          Organize your thoughts, focus on what matters, and
          turn your goals into meaningful achievements.
        </p>

        <div className="hero-buttons">
          <a href="#get-started" className="primary-button">
            Get Started Free →
          </a>

          <a href="#features" className="secondary-button">
            Explore Features
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>10K+</h3>
            <p>Happy Users</p>
          </div>

          <div>
            <h3>95%</h3>
            <p>Goal Completion</p>
          </div>

          <div>
            <h3>4.9/5</h3>
            <p>User Rating</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <div>
              <p className="small-text">YOUR WORKSPACE</p>
              <h3>Today's Overview</h3>
            </div>
            <span className="status-dot">●</span>
          </div>

          <div className="progress-card">
            <div className="progress-heading">
              <span>Daily Progress</span>
              <strong>75%</strong>
            </div>

            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>

            <p>You're doing great. Keep it going!</p>
          </div>

          <h4 className="task-title">Today's Priorities</h4>

          <div className="task-item">
            <span className="task-check completed">✓</span>
            <div>
              <strong>Plan the week</strong>
              <p>Personal · 15 min</p>
            </div>
            <span className="task-label">Done</span>
          </div>

          <div className="task-item">
            <span className="task-check"> </span>
            <div>
              <strong>Finish project design</strong>
              <p>Work · 45 min</p>
            </div>
            <span className="task-label active-label">In progress</span>
          </div>

          <div className="task-item">
            <span className="task-check"> </span>
            <div>
              <strong>Read for 20 minutes</strong>
              <p>Learning · 20 min</p>
            </div>
          </div>

          <div className="focus-card">
            <span>🎯</span>
            <div>
              <strong>Stay focused</strong>
              <p>One small step at a time.</p>
            </div>
          </div>
        </div>

        <div className="floating-note">
          <span>✨</span>
          <div>
            <strong>Great progress!</strong>
            <p>You're building good habits.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "🧠",
      title: "Capture Your Ideas",
      description:
        "Save your thoughts, brainstorm freely, and keep all your ideas in one organized place.",
    },
    {
      icon: "🎯",
      title: "Focus on What Matters",
      description:
        "Prioritize important tasks and reduce distractions so you can make meaningful progress.",
    },
    {
      icon: "📈",
      title: "Track Your Progress",
      description:
        "See how far you've come, celebrate your wins, and build better habits every day.",
    },
    {
      icon: "⚡",
      title: "Work Smarter",
      description:
        "Create simple workflows that help you manage your time and get more done.",
    },
    {
      icon: "🌱",
      title: "Build Better Habits",
      description:
        "Turn small daily actions into lasting routines that support your personal growth.",
    },
    {
      icon: "☁️",
      title: "Stay Organized",
      description:
        "Keep your goals and priorities clear so you always know what to work on next.",
    },
  ];

  return (
    <section className="features section" id="features">
      <div className="section-heading">
        <span className="section-label">WHY MINDFLOW?</span>
        <h2>
          Everything you need to
          <br />
          <span>make progress.</span>
        </h2>
        <p>
          Simple tools to help you think clearly, work better,
          and achieve more.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      description:
        "Write down your ideas, tasks, and goals without worrying about forgetting anything.",
    },
    {
      number: "02",
      title: "Organize",
      description:
        "Turn your thoughts into clear priorities and create a plan that works for you.",
    },
    {
      number: "03",
      title: "Take Action",
      description:
        "Focus on one step at a time, track your progress, and celebrate every achievement.",
    },
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="section-heading">
        <span className="section-label">HOW IT WORKS</span>
        <h2>
          From ideas to action
          <br />
          in <span>three simple steps.</span>
        </h2>
        <p>
          Getting organized doesn't have to be complicated.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote:
        "MindFlow helped me organize my thoughts and finally make progress on the projects that matter to me.",
      name: "Sarah Johnson",
      role: "Creative Professional",
      initials: "SJ",
    },
    {
      quote:
        "I love how simple everything feels. I spend less time planning and more time actually getting things done.",
      name: "Michael Chen",
      role: "Product Designer",
      initials: "MC",
    },
    {
      quote:
        "Having a clear view of my daily goals keeps me motivated. Small wins really do add up!",
      name: "Emily Davis",
      role: "Entrepreneur",
      initials: "ED",
    },
  ];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="section-heading">
        <span className="section-label">WHAT PEOPLE SAY</span>
        <h2>
          Real people. Real
          <br />
          <span>progress.</span>
        </h2>
        <p>
          See how MindFlow can make a difference in your day.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <div className="stars">★★★★★</div>

            <p className="testimonial-quote">
              "{testimonial.quote}"
            </p>

            <div className="testimonial-person">
              <div className="avatar">{testimonial.initials}</div>

              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section" id="get-started">
      <div className="cta-content">
        <span className="section-label">YOUR NEXT CHAPTER STARTS HERE</span>

        <h2>
          Ready to turn your
          <br />
          ideas into <span>reality?</span>
        </h2>

        <p>
          Start with one small step today. Your future self
          will thank you.
        </p>

        <a href="mailto:hello@mindflow.example" className="primary-button">
          Let's Get Started →
        </a>

        <p className="cta-note">
          ✨ A little progress every day adds up to big results.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="logo">
          MindFlow<span>.</span>
        </a>

        <p>
          Helping you turn ideas into meaningful progress.
        </p>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Testimonials</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MindFlow. All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;