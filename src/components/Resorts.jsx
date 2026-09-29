import Reveal from './Reveal';
import SafeImage from './SafeImage';
import { featuredResort, resorts } from '../data/content';

export default function Resorts() {
  return (
    <section className="section resorts" id="resorts">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Stay in Style</span>
          <h2>Resorts &amp; Hotels I Explored</h2>
          <p>From heritage palaces to seaside retreats — where comfort meets Mumbai's grandeur.</p>
        </Reveal>

        <Reveal className="resort-featured">
          <div className="resort-featured-img">
            <SafeImage src={featuredResort.image} alt={featuredResort.name} />
          </div>
          <div className="resort-featured-body">
            <span className="resort-stars">★★★★★</span>
            <h3>{featuredResort.name}</h3>
            <p>{featuredResort.description}</p>
            <ul className="resort-amenities">
              {featuredResort.amenities.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <span className="resort-area">{featuredResort.area}</span>
          </div>
        </Reveal>

        <div className="resorts-grid">
          {resorts.map((r) => (
            <Reveal key={r.name}>
              <article className="resort-card">
                <SafeImage src={r.image} alt={r.name} />
                <div className="resort-card-body">
                  <h4>{r.name}</h4>
                  <p>{r.description}</p>
                  <span className="resort-meta">{r.area}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
