export class Overview {
  constructor(
    public _id: string,
    public name: string,
    public title: string,
    public tabs: Array<{ title: string; content: string; }>,
    public overview: any
  ){}
}

