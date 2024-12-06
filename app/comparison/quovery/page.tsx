'use client'

import { EnhancedComparisonPage } from '@/components/EnhancedComparisonPage'

export const quoveryFeatures = [
  {
    name: "Ephemeral Environments",
    release: true,
    competitor: true,
    description: "Release's core is built around Ephemeral Environments, providing true isolation for every code change. While Quovery offers preview environments, Release's implementation is more comprehensive and deeply integrated into the development workflow."
  },
  {
    name: "Complex Environment Support",
    release: true,
    competitor: false,
    description: "Release excels in supporting highly complex, multi-service architectures and microservices across various cloud providers. Quovery's support for intricate environments is more limited in scope and flexibility."
  },
  {
    name: "Environment-based CI/CD",
    release: true,
    competitor: true,
    description: "Release provides a comprehensive set of integrations focused on Environment-based CI/CD and automation. Quovery offers CI/CD capabilities, but Release's approach provides more advanced automation and flexibility for complex workflows."
  },
  {
    name: "Infrastructure as Code",
    release: true,
    competitor: true,
    description: "Release supports a wide range of IaC tools and custom configurations. While Quovery supports IaC, Release offers more extensive options and better integration with ephemeral environments."
  },
  {
    name: "Cost-Effectiveness",
    release: true,
    competitor: false,
    description: "Release's efficient resource management and pay-per-use model lead to significant cost savings. Users typically reduce DevOps costs by 40-60% compared to Quovery, especially for complex, multi-service architectures where Release's optimizations provide substantial benefits."
  },
  {
    name: "Developer Experience",
    release: true,
    competitor: true,
    description: "Release offers advanced CLI access and tooling optimized for Ephemeral Environments and complex setups. Quovery provides a good developer experience but with less granular control over complex environments."
  },
  {
    name: "Customization and Flexibility",
    release: true,
    competitor: false,
    description: "Release offers more flexibility in environment configurations, especially for complex setups. Quovery's more automated approach may limit customization options for intricate environments."
  }
]

export default function Quovery() {
  return <EnhancedComparisonPage competitorName="Quovery" features={quoveryFeatures} />
}
