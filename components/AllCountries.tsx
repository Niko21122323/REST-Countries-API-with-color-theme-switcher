"use client"

import { useState, useEffect } from "react"
import { Country, getCountryData } from "@/api/countriesData"
import CountryDisplay from "./CountryDisplay"

const AllCountries = () => {
  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountryData()
      setCountries(data)
    }
    fetchData()
  }, [])

  return (
    <section>
      <CountryDisplay countries={countries} />
    </section>
  )
}

export default AllCountries
