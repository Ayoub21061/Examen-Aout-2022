import Model from './Model.js';

export default class Appartement extends Model {

  static table = "Appartement.TableAppart";
  static primary = ["id"];
}
