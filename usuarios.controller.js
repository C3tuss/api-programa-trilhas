import usuario from "../models/Usuario";

class UsuarioController 
{
    //Criar usuario
    static async novoUsuario(req, res){
        try{
            const novoUsuario = await usuario.create(req.body);
            res.status(201).json({message: "usuario criado com sucesso", usuario: novoUsuario});
        }catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar usuario`});
        }
    };


    // puxar todos os usuarios
    async buscarUsuarios(req, res) 
    {
        try {
            const usuarios = await usuario.find({});
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar usuários` });
        }
    };

    // Buscar usuario pelo ID
    async buscarUsuarioPorId(req, res) 
    {
        try {
            const id = req.params.id;
            const usuarioPesquisado = await usuario.findById(id);
            res.status(200).json(usuarioPesquisado);
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Falha ao buscar usuário` });
        }
    };

    //atualizar usuario
    static async atualizarUsuario(req, res)
    {
        try
        {
            const id = req.params.id;
            await usuario.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "usuario atualizado"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização` });
        }
    };

    static async excluirUsuario(req, res)
    {
        try
        {
            const id = req.params.id;
            await usuario.findByIdAndDelete(id);
            res.status(200).json({message: "Usuario deletado com sucesso"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao deletar`})
        }
    };
    
};

export default UsuarioController;