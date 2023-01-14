import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Footer from '@/components/footer'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import ProjectPreview from '@/components/project_preview'
import Layout from '@/components/layout'
import ProjectDetails from '@/components/project_details'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
        <div><ProjectDetails /></div>
  )
}
