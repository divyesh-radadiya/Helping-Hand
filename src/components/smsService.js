import axios from "axios";

export const SendSMS = (moblie, msg) => {
  var data = JSON.stringify({
    app_id: "f2596674-be88-45f6-a7f3-e77f1b82ae13",
    sms_from: "+19706766120",
    name: "Divyesh",
    include_phone_numbers: [moblie],
    contents: {
      en: msg,
    },
  });

  var config = {
    method: "post",
    url: "https://onesignal.com/api/v1/notifications",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer NjBiNTI3M2QtMDFhMy00N2RiLTgzZWMtZGFlY2MzMGUxZGEy",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};
