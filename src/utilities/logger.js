import chalk from "chalk"

/** Customize log
 * @package chalk
 */
export default (message, color = "blueBright") => (console.log(chalk[color].bold(message)))
