import Link from "next/link";
import Image from "next/image";
import HomepageCarousel from "@/components/HomepageCarousel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-rose-200 p-4">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-placeholder.png"
              alt="NBCC Logo"
              width={32}
              height={32}
            />
            <span className="text-2xl font-bold">nbcc</span>
          </div>
          <div className="space-x-4 text-sm">
            <Link href="#" className="text-black hover:text-gray-700">
              Our Centres
            </Link>
            <Link href="#" className="text-black hover:text-gray-700">
              What's On
            </Link>
            <Link href="#" className="text-black hover:text-gray-700">
              Information and Support
            </Link>
            <Link href="#" className="text-black hover:text-gray-700">
              About Us
            </Link>
            <Link href="#" className="text-black hover:text-gray-700">
              Contact Us
            </Link>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-b from-blue-100 to-white py-12 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-16 bg-white opacity-50"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
          ></div>
          <HomepageCarousel />
        </section>

        {/* Welcome section */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">
                Welcome to North Bristol Children's Centres
              </h2>
              <p>
                All families in Bristol are entitled to Family Support Services.
                On this website, we put you in touch with the Children's Centre
                that serves your area. You can find information on groups and
                activities that you can become a regular part of, or pop in now
                and again.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Who we are</h2>
                <p>
                  We operate in an exciting partnership between well-established
                  Children's Centre lead organisations, working together to
                  support families across North Bristol.
                </p>
              </div>
              <Image
                src="https://northbristolcc.org.uk/wp-content/uploads/2019/11/bristol-children-blocks.jpg"
                alt="Family outdoors"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="bg-teal-100 shadow rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Register with a Children's Centre
            </h2>
            <button className="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded">
              Click Here
            </button>
          </div>
        </section>

        {/* Social media posts */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">
            News From Our Social Media
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white shadow rounded-lg p-2">
                <Image
                  src={
                    "https://northbristolcc.org.uk/wp-content/uploads/2019/11/child-at-nursery.jpg"
                  }
                  alt={`Social media post ${item}`}
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        {/* News section */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">News from our Website</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Dads and Male Carers' Services", date: "Sept 3, 2024" },
              { title: "Half Term Events", date: "Oct 15, 2024" },
              {
                title: "Autumn 2023 Groups and Events Timetable",
                date: "Aug 20, 2024",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow rounded-lg p-4">
                <Image
                  src="https://northbristolcc.org.uk/wp-content/uploads/2019/04/kid-1241817_1920.jpg"
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Groups and Activities section */}
        <section className="py-12 max-w-7xl mx-auto px-4">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="font-bold text-lg mb-4">Groups and Activities</h3>
            <p className="mb-4">
              Our Children's Centres offer a comprehensive programme of events
              and activities, with groups to support through all stages of your
              child's early years and your journey as a parent.
            </p>
            <button className="bg-rose-300 text-black hover:bg-rose-400 px-4 py-2 rounded">
              View Timetable
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-rose-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:underline">
                    Our Centres
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    What's On
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Information and Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p>123 Bristol Street</p>
              <p>Bristol, BS1 2AB</p>
              <p>Phone: 0117 123 4567</p>
              <p>Email: info@nbcc.org.uk</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-black hover:text-gray-700">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-black hover:text-gray-700">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-8 text-center">
            <p>
              &copy; 2024 North Bristol Children's Centres. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
