import { useReveal } from '../hooks/useReveal';

export default function Reveal({ children, className = '' }) {
  const { ref, className: revealClass } = useReveal();
  return (
    <div ref={ref} className={`${revealClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
