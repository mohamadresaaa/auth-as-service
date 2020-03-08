module.exports = (req, res, next) => {
  let ipAddress = null

  // Amazon EC2 / Heroku workaround to get real client IP
  const forwardedIpsStr = req.header("x-forwarded-for")

  if (forwardedIpsStr) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    const forwardedIps = forwardedIpsStr.split(",")
    ipAddress = forwardedIps[0]
  }

  if (!ipAddress) {
    // Ensure getting client IP address still works in
    // development environment
    ipAddress = req.connection.remoteAddress
  }

  // Set ip address in req.ipAddress
  req.ipAddress = ipAddress
  next()
}
