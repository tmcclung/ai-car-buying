"use client"

import Link from "next/link"
import {
  Car,
  ChevronLeft,
  Heart,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  Clock,
  AlertCircle,
  Send,
  ArrowRight,
  ChevronRight,
  Calendar,
  DollarSign,
  Percent,
  Info,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export default function NegotiationPage() {
  const [showPermissionDialog, setShowPermissionDialog] = useState(false)

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
            <Link href="/dashboard/searches/truck/ford-f150-xlt" className="mr-4">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold">AI Negotiation</h1>
            <Badge variant="outline" className="ml-3 bg-blue-100 text-blue-700 hover:bg-blue-100">
              In Progress
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Vehicle Details - Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="border rounded-xl overflow-hidden sticky top-24">
                <div className="relative">
                  <img src="/placeholder.svg?key=jk177" alt="Ford F-150 XLT" className="w-full h-48 object-cover" />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 rounded-full h-8 w-8 p-0 bg-white/80"
                  >
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                  </Button>
                  <Badge className="absolute bottom-2 left-2 bg-green-100 text-green-800 hover:bg-green-100">
                    Vehicle Saved
                  </Badge>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-semibold text-xl">Ford F-150 XLT</h2>
                      <p className="text-gray-500">2025 • 2.7L EcoBoost V6 • 4x4</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">MSRP</span>
                      <span className="font-medium">$49,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Target Price</span>
                      <span className="font-medium text-blue-600">$46,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Current Offer</span>
                      <span className="font-medium text-green-600">$47,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Potential Savings</span>
                      <span className="font-medium text-green-600">$1,750</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-medium mb-2">Negotiation Progress</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Current</span>
                          <span>Target</span>
                        </div>
                        <div className="relative pt-1">
                          <Progress value={65} className="h-2" />
                          <div className="absolute left-[65%] top-0 h-3 w-0.5 bg-blue-600 transform -translate-x-1/2"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>$49,250</span>
                          <span>$46,000</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-medium mb-2">Dealership</h3>
                    <p className="text-sm">Towne Ford</p>
                    <p className="text-sm text-gray-500">18 miles away</p>
                    <div className="flex items-center mt-1 text-sm text-blue-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Open today: 9:00 AM - 8:00 PM</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <h3 className="font-medium mb-2">Your Negotiation Preferences</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Max Price</span>
                        <span className="font-medium">$47,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Financing</span>
                        <span className="font-medium">Pre-approved 3.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Trade-in</span>
                        <span className="font-medium">No</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Timeline</span>
                        <span className="font-medium">Within 2 weeks</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-3 rounded-lg">
                      Edit Preferences
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Negotiation Activity - Main Content */}
            <div className="lg:col-span-8 space-y-6">
              <Card className="border rounded-xl overflow-hidden">
                {/* Completely redesigned header section */}
                <div className="border-b">
                  <Tabs defaultValue="activity" className="w-full">
                    <div className="px-4 pt-4 pb-0 flex items-center">
                      <div className="flex items-center mr-4">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <MessageSquare className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-sm">AI Negotiator</span>
                      </div>
                      <TabsList className="bg-gray-100 p-1 rounded-t-lg">
                        <TabsTrigger value="activity" className="rounded-md text-sm">
                          Activity
                        </TabsTrigger>
                        <TabsTrigger value="strategy" className="rounded-md text-sm">
                          Strategy
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="rounded-md text-sm">
                          Settings
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="activity" className="p-0 m-0 overflow-hidden border-t">
                      <div className="flex flex-col h-[600px]">
                        <ScrollArea className="flex-1 p-4">
                          <div className="space-y-6 pr-2">
                            {/* Negotiation Started */}
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                                <MessageSquare className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium">AI Negotiator</span>
                                  <span className="text-xs text-gray-500">Today, 10:15 AM</span>
                                </div>
                                <p className="text-sm">
                                  I've started the negotiation process for your Ford F-150 XLT. Based on market data and
                                  current incentives, I've set a target price of $46,000, which is $3,250 below MSRP.
                                </p>
                                <p className="text-sm mt-2">
                                  I'll be contacting Towne Ford through multiple channels to negotiate the best possible
                                  price for you. I'll keep you updated on my progress.
                                </p>
                              </div>
                            </div>

                            {/* Lead Form Submission */}
                            <div className="relative pl-4 border-l-2 border-gray-200 ml-4">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <FileText className="h-2 w-2 text-blue-600" />
                              </div>
                              <div className="mb-1 flex items-center">
                                <span className="text-xs font-medium">Lead Form Submitted</span>
                                <span className="text-xs text-gray-500 ml-2">10:17 AM</span>
                                <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 text-xs">
                                  Completed
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600">
                                I've submitted an inquiry through Towne Ford's website expressing interest in the F-150
                                XLT and requesting their best price.
                              </p>
                            </div>

                            {/* Email Sent */}
                            <div className="relative pl-4 border-l-2 border-gray-200 ml-4">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <Mail className="h-2 w-2 text-blue-600" />
                              </div>
                              <div className="mb-1 flex items-center">
                                <span className="text-xs font-medium">Email Sent to Sales Manager</span>
                                <span className="text-xs text-gray-500 ml-2">10:22 AM</span>
                                <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 text-xs">
                                  Completed
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600">
                                I've sent a detailed email to the sales manager at Towne Ford, mentioning that you're
                                also considering other dealerships and requesting their best offer on the F-150 XLT.
                              </p>
                              <Button variant="link" className="h-auto p-0 text-xs text-blue-600">
                                View Email
                              </Button>
                            </div>

                            {/* Dealer Response */}
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                                <MessageSquare className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium">AI Negotiator</span>
                                  <span className="text-xs text-gray-500">Today, 11:05 AM</span>
                                </div>
                                <p className="text-sm">
                                  I've received a response from Towne Ford. Their initial offer is $48,500, which is
                                  $750 below MSRP but still $2,500 above our target price.
                                </p>
                                <p className="text-sm mt-2">
                                  The sales manager mentioned they have limited inventory of the F-150 XLT with the
                                  specific features you want, which is why they're not being more aggressive with the
                                  discount.
                                </p>
                              </div>
                            </div>

                            {/* Phone Call */}
                            <div className="relative pl-4 border-l-2 border-gray-200 ml-4">
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
                                <Phone className="h-2 w-2 text-blue-600" />
                              </div>
                              <div className="mb-1 flex items-center">
                                <span className="text-xs font-medium">Phone Call with Sales Manager</span>
                                <span className="text-xs text-gray-500 ml-2">11:30 AM</span>
                                <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 text-xs">
                                  Completed
                                </Badge>
                              </div>
                              <p className="text-xs text-gray-600">
                                I called the sales manager to discuss their offer. I emphasized your strong interest in
                                the vehicle but mentioned that you have a budget constraint and are considering other
                                options.
                              </p>
                              <Button variant="link" className="h-auto p-0 text-xs text-blue-600">
                                Listen to Call
                              </Button>
                            </div>

                            {/* Counter Offer */}
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                                <MessageSquare className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium">AI Negotiator</span>
                                  <span className="text-xs text-gray-500">Today, 12:15 PM</span>
                                </div>
                                <p className="text-sm">
                                  After the phone call, I countered with an offer of $45,500, which is slightly below
                                  our target price. I mentioned that you're pre-approved for financing but would
                                  consider their financing if they can match or beat your rate of 3.9%.
                                </p>
                                <p className="text-sm mt-2">
                                  I also inquired about any additional incentives or rebates that might be available,
                                  particularly any end-of-month promotions.
                                </p>
                              </div>
                            </div>

                            {/* Dealer Counter */}
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center mt-1">
                                <MessageSquare className="h-4 w-4 text-blue-600" />
                              </div>
                              <div className="flex flex-col gap-1 rounded-xl bg-gray-50 p-3 max-w-[80%]">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-medium">AI Negotiator</span>
                                  <span className="text-xs text-gray-500">Today, 1:45 PM</span>
                                </div>
                                <p className="text-sm">
                                  The dealership has countered with an offer of $47,500, which is $1,750 below MSRP.
                                  They've also offered a financing rate of 3.7%, which is better than your pre-approved
                                  rate.
                                </p>
                                <p className="text-sm mt-2">
                                  They mentioned they have a Ford promotion ending this week that includes a $500
                                  rebate, which is already factored into their offer.
                                </p>
                                <div className="mt-3 bg-blue-50 p-3 rounded-lg border border-blue-100">
                                  <div className="flex items-center">
                                    <AlertCircle className="h-4 w-4 text-blue-600 mr-2" />
                                    <h4 className="text-sm font-medium text-blue-800">Decision Required</h4>
                                  </div>
                                  <p className="text-xs text-blue-700 mt-1">
                                    Their offer of $47,500 is above your maximum price of $47,000. Would you like me to:
                                  </p>
                                  <div className="mt-2 flex gap-2">
                                    <Button
                                      size="sm"
                                      className="rounded-lg bg-blue-600 hover:bg-blue-700 text-xs h-8"
                                      onClick={() => setShowPermissionDialog(true)}
                                    >
                                      Counter at $47,000
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="rounded-lg text-xs h-8"
                                      onClick={() => setShowPermissionDialog(true)}
                                    >
                                      Accept Offer
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="rounded-lg text-xs h-8"
                                      onClick={() => setShowPermissionDialog(true)}
                                    >
                                      Explore Options
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Waiting Status */}
                            <div className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-amber-100 flex-shrink-0 flex items-center justify-center mt-1">
                                <Clock className="h-4 w-4 text-amber-600" />
                              </div>
                              <div className="flex flex-col gap-1 rounded-xl bg-amber-50 p-3 max-w-[80%] border border-amber-100">
                                <p className="text-sm text-amber-800">
                                  Waiting for your decision before continuing the negotiation...
                                </p>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>

                        <div className="p-4 border-t">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 relative">
                              <Input
                                placeholder="Send a message to your AI negotiator..."
                                className="rounded-full pr-10"
                              />
                            </div>
                            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 h-10 w-10 p-0">
                              <Send className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="strategy" className="p-0 m-0 overflow-hidden border-t">
                      <div className="p-4 overflow-auto max-h-[600px]">
                        <h3 className="font-semibold mb-4">Negotiation Strategy</h3>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium mb-2 flex items-center">
                              <DollarSign className="h-4 w-4 text-blue-600 mr-1" />
                              Price Analysis
                            </h4>
                            <Card className="border rounded-lg p-3">
                              <p className="text-sm">
                                Based on market data, similar F-150 XLT models in your area are selling for 4-7% below
                                MSRP. Our target price of $46,000 represents a 6.6% discount, which is achievable but at
                                the aggressive end of the range.
                              </p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-gray-500 mr-2">Market Position:</span>
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                                  Somewhat Aggressive
                                </Badge>
                              </div>
                            </Card>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2 flex items-center">
                              <Calendar className="h-4 w-4 text-blue-600 mr-1" />
                              Timing Factors
                            </h4>
                            <Card className="border rounded-lg p-3">
                              <p className="text-sm">
                                We're currently 3 days away from the end of the month, which gives us some leverage as
                                dealerships try to meet monthly sales targets. Additionally, the current model year is
                                winding down with 2026 models arriving in 2 months.
                              </p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-gray-500 mr-2">Timing Advantage:</span>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Strong</Badge>
                              </div>
                            </Card>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2 flex items-center">
                              <Percent className="h-4 w-4 text-blue-600 mr-1" />
                              Incentives & Rebates
                            </h4>
                            <Card className="border rounded-lg p-3">
                              <p className="text-sm">
                                Current Ford incentives include a $500 retail bonus cash offer that expires this week.
                                There's also a potential 0.5% rate reduction for qualified buyers through Ford Credit.
                                I'm leveraging both of these in our negotiation.
                              </p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-gray-500 mr-2">Available Incentives:</span>
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Moderate</Badge>
                              </div>
                            </Card>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2 flex items-center">
                              <Info className="h-4 w-4 text-blue-600 mr-1" />
                              Dealership Analysis
                            </h4>
                            <Card className="border rounded-lg p-3">
                              <p className="text-sm">
                                Towne Ford has a moderate inventory of F-150s (8 XLT models currently), and their
                                average discount is around 5% off MSRP based on recent sales data. They have a 4.2/5
                                customer satisfaction rating and are typically willing to negotiate.
                              </p>
                              <div className="mt-2 flex items-center text-sm">
                                <span className="text-gray-500 mr-2">Negotiation Flexibility:</span>
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Moderate</Badge>
                              </div>
                            </Card>
                          </div>
                        </div>

                        <div className="mt-6">
                          <h4 className="text-sm font-medium mb-2">Next Steps</h4>
                          <ol className="list-decimal pl-5 space-y-2 text-sm">
                            <li>Counter at your maximum price of $47,000 (recommended)</li>
                            <li>Request additional value-adds (free first service, all-weather mats, etc.)</li>
                            <li>Confirm financing details and compare with your pre-approved rate</li>
                            <li>Verify all fees and charges before finalizing</li>
                          </ol>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="settings" className="p-0 m-0 overflow-hidden border-t">
                      <div className="p-4 overflow-auto max-h-[600px]">
                        <h3 className="font-semibold mb-4">Negotiation Settings</h3>

                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Price Boundaries</h4>
                            <Card className="border rounded-lg p-3">
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Target Price</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">$46,000</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Maximum Price</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">$47,000</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2">Financing Preferences</h4>
                            <Card className="border rounded-lg p-3">
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Pre-approved Rate</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">3.9%</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Term</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">60 months</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Down Payment</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">$5,000</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2">Communication Preferences</h4>
                            <Card className="border rounded-lg p-3">
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Negotiation Style</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">Balanced</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Update Frequency</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">Real-time</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Permission Level</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">Ask for major decisions</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-2">Timeline</h4>
                            <Card className="border rounded-lg p-3">
                              <div className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Purchase Timeline</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">Within 2 weeks</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Urgency Level</span>
                                  <div className="flex items-center">
                                    <span className="font-medium">Medium</span>
                                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-2">
                                      <ChevronRight className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </Card>
                          </div>
                        </div>

                        <div className="mt-6">
                          <Button className="w-full rounded-lg bg-blue-600 hover:bg-blue-700">Save Settings</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </Card>

              <Card className="border rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-semibold">Next Steps</h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <AlertCircle className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Decision Required</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          The dealership's current offer of $47,500 is above your maximum price of $47,000. Please
                          provide guidance on how you'd like to proceed with the negotiation.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Button
                            className="rounded-lg bg-blue-600 hover:bg-blue-700"
                            onClick={() => setShowPermissionDialog(true)}
                          >
                            Counter at $47,000
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={() => setShowPermissionDialog(true)}
                          >
                            Accept Current Offer
                          </Button>
                          <Button
                            variant="outline"
                            className="rounded-lg"
                            onClick={() => setShowPermissionDialog(true)}
                          >
                            Explore Other Options
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Schedule Test Drive</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          While we're negotiating, you can schedule a test drive to experience the vehicle in person.
                        </p>
                        <Button variant="outline" className="mt-2 rounded-lg">
                          Schedule Test Drive
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Review Financing Options</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Compare your pre-approved financing with the dealership's offer of 3.7% APR.
                        </p>
                        <Button variant="outline" className="mt-2 rounded-lg">
                          Compare Financing
                        </Button>
                      </div>
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
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
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

      {/* Permission Dialog */}
      <AlertDialog open={showPermissionDialog} onOpenChange={setShowPermissionDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Negotiation Action</AlertDialogTitle>
            <AlertDialogDescription>
              You're about to counter the dealership's offer of $47,500 with your maximum price of $47,000. This is
              $2,250 below MSRP (4.6% discount).
              <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-sm font-medium text-blue-800">AI Negotiator Assessment</h4>
                <p className="text-sm text-blue-700 mt-1">
                  This counter-offer has a moderate chance of success. The dealership may accept it to close the deal
                  quickly, especially since we're near the end of the month.
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">Proceed with Counter Offer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-blue-600 hover:bg-blue-700">
              <MessageSquare className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat with AI Negotiator</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
