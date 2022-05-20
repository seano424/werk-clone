import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { NextPage } from 'next'
import { ArrowDownIcon } from '@heroicons/react/solid'
import { scroller, Element } from 'react-scroll'

import Layout from '@/components/Layout'
import Hero from '@/components/Hero'

const Home: NextPage = () => {
  useEffect(() => {
    console.log('Rendering')

    return () => console.log('Cleaning up')
  }, [])

  const scrollTo = (name: string) => {
    scroller.scrollTo(name, {
      duration: 1200,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  return (
    <Layout title="werk">
      <main className="page-padding container mx-auto">
        <Hero />

        <section className="card bg-white text-dark grid gap-3">
          <h2 className="h2">Everything you need for the remote work.</h2>
          <h2 className="h2 text-medium-gray">For remote, by remote!</h2>
          <p className="p">
            Werk is designed and developed to help you in your remote or hybrid
            working journey. You can collaborate and communicate in Werk
            seamlessly, easily.
          </p>
        </section>

        <section className="card gri gap-3">
          <h2 className="h2">We know you are struggling with</h2>
          <div className="card bg-dark-gray my-base">
            <div className="bg-dark w-max p-4 rounded-3xl mb-8">
              <span className="h1">🤦‍♂️</span>
            </div>
            <h3 className="h3 mb-2">Zoom Fatigue</h3>
            <p className="p text-medium-gray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illum
              sed praesentium eligendi fuga repellat temporibus nam minima
              harum. Quisquam!
            </p>
          </div>
          <div className="card bg-dark-gray my-base">
            <div className="bg-dark w-max p-4 rounded-2xl mb-8">
              <span className="h1">😤</span>
            </div>
            <h3 className="h3 mb-2">Using too many tools</h3>
            <p className="p text-medium-gray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illum
              sed praesentium eligendi fuga repellat temporibus nam minima
              harum. Quisquam!
            </p>
          </div>
          <div className="card bg-dark-gray my-base">
            <div className="bg-dark w-max p-4 rounded-3xl mb-8">
              <span className="h1">💸</span>
            </div>
            <h3 className="h3 mb-2">Cost of the tools</h3>
            <p className="p text-medium-gray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id illum
              sed praesentium eligendi fuga repellat temporibus nam minima
              harum. Quisquam!
            </p>
          </div>
          <p className="text-center px-10 p text-light-gray">
            See how we are solving these and empower remote teams
          </p>

          <a
            onClick={() => scrollTo('next')}
            className="bg-dark-gray flex p-4 w-max rounded-2xl mx-auto my-4 cursor-pointer"
          >
            <ArrowDownIcon className="w-4" />
          </a>
        </section>

        <Element name="next" className="bg-white card my-4">
          <p className="p text-medium-gray text-2xl mb-2">Features.</p>
          <h2 className="h2 text-dark">Sneak peek to Werk.</h2>
        </Element>

        <section className="card my-4 bg-green text-dark grid gap-3">
          <h2 className="h2">Records</h2>
          <p className="text-medium-gray p">
            We know... Getting sync for every issue is hard.{' '}
            <span className="text-dark">
              But, you can asynchronously collaborate on Werk via Async Records
              feature!
            </span>
          </p>
          <div className="relative h-80 w-full">
            <Image
              src="https://www.usewerk.com/images/Group-42397-p-800.png"
              alt="Video Image"
              layout="fill"
              className="object-contain rounded-2xl"
            />
          </div>
          <Link href="/">
            <a className="button text-center h3 bg-dark text-light-gray mb-4">
              Get Started
            </a>
          </Link>
        </section>

        <section className="card my-4 bg-light-gray shadow-md text-dark grid gap-3">
          <h3 className="h3">Thread</h3>
          <p className="p">
            Never miss your convesation with thread chat. Also share files,
            hyperdocs and more.
          </p>
          <div className="relative h-80 w-full">
            <Image
              src="https://www.usewerk.com/images/91338fbb68728ace4b07a5c5b46d01b5.png"
              alt="Video Image"
              layout="fill"
              className="object-contain rounded-2xl"
            />
          </div>
        </section>

        <section className="card mt-4 bg-dark grid gap-3">
          <h3 className="h3 text-light-gray">Task Manager</h3>
          <p className="p text-green">
            Not only simplest ever, but also super customizable.
          </p>
          <p className="p text-medium-gray">
            Manage your tasks with Werk's task manager. Never miss your
            convesation with thread chat. Also share files, hyperdocs and more.
          </p>
          <div className="relative h-80 w-full">
            <Image
              src="https://www.usewerk.com/images/8782a714c044cbc069c958c86cbbbb86-p-1080.png"
              alt="Video Image"
              layout="fill"
              className="object-contain rounded-2xl"
            />
          </div>
        </section>

        <section className="card bg-green text-dark grid gap-3">
          <h2 className="h2">Voice Chat</h2>
          <p className="text-dark p">
            We know... Getting sync for every issue is hard.{' '}
            <span className="text-medium-gray">
              But, you can asynchronously collaborate on Werk via Async Records
              feature!
            </span>
          </p>
          <div className="relative h-80 w-full">
            <Image
              src="https://www.usewerk.com/images/Screen-Shot-2022-05-03-at-22.17-2-p-1080.png"
              alt="Video Image"
              layout="fill"
              className="object-contain rounded-2xl"
            />
          </div>
          <Link href="/">
            <a className="button text-center h3 bg-dark text-light-gray mb-4">
              Get Started
            </a>
          </Link>
        </section>

        <section className="bg-white card my-4">
          <p className="p text-medium-gray text-2xl mb-2">Is it over? No!</p>
          <h2 className="h2 text-dark">
            The lasts but not the leasts from Werk
          </h2>
        </section>

        <section className="card bg-dark grid gap-3">
          <h2 className="h2 text-green">Voice Chat</h2>
          <p className="text-light-gray p">
            We know... Getting sync for every issue is hard.{' '}
            <span className="text-medium-gray">
              But, you can asynchronously collaborate on Werk via Async Records
              feature!
            </span>
          </p>
          <div className="relative h-80 w-full">
            <Image
              src="https://www.usewerk.com/images/hyperdocssss-1.png"
              alt="Video Image"
              layout="fill"
              className="object-contain rounded-2xl"
            />
          </div>
        </section>

        <section className="card bg-light-gray text-dark grid gap-3">
          <h2 className="h2">Voice Chat</h2>
          <p className="p">
            We know... Getting sync for every issue is hard.{' '}
            <span className="text-medium-gray">
              But, you can asynchronously collaborate on Werk via Async Records
              feature!
            </span>
          </p>
          <div className="relative h-20 w-full">
            <Image
              src="https://www.usewerk.com/images/werk-downloads.png"
              alt="Video Image"
              layout="fill"
              className="object-contain rounded-2xl"
            />
          </div>
          <Link href="/">
            <a className="button text-center h3 border-2 border-dark mb-4">
              Go to Downloads
            </a>
          </Link>
        </section>
      </main>
    </Layout>
  )
}

export default Home
