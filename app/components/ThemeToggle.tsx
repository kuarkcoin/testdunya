'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme: Theme = stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light'

      document.documentElement.classList.toggle('dark', initialTheme === 'dark')
      setTheme(initialTheme)
    } catch {
      setTheme('light')
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    localStorage.setItem('theme', nextTheme)
  }

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Tema değiştir"
      title="Tema değiştir"
      className="fixed top-4 right-4 z-50 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-100 bg-white/70 border border-zinc-200 shadow-md backdrop-blur-md dark:bg-zinc-900/60 dark:border-zinc-700 dark:shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-[0_0_25px_rgba(161,161,170,0.18)] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))] focus:ring-offset-2 focus:ring-offset-[rgb(var(--bg))]"
    >
      <span className="text-base leading-none transition-transform duration-300 hover:rotate-12">{isDark ? '☀️' : '🌙'}</span>
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
