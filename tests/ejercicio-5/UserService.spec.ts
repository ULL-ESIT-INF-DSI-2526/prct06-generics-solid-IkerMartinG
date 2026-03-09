import { describe, test, expect } from "vitest";
import { UserService } from "../../src/ejercicio-5/services/UserService";
import { UserRepository } from "../../src/ejercicio-5/interfaces/UserRepository";

class FakeRepo implements UserRepository {
  constructor(private data: Record<string, { id: string; name: string }>) {}

  findById(id: string) {
    return this.data[id] ?? null;
  }
}

describe("UserService", () => {
  test("returns uppercase username", () => {
    const repo = new FakeRepo({
      "1": { id: "1", name: "Ada" },
    });

    const service = new UserService(repo);
    expect(service.getUserName("1")).toBe("ADA");
  });

  test("throws when user not found", () => {
    const repo = new FakeRepo({});
    const service = new UserService(repo);

    expect(() => service.getUserName("999")).toThrow("User not found");
  });
});
