export function saveSession(clave,valor) {
    sessionStorage.setItem(clave,valor)
}

export function clearSession() {
    sessionStorage.clear();
}

export function saveLocal(clave,valor) {
    localStorage.setItem(clave,valor);
}

export function clearLocal() {
    localStorage.clear();
}
