import { useState, useEffect } from 'react';
import { formQuestionsAdotante } from "@/mocks/stepFormRegister";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faClose } from '@fortawesome/free-solid-svg-icons';
import useModal from '@/hooks/useModal';
import ModalRejectAvaliacao from '../ModalReject';
import { celularMask, formatarEndereco } from '@/utils/textMask';
import { calcularIdadeDataCompleta } from '@/utils/calcularIdade';
import { aprovarRequisicao } from '@/services/onguserAPI';
import { useNotification } from '@/context/NotificationProvider';

const ModalAvaliacao = ({ show, onClose, infoAdocao }) => {
    const [modalState, setModalState] = useState('info');
    const [isShowingModal, toggleModal] = useModal();
    const { promise, error } = useNotification();

    const methods = useForm({
        defaultValues: infoAdocao.formulario,
    });

    useEffect(() => {
        methods.reset(infoAdocao.formulario);
    }, [infoAdocao, methods]);

    if (!show) {
        return null;
    }

    const formAdotante = formQuestionsAdotante[0].formGroups[0].radioControl;

    const handleAvaliarClick = () => {
        setModalState('formulario');
    };

    const handleAprovarReq = () => {
        try {
            promise(aprovarRequisicao(infoAdocao.idReq).then(setTimeout(() => { window.location.reload() }, 5000)), {
                pending: "Enviando Aprovação...",
                success: "Aprovação realizado com sucesso!",
                error: "Erro ao aprovar adoção! Por favor, tente novamente.",
            })
        } catch (err) {
            console.error(err);
            error("Não foi possível realizar a aprovação tente novamente mais tarde")
        } finally {
            onClose();
        }
    }

    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
            <div className="fixed inset-0 bg-preto opacity-50 z-10"></div>

            <div className="relative bg-branco shadow-2xl rounded-3xl p-10 z-20 w-[60%]">
                <div className='flex justify-end w-full'>
                    {modalState == 'info' ? (
                        <FontAwesomeIcon
                            icon={faClose}
                            onClick={onClose}
                            className="cursor-pointer text-lg text-end"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            onClick={() => setModalState('info')}
                            className="cursor-pointer mr-4 text-lg text-center"
                        />
                    )}
                </div>

                {modalState === 'info' ? (
                    <>
                        <h2 className="text-3xl text-azul-main font-semibold text-center">Solicitação de Adoção</h2>
                        <div className="flex justify-between items-center w-full my-8">
                            <div>
                                <h4 className="font-medium text-xl mb-4">Informações do Adotante </h4>
                                <ul>
                                    <li className="text-base leading-loose"><span className="font-semibold">Nome Completo:</span> {infoAdocao.nome}</li>
                                    <li className="text-base leading-loose"><span className="font-semibold">Idade:</span> {calcularIdadeDataCompleta(infoAdocao.dataNascimento)}</li>
                                    <li className="text-base leading-loose"><span className="font-semibold">Celular:</span> {celularMask(infoAdocao.telefone)} </li>
                                    <li className="text-base leading-loose"><span className="font-semibold">Endereço:</span> {formatarEndereco(infoAdocao.endereco)}</li>
                                    <li className="text-base leading-loose"><span className="font-semibold">Email:</span> {infoAdocao.email}</li>
                                </ul>
                            </div>
                            <img src={infoAdocao.fotoPerfil} alt="Foto de Perfil"
                                className="bg-cinza relative inline-block h-52 w-52 !rounded-full border-amarelo-select border-2 object-cover object-center" />
                        </div>
                        <div className="border-[3px] border-amarelo-select w-full rounded-2xl flex items-center justify-between px-6 py-3">
                            <h3 className="text-2xl"> Formulário </h3>
                            <div className="flex items-center gap-8">
                                <button onClick={handleAvaliarClick} className="bg-amarelo px-16 py-3 rounded-md text-branco"> Avaliar </button>
                            </div>
                        </div>
                        <div className="w-full flex justify-between mt-16">
                            <button onClick={toggleModal} className="bg-amarelo px-16 py-3 rounded-md text-branco"> Rejeitar </button>
                            <button onClick={handleAprovarReq} className="bg-verde-border px-16 py-3 rounded-md text-branco"> Aprovar </button>
                        </div>
                        <ModalRejectAvaliacao show={isShowingModal} onCloseModal={toggleModal} idReq={infoAdocao.idReq} />
                    </>
                ) : (
                    <>
                        <h2 className="text-3xl text-azul-main font-semibold text-center mb-6">Formulário</h2>
                        <FormProvider {...methods}>
                            <fieldset className="flex flex-col gap-2" disabled={true}>
                                {formAdotante.map((radio, index) => (
                                    <FormControl key={index} component="fieldset">
                                        <FormLabel component="legend">{radio.pergunta}</FormLabel>
                                        <Controller
                                            name={radio.name}
                                            control={methods.control}
                                            rules={{ required: true }}
                                            defaultValue=""
                                            render={({ field }) => (
                                                <RadioGroup
                                                    row
                                                    {...field}
                                                >
                                                    <FormControlLabel
                                                        control={<Radio />}
                                                        value={radio.valor1}
                                                        label={radio.label1}
                                                    />
                                                    <FormControlLabel
                                                        control={<Radio />}
                                                        value={radio.valor2}
                                                        label={radio.label2}
                                                    />
                                                </RadioGroup>
                                            )}
                                        />
                                    </FormControl>
                                ))}
                            </fieldset>
                        </FormProvider>
                    </>
                )}
            </div>
        </div>
    );
};

export default ModalAvaliacao;