import { Container } from '@/components/common/container'
import { About, FeaturedWork, Hero, WhatIDo } from '@/components/sections'

const page = () => {
  return (
    <Container>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <About />
    </Container>
  )
}

export default page
