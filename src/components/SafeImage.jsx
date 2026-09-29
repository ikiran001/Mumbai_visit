import { useState } from 'react';

export default function SafeImage({ src, alt, className, style }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #132238, #0a1628)',
          color: '#e8c547',
          fontSize: '0.85rem',
          fontWeight: 600,
          textAlign: 'center',
          padding: '1rem',
        }}
        role="img"
        aria-label={alt}
      >
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
}
