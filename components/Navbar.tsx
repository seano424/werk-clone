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
    <nav className='select-none'>
      <div className="fixed h-20 inset-0 text-light-gray z-20 flex container mx-auto mt-2">
        <div className="flex justify-between w-full items-center bg-dark container rounded-2xl px-4">
          <Link href="/" className="flex items-center">
            <a className="flex items-center gap-2 h1">
              <span className="max-w-sm">{title}</span>
              <span className="text-yellow-200">.</span>
            </a>
          </Link>
          <ul className="items-center gap-4 hidden lg:flex">
            <li>About</li>
            <li>News</li>
            <li className="border border-black px-4 py-2 rounded-full">
              Get the app
            </li>
          </ul>
          <ul className='flex lg:hidden'>
            <MenuIcon
              onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
              className="text-white w-7 cursor-pointer"
            />
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {isMobileNavigationOpen && (
          <motion.div
            initial={{ opacity: 0, y: -400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -400 }}
            className="fixed right-4 md:right-12 top-28 z-10"
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
                  <a className="button bg-green">Get Started</a>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
