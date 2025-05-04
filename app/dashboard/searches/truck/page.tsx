import Link from "next/link"
import { Car, ChevronLeft, Filter, Heart, MessageSquare, Send, ImageIcon, Paperclip, Smile, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export default function TruckSearchPage() {
  // Demo data - in a real app this would come from an API
  const searchResults = [
    {
      id: "ford-f150-lariat",
      make: "Ford",
      model: "F-150 Lariat",
      year: 2025,
      price: 58375,
      image: "/placeholder.svg?key=ztaas",
      engine: "3.5L EcoBoost V6",
      features: ["4x4", "Towing Package", "Leather Interior"],
      mileage: 0,
      status: "negotiating",
      distance: 12,
      dealership: "Towne Ford",
    },
    {
      id: "ford-f150-xlt",
      make: "Ford",
      model: "F-150 XLT",
      year: 2025,
      price: 49250,
      image: "/placeholder.svg?key=jk177",
      engine: "2.7L EcoBoost V6",
      features: ["4x4", "Towing Package", "Sport Appearance"],
      mileage: 0,
      status: "saved",
      distance: 18,
      dealership: "Towne Ford",
    },
    {
      id: "chevy-silverado-lt",
      make: "Chevrolet",
      model: "Silverado 1500 LT",
      year: 2025,
      price: 48900,
      image: "/placeholder.svg?key=p9dkl",
      engine: "5.3L V8",
      features: ["4x4", "Z71 Off-Road Package"],
      mileage: 0,
      status: "available",
      distance: 15,
      dealership: "Chevrolet of Fremont",
    },
    {
      id: "ram-1500-bighorn",
      make: "RAM",
      model: "1500 Big Horn",
      year: 2025,
      price: 50200,
      image: "/placeholder.svg?key=ow9dn",
      engine: "3.6L V6",
      features: ["4x4", "Level 2 Equipment Group"],
      mileage: 0,
      status: "available",
      distance: 22,
      dealership: "Stevens Creek Dodge",
    },
  ]

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
            <Link href="/dashboard" className="mr-4">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold">Truck Search</h1>
            <Badge variant="outline" className="ml-3 bg-blue-100 text-blue-700 hover:bg-blue-100">
              Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-3 space-y-6">
              {/* Search Criteria Card */}
              <Card className="border rounded-xl overflow-hidden sticky top-24">
                <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                  <h3 className="font-semibold">Search Criteria</h3>
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <Filter className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full sm:max-w-md">
                      <SheetHeader>
                        <SheetTitle>Search Filters</SheetTitle>
                      </SheetHeader>
                      <div className="py-4">
                        <Accordion type="multiple" className="w-full">
                          <AccordionItem value="make">
                            <AccordionTrigger>Make</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="ford" defaultChecked />
                                  <label
                                    htmlFor="ford"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Ford
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="chevrolet" />
                                  <label
                                    htmlFor="chevrolet"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Chevrolet
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="ram" />
                                  <label
                                    htmlFor="ram"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    RAM
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="toyota" />
                                  <label
                                    htmlFor="toyota"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Toyota
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="price">
                            <AccordionTrigger>Price Range</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                  <Input type="number" placeholder="Min" defaultValue="45000" />
                                  <span>to</span>
                                  <Input type="number" placeholder="Max" defaultValue="60000" />
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="features">
                            <AccordionTrigger>Features</AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="4x4" defaultChecked />
                                  <label
                                    htmlFor="4x4"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    4x4 / AWD
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="towing" defaultChecked />
                                  <label
                                    htmlFor="towing"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Towing Package
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Checkbox id="leather" />
                                  <label
                                    htmlFor="leather"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Leather Interior
                                  </label>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                        <div className="mt-6 flex gap-2">
                          <Button variant="outline" className="flex-1">
                            Reset
                          </Button>
                          <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
                <div className="p-4 space-y-3">
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
                      <span className="text-sm font-medium text-blue-600">Active</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Saved Vehicles Card */}
              <Card className="border rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                  <h3 className="font-semibold">Saved Vehicles</h3>
                  <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
                    View All
                  </Button>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?key=ztaas"
                        alt="Ford F-150 Lariat"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="truncate">
                          <h4 className="font-medium text-sm truncate">Ford F-150 Lariat</h4>
                          <p className="text-xs text-gray-500 truncate">3.5L EcoBoost V6</p>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 text-xs hover:bg-blue-100 flex-shrink-0">
                          Negotiating
                        </Badge>
                      </div>
                      <p className="text-xs mt-1">
                        <span className="font-medium">$58,375</span> MSRP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src="/placeholder.svg?key=jk177"
                        alt="Ford F-150 XLT"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <div className="truncate">
                          <h4 className="font-medium text-sm truncate">Ford F-150 XLT</h4>
                          <p className="text-xs text-gray-500 truncate">2.7L EcoBoost V6</p>
                        </div>
                        <Badge className="bg-gray-100 text-gray-700 text-xs hover:bg-gray-100 flex-shrink-0">
                          Saved
                        </Badge>
                      </div>
                      <p className="text-xs mt-1">
                        <span className="font-medium">$49,250</span> MSRP
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Chat Interface - Main Content */}
            <div className="lg:col-span-9 flex flex-col">
              <Card className="border rounded-xl overflow-hidden flex-1 flex flex-col">
                <div className="p-4 bg-gray-50 border-b flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="font-medium">AI Car Buying Assistant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tabs defaultValue="chat" className="w-[200px]">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="chat">Chat</TabsTrigger>
                        <TabsTrigger value="results">Results</TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>
                </div>

                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-6">
                    {/* AI Welcome Message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">AI Assistant</span>
                          <span className="text-xs text-gray-500">10:32 AM</span>
                        </div>
                        <p className="text-sm">
                          Welcome to your truck search! Based on your criteria, I'm looking for trucks with 4x4
                          capability and towing packages within your budget of $45,000-$60,000. What's most important to
                          you in your next truck? Engine power, fuel efficiency, technology features, or something else?
                        </p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3 justify-end">
                      <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                        <p className="text-sm">
                          I'm looking for something with good towing capacity. I'll be hauling a boat that weighs about
                          7,500 lbs.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-1">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* AI Response with Recommendations */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col gap-3 max-w-[90%]">
                        <div className="rounded-xl bg-gray-50 p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium">AI Assistant</span>
                            <span className="text-xs text-gray-500">10:35 AM</span>
                          </div>
                          <p className="text-sm">
                            Great! For towing a 7,500 lb boat, you'll definitely need a truck with a good towing
                            capacity. I've found several trucks that would handle that weight with ease. Here are some
                            options that match your criteria:
                          </p>
                        </div>

                        {/* Vehicle Recommendations */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {searchResults.map((vehicle) => (
                            <Card key={vehicle.id} className="border rounded-xl overflow-hidden">
                              <div className="flex">
                                <div className="w-1/3">
                                  <img
                                    src={vehicle.image || "/placeholder.svg"}
                                    alt={`${vehicle.make} ${vehicle.model}`}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="w-2/3 p-3">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="font-medium text-sm">
                                        {vehicle.make} {vehicle.model}
                                      </h3>
                                      <p className="text-xs text-gray-500">
                                        {vehicle.year} • {vehicle.engine}
                                      </p>
                                    </div>
                                    <Heart
                                      className={`h-4 w-4 ${
                                        vehicle.status === "saved" || vehicle.status === "negotiating"
                                          ? "fill-rose-500 text-rose-500"
                                          : "text-gray-400"
                                      }`}
                                    />
                                  </div>
                                  <div className="mt-1">
                                    <p className="text-xs">
                                      <span className="font-medium">${vehicle.price.toLocaleString()}</span> MSRP
                                    </p>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {vehicle.features.slice(0, 2).map((feature, index) => (
                                        <Badge
                                          key={index}
                                          variant="outline"
                                          className="bg-gray-100 text-gray-800 hover:bg-gray-100 text-[10px] px-1"
                                        >
                                          {feature}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="mt-2">
                                    <Link href={`/dashboard/searches/truck/${vehicle.id}`}>
                                      <Button
                                        size="sm"
                                        className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-xs h-7"
                                      >
                                        View Details
                                      </Button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>

                        <div className="rounded-xl bg-gray-50 p-3">
                          <p className="text-sm">
                            All of these trucks have towing capacities well above your 7,500 lb requirement. The Ford
                            F-150 models come with the Max Trailer Tow Package, giving them excellent towing
                            capabilities. The RAM 1500 has a very smooth ride, which can be nice when towing. The
                            Silverado has a great powertrain for towing as well.
                          </p>
                          <p className="text-sm mt-2">
                            Would you like more details about any of these trucks? Or do you have other specific
                            features you're looking for?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3 justify-end">
                      <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                        <p className="text-sm">
                          I like the Ford F-150 XLT. Can you tell me more about its towing features specifically?
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-1">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* AI Response with Vehicle Details */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col gap-3 max-w-[90%]">
                        <div className="rounded-xl bg-gray-50 p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium">AI Assistant</span>
                            <span className="text-xs text-gray-500">10:38 AM</span>
                          </div>
                          <p className="text-sm">
                            The Ford F-150 XLT with the 2.7L EcoBoost V6 is an excellent choice for towing. Here are its
                            specific towing features:
                          </p>
                        </div>

                        {/* Vehicle Detail Card */}
                        <Card className="border rounded-xl overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 relative">
                              <img
                                src="/placeholder.svg?key=jk177"
                                alt="Ford F-150 XLT"
                                className="w-full h-48 md:h-full object-cover"
                              />
                              <Button
                                size="sm"
                                variant="ghost"
                                className="absolute top-2 right-2 rounded-full h-8 w-8 p-0 bg-white/80"
                              >
                                <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                              </Button>
                            </div>
                            <div className="p-4 md:w-2/3">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-semibold">Ford F-150 XLT</h3>
                                  <p className="text-sm text-gray-500">2.7L EcoBoost V6 • 4x4 • Towing Package</p>
                                </div>
                                <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Saved</div>
                              </div>
                              <div className="mt-2">
                                <p className="text-sm">
                                  <span className="font-medium">$49,250</span> MSRP
                                </p>
                                <p className="text-sm text-blue-600">
                                  <span className="font-medium">$46,000</span> Target Price
                                </p>
                              </div>
                              <div className="mt-3">
                                <Link href="/dashboard/searches/truck/ford-f150-xlt">
                                  <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700">
                                    View Details
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Card>

                        <div className="rounded-xl bg-gray-50 p-3">
                          <h4 className="text-sm font-medium mb-2">Towing Features:</h4>
                          <ul className="list-disc text-sm pl-5 space-y-1">
                            <li>
                              <span className="font-medium">Max Towing Capacity:</span> 10,100 lbs with the Max Trailer
                              Tow Package (well above your 7,500 lb requirement)
                            </li>
                            <li>
                              <span className="font-medium">Pro Trailer Backup Assist:</span> Makes backing up with a
                              trailer much easier with a simple knob that controls steering
                            </li>
                            <li>
                              <span className="font-medium">Trailer Brake Controller:</span> Integrated system that
                              synchronizes truck and trailer brakes for smoother, more controlled stopping
                            </li>
                            <li>
                              <span className="font-medium">Smart Trailer Tow Connector:</span> Alerts you to trailer
                              connection issues, lighting problems, and battery status
                            </li>
                            <li>
                              <span className="font-medium">Tow/Haul Mode:</span> Optimizes transmission shift points
                              when towing
                            </li>
                            <li>
                              <span className="font-medium">Dynamic Hitch Assist:</span> Camera feature that helps you
                              line up your hitch with the trailer
                            </li>
                          </ul>
                          <p className="text-sm mt-3">
                            With these features, the F-150 XLT would handle your 7,500 lb boat with ease. The 2.7L
                            EcoBoost engine provides 325 horsepower and 400 lb-ft of torque, which gives you plenty of
                            power for towing while still maintaining reasonable fuel efficiency.
                          </p>
                          <p className="text-sm mt-2">
                            Would you like to see more details about this truck, or would you like to compare it with
                            other options?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex gap-3 justify-end">
                      <div className="flex flex-col gap-1 rounded-xl bg-blue-600 p-3 text-white max-w-[80%]">
                        <p className="text-sm">
                          I'd like to see more details about the F-150 XLT. It sounds like it would work well for my
                          needs.
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center mt-1">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    {/* AI Response with CTA */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                        <MessageSquare className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium">AI Assistant</span>
                          <span className="text-xs text-gray-500">10:41 AM</span>
                        </div>
                        <p className="text-sm">
                          Great choice! The Ford F-150 XLT offers an excellent balance of capability, features, and
                          value. I've put together a detailed page with all the information about this truck, including
                          specifications, features, pricing, and more.
                        </p>
                        <p className="text-sm mt-2">
                          You can view the complete details, see more photos, and even start the negotiation process if
                          you're ready to move forward.
                        </p>
                        <div className="mt-3">
                          <Link href="/dashboard/searches/truck/ford-f150-xlt">
                            <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700">
                              View F-150 XLT Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>

                <div className="p-4 border-t">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                      <Paperclip className="h-5 w-5 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                      <ImageIcon className="h-5 w-5 text-gray-500" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        placeholder="Ask about trucks, features, or preferences..."
                        className="rounded-full pr-10"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8"
                      >
                        <Smile className="h-5 w-5 text-gray-500" />
                      </Button>
                    </div>
                    <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-10 w-10 p-0">
                      <Send className="h-5 w-5" />
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
