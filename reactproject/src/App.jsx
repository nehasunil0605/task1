import './App.css'

function App() {
  const services = [
    {
      title: 'Web Development',
      description:
        'Modern and responsive websites built with the latest technologies.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful and user-friendly interfaces for better experiences.',
      icon: '🎨',
    },
    {
      title: 'Digital Marketing',
      description:
        'Smart marketing strategies to grow your online presence.',
      icon: '📈',
    },
  ]

  return (
    <div className="container">
      {/* HERO SECTION */}
      <header className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Create Stunning Digital Experiences</h1>

          <p>
            We build responsive websites and modern digital solutions
            that help businesses grow faster online.
          </p>

          <button className="cta-btn">Get Started</button>
        </div>
      </header>

      {/* SERVICES */}
      <section className="services">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <div className="icon">{service.icon}</div>

            <h2>{service.title}</h2>

            <p>{service.description}</p>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Digital Studio. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App