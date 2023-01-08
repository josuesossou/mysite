import { useContext, createContext } from "react";
import { ChildrenProp, Project } from "./types";

export const projectContextDefaultValues: Project = {
    id: -1,
    title: '',
    description: '',
    images: [],
    link: '',
    tools: [],
}

export const ProjectContext = createContext<Project>(projectContextDefaultValues)
