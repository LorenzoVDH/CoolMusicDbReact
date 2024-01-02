class AlbumService {
    baseUrl = "http://localhost:3000/Albums";
    albums = [];

    async getAlbumsAsync(pageIndex, pageSize) {
        try {
            const response = await fetch(`${this.baseUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data', data);

            this.albums = data;

            return data;
        } catch (error) {
            console.error('Error fetching albums:', error);
            throw error;
        }
    }
};

export default AlbumService; 