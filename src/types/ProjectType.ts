interface LinksProps {
  name: string;
  link: string;
}

export interface DetailProjectProps {
  title: string;
  image: string;
  desc: string;
  tech: any[];
  links?: LinksProps[] | null;
  href?: string;
}
