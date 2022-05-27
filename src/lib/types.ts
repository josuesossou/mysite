
export type Project = {
    title: string,
    description: string,
    images: string[],
    link: string,
    tools: string[]
}
export type Projects = {
    showcase: Project[],
    regular: Project[]
}
export type Skill = {
    name: string,
    icon: string
}
export type Portfolio = {
    about: string,
    skills: Skill[],
    projects: Projects
}