import { Inter } from '@next/font/google'
import ProjectPreview, { PreviewProps } from '@/components/project_preview'
import { createClient } from 'next-sanity';
import { GetStaticProps, NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage<Wrapper> = (props) => {


  return (
    <div className="flex flex-wrap place-content-center gap-2">
      {props.projects.map(element => (
        <ProjectPreview key={element.title} {...element} />)
      )}

    </div>
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

interface Wrapper {
  projects: HomeProps[]
}

interface HomeProps {
  title: string;
  description: string;
  image: string;
  _id: string;
}

export const getStaticProps: GetStaticProps<Wrapper> = async () => {
  const projects = await client.fetch(`*[_type == "Project"]`);

  return {
    props: {
      projects
    }
  };
}


export default Home;