import Image from 'next/image';
import Link from 'next/link';
import kayakImage from '@/assets/kayak.jpg';


export default function Experiences() {
  const activities = [
    {
      title: "Cave Dancing",
      image: "https://ik.imagekit.io/pqgw24nd3/IMG_0419.jpg?updatedAt=1746471971441",
      description: "Experience the magic of our natural cave venue where you can dance and celebrate. The unique acoustics and ambiance create an unforgettable atmosphere.",
      highlights: ["Live DJ sessions", "Natural acoustics", "Unique atmosphere"]
    },
    {
      title: "Boat Tours",
      image: "https://ik.imagekit.io/pqgw24nd3/IMG_0479.jpg?updatedAt=1746472131940",
      description: "Cruise around the pristine lake waters with our comfortable boats. Enjoy scenic views and discover hidden spots around the lake.",
      highlights: ["Guided tours available", "Scenic lake views", "Multiple departure times"]
    },
    {
      title: "Outdoor Chill Lounge",
      image: "https://ik.imagekit.io/pqgw24nd3/IMG_2623.jpg?updatedAt=1748776843615",
      description: "Relax in our outdoor lounge area with comfortable seating and refreshing drinks. Perfect for unwinding while enjoying nature.",
      highlights: ["Premium cocktails", "Comfortable seating", "Natural surroundings"]
    },
    {
      title: "Lakeside Fire Pit",
      image: "https://ik.imagekit.io/pqgw24nd3/IMG_2621.jpg?updatedAt=1748776523128",
      description: "Gather around our cozy fire pit by the lake for an intimate evening experience. Perfect for relaxation and socializing under the stars.",
      highlights: ["Lakeside location", "Evening ambiance", "Social gathering spot"]
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
            Our concierge team can help customize your perfect day - whether you&apos;re seeking 
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