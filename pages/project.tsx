import { Inter } from '@next/font/google'
import ProjectDetails from '@/components/project_details'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { createClient } from 'next-sanity'
import { ProjectDetailProps } from '@/components/ProjectDetailProps'

const inter = Inter({ subsets: ['latin'] })


const Home: NextPage<ProjectDetailProps> = (props) => {
  return (
        <div><ProjectDetails {...props} /></div>
  )
}

const client = createClient(
  {
    projectId: "auuybyy6",
    dataset: "production",
    apiVersion: "2023-01-30",
    useCdn: false
  }
);


Home.getInitialProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const project: ProjectDetailProps = await client.fetch(`*[_id == "${id}"][0]`);
  return project;
};

export default Home;
