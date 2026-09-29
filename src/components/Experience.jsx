import Reveal from './Reveal';
import { timeline } from '../data/content';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="experience-layout">
          <Reveal className="experience-intro">
            <span className="section-label">Personal Journal</span>
            <h2>My Experience Visiting Mumbai</h2>
            <p className="lead">I landed at Chhatrapati Shivaji International Airport on a humid October morning. The city hit me like a wave — heat, honks, and the smell of street food mixed with sea salt.</p>
          </Reveal>

          <div className="timeline">
            {timeline.map((item) => (
              <Reveal key={item.day} className="timeline-item">
                <div className="timeline-day">{item.day}</div>
                <div className="timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <blockquote className="quote">
              <p>"Mumbai doesn't just welcome you — it absorbs you. You arrive as a visitor and leave with a piece of the city in your heart."</p>
              <cite>— My journal, last night in Mumbai</cite>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
