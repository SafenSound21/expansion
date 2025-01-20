import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';
import image from "../assets/images/image.png";

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const t = translations[currentLang as keyof typeof translations];

  const onClickHandler = () => {
    if (menuRef.current) {
      menuRef.current.classList.toggle("hidden");
      menuRef.current.classList.toggle("flex");
    }
  };

  return (
    <header className="fixed w-full bg-slate-800/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm" >
      <div className="max-w-7xl mx-auto flex items-center justify-between transition-all">      
        <Link to={'/'} className="flex items-center gap-2">
          <img src={image} alt="expansion digital logo" width="200px" />
        </Link>

        <div className="md:hidden">
          <button onClick={onClickHandler}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        <div ref={menuRef} className={"hidden fixed h-screen inset-0 w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 z-[888] flex-col items-center overflow-x-auto gradient px-6 transition duration-300 ease-in-out"}>
          <aside className="flex items-center justify-between w-full py-4">
            <span className="text-xl font-semibold text-white">Menú</span>
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
                <Link to="/about" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  {t.nav.about}
                </Link>
              </li>
            
              <li className='border-t-[1px] w-full py-6'>
                <Link to="/blog" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  {t.nav.blog}
                </Link>
              </li>
            
              <li className='border-y-[1px] w-full py-6'>
                <Link to="/contact" className="text-white rounded-lg hover:text-indigo-400 transition-colors text-md" onClick={onClickHandler}>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end gap-4">
          <select
            value={currentLang}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer text-slate-300"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>

          <Link to="/about" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            {t.nav.about}
          </Link>

          <Link to="/blog" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            {t.nav.blog}
          </Link>

          <Link to="/contact" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
