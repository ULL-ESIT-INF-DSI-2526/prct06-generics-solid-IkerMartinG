import { UserRepository } from "../interfaces/UserRepository";

/**
 * Servicio de usuarios que depende de una abstracción (UserRepository).
 * 
 * Cumple DIP: la implementación concreta se inyecta desde fuera.
 */
export class UserService {
  /**
   * @param repo Repositorio de usuarios inyectado.
   */
  constructor(private repo: UserRepository) {}

  /**
   * Obtiene el nombre del usuario en mayúsculas.
   * @param id Identificador del usuario.
   * @throws Error si el usuario no existe.
   */
  getUserName(id: string): string {
    const user = this.repo.findById(id);
    if (!user) throw new Error("User not found");
    return user.name.toUpperCase();
  }
}
