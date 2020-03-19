const config = require("../config")
const sgMail = require("@sendgrid/mail")

// Set api key
sgMail.setApiKey(config.service.email.apiKey)

module.exports = (to, subject, html, from = "support@jraw.org") => {
	sgMail.send({
		from,
		html,
		subject,
		to
	})
}
