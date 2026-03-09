/**
 * Abstracción para cualquier repositorio de usuarios.
 */
export interface UserRepository {
  /**
   * Busca un usuario por su identificador.
   * @param id Identificador del usuario.
   * @returns El usuario encontrado o null si no existe.
   */
  findById(id: string): { id: string; name: string } | null;
}
