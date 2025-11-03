import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

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
    <div className="bg-[#efede3] w-full min-h-screen">
      <header className="w-full h-[232px] bg-[#efede3] border-b border-[#b7b2b2] flex items-center justify-between px-7 relative">
        <img
          className="w-[395px] h-[172px]"
          alt="Conecta ZL Logo"
          src="/figmaAssets/icon--3--3-1.png"
        />

        <nav className="flex items-center gap-[93px]">
          <button className="[font-family:'Almarai',Helvetica] font-bold text-[#4c2165] text-[40px]">
            INÍCIO
          </button>
          <button className="[font-family:'Almarai',Helvetica] font-bold text-[#4c2165] text-[40px]">
            DESTAQUES
          </button>
          <button className="[font-family:'Almarai',Helvetica] font-bold text-[#4c2165] text-[40px]">
            NOTÍCIAS
          </button>
        </nav>

        <div className="flex items-center gap-[60px]">
          <div className="w-[82px] h-[87px] bg-[url(/figmaAssets/alarm.png)] bg-[100%_100%]" />

          <div className="w-[87px] h-[87px] bg-[#d9d9d9] rounded-[43.5px] relative">
            <div className="absolute top-[3px] left-1 w-[79px] h-[79px] bg-[#4c2165] rounded-[39.55px]" />
            <img
              className="absolute top-[11px] left-3 w-[62px] h-[66px]"
              alt="User"
              src="/figmaAssets/user.png"
            />
          </div>
        </div>
      </header>

      <section className="w-full h-[759px] relative">
        <img
          className="w-full h-full object-cover"
          alt="Hero Banner"
          src="/figmaAssets/kit-1.png"
        />
      </section>

      <main className="max-w-[1728px] mx-auto px-[109px] py-16">
        <Card className="bg-[#f1f1ed] rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-6 mb-6">
              <Avatar className="w-[88px] h-[83px]">
                <AvatarImage src="/figmaAssets/ellipse-3.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <div className="flex-1 bg-[#d9d9d9] rounded-[10px] shadow-[0px_4px_4px_#00000040] px-8 py-6">
                <Input
                  placeholder="O que está acontecendo no seu bairro?"
                  className="border-0 bg-transparent opacity-80 [font-family:'Almarai',Helvetica] font-normal text-[#767676] text-[39.5px] p-0 h-auto focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="border-t-[3px] border-black pt-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[70px] h-[74px]"
                  alt="Picture"
                  src="/figmaAssets/picture.png"
                />
                <span className="[font-family:'Almarai',Helvetica] font-normal text-black text-[39.5px]">
                  Foto/Vídeo
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12">
          <div className="flex items-center gap-6 mb-8">
            <Button className="bg-[#580e95] hover:bg-[#580e95]/90 rounded-[14px] h-[71px] px-8">
              <span className="[font-family:'Almarai',Helvetica] font-bold text-white text-[40px]">
                Bairro
              </span>
              <img
                className="ml-2 w-[17px] h-8"
                alt="Dropdown"
                src="/figmaAssets/group-26.png"
              />
            </Button>
            <h2 className="[font-family:'Almarai',Helvetica] font-light text-black text-5xl">
              Principais Notícias
            </h2>
          </div>
          <div className="w-[827px] h-0.5 bg-black mb-8" />
        </div>

        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-[#f1f1ed] rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0 mb-12"
          >
            <CardContent className="p-12">
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="w-[88px] h-[88px]">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="[font-family:'Almarai',Helvetica] font-normal text-black text-[31.9px] mb-1">
                    {post.author}
                  </h3>
                  <p className="[font-family:'Almarai',Helvetica] font-normal text-[#9e9e9e] text-[26.2px]">
                    {post.date}
                  </p>
                </div>
              </div>

              <p className="[font-family:'Almarai',Helvetica] font-normal text-black text-[38.6px] mb-8 leading-normal">
                {post.content}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                {post.images.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-[281px] rounded-[23px] object-cover"
                    alt={`Post image ${index + 1}`}
                    src={image}
                  />
                ))}
              </div>

              <div className="border-t-[3px] border-black pt-6">
                <div className="flex items-center justify-end gap-6">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[46px] h-[46px] object-cover"
                      alt="Comments"
                      src="/figmaAssets/image-17.png"
                    />
                  </div>
                  <button>
                    <img
                      className="w-[61px] h-[61px]"
                      alt="Like"
                      src="/figmaAssets/heart-2.png"
                    />
                  </button>
                  <button>
                    <img
                      className="w-[61px] h-[61px]"
                      alt="Share"
                      src="/figmaAssets/share-2.png"
                    />
                  </button>
                  <button>
                    <img
                      className="w-[72px] h-[61px]"
                      alt="Bookmark"
                      src="/figmaAssets/bookmark-2.png"
                    />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <section className="w-full bg-[#4c2165] rounded-[20px] p-16 mb-16 grid grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="[font-family:'Almarai',Helvetica] font-extrabold text-white text-[64px] mb-8 leading-normal">
              Acompanhe ao vivo os principais acontecimentos da Zona Leste
            </h2>
            <p className="[font-family:'Almarai',Helvetica] font-light text-white text-[26px] mb-8 leading-normal">
              No Conecta ZL, você encontra as notícias e fatos mais relevantes
              do seu bairro e da sua comunidade. Somos a voz da nossa gente, um
              portal feito para unir, informar e dar espaço às histórias que
              moldam o dia a dia. Chega de buscar longe: aqui, a notícia é
              nossa.
            </p>
            <Button className="bg-[#efede3] hover:bg-[#efede3]/90 rounded-lg h-14 px-8">
              <span className="[font-family:'Almarai',Helvetica] font-light text-black text-[32px]">
                Saiba Mais
              </span>
            </Button>
          </div>

          <div>
            <img
              className="w-[664px] h-[664px] rounded-[29px] object-cover"
              alt="Live updates"
              src="/figmaAssets/chatgpt-image-7-de-out--de-2025--10-24-10-1.png"
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-12">
            <h2 className="[font-family:'Almarai',Helvetica] font-bold text-[#4c2165] text-[64px]">
              Na hora, no ponto e para você!
            </h2>
            <img
              className="w-[278px] h-72"
              alt="Icon"
              src="/figmaAssets/icon--3--3.png"
            />
          </div>

          <div className="w-full h-[383px] bg-[#d9d9d9] rounded-[25px]" />
        </section>

        <section>
          <h2 className="[font-family:'Almarai',Helvetica] font-bold text-[#4c2165] text-[64px] mb-12">
            Alertas!
          </h2>

          <Card className="bg-[#f1f1ed] rounded-[20px] shadow-[0px_4px_4px_#00000040] border-0">
            <CardContent className="p-12">
              <div className="flex items-start gap-6 mb-6">
                <Avatar className="w-[88px] h-[88px]">
                  <AvatarImage src={alertData.avatar} />
                  <AvatarFallback>{alertData.author[0]}</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="[font-family:'Almarai',Helvetica] font-normal text-black text-[31.9px] mb-1">
                    {alertData.author}
                  </h3>
                  <p className="[font-family:'Almarai',Helvetica] font-normal text-[#9e9e9e] text-[26.2px]">
                    {alertData.date}
                  </p>
                </div>
              </div>

              <p className="[font-family:'Almarai',Helvetica] font-normal text-black text-[38.6px] mb-8 leading-normal whitespace-pre-line">
                {alertData.content}
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                {alertData.images.map((image, index) => (
                  <img
                    key={index}
                    className="w-full h-[328px] rounded-[23px] object-cover"
                    alt={`Alert image ${index + 1}`}
                    src={image}
                  />
                ))}
              </div>

              <div className="border-t-[3px] border-black pt-6">
                <div className="flex items-center justify-end gap-6">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[46px] h-[46px] object-cover"
                      alt="Comments"
                      src="/figmaAssets/image-17.png"
                    />
                  </div>
                  <button>
                    <img
                      className="w-[61px] h-[61px]"
                      alt="Like"
                      src="/figmaAssets/heart-2.png"
                    />
                  </button>
                  <button>
                    <img
                      className="w-[61px] h-[61px]"
                      alt="Share"
                      src="/figmaAssets/share-2.png"
                    />
                  </button>
                  <button>
                    <img
                      className="w-[72px] h-[61px]"
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

      <footer className="w-full h-[182px] bg-[#4c2165] flex items-center justify-between px-[142px]">
        <p className="opacity-70 [font-family:'Almarai',Helvetica] font-bold text-[#efede3] text-[32px]">
          Política de Privacidade&nbsp;&nbsp;&nbsp;&nbsp;
          |&nbsp;&nbsp;&nbsp;&nbsp; Termos de Uso&nbsp;&nbsp;&nbsp;&nbsp;
          |&nbsp;&nbsp;&nbsp;&nbsp; Anuncie Conosco
        </p>

        <div className="flex items-center gap-6">
          <img className="w-[60px] h-[60px]" alt="X" src="/figmaAssets/x.png" />
          <img
            className="w-[60px] h-[60px]"
            alt="YouTube"
            src="/figmaAssets/youtube.png"
          />
          <img
            className="w-[60px] h-[60px]"
            alt="Instagram"
            src="/figmaAssets/instagram.png"
          />
        </div>
      </footer>
    </div>
  );
};
