import { describe, test, expect, vi } from "vitest";
import { BasicPrinter } from "../../src/ejercicio-4/devices/BasicPrinter";

describe("BasicPrinter", () => {
  test("prints a document", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    const printer = new BasicPrinter();

    printer.print("Hello");

    expect(spy).toHaveBeenCalledWith("Printing:", "Hello");
    spy.mockRestore();
  });
});
