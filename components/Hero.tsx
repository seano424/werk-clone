import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="card grid gap-3 lg:pt-28">
      <h1 className="h1 tracking-tighter">
        Async first collaboration for remote teams.
      </h1>
      <h1 className="h1 text-green">
        {' '}
        Async Records. Live Voice. Chat. Task. HyperDocs. And more.
      </h1>
      <div className="flex justify-center my-2">
        <svg
          width="250"
          height="54"
          viewBox="0 0 250 54"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g transform="translate(-130.000000, -73.000000)">
              <g transform="translate(130.000000, 73.000000)">
                <rect
                  stroke="#EA532A"
                  strokeWidth="2"
                  fill="#FFFFFF"
                  x="0.5"
                  y="0.5"
                  width="249"
                  height="53"
                  rx="10"
                ></rect>
                <text
                  fontFamily="Helvetica-Bold, Helvetica"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#EA532A"
                >
                  <tspan x="53" y="20">
                    PRODUCT HUNT
                  </tspan>
                </text>
                <text
                  fontFamily="Helvetica-Bold, Helvetica"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#EA532A"
                >
                  <tspan x="52" y="40">
                    #3 Product of the Day
                  </tspan>
                </text>

                <g transform="translate(17.000000, 13.000000)">
                  <path
                    d="M4.33,16.364 L0.328,24.9 C0.202,25.158 0.335,25.32 0.755,25.24 L4.013,24.532 C4.07755234,24.5094173 4.14861896,24.5149617 4.20888789,24.5472826 C4.26915683,24.5796035 4.31309537,24.6357337 4.33,24.702 L5.797,27.709 C5.937,28.033 6.099,28.099 6.225,27.842 L10.485,18.908 L4.33,16.364 Z M16.67,16.364 L20.672,24.9 C20.805,25.158 20.665,25.32 20.245,25.24 L16.987,24.532 C16.9224353,24.5100506 16.8516562,24.5158869 16.7915589,24.5481157 C16.7314616,24.5803445 16.687439,24.6360738 16.67,24.702 L15.203,27.709 C15.063,28.033 14.908,28.099 14.775,27.842 L10.515,18.908 L16.67,16.364 Z"
                    fill="#DE7818"
                    fillRule="nonzero"
                  ></path>
                  <path
                    d="M9.298,21.392 C9.298,21.399 9.284,21.392 9.269,21.392 C7.03578049,21.1442528 4.94208026,20.1826237 3.299,18.65 C3.291,18.642 3.269,18.635 3.276,18.627 L3.46,18.237 C3.468,18.222 3.482,18.259 3.49,18.267 C5.067,19.733 7.257,20.655 9.497,20.927 C9.505,20.927 9.52,20.927 9.52,20.935 L9.298,21.392 Z"
                    fill="#B35454"
                  ></path>
                  <circle
                    fill="#A54E24"
                    cx="10.5"
                    cy="10.489"
                    r="10.489"
                  ></circle>
                  <circle
                    fill="#A76236"
                    cx="10.5"
                    cy="10.489"
                    r="9.045"
                  ></circle>
                  <circle
                    fill="#BD6E3C"
                    cx="10.75"
                    cy="10.75"
                    r="8.75"
                  ></circle>
                  <path
                    d="M9.35,11.404 L10.387,11.404 C11.207,11.404 11.705,11.802 11.705,12.452 C11.705,13.085 11.178,13.519 10.416,13.519 C9.602,13.519 9.08,13.12 9.051,12.476 L7,12.476 C7.076,14.134 8.406,15.212 10.38,15.212 C12.45,15.212 13.89,14.146 13.89,12.616 C13.89,11.526 13.146,10.759 11.98,10.636 L11.98,10.525 C12.93,10.349 13.58,9.581 13.58,8.609 C13.58,7.243 12.291,6.3 10.416,6.3 C8.453,6.3 7.188,7.355 7.158,9.007 L9.11,9.007 C9.134,8.345 9.632,7.905 10.37,7.905 C11.12,7.905 11.583,8.286 11.583,8.902 C11.583,9.517 11.108,9.922 10.388,9.922 L9.35,9.922 L9.35,11.404 Z"
                    fill="#FFC07A"
                  ></path>
                  <path
                    d="M12.97,3.089 C16.3260745,3.89113363 18.7213186,6.85251327 18.8041673,10.3021205 C18.8870161,13.7517278 16.6366978,16.8246793 13.323,17.787 C15.358,16.232 16.707,13.578 16.707,10.563 C16.707,7.379 15.203,4.6 12.969,3.089 L12.97,3.089 Z"
                    fillOpacity="0.2"
                    fill="#FFFFFF"
                    opacity="0.618"
                  ></path>
                  <path
                    d="M11.702,21.392 C11.709,21.399 11.724,21.392 11.731,21.392 C14.024,21.104 16.131,20.182 17.717,18.664 C17.724,18.657 17.746,18.65 17.739,18.642 L17.554,18.252 C17.547,18.237 17.532,18.274 17.524,18.281 C15.947,19.748 13.751,20.655 11.503,20.927 C11.495,20.927 11.48,20.927 11.48,20.935 L11.702,21.392 Z"
                    fill="#B35454"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <Link href="/">
        <a className="button h3 bg-green text-dark text-center w-5/6 mx-auto rounded-2xl">
          Get started free
        </a>
      </Link>
      <p className="p text-center">1000+ team using Werk already!</p>
      <div className="p-8 relative">
        <div className="relative h-40 w-full">
          <Image
            src="https://www.usewerk.com/images/Group-42397-p-800.png"
            alt="Video Image"
            layout="fill"
            className="object-cover"
          />
        </div>
        <div className="inset-0 absolute flex justify-center items-center">
          <Link href="/">
            <a className="button bg-green/80 font-bold text-lg px-5">
              Watch the film
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
