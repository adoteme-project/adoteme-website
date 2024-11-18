import { z } from "zod"

const RegistrationAdotanteSchema = z.object({
    nome: z.string().min(2, { message: "Deve ser maior do que dois caracteres" }),
    dtNasc: z.string().refine(
        (value) => !isNaN(Date.parse(value)),
        { message: "Deve ser uma data válida" }
    ),
    cep: z.string().length(8, { message: "CEP deve ter exatamente 8 caracteres" }),
    email: z.string().email({ message: "Deve ser um e-mail válido" }),
    senha: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
        .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula" })
        .regex(/[A-Z]/, { message: "A senha deve conter pelo menos uma letra maiúscula" })
        .regex(/\d/, { message: "A senha deve conter pelo menos um número" }),
    confirmarSenha: z.string().min(8, {message: "A senha deve ter no mínimo 8 caracteres"}),
    celular: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Deve ser um número de celular válido" }),
    numero: z.string().max(4, { message: "No máximo 4 caracteres" }),
}).superRefine(({ confirmarSenha, senha }, ctx) => {
    if (confirmarSenha !== senha) {
        ctx.addIssue({
            code: "custom",
            message: "As senhas não se conferem",
            path: ['confirmarSenha']
        });
    }
});

const LoginSchema = z.object({
    email: z.string().email({ message: "Deve ser um e-mail válido" }),
    senha: z.string().min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
})

export { RegistrationAdotanteSchema, LoginSchema }