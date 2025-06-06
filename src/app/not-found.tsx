import Mybutton from "@/components/button/button"

export default function NotFound() {
    return (
      <div className="bg-[#fff] min-h-screen">
        <main className="flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <Mybutton bDetail={'Go back'} showIcon={false} bgColor={true}/> */}
            </div>
          </div>
        </main>
      </div>
    )
  }
