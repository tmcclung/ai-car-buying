import { notFound } from 'next/navigation'
import { EnhancedComparisonPage } from '@/components/EnhancedComparisonPage'
import { gitlabFeatures } from '../gitlab/page'
import { signadotFeatures } from '../signadot/page'
import { bunnyshellFeatures } from '../bunnyshell/page'
import { quoveryFeatures } from '../quovery/page'
import { shipyardFeatures } from '../shipyard/page'

const competitorMap = {
  gitlab: { name: 'GitLab', features: gitlabFeatures },
  signadot: { name: 'Signadot', features: signadotFeatures },
  bunnyshell: { name: 'Bunnyshell', features: bunnyshellFeatures },
  quovery: { name: 'Quovery', features: quoveryFeatures },
  shipyard: { name: 'Shipyard', features: shipyardFeatures },
}

export default function ComparisonPage({ params }: { params: { slug: string[] } }) {
  const competitor = params.slug[0]?.split('.')[0].toLowerCase()
  const competitorData = competitorMap[competitor]

  if (!competitorData) {
    notFound()
  }

  return (
    <EnhancedComparisonPage
      competitorName={competitorData.name}
      features={competitorData.features}
    />
  )
}
