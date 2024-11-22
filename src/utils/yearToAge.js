export function calcularAnoDeNascimento(idade) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - idade;
}