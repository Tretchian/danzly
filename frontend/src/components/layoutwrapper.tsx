'use client'

import { usePathname } from 'next/navigation'
import Header from './header'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Массив путей, на которых нужно скрыть Header
  const hiddenHeaderPaths = ['/lk', '/auto'] // добавь сюда нужные пути
  const hideHeader = hiddenHeaderPaths.includes(pathname)

  return (
    <>
      {!hideHeader && <Header />}
      {children}
    </>
  )
}