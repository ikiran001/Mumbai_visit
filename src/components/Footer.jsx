export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <h3>Mumbai Diaries</h3>
          <p>My first visit to the City of Dreams — documented with love.</p>
        </div>
        <div className="footer-links">
          <a href="#places">Places</a>
          <a href="#resorts">Resorts</a>
          <a href="#experience">My Story</a>
          <a href="#gallery">Gallery</a>
        </div>
        <p className="footer-copy">
          Made with ❤️ · Photos via <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>
          · <a href="https://github.com/ikiran001/Mumbai_visit" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </footer>
  );
}
