'use client'

import { EnhancedComparisonPage } from '@/components/EnhancedComparisonPage'

export const shipyardFeatures = [
  {
    name: "Ephemeral Environments",
    release: true,
    competitor: true,
    description: "Release is built around the concept of Ephemeral Environments, providing true isolated environments for every code change. While Shipyard offers ephemeral environments, Release's implementation is more comprehensive and deeply integrated into the development workflow."
  },
  {
    name: "Complex Environment Support",
    release: true,
    competitor: false,
    description: "Release excels in supporting highly complex, multi-service architectures and microservices across various cloud providers. Shipyard's support for intricate environments is more limited in scope and flexibility."
  },
  {
    name: "Environment-based CI/CD",
    release: true,
    competitor: true,
    description: "Release offers a full set of integrations with a focus on Environment-based CI/CD and automation. Shipyard provides CI/CD capabilities, but Release's environment-centric approach offers more advanced automation and flexibility, especially for complex setups."
  },
  {
    name: "Infrastructure as Code",
    release: true,
    competitor: true,
    description: "Release supports a wide range of IaC tools and custom configurations. While Shipyard supports IaC, Release offers more extensive options and better integration with ephemeral environments."
  },
  {
    name: "Cost-Effectiveness",
    release: true,
    competitor: true,
    description: "While both platforms aim to reduce costs, Release's comprehensive automation and efficient resource management lead to greater cost savings. Users typically reduce DevOps costs by 40-60% with Release, outperforming Shipyard's cost optimization, especially for complex, multi-service architectures."
  },
  {
    name: "Developer Tooling",
    release: true,
    competitor: true,
    description: "Release provides advanced developer tools optimized for Ephemeral Environments and complex setups. Shipyard offers good tooling, but Release's solutions are more comprehensive for varied environment needs and workflows."
  },
  {
    name: "Scalability and Resource Efficiency",
    release: true,
    competitor: false,
    description: "Release's architecture is designed for seamless scaling and optimal resource utilization across all environment types. This leads to significant cost savings and better performance compared to Shipyard, especially for large-scale, complex projects."
  }
]

export default function Shipyard() {
  return <EnhancedComparisonPage competitorName="Shipyard" features={shipyardFeatures} />
}
