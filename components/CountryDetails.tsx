"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

interface Country {
  name: {
    common: string
    official: string
  }
  flags: {
    png: string
    alt: string
  }
  population: number
  region: string
  capital: string
}

const CountryDetails = () => {
  const { countryName } = useParams()
  const [countryDetails, setCountryDetails] = useState<Country | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        if (!countryName) {
          throw new Error("Country name is missing from URL")
        }
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        )
        if (!res.ok) {
          throw new Error("Failed to fetch data!")
        }
        const data = await res.json()
        const countryData = data[0]
        setCountryDetails({
          name: countryData.name,
          flags: countryData.flags,
          population: countryData.population,
          region: countryData.region,
          capital: countryData.capital,
        })
      } catch (error) {
        setError("Error")
      }
    }

    getSingleCountry()
  }, [countryName])

  if (!countryDetails) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>{countryDetails.name.common}</h1>
      <p>Official Name: {countryDetails.name.official}</p>
      <p>Population: {countryDetails.population}</p>
      <p>Region: {countryDetails.region}</p>
      <p>Capital: {countryDetails.capital}</p>
    </div>
  )
}

export default CountryDetails
