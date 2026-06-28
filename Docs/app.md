# Podcast Manager

### Descrição

Aplicativo do tipo Netflix para centralizar vídeos/episódeos
de podcasts por temas/categorias

### Domínio

Podcast feitos em vídeo

### Features

- Listar Podcasts em sessões/categorias
  -- [Humor, policiais, mentalidades, musical]
- Filtrar episódios por nome de podcasts

## Como

#### Feature:

Listar Podcasts em sessões/categorias

### Como vou Implementar

GET: Retorna lista de episódios
Retornar em uma API Rest (Json) do nome do podcast, nome do episódio, imagem de capa e o link, category
'''
[
{
podcastName:"Flow",
episode:"CBUM - Flow #319",
videoId:"pQSuQmUfS30",
cover:"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=pQSuQmUfS30&t=1s&pp=ygUNY2J1bSBmbG93IDMxOQ%3D%3D",
categories:["humor","policial"]
},
{
podcastName:"Britto podcast",
episode:"FERRUGEM - Brito Podcast especial episódio 300",
videoId:"bhKz9ep9Cm4",
cover:"https://i.ytimg.com/vi/bhKz9ep9Cm4/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=bhKz9ep9Cm4&t=6874s",
categories:["humor","musical"]
}
]

'''

GET
Retorna lista de episódios baseado em um parâmetro que
vem do client do nome do podcast
