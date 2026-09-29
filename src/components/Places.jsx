import Reveal from './Reveal';
import SafeImage from './SafeImage';
import { places } from '../data/content';

export default function Places() {
  return (
    <section className="section places" id="places">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Must Visit</span>
          <h2>Famous Places in Mumbai</h2>
          <p>From colonial architecture to spiritual caves — these spots define the soul of the city.</p>
        </Reveal>
        <div className="places-grid">
          {places.map((place) => (
            <Reveal key={place.name}>
              <article className="place-card">
                <div className="place-img">
                  <SafeImage src={place.image} alt={place.name} />
                  <span className="place-tag">{place.tag}</span>
                </div>
                <div className="place-body">
                  <h3>{place.name}</h3>
                  <p>{place.description}</p>
                  <span className="place-location">📍 {place.location}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
