import { describe, test, expect } from "vitest";
import { Circle } from "../../src/ejercicio-3/shapes/Circle";
import { Rectangle } from "../../src/ejercicio-3/shapes/Rectangle";
import { Triangle } from "../../src/ejercicio-3/shapes/Triangle";

describe("Shape implementations", () => {
  test("Circle area", () => {
    const c = new Circle(2);
    expect(c.area()).toBeCloseTo(Math.PI * 4);
  });

  test("Rectangle area", () => {
    const r = new Rectangle(3, 4);
    expect(r.area()).toBe(12);
  });

  test("Triangle area", () => {
    const t = new Triangle(4, 5);
    expect(t.area()).toBe(10);
  });
});
