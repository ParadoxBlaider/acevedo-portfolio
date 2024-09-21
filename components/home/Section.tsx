import React from 'react';
import '@/styles/home/__section.scss';
import { StaticImageData } from 'next/image';

interface SectionProps {
  customClassName?: string;
  title: string;
  content: string;
  image?: StaticImageData; // Agrega esta línea
}

const Section: React.FC<SectionProps> = ({ customClassName = "", title, content, image }) => {
  return (
    <section className={customClassName}>
      <h2>{title}</h2>
      <p className='px-0 md:px-24'>{content}</p>
      { image && <img className='general-flags' src={image.src} alt={title} /> }
    </section>
  );
};

export default Section;
