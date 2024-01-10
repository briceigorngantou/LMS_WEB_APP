export class Courses {
    id: number;
    title: string;
    code: string;
    description: string;
    certification: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(
      id: 0,
      title: string = 'Title',
      code: string = 'Code',
      certification: string = 'Certification',
      description: string = 'Description',
      picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
      createdAt: Date = new Date(),
      updatedAt: Date = new Date()
    ) {
      this.id = id;
      this.title = title;
      this.code = code;
      this.certification = certification;
      this.description = description;
      this.picture = picture;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  