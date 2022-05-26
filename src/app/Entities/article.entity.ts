import {PhotoEntity} from "./photo.entity";

export interface Article{
  id: number | undefined;
  title: string;
  description: string;
  paragraph1: string;
  paragraph2: string;
  video: string;
  pictures: PhotoEntity[];
  picture: string;
  writer: string;
  country: string;
  createdAt: Date;
}
