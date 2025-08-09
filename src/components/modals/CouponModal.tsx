import React, { useState } from 'react';

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CouponModal: React.FC<CouponModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText('LAUNCHSALE');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleDownload = () => {
    window.open('https://exchange.adobe.com/apps/cc/203487/clipboard-it', '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
    animation: 'fadeIn 0.3s ease',
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
    borderRadius: '20px',
    padding: '48px 40px',
    maxWidth: '520px',
    width: '90%',
    boxShadow: '0px 30px 60px rgba(0, 0, 0, 0.5)',
    animation: 'scaleIn 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center' as const,
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'rgba(255, 255, 255, 0.15)',
    border: 'none',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    color: 'var(--white)',
    fontSize: '18px',
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '32px',
    color: 'var(--white)',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '32px',
    fontWeight: 800,
    marginBottom: '12px',
    color: 'var(--white)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '18px',
    opacity: 0.9,
    color: 'var(--white)',
  };

  const codeContainerStyle: React.CSSProperties = {
    marginBottom: '36px',
  };

  const codeInsetStyle: React.CSSProperties = {
    background: 'rgba(0, 0, 0, 0.3)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: 'inset 0 4px 12px rgba(0, 0, 0, 0.4)',
    margin: '0 auto',
    maxWidth: '300px',
    backdropFilter: 'blur(10px)',
  };

  const codeStyle: React.CSSProperties = {
    fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
    fontSize: '28px',
    fontWeight: 700,
    color: 'var(--white)',
    letterSpacing: '6px',
    display: 'block',
  };

  const buttonsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  };

  const buttonBaseStyle: React.CSSProperties = {
    padding: '16px 32px',
    fontSize: '16px',
    fontWeight: 600,
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    flex: '1',
    minWidth: '140px',
    maxWidth: '180px',
  };

  const copyButtonStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    background: copied ? '#10B981' : 'var(--white)',
    color: copied ? 'var(--white)' : 'var(--primary)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  const downloadButtonStyle: React.CSSProperties = {
    ...buttonBaseStyle,
    background: 'rgba(255, 255, 255, 0.15)',
    color: 'var(--white)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
  };

  const noteStyle: React.CSSProperties = {
    fontSize: '14px',
    opacity: 0.85,
    color: 'var(--white)',
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      
      <div style={overlayStyle} onClick={handleOverlayClick}>
        <div style={containerStyle}>
          <button 
            style={closeButtonStyle} 
            onClick={onClose}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
              e.currentTarget.style.transform = 'rotate(90deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            ×
          </button>
          
          <div style={headerStyle}>
            <h2 style={titleStyle}>🎉 Launch Sale!</h2>
            <p style={subtitleStyle}>Get 20% off Clipboard It with this exclusive code</p>
          </div>
          
          <div style={codeContainerStyle}>
            <div style={codeInsetStyle}>
              <span style={codeStyle}>LAUNCHSALE</span>
            </div>
          </div>
          
          <div style={buttonsStyle}>
            <button 
              style={copyButtonStyle}
              onClick={handleCopyCode}
              onMouseEnter={(e) => {
                if (!copied) {
                  e.currentTarget.style.background = 'var(--gray-200)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!copied) {
                  e.currentTarget.style.background = 'var(--white)';
                  e.currentTarget.style.transform = 'translateY(0px)';
                }
              }}
            >
              {copied ? '✓ Copied!' : 'Copy Code'}
            </button>
            <button 
              style={downloadButtonStyle}
              onClick={handleDownload}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0px)';
              }}
            >
              Get Extension
            </button>
          </div>
          
          <p style={noteStyle}>
            Code can applied at checkout on Adobe Exchange
          </p>
        </div>
      </div>
    </>
  );
};

export default CouponModal;