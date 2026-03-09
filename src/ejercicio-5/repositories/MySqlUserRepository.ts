import { UserRepository } from "../interfaces/UserRepository";

/**
 * Implementación concreta del repositorio usando MySQL.
 */
export class MySqlUserRepository implements UserRepository {
  findById(id: string): { id: string; name: string } | null {
    console.log("Querying MySQL...");
    return { id, name: "Ada" };
  }
}
