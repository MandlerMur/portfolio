import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Footer from '@/components/footer'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import ProjectPreview, { PreviewProps } from '@/components/project_preview'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const projectPreviews: PreviewProps[] = [];
  projectPreviews.push(
    {
      description: 'Roger Nilsen dro på blind date med fire ukjente kvinner.',
      image: '/daffadigg.jpg',
      title: 'Speed date med Roger Nilsen'
    });
  projectPreviews.push(
    {
      description: 'Hva skjedde med parkeringen når Sband7 måtte flykte?',
      image: '/parking.png',
      title: 'Sband7 - What about parking?'
    });

  return (
    <div>
      {projectPreviews.map(element => (
          <ProjectPreview  {...element} />)
      )}



    </div>
  )
}
