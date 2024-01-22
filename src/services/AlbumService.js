class AlbumService {
    baseUrl = "http://localhost:3000/Albums";
    baseUrlSingle = "http://localhost:3000/Album";
    albums = [];

    async getAlbumsAsync(pageIndex, pageSize) {
        try {
            const response = await fetch(`${this.baseUrl}?pageIndex=${pageIndex}&pageSize=${pageSize}`, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            this.albums = data;

            return data;
        } catch (error) {
            console.error('Error fetching albums:', error);
            throw error;
        }
    }

    async deleteAlbumAsync(id) {
        try {
            const response = await fetch(`${this.baseUrlSingle}/${id}`, { method: 'DELETE' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log(`album ${id} succesfully deleted!`)
        } catch (error) {
            console.error(`Error deleting album ${id}:`, error);
            throw error;
        }
    }

    async getAlbumByIdAsync(albumId) {
        const fetchlink = `${this.baseUrlSingle}/${albumId}`;
        try {
            const response = await fetch(fetchlink, { method: 'GET' });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Data', data);

            this.album = data;
            return data;
        } catch (error) {
            console.error(`Error fetching album:${albumId}`, error);
            throw error;
        }
    }

    async updateAlbumAsync(album) {
        console.log("THE ALBUM", album);

        try {
            const response = await fetch(`${this.baseUrlSingle}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(album)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            console.log('Album was updated succesfully');
        } catch (error) {
            console.error(`Error updating album: `, error);
        }
    }
};

export default AlbumService; 