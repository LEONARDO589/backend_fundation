//https://www.youtube.com/watch?v=sBenKZqEzpQ / (crear la order por paypal )

const axios = require("axios");
const {
  PAYPAL_API_URL,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
  HOST_API,
} = require("../config");

exports.createorder = async (req, res) => {
  try {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: "10.00",
          },
          description: "Donación de la fundacion cristo redentor ",
        },
      ],
      application_context: {
        brand_name: "appfundacion.org",
        landig_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: `${HOST_API}/payment/captura`,
        cancel_url: `${HOST_API}/payment/cancel`,
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(`${PAYPAL_API_URL}/v1/oauth2/token`, params, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    });

    const response = await axios.post(
      `${PAYPAL_API_URL}/v2/checkout/orders`,
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.json(response.data);
    //res.send(response.data)
  } catch (error) {
    return res.status(500).send("Salio algo mal en la solicitud");
  }
};

exports.captureOrder = async (req, res) => {
  const { token, PayerID } = req.query;

  try {
    const response = await axios.post(
      `${PAYPAL_API_URL}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    console.log(response.data)
    //res.send("capure order");

    //return res.redirect('payment.html')
  } catch (error) {
    console.error(error);
    res.status(500).send("Error capturing order");
  }
};

exports.cancelOrder = (req, res) => {
  res.send("cancelando order");
  //res.redirect('/')
};
