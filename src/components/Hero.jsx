const HERO_IMG = 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=1920&q=80';

export default function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-bg" style={{ backgroundImage: `url('${HERO_IMG}')` }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">First time in the City of Dreams</p>
        <h1>My First Visit to <span>Mumbai</span></h1>
        <p className="hero-sub">
          Where the Arabian Sea meets skyscrapers, vada pav meets fine dining,
          and every sunset at Marine Drive feels like a movie scene.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">Read My Journey</a>
          <a href="#places" className="btn btn-outline">Explore Places</a>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line" />
      </div>
    </header>
  );
}
