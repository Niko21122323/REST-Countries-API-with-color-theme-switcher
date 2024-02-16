import { getCountryData } from "@/api/countriesData"
import AllCountries from "@/components/AllCountries"

export default function Home() {
  const data = getCountryData()

  return (
    <main className="p-14 md:px-28 md:py-20 h-full">
      <AllCountries />
    </main>
  )
}
