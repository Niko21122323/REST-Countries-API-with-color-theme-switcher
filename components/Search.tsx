import React from "react"
import { FaMagnifyingGlass } from "react-icons/fa6"

interface SearchInputProps {
  onChange: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="flex items-center gap-6 bg-accent-l dark:bg-accent-d w-full md:w-5/12 h-14 rounded-lg drop-shadow-xl px-6">
      <FaMagnifyingGlass className="text-txt-l dark:text-txt-d" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent h-full w-full focus:outline-none focus:placeholder-transparent placeholder:text-txt-l placeholder:dark:text-txt-d"
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchInput
