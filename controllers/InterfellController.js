var soap = require("strong-soap").soap;

exports.registrarCliente = function (req, res) {
  var url = "http://localhost:8000/interfellWallet?wsdl";
  if (!req.body.nombres) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro nombres faltante",
      data: "",
    });
  } else if (!req.body.email) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro email faltante",
      data: "",
    });
  } else if (!req.body.celular) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro celular faltante",
      data: "",
    });
  } else if (!req.body.documento) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro documento faltante",
      data: "",
    });
  }
  data = {
    nombres: req.body.nombres,
    email: req.body.email,
    celular: req.body.celular,
    documento: req.body.documento,
  };
  var options = {};
  soap.createClient(url, options, function (err, client) {
    client.registrarCliente(data, function (err, result, envelope, soapHeader) {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json({
          success: true,
          cod_error: 00,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
    });
  });
};

exports.recargarBilletera = function (req, res) {
  if (!req.body.monto) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro monto faltante",
      data: "",
    });
  } else if (!req.body.celular) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro celular faltante",
      data: "",
    });
  } else if (!req.body.documento) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro documento faltante",
      data: "",
    });
  }
  var url = "http://localhost:8000/interfellWallet?wsdl";
  data = {
    monto: req.body.monto,
    celular: req.body.celular,
    documento: req.body.documento,
  };
  var options = {};
  soap.createClient(url, options, function (err, client) {
    client.recargarBilletera(data, function (err, result, envelope, soapHeader) {
      if (err) {
        return console.log(err);
      }
      if (result.resParam2["$value"] == "Cliente no encontrado") {
        return res.status(400).json({
          success: false,
          cod_error: 400,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
      res.status(201).json({
        success: true,
        cod_error: 00,
        message_error: "",
        data: result.resParam2["$value"],
      });
    });
  });
};

exports.pagarCompra = function (req, res) {
  var url = "http://localhost:8000/interfellWallet?wsdl";
  if (!req.body.monto) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro monto faltante",
      data: "",
    });
  } else if (!req.body.documento) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro documento faltante",
      data: "",
    });
  }
  data = {
    monto: req.body.monto,
    documento: req.body.documento,
  };
  var options = {};
  soap.createClient(url, options, function (err, client) {
    client.pagarCompra(data, function (err, result, envelope, soapHeader) {
      if (err) {
        return console.log(err);
      }
      if (result.resParam2["$value"] == "Cliente no encontrado") {
        return res.status(400).json({
          success: false,
          cod_error: 400,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
      res.status(201).json({
        success: true,
        cod_error: 00,
        message_error: "",
        data: result.resParam2["$value"],
      });
    });
  });
};

exports.confirmarPago = function (req, res) {
  var url = "http://localhost:8000/interfellWallet?wsdl";
  if (!req.body.idSesion) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro sesionId faltante",
      data: "",
    });
  } else if (!req.body.token) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro token faltante",
      data: "",
    });
  }
  data = {
    idSesion: req.body.idSesion,
    token: req.body.token,
  };
  var options = {};
  soap.createClient(url, options, function (err, client) {
    client.confirmarPago(data, function (err, result, envelope, soapHeader) {
      if (err) {
        return console.log(err);
      }
      if (result.resParam2["$value"] == "Cliente no encontrado") {
        return res.status(400).json({
          success: false,
          cod_error: 400,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
      if (result.resParam2["$value"] == "Pago no confirmado!!") {
        return res.status(400).json({
          success: false,
          cod_error: 400,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
      res.status(200).json({
        success: true,
        cod_error: 00,
        message_error: "",
        data: result.resParam2["$value"],
      });
    });
  });
};

exports.consultarSaldo = function (req, res) {
  var url = "http://localhost:8000/interfellWallet?wsdl";
  if (!req.body.celular) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro celular faltante",
      data: "",
    });
  } else if (!req.body.documento) {
    return res.status(400).json({
      success: false,
      cod_error: 400,
      message_error: "Parametro documento faltante",
      data: "",
    });
  }
  data = {
    celular: req.body.celular,
    documento: req.body.documento,
  };
  var options = {};
  soap.createClient(url, options, function (err, client) {
    client.consultarSaldo(data, function (err, result, envelope, soapHeader) {
      if (err) {
        return console.log(err);
      }
      if (result.resParam2["$value"] == "Cliente no encontrado") {
        return res.status(400).json({
          success: false,
          cod_error: 400,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
      if (result.resParam2["$value"] == "No existe billetera para el cliente") {
        return res.status(400).json({
          success: false,
          cod_error: 400,
          message_error: "",
          data: result.resParam2["$value"],
        });
      }
      res.status(200).json({
        success: true,
        cod_error: 00,
        message_error: "",
        data: {
          saldo: result.resParam2["$value"],
        },
      });
    });
  });
};
