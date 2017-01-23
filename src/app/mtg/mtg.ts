export class Mtg {
  id: number;
  text: string = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
