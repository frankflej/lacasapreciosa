
import Image from 'next/image';
import Link from 'next/link';
import kayakImage from '@/assets/kayak.jpg';
import poolImage from '@/assets/pool.png';
import volleyballImage from '@/assets/volley.jpg';
import fireplaceImage from '@/assets/fire.jpg';

export default function Experiences() {
  const activities = [
    {
      title: "Lake Kayaking",
      image: kayakImage,
      description: "Explore crystal-clear waters with our guided kayak tours. Suitable for all skill levels, discover hidden coves and marine life.",
      highlights: ["Morning & sunset tours", "Equipment provided", "Family-friendly"]
    },
    {
      title: "Infinity Pool",
      image: poolImage,
      description: "Unwind in our stunning Lake-view infinity pool featuring swim-up bar and private cabanas.",
      highlights: ["24-hour access", "Poolside service", "Adult-only section"]
    },
    {
      title: "Beach Volleyball",
      image: volleyballImage,
      description: "Join daily tournaments or casual games on our pristine white sand courts.",
      highlights: ["Professional coaching", "Night lighting", "Equipment rental"]
    },
    {
      title: "Beachside Fire Pit",
      image: fireplaceImage,
      description: "Evening gatherings around our artisan fire pits with s'mores kits and cocktail service.",
      highlights: ["Private bookings available", "Live music nights", "Sunset sessions"]
    }
  ];

  return (
    <div className='px-4 sm:px-8 lg:px-20 py-12 font-serif text-black bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Hero Section */}
        <div className='mb-16'>
          <h1 className='text-4xl font-bold mb-6 flex items-start'>
            <span className='w-16 h-1 mr-4 bg-orange-400 block mt-4'></span>
            Coastal Experiences
          </h1>
          <div className='relative h-96 rounded-xl overflow-hidden'>
  <Image
    src={kayakImage}
    alt='Beach Activities'
    fill
    className='object-cover h-96 w-full'
    priority
  />
  <div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent'>
    <p className='text-2xl text-white font-light'>
      Where the Lake Meets Adventure
    </p>
  </div>
</div>
        </div>

        {/* Activities Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
          {activities.map((activity, index) => (
            <div 
              key={index}
              className='group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
            >
              <div className='relative h-64'>
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <div className='bg-white p-6'>
                <h3 className='text-2xl font-semibold mb-3 text-gray-800'>
                  {activity.title}
                </h3>
                <p className='text-gray-600 mb-4'>{activity.description}</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {activity.highlights.map((highlight, idx) => (
                    <span 
                      key={idx}
                      className='px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm'
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <button className='text-orange-500 hover:text-orange-600 font-medium'>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-12'>
          <h2 className='text-3xl font-bold mb-4'>Plan Your Beach Escape</h2>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Our concierge team can help customize your perfect day - whether you're seeking 
            adventure-packed activities or pure relaxation by the waves.
          </p>
          <Link
            href='/contact'
            className='bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold inline-block transition-colors duration-300'
          >
            Schedule Experiences
          </Link>
        </div>

        {/* Back Link */}
        <div className='mt-12 text-center'>
          <Link href="/" className='text-orange-500 hover:text-orange-600'>
            ← Back to Overview
          </Link>
        </div>
      </div>
    </div>
  );
}