import { Container } from '@/components/common/container'
import { About, FeaturedWork, Hero, TechStack, WhatIDo } from '@/components/sections'

const page = () => {
  return (
    <Container>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <About />
      <TechStack />
    </Container>
  )
}

export default page
