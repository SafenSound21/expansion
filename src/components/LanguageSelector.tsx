import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function LanguageSelector({ currentLang, onLanguageChange }: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-slate-300" />
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
    </div>
  );
}