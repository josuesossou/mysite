export type Project = {
    title: string,
    description: string,
    images: Img[],
    link: string,
    tools: Skill[]
}
export type Projects = {
    showcase: Project[],
    regular: Project[]
}
export type Skill = {
    name: string,
    icon: string
}
export type Img = {
    img: string,
    details: string
}
export type Portfolio = {
    about: string,
    skills: Skill[],
    projects: Projects
}