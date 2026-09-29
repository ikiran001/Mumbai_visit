import Reveal from './Reveal';
import { tips } from '../data/content';

export default function Tips() {
  return (
    <section className="section tips" id="tips">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Plan Your Trip</span>
          <h2>Tips for First-Time Visitors</h2>
        </Reveal>
        <div className="tips-grid">
          {tips.map((tip) => (
            <Reveal key={tip.title}>
              <div className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h4>{tip.title}</h4>
                <p>{tip.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
