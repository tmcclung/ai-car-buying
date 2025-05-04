import Link from "next/link"
import { Car, MessageSquare, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CarProfileOnboarding() {
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
            <div className="relative">
              <Avatar>
                <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <Car className="h-4 w-4 text-blue-600" />
              </div>
              <h1 className="text-2xl font-semibold">Create Your Car Purchase Profile</h1>
            </div>
            <p className="text-gray-500">
              Now let's focus on what you're looking for in your next vehicle. This will help us find the perfect match.
            </p>
          </div>

          <Card className="border rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 bg-gray-50 border-b flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                <MessageSquare className="h-4 w-4 text-blue-600" />
              </div>
              <span className="font-medium">AI Assistant</span>
            </div>
            <div className="p-4 h-[500px] overflow-y-auto flex flex-col gap-4">
              {/* AI Message */}
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                  <div className="flex items-center">
                    <span className="text-xs font-medium">AI Assistant</span>
                  </div>
                  <p className="text-sm">
                    Great! Now let's create a profile for the specific car you're looking to purchase. What type of
                    vehicle are you interested in?
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      Sedan
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      SUV
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Truck
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Minivan
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Sports Car
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Electric Vehicle
                    </Button>
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                  <p className="text-sm">Truck</p>
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
                  <div className="flex items-center">
                    <span className="text-xs font-medium">AI Assistant</span>
                  </div>
                  <p className="text-sm">
                    Trucks are a great choice! Do you have any specific brands or models in mind?
                  </p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                  <p className="text-sm">I'm interested in Ford F-150, but I'm open to other options too.</p>
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
                  <div className="flex items-center">
                    <span className="text-xs font-medium">AI Assistant</span>
                  </div>
                  <p className="text-sm">
                    What features are most important to you in your new truck? Select all that apply.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      4x4 / AWD
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Towing Package
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Advanced Safety
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Driver Assistance
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Luxury Interior
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Off-Road Package
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Bed Accessories
                    </Button>
                  </div>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                  <p className="text-sm">4x4 / AWD, Towing Package, and Advanced Safety</p>
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
                  <div className="flex items-center">
                    <span className="text-xs font-medium">AI Assistant</span>
                  </div>
                  <p className="text-sm">
                    Perfect! Based on your preferences, I'll help you find trucks with 4x4 capability, towing packages,
                    and advanced safety features within your budget range. Let's start exploring some options.
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

          <div className="mt-6 flex justify-end">
            <Link href="/dashboard">
              <Button className="rounded-lg bg-blue-600 hover:bg-blue-700">
                Continue to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
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
