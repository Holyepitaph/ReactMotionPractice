"use client"


import { motion } from 'framer-motion'
import {MeteorA, MeteorB, MeteorC, MeteorD, ScrollBar} from './animation.js'
import {Menu, Footer} from './menu.js'
import {ParA, ParB} from './text.js'
import { ImageA } from '/app/images.js'
import { CardA, CardB, CardC, CardD, CardE } from './cards.js'
import { Test } from './test.js'

export default function Main() {
  return (
    <main className="">
 
        <MeteorA/>
        <MeteorB/>
        <MeteorC/>
        <MeteorD/> 
        <Menu/>
        <ParA/>
        <ImageA/>
        <ScrollBar/>
        <ParB/>
        <div className='grid lg:grid-cols-2 md:gap-4'>
          <CardA/>
          <CardB/>
          <CardC/>
          <CardD/>
        </div>
        <CardE/>
        <Footer/>
        
    </main>
  )
}
