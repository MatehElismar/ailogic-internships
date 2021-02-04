export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  responses: AssignmentResponse;
}

export interface AssignmentResponse {
  id: string;
  uid: string;
  teamID: string;
  text: string;
  attachments: string;
  issuedAt: string;
}
