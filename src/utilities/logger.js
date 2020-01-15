const chalk = require("chalk")

/** Customize log
 * @package chalk
 */
module.exports = (message, color = "cyan") => (console.log(chalk[color].bold(message)))
