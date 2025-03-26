import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
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
      <Process />
      <Faq />
      <StartNow />
      <Services currentLang={currentLang} />
      <SmallContact />
    </>
  );
}