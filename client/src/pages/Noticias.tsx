import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, User } from "lucide-react";
import { Link } from "wouter";

const newsArticles = [
  {
    id: 1,
    author: "Gabriel Coelho",
    avatar: "/figmaAssets/kalifa1.png",
    date: "23 de setembro de 2025",
    title: "Acidente na Av. Assis Ribeiro deixa dois feridos",
    content:
      "Aqui no Ermelino o tio da minha prima acabou de matar um mendigo na rua, DE GRAÇA, ta cheio de polícia aqui e ele já foi levado, o rabecão já veio buscar o corpo. As imagens são fortes e sensíveis.",
    images: ["/figmaAssets/rectangle-99.png", "/figmaAssets/rectangle-102.png"],
    category: "Urgente"
  },
  {
    id: 2,
    author: "Beatriz Coelho",
    avatar: "/figmaAssets/ellipse-16.png",
    date: "12 de dezembro de 2025",
    title: "Festival de Cultura Nordestina no Parque do Carmo",
    content:
      "Neste fim de semana, o Parque do Carmo recebe o Festival de Cultura Nordestina, com muita música ao vivo, forró, artesanato e comidas típicas. O evento é gratuito e promete animar toda a família.",
    images: ["/figmaAssets/rectangle-100.png", "/figmaAssets/rectangle-44.png"],
    category: "Cultura"
  },
  {
    id: 3,
    author: "Carlos Santos",
    avatar: "/figmaAssets/ellipse-15.png",
    date: "15 de novembro de 2025",
    title: "Nova UBS inaugurada em Ermelino Matarazzo",
    content:
      "A nova unidade básica de saúde vai atender mais de 10 mil moradores da região, oferecendo serviços médicos e odontológicos completos para a comunidade da Zona Leste.",
    images: ["/figmaAssets/chatgpt-image-7-de-out--de-2025--10-24-10-1.png"],
    category: "Saúde"
  }
];

export const Noticias = (): JSX.Element => {
  return (
    <div className="bg-[#efede3] w-full min-h-screen flex flex-col">
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-[#4c2165] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col leading-tight">
                <h1 className="text-lg font-bold text-[#4c2165]">Conecta ZL</h1>
                <p className="text-xs text-gray-600">Notícias que nos unem.</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-bold text-[#4c2165] hover:text-[#6d2d8f] transition-colors">
                INÍCIO
              </Link>
              <Link href="/destaques" className="font-bold text-[#4c2165] hover:text-[#6d2d8f] transition-colors">
                DESTAQUES
              </Link>
              <Link href="/noticias" className="font-bold text-[#4c2165] hover:text-[#6d2d8f] transition-colors">
                NOTÍCIAS
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

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#4c2165] mb-2">
            Todas as Notícias
          </h2>
          <p className="text-gray-600 text-lg">
            Fique por dentro de tudo que acontece na Zona Leste
          </p>
        </div>

        <div className="space-y-6">
          {newsArticles.map((article) => (
            <Card
              key={article.id}
              className="bg-white rounded-xl shadow-md border-0 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4 mb-4">
                  <Avatar className="w-12 h-12 md:w-14 md:h-14">
                    <AvatarImage src={article.avatar} />
                    <AvatarFallback>{article.author[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-black text-base md:text-lg mb-0.5">
                          {article.author}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {article.date}
                        </p>
                      </div>
                      <span className="bg-[#4c2165] text-white px-3 py-1 rounded-lg font-semibold text-xs">
                        {article.category}
                      </span>
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-[#4c2165] mb-3">
                      {article.title}
                    </h4>

                    <p className="text-gray-900 text-sm md:text-base mb-4 leading-relaxed">
                      {article.content}
                    </p>

                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                      {article.images.map((image, index) => (
                        <img
                          key={index}
                          className="w-full h-40 md:h-52 rounded-lg object-cover"
                          alt={`Article image ${index + 1}`}
                          src={image}
                        />
                      ))}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-end gap-3 md:gap-4">
                        <div className="flex items-center gap-1">
                          <img
                            className="w-6 h-6 md:w-8 md:h-8 object-cover"
                            alt="Comments"
                            src="/figmaAssets/image-17.png"
                          />
                        </div>
                        <button>
                          <img
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt="Like"
                            src="/figmaAssets/heart-2.png"
                          />
                        </button>
                        <button>
                          <img
                            className="w-6 h-6 md:w-8 md:h-8"
                            alt="Share"
                            src="/figmaAssets/share-2.png"
                          />
                        </button>
                        <button>
                          <img
                            className="w-7 h-6 md:w-9 md:h-8"
                            alt="Bookmark"
                            src="/figmaAssets/bookmark-2.png"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
