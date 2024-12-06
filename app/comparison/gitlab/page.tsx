'use client'

import { EnhancedComparisonPage } from '@/components/EnhancedComparisonPage'

const gitlabFeatures = [
  {
    name: "Ephemeral Environments",
    release: true,
    competitor: false,
    description: "Release is built around the concept of Ephemeral Environments, providing fully isolated, disposable environments for every pull request. GitLab's review apps offer limited environment isolation and are not as comprehensive."
  },
  {
    name: "Complex Environment Support",
    release: true,
    competitor: false,
    description: "Release excels in supporting complex, multi-service architectures and microservices across various cloud providers. GitLab's environment support is more limited and less flexible for intricate setups."
  },
  {
    name: "Environment-based CI/CD",
    release: true,
    competitor: true,
    description: "Release offers a full set of integrations focused on Environment-based CI/CD and automation. While GitLab has CI/CD capabilities, Release's approach provides more granular control and flexibility for complex workflows."
  },
  {
    name: "Infrastructure as Code",
    release: true,
    competitor: true,
    description: "Release supports multiple IaC tools like Terraform, Helm, and Docker Compose, offering greater flexibility. GitLab's IaC support is more limited and less integrated with ephemeral environments."
  },
  {
    name: "Cost Optimization",
    release: true,
    competitor: false,
    description: "Release's Ephemeral Environment approach and efficient resource allocation lead to significant cost savings, especially for complex setups. GitLab's pricing model and resource management are less optimized for varied environment needs."
  },
  {
    name: "Cost-Effectiveness",
    release: true,
    competitor: false,
    description: "Release offers superior cost savings through its pay-per-use model and efficient resource management. Users typically save 40-60% on DevOps costs compared to GitLab's fixed pricing, which can lead to overprovisioning and wasted resources."
  },
  {
    name: "Developer Productivity",
    release: true,
    competitor: true,
    description: "Release's focus on Ephemeral Environments and automated workflows significantly boosts developer productivity, especially for complex projects. GitLab offers good productivity tools but lacks the deep integration with ephemeral environments."
  }
]

export default function Gitlab() {
  return <EnhancedComparisonPage competitorName="GitLab" features={gitlabFeatures} />
}
