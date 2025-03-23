import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    // Recupera o token do cabeçalho "Authorization"
    const token = req.header("Authorization");

    // Verifica se o token foi fornecido
    if (!token) {
        return res.status(401).json({ message: "Acesso negado. Token não fornecido." });
    }

    try {
        // O token geralmente vem no formato "Bearer <token>"
        // O método replace remove a palavra "Bearer " para deixar apenas o token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

        // Adiciona a informação do usuário no objeto da requisição
        req.user = decoded;

        // Passa o controle para a próxima função no pipeline
        next();
    } catch (err) {
        // Se o token for inválido ou expirado, retorna erro 401
        res.status(401).json({ message: "Token inválido." });
    }
};

export default authMiddleware;
