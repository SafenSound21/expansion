import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';
import image from "../assets/images/image.png";

interface HeaderProps {
  currentLang: string;
}

export function Header({ currentLang }: HeaderProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const t = translations[currentLang as keyof typeof translations];

  const onClickHandler = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
      menuRef.current.classList.toggle("flex");
    }
  };

  return (
    <header className="fixed w-full bg-slate-800/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between transition-all">
        <Link to={'/'} className="flex items-center gap-2">
          <img src={image} alt="expansion digital logo" width="200px" />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-end gap-4 text-lg">
          <Link to="/exitos" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            Éxito
          </Link>

          <Link to="/contact" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            Contacto
          </Link>

          <div className="relative group">
            <button className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors flex items-center">
              &#9776;
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-slate-700 rounded-lg shadow-lg hidden group-hover:block z-50">
              <Link to="/exitos" className="block px-4 py-2 text-white hover:bg-slate-600">Éxito</Link>
              <Link to="/contact" className="block px-4 py-2 text-white hover:bg-slate-600">Contacto</Link>
              <Link to="/about" className="block px-4 py-2 text-white hover:bg-slate-600">Sobre nosotros</Link>
              <Link to="/blog" className="block px-4 py-2 text-white hover:bg-slate-600">Blog</Link>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={onClickHandler}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div ref={menuRef} className="hidden fixed h-screen inset-0 w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 z-[888] flex-col items-center overflow-x-auto gradient px-6 transition duration-300 ease-in-out">
          <aside className="flex items-center justify-between w-full py-4">
            <span className="text-xl font-semibold text-white">☰</span>
            <button onClick={onClickHandler} className="focus:outline-none">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </aside>
          <nav className='flex w-full flex-col gap-5'>
            <ul>
              <li className='border-t-[1px] w-full py-6'>
                <Link to="/" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  {t.nav.home}
                </Link>
              </li>
              <li className='border-t-[1px] w-full py-6'>
                <Link to="/exitos" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  Éxito
                </Link>
              </li>
              <li className='border-t-[1px] w-full py-6'>
                <Link to="/contact" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  Contacto
                </Link>
              </li>
              <li className='border-t-[1px] w-full py-6'>
                <Link to="/about" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  {t.nav.about}
                </Link>
              </li>
              <li className='border-b-[1px] w-full py-6'>
                <Link to="/blog" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}