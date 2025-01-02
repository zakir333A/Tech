import React from 'react'
import Hero from '../homeComponents/HomeHero/Hero'
import AboutHome from '../homeComponents/about-home/AboutHome'
import ServicesHome from '../homeComponents/services-home/ServicesHome'
import ProductsHome from '../homeComponents/products-home/ProductsHome'
import CostumersHome from '../homeComponents/costumers-home/CostumersHome'
import CommentsHome from '../homeComponents/comments-home/commentsHome'
import Partnyors from '../components/Partnyors/Partnyors'
import PartnyorsHome from '../components/Partnyors/PartnyorsHome'
import ConstactUs from '../components/ContactUs/ConstactUs'


function Home() {
  return (
    <div>
      <Hero/>
      <AboutHome/>
      <ServicesHome/>
      <ProductsHome/>
      <CostumersHome/>
      <CommentsHome/>
      <PartnyorsHome/>
      <ConstactUs/>
    </div>
  )
} 

export default Home