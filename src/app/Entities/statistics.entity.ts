import {ProjectEntity} from "./project.entity";

export interface StatisticsEntity {
  id: number;
  amount: number;
  title: string;
  project: ProjectEntity;
}
