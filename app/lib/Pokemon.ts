export default class Pokemon {
  id: string;
  name: string;
  imageUrl: string;

  constructor(id: string, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
