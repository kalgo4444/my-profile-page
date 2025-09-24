export const PROJECTS_CARDS: IProjectCart[] = [
  {
    id: 1,
    title: {
      uz: "Kino Web Dasturi",
      en: "Movie App",
    },
    description: {
      uz: "Foydalanuvchilarga ommaviy API yordamida filmlarni qidirish imkonini beruvchi oddiy React ilovasi. Ta'sirchan dizayn, toza UI komponentlari va qorong'u rejim bilan yaratilgan.",
      en: "A simple React application that allows users to search for movies using public API. Built with responsive design, clean UI components and with dark mode.",
    },
    github: "https://github.com/kalgo4444/movie-app",
    demo: "https://movie-app-kalgo4444.vercel.app/",
  },
  {
    id: 2,
    title: {
      uz: "Online Dokon",
      en: "Mini E-Commerce Online App",
    },
    description: {
      uz: "Ushbu loyiha foydalanuvchilar mahsulotlarni ko'rib chiqishlari va ularni o'z xohishlari ro'yxatiga qo'shishlari mumkin bo'lgan kichik hajmdagi elektron tijorat sayti. Har doim eng yaxshi narxlarni taklif qiladi",
      en: "This project is a small-scale e-commerce site where users can browse products and add them to their wishlist. Always offering the best prices",
    },
    github: "https://github.com/kalgo4444/mini-ecommerce-production",
    demo: "https://mini-ecommerce-production.vercel.app/",
  },
  {
    id: 3,
    title: {
      uz: "Furniro Online Dokon",
      en: "Furniro Online Shop App",
    },
    description: {
      uz: "Dizayn, ehtimol, dinamik, sezgir mahsulot kartalari, hover holatlari, modal yoki Tafsilotlarni ko'rish triggerlari. React va Tailwind CSS yordamida qurish.",
      en: "The desing likely includes dynamic, responsive product cards, hover states, modal ordetail-view triggers. Building with React and Tailwind CSS.",
    },
    github: "https://github.com/kalgo4444/damas-team-pr",
    demo: "https://furniro-team-pr.vercel.app/",
  },
  {
    id: 4,
    title: {
      uz: "KalgoDev online maqolalar",
      en: "KalgoDev Community App",
    },
    description: {
      uz: "IT va texnologiya haqidagi yangiliklarga ega oddiy veb-sayt. Ushbu loyiha dasturchilarga sohadagi o'zgarishlardan xabardor bo'lish va o'z hissasini qo'shish imkonini beradi. Kirish va ro'yxatdan o'tish bilan.",
      en: "Simple web site with news about IT and Technology. This project allows programmers to stay informed about developments in the field and contribute. With Login and Register.",
    },
    github: "https://github.com/kalgo4444/kalgo-dev",
    demo: "https://furniro-team-pr.vercel.app/",
  },
];

export interface ILocalizedText {
  uz: string;
  en: string;
}

export interface IProjectCart {
  id: number;
  title: ILocalizedText;
  description: ILocalizedText;
  github: string;
  demo: string;
}
