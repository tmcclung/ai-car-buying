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

    if (urlVersion === 'gitlab' || storedPreference === 'true') {
      setShowGitLabVersion(true)
      localStorage.setItem('showGitLabVersion', 'true')
    } else {
      setShowGitLabVersion(false)
      localStorage.setItem('showGitLabVersion', 'false')
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
