'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { LandingPageComponent } from '@/components/landing-page'
import { GitLabLandingPageComponent } from '@/components/gitlab-landing-page'

export default function Home() {
  const searchParams = useSearchParams()
  const [showGitLabVersion, setShowGitLabVersion] = useState<boolean | null>(null)

  useEffect(() => {
    // Check localStorage first
    const storedPreference = localStorage.getItem('showGitLabVersion')
    const urlVersion = searchParams.get('version')

    // This logic ensures that:
    // 1. ?version=gitlab always shows the GitLab version
    // 2. ?version=regular always shows the regular version
    // 3. If no version is specified, it uses the stored preference
    // 4. If no stored preference, it defaults to the regular version
    if (urlVersion === 'gitlab') {
      setShowGitLabVersion(true)
      localStorage.setItem('showGitLabVersion', 'true')
    } else if (urlVersion === 'regular' || (!urlVersion && storedPreference !== 'true')) {
      setShowGitLabVersion(false)
      localStorage.setItem('showGitLabVersion', 'false')
    } else if (storedPreference === 'true') {
      setShowGitLabVersion(true)
    } else {
      setShowGitLabVersion(false)
    }
  }, [searchParams])

  // Don't render anything until we've determined which version to show
  if (showGitLabVersion === null) {
    return null
  }

  return (
    <main>
      {showGitLabVersion ? <GitLabLandingPageComponent /> : <LandingPageComponent />}
    </main>
  )
}
