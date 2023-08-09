"use client"


import { motion } from 'framer-motion'
import {Meteor, ScrollBar} from './animation.js'
import {Menu, Footer} from './menu.js'
import {ParA, ParB} from './text.js'
import { ImageA } from '/app/images.js'
import { CardA, CardB, CardC, CardD, CardE } from './cards.js'

export default function Main() {
  return (
    <main className="">
        <Meteor/>
        <Menu/>
        <ParA/>
        <ImageA/>
        <ScrollBar/>
        <ParB/>
        <CardA/>
        <CardB/>
        <CardC/>
        <CardD/>
        <CardE/>
        <Footer/>
    </main>
  )
}
