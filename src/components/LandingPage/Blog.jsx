
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
import React, { useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const posts = [
  {
    id: 1,
    title: 'Cambios en las políticas energéticas',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Desafíos para la industria petrolera',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Nuevos descubrimientos:',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Uso de tecnología',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 5,
    title: 'Medidas ambientales',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

const Blog = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }) 
  const slidesToShow = isMobile ? 1 : 3

  const revealRef = useRef(null);
 
  useEffect(() => {
    ScrollReveal().reveal(revealRef.current, {
      duration: 3000,
      origin: 'right',
      distance: '400px'

    });
  }, []);

  return (
    <>
    <div ref={revealRef}>
      <div className="bg-white pt-32 pb-48 sm:pt-32 sm:pb-48">
        <div className="mx-auto max-w-7xl px-6 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className='text-[#DD102A] text-center text-sm '>Blog</h2>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Últimas noticias</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Descubre cómo la innovación y el compromiso ambiental están transformando la industria petrolera en la actualidad
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-1  ">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              
            >
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-md   px-8 pb-40 pt-6 sm:pt-6 lg:pt-0"
                >

                  <img src={post.imageUrl} alt="" className="absolute rounded-md inset-0 -z-10 h-full w-full object-cover mx-8 filtro brightness-50 " />

                  <div className="absolute inset-0 -z-10  " />
                  <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-white " />

                  <div className="flex  items-center gap-y-1 overflow-hidden text-sm leading-6 text-white ">
                    <time dateTime={post.datetime} className="mr-8 pl-6 pt-6">
                      {post.date}
                    </time>
                    
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white pl-6">
                    <a href={post.href}>
                      <span className="absolute " />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </Slider>
          </div>
        </div>
      </div>


    <div className="flex justify-center items-center">
      <div className="absolute w-[300px] h-32 md:w-[600px] md:h-32 lg:w-[600px] lg:h-32 xl:w-[600px]  xl:h-32 bg-white shadow-md  ">
      <h4 className="text-2xl font-semibold text-center pt-4">Tienes un proyecto en mente?</h4>
      <div className="flex justify-center pt-4">
        <Link to="/contacto">
        <button
            type="button"
            className="rounded-md bg-[#DD102A] py-2.5 px-8 text-sm font-semibold text-white shadow-sm duration-700 hover:scale-110 hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Contactanos
        </button>
        </Link>
        </div>
      </div>
    </div>

    </div>
    </>
  )
}

export default Blog