export type Project = {
    id: number,
    title: string,
    description: string,
    images: Img[],
    link: string,
    tools: Skill[],
    showcase?: boolean
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
    projects: Project[]
}