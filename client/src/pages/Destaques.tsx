import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, User } from "lucide-react";
import { Link } from "wouter";

const featuredNews = [
  {
    id: 1,
    title: "Acidente na Av. Assis Ribeiro deixa dois feridos e complica o trânsito na Zona Leste de SP",
    image: "/figmaAssets/rectangle-99.png",
    category: "Urgente",
    date: "23 de setembro de 2025",
    excerpt: "Um grave acidente de trânsito na Avenida Assis Ribeiro deixou duas pessoas feridas e causou grande congestionamento na região da Zona Leste de São Paulo nesta manhã."
  },
  {
    id: 2,
    title: "Parque do Carmo recebe Festival de Cultura Nordestina neste fim de semana",
    image: "/figmaAssets/rectangle-100.png",
    category: "Cultura",
    date: "12 de dezembro de 2025",
    excerpt: "Com muita música ao vivo, forró, artesanato e comidas típicas, o evento promete animar toda a família."
  },
  {
    id: 3,
    title: "Nova UBS é inaugurada no bairro de Ermelino Matarazzo",
    image: "/figmaAssets/rectangle-44.png",
    category: "Saúde",
    date: "15 de novembro de 2025",
    excerpt: "A nova unidade básica de saúde vai atender mais de 10 mil moradores da região, oferecendo serviços médicos e odontológicos."
  }
];

export const Destaques = (): JSX.Element => {
  return (
    <div className="bg-[#efede3] w-full min-h-screen flex flex-col">
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/">
              <a className="flex items-center gap-2 cursor-pointer">
                <div className="w-10 h-10 bg-[#4c2165] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">C</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <h1 className="text-lg font-bold text-[#4c2165]">Conecta ZL</h1>
                  <p className="text-xs text-gray-600">Notícias que nos unem.</p>
                </div>
              </a>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/">
                <a className="font-bold text-[#4c2165] hover:text-[#6d2d8f] transition-colors">
                  INÍCIO
                </a>
              </Link>
              <Link href="/destaques">
                <a className="font-bold text-[#4c2165] hover:text-[#6d2d8f] transition-colors">
                  DESTAQUES
                </a>
              </Link>
              <Link href="/noticias">
                <a className="font-bold text-[#4c2165] hover:text-[#6d2d8f] transition-colors">
                  NOTÍCIAS
                </a>
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bell className="w-6 h-6 text-[#4c2165]" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-8 h-8 bg-[#4c2165] rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4c2165] mb-2">
            Destaques da Semana
          </h2>
          <p className="text-gray-600 text-lg">
            As notícias mais importantes da Zona Leste
          </p>
        </div>

        <Card className="bg-white rounded-xl shadow-lg border-0 mb-12 overflow-hidden">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                {featuredNews[0].category}
              </span>
            </div>
            <img
              className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
              alt={featuredNews[0].title}
              src={featuredNews[0].image}
            />
          </div>
          <CardContent className="p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4c2165] mb-4 leading-tight">
              {featuredNews[0].title}
            </h1>
            <p className="text-gray-500 text-sm md:text-base mb-6">
              {featuredNews[0].date}
            </p>
            <p className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed">
              {featuredNews[0].excerpt}
            </p>
            <Button className="bg-[#4c2165] hover:bg-[#6d2d8f] text-white px-8 py-6 text-lg rounded-lg">
              Ler notícia completa
            </Button>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#4c2165] mb-6">
            Outros Destaques
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featuredNews.slice(1).map((news) => (
            <Card
              key={news.id}
              className="bg-white rounded-xl shadow-md border-0 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#4c2165] text-white px-3 py-1 rounded-lg font-semibold text-xs">
                    {news.category}
                  </span>
                </div>
                <img
                  className="w-full h-48 md:h-56 object-cover"
                  alt={news.title}
                  src={news.image}
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-[#4c2165] mb-3 leading-tight">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  {news.date}
                </p>
                <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                  {news.excerpt}
                </p>
                <Button className="bg-[#4c2165] hover:bg-[#6d2d8f] text-white px-6 py-3 rounded-lg w-full">
                  Leia mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="w-full bg-[#4c2165] rounded-xl p-6 md:p-12 my-12">
          <div className="text-center">
            <h2 className="font-extrabold text-white text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
              Receba as notícias mais importantes
            </h2>
            <p className="font-light text-white text-base md:text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Cadastre-se para receber alertas sobre as principais notícias da Zona Leste
            </p>
            <Button className="bg-[#efede3] hover:bg-[#efede3]/90 text-[#4c2165] px-8 py-6 text-lg rounded-lg font-semibold">
              Cadastrar agora
            </Button>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#4c2165] py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[#efede3]/70 font-semibold text-sm md:text-base text-center md:text-left">
              Política de Privacidade | Termos de Uso | Anuncie Conosco
            </p>

            <div className="flex items-center gap-4">
              <img className="w-8 h-8 md:w-10 md:h-10" alt="X" src="/figmaAssets/x.png" />
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                alt="YouTube"
                src="/figmaAssets/youtube.png"
              />
              <img
                className="w-8 h-8 md:w-10 md:h-10"
                alt="Instagram"
                src="/figmaAssets/instagram.png"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
