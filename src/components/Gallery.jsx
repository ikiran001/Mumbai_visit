import Reveal from './Reveal';
import { gallery } from '../data/content';

export default function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <Reveal className="section-header">
          <span className="section-label">Snapshots</span>
          <h2>Photo Gallery</h2>
          <p>Moments frozen from my first Mumbai adventure.</p>
        </Reveal>
        <div className="gallery-grid">
          {gallery.map((item) => (
            <Reveal key={item.label} className={`gallery-item${item.className ? ` ${item.className}` : ''}`}>
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
