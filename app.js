const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const InterfellController = require("./controllers/InterfellController.js");

const cors = require('cors');
app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.route("/cliente").post(InterfellController.registrarCliente);
router.route("/billetera/recargar").post(InterfellController.recargarBilletera);
router.route("/billetera/pago").post(InterfellController.pagarCompra);
router.route("/billetera/pago/confirmar").post(InterfellController.confirmarPago);
router.route("/billetera/saldo").post(InterfellController.consultarSaldo);

app.use("/api/v1", router);

app.listen(3001, function () {
  console.log("http://localhost:3001");
});
