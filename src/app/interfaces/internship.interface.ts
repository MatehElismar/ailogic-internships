import { Evaluation } from './evaluation.interface';

export interface Internship {
  id: string;
  description: string;
  startTime: string;
  endTime: string;
  maxInterns: number;
  minInterns: number;
  evaluations: Evaluation[];
}
