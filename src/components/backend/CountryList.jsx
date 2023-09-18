"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'

const CountryList = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(setCountries)
  }, [])
  return (
    <div className="flex flex-col gap-12">
      {countries.map(country => (
        <div key={country.cca2}>
          <CountryCard
            name={country.name.common}
            capital={country.capital}
            region={country.region}
            flag={country.flags.png}
          />
        </div>
      ))}
    </div>
  )
}

export default CountryList