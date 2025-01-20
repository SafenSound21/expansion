import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { Process } from '../components/Process';
import { Faq } from '../components/Faq';
import { SmallContact } from '../components/SmallContact';
import { StartNow } from '../components/StartNow';

interface HomeProps {
  currentLang: string;
}

export function Home({ currentLang }: HomeProps) {
  return (
    <>
      <Hero currentLang={currentLang} />
      <Features />
      <StartNow />
      <Services currentLang={currentLang} />
      <Process />
      <Faq />
      <SmallContact />
    </>
  );
}