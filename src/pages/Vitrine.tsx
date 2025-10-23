import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Vitrine = () => {
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
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="pt-20 flex-grow">
          <iframe 
            src="https://v4.egestor.com.br/vitrine/?s=flavialelis" 
            style={{ width: '100%', height: '800px', border: 'none' }}
            title="Demonstração de Vitrine - Malu Acessórios"
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Vitrine;
