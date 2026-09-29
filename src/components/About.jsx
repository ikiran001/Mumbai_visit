import Reveal from './Reveal';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-text">
            <span className="section-label">Welcome</span>
            <h2>The City That Never Sleeps</h2>
            <p>Mumbai — formerly Bombay — is India's financial capital and its beating heart. Home to over 20 million people, Bollywood, the stock exchange, and some of the most iconic landmarks in the country.</p>
            <p>For a first-time visitor, Mumbai can feel overwhelming: the crowds, the honking, the humidity. But beneath the chaos lies warmth, resilience, and a spirit that pulls you in. This website is my personal journal from that first magical trip.</p>
            <ul className="about-stats">
              <li><strong>7</strong> days explored</li>
              <li><strong>12+</strong> landmarks visited</li>
              <li><strong>∞</strong> memories made</li>
            </ul>
          </Reveal>
          <Reveal className="about-image">
            <img src="https://images.unsplash.com/photo-1587474260587-136574528ed5?w=800&q=80" alt="Mumbai skyline at dusk" />
            <div className="about-badge">मुंबई · Mumbai</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
