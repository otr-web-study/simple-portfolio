import { useControlsStore } from '@/stores/controls-store';
import { useProjectsStore } from '@/stores/projects-store';
import { type Project } from '@/types/Project';
import data from '@/data/data.json';

export const useFetchData = () => {
  const { addProjects } = useProjectsStore();
  const { addFilter } = useControlsStore();

  addProjects(data as Project[]);

  const filter = data.reduce(
    (acc, item) => {
      item.technologies.forEach((key) => {
        acc[key] = false;
      });

      return acc;
    },
    {} as Record<string, boolean>,
  );

  addFilter(filter);
};
