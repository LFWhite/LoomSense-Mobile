import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

import { Project } from '../types/Project';

type ProjectContextValue = {
  project: Project;
  updateProject: <K extends keyof Project>(
    field: K,
    value: Project[K],
  ) => void;
  resetProject: () => void;
};

const initialProject: Project = {
  id: '',
  name: '',
  shaftCount: 8,
  treadleCount: 10,
  patternName: '',
};

const ProjectContext = createContext<
  ProjectContextValue | undefined
>(undefined);

type ProjectProviderProps = {
  children: ReactNode;
};

export function ProjectProvider({
  children,
}: ProjectProviderProps) {
  const [project, setProject] =
    useState<Project>(initialProject);

  function updateProject<K extends keyof Project>(
    field: K,
    value: Project[K],
  ) {
    setProject((currentProject) => ({
      ...currentProject,
      [field]: value,
    }));
  }

  function resetProject() {
    setProject(initialProject);
  }

  return (
    <ProjectContext.Provider
      value={{
        project,
        updateProject,
        resetProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      'useProject must be used inside a ProjectProvider',
    );
  }

  return context;
}