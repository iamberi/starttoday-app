export class Problem {
  id: string; //number?
  longitude: number;
  latitude: number;
  title: string;
  description: string;
  category: string;
  date: Date;
  status: boolean;
  votes: number;
  statusvotes: string;
  socialpoints: number;
  //image
  downloadURL: any;
  path: string;
  //https://medium.com/weekly-webtips/handling-file-uploads-in-angular-reactive-approach-7f90453f57cb
  imagePath: string;
}
