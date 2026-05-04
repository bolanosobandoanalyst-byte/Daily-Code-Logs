/**
 * Módulo de autenticación - Sistema Atara
 * Practicando tipado estricto e interfaces
 */

interface UserCredentials {
    username: string;
    token: string;
    isActive: boolean;
}

class AuthService {
    private currentUser: UserCredentials | null = null;

    public login(username: string, token: string): void {
        this.currentUser = {
            username,
            token,
            isActive: true
        };
        console.log(`[AUTH] Usuario ${username} conectado exitosamente.`);
    }

    public logout(): void {
        if (this.currentUser) {
            this.currentUser.isActive = false;
            console.log(`[AUTH] Sesión cerrada para ${this.currentUser.username}`);
            this.currentUser = null;
        }
    }

    public getStatus(): string {
        return this.currentUser ? "Secure Connection" : "No active session";
    }
}

// Ejemplo de uso
const auth = new AuthService();
auth.login("Atara_Core", "sk_87654321");
console.log("Estado del sistema:", auth.getStatus());
