import { baseUrl } from "@/api/countriesData"
import CountryDisplay from "@/components/CountryDisplay"

const CountryRegion = async ({
  params,
}: {
  params: { regionName: string }
}) => {
  const region = params.regionName

  async function getRegion() {
    const res = await fetch(`${baseUrl}region/${region}`)
    if (!res.ok) {
      throw new Error("Failed to fetch!")
    }
    return res.json()
  }

  const regions = await getRegion()

  return (
    <section className="p-14 md:px-28 md:py-20 h-full">
      <CountryDisplay countries={regions} />
    </section>
  )
}
export default CountryRegion
