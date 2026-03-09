import { describe, test, expect } from "vitest";
import { AreaCalculator } from "../../src/ejercicio-3/calculator/AreaCalculator";
import { Circle } from "../../src/ejercicio-3/shapes/Circle";
import { Rectangle } from "../../src/ejercicio-3/shapes/Rectangle";
import { Triangle } from "../../src/ejercicio-3/shapes/Triangle";

describe("AreaCalculator", () => {
  const calc = new AreaCalculator();

  test("Calculates area of a circle", () => {
    expect(calc.area(new Circle(3))).toBeCloseTo(Math.PI * 9);
  });

  test("Calculates area of a rectangle", () => {
    expect(calc.area(new Rectangle(5, 2))).toBe(10);
  });

  test("Calculates area of a triangle", () => {
    expect(calc.area(new Triangle(6, 4))).toBe(12);
  });
});
