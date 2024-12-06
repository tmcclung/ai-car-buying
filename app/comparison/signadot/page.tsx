'use client'

import { EnhancedComparisonPage } from '@/components/EnhancedComparisonPage'

const signadotFeatures = [
  {
    name: "Ephemeral Environments",
    release: true,
    competitor: true,
    description: "Release provides full-stack, isolated Ephemeral Environments for every code change. Signadot offers ephemeral environments but focuses primarily on Kubernetes-based microservices testing, limiting its scope."
  },
  {
    name: "Complex Environment Support",
    release: true,
    competitor: false,
    description: "Release excels in supporting highly complex, multi-service architectures across various cloud providers and technologies. Signadot's focus on Kubernetes limits its ability to handle diverse and complex environment types."
  },
  {
    name: "Environment-based CI/CD",
    release: true,
    competitor: false,
    description: "Release offers a full set of integrations with a focus on Environment-based CI/CD and automation across various platforms. Signadot's CI/CD capabilities are more limited and Kubernetes-centric."
  },
  {
    name: "Infrastructure Flexibility",
    release: true,
    competitor: false,
    description: "Release supports multiple infrastructure definitions (Terraform, Helm, Docker Compose) and cloud providers. Signadot is primarily limited to Kubernetes-native applications, offering less flexibility."
  },
  {
    name: "Cost-Effectiveness",
    release: true,
    competitor: false,
    description: "Release's comprehensive approach to resource management and automation leads to significant cost savings. Users typically reduce DevOps costs by 40-60% compared to Signadot, especially for non-Kubernetes environments where Release's flexibility provides substantial advantages."
  },
  {
    name: "Scalability",
    release: true,
    competitor: false,
    description: "Release scales environments across all stages and types without significant overhead. Signadot's approach may limit scalability options, especially for non-Kubernetes environments."
  },
  {
    name: "Developer Tooling",
    release: true,
    competitor: true,
    description: "Release provides comprehensive developer tools optimized for various environment types and workflows. Signadot offers good tools but is more focused on Kubernetes-specific workflows, potentially limiting broader applicability."
  }
]

export default function Signadot() {
  return <EnhancedComparisonPage competitorName="Signadot" features={signadotFeatures} />
}
