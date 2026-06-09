import { useMemo } from 'react';

interface Star {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  initialBottom: number;
}

const COLORS = ['#ffffff', '#fffde7', '#fff9c4', '#ffcdd2', '#ef9a9a'];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function StarField() {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 120 }, (_, i) => ({
      id: i,
      left: randomBetween(0, 100),
      size: randomBetween(1, 3.5),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      duration: randomBetween(18, 40),
      delay: randomBetween(-40, 0),
      initialBottom: randomBetween(-20, 110),
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes rise {
          from { transform: translateY(0); opacity: var(--star-opacity-start); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          to   { transform: translateY(-120vh); opacity: 0; }
        }
      `}</style>
      {stars.map((star) => (
        <span
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.left}%`,
            bottom: `${star.initialBottom}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 1.5}px ${star.color}`,
            animation: `rise ${star.duration}s linear ${star.delay}s infinite`,
            ['--star-opacity-start' as string]: '0',
          }}
        />
      ))}
    </div>
  );
}
