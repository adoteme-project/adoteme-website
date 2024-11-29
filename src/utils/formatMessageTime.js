export function formatarHorarioPassado(dataPassada) {
    const agora = new Date();
    const data = new Date(dataPassada);
    const diferenca = agora - data;

    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30);
    const anos = Math.floor(meses / 12);

    if (anos > 0) {
        const mesesRestantes = meses % 12;
        return `${anos} ${anos === 1 ? 'ano e' : 'anos e'} ${mesesRestantes} ${mesesRestantes === 1 ? 'mês' : 'meses'}`;
    }
    if (meses > 0) return `${meses} ${meses === 1 ? 'mês' : 'meses'} atrás`;
    if (dias > 0) return `${dias} ${dias === 1 ? 'dia' : 'dias'} atrás`;
    if (horas > 0) return `${horas} ${horas === 1 ? 'hora' : 'horas'} atrás`;
    if (minutos > 0) return `${minutos} ${minutos === 1 ? 'minuto' : 'minutos'} atrás`;
    return `${segundos} ${segundos === 1 ? 'segundo' : 'segundos'} atrás`;
}

