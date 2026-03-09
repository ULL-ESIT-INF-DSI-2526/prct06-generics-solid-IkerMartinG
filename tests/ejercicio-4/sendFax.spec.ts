import { describe, test, expect, vi } from "vitest";
import { sendFax } from "../../src/ejercicio-4/client/sendFax";
import { Fax } from "../../src/ejercicio-4/interfaces/Fax";

class FakeFaxMachine implements Fax {
  fax(doc: string): void {
    console.log("Fax:", doc);
  }
}

describe("sendFax client", () => {
  test("calls fax on the provided machine", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const machine = new FakeFaxMachine();

    sendFax(machine, "Hello");

    expect(spy).toHaveBeenCalledWith("Fax:", "Hello");
    spy.mockRestore();
  });
});
