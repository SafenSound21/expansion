import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';

interface HomeProps {
  currentLang: string;
}

export function Home({ currentLang }: HomeProps) {
  return (
    <>
      <Hero currentLang={currentLang} />
      <Services currentLang={currentLang} />
      <Features currentLang={currentLang} />
    </>
  );
}