export class User {
  constructor(
    public id: number,
    public vorname: string,
    public nachname: string,
    public mail: string,
    public mail2: string,
    public passwort: string,
    /*Remove those later
    public power: string,
    public alterEgo?: string*/
  ) {  }
}
