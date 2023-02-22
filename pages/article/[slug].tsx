import { InferGetStaticPropsType, NextPage } from 'next'
import { createClient } from 'next-sanity'
import { ArticleProps } from '@/sanitytypes/ArticleProps'
import Article from '@/components/article'
import client from '@/sanitytypes/Connection'

const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    return (
          <div><Article {...props.article} /></div>
    )
  }


export async function getStaticProps(context: any) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const article: ArticleProps = await client.fetch(`*[_type == 'article' && slug == '${slug}'][0]`);
    return {
        props: {
            article
        }
    }
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "Article"]{title, 'slug': slug}`
    )

    const a = paths.map((proj: any) => ({ params: { slug: proj.slug } }));
    return {
        paths: paths.map((proj: any) => ({ params: { slug: proj.slug } })),
        fallback: true,
    }
}

export default Post