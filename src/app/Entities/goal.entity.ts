import {PhotoEntity} from "./photo.entity";
import {ProjectEntity} from "./project.entity";

export interface GoalEntity {
  id:number;
  image: PhotoEntity;
  title: string;
  description: string;
  project: ProjectEntity;
  picture : string;
}
