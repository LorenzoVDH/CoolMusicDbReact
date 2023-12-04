export default class ArtistService {
    mockedArtists = [
        {
            pseudonym: "Adele",
            firstName: "Adele",
            lastName: "Adkins",
            dateOfBirth: "1988-05-05",
            description: "Award-winning British singer-songwriter known for her soulful voice.",
            countryCode: "UK",
            imageURL: "https://example.com/adele-image.jpg"
        },
        {
            pseudonym: "Ed Sheeran",
            firstName: "Ed",
            lastName: "Sheeran",
            dateOfBirth: "1991-02-17",
            description: "English singer-songwriter and musician recognized for his acoustic pop and R&B style.",
            countryCode: "UK",
            imageURL: "https://example.com/ed-sheeran-image.jpg"
        },
        {
            pseudonym: "Beyoncé",
            firstName: "Beyoncé",
            lastName: "Knowles",
            dateOfBirth: "1981-09-04",
            description: "American singer, songwriter, and actress, known for her powerful vocals and stage presence.",
            countryCode: "US",
            imageURL: "https://example.com/beyonce-image.jpg"
        },
        {
            pseudonym: "Kendrick Lamar",
            firstName: "Kendrick",
            lastName: "Lamar",
            dateOfBirth: "1987-06-17",
            description: "American rapper and songwriter recognized for his socially conscious lyrics and innovative style.",
            countryCode: "US",
            imageURL: "https://example.com/kendrick-lamar-image.jpg"
        },
        {
            pseudonym: "Shakira",
            firstName: "Shakira",
            lastName: "Mebarak",
            dateOfBirth: "1977-02-02",
            description: "Colombian singer, songwriter, and dancer known for her fusion of Latin and pop music.",
            countryCode: "CO",
            imageURL: "https://example.com/shakira-image.jpg"
        },
        {
            pseudonym: "Justin Bieber",
            firstName: "Justin",
            lastName: "Bieber",
            dateOfBirth: "1994-03-01",
            description: "Canadian singer and pop sensation who gained fame as a teenager.",
            countryCode: "CA",
            imageURL: "https://example.com/justin-bieber-image.jpg"
        },
        {
            pseudonym: "Rihanna",
            firstName: "Rihanna",
            lastName: "Fenty",
            dateOfBirth: "1988-02-20",
            description: "Barbadian singer, actress, and businesswoman known for her versatile musical style.",
            countryCode: "BB",
            imageURL: "https://example.com/rihanna-image.jpg"
        },
        {
            pseudonym: "John Legend",
            firstName: "John",
            lastName: "Stephens",
            dateOfBirth: "1978-12-28",
            description: "American singer, songwriter, and producer known for his soulful voice and piano skills.",
            countryCode: "US",
            imageURL: "https://example.com/john-legend-image.jpg"
        },
        {
            pseudonym: "Alicia Keys",
            firstName: "Alicia",
            lastName: "Keys",
            dateOfBirth: "1981-01-25",
            description: "American singer-songwriter and pianist recognized for her R&B and soul music.",
            countryCode: "US",
            imageURL: "https://example.com/alicia-keys-image.jpg"
        },
        {
            pseudonym: "Drake",
            firstName: "Drake",
            lastName: "Graham",
            dateOfBirth: "1986-10-24",
            description: "Canadian rapper, singer, and songwriter known for his versatility and chart-topping hits.",
            countryCode: "CA",
            imageURL: "https://example.com/drake-image.jpg"
        }
    ];

    getArtists(){
        return this.mockedArtists; 
    }
}