import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Benefits } from '../components/Benefits';
import { Faq } from '../components/Faq';
import { SmallContact } from '../components/SmallContact';


interface HomeProps {
  currentLang: string;
}

export function Home({ currentLang }: HomeProps) {
  return (
    <>
      <Hero currentLang={currentLang} />
      <Benefits />
      <Services currentLang={currentLang} />
      <Faq />
      <SmallContact />
    </>
  );
}