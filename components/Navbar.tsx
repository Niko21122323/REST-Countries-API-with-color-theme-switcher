"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { IoMdMoon } from "react-icons/io"
import { IoSunny } from "react-icons/io5"

import { useTheme } from "next-themes"

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <header className="bg-accent-l dark:bg-accent-d h-20 px-10 md:px-32 drop-shadow-xl">
      <nav className="flex justify-between items-center h-full">
        <Link
          href="/"
          className="text-txt-l dark:text-txt-d font-extrabold text-lg"
        >
          Where in the world?
        </Link>
        <button
          className="text-txt-l dark:text-txt-d font-extrabold text-lg"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light")
          }}
        >
          {theme === "light" ? (
            <span className="flex items-center gap-3">
              <IoSunny />
              Light Mode
            </span>
          ) : (
            <span className="flex items-center gap-3">
              <IoMdMoon /> Dark Mode
            </span>
          )}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
