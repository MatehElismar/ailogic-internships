export interface Quiz {
  category: string;
  difficulty: string;
  amountOfQuestions: number;
  tags: string[];
  questions: QuizQuestion;
}

export interface QuizQuestion {
  id: string;
  question: string;
  description: string;
  answers: {
    answer_a: string;
    answer_b: string;
    answer_c: string;
    answer_d: string;
    answer_e: string;
    answer_f: string;
  };
  multiple_correct_answers: 'false';
  correct_answers: {
    answer_a_correct: string; //bolean
    answer_b_correct: string; //bolean
    answer_c_correct: string; //bolean
    answer_d_correct: string; //bolean
    answer_e_correct: string; //bolean
    answer_f_correct: string; //bolean
  };
  explanation: string;
  tip: string;
}
