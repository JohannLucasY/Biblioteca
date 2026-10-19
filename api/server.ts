import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "A API da biblioteca está funcionando!" });
});

type Livro = {
    nome: string;
    autor: string;
    satisfacao: number;
    data: string;
    descricao: string
}

const livros: Livro[] = [];

app.post("/livros", (req, res) => {
    const livro: Livro = req.body;
    livros.push(livro)
    res.status(201).json(livro)
});

app.get("/livros", (req, res) => {
  res.json(livros);
});

app.get("/livros/buscar", (req, res) => {
  const nome = String(req.query.nome ?? "").toLowerCase();

  const livro = livros.find((l) => l.nome.toLowerCase().includes(nome));

  if (!livro) {
    res.status(404).json({ mensagem: "Livro não encontrado" });
    return;
  }

  res.json(livro);
});

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});