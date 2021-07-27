#!/usr/bin/env node
import * as program from 'commander';
import * as clipboardy from 'clipboardy';
import chalk from 'chalk';

import generatePassword from './utils/generatePassword';
import savePassword from './utils/savePassword';

export const log = console.log;

// create commands
const commander: program.Command = new program.Command();
commander.version('0.1.0').description('Password generator of Node.js');
commander
  .option('-l, --length <number>', 'Length of password', '16')
  .option('-s, --save', 'Save password to dist/passwords.txt')
  .option('-c, --comment <string>', 'Add comment')
  .option('-nu --no-uppercase', 'Remove uppercases')
  .option('-nn, --no-number', 'Remove numbers')
  .option('-ns, --no-symbol', 'Remove symbols')
  .parse();

// Destructuring options
interface CommandOptions {
  length: number;
  save: boolean;
  comment: string;
  uppercase: boolean;
  number: boolean;
  symbol: boolean;
}
const { length, save, comment, uppercase, number, symbol }: CommandOptions = commander.opts();

// generate password and copy to clipboard
const generatedPassword = generatePassword(length, uppercase, number, symbol);
clipboardy.writeSync(generatedPassword);

// save to passwords.txt
save ? savePassword(generatedPassword, comment) : '';

// output
log(`${chalk.bgGreen('Generated Password:')} ${chalk.bold(generatedPassword)}`);
log(chalk.yellow('Password was copied to clipboard'));
