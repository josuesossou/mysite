import { createContext } from "react";
import { Project } from "./types";

export const projectContextDefaultValues: Project = {
    id: -1,
    title: '',
    description: [],
    images: [],
    tools: [],
}

export const ProjectContext = createContext<Project>(projectContextDefaultValues)
