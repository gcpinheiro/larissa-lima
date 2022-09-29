import type { NextPage } from 'next';
import Head from 'next/head';

// import BannerInformativo from '../components/banner-informativo';
import BannerInicial from '../components/banner-inicial';
// import { ComeceSuaJornada } from '../components/comece-sua-jornada';
// import { CursosPagos } from '../components/CursosPagos';
import { Depoimentos } from '../components/Depoimentos';
// import Footer from '../components/Footer';
import { Header } from '../components/header';
import { MercadoAlimenticio } from '../components/mercado-alimenticio';
// import NossosCursos from '../components/nossos-cursos';
// import { OQueEstaEsperando } from '../components/o-que-esta-esperando';
// import { PorQueInovacci } from '../components/porque-inovacci';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Larissa Lima</title>
      </Head>
      <Header />
      <Depoimentos />
      <BannerInicial />
      <MercadoAlimenticio />
      {/* <NossosCursos />
      <OQueEstaEsperando />
      <CursosPagos />
      <BannerInformativo />
      <PorQueInovacci />
      

      <ComeceSuaJornada />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
