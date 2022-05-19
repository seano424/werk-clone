import Layout from '@/components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout title="werk">
      <div className="page-padding container">
        <h1 className="h1">Make friends.</h1>
        <h1 className="h1">Create activities.</h1>
        
        <p className='p py-base'>
          Venn means friend in Norwegian. We want to make the world more social
          even without your phone.
        </p>
        <div className='h-[3000px] bg-purple-500/80 p-5 rounded'>I am longgggg...</div>
      </div>
    </Layout>
  )
}

export default Home
