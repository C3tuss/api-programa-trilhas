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
    const { nome, nick, email, senha } = req.body;

    // Verificação de campos obrigatórios
    if (!nome || !nick || !email || !senha) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
      const novoUsuario = new usuario({ nome, nick, email, senha });
      await novoUsuario.save();
      res.status(201).json({ message: "Usuário criado com sucesso", usuario: novoUsuario });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
    }
  }
};
export default UsuarioController;
