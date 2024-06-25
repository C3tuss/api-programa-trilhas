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
    try {
      const novoUsuario = await usuario.create(req.body);
      res.status(201).json({ message: "criado com sucesso", usuario: novoUsuario });
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha ao cadastrar usuário` });
    }
  };
};
export default UsuarioController;
