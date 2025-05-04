import Link from "next/link"
import { Car, ChevronLeft, Mail, Phone, MapPin, Calendar, Edit, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
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
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex items-center mb-6">
            <Link href="/dashboard" className="mr-4">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold">My Profile</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <Card className="border rounded-xl p-6 lg:col-span-1 h-fit">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/abstract-geometric-shapes.png" alt="User" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
                <p className="text-sm text-gray-500">Member since 2023</p>
                <Button variant="outline" className="mt-4 w-full rounded-lg">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-3">Account Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Active Searches</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Saved Cars</span>
                    <span className="font-medium">4</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Owned Vehicles</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Completed Purchases</span>
                    <span className="font-medium">3</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="flex p-1 bg-gray-100 rounded-xl mb-6 w-full">
                  <TabsTrigger
                    value="personal"
                    className="flex-1 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Personal Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="preferences"
                    className="flex-1 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Preferences
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="flex-1 rounded-lg py-2 data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Security
                  </TabsTrigger>
                </TabsList>

                {/* Personal Info Tab */}
                <TabsContent value="personal" className="space-y-6">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                      <h3 className="font-semibold">Personal Information</h3>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">Full Name</p>
                          <p className="font-medium">John Doe</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">Email</p>
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="font-medium">john.doe@example.com</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">Phone</p>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="font-medium">(555) 123-4567</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">Date of Birth</p>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="font-medium">January 15, 1985</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b flex justify-between items-center">
                      <h3 className="font-semibold">Address Information</h3>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-1 md:col-span-2">
                          <p className="text-sm text-gray-500">Street Address</p>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                            <p className="font-medium">123 Main Street, Apt 4B</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">City</p>
                          <p className="font-medium">San Francisco</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">State</p>
                          <p className="font-medium">California</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">ZIP Code</p>
                          <p className="font-medium">94103</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">Country</p>
                          <p className="font-medium">United States</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                {/* Preferences Tab */}
                <TabsContent value="preferences" className="space-y-6">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h3 className="font-semibold">Car Buying Preferences</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <p className="text-sm text-gray-500">Preferred Vehicle Types</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Truck</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">SUV</span>
                              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">+ Add</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-500">Budget Range</p>
                            <p className="font-medium">$35,000 - $60,000</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-500">Preferred Brands</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Ford</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Toyota</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Honda</span>
                              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">+ Add</span>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-500">Must-Have Features</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">4x4/AWD</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                Advanced Safety
                              </span>
                              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">+ Add</span>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4 border-t">
                          <Button variant="outline" className="rounded-lg">
                            <Edit className="mr-2 h-4 w-4" />
                            Update Preferences
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h3 className="font-semibold">Notification Preferences</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="email-notifications">
                              Email Notifications
                            </Label>
                            <p className="text-sm text-gray-500">Receive updates about your car searches</p>
                          </div>
                          <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="sms-notifications">
                              SMS Notifications
                            </Label>
                            <p className="text-sm text-gray-500">Get text messages for important updates</p>
                          </div>
                          <Switch id="sms-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="deal-alerts">
                              Deal Alerts
                            </Label>
                            <p className="text-sm text-gray-500">Be notified about special offers and incentives</p>
                          </div>
                          <Switch id="deal-alerts" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="marketing-emails">
                              Marketing Emails
                            </Label>
                            <p className="text-sm text-gray-500">Receive promotional content and newsletters</p>
                          </div>
                          <Switch id="marketing-emails" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6">
                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h3 className="font-semibold">Account Security</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Password</h4>
                            <p className="text-sm text-gray-500">Last changed 3 months ago</p>
                          </div>
                          <Button variant="outline" className="rounded-lg">
                            Change Password
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Two-Factor Authentication</h4>
                            <p className="text-sm text-gray-500">Add an extra layer of security</p>
                          </div>
                          <Button variant="outline" className="rounded-lg">
                            Enable
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Connected Accounts</h4>
                            <p className="text-sm text-gray-500">Manage your linked accounts</p>
                          </div>
                          <Button variant="outline" className="rounded-lg">
                            Manage
                          </Button>
                        </div>
                        <div className="pt-4 border-t">
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 text-blue-600 mr-2" />
                            <p className="text-sm text-gray-600">
                              Your account is secure. We use industry-standard encryption to protect your data.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="border rounded-xl overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b">
                      <h3 className="font-semibold">Privacy Settings</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="data-sharing">
                              Data Sharing
                            </Label>
                            <p className="text-sm text-gray-500">Allow us to share your data with trusted partners</p>
                          </div>
                          <Switch id="data-sharing" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="personalized-ads">
                              Personalized Ads
                            </Label>
                            <p className="text-sm text-gray-500">Show ads based on your browsing activity</p>
                          </div>
                          <Switch id="personalized-ads" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label className="text-base" htmlFor="cookies">
                              Cookies
                            </Label>
                            <p className="text-sm text-gray-500">Manage cookie preferences</p>
                          </div>
                          <Button variant="outline" className="rounded-lg text-sm">
                            Manage
                          </Button>
                        </div>
                        <div className="pt-4 border-t">
                          <Link href="/privacy-policy" className="text-blue-600 hover:underline text-sm">
                            View our Privacy Policy
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
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
