import {PhotoEntity} from "./photo.entity";
import {ProjectEntity} from "./project.entity";

export interface OrganizationEntity{
  id: number;
  name: string;
  description: string;
  rating: string;
  project: ProjectEntity;
  logo: PhotoEntity;
  picture : string;
  country: string;
}
