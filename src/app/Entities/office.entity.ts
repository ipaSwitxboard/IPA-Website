import {FamilyEntity} from "./family.entity";
import {ContactEntity} from "./contact.entity";

export interface OfficeEntity {
  id: number;
  title: string;
  family: FamilyEntity[];
  contact: ContactEntity;
}
