import CountryFlag from 'react-country-flag';

const CountryList = ({ idName, className }) => {
    return (
        <ul className={className} style={{ height: '100%' }}>
            <li><label><input type="checkbox" value="gb" id={idName} /> <CountryFlag countryCode='gb' /> United Kingdom</label></li>
            <li><label><input type="checkbox" value="us" id={idName} /> <CountryFlag countryCode='us' /> United States</label></li>
            <li><label><input type="checkbox" value="nl" id={idName} /> <CountryFlag countryCode='nl' /> Netherlands</label></li>
            <li><label><input type="checkbox" value="es" id={idName} /> <CountryFlag countryCode='es' /> Spain</label></li>
            <li><label><input type="checkbox" value="fr" id={idName} /> <CountryFlag countryCode='fr' /> France</label></li>
            <li><label><input type="checkbox" value="de" id={idName} /> <CountryFlag countryCode='de' /> Germany</label></li>
            <li><label><input type="checkbox" value="au" id={idName} /> <CountryFlag countryCode='au' /> Australia</label></li>
            <li><label><input type="checkbox" value="it" id={idName} /> <CountryFlag countryCode='it' /> Italy</label></li>
            <li><label><input type="checkbox" value="se" id={idName} /> <CountryFlag countryCode='se' /> Sweden</label></li>
            <li><label><input type="checkbox" value="in" id={idName} /> <CountryFlag countryCode='in' /> India</label></li>
            <li><label><input type="checkbox" value="ca" id={idName} /> <CountryFlag countryCode='ca' /> Canada</label></li>
            <li><label><input type="checkbox" value="jp" id={idName} /> <CountryFlag countryCode='jp' /> Japan</label></li>
            <li><label><input type="checkbox" value="br" id={idName} /> <CountryFlag countryCode='br' /> Brazil</label></li>
            <li><label><input type="checkbox" value="cn" id={idName} /> <CountryFlag countryCode='cn' /> China</label></li>
            <li><label><input type="checkbox" value="ru" id={idName} /> <CountryFlag countryCode='ru' /> Russia</label></li>
            <li><label><input type="checkbox" value="mx" id={idName} /> <CountryFlag countryCode='mx' /> Mexico</label></li>
            <li><label><input type="checkbox" value="jm" id={idName} /> <CountryFlag countryCode='jm' /> Jamaica</label></li>
            <li><label><input type="checkbox" value="za" id={idName} /> <CountryFlag countryCode='za' /> South Africa</label></li>
            <li><label><input type="checkbox" value="ar" id={idName} /> <CountryFlag countryCode='ar' /> Argentina</label></li>
            <li><label><input type="checkbox" value="ch" id={idName} /> <CountryFlag countryCode='ch' /> Switzerland</label></li>
            <li><label><input type="checkbox" value="kr" id={idName} /> <CountryFlag countryCode='kr' /> South Korea</label></li>
            <li><label><input type="checkbox" value="eg" id={idName} /> <CountryFlag countryCode='eg' /> Egypt</label></li>
            <li><label><input type="checkbox" value="tr" id={idName} /> <CountryFlag countryCode='tr' /> Turkey</label></li>
            <li><label><input type="checkbox" value="th" id={idName} /> <CountryFlag countryCode='th' /> Thailand</label></li>
            <li><label><input type="checkbox" value="ng" id={idName} /> <CountryFlag countryCode='ng' /> Nigeria</label></li>
            <li><label><input type="checkbox" value="mx" id={idName} /> <CountryFlag countryCode='mx' /> Mexico</label></li>
            <li><label><input type="checkbox" value="za" id={idName} /> <CountryFlag countryCode='za' /> South Africa</label></li>
            <li><label><input type="checkbox" value="ar" id={idName} /> <CountryFlag countryCode='ar' /> Argentina</label></li>
            <li><label><input type="checkbox" value="ch" id={idName} /> <CountryFlag countryCode='ch' /> Switzerland</label></li>
            <li><label><input type="checkbox" value="kr" id={idName} /> <CountryFlag countryCode='kr' /> South Korea</label></li>
        </ul>
    )
}

export default CountryList; 