export interface Evaluation {
  name: string;
  scoreMethod: 'scale' | 'level' | 'numeric';
  type: 'auto' | 'quiz';
  link?: string;
  score?: string;
}
