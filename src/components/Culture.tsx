import { useState } from 'react';

export function Culture() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const culturalAspects = [
    {
      id: '1',
      title: 'Celtic Origins',
      description: 'Saint Patrick\'s Day traces back to ancient Celtic traditions and the feast day of Saint Patrick, patron saint of Ireland.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      details: 'The celebration began as a religious feast day in the 17th century to honor Saint Patrick and the arrival of Christianity in Ireland.'
    },
    {
      id: '2', 
      title: 'Traditional Symbols',
      description: 'The shamrock, leprechauns, and Celtic crosses are iconic symbols deeply rooted in Irish folklore and Christian tradition.',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop',
      details: 'Saint Patrick used the three-leafed shamrock to explain the Holy Trinity to the Irish people, making it a sacred symbol.'
    },
    {
      id: '3',
      title: 'Irish Music & Dance',
      description: 'Traditional Irish music with fiddles, tin whistles, and bodhrán drums creates the soundtrack of celebration.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      details: 'Irish step dancing and céilí dancing bring communities together in rhythmic celebration of cultural heritage.'
    },
    {
      id: '4',
      title: 'Global Celebrations',
      description: 'From Dublin to New York, Chicago to Sydney, Saint Patrick\'s Day has become a worldwide celebration of Irish culture.',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop',
      details: 'Major cities around the world host parades and festivities, often dyeing rivers and landmarks green in honor of Ireland.'
    }
  ];

  const traditions = [
    {
      icon: '🍀',
      name: 'Wearing Green',
      tradition: 'Wearing green honors Ireland and protects against leprechaun pinches according to folklore.'
    },
    {
      icon: '🌈',
      name: 'Finding Gold',
      tradition: 'Legend says leprechauns hide pots of gold at the end of rainbows, symbolizing hope and prosperity.'
    },
    {
      icon: '🥔',
      name: 'Irish Cuisine',
      tradition: 'Traditional foods like colcannon, soda bread, and corned beef celebrate Irish culinary heritage.'
    },
    {
      icon: '🎭',
      name: 'Storytelling',
      tradition: 'Irish storytelling (seanchaí) passes down myths, legends, and cultural wisdom through generations.'
    }
  ];

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #0d1117 50%, #0a0a0a 100%)',
      color: '#ffffff',
      padding: '120px 24px',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(34, 197, 94, 0.1)',
            border: '1px solid rgba(34, 197, 94, 0.3)',
            borderRadius: '100px',
            marginBottom: '24px',
          }}>
            <span style={{ fontSize: '20px' }}>🍀</span>
            <span style={{ fontSize: '14px', color: '#22c55e', fontWeight: 500 }}>
              Irish Culture & Heritage
            </span>
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.2,
            margin: '0 0 24px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            The Rich Tapestry of
            <br />
            Irish Culture
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#9ca3af',
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            Explore the deep-rooted traditions, vibrant customs, and enduring legacy 
            that make Irish culture one of the world's most celebrated and beloved heritages.
          </p>
        </div>

        {/* Cultural Aspects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '32px',
          marginBottom: '80px',
        }}>
          {culturalAspects.map((aspect) => (
            <div
              key={aspect.id}
              onMouseEnter={() => setHoveredId(aspect.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: hoveredId === aspect.id
                  ? 'rgba(34, 197, 94, 0.08)'
                  : 'rgba(255, 255, 255, 0.02)',
                border: '1px solid',
                borderColor: hoveredId === aspect.id
                  ? 'rgba(34, 197, 94, 0.4)'
                  : 'rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                overflow: 'hidden',
                transform: hoveredId === aspect.id ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredId === aspect.id 
                  ? '0 20px 40px rgba(34, 197, 94, 0.2)'
                  : '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: '100%',
                height: '250px',
                backgroundImage: `url(${aspect.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                }} />
              </div>
              
              <div style={{ padding: '24px' }}>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  color: hoveredId === aspect.id ? '#22c55e' : '#fff',
                  margin: '0 0 12px',
                  transition: 'color 0.3s ease',
                }}>
                  {aspect.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: '#9ca3af',
                  margin: '0 0 16px',
                  lineHeight: 1.5,
                }}>
                  {aspect.description}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: 0,
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                }}>
                  {aspect.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Traditions Section */}
        <div style={{
          background: 'rgba(34, 197, 94, 0.05)',
          borderRadius: '20px',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          padding: '48px',
          marginBottom: '80px',
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
            margin: '0 0 40px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Sacred Traditions
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}>
            {traditions.map((tradition, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  border: '1px solid rgba(34, 197, 94, 0.1)',
                  textAlign: 'center',
                }}
              >
                <div style={{
                  fontSize: '40px',
                  marginBottom: '16px',
                }}>
                  {tradition.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#22c55e',
                  margin: '0 0 8px',
                }}>
                  {tradition.name}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#9ca3af',
                  margin: 0,
                  lineHeight: 1.5,
                }}>
                  {tradition.tradition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Image Gallery */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 40px',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Ireland in Images
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}>
            {[
              'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=400&h=300&fit=crop',
              'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
            ].map((image, index) => (
              <div
                key={index}
                style={{
                  height: '250px',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '12px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, transparent 60%, rgba(34, 197, 94, 0.3) 100%)',
                }} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '48px',
          background: 'rgba(34, 197, 94, 0.1)',
          borderRadius: '20px',
          border: '1px solid rgba(34, 197, 94, 0.3)',
        }}>
          <h3 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#fff',
            margin: '0 0 16px',
          }}>
            Experience Irish Culture Today
          </h3>
          <p style={{
            fontSize: '16px',
            color: '#9ca3af',
            margin: '0 0 32px',
            maxWidth: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Immerse yourself in the beauty and depth of Irish heritage. 
            From music to dance, stories to symbols, discover what makes Ireland magical.
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
            <span>🍀</span>
            Explore More Culture
          </button>
        </div>
      </div>
    </section>
  );
}