import InterfaceIA from "../../interfaces/ia.interface";

export default class IA implements InterfaceIA {
  async question(quest: string): Promise<Object> {
    throw new Error("Method not implemented.");
  }
}
