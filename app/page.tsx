"use client";
import '@/styles/main.scss';
import '@/styles/home/__section.scss';
import Layout from '@/components/Layout';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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



const Home = () => {
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
      </section>
      <section className='section-skills'>
        <h2>Habilidades</h2>
        <div className='whitespace-nowrap'>
          <LogoSkills />
          <LogoSkills />
        </div>
      </section>
      <section className='section-my-job'>
        <h2>Mi trabajo</h2>
        <div className='section-my-job__info'>
          <div className='section-my-job__info__container'>
            <div className='section-my-job__info__container__jobs-preview'>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false
                }}
                zoom={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><img src={laika1.src} alt="" /></SwiperSlide>
                <SwiperSlide><img src={laika2.src} alt="" /></SwiperSlide>
                <SwiperSlide><img src={laika3.src} alt="" /></SwiperSlide>
              </Swiper>
            </div>
            <div className='section-my-job__info__container__jobs-detail'>
              <img src={laikaLogo.src} className="mx-auto" alt="" width={100} />
              <p className="px-4 md:px-0">Plataforma en línea que ofrece productos y servicios para animales domésticos, como alimentos, juguetes, medicamentos, accesorios, y productos de higiene</p>
              <b className="px-4 md:px-0">Presentes en Colombia, México y Chile</b>
              <button className="bg-[#42426f] w-fit p-3 rounded-2xl text-white"><a target={'_blank'} href="https://www.laika.com.co">Visita el sitio web</a></button>
            </div>
          </div>
          <div className='section-my-job__info__container flex-row-reverse'>
            <div className='section-my-job__info__container__jobs-preview'>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false
                }}
                zoom={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><img src={precompro2.src} alt="" /></SwiperSlide>
                <SwiperSlide><img src={precompro1.src} alt="" /></SwiperSlide>
                <SwiperSlide><img src={precompro3.src} alt="" /></SwiperSlide>
              </Swiper>
            </div>
            <div className='section-my-job__info__container__jobs-detail'>
              <div className='bg-black p-4 rounded-lg'>
                <img src={precomproLogo.src} className="mx-auto -mb-2" alt="" width={200} />
              </div>
              <p className="px-4 md:px-0">Precompro.com es una plataforma en línea que permite a los usuarios hacer reservas y realizar precompras en diversos restaurantes. A través de esta plataforma, los clientes pueden pagar anticipadamente por productos o servicios antes de que estén disponibles, asegurando su compra.</p>
              <b className="px-4 md:px-0">Presentes en distintas partes del mundo, activamente en Colombia</b>
              <button className="bg-[#42426f] w-fit p-3 rounded-2xl text-white"><a target={'_blank'} href="https://marea.precompro.com">Visita el sitio web</a></button>
            </div>
          </div>
          <div className='section-my-job__info__container'>
            <div className='section-my-job__info__container__jobs-preview'>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                  clickable: true
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false
                }}
                zoom={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide><img src={gigflow1.src} alt="" /></SwiperSlide>
                <SwiperSlide><img src={gigflow2.src} alt="" /></SwiperSlide>
              </Swiper>
            </div>
            <div className='section-my-job__info__container__jobs-detail'>
              <img src={gigflowLogo.src} className="mx-auto" alt="" width={100} />
              <p className="px-4 md:px-0">Gigflow es una empresa fundada en 2020 que desarrolla sistemas de automatización inteligente diseñados para freelancers creativos. Su tecnología permite integrar clientes, proyectos y procesos, utilizando bots inteligentes para encontrar, gestionar y automatizar el onboarding de clientes, lo que facilita a los freelancers la administración de su negocio y la aceleración de su crecimiento.</p>
              <b className="px-4 md:px-0"></b>
              <button className="bg-[#505052] w-fit p-3 rounded-2xl text-white">Sitio web fuera de servicio</button>
            </div>
          </div>
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
        </div>
      </section>
    </Layout>
  );
};

export default Home;