import Link from "next/link"
import {
  Car,
  MessageSquare,
  Heart,
  User,
  Settings,
  Plus,
  Search,
  Clock,
  CheckCircle2,
  Wrench,
  ChevronRight,
  ShoppingBag,
  Filter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  // Demo data - in a real app this would come from an API
  const hasActiveSearches = true
  const hasGarage = true

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
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
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
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-semibold">Welcome, John</h1>
              <p className="text-gray-500">Manage your car buying journey</p>
            </div>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <Link href="/profile">
                <Button variant="outline" className="rounded-lg">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Button>
              </Link>
              <Button className="rounded-lg bg-blue-600 hover:bg-blue-700">
                <Plus className="mr-2 h-4 w-4" />
                New Car Search
              </Button>
            </div>
          </div>

          <Tabs defaultValue="searches" className="w-full">
            <TabsList className="flex p-1 bg-gray-100 rounded-xl mb-6 w-full md:w-auto">
              <TabsTrigger
                value="searches"
                className="flex-1 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                Active Searches
              </TabsTrigger>
              <TabsTrigger
                value="garage"
                className="flex-1 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
              >
                My Garage
              </TabsTrigger>
            </TabsList>

            {/* Active Searches Tab */}
            <TabsContent value="searches" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Your Car Buying Profiles</h2>
                <Button variant="outline" className="rounded-lg text-sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Profile
                </Button>
              </div>

              {hasActiveSearches ? (
                <div className="grid grid-cols-1 gap-8">
                  {/* Active Search Card 1 */}
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 border-b bg-blue-50">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Truck Search</h3>
                        <Badge variant="outline" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                          Active
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Created on May 15, 2025</p>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 space-y-3">
                          <h4 className="font-medium text-sm">Search Criteria</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Vehicle Type</span>
                              <span className="text-sm font-medium">Truck</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Budget</span>
                              <span className="text-sm font-medium">$45,000 - $60,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Key Features</span>
                              <span className="text-sm font-medium">4x4, Towing Package</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Status</span>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-blue-600 mr-1" />
                                <span className="text-sm font-medium text-blue-600">Negotiating</span>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 flex gap-2">
                            <Link href="/dashboard/searches/truck" className="flex-1">
                              <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-sm">
                                Continue Search
                              </Button>
                            </Link>
                            <Button variant="outline" className="rounded-lg text-sm">
                              <Filter className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="md:col-span-2 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-4 mt-4 md:mt-0">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-sm">Saved Vehicles (2)</h4>
                            <Link href="/dashboard/searches/truck/saved">
                              <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                                View All
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="border rounded-lg overflow-hidden bg-white">
                              <div className="flex">
                                <div className="w-1/3">
                                  <img
                                    src="/placeholder.svg?key=ztaas"
                                    alt="Ford F-150 Lariat"
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="w-2/3 p-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="font-medium text-sm">Ford F-150 Lariat</h5>
                                      <p className="text-xs text-gray-500">3.5L EcoBoost V6</p>
                                    </div>
                                    <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                                  </div>
                                  <div className="mt-1">
                                    <p className="text-xs">
                                      <span className="font-medium">$58,375</span> MSRP
                                    </p>
                                    <p className="text-xs text-blue-600">
                                      <span className="font-medium">$54,500</span> Target
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <Badge className="bg-blue-100 text-blue-700 text-xs hover:bg-blue-100">
                                      Negotiating
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="border rounded-lg overflow-hidden bg-white">
                              <div className="flex">
                                <div className="w-1/3">
                                  <img
                                    src="/placeholder.svg?key=jk177"
                                    alt="Ford F-150 XLT"
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="w-2/3 p-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="font-medium text-sm">Ford F-150 XLT</h5>
                                      <p className="text-xs text-gray-500">2.7L EcoBoost V6</p>
                                    </div>
                                    <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                                  </div>
                                  <div className="mt-1">
                                    <p className="text-xs">
                                      <span className="font-medium">$49,250</span> MSRP
                                    </p>
                                    <p className="text-xs text-blue-600">
                                      <span className="font-medium">$46,000</span> Target
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <Badge className="bg-gray-100 text-gray-700 text-xs hover:bg-gray-100">Saved</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Active Search Card 2 */}
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 border-b bg-gray-50">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">SUV Search</h3>
                        <Badge variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                          Paused
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Created on April 3, 2025</p>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 space-y-3">
                          <h4 className="font-medium text-sm">Search Criteria</h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Vehicle Type</span>
                              <span className="text-sm font-medium">SUV</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Budget</span>
                              <span className="text-sm font-medium">$35,000 - $45,000</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Key Features</span>
                              <span className="text-sm font-medium">3rd Row, AWD</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-500">Status</span>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-gray-600 mr-1" />
                                <span className="text-sm font-medium text-gray-600">Paused</span>
                              </div>
                            </div>
                          </div>
                          <div className="pt-3 flex gap-2">
                            <Link href="/dashboard/searches/suv" className="flex-1">
                              <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-sm">
                                Resume Search
                              </Button>
                            </Link>
                            <Button variant="outline" className="rounded-lg text-sm">
                              <Filter className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="md:col-span-2 border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-4 mt-4 md:mt-0">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="font-medium text-sm">Saved Vehicles (1)</h4>
                            <Link href="/dashboard/searches/suv/saved">
                              <Button variant="link" className="text-blue-600 p-0 h-auto text-sm">
                                View All
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="border rounded-lg overflow-hidden bg-white">
                              <div className="flex">
                                <div className="w-1/3">
                                  <img
                                    src="/placeholder.svg?key=hj9k2"
                                    alt="Toyota Highlander"
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="w-2/3 p-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h5 className="font-medium text-sm">Toyota Highlander</h5>
                                      <p className="text-xs text-gray-500">XLE AWD</p>
                                    </div>
                                    <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                                  </div>
                                  <div className="mt-1">
                                    <p className="text-xs">
                                      <span className="font-medium">$42,320</span> MSRP
                                    </p>
                                    <p className="text-xs text-blue-600">
                                      <span className="font-medium">$39,750</span> Target
                                    </p>
                                  </div>
                                  <div className="mt-2">
                                    <Badge className="bg-gray-100 text-gray-700 text-xs hover:bg-gray-100">Saved</Badge>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="hidden md:flex items-center justify-center border rounded-lg border-dashed p-4">
                              <div className="text-center">
                                <Search className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-500">Find more SUVs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="border rounded-xl p-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No active car searches</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Start your car buying journey by creating a new search profile. Our AI will help you find the
                    perfect vehicle.
                  </p>
                  <Button className="rounded-lg bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Your First Search
                  </Button>
                </Card>
              )}
            </TabsContent>

            {/* My Garage Tab */}
            <TabsContent value="garage" className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Your Garage</h2>
                <Button variant="outline" className="rounded-lg text-sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Vehicle
                </Button>
              </div>

              {hasGarage ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Owned Car Card */}
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="relative">
                      <img src="/placeholder.svg?key=ow9dn" alt="Toyota Camry" className="w-full h-48 object-cover" />
                      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-100">
                        Owned
                      </Badge>
                    </div>
                    <div className="p-4">
                      <div>
                        <h3 className="font-semibold">Toyota Camry</h3>
                        <p className="text-sm text-gray-500">2022 XSE V6</p>
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Purchase Date</span>
                          <span className="text-sm font-medium">March 12, 2023</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Mileage</span>
                          <span className="text-sm font-medium">12,450 miles</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Next Service</span>
                          <span className="text-sm font-medium">June 2025</span>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Button variant="outline" className="rounded-lg text-sm">
                          <Wrench className="mr-2 h-4 w-4" />
                          Service
                        </Button>
                        <Button variant="outline" className="rounded-lg text-sm">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Accessories
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Owned Car Card 2 */}
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="relative">
                      <img src="/placeholder.svg?key=p9dkl" alt="Honda CR-V" className="w-full h-48 object-cover" />
                      <Badge className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-100">
                        Owned
                      </Badge>
                    </div>
                    <div className="p-4">
                      <div>
                        <h3 className="font-semibold">Honda CR-V</h3>
                        <p className="text-sm text-gray-500">2020 Touring AWD</p>
                      </div>
                      <div className="mt-2 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Purchase Date</span>
                          <span className="text-sm font-medium">July 5, 2020</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Mileage</span>
                          <span className="text-sm font-medium">35,780 miles</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Next Service</span>
                          <span className="text-sm font-medium text-red-600">Overdue</span>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Button variant="outline" className="rounded-lg text-sm">
                          <Wrench className="mr-2 h-4 w-4" />
                          Service
                        </Button>
                        <Button variant="outline" className="rounded-lg text-sm">
                          <ShoppingBag className="mr-2 h-4 w-4" />
                          Accessories
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="border rounded-xl p-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Car className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Your garage is empty</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    After you purchase a vehicle through our service, it will appear here for easy management and
                    service tracking.
                  </p>
                  <Button className="rounded-lg bg-blue-600 hover:bg-blue-700">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Existing Vehicle
                  </Button>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Recent Activity Section */}
          <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Button variant="link" className="text-blue-600 p-0">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <Card className="border rounded-xl">
              <div className="divide-y">
                <div className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mr-4">
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">AI Negotiator update on Ford F-150 Lariat</p>
                    <p className="text-sm text-gray-500">Dealer countered with $56,200. Negotiation in progress.</p>
                  </div>
                  <span className="text-xs text-gray-500">2h ago</span>
                </div>
                <div className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-4">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Toyota Camry service reminder</p>
                    <p className="text-sm text-gray-500">Oil change and tire rotation due in 2 weeks.</p>
                  </div>
                  <span className="text-xs text-gray-500">1d ago</span>
                </div>
                <div className="p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex-shrink-0 flex items-center justify-center mr-4">
                    <Heart className="h-5 w-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">New vehicle saved</p>
                    <p className="text-sm text-gray-500">You saved Ford F-150 XLT to your Truck Search.</p>
                  </div>
                  <span className="text-xs text-gray-500">3d ago</span>
                </div>
              </div>
            </Card>
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
