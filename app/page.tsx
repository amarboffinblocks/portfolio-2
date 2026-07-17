import { Container } from '@/components/common/container'
import { About, FeaturedWork, Hero, TechStack, Testimonials, WhatIDo } from '@/components/sections'

const page = () => {
  return (
    <Container>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <About />
      <TechStack />
      <Testimonials />
    </Container>
  )
}

export default page
