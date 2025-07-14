import { negra } from '@/assets';
import Image from 'next/image';
import BorderMagic from '../button/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  const footerNavs = [
    {
      label: "SITEMAP",
      items: [
        {
          href: '/',
          name: 'Overview'
        },
        {
          href: '/room',
          name: 'Rooms & Suites'
        },
        {
          href: '/dinning',
          name: 'Dining'
        },
        {
          href: '/gallery',
          name: 'Gallery'
        },
        {
          href: '/experience',
          name: 'Experience'
        },
      ],
    },
    {
      label: "SOCIALS",
      items: [
        {
          href: '/social/instagram',
          name: 'Instagram'
        },
        {
          href: '/social/facebook',
          name: 'Facebook'
        },
        {
          href: '/social/tiktok',
          name: 'TikTok'
        },
        {
          href: '/social/youtube',
          name: 'Youtube'
        },
      ],
    },
    {
      label: "Location",
      items: [
        {
          href: '/location',
          name: 'Google Maps'
        },
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-gray-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <Image 
              src={negra} 
              alt='Negra Hotel' 
              className='w-32 h-32 object-contain hover:scale-105 transition-transform duration-300'
            />
            <p className="mt-4 text-sm text-gray-400">
              Luxury redefined. Experience unparalleled comfort in the heart of the city.
            </p>
          </div>

          {/* Navigation Sections */}
          {footerNavs.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-amber-500 pl-3">
                {section.label}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li key={index}>
                    {item.href.startsWith('/') ? (
                      <Link
                        href={item.href}
                        className={`hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group ${
                          pathname === item.href ? 'text-amber-400' : 'text-gray-300'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg 
                          className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="hover:text-amber-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span>{item.name}</span>
                        <svg 
                          className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              {/* Newsletter Form in Location Section */}
              {section.label === "Location" && (
                <div className="mt-6 space-y-4">
                  <p className="text-sm text-gray-400">
                    Eastern Province, La Perla Negra, Lake Muhazi.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <label className="block text-sm font-medium text-gray-300">
                      Join our newsletter
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none transition-all"
                      />
                      <BorderMagic 
                        buttonDetail='Subscribe' 
                        className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 py-2 rounded-lg transition-colors duration-300"
                      />
                    </div>
                  </form>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {[
                ['M8.115 22.003c8.094 0 12.522-6.723 12.522-12.522 0-.19 0-.38-.007-.569.858-.622 1.604-1.4 2.195-2.285-.786.35-1.63.585-2.518.69.901-.543 1.594-1.404 1.921-2.429-.845.503-1.78.866-2.771 1.061a4.321 4.321 0 00-7.362 3.945 12.26 12.26 0 01-8.91-4.535 4.31 4.31 0 001.336 5.768 4.28 4.28 0 01-1.956-.542v.054a4.32 4.32 0 003.462 4.235 4.32 4.32 0 01-1.95.074 4.32 4.32 0 004.035 3 8.655 8.655 0 01-5.365 1.85c-.347 0-.689-.02-1.026-.06a12.192 12.192 0 006.627 1.947', 'Twitter'],
                ['M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0', 'Facebook'],
                ['M12.186 8.072c2.67 0 2.987.01 4.042.058 1.054.05 1.79.218 2.427.465.66.254 1.216.622 1.755 1.162.54.54.908 1.095 1.163 1.756.247.637.415 1.373.465 2.427.048 1.054.058 1.37.058 4.041 0 2.67-.01 2.987-.058 4.042-.05 1.054-.218 1.79-.465 2.427-.254.66-.622 1.216-1.162 1.755-.54.54-1.095.908-1.756 1.163-.637.247-1.373.415-2.427.465-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.042-.058-1.054-.05-1.79-.218-2.427-.465-.66-.254-1.216-.622-1.755-1.162-.54-.54-.908-1.095-1.163-1.756-.247-.637-.415-1.373-.465-2.427-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.987.058-4.042.05-1.054.218-1.79.465-2.427.254-.66.622-1.216 1.162-1.755.54-.54 1.095-.908 1.756-1.163.637-.247 1.373-.415 2.427-.465 1.054-.048 1.37-.058 4.041-.058zm0-2.352c-2.716 0-3.057.012-4.123.06-1.634.075-2.77.349-3.74.744-.985.403-1.82.944-2.655 1.78-.835.835-1.376 1.67-1.78 2.655-.395.97-.67 2.106-.744 3.74-.048 1.066-.06 1.407-.06 4.123 0 2.716.012 3.057.06 4.123.075 1.634.349 2.77.744 3.74.403.985.944 1.82 1.78 2.655.835.835 1.67 1.376 2.655 1.78.97.395 2.106.67 3.74.744 1.066.048 1.407.06 4.123.06 2.716 0 3.057-.012 4.123-.06 1.634-.075 2.77-.349 3.74-.744.985-.403 1.82-.944 2.655-1.78.835-.835 1.376-1.67 1.78-2.655.395-.97.67-2.106.744-3.74.048-1.066.06-1.407.06-4.123 0-2.716-.012-3.057-.06-4.123-.075-1.634-.349-2.77-.744-3.74-.403-.985-.944-1.82-1.78-2.655-.835-.835-1.67-1.376-2.655-1.78-.97-.395-2.106-.67-3.74-.744-1.066-.048-1.407-.06-4.123-.06zm0 6.225c-2.648 0-4.8 2.152-4.8 4.8s2.152 4.8 4.8 4.8 4.8-2.152 4.8-4.8-2.152-4.8-4.8-4.8zm0 7.918c-1.71 0-3.1-1.39-3.1-3.1s1.39-3.1 3.1-3.1 3.1 1.39 3.1 3.1-1.39 3.1-3.1 3.1zM18.406 4.155c0 .63-.51 1.14-1.14 1.14-.63 0-1.14-.51-1.14-1.14 0-.63.51-1.14 1.14-1.14.63 0 1.14.51 1.14 1.14z', 'Instagram']
              ].map(([path, name], idx) => (
                <Link
                  key={idx}
                  href={`/social/${name.toLowerCase()}`}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d={path} />
                  </svg>
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Negra Hotel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}