export interface ArticleProps {
    title: string;
    slug: string;
    body: PortableText;
}

interface PortableText {
    _type: 'block';
    children: {
      _type: 'span';
      text: string;
    }[];
  }