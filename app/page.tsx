'use client'

import { Suspense } from 'react'
import { LandingPageComponent } from '@/components/LandingPage'
import { GitLabLandingPageComponent } from '@/components/GitLabLandingPage'
import ClientSideRenderer from '@/components/ClientSideRenderer'

export default function BlockPage() {
  return (
    <Suspense fallback={<InitialLoadingSkeleton />}>
      <ClientSideRenderer>
        {({ showGitLabVersion }) => (
          <main>
            {showGitLabVersion ? <GitLabLandingPageComponent /> : <LandingPageComponent />}
          </main>
        )}
      </ClientSideRenderer>
    </Suspense>
  )
}

function InitialLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-900 p-4">
      <div className="h-10 w-32 bg-gray-800 mb-4" />
      <div className="h-64 w-full bg-gray-800 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-40 w-full bg-gray-800" />
        <div className="h-40 w-full bg-gray-800" />
        <div className="h-40 w-full bg-gray-800" />
      </div>
    </div>
  )
}
