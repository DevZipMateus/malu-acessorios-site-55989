import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(0);

  useEffect(() => {
    const calculateHeight = () => {
      // 100vh - 80px (header) - 63px (rodapé montesite)
      const height = window.innerHeight - 143;
      setIframeHeight(height);
    };

    // Calcula altura inicial
    calculateHeight();
    
    // Recalcula ao redimensionar
    window.addEventListener('resize', calculateHeight);
    
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <>
      <Helmet>
        <title>Demonstração de Vitrine - Malu Acessórios Ltda</title>
        <meta 
          name="description" 
          content="Confira nossa vitrine completa de produtos de beleza, maquiagens e cosméticos da Malu Acessórios." 
        />
        <meta property="og:title" content="Demonstração de Vitrine - Malu Acessórios Ltda" />
        <meta property="og:description" content="Confira nossa vitrine completa de produtos de beleza, maquiagens e cosméticos da Malu Acessórios." />
        <link rel="canonical" href="https://www.maluacessorios.com.br/vitrine" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col overflow-hidden">
        <style dangerouslySetInnerHTML={{ __html: `
          #montesite-footer-badge {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 40 !important;
            height: 63px !important;
          }
        ` }} />
        <Header />
        <main className="flex-1 relative pt-20">
          {iframeHeight > 0 && (
            <iframe 
              src="https://v4.egestor.com.br/vitrine/?s=flavialelis" 
              style={{ 
                width: '100%', 
                height: `${iframeHeight}px`, 
                border: 'none',
                display: 'block'
              }}
              title="Demonstração de Vitrine - Malu Acessórios"
            />
          )}
        </main>
      </div>
    </>
  );
};

export default Vitrine;
