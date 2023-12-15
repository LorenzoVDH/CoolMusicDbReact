import CountryFlag from 'react-country-flag';

const CountryList = ({ idName, className, selectedCountries }) => {
    return (
        <ul className={className} style={{ height: '100%' }}>
            <CountryInput countryCode='US' countryName='United States' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='GB' countryName='United Kingdom' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='NL' countryName='Netherlands' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='ES' countryName='Spain' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='FR' countryName='France' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='DE' countryName='Germany' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='AU' countryName='Australia' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='IT' countryName='Italy' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='SE' countryName='Sweden' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='IN' countryName='India' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='CA' countryName='Canada' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='JP' countryName='Japan' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='BR' countryName='Brazil' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='CN' countryName='China' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='RU' countryName='Russia' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='MX' countryName='Mexico' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='JM' countryName='Jamaica' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='ZA' countryName='South Africa' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='AR' countryName='Argentina' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='CH' countryName='Switzerland' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='KR' countryName='South Korea' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='EG' countryName='Egypt' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='TR' countryName='Turkey' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='TH' countryName='Thailand' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='NG' countryName='Nigeria' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='MX' countryName='Mexico' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='ZA' countryName='South Africa' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='AR' countryName='Argentina' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='CH' countryName='Switzerland' id={idName} selectedCountries={selectedCountries} />
            <CountryInput countryCode='KR' countryName='South Korea' id={idName} selectedCountries={selectedCountries} />
        </ul>
    )
}

const CountryInput = ({ countryCode, countryName, id, selectedCountries }) => {
    return <li><label><input type="checkbox" value={countryCode} id={id} checked={selectedCountries.includes(countryCode)} /> <CountryFlag countryCode={countryCode} />{countryName}</label></li>;
}

export default CountryList; 