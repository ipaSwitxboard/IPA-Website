import {PhotoEntity} from "./photo.entity";
import {GoalEntity} from "./goal.entity";
import {OrganizationEntity} from "./organization.entity";
import {PackageEntity} from "./package.entity";
import {FamilyEntity} from "./family.entity";
import {StatisticsEntity} from "./statistics.entity";

export interface ProjectEntity {
  id: number;
  title: string;
  description: string;
  country: string;
  goal_intro: string;
  goals: GoalEntity[];
  founders: OrganizationEntity[];
  statistics: StatisticsEntity[];
  packages: PackageEntity[];
  familyFounders: FamilyEntity[];
  end_date: Date;
  picture : string;

}
