import { useState } from 'react';

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1117 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorations */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 3s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      
      <div style={{
        position: 'absolute',
        top: '60%',
        right: '15%',
        width: '80px',
        height: '80px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 4s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '900px',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '100px',
          marginBottom: '32px',
          animation: 'fadeIn 0.8s ease-out',
        }}>
          <span style={{ fontSize: '24px' }}>🍀</span>
          <span style={{ fontSize: '14px', color: '#22c55e', fontWeight: 500 }}>
            Celebrating Irish Heritage
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: '72px',
          fontWeight: 800,
          lineHeight: 1.1,
          margin: '0 0 24px',
          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 0 40px rgba(34, 197, 94, 0.3)',
          animation: 'slideUp 1s ease-out',
        }}>
          Celebrate the Magic
          <br />
          of Saint Patrick's Day
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: '20px',
          color: '#9ca3af',
          lineHeight: 1.6,
          margin: '0 0 48px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          animation: 'slideUp 1s ease-out 0.2s both',
        }}>
          Discover the rich traditions, vibrant culture, and legendary folklore 
          that make Saint Patrick's Day a celebration of Irish spirit worldwide.
          From shamrocks to leprechauns, experience the emerald isle's magic.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'slideUp 1s ease-out 0.4s both',
        }}>
          <button
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: '#fff',
              background: buttonHovered
                ? 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
                : 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: buttonHovered ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: buttonHovered
                ? '0 20px 40px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.3)'
                : '0 10px 30px rgba(34, 197, 94, 0.3)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>🍀</span>
            Explore Irish Culture
          </button>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 600,
              color: isHovered ? '#22c55e' : '#fff',
              background: 'transparent',
              border: '1px solid rgba(34, 197, 94, 0.4)',
              borderRadius: '12px',
              cursor: 'pointer',
              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>🎵</span>
            Listen to Irish Music
          </button>
        </div>
      </div>

      {/* Floating shamrocks */}
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        fontSize: '40px',
        animation: 'float 6s ease-in-out infinite',
        opacity: 0.6,
        pointerEvents: 'none',
      }}>
        🍀
      </div>
      
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '8%',
        fontSize: '30px',
        animation: 'float 5s ease-in-out infinite reverse',
        opacity: 0.4,
        pointerEvents: 'none',
      }}>
        🍀
      </div>
    </section>
  );
}