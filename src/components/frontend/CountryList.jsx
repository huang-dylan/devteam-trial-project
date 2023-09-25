// import { fetch } from 'next/fetch';
import Image from 'next/image'

export default async function CountryList() {

    const fetchCountryData = async () => {
        const res = await fetch(`https://restcountries.com/v3.1/all`, {
        headers: {
            accept: 'application/json',
        },
        }).then(function (response) {
            return response.json();
        })
        return res;
    }

    const data = await fetchCountryData();
    
        return (
            <>
            {data.map((country, i) => (
                <div key={i}>
                    <h3>{country.name.common}</h3>  
                    <p>Capital: {country.capital}</p>  
                    <p>Region: {country.region}</p>  
                    <p>Flag: <Image src={country.flags.png} width="160" length="90" height="20"/></p>  
                    <br />
                </div>
            ))}
            </>
        )
}
