from django.shortcuts import render
from .models import Post, NewsArticle, Alert

def inicio(request):
    posts = Post.objects.all()[:2]
    alert = Alert.objects.first()
    
    if not posts:
        posts = [
            {
                'id': 1,
                'author': 'Gabriel Coelho',
                'avatar': '/static/figmaAssets/kalifa1.png',
                'date': '23 de setembro de 2025',
                'content': 'Aqui no Ermelino o tio da minha prima acabou de matar um mendigo na rua, DE GRAÇA, ta cheio de polícia aqui e ele já foi levado, o rabecão já veio buscar o corpo. As imagens são fortes e sensíveis:',
                'images': ['/static/figmaAssets/rectangle-99.png', '/static/figmaAssets/rectangle-102.png'],
                'likes': 0,
                'comments': 0
            },
            {
                'id': 2,
                'author': 'Beatriz Coelho',
                'avatar': '/static/figmaAssets/ellipse-16.png',
                'date': '12 de dezembro de 2025',
                'content': 'Neste fim de semana, o Parque do Carmo recebe o Festival de Cultura Nordestina, com muita música ao vivo, forró, artesanato e comidas típicas. O evento é gratuito e promete animar toda a família. É a chance de curtir um pedacinho do Nordeste sem sair da Zona Leste!',
                'images': ['/static/figmaAssets/rectangle-100.png', '/static/figmaAssets/rectangle-44.png'],
                'likes': 0,
                'comments': 0
            }
        ]
    
    if not alert:
        alert = {
            'author': 'Uscinivi Napi',
            'avatar': '/static/figmaAssets/ellipse-15.png',
            'date': '4 de outubro de 2025',
            'content': '''Nome: Rafael dos Santos Lima
Idade: 17 anos
Altura: 1,75m
Cor da pele: Branca
Cabelo: Loiro, curto
Vestuário no momento do desaparecimento: camiseta azul clara, calça jeans e tênis preto
🗣 Foi visto pela última vez por volta das 18h, saindo de casa na Rua Dr. José Vicente de Carvalho, dizendo que ia encontrar amigos na praça do bairro. Desde então, a família não teve mais contato.''',
            'images': ['/static/figmaAssets/image-7.png', '/static/figmaAssets/image-8.png'],
            'likes': 0,
            'comments': 0
        }
    
    context = {
        'posts': posts,
        'alert': alert,
    }
    return render(request, 'news/inicio.html', context)


def destaques(request):
    featured_news = NewsArticle.objects.filter(is_featured=True).first()
    other_news = NewsArticle.objects.filter(is_featured=False)[:2]
    
    if not featured_news:
        featured_news = {
            'id': 1,
            'title': 'Acidente na Av. Assis Ribeiro deixa dois feridos e complica o trânsito na Zona Leste de SP',
            'image': '/static/figmaAssets/rectangle-99.png',
            'category': 'Urgente',
            'date': '23 de setembro de 2025',
            'excerpt': 'Um grave acidente de trânsito na Avenida Assis Ribeiro deixou duas pessoas feridas e causou grande congestionamento na região da Zona Leste de São Paulo nesta manhã.'
        }
    
    if not other_news:
        other_news = [
            {
                'id': 2,
                'title': 'Parque do Carmo recebe Festival de Cultura Nordestina neste fim de semana',
                'image': '/static/figmaAssets/rectangle-100.png',
                'category': 'Cultura',
                'date': '12 de dezembro de 2025',
                'excerpt': 'Com muita música ao vivo, forró, artesanato e comidas típicas, o evento promete animar toda a família.'
            },
            {
                'id': 3,
                'title': 'Nova UBS é inaugurada no bairro de Ermelino Matarazzo',
                'image': '/static/figmaAssets/rectangle-44.png',
                'category': 'Saúde',
                'date': '15 de novembro de 2025',
                'excerpt': 'A nova unidade básica de saúde vai atender mais de 10 mil moradores da região, oferecendo serviços médicos e odontológicos.'
            }
        ]
    
    context = {
        'featured_news': featured_news,
        'other_news': other_news,
    }
    return render(request, 'news/destaques.html', context)


def noticias(request):
    news_articles = NewsArticle.objects.all()
    
    if not news_articles:
        news_articles = [
            {
                'id': 1,
                'author': 'Gabriel Coelho',
                'avatar': '/static/figmaAssets/kalifa1.png',
                'date': '23 de setembro de 2025',
                'title': 'Acidente na Av. Assis Ribeiro deixa dois feridos',
                'content': 'Aqui no Ermelino o tio da minha prima acabou de matar um mendigo na rua, DE GRAÇA, ta cheio de polícia aqui e ele já foi levado, o rabecão já veio buscar o corpo. As imagens são fortes e sensíveis.',
                'images': ['/static/figmaAssets/rectangle-99.png', '/static/figmaAssets/rectangle-102.png'],
                'category': 'Urgente'
            },
            {
                'id': 2,
                'author': 'Beatriz Coelho',
                'avatar': '/static/figmaAssets/ellipse-16.png',
                'date': '12 de dezembro de 2025',
                'title': 'Festival de Cultura Nordestina no Parque do Carmo',
                'content': 'Neste fim de semana, o Parque do Carmo recebe o Festival de Cultura Nordestina, com muita música ao vivo, forró, artesanato e comidas típicas. O evento é gratuito e promete animar toda a família.',
                'images': ['/static/figmaAssets/rectangle-100.png', '/static/figmaAssets/rectangle-44.png'],
                'category': 'Cultura'
            },
            {
                'id': 3,
                'author': 'Carlos Santos',
                'avatar': '/static/figmaAssets/ellipse-15.png',
                'date': '15 de novembro de 2025',
                'title': 'Nova UBS inaugurada em Ermelino Matarazzo',
                'content': 'A nova unidade básica de saúde vai atender mais de 10 mil moradores da região, oferecendo serviços médicos e odontológicos completos para a comunidade da Zona Leste.',
                'images': ['/static/figmaAssets/chatgpt-image-7-de-out--de-2025--10-24-10-1.png'],
                'category': 'Saúde'
            }
        ]
    
    context = {
        'news_articles': news_articles,
    }
    return render(request, 'news/noticias.html', context)
