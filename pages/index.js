import Btnwhatsapp from '../components/Btnwhatsapp';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import MetaTags from '../components/MetaTags';

export default function Home() {
  return (
    <>
      <MetaTags
        title="Aline Balas Gourmet"
        description="Desde 2016 oferecendo uma experiência gourmet, além do habitual, para as balas de coco"
        url="https://alinebalasgourmet.vercel.app/"
        image="/static/images/logo/alinebalasgourmet_logo.svg"
      >
        <Header />
        <Main linkOrder="#" />
        <Btnwhatsapp />
        <Footer />
      </MetaTags>
    </>
  );
}
