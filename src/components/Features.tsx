import { useState } from 'react';

export function Features() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features = [
    {
      id: '1',
      icon: '🍀',
      title: 'Rich Irish Heritage',
      description: 'Explore centuries of Irish history, from ancient Celtic traditions to modern celebrations that honor the patron saint of Ireland.',
    },
    {
      id: '2',
      icon: '🎵',
      title: 'Traditional Music & Dance',
      description: 'Experience the soul-stirring sounds of traditional Irish music and the energetic steps of Irish dancing that bring communities together.',
    },
    {
      id: '3',
      icon: '🌈',
      title: 'Legendary Folklore',
      description: 'Discover enchanting tales of leprechauns, pots of gold, and rainbow legends that have captivated imaginations for generations.',
    },
    {
      id: '4',
      icon: '🍺',
      title: 'Festive Celebrations',
      description: 'Join millions worldwide in parades, festivals, and gatherings that transform cities into seas of emerald green every March 17th.',
    },
  ];

  return (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(180deg, #0d1117 0%, #0a0a0a 100%)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 16px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            The Spirit of Ireland
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Immerse yourself in the traditions, legends, and celebrations that make
            Saint Patrick's Day a beloved holiday around the world.
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {features.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: '32px',
                background: hoveredId === feature.id
                  ? 'rgba(34, 197, 94, 0.08)'
                  : 'rgba(255, 255, 255, 0.02)',
                border: '1px solid',
                borderColor: hoveredId === feature.id
                  ? 'rgba(34, 197, 94, 0.4)'
                  : 'rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                transform: hoveredId === feature.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredId === feature.id 
                  ? '0 20px 40px rgba(34, 197, 94, 0.2), 0 0 20px rgba(34, 197, 94, 0.1)'
                  : '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                textAlign: 'center',
                filter: hoveredId === feature.id ? 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.5))' : 'none',
                transition: 'filter 0.3s ease',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '22px',
                fontWeight: 600,
                color: hoveredId === feature.id ? '#22c55e' : '#fff',
                margin: '0 0 12px',
                textAlign: 'center',
                transition: 'color 0.3s ease',
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#9ca3af',
                margin: 0,
                lineHeight: 1.6,
                textAlign: 'center',
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          padding: '48px',
          background: 'rgba(34, 197, 94, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(34, 197, 94, 0.2)',
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 16px',
          }}>
            Ready to Celebrate?
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#9ca3af',
            margin: '0 0 32px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Join the global celebration of Irish culture and create unforgettable memories
            this Saint Patrick's Day.
          </p>
          <button style={{
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: 600,
            color: '#fff',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            margin: '0 auto',
          }}>
            <span>🎉</span>
            Start Celebrating
          </button>
        </div>
      </div>
    </section>
  );
}