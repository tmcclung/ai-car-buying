'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface ClientSideRendererProps {
  children: (props: { showGitLabVersion: boolean }) => React.ReactNode
}

export function ClientSideRenderer({ children }: ClientSideRendererProps) {
  const searchParams = useSearchParams()
  const [showGitLabVersion, setShowGitLabVersion] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    const storedPreference = localStorage.getItem('showGitLabVersion')
    const urlVersion = searchParams.get('version')

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

    setIsHydrated(true)
  }, [searchParams])

  if (!isHydrated) {
    return null
  }

  return <>{children({ showGitLabVersion })}</>
}

export default ClientSideRenderer