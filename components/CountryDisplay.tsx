"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SearchInput from "./Search"
import DropDown from "./DropDown"
import { Country } from "@/api/countriesData"

interface CountryDisplayProps {
  countries: Country[]
}

const CountryDisplay: React.FC<CountryDisplayProps> = ({ countries }) => {
  const [query, setQuery] = useState("")

  const searchFilter = (array: Country[]) => {
    const queryLower = query.toLowerCase()
    return array.filter((el: Country) =>
      el.name.common.toLowerCase().includes(queryLower)
    )
  }

  const filtered = searchFilter(countries)

  const handleChange = (value: string) => {
    setQuery(value)
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-20">
        <SearchInput onChange={handleChange} />
        <DropDown />
      </div>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-16">
        {filtered.map((country: Country) => (
          <Link
            href={country.name.common}
            key={country.name.official}
            className="bg-accent-l dark:bg-accent-d rounded-lg overflow-hidden drop-shadow-xl"
          >
            <div className="h-[150px] overflow-hidden flex items-center object-fill">
              <Image
                src={country.flags.png}
                alt={country.name.official}
                width={600}
                height={500}
                priority
                className="h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-txt-l dark:text-txt-d font-extrabold text-lg mb-3">
                {country.name.common.length > 20
                  ? country.name.common.slice(0, 15) + "..."
                  : country.name.common}
              </p>
              <p className="text-txt-l dark:text-txt-d font-semibold">
                Population:{" "}
                <span className="text-txt-l dark:text-txt-d font-medium">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="text-txt-l dark:text-txt-d font-semibold">
                Region:{" "}
                <span className="text-txt-l dark:text-txt-d font-medium">
                  {country.region}
                </span>
              </p>
              <p className="text-txt-l dark:text-txt-d font-semibold">
                Capital:{" "}
                <span className="text-txt-l dark:text-txt-d font-medium">
                  {country.capital}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </article>
    </>
  )
}

export default CountryDisplay
