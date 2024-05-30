import { Rotate } from "../app/cipher";

describe("Cipher()", () => {
  const key = 13;
  it("returns N when given A", () => {
    expect(Rotate("A", key)).toEqual("N");
  });
  it("return A when given N", () => {
    expect(Rotate("N", key)).toEqual("A");
  });

  it("return NO when given AB", () => {
    expect(Rotate("AB", key)).toEqual("NO");
  });
  it("return AB!! when given NO!!", () => {
    expect(Rotate("NO!!", key)).toEqual("AB!!");
  });
});
