import { FilmData, CommentData } from '../types/film';

export const films: FilmData[] = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false
  },
  {
    'id': 2,
    'name': 'Bohemian rhapsody',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/bohemian-rhapsody.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 3.9,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'
    ],
    'runTime': 99,
    'genre': 'Horror',
    'released': 1998,
    'isFavorite': false
  },
  {
    'id': 3,
    'name': 'Dardjeeling Limited',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/dardjeeling-limited.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 8.5,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
    ],
    'runTime': 99,
    'genre': 'Romance',
    'released': 1987,
    'isFavorite': false
  },
  {
    'id': 4,
    'name': 'Johnny english',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/johnny-english.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 6.6,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2018,
    'isFavorite': false
  },
  {
    'id': 5,
    'name': 'Macbeth',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/macbeth.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 9.1,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton'
    ],
    'runTime': 99,
    'genre': 'Romance',
    'released': 2017,
    'isFavorite': false
  },
  {
    'id': 6,
    'name': 'Midnight special',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/midnight-special.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 7.3,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2003,
    'isFavorite': false
  },
  {
    'id': 7,
    'name': 'Mindhunter',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/mindhunter.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 9.5,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2010,
    'isFavorite': false
  },
  {
    'id': 8,
    'name': 'Moonrise kingdom',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/moonrise-kingdom.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 5.1,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2004,
    'isFavorite': false
  },
  {
    'id': 9,
    'name': 'Moonrise kingdom',
    'posterImage': 'img/the-grand-budapest-hotel-poster.jpg',
    'previewImage': 'img/moonrise-kingdom.jpg',
    'backgroundImage': 'img/bg-the-grand-budapest-hotel.jpg',
    'backgroundColor': '#ffffff',
    'videoLink': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'previewVideoLink': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',
    'rating': 5.1,
    'scoresCount': 240,
    'director': 'Wes Anderson',
    'starring': [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2004,
    'isFavorite': false
  },
];

export const comments: CommentData[] = [
  {
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&apos;s funniest and most exquisitely designed films in years.',
    date: '2016-12-24',
    id: 0,
    rating: 8.9,
    user: {
      id: 0,
      name: 'Kate Muir'
    }
  },
  {
    comment: 'The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.',
    date: '2016-12-20',
    id: 1,
    rating: 7.2,
    user: {
      id: 1,
      name: 'Matthew Lickona'
    }
  },
  {
    comment: 'Anderson&apos;s films are too precious for some, but for those of us willing to lose ourselves in them, they&apos;re a delight." The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.',
    date: '2015-11-18',
    id: 2,
    rating: 8.0,
    user: {
      id: 3,
      name: 'Bill Goodykoontz'
    }
  },
  {
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: '2016-12-20',
    id: 3,
    rating: 7.6,
    user: {
      id: 4,
      name: 'Paula Fleri-Soler'
    }
  },
  {
    comment: 'I didn&apos;t find it amusing, and while I can appreciate the creativity, it&apos;s an hour and 40 minutes I wish I could take back.',
    date: '2015-11-18',
    id: 4,
    rating: 8.0,
    user: {
      id: 5,
      name: 'Amanda Greever'
    }
  },
  {
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.',
    date: '2016-12-20',
    id: 5,
    rating: 7.0,
    user: {
      id: 4,
      name: 'Paula Fleri-Soler'
    }
  },
];
