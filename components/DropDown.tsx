"use client"

import Link from "next/link"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const DropDown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const regions = ["Europe", "Asia", "Africa", "America", "Oceania"]

  return (
    <div className="relative">
      <button
        className="flex items-center gap-14 text-txt-l dark:text-txt-d drop-shadow-xl bg-accent-l dark:bg-accent-d h-14 px-6 rounded-lg"
        onClick={handleDropdown}
      >
        Find by Region <IoIosArrowDown />
      </button>
      {isDropdownOpen && (
        <div className="bg-accent-l dark:bg-accent-d absolute w-full flex flex-col z-30 items-start mt-2 gap-3 p-6 rounded-lg text-dark-m-text drop-shadow-xl">
          {regions.map((region, id) => (
            <Link href={`/region/${region}`} key={id}>
              {region}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
export default DropDown
