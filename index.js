const express = require("express");
// const axios = require("axios");

const app = express();
const port = 3000;

// app.set("view engine", "ejs");
// app.set("views", "./src/views");

app.get("/", async (req, res) => {
  res.send("funcionou");
  // if (req.query.id) {
  //   const id = req.query.id;
  //   const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  //   const pokemon = resp.data;
  //   const pokeBody = {
  //     img: pokemon.sprites.front_default,
  //     name: pokemon.name,
  //   };
  //   res.render("pokemon", { pokemon: pokeBody });
  // }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
