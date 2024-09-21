"use client";
import '@/styles/main.scss';
import '@/styles/home/__section.scss';
import Layout from '@/components/Layout';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Laika
import laika1 from '@/assets/home/laika/laika-1.jpg';
import laika2 from '@/assets/home/laika/laika-2.jpg';
import laika3 from '@/assets/home/laika/laika-3.jpg';
import laikaLogo from '@/assets/home/laika/laika-logo.png';

// Precompro
import precompro1 from '@/assets/home/precompro/precompro-1.jpg';
import precompro2 from '@/assets/home/precompro/precompro-2.jpg';
import precompro3 from '@/assets/home/precompro/precompro-3.jpg';
import precomproLogo from '@/assets/home/precompro/precompro-logo.png';

// Gigflow
import gigflow1 from '@/assets/home/gigflow/gigflow-1.jpg';
import gigflow2 from '@/assets/home/gigflow/gigflow-2.jpg';
import gigflowLogo from '@/assets/home/gigflow/gigflow-logo.svg';
import LogoSkills from '@/components/home/LogoSkills';
import { useState } from 'react';



const Home = () => {
  const [jobs] = useState([
    {
      title: 'Laika',
      logo: laikaLogo.src,
      description: 'Plataforma en línea que ofrece productos y servicios para animales domésticos...',
      location: 'Presentes en Colombia, México y Chile',
      siteLink: 'https://www.laika.com.co',
      images: [laika1, laika2, laika3],
    },
    {
      title: 'Precompro',
      logo: precomproLogo.src,
      description: 'Precompro.com es una plataforma en línea que permite a los usuarios hacer reservas...',
      location: 'Presentes en distintas partes del mundo, activamente en Colombia',
      siteLink: 'https://marea.precompro.com',
      images: [precompro1, precompro2, precompro3],
    },
    {
      title: 'Gigflow',
      logo: gigflowLogo.src,
      description: 'Gigflow es una empresa fundada en 2020 que desarrolla sistemas de automatización...',
      location: 'Plataforma fuera de servicio',
      siteLink: null, // Indica que el sitio está fuera de servicio
      images: [gigflow1, gigflow2],
    },
  ]);
  return (
    <Layout>
      <section className="section-about-me">
        <h2>Desarrollador FrontEnd</h2>
        <p className='px-0 md:px-24'>
          Con más de 4 años, me especializo en el diseño de interfaces, dedicado a crear experiencias visuales que son tanto amigables como atractivas. Utilizando herramientas como Zeppelin, Figma, etc...
          Me aseguro de que cada proyecto refleje con precisión la visión original.
          Trabajo con empresas de todos los sectores, y mi compromiso es transformar tus ideas en soluciones que resalten y conecten con los usuarios. 
          ¡Estoy emocionado de colaborar contigo en tu próximo proyecto!
        </p>
        <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gray-300 mx-auto">
          <img src="https://media.licdn.com/dms/image/v2/C4E03AQHpqGgOqtKdmw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1609887979476?e=1732147200&v=beta&t=PJXSTdbl1uaRRnCIxuaUcBpHhaZNhmxm6IrCv8d4cNk" alt="Avatar" className="w-full h-full object-cover" />
        </div>
      </section>
      <section className='section-skills'>
        <h2>Habilidades</h2>
        <div className='whitespace-nowrap'>
          <LogoSkills />
          <LogoSkills />
        </div>
      </section>
      <section className="section-my-job">
      <h2>Mi trabajo</h2>
      <div className="section-my-job__info">
        {jobs.map((job, index) => (
          <div
            className={`section-my-job__info__container ${
              index % 2 !== 0 ? 'flex-row-reverse' : ''
            }`}
            key={job.title}
          >
            <div className="section-my-job__info__container__jobs-preview">
              <Swiper
                pagination={{ dynamicBullets: true, clickable: true }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                zoom={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {job.images.map((image, i) => (
                  <SwiperSlide key={i}>
                    <img src={image.src} alt={`${job.title} image ${i + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="section-my-job__info__container__jobs-detail">
              <img src={job.logo} className="mx-auto" alt={`${job.title} logo`} width={100} />
              <p className="px-4 md:px-0">{job.description}</p>
              {job.location && <b className="px-4 md:px-0">{job.location}</b>}
              {job.siteLink ? (
                <button className="bg-[#42426f] w-fit p-3 rounded-2xl text-white">
                  <a target="_blank" href={job.siteLink} rel="noopener noreferrer">
                    Visita el sitio web
                  </a>
                </button>
              ) : (
                <button className="bg-[#505052] w-fit p-3 rounded-2xl text-white">
                  Sitio web fuera de servicio
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
      <section className='section-contact-me'>
        <div className='text-2xl gap-3 items-center inline-flex'>
          <FontAwesomeIcon icon={faCoffee} className="h-6 blinking-icon"/><span>Más proyectos? Contáctame!</span>
        </div>
        <div className='flex gap-4'>
          <Link className='inline-flex gap-3 items-center text-2xl' href="https://wa.me/+573154846388">
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link className='inline-flex gap-3 items-center text-2xl' href="mailto:maacevedog2010@gmail.com">
            <FontAwesomeIcon icon={faMailBulk} />
          </Link>
          <Link className='inline-flex gap-3 items-center text-2xl' href="https://www.linkedin.com/in/miguel-angel-acevedo-gantiva-b71070203/">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;