import Link from "next/link"
import {
  Car,
  MessageSquare,
  Heart,
  ChevronLeft,
  ImageIcon,
  Zap,
  DollarSign,
  Truck,
  Shield,
  CheckCircle2,
  ArrowRight,
  Calendar,
  MapPin,
  Star,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FordF150XLTPage() {
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
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="flex items-center mb-6">
            <Link href="/dashboard/searches/truck" className="mr-4">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold">Ford F-150 XLT</h1>
            <Badge variant="outline" className="ml-3 bg-gray-100 text-gray-700 hover:bg-gray-100">
              Saved
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Vehicle Details - Main Content */}
            <div className="lg:col-span-8">
              {/* Vehicle Images */}
              <Card className="border rounded-xl overflow-hidden mb-6">
                <div className="relative">
                  <img
                    src="/images/cars/2025-Ford-F-150.avif"
                    alt="Ford F-150 XLT"
                    className="w-full h-[400px] object-cover"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-4 right-4 rounded-full h-10 w-10 p-0 bg-white/80"
                  >
                    <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
                  </Button>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="rounded-lg">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      More Photos
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg">
                      <Info className="h-4 w-4 mr-2" />
                      Vehicle History
                    </Button>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500 mr-2">Dealership:</span>
                    <span className="font-medium">Towne Ford</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 mr-1">18 miles away</span>
                  </div>
                </div>
              </Card>

              {/* Vehicle Information Tabs */}
              <Tabs defaultValue="overview" className="mb-6">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="dealership">Dealership</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h2 className="font-semibold">2025 Ford F-150 XLT</h2>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-500">MSRP</p>
                          <p className="font-semibold text-xl">$49,250</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Estimated Target Price</p>
                          <p className="font-semibold text-xl text-blue-600">$46,000</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Engine</p>
                          <p className="font-medium">2.7L EcoBoost V6</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Drivetrain</p>
                          <p className="font-medium">4x4</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Fuel Economy</p>
                          <p className="font-medium">20/25 MPG</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        The 2025 Ford F-150 XLT combines capability, technology, and value in a versatile pickup truck.
                        With its 2.7L EcoBoost V6 engine, this truck delivers 325 horsepower and 400 lb-ft of torque,
                        providing excellent towing capacity while maintaining good fuel efficiency.
                      </p>
                      <p className="text-gray-700">
                        This particular model includes the XLT Sport Appearance Package and the FX4 Off-Road Package,
                        making it ideal for both work and recreation. The 4x4 drivetrain and towing package ensure
                        you're ready for any challenge.
                      </p>
                    </div>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="border rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Zap className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Performance</h3>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>325 HP / 400 lb-ft torque</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>10-speed automatic transmission</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Electronic shift-on-the-fly 4x4</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="border rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Truck className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Capability</h3>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>10,100 lbs max towing capacity</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>1,875 lbs payload capacity</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>FX4 Off-Road Package included</span>
                        </li>
                      </ul>
                    </Card>

                    <Card className="border rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Shield className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium">Safety & Tech</h3>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Ford Co-Pilot360 safety suite</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>8" touchscreen with SYNC 4</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Wireless Apple CarPlay/Android Auto</span>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="features">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h2 className="font-semibold">Features & Options</h2>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-3">Exterior</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>LED headlights and fog lamps</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>XLT Sport Appearance Package</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>18" aluminum wheels</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>BoxLink™ with locking cleats</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Power tailgate</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-3">Interior</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Cloth seats with 8-way power driver's seat</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>60/40 flip-up split bench</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>8" touchscreen infotainment</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>SYNC 4 with wireless smartphone connectivity</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                              <span>Single-zone climate control</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="font-medium mb-3">Packages</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="border rounded-lg p-3">
                            <h4 className="font-medium">FX4 Off-Road Package</h4>
                            <ul className="mt-2 space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Off-road tuned shock absorbers</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Electronic locking rear differential</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Hill descent control</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Skid plates</span>
                              </li>
                            </ul>
                          </Card>
                          <Card className="border rounded-lg p-3">
                            <h4 className="font-medium">Max Trailer Tow Package</h4>
                            <ul className="mt-2 space-y-1 text-sm">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Pro Trailer Backup Assist</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Trailer brake controller</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Smart trailer tow connector</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                <span>Upgraded radiator</span>
                              </li>
                            </ul>
                          </Card>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="specs">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h2 className="font-semibold">Technical Specifications</h2>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-medium mb-3">Engine & Performance</h3>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Engine</td>
                                <td className="py-2 font-medium">2.7L EcoBoost V6</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Horsepower</td>
                                <td className="py-2 font-medium">325 hp @ 5,000 rpm</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Torque</td>
                                <td className="py-2 font-medium">400 lb-ft @ 3,000 rpm</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Transmission</td>
                                <td className="py-2 font-medium">10-speed automatic</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Drivetrain</td>
                                <td className="py-2 font-medium">4x4</td>
                              </tr>
                              <tr>
                                <td className="py-2 text-gray-500">Fuel Economy</td>
                                <td className="py-2 font-medium">20 city / 25 highway</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <h3 className="font-medium mb-3">Dimensions & Capacity</h3>
                          <table className="w-full text-sm">
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Bed Length</td>
                                <td className="py-2 font-medium">5.5 ft (SuperCrew)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Wheelbase</td>
                                <td className="py-2 font-medium">145.4 inches</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Ground Clearance</td>
                                <td className="py-2 font-medium">9.4 inches</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Towing Capacity</td>
                                <td className="py-2 font-medium">10,100 lbs (max)</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2 text-gray-500">Payload Capacity</td>
                                <td className="py-2 font-medium">1,875 lbs</td>
                              </tr>
                              <tr>
                                <td className="py-2 text-gray-500">Fuel Tank</td>
                                <td className="py-2 font-medium">26 gallons</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="dealership">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h2 className="font-semibold">Dealership Information</h2>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2">
                          <h3 className="font-medium mb-3">Towne Ford</h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                              <div>
                                <p className="font-medium">1601 El Camino Real</p>
                                <p className="text-gray-500">Redwood City, CA 94063</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-5 w-5 text-yellow-400" />
                              <div>
                                <p className="font-medium">4.2 out of 5</p>
                                <p className="text-gray-500">Based on 128 reviews</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-5 w-5 text-gray-500" />
                              <div>
                                <p className="font-medium">Open today: 9:00 AM - 8:00 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 flex gap-3">
                            <Button variant="outline" className="rounded-lg">
                              Visit Website
                            </Button>
                            <Button variant="outline" className="rounded-lg">
                              Get Directions
                            </Button>
                          </div>
                        </div>
                        <div className="md:w-1/2 h-[200px] bg-gray-100 rounded-lg">
                          {/* Map placeholder */}
                          <div className="h-full flex items-center justify-center">
                            <MapPin className="h-8 w-8 text-gray-400" />
                            <span className="ml-2 text-gray-500">Map View</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* AI Chat Preview */}
              <Card className="border rounded-xl overflow-hidden mb-6">
                <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">AI Car Buying Assistant</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                      <p className="text-sm">
                        Based on my analysis, this Ford F-150 XLT is priced competitively for the market. With the
                        current Ford incentives and end-of-month timing, I believe we can negotiate the price down to
                        around $45,750, which would be an excellent value.
                      </p>
                    </div>
                  </div>
                  <Button className="w-full rounded-lg">Chat with AI Assistant</Button>
                </div>
              </Card>

              {/* Start Negotiation CTA */}
              <Card className="border rounded-xl overflow-hidden bg-blue-50 border-blue-100">
                <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">Ready to move forward with this truck?</h2>
                    <p className="text-gray-600">
                      Let our AI negotiator secure the best possible price for your Ford F-150 XLT.
                    </p>
                  </div>
                  <Link href="/dashboard/searches/truck/ford-f150-xlt/negotiate">
                    <Button className="rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-6 text-lg h-auto">
                      Start Negotiation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Vehicle Price Card */}
              <Card className="border rounded-xl overflow-hidden sticky top-24">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-semibold">Price Summary</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">MSRP</span>
                    <span className="font-medium">$49,250</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Target Price</span>
                    <span className="font-medium text-blue-600">$46,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Estimated Savings</span>
                    <span className="font-medium text-green-600">$3,250</span>
                  </div>
                  <div className="pt-3 border-t">
                    <Link href="/dashboard/searches/truck/ford-f150-xlt/negotiate">
                      <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700">Start Negotiation</Button>
                    </Link>
                    <Button variant="outline" className="w-full rounded-lg mt-2">
                      <Heart className="mr-2 h-4 w-4 fill-rose-500 text-rose-500" />
                      Saved
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Similar Vehicles Card */}
              <Card className="border rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                  <h3 className="font-semibold">Similar Vehicles</h3>
                  <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
                    View All
                  </Button>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src="/images/cars/ford-f150-lariat.png"
                        alt="Ford F-150 Lariat"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">Ford F-150 Lariat</h4>
                      <p className="text-xs text-gray-500">3.5L EcoBoost V6 • 4x4</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm font-medium">$58,375</p>
                        <Badge className="bg-blue-100 text-blue-700 text-xs hover:bg-blue-100">Negotiating</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src="/images/cars/2025-Chevrolet-Silverado_1500.avif"
                        alt="Chevrolet Silverado 1500 LT"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">Chevrolet Silverado 1500 LT</h4>
                      <p className="text-xs text-gray-500">5.3L V8 • 4x4</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm font-medium">$48,900</p>
                        <Button variant="outline" className="h-6 text-xs rounded-full px-2">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src="/images/cars/2025-Chevrolet-Silverado_1500.avif"
                        alt="RAM 1500 Big Horn"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">RAM 1500 Big Horn</h4>
                      <p className="text-xs text-gray-500">3.6L V6 • 4x4</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm font-medium">$50,200</p>
                        <Button variant="outline" className="h-6 text-xs rounded-full px-2">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* AI Insights Card */}
              <Card className="border rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-semibold">AI Insights</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <DollarSign className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Price Analysis</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        This F-150 XLT is priced 2% below similar models in your area, making it a good value.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Calendar className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Timing</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        End of month is in 5 days - a great time to negotiate as dealers try to hit sales targets.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Truck className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Inventory</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        This truck has been on the lot for 45 days, increasing your negotiating leverage.
                      </p>
                    </div>
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
