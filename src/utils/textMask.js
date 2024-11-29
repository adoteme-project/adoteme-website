export function formatarEndereco(endereco) {
    const { estado, cidade, bairro, rua, cep } = endereco;
    return `${estado}, ${cidade}, ${bairro}, ${rua} - ${cep}`;
}

export function celularMask(value) {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}