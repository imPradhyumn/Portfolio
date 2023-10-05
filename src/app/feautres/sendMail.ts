import emailjs from "@emailjs/browser";

export default async function sendMail(formRef: any) {
  let response = await emailjs.sendForm(
    "service_o4szcsg",
    "template_f8t585f",
    formRef.current,
    "BPt76iW_1ufrmW3a1"
  );

  // emailjs
  //   .sendForm(
  //     "service_o4szcsg",
  //     "template_f8t585f",
  //     formRef.current,
  //     "BPt76iW_1ufrmW3a1"
  //   )
  //   .then(
  //     (result) => {
  //       console.log("ds", result.text);
  //       apiResponse.response = result.text;
  //       apiResponse.status = result.status;
  //       apiResponse.errorStatus = false;
  //     },
  //     (error) => {
  //       console.log("d", error);
  //       apiResponse.response = error;
  //     }
  //   );
  return response;
}
