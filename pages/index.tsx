import { Inter } from '@next/font/google'
import ProjectPreview, { PreviewProps } from '@/components/project_preview'
import { GetStaticProps, NextPage } from 'next'
import client from '@/sanitytypes/Connection'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage<Wrapper> = (props) => {


  return (
    <div className="flex items-center place-content-center gap-2 flex-wrap">
      {props.projects.map(element => (
        <ProjectPreview key={element.title} {...element} />)
      )}

    </div>
  )
}

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