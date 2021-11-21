import { assert } from "chai";

function sumStr(a,b) {
    return (+a + +b).toString()
  }
  
describe("Tests", () => {
    it("test", () => {
        assert.equal(1,1)
        assert.equal(sumStr("1", "1"), "2")
        assert.equal(sumStr("4", "5"), "9")
        assert.equal(sumStr("4","5"), "9");
        assert.equal(sumStr("34","5"), "39");
    });
});