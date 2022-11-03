export type FilmData = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2014,
    'isFavorite': false
  },
  {
    'id': 2,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 1998,
    'isFavorite': false
  },
  {
    'id': 3,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 1987,
    'isFavorite': false
  },
  {
    'id': 4,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2018,
    'isFavorite': false
  },
  {
    'id': 5,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2017,
    'isFavorite': false
  },
  {
    'id': 6,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2003,
    'isFavorite': false
  },
  {
    'id': 7,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2010,
    'isFavorite': false
  },
  {
    'id': 8,
    'name': 'The Grand Budapest Hotel',
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
      'Bill Murray'
    ],
    'runTime': 99,
    'genre': 'Comedy',
    'released': 2004,
    'isFavorite': false
  },
];