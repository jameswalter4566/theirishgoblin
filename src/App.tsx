import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Culture } from './components/Culture';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#ffffff',
    }}>
      {/* Header Navigation */}
      <header style={{
        background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(34, 197, 94, 0.3)',
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span>🍀</span>
            Saint Patrick's
          </div>

          {/* Navigation Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}>
            <div style={{
              display: 'flex',
              gap: '24px',
            }}>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
                transition: 'opacity 0.2s ease',
              }}>
                Home
              </a>
              <a href="#culture" style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
                transition: 'opacity 0.2s ease',
              }}>
                Culture
              </a>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
                transition: 'opacity 0.2s ease',
              }}>
                Music
              </a>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
                transition: 'opacity 0.2s ease',
              }}>
                Events
              </a>
              <a href="#" style={{
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
                transition: 'opacity 0.2s ease',
              }}>
                About
              </a>
            </div>

            {/* Sign In Button */}
            <button style={{
              padding: '10px 20px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#22c55e',
              background: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}>
              Sign In
            </button>
          </div>
        </nav>
      </header>

      <Hero />
      <Features />
      <div id="culture">
        <Culture />
      </div>
      <Footer />
    </div>
  );
}