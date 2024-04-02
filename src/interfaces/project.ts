export default interface ProjectData {
  title: string;
  description: string;
  slug: string;
  projects: [
    {
      title: string;
      descritption: string;
      image: string;
    }
  ];
}
