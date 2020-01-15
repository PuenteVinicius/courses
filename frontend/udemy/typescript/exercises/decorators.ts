const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false,
}
type Construtor = { new(...args: any[]): {} }

function perfilAdmin <T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args) 
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error;
            }
        }
    }

}

@perfilAdmin
class MudancaAdministrativa {
    constructor(usuario) {
        console.log('Algo Critico foi alterado')
    }

}

new MudancaAdministrativa(usuarioLogado)