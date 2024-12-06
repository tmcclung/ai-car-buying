'use client'

import { EnhancedComparisonPage } from '@/components/EnhancedComparisonPage'

const bunnyshellFeatures = [
  {
    name: "Ephemeral Environments",
    release: true,
    competitor: true,
    description: "Release's core is built around Ephemeral Environments, providing true isolation for every code change. While Bunnyshell offers ephemeral environments, Release's implementation is more deeply integrated into the development workflow."
  },
  {
    name: "Complex Environment Support",
    release: true,
    competitor: false,
    description: "Release excels in supporting highly complex, multi-service architectures and microservices across various cloud providers. Bunnyshell's support for intricate environments is more limited in scope and flexibility."
  },
  {
    name: "Environment-based CI/CD",
    release: true,
    competitor: true,
    description: "Release provides a comprehensive set of integrations focused on Environment-based CI/CD and automation. Bunnyshell offers CI/CD capabilities, but Release's approach provides more advanced automation and flexibility for complex workflows."
  },
  {
    name: "Infrastructure as Code",
    release: true,
    competitor: true,
    description: "Release supports a wide range of IaC tools and custom configurations. While Bunnyshell supports IaC, Release offers more extensive options and better integration with ephemeral environments."
  },
  {
    name: "Cost-Effectiveness",
    release: true,
    competitor: false,
    description: "Release's efficient resource management and automation lead to significant cost savings. Users typically reduce DevOps costs by 40-60% compared to Bunnyshell, especially for complex, multi-service architectures where Release's optimizations shine."
  },
  {
    name: "Scalability",
    release: true,
    competitor: true,
    description: "Release's architecture is designed for seamless scaling across all environment types, from simple to highly complex. Bunnyshell offers good scalability but may face limitations with more intricate, multi-service configurations."
  },
  {
    name: "Developer Experience",
    release: true,
    competitor: true,
    description: "Release provides advanced CLI tools and integrations optimized for Ephemeral Environments and complex setups. Bunnyshell offers a good developer experience, but Release's tools are more comprehensive for varied environment needs."
  }
]

export default function Bunnyshell() {
  return <EnhancedComparisonPage competitorName="Bunnyshell" features={bunnyshellFeatures} />
}
