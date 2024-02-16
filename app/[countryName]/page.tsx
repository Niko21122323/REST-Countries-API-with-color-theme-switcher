import { baseUrl } from "@/api/countriesData"
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

const SingleCountry = async ({
  params,
}: {
  params: { countryName: string }
}) => {
  const country = params.countryName
  console.log(country, "COUNTRY")

  async function getDetails() {
    const res = await fetch(`${baseUrl}name/${country}`)
    if (!res.ok) {
      throw new Error("Failed to fetch!")
    }
    return res.json()
  }

  const [details] = await getDetails()

  let commonName: string | null = null
  let currName: string | null = null

  const languages = Object.values(details.languages).join(", ")

  for (const key in details.name.nativeName) {
    if (details.name.nativeName.hasOwnProperty(key)) {
      const value = details.name.nativeName[key]
      if (value.common) {
        commonName = value.common
        break
      }
    }
  }

  for (const key in details.currencies) {
    if (details.currencies.hasOwnProperty(key)) {
      const value = details.currencies[key]
      if (value.name) {
        currName = value.name
      }
      break
    }
  }

  const infoArray = [
    { name: "Native Name: ", info: commonName },
    { name: "Top Level Domain: ", info: details.tld },
    { name: "Population: ", info: details.population.toLocaleString() },
    { name: "Currencies: ", info: currName },
    { name: "Region: ", info: details.region },
    { name: "Languages: ", info: languages },
    { name: "Sub Region: ", info: details.subregion },
    { name: "Capital: ", info: details.capital },
  ]

  const reg = details.region
  console.log(reg, "REGION")

  return (
    <section className="p-14 md:px-28 md:py-10 flex flex-col items-center lg:items-start">
      <Link
        href="/"
        className="bg-accent-l dark:bg-accent-d text-txt-l dark:text-txt-d p-2 rounded-lg flex items-center w-40 justify-center gap-4 drop-shadow-xl"
      >
        <FaArrowLeft className="text-txt-l dark:text-txt-d" /> Back
      </Link>
      <article className="flex items-center flex-col lg:flex-row gap-28 w-full mt-20">
        <Image
          src={details.flags.png}
          alt={details.name.official}
          width={600}
          height={500}
          priority
          className="rounded-xl"
        />
        <div className="flex flex-col gap-6">
          <h3 className="text-txt-l dark:text-txt-d font-extrabold text-2xl">
            {details.name.common}
          </h3>
          <div className="grid grid-cols-2 gap-2 gap-x-10">
            {infoArray.map((infoData, index) => (
              <p key={index} className="text-txt-l dark:text-txt-d font-light">
                <span className="text-txt-l dark:text-txt-d font-bold mr-1">
                  {infoData.name}
                </span>
                {infoData.info}
              </p>
            ))}
          </div>
          <div className="flex items-start flex-col lg:flex-row lg:items-center gap-4 mt-3">
            <p className="font-bold whitespace-nowrap text-txt-l dark:text-txt-d">
              Border Countries:
            </p>
            <div className="flex items-center gap-2">
              {details.borders && details.borders.length > 0 ? (
                details.borders.map((countryCode: string, index: number) => (
                  <p
                    key={index}
                    className="text-txt-l dark:text-txt-d font-medium bg-accent-l dark:bg-accent-d px-3 py-1 rounded-lg drop-shadow-lg"
                  >
                    {countryCode}
                  </p>
                ))
              ) : (
                <p>This country has no borders</p>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingleCountry
