'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckIcon, XIcon, StarIcon } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

export default function HerokuLandingPage({ version = 'heroku' }: { version?: string }) {
  if (version !== 'heroku') {
    return null // Only render this page when version is 'heroku'
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />
      
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Release: The Next-Gen Heroku Alternative
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Experience the power of full-stack, ephemeral environments and cloud-native technologies. Designed for teams that have outgrown Heroku's simplicity.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-[#00bb93]" /> Full-stack, ephemeral environments for every pull request</li>
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-[#00bb93]" /> Complete control over infrastructure with Kubernetes integration</li>
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-[#00bb93]" /> Cost-effective scaling with existing cloud provider accounts</li>
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-[#00bb93]" /> Deep integration with cloud-native practices and microservices</li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://release.com/signup">
                    <Button size="lg" className="bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Start Free Trial</Button>
                  </Link>
                  <Link href="https://calendly.com/release-demo/heroku-alternative">
                    <Button size="lg" variant="outline" className="border-[#00bb93] text-[#00bb93] hover:bg-[#00bb93] hover:text-white">Schedule Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <blockquote className="text-lg font-semibold text-gray-100">
                    "Release has cut our deployment time by 75% and saved us $200k in DevOps costs annually. It's the Heroku alternative we've been looking for."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <Image
                      src="/DB-Logo_Blue-MD-AX8qss5c3JystqyyNzAiKzp0jO26bG.webp"
                      alt="Customer Logo"
                      width={60}
                      height={20}
                      className="mr-2"
                    />
                    <div>
                      <p className="font-semibold text-gray-100">Michael G.</p>
                      <p className="text-sm text-gray-400">Director of Infrastructure, Tech Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Release vs. Heroku: Key Differences</h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {[
                { 
                  title: "Environment Flexibility", 
                  release: "Full-stack, ephemeral environments for every pull request",
                  heroku: "Limited to production and staging environments",
                },
                { 
                  title: "Infrastructure Control", 
                  release: "Complete control with Kubernetes integration",
                  heroku: "Limited control due to platform constraints",
                },
                { 
                  title: "Scalability", 
                  release: "Cost-effective scaling with existing cloud providers",
                  heroku: "Can become expensive at scale",
                },
                { 
                  title: "Cloud-Native Integration", 
                  release: "Deep integration with cloud-native practices",
                  heroku: "Limited support for advanced cloud-native setups",
                },
                { 
                  title: "Use Case Fit", 
                  release: "Ideal for complex applications and enterprise projects",
                  heroku: "Better for simple applications and prototypes",
                },
              ].map((feature, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-[#00bb93] mr-2 mt-1" />
                        <p className="text-gray-300"><span className="font-bold text-[#00bb93]">Release:</span> {feature.release}</p>
                      </div>
                      <div className="flex items-start">
                        <XIcon className="h-5 w-5 text-red-500 mr-2 mt-1" />
                        <p className="text-gray-300"><span className="font-bold text-gray-400">Heroku:</span> {feature.heroku}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">How Release Improves Your Workflow</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { title: "Connect", description: "Link your Git repository to Release, just like with Heroku, but with more flexibility." },
                { title: "Configure", description: "Set up your environment specifications with full control over your infrastructure." },
                { title: "Deploy", description: "Create ephemeral environments for each pull request, going beyond Heroku's limited staging options." },
              ].map((step, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <span className="mr-2 bg-[#00bb93] text-white rounded-full w-8 h-8 flex items-center justify-center">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="https://release.com/signup">
                <Button size="lg" className="bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Get Started with Release</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Why Choose Release Over Heroku?</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { title: "Flexibility", description: "Release offers full-stack, ephemeral environments for every pull request, while Heroku limits you to production and staging." },
                { title: "Scalability", description: "Release leverages your existing cloud provider accounts for cost-effective scaling, unlike Heroku's potentially expensive scaling model." },
                { title: "Control", description: "With Release, you have complete control over your infrastructure through Kubernetes integration. Heroku's platform constraints limit your control." },
                { title: "Cloud-Native", description: "Release deeply integrates with cloud-native practices and microservices architectures, areas where Heroku falls short." },
              ].map((benefit, index) => (
                <Card key={index} className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="text-white">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "How does Release compare to Heroku in terms of pricing?",
                  answer: "Release typically offers more cost-effective scaling, especially for larger applications. While Heroku's pricing is based on dyno usage, Release allows you to leverage your existing cloud provider accounts, often resulting in significant cost savings.",
                },
                {
                  question: "Can I migrate my application from Heroku to Release easily?",
                  answer: "Yes, Release provides migration tools and support to help you transition your applications from Heroku. Our team can assist you in setting up your environments and optimizing your workflow for Release's infrastructure.",
                },
                {
                  question: "Does Release support the same languages and frameworks as Heroku?",
                  answer: "Release supports all major languages and frameworks that Heroku does, and often provides more flexibility in terms of versions and configurations. If you're using a specific buildpack on Heroku, we can help you set up an equivalent environment on Release.",
                },
                {
                  question: "How does Release's performance compare to Heroku's?",
                  answer: "Release often provides better performance, especially for complex applications, due to its use of cloud-native technologies and the ability to fine-tune your infrastructure. Many users report faster build times and more responsive applications after switching from Heroku to Release.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-white hover:text-gray-300">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Ready to Upgrade from Heroku to Release?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Join the companies that have accelerated their development and reduced costs by switching from Heroku to Release. Experience the power of truly flexible, scalable environments today.
              </p>
              <Link href="https://calendly.com/release-demo/heroku-alternative">
                <Button size="lg" className="bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Schedule a Demo to See Release in Action</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
