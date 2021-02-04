export interface Resource {
  id: string;
  name: string;
  description: string;
  categorie: string;
  subcategorie: string;
  createdAt: number;
  updatedAt: number;
  postedBy: string; //uid
  url: string;
  filetype: string;
  fileSize: number;
}
