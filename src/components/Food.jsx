import Reveal from './Reveal';
import { foodItems } from '../data/content';

export default function Food() {
  return (
    <section className="section food" id="food">
      <div className="container">
        <Reveal className="food-banner">
          <div className="food-text">
            <span className="section-label">Bonus</span>
            <h2>Mumbai Street Food I Loved</h2>
            <p>No Mumbai trip is complete without eating on the street. These became my daily rituals:</p>
            <ul className="food-list">
              {foodItems.map((item) => (
                <li key={item.name}><strong>{item.name}</strong> — {item.desc}</li>
              ))}
            </ul>
          </div>
          <div className="food-image">
            <img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80" alt="Indian street food" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
