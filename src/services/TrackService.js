
export default class TrackService {
  mockedTracks = [
    {
      id: 1,
      name: 'Stairway to Heaven',
      artistName: 'Led Zeppelin',
      bandName: 'Led Zeppelin',
      releaseDate: '8-8-1971',
      genres: ['Rock'],
      albumName: 'Led Zeppelin IV',
      audioFileUrl: 'http://www.example.com/audio/stairway-to-heaven.mp3'
    },
    {
      id: 2,
      name: 'Bohemian Rhapsody',
      artistName: 'Queen',
      bandName: 'Queen',
      releaseDate: '10-31-1975',
      genres: ['Rock', 'Progressive Rock'],
      albumName: 'A Night at the Opera',
      audioFileUrl: 'http://www.example.com/audio/bohemian-rhapsody.mp3'
    },
    {
      id: 3,
      name: 'Billie Jean',
      artistName: 'Michael Jackson',
      bandName: null,
      releaseDate: '1-2-1983',
      genres: ['Pop', 'Funk'],
      albumName: 'Thriller',
      audioFileUrl: 'http://www.example.com/audio/billie-jean.mp3'
    },
    {
      id: 4,
      name: 'Shape of You',
      artistName: 'Ed Sheeran',
      bandName: null,
      releaseDate: '1-6-2017',
      genres: ['Pop', 'R&B'],
      albumName: '÷ (Divide)',
      audioFileUrl: 'http://www.example.com/audio/shape-of-you.mp3'
    },
    {
      id: 5,
      name: 'Hotel California',
      artistName: 'Eagles',
      bandName: 'Eagles',
      releaseDate: '12-8-1976',
      genres: ['Rock'],
      albumName: 'Hotel California',
      audioFileUrl: 'http://www.example.com/audio/hotel-california.mp3'
    },
    {
      id: 6,
      name: 'Smells Like Teen Spirit',
      artistName: 'Nirvana',
      bandName: 'Nirvana',
      releaseDate: '9-10-1991',
      genres: ['Grunge', 'Rock'],
      albumName: 'Nevermind',
      audioFileUrl: 'http://www.example.com/audio/smells-like-teen-spirit.mp3'
    },
    {
      id: 7,
      name: 'Like a Rolling Stone',
      artistName: 'Bob Dylan',
      bandName: 'Bob Dylan',
      releaseDate: '6-20-1965',
      genres: ['Folk Rock'],
      albumName: 'Highway 61 Revisited',
      audioFileUrl: 'http://www.example.com/audio/like-a-rolling-stone.mp3'
    },
    {
      id: 8,
      name: 'Imagine',
      artistName: 'John Lennon',
      bandName: null,
      releaseDate: '10-11-1971',
      genres: ['Pop', 'Rock'],
      albumName: 'Imagine',
      audioFileUrl: 'http://www.example.com/audio/imagine.mp3'
    },
    {
      id: 9,
      name: 'Shape of My Heart',
      artistName: 'Sting',
      bandName: null,
      releaseDate: '7-9-1993',
      genres: ['Soft Rock'],
      albumName: "Ten Summoner's Tales",
      audioFileUrl: 'http://www.example.com/audio/shape-of-my-heart.mp3'
    },
    {
      id: 10,
      name: 'Thriller',
      artistName: 'Michael Jackson',
      bandName: null,
      releaseDate: '11-30-1982',
      genres: ['Pop', 'Funk'],
      albumName: 'Thriller',
      audioFileUrl: 'http://www.example.com/audio/thriller.mp3'
    },
    {
      id: 11,
      name: "What's Going On",
      artistName: 'Marvin Gaye',
      bandName: null,
      releaseDate: '5-21-1971',
      genres: ['Soul', 'R&B'],
      albumName: "What's Going On",
      audioFileUrl: 'http://www.example.com/audio/whats-going-on.mp3'
    },
    {
      id: 12,
      name: 'I Want to Hold Your Hand',
      artistName: 'The Beatles',
      bandName: 'The Beatles',
      releaseDate: '11-29-1963',
      genres: ['Rock', 'Pop'],
      albumName: 'With the Beatles',
      audioFileUrl: 'http://www.example.com/audio/i-want-to-hold-your-hand.mp3'
    },
    {
      id: 13,
      name: 'Purple Haze',
      artistName: 'Jimi Hendrix',
      bandName: 'The Jimi Hendrix Experience',
      releaseDate: '3-17-1967',
      genres: ['Rock', 'Psychedelic Rock'],
      albumName: 'Are You Experienced',
      audioFileUrl: 'http://www.example.com/audio/purple-haze.mp3'
    },
    {
      id: 14,
      name: 'Dancing Queen',
      artistName: 'ABBA',
      bandName: 'ABBA',
      releaseDate: '8-15-1976',
      genres: ['Pop', 'Disco'],
      albumName: 'Arrival',
      audioFileUrl: 'http://www.example.com/audio/dancing-queen.mp3'
    }
  ];

  getTracks() {
    return this.mockedTracks;
  }
}