const fetch = require("node-fetch")

module.exports = (req, res, next) => {
	/** 'x-forwarded-for' header may return multiple IP addresses in
   * the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
   * the first one
   * Ensure getting client IP address still works in
   * development environment */

	// Set ip address in req.ipAddress
	req.ipAddress = req.header("x-forwarded-for") || req.connection.remoteAddress

	/** Get geo ip from http://api.ipstack.com
   * and set geolocation to req.geolocation
   */
	fetch(`${config.service.geolocation.baseUrl}${req.ipAddress}?access_key=${config.service.geolocation.apiKey}`)
		.then(response => response.json())
		.then(data => {
			req.geolocation = {
				city: data.city,
				continent: {
					code: data.continent_code,
					name: data.continent_name
				},
				country: {
					code: data.country_code,
					name: data.country_name
				},
				location: {
					latitude: data.latitude,
					longitude: data.longitude
				},
				region: {
					code: data.region_code,
					name: data.region_name
				},
				zip: data.zip
			}
			next()
		})
		.catch(error => next(error))
}
