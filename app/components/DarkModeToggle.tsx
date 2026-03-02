'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const hasDarkClass = document.documentElement.classList.contains('dark')

    if (savedTheme === 'dark' || hasDarkClass) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
      return
    }

    document.documentElement.classList.remove('dark')
    setIsDark(false)
  }, [])

  const toggleTheme = () => {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)

    document.documentElement.classList.toggle('dark', nextIsDark)
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light')
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Tema değiştir"
      title="Tema değiştir"
      className="group relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200/70 bg-white/80 text-lg shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-xl dark:border-zinc-700 dark:bg-zinc-900/80"
    >
      <span className="transition-transform duration-300 group-hover:rotate-12">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  )
}
