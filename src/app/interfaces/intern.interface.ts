import { Evaluation } from './evaluation.interface';

export interface Intern {
  id: string;
  uid: string;
  internshipStatus:
    | 'waiting-list'
    | 'started'
    | 'finished'
    | 'revoked'
    | 'hired';
  info: {
    personal: {
      fullname: string;
      age: string;
      cedula: string;
      college: string;
      carreer: string;
      collegeStatus: 'finishing' | 'graduated';
      collegeQuarter: number;
    };
    work: {
      linkedin: string;
      github: string;
      experience: Experience[];
    };
    evaluations: Evaluation[];
  };
}

export interface Experience {
  business: string;
  position: string;
  time: string;
}

export interface InternsTeam {
  id: string;
  name: string;
  motto: string;
  participants: Array<{ id: string; uid: string }>;
}
