export default class ArtistService {
    baseUrl = "http://localhost:3000/Artists";
    artists = [];

    async getArtistsAsync(pageIndex, pageSize) {
        try {
            const response = await fetch(`${this.baseUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            this.artists = data;

            return data;
        } catch (error) {
            console.error('Error fetching artists:', error);
            throw error;
        }
    }

    async getArtistsByName(searchTerm) {
        console.log(searchTerm);
        try {
            const url = `${this.baseUrl}/Name/${searchTerm}`;
            const response = await fetch(url, { method: 'GET' });

            console.log(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            this.artists = data;

            return data;
        } catch (error) {
            console.error('Error fetching artists:', error);
            throw error;
        }
    }
}