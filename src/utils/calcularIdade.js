export const calcularIdade = (anoNascimento) => {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    return idade;
};