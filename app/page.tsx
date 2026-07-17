import { Container } from '@/components/common/container'
import { FeaturedWork, Hero, WhatIDo } from '@/components/sections'

const page = () => {
  return (
    <Container>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
    </Container>
  )
}

export default page
