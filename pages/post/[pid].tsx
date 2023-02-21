import { ProjectDetailProps } from '@/sanitytypes/ProjectDetailProps'
import ProjectDetails from '@/components/project_details'
import { InferGetStaticPropsType, NextPage } from 'next'
import { createClient } from 'next-sanity'
import { useRouter } from 'next/router'

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    return (
          <div><ProjectDetails {...props.project} /></div>
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

export async function getStaticProps(context: any) {
    const { pid = "" } = context.params
    const project: ProjectDetailProps = await client.fetch(`*[_id == "${pid}"][0]`);
    return {
        props: {
            project
        }
    }
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "Project"]{title, 'pid': _id}`
    )

    const a = paths.map((proj: any) => ({ params: { pid: proj.pid } }));
    return {
        paths: paths.map((proj: any) => ({ params: { pid: proj.pid } })),
        fallback: true,
    }
}

export default Post