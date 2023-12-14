import axios from 'axios';

export default class GenreService {
    mockedGenres = [
        {
            name: 'Rock',
            decade: '1950s',
            description: 'A genre of popular music that originated as "rock and roll" in the United States in the 1950s.',
            popular: ['Elvis Presley', 'The Beatles', 'Led Zeppelin'],
            spotifyTrackPreviewId: '7cv9zyMZRbWfOh2sAcleYL',
            countries: ["US"],
            children: [
                {
                    name: 'Classic Rock',
                    decade: '1960s',
                    description: 'A radio format which developed from the album-oriented rock (AOR) format in the early 1980s.',
                    popular: ['The Rolling Stones', 'The Who', 'Pink Floyd'],
                    spotifyTrackPreviewId: '6H3kDe7CGoWYBabAeVWGiD',
                    countries: ["US", "GB"],
                    children: [
                        {
                            name: 'Prog Rock',
                            decade: '1970s',
                            description: 'A genre that combines rock music with classical and other forms of music.',
                            popular: ['Yes', 'Genesis', 'Rush'],
                            spotifyTrackPreviewId: '0D3Ra0iqmNHaLqJsASTEaP',
                            countries: ["GB"],
                            children: [],
                        },
                        {
                            name: 'Southern Rock',
                            decade: '1970s',
                            description: 'A subgenre of rock that developed in the Southern United States.',
                            popular: ['Lynyrd Skynyrd', 'The Allman Brothers Band', 'ZZ Top'],
                            spotifyTrackPreviewId: '5EWPGh7jbTNO2wakv8LjUI',
                            countries: ["US"],
                            children: [],
                        },
                    ],
                },
                {
                    name: 'Punk Rock',
                    decade: '1970s',
                    description: 'A genre characterized by a fast tempo, short songs, and stripped-down instrumentation.',
                    popular: ['Ramones', 'Sex Pistols', 'The Clash'],
                    spotifyTrackPreviewId: '5moTxUGPZXgGmosl4rIELm',
                    countries: ["GB"],
                    children: [
                        {
                            name: 'Hardcore Punk',
                            decade: '1980s',
                            description: 'A subgenre of punk rock known for its fast tempo, short songs, and abrasive sound.',
                            popular: ['Black Flag', 'Minor Threat', 'Bad Brains'],
                            spotifyTrackPreviewId: '0YnP5BtP6lTwQV8gLOzaov',
                            countries: ["US", "GB"],
                            children: [],
                        },
                        {
                            name: 'Pop Punk',
                            decade: '1990s',
                            description: 'A subgenre that combines elements of punk rock with pop music.',
                            popular: ['Green Day', 'Blink-182', 'Sum 41'],
                            spotifyTrackPreviewId: '78pHMOI9qUWonIMySjO3XY',
                            countries: ["US"],
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Electronic',
            decade: '1960s',
            description: 'A genre of music that uses electronic devices and technology to produce sound.',
            popular: ['Kraftwerk', 'Daft Punk', 'The Chemical Brothers'],
            spotifyTrackPreviewId: '1Q8n7UU4pULe4Mf1m3DxCm',
            countries: [],
            children: [
                {
                    name: 'Techno',
                    decade: '1980s',
                    description: 'A genre of electronic dance music that emerged in Detroit, Michigan, in the United States.',
                    popular: ['Juan Atkins', 'Derrick May', 'Kevin Saunderson'],
                    spotifyTrackPreviewId: '7p6oXzBSPAXXz8Xb8gBPki',
                    countries: ["US", "DE"],
                    children: [],
                },
                {
                    name: 'House',
                    decade: '1980s',
                    description: 'A genre of electronic dance music that originated in Chicago in the early 1980s.',
                    popular: ['Frankie Knuckles', 'Larry Heard', 'Marshall Jefferson'],
                    spotifyTrackPreviewId: '2t3FV5IpL1uWeMjt7vOomW',
                    countries: ["US"],
                    children: [
                        {
                            name: 'Deep House',
                            decade: '1990s',
                            description: 'A subgenre of house music known for its deep, soulful sound.',
                            popular: ['Kerri Chandler', 'Larry Heard', 'Theo Parrish'],
                            spotifyTrackPreviewId: '2N1teUVGfP3vWKKGq0ZxvH',
                            countries: ["US"],
                            children: [],
                        },
                        {
                            name: 'Tech House',
                            decade: '1990s',
                            description: 'A subgenre that combines elements of techno and house music.',
                            popular: ['Carl Cox', 'Solomun', 'Hot Since 82'],
                            spotifyTrackPreviewId: '2B25TG8LXf0jCE1RogngVw',
                            countries: ["US", "ES"],
                            children: [],
                        },
                    ],
                },
            ],
        },
        {
            name: 'Hip Hop',
            decade: '1970s',
            description: 'A genre of music that originated in African American communities in New York City.',
            popular: ['Run-D.M.C.', '2Pac', 'Jay-Z'],
            spotifyTrackPreviewId: '2oSPru8bef0EMhF9tvMSLn',
            countries: ["US"],
            children: [
                {
                    name: 'East Coast Hip Hop',
                    decade: '1980s',
                    description: 'A subgenre that originated in the Eastern United States.',
                    popular: ['Notorious B.I.G.', 'Nas', 'Wu-Tang Clan'],
                    spotifyTrackPreviewId: '2bXI4Rbw1D7aVeHWLjn1Lb',
                    countries: ["US"],
                    children: [],
                },
                {
                    name: 'West Coast Hip Hop',
                    decade: '1980s',
                    description: 'A subgenre that originated in the Western United States.',
                    popular: ['Dr. Dre', 'Snoop Dogg', 'Ice Cube'],
                    spotifyTrackPreviewId: '503OTo2dSqe7qk76rgsbep',
                    countries: ["US"],
                    children: [],
                },
                {
                    name: 'Trap',
                    decade: '2000s',
                    description: 'A subgenre that originated in the Southern United States.',
                    popular: ['Future', 'Migos', 'Travis Scott'],
                    spotifyTrackPreviewId: '2rMFawCg4BW65jzbwztXAV',
                    countries: ["US"],
                    children: [],
                },
            ],
        },
        {
            name: 'Jazz',
            decade: 'Late 19th century',
            description: 'A genre of music that originated in the African American communities of New Orleans, United States.',
            popular: ['Louis Armstrong', 'Miles Davis', 'John Coltrane'],
            spotifyTrackPreviewId: '4vLYewWIvqHfKtJDk8c8tq',
            countries: ["US"],
            children: [
                {
                    name: 'Swing Jazz',
                    decade: '1930s',
                    description: 'A subgenre that became popular in the 1930s and 1940s, characterized by a strong rhythm section and arrangements for big bands.',
                    popular: ['Benny Goodman', 'Duke Ellington', 'Count Basie'],
                    spotifyTrackPreviewId: '6KBsivP3Of4z2x6uNMAyE3',
                    countries: ["US"],
                    children: [],
                },
                {
                    name: 'Bebop',
                    decade: '1940s',
                    description: 'A subgenre characterized by fast tempos, complex harmonies, and intricate melodies.',
                    popular: ['Charlie Parker', 'Dizzy Gillespie', 'Thelonious Monk'],
                    spotifyTrackPreviewId: '1wl5b2lw3YagQtZiYZbQWP',
                    countries: ["US"],
                    children: [
                        {
                            name: 'Hard Bop',
                            decade: '1950s',
                            description: 'A subgenre that incorporates elements of rhythm and blues, gospel, and soul music.',
                            popular: ['Art Blakey', 'Horace Silver', 'Cannonball Adderley'],
                            spotifyTrackPreviewId: '5ExPPLT7SG1j9cZuM73NDH',
                            countries: ["US"],
                            children: [],
                        },
                    ],
                },
                {
                    name: 'Cool Jazz',
                    decade: '1950s',
                    description: 'A subgenre known for its relaxed tempos and lighter, more subdued approach.',
                    popular: ['Miles Davis', 'Chet Baker', 'Dave Brubeck'],
                    spotifyTrackPreviewId: '41eYXWD5m7gFfDBD1hKLyn',
                    countries: ["US"],
                    children: [],
                },
            ],
        },
        {
            name: 'Classical',
            decade: 'Medieval period',
            description: 'A broad term that refers to the tradition of music that spans over six centuries.',
            popular: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach'],
            spotifyTrackPreviewId: '3kfR3pry54a3QhQ1yWVIYN',
            countries: ["IT", "DE", "AT", "RU", "FR"],
            children: [
                {
                    name: 'Baroque',
                    decade: '1600-1750',
                    description: 'A period of music known for its ornamentation, contrasts, and development of tonality.',
                    popular: ['Johann Sebastian Bach', 'George Frideric Handel', 'Antonio Vivaldi'],
                    spotifyTrackPreviewId: '0BWJNm4TrO6H3qgiCmDBjM',
                    countries: ["IT", "DE"],
                    children: [],
                },
                {
                    name: 'Classical Period',
                    decade: '1730-1820',
                    description: 'A period characterized by clear tonal structures, balanced phrases, and melodic development.',
                    popular: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Franz Joseph Haydn'],
                    spotifyTrackPreviewId: '0iGDZom5WctL4eSQogMhMp',
                    countries: [],
                    children: [
                        {
                            name: 'Romantic',
                            decade: '1815-1910',
                            description: 'A period known for its expressive, emotive, and often nationalistic music.',
                            popular: ['Ludwig van Beethoven', 'Franz Schubert', 'Pyotr Ilyich Tchaikovsky'],
                            spotifyTrackPreviewId: '2ygeBLTP9uu3OW3VTulD8N',
                            countries: [],
                            children: [],
                        },
                        {
                            name: 'Impressionism',
                            decade: 'Late 19th-early 20th centuries',
                            description: 'A movement that focused on atmosphere and evocation rather than traditional harmony and structure.',
                            popular: ['Claude Debussy', 'Maurice Ravel', 'Erik Satie'],
                            spotifyTrackPreviewId: '3YJrnXT1UNpRgnc7lcgXSF',
                            countries: [],
                            children: [],
                        },
                    ],
                },
            ],
        },

    ];
    baseUrl = "http://localhost:3000/Genres";
    genres = [];

    async getGenresAsync() {
        //return Promise.resolve(this.mockedGenres);

        try {
            const response = await fetch(`${this.baseUrl}`, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data', data);

            this.genres = data;
            return data;
        } catch (error) {
            console.error('Error fetching genres:', error);
            throw error;
        }
    }

    async getGenreByIdAsync(genreId) {
        const fetchlink = `${this.baseUrl}/${genreId}`;

        console.log("fetclink", fetchlink);

        try {
            const response = await fetch(fetchlink, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data', data);

            this.genre = data;
            return data;
        } catch (error) {
            console.error(`Error fetching genre:${genreId}`, error);
            throw error;
        }
    }

    async deleteGenre(genreId) {
        try {
            const response = await fetch(`${this.baseUrl}/${genreId}`, { method: 'DELETE' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log('Genre was deleted succesfully');
        } catch (error) {
            console.error(`Error deleting genre ${genreId}: `, error);
        }
    }

    async createNewGenreAsync(genre) {
        console.log("created genre is:", genre);
        try {
            const response = await fetch(`${this.baseUrl}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(genre),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log('Genre was created successfully');
        } catch (error) {
            console.error(`Error creating genre: `, error);
        }
    }
}