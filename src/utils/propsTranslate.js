export function translateCargo(role) {
    switch(role) {
        case 'ADMIN':
            return 'Administrador';
        case 'MODERATOR':
            return 'Gerente de Staff';
        case 'USER':
            return 'Voluntário';
    }
}