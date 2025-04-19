import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Companies } from '../components/Companies';
import { Benefits } from '../components/Benefits';
import { SmallContact } from '../components/SmallContact';
import { Faq } from '../components/Faq';



interface HomeProps {
  currentLang: string;
}

export function Home({ currentLang }: HomeProps) {
  return (
    <>
      <Hero currentLang={currentLang} />
      <Companies/>
      <Benefits />
      <Services currentLang={currentLang} />
      <SmallContact />
    </>
  );
}