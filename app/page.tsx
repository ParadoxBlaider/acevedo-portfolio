"use client";
import Section from '@/components/home/Section';
import '@/styles/main.scss';
import Layout from '@/components/Layout';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import colFlag from '@/assets/col-flag.png';
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



const Home = () => {
  return (
    <Layout>
      <Section
        customClassName="pb-10 px-10 lg:px-44 section-about-me"
        title='Desarrollador FrontEnd'
        content='
          Con más de 4 años, me especializo en el diseño de interfaces, dedicado a crear experiencias visuales que son tanto amigables como atractivas. Utilizando herramientas como Zeppelin, Figma, etc...
          Me aseguro de que cada proyecto refleje con precisión la visión original.
          Trabajo con empresas de todos los sectores, y mi compromiso es transformar tus ideas en soluciones que resalten y conecten con los usuarios. 
          ¡Estoy emocionado de colaborar contigo en tu próximo proyecto!.
        '
      />
      <div className='bg-[#172230] overflow-hidden'>
        <h2 className='text-white text-center my-5 pb-3 text-4xl italic border-[#505085] border-b-4 w-fit mx-auto'>Habilidades</h2>
        <div className='flex-wrap flex items-center justify-around animation-infinite-axis-x'>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <svg className="" width="80" height="80" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
            <h3 className="">ReactJS</h3>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <svg aria-label="Next.js logotype" height="30" role="img" viewBox="0 0 394 79"><path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z" fill="#fff"></path><path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z" fill="#fff"></path><path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z" fill="#fff"></path><path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z" fill="#fff"></path><path clip-rule="evenodd" d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z" fill="#fff" fill-rule="evenodd"></path><path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z" fill="#fff"></path><path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z" fill="#fff"></path><path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z" fill="#fff"></path></svg>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <svg  viewBox="0 0 128 128" width="80" height="80" data-v-62c2168e=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-62c2168e=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-62c2168e=""></path></svg>
            <h3 className="">VueJS</h3>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <img width={80} height={80} src="https://laravel.com/img/logomark.min.svg" alt="" />
            <h3 className="">Laravel</h3>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <div className='w-[80px] h-[80px] bg-white flex items-center p-2 rounded-2xl'>
              <img width={80} height={80} src="https://www.php.net/images/logos/php-logo.svg" alt="" />
            </div>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <svg viewBox="0 0 248 31" className="text-slate-900 dark:text-white w-auto h-8"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <img width={100} height={100} src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" />
            <h3 className="">Bootstrap</h3>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <img width={80} height={80} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" />
            <h3 className="">Ant Design</h3>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" fill="#0073E6" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z"></path></svg>
            <h3 className="">Material UI</h3>
          </div>
          <div className='text-white text-center grid gap-3 justify-center p-5'>
            <img width={160} height={160} src="https://buefy.org/static/img/buefy.1d65c18.png" alt="" />
          </div>
        </div>
      </div>
      <div className='pb-10 md:px-10 lg:px-44'>
        <h2 className='text-center my-5 pb-3 text-4xl italic border-[#505085] border-b-4 w-fit mx-auto'>Mi trabajo</h2>
        <div className=''>
          <div className='md:flex gap-8 w-full mb-10'>
            <div className='mb-10 md:mb-0 md:w-2/4 content-center'>
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
            <div className='md:w-2/4 text-center grid gap-5 content-center justify-items-center'>
              <img src={laikaLogo.src} className="mx-auto" alt="" width={100} />
              <p className="px-4 md:px-0">Plataforma en línea que ofrece productos y servicios para animales domésticos, como alimentos, juguetes, medicamentos, accesorios, y productos de higiene</p>
              <b className="px-4 md:px-0">Presentes en Colombia, México y Chile</b>
              <button className="bg-[#42426f] w-fit p-3 rounded-2xl text-white"><a target={'_blank'} href="https://www.laika.com.co">Visita el sitio web</a></button>
            </div>
          </div>
          <div className='md:flex gap-8 w-full flex-row-reverse mb-10'>
            <div className='mb-10 md:mb-0 md:w-2/4 content-center'>
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
            <div className='md:w-2/4 text-center grid gap-5 content-center justify-items-center'>
              <div className='bg-black p-4 rounded-lg'>
                <img src={precomproLogo.src} className="mx-auto -mb-2" alt="" width={200} />
              </div>
              <p className="px-4 md:px-0">Precompro.com es una plataforma en línea que permite a los usuarios hacer reservas y realizar precompras en diversos restaurantes. A través de esta plataforma, los clientes pueden pagar anticipadamente por productos o servicios antes de que estén disponibles, asegurando su compra.</p>
              <b className="px-4 md:px-0">Presentes en distintas partes del mundo, activamente en Colombia</b>
              <button className="bg-[#42426f] w-fit p-3 rounded-2xl text-white"><a target={'_blank'} href="https://marea.precompro.com">Visita el sitio web</a></button>
            </div>
          </div>
          <div className='md:flex gap-8 w-full'>
            <div className='mb-10 md:mb-0 md:w-2/4 content-center'>
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
            <div className='md:w-2/4 text-center grid gap-5 content-center justify-items-center'>
              <img src={gigflowLogo.src} className="mx-auto" alt="" width={100} />
              <p className="px-4 md:px-0">Gigflow es una empresa fundada en 2020 que desarrolla sistemas de automatización inteligente diseñados para freelancers creativos. Su tecnología permite integrar clientes, proyectos y procesos, utilizando bots inteligentes para encontrar, gestionar y automatizar el onboarding de clientes, lo que facilita a los freelancers la administración de su negocio y la aceleración de su crecimiento.</p>
              <b className="px-4 md:px-0"></b>
              <button className="bg-[#505052] w-fit p-3 rounded-2xl text-white">Sitio web fuera de servicio</button>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#172230] overflow-hidden text-center text-white py-8'>
        <Link className='inline-flex gap-3 items-center text-2xl' href="https://wa.me/+573154846388"><FontAwesomeIcon icon={faCoffee} className="h-7 blinking-icon"/><span>Más proyectos? Contáctame!</span></Link>
      </div>
    </Layout>
  );
};

export default Home;