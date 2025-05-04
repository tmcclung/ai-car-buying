import Link from "next/link"
import { Car, MessageSquare, Heart, User, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CarNegotiationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full bg-white border-b py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">TED Car Buying Inc.</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex items-center rounded-full text-sm font-medium">
              <Heart className="mr-2 h-4 w-4" />
              Saved Cars
            </Button>
            <div className="relative">
              <Avatar>
                <AvatarImage src="/placeholder.svg?key=user" alt="User" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center mb-6 text-sm">
            <Link href="/dashboard" className="text-gray-500 hover:text-gray-900">
              Dashboard
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <Link href="/saved-cars" className="text-gray-500 hover:text-gray-900">
              Saved Cars
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span>Tesla Model Y</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Car Details */}
            <div className="lg:col-span-1">
              <Card className="border rounded-xl overflow-hidden sticky top-24">
                <div className="relative">
                  <img src="/placeholder.svg?key=bygy0" alt="Tesla Model Y" className="w-full h-48 object-cover" />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 rounded-full h-8 w-8 p-0 bg-white/80"
                  >
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                  </Button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-semibold text-xl">Tesla Model Y</h2>
                      <p className="text-gray-500">Long Range AWD</p>
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">Negotiating</div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">MSRP</span>
                      <span className="font-medium">$54,990</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Target Price</span>
                      <span className="font-medium text-blue-600">$51,750</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Current Offer</span>
                      <span className="font-medium text-green-600">$52,990</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Potential Savings</span>
                      <span className="font-medium text-green-600">$2,000</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-medium mb-2">Key Features</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>330 mile range</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>AWD Dual Motor</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Autopilot</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-blue-600"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Premium Interior</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            {/* AI Negotiator Chat */}
            <div className="lg:col-span-2">
              <Card className="border rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">AI Negotiator</span>
                  </div>
                  <div className="text-sm text-gray-500">Negotiation in progress</div>
                </div>
                <div className="p-4 h-[600px] overflow-y-auto flex flex-col gap-4">
                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">AI Negotiator</span>
                        <span className="text-xs text-gray-500">May 19, 10:32 AM</span>
                      </div>
                      <p className="text-sm">
                        I've started negotiations for your Tesla Model Y. Based on current market data, I've set a
                        target price of $51,750, which is $3,240 below MSRP.
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                      <p className="text-sm">That sounds great. What's your strategy for negotiating with Tesla?</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-1">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">AI Negotiator</span>
                        <span className="text-xs text-gray-500">May 19, 10:35 AM</span>
                      </div>
                      <p className="text-sm">
                        Tesla doesn't typically negotiate on price like traditional dealerships, but I'm using several
                        approaches:
                      </p>
                      <ol className="list-decimal text-sm pl-4 space-y-1 mt-1">
                        <li>Comparing inventory across multiple Tesla locations to find the best-priced vehicle</li>
                        <li>Looking for demo vehicles or inventory models that may be discounted</li>
                        <li>Checking for any end-of-quarter incentives Tesla might be offering</li>
                        <li>Exploring whether adding or removing certain options affects the final price</li>
                      </ol>
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">AI Negotiator</span>
                        <span className="text-xs text-gray-500">May 19, 3:45 PM</span>
                      </div>
                      <p className="text-sm">
                        Update: I've found a Tesla Model Y Long Range AWD with your exact specifications at the Fremont
                        delivery center. They have a demo model with only 300 miles that they're willing to sell for
                        $52,990. This is $2,000 below MSRP but still $1,240 above our target price.
                      </p>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                      <p className="text-sm">
                        That's not bad! Is there any way to get closer to our target price? Maybe if we remove some
                        options or look at different colors?
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-1">
                      <User className="h-4 w-4 text-gray-600" />
                    </div>
                  </div>

                  {/* AI Message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">AI Negotiator</span>
                        <span className="text-xs text-gray-500">Today, 9:15 AM</span>
                      </div>
                      <p className="text-sm">
                        Good thinking! I've analyzed the options and found that switching from the Pearl White to the
                        standard White color would save $1,000, bringing the price down to $51,990 - just $240 above our
                        target.
                      </p>
                      <p className="text-sm mt-2">
                        Additionally, I've discovered that Tesla is offering a $500 discount if you take delivery before
                        the end of the month. Would you be able to accept delivery within the next 10 days?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input placeholder="Type your message..." className="rounded-full" />
                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-10 w-10 p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Car className="h-6 w-6 text-blue-600 mr-2" />
            <span className="font-bold">TED Car Buying Inc.</span>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
            <Link href="#" className="hover:underline">
              © 2025 TED Car Buying Inc. All rights reserved.
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Input({ className, ...props }: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
