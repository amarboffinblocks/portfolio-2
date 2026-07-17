import { Container } from '@/components/common/container'
import { About, Contact, FeaturedWork, Footer, Hero, TechStack, Testimonials, WhatIDo } from '@/components/sections'

const page = () => {
  return (
    <Container>
      <Hero />
      <WhatIDo />
      <FeaturedWork />
      <About />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </Container>
  )
}

export default page
