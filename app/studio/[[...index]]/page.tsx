// Sanity Studio route (Next 14 App Router)
"use client"
import config from '../../../sanity.config'
import {StudioProvider, StudioLayout} from 'sanity'

export default function StudioPage() {
  return (
    <StudioProvider config={config}>
      <StudioLayout />
    </StudioProvider>
  )
}
