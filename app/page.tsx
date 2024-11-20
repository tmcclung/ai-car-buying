import { LandingPageComponent } from '@/components/landing-page'
import { GitLabLandingPageComponent } from '@/components/gitlab-landing-page'

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const isGitLabVersion = searchParams.version === 'gitlab'

  return (
    <>
      {isGitLabVersion ? <GitLabLandingPageComponent /> : <LandingPageComponent />}
    </>
  )
}
