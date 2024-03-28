interface IMaxWidthWrapper {
	className?: string;
	children: React.ReactNode;
}

interface ICOURSEITEM {
  link: string;
  name: string;
}

interface ICOURSEHEADER {
  image: string;
  header: string;
  description: string;
  link: string;
}

interface ICOURSELIST{
  icon?: React.ReactNode[];
  image: string;
  link: string;
  title: string;
  content: string;
}