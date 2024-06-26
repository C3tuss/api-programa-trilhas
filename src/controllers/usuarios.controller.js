import usuario from "../models/Usuario.js";

class UsuarioController {

  static async listarUsuarios (req, res) {
    try {
      const listaUsuarios = await usuario.find({});
      res.status(200).json(listaUsuarios);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição` });
    }
  };

  static async listarUsuarioPorId (req, res) {
    try {
      const id = req.params.id;
      const usuarioEncontrado = await usuario.findById(id);
      res.status(200).json(usuarioEncontrado);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  };

  static async cadastrarUsuario (req, res) {
    const { nome, nick, email, senha, localizacao, tipoUsuario } = req.body;

    // Verificação de campos obrigatórios
    if (!nome || !nick || !email || !senha || !localizacao || !tipoUsuario) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
    
    console.log("Dados recebidos:", req.body);

    try {
      const novoUsuario = new usuario({ nome, nick, data, email, senha, localizacao, tipoUsuario });
      await novoUsuario.save();
      res.status(201).json({ message: "Usuário criado com sucesso", usuario: novoUsuario });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
    }
  }

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
