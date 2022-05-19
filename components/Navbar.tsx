import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  title?: string
}

export default function Navbar(props: Props) {
  const { title } = props

  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false)

  return (
    <>
      <nav className="fixed w-full h-20 inset-0 mt-2 max-w-xs md:max-w-3xl mx-auto bg-black flex justify-between items-center px-10 rounded-2xl text-white z-20">
        <ul className="flex items-center">
          <li className="flex items-center gap-2 text-4xl font-extrabold">
            <span className="max-w-sm">{title}</span>
            <span className="text-yellow-200">.</span>
          </li>
        </ul>
        <ul className="items-center gap-4 hidden lg:flex">
          <li>About</li>
          <li>News</li>
          <li className="border border-black px-4 py-2 rounded-full">
            Get the app
          </li>
        </ul>
        <ul>
          <MenuIcon
            onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
            className="text-white w-7 cursor-pointer"
          />
        </ul>
      </nav>
      <AnimatePresence>
        {isMobileNavigationOpen && (
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            className="fixed right-4 top-28 z-10"
          >
            <div className="flex flex-col gap-2 items-end">
              <div className="flex">
                <Link href="/">
                  <a className="button -mr-2">Features</a>
                </Link>
                <Link href="/">
                  <a className="button -mr-2">Pricing</a>
                </Link>
                <Link href="/">
                  <a className="button">Download</a>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <a className="button -mr-2">Roadmap</a>
                </Link>
                <Link href="/">
                  <a className="button">Blog</a>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <a className="button">Login</a>
                </Link>
              </div>
              <div className="flex">
                <Link href="/">
                  <a className="button">Get Started</a>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
