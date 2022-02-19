import React from "react";
import logo from "../img/logo192.png";

const navbar = () => {
  return (
    <>
      {/* <div className="container navbarStyle mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='#'><img width='40px' src={logo} alt='Logo'/></a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href='#' className="mr-5 hover:text-gray-900 linksNav"> Inicio </a>
          <a href='#' className="mr-5 hover:text-gray-900 linksNav">Productos</a>
          <a href='#' className="mr-5 hover:text-gray-900 linksNav">Categorias</a>
          <a href='#' className="mr-5 hover:text-gray-900 linksNav">Mi cuenta</a>
        </nav>
      </div> */}
      <header class="text-gray-400 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#" class="imgLogo flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img width='40px' src={logo} alt='Logo' />
            <span class="ml-3 text-xl">Mercader</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#" class="mr-5 linksNav">Inicio</a>
            <a href="#" class="mr-5 linksNav">Productos</a>
            <a href="#" class="mr-5 linksNav">Categorias</a>
            <a href="#" class="mr-5 linksNav">Contactanos</a>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Login<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default navbar;
