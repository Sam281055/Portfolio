import create from 'zustand';

const useStore = create((set) => {
  const savedLanguage = localStorage.getItem('language') || 'es';
  return {
    language: savedLanguage,
    setLanguage: (lang) => {
      set({ language: lang });
      localStorage.setItem('language', lang);
    },
  };
});

export default useStore;