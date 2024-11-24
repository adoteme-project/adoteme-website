export const calcularIdade = (anoNascimento) => {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;
    return idade;
};


export const calcularIdadeDataCompleta = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
};