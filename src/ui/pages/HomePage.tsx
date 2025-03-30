import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { About } from '../components/home/About';
import { Contact } from '../components/home/Contact';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <About />
      <Contact />
    </MainLayout>
  );
}; 