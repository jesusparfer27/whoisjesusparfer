export const navLinks = [
    {
      id: 1,
      name: 'Inicio',
      href: '#inicio',
    },
    {
      id: 2,
      name: 'Sobre mi',
      href: '#sobreMi',
    },
    {
      id: 3,
      name: 'Trabajos',
      href: '#trabajos',
    },
    {
      id: 4,
      name: 'Contacto',
      href: '#contacto',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Jundium - Proyecto Final',
      desc: 'Plataforma de comercio en línea con un panel de administración completo para la gestión de productos, usuarios y pedidos.',
      subdesc:
        'Desarrollado con el stack MERN sin librerías externas. Implementa un sistema de registro y autenticación de usuarios, además de funcionalidades como wishlist, carrito de compras y administración de productos con variantes.',
      href: 'https://jundium-shopping-software-front.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Mongo DB',
          path: 'assets/mongodb.png',
        },
        {
          id: 3,
          name: 'Express Js',
          path: '/assets/expressjs.png',
        },
        {
          id: 4,
          name: 'Node Js',
          path: '/assets/nodejs.png',
        },
      ],
    },
    {
      title: 'iPhone Landing Page - Animaciones Interactivas',
      desc: 'Un proyecto frontend que replica la experiencia UX/UI de la landing page del iPhone 15 con animaciones avanzadas.',
      subdesc:
        'Desarrollado con Three.js, GSAP y Tailwind sobre React, este proyecto ha sido creado siguiendo un tutorial para profundizar mis conocimientos en estas tecnologías y perfeccionar mis habilidades en animaciones web.',
      href: 'https://iphone-threejs-mu.vercel.app/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Three.js',
          path: 'assets/three.png',
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          path: '/assets/tailwindcss.png',
        }
      ],
    },
    {
      title: 'Acortador de URLs - Actividad',
      desc: 'Proyecto FullStack desarrollado con Next.js, Tailwind.css y TypeScript',
      subdesc:
        'Este codigo es de una clase de youtube para aprender tecnologías como Next.js y TypeScript y mejorar mis habilidades con TailwindCSS, Aqui aprendo cuales son las logicas de unn acrotador de URLs',
      href: 'https://vercel.com/jesusparfers-projects/entornos-vercel-react',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TypeScript',
          path: 'assets/typescript.png',
        },
        {
          id: 3,
          name: 'Tailwind CSS',
          path: '/assets/tailwindcss.png',
        },
        {
          id: 4,
          name: 'Next.js',
          path: '/assets/next.png',
        },
      ],
    },
    {
      title: 'Simulación de Tienda - Actividad',
      desc: 'Aplicación básica en React para simular una tienda en línea mediante consumo de APIs externas.',
      subdesc:
        'Se implementan promesas, manejo de errores con try & catch y se crean componentes dinámicos para visualizar los productos obtenidos de distintas fuentes de datos.',
      href: 'https://promesas-vercel-react.vercel.app/',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Mongo DB',
          path: 'assets/mongodb.png',
        },
        {
          id: 3,
          name: 'Express Js',
          path: '/assets/expressjs.png',
        },
        {
          id: 4,
          name: 'Node Js',
          path: '/assets/nodejs.png',
        },
      ],
    }
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Desarrollador FullStack Junior',
      pos: 'MERN Developer',
      duration: '2024 - Presente',
      title: "Actualmente reforzando mis habilidades en desarrollo FullStack en CEI Valencia, con un enfoque en la optimización de código, arquitectura de software y mejores prácticas en React, Node.js, Express y MongoDB.",
      icon: '/assets/cei-valencia.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Desarrollador FullStack Trainee',
      pos: 'MERN Developer',
      duration: 'Enero 2024 - Junio 2024',
      title: "Adquirí experiencia práctica en el desarrollo de aplicaciones web utilizando React, Node.js, Express y bases de datos NoSQL. Implementé funcionalidades como autenticación, CRUD y consumo de APIs.",
      icon: '/assets/cei-valencia.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Diseñador y Desarrollador Web',
      pos: 'Trainee Web Developer',
      duration: '2023 - 2024',
      title: "Inicié mi camino en el desarrollo web de manera autodidacta y consolidé mis conocimientos con formación en CEI Valencia. Desarrollé interfaces responsivas y optimizadas con HTML, CSS, JavaScript y frameworks modernos.",
      icon: '/assets/cei-valencia.png',
      animation: 'salute',
    },
  ];
  