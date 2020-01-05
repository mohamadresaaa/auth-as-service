import chalk from "chalk"

/** Customize log
 * @package chalk
 */
export default (message, color = "cyan") => (console.log(chalk[color].bold(message)))
