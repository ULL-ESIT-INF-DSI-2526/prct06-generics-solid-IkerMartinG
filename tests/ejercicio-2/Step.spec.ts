import { describe, test, expect } from "vitest";
import { Step } from "../../src/ejercicio-2/domain/Step";
import { StepWithTool } from "../../src/ejercicio-2/domain/StepWithTool";
import { StepWithTemperature } from "../../src/ejercicio-2/domain/StepWithTemperature";

describe("Step entities", () => {
  test("Step basic getters", () => {
    const step = new Step({
      id: "s1",
      nombre: "Cortar",
      descripcion: "Cortar verduras",
      duracionMinutos: 10,
      opcional: false,
      etiquetas: ["corte"],
    });

    expect(step.id).toBe("s1");
    expect(step.nombre).toBe("Cortar");
    expect(step.descripcion).toBe("Cortar verduras");
    expect(step.duracionMinutos).toBe(10);
    expect(step.opcional).toBe(false);
    expect(step.etiquetas).toEqual(["corte"]);
  });

  test("StepWithTool exposes herramienta", () => {
    const step = new StepWithTool(
      {
        id: "s2",
        nombre: "Saltear",
        descripcion: "Saltear en sartén",
        duracionMinutos: 5,
        opcional: false,
        etiquetas: ["salteado"],
      },
      "sartén",
    );

    expect(step.herramientaNecesaria).toBe("sartén");
  });

  test("StepWithTemperature exposes temperatura", () => {
    const step = new StepWithTemperature(
      {
        id: "s3",
        nombre: "Hornear",
        descripcion: "Hornear a 180º",
        duracionMinutos: 20,
        opcional: true,
        etiquetas: ["horno"],
      },
      180,
    );

    expect(step.temperatura).toBe(180);
  });
});
