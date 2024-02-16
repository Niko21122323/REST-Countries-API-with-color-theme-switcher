export const baseUrl = "https://restcountries.com/v3.1/"

export async function getCountryData() {
  const res = await fetch(`${baseUrl}all`)
  if (!res.ok) {
    throw new Error("Failed to fetch!")
  }
  return res.json()
}

export interface Country {
  name: {
    common: string
    official: string
  }
  flags: {
    png: string
  }
  population: number
  region: string
  capital: string
}
