'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckIcon, StarIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'

export function LandingPageComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className={`sticky top-0 z-50 w-full border-b bg-[#29063e] text-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/releaselogo-5kSBfSjirGYalBpjEwxUJEKBdrcG02.svg"
                alt="Release Logo"
                width={110}
                height={25}
                priority
                className="brightness-0 invert"
              />
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 right-0 flex-col bg-[#29063e] p-4 md:relative md:flex md:flex-row md:items-center md:space-x-4 md:p-0`}>
              <Link href="#features" className="text-sm font-medium hover:text-gray-200 py-2 md:py-0">Features</Link>
              <Link href="https://release.com/pricing" className="text-sm font-medium hover:text-gray-200 py-2 md:py-0">Pricing</Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-gray-200 py-2 md:py-0">How it Works</Link>
              <Link href="https://release.com/use-cases" className="text-sm font-medium hover:text-gray-200 py-2 md:py-0">Use Cases</Link>
              <Link href="#faq" className="text-sm font-medium hover:text-gray-200 py-2 md:py-0">FAQs</Link>
              <Link href="https://release.com/blog" className="text-sm font-medium hover:text-gray-200 py-2 md:py-0">Blog</Link>
              <div className="md:hidden mt-4">
                <Link href="https://web.release.com/login" className="block text-sm font-medium hover:text-gray-200 py-2">Login</Link>
                <Link href="https://release.com/signup" className="block mt-2">
                  <Button className="w-full bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Get Started</Button>
                </Link>
              </div>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="https://web.release.com/login" className="text-sm font-medium hover:text-gray-200">Login</Link>
              <Link href="https://release.com/signup">
                <Button className="bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Faster, Cheaper DevOps. Happier Developers.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Accelerate your development workflow with Release. Create, manage, and scale on-demand environments in minutes. Empower your developers and reduce DevOps costs.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4" /> Instant environment creation</li>
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4" /> Automated infrastructure management</li>
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4" /> Seamless team collaboration</li>
                  <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4" /> Significant cost savings</li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://release.com/signup">
                    <Button size="lg" className="bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Start Free Trial</Button>
                  </Link>
                  <Link href="https://release.com/book-a-demo">
                    <Button size="lg" variant="outline" className="border-[#00bb93] text-[#00bb93] hover:bg-[#00bb93] hover:text-white">Schedule Demo</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <blockquote className="text-lg font-semibold">
                    "Release has cut our deployment time by 75% and saved us $200k in DevOps costs annually."
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DB-Logo_Blue-MD-AX8qss5c3JystqyyNzAiKzp0jO26bG.webp"
                      alt="DebtBook Logo"
                      width={120}
                      height={40}
                      className="mr-2"
                    />
                    <div>
                      <p className="font-semibold">Michael Gorsuch</p>
                      <p className="text-sm text-gray-500">Director of Infrastructure, DebtBook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features of Release</h2>
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              {[
                { title: "Instant Environments", description: "Spin up full-stack environments in minutes, not days. Accelerate your development process." },
                { title: "Automated DevOps", description: "Let our platform handle the infrastructure management for you. Focus on coding, not configuration." },
                { title: "Team Collaboration", description: "Share environments instantly with your entire team. Improve communication and productivity." },
                { title: "Cost Optimization", description: "Pay only for what you use, scale as you grow. Reduce infrastructure and personnel costs." },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How Release Works</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { title: "Connect", description: "Link your Git repository to Release. Seamless integration with your existing workflow." },
                { title: "Configure", description: "Set up your environment specifications. Customize to your project's needs." },
                { title: "Deploy", description: "Instantly create environments for each pull request. Accelerate your review process." },
              ].map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="mr-2 bg-[#00bb93] text-white rounded-full w-8 h-8 flex items-center justify-center">
                        {index + 1}
                      </span>
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{step.description}</p>
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

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Release for Your Development Workflow?</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                { title: "Faster Development Cycles", description: "Reduce time from code to production significantly. Ship features faster with Release." },
                { title: "Reduced Costs", description: "Save on infrastructure and personnel costs. Optimize your DevOps spending." },
                { title: "Improved Team Productivity", description: "Let developers focus on coding, not environment management. Boost your team's efficiency." },
                { title: "Enhanced Collaboration", description: "Share environments instantly with stakeholders. Improve feedback and iteration cycles." },
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Customers Say About Release</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: "Lilith Carpenter",
                  role: "Staff Software Engineer, DebtBook",
                  content: "Within 10 minutes of pushing up a commit I have an environment link for others to see my work. Today a ticket from creation to completely reviewed/tested and merged takes < 2 hours. A year ago that would have taken days.",
                },
                {
                  name: "Ivan Lee",
                  role: "CEO, Datasaur",
                  content: "Release has enabled us to move quickly and deliver higher quality solutions. Instead of building an environment platform ourselves, we've focused on our application and scaled rapidly without sacrificing capabilities. They've been an invaluable partner in our growth.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Product Manager, HealthTech Innovations",
                  content: "Our team collaboration has never been better. Sharing environments is now a breeze with Release.",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <p className="italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl  font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions About Release</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {[
                {
                  question: "How does Release work?",
                  answer: "Release integrates with your Git repository and automatically creates on-demand environments for each pull request. It handles the infrastructure setup, allowing your team to focus on development. This streamlines your workflow and accelerates your development process.",
                },
                {
                  question: "Is Release secure?",
                  answer: "Yes, Release employs industry-standard security measures, including data encryption, regular security audits, and compliance with major security standards. We prioritize the safety and integrity of your code and data.",
                },
                {
                  question: "How much can I save by using Release?",
                  answer: "Customers typically save 40-60% on their DevOps costs by using Release, primarily through reduced personnel needs and more efficient resource utilization. The exact savings can vary based on your current setup and needs.",
                },
                {
                  question: "Can Release integrate with my existing tools?",
                  answer: "Release integrates seamlessly with popular tools like GitHub, GitLab, Bitbucket, Kubernetes, and Terraform, among others. This allows you to incorporate Release into your existing workflow with minimal disruption.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#29063e] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Development Process with Release?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl">
                Join the companies that have accelerated their development and reduced costs with Release. Experience the power of ephemeral environments today.
              </p>
              <Link href="https://release.com/signup">
                <Button size="lg" className="bg-[#00bb93] text-white hover:bg-[#00bb93]/90">Start Your Free Trial with Release Now</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-10 md:h-24 md:flex-row md:items-center md:py-0">
            <div className="flex flex-1 items-center justify-center md:justify-start">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/releaselogo-5kSBfSjirGYalBpjEwxUJEKBdrcG02.svg"
                alt="Release Logo"
                width={90}
                height={20}
              />
            </div>
            <nav className="flex items-center justify-center gap-4 text-sm md:justify-end">
              <Link href="https://release.com/terms-of-service" className="text-gray-500 hover:text-gray-900">Terms of Service</Link>
              <Link href="https://release.com/privacy-policy" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
