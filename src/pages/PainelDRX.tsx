import { useState, useEffect } from 'react';

const PainelDRX = () => {
  const [iframeKey, setIframeKey] = useState(0);

  // Force iframe reload every time this component mounts
  useEffect(() => {
    setIframeKey(Date.now());
  }, []);

  return (
    <div className="w-full" style={{ height: 'calc(100vh - 68px)' }}>
      <iframe
        key={iframeKey}
        src={`/painel-drx.html?_t=${iframeKey}`}
        className="w-full h-full border-0"
        title="Painel DRX"
        allow="camera;microphone"
        style={{ minHeight: '100%' }}
      />
    </div>
  );
};

export default PainelDRX;
