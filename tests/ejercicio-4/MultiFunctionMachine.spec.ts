import { describe, test, expect, vi } from "vitest";
import { MultiFunctionMachine } from "../../src/ejercicio-4/devices/MultiFunctionMachine";

describe("MultiFunctionMachine", () => {
  test("prints a document", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const m = new MultiFunctionMachine();

    m.print("Doc");

    expect(spy).toHaveBeenCalledWith("Printing:", "Doc");
    spy.mockRestore();
  });

  test("scans a document", () => {
    const m = new MultiFunctionMachine();
    expect(m.scan("Paper")).toBe("Scanned: Paper");
  });

  test("sends a fax", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const m = new MultiFunctionMachine();

    m.fax("FaxDoc");

    expect(spy).toHaveBeenCalledWith("Fax sent:", "FaxDoc");
    spy.mockRestore();
  });
});
