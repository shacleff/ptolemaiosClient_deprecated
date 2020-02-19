import * as pb_100_example from "./pb_100_example"
export default class Pb {
  static decodeIndex;
  public static getDecode(proto: number) {
    if (Pb.decodeIndex == undefined) {
      Pb.decodeIndex = new Object();
      Pb.decodeIndex[10000] = pb_100_example.s10000;
    }
    return Pb.decodeIndex[proto]
  }
}