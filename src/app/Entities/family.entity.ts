import {ContactEntity} from "./contact.entity";
import {PhotoEntity} from "./photo.entity";
import {GoalEntity} from "./goal.entity";
import {OfficeEntity} from "./office.entity";
import {ProjectEntity} from "./project.entity";

export interface FamilyEntity {
  id: number;
  name:string;
  description:string;
  location: string;
  project: ProjectEntity;
  offices: OfficeEntity[];
  contact: ContactEntity;
  goals: GoalEntity[];
  picture: string;
}
