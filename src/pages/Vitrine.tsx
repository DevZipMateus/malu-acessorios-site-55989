import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(() => {
    // Calcula altura inicial imediatamente
    return window.innerHeight - 80 - 63;
  });

  useEffect(() => {
    const calculateHeight = () => {
      // 100vh - 80px (header) - 63px (rodapé montesite)
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(height);
    };

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
      
      <div className="h-screen flex flex-col overflow-hidden">
        <Header />
        <main className="pt-20 flex-grow overflow-hidden">
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
        </main>
      </div>
    </>
  );
};

export default Vitrine;
