import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bell, User } from "lucide-react";
import { Link } from "wouter";

const posts = [
  {
    id: 1,
    author: "Gabriel Coelho",
    avatar: "/figmaAssets/kalifa1.png",
    date: "23 de setembro de 2025",
    content:
      "Aqui no Ermelino o tio da minha prima acabou de matar um mendigo na rua, DE GRAÇA, ta cheio de polícia aqui e ele já foi levado, o rabecão já veio buscar o corpo. As imagens são fortes e sensíveis:",
    images: ["/figmaAssets/rectangle-99.png", "/figmaAssets/rectangle-102.png"],
    likes: 0,
    comments: 0,
  },
  {
    id: 2,
    author: "Beatriz Coelho",
    avatar: "/figmaAssets/ellipse-16.png",
    date: "12 de dezembro de 2025",
    content:
      "Neste fim de semana, o Parque do Carmo recebe o Festival de Cultura Nordestina, com muita música ao vivo, forró, artesanato e comidas típicas. O evento é gratuito e promete animar toda a família. É a chance de curtir um pedacinho do Nordeste sem sair da Zona Leste!",
    images: ["/figmaAssets/rectangle-100.png", "/figmaAssets/rectangle-44.png"],
    likes: 0,
    comments: 0,
  },
];

const alertData = {
  author: "Uscinivi Napi",
  avatar: "/figmaAssets/ellipse-15.png",
  date: "4 de outubro de 2025",
  content: `Nome: Rafael dos Santos Lima
Idade: 17 anos
Altura: 1,75m
Cor da pele: Branca
Cabelo: Loiro, curto
Vestuário no momento do desaparecimento: camiseta azul clara, calça jeans e tênis preto
🗣 Foi visto pela última vez por volta das 18h, saindo de casa na Rua Dr. José Vicente de Carvalho, dizendo que ia encontrar amigos na praça do bairro. Desde então, a família não teve mais contato.`,
  images: ["/figmaAssets/image-7.png", "/figmaAssets/image-8.png"],
  likes: 0,
  comments: 0,
};

export const Inicio = (): JSX.Element => {
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

      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero Banner"
          src="/figmaAssets/kit-1.png"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4c2165]/90 to-[#7d3ba3]/80" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#4c2165] font-bold text-3xl md:text-5xl">C</span>
              </div>
              <div className="flex flex-col leading-tight text-white">
                <h2 className="text-2xl md:text-4xl font-bold">Conecta ZL</h2>
                <p className="text-sm md:text-base">Notícias que nos unem.</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-2 border-white rounded-3xl p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Conectando a Comunidade com Fatos e Notícias do Bairro!
              </h3>
              <Button className="bg-white text-[#4c2165] hover:bg-gray-100 font-semibold px-6 py-6 text-lg rounded-xl">
                Leia Agora →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        <Card className="bg-white rounded-xl shadow-md border-0 mb-8">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-start gap-3 md:gap-4 mb-4">
              <Avatar className="w-12 h-12 md:w-14 md:h-14">
                <AvatarImage src="/figmaAssets/ellipse-3.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <div className="flex-1 bg-gray-100 rounded-lg px-4 py-3">
                <Input
                  placeholder="O que está acontecendo no seu bairro?"
                  className="border-0 bg-transparent text-gray-600 text-base md:text-lg p-0 h-auto focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center gap-2 md:gap-3">
                <img
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt="Picture"
                  src="/figmaAssets/picture.png"
                />
                <span className="text-gray-700 text-sm md:text-base">
                  Foto/Vídeo
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <Button className="bg-[#580e95] hover:bg-[#580e95]/90 rounded-lg h-12 px-6 w-fit">
              <span className="font-bold text-white text-base md:text-lg">
                Bairro
              </span>
              <img
                className="ml-2 w-3 h-5"
                alt="Dropdown"
                src="/figmaAssets/group-26.png"
              />
            </Button>
            <h2 className="text-2xl md:text-3xl font-light text-black">
              Principais Notícias
            </h2>
          </div>
          <div className="w-full md:w-96 h-0.5 bg-black mb-6" />
        </div>

        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-white rounded-xl shadow-md border-0 mb-8"
          >
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <Avatar className="w-12 h-12 md:w-14 md:h-14">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-semibold text-black text-base md:text-lg mb-0.5">
                    {post.author}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {post.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-900 text-sm md:text-base mb-4 leading-relaxed">
                {post.content}
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-40 md:h-52 rounded-lg object-cover"
                    alt={`Post image ${index + 1}`}
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
            </CardContent>
          </Card>
        ))}

        <section className="w-full bg-[#4c2165] rounded-xl p-6 md:p-12 mb-8 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div>
            <h2 className="font-extrabold text-white text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight">
              Acompanhe ao vivo os principais acontecimentos da Zona Leste
            </h2>
            <p className="font-light text-white text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
              No Conecta ZL, você encontra as notícias e fatos mais relevantes
              do seu bairro e da sua comunidade. Somos a voz da nossa gente, um
              portal feito para unir, informar e dar espaço às histórias que
              moldam o dia a dia. Chega de buscar longe: aqui, a notícia é
              nossa.
            </p>
            <Button className="bg-[#efede3] hover:bg-[#efede3]/90 rounded-lg h-12 px-6">
              <span className="font-semibold text-black text-base md:text-lg">
                Saiba Mais
              </span>
            </Button>
          </div>

          <div className="flex justify-center">
            <img
              className="w-full max-w-md h-auto rounded-2xl object-cover"
              alt="Live updates"
              src="/figmaAssets/chatgpt-image-7-de-out--de-2025--10-24-10-1.png"
            />
          </div>
        </section>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <h2 className="font-bold text-[#4c2165] text-2xl md:text-3xl lg:text-4xl">
              Na hora, no ponto e para você!
            </h2>
            <img
              className="w-24 h-24 md:w-32 md:h-32"
              alt="Icon"
              src="/figmaAssets/icon--3--3.png"
            />
          </div>

          <div className="w-full h-48 md:h-72 bg-gray-300 rounded-xl" />
        </section>

        <section>
          <h2 className="font-bold text-[#4c2165] text-2xl md:text-3xl lg:text-4xl mb-8">
            Alertas!
          </h2>

          <Card className="bg-white rounded-xl shadow-md border-0">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4 mb-4">
                <Avatar className="w-12 h-12 md:w-14 md:h-14">
                  <AvatarImage src={alertData.avatar} />
                  <AvatarFallback>{alertData.author[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="font-semibold text-black text-base md:text-lg mb-0.5">
                    {alertData.author}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {alertData.date}
                  </p>
                </div>
              </div>

              <p className="text-gray-900 text-sm md:text-base mb-4 leading-relaxed whitespace-pre-line">
                {alertData.content}
              </p>

              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                {alertData.images.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-44 md:h-60 rounded-lg object-cover"
                    alt={`Alert image ${index + 1}`}
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
            </CardContent>
          </Card>
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
