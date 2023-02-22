const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", async (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    const resp = await axios.get(
      `https://qe0vikexaj.execute-api.us-east-1.amazonaws.com/Prod/api/Veiculo/ObterVeiculoPublico?identificadorPublico=MQ7AM3DICL1K`
    );
    const veiculo = resp.data;
    const pokeBody = {
      name: `${veiculo.fabricante} ${veiculo.modelo} ${veiculo.versao}`,
      description: `informação sobre o veiculo de marca: ${veiculo.fabricante}`,
    };
    res.render("pokemon", { pokemon: pokeBody });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
