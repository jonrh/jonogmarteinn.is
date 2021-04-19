const sgMail = require("@sendgrid/mail");

/**
 * Send a project request confirmation email via SendGrid. The @sendgrid/mail
 * library API seems to be some sort of hybrid. It seems to support the v3
 * /mail/send endpoint[0] but it also supports some additional attributes.
 * The documentation for the JS mail lib isn't great but it contains some
 * useful examples[2].
 *
 * Docs:
 *   [0]: https://sendgrid.com/docs/api-reference/
 *   [1]: https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail
 *   [2]: https://github.com/sendgrid/sendgrid-nodejs/blob/main/docs/use-cases/README.md
 */
export default (req, res) => {
  // The SendGrid API key is specified as an environment variable set in Vercel
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  // The string is deliberately without indents so the email formats correctly
  const emailTextBody =
`Verkbeiðni móttekin 🎉

Nafn: ${req.body.name || ""}
Sími: ${req.body.phone || ""}
Póstur: ${req.body.email || ""}
Lýsing: ${req.body.description || ""}
`;

  // Object reference: https://sendgrid.com/docs/api-reference/
  const msg = {
    to: ["hi@jonrh.is"],
    from: {
      email: "jonogmarteinn@jonogmarteinn.is",
      name: "Jón & Marteinn Málningarþjónusta ehf."
    },
    subject: `Verkbeiðni: ${req.body.name || ""}`,
    text: emailTextBody,

    tracking_settings: {
      open_tracking: {
        enable: false, // Disable email open tracking pixel
      }
    },
  };

  // res.status(200).json({ text: "Email sent", msg: emailTextBody }); // Debug
  // res.status(500).json({ text: `Error: kek` }) // Debug

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent")
      res.status(200).json({ text: "Email sent" })
    })
    .catch((error) => {
      res.status(500).json({ text: `Error: ${error}` })
    });
};