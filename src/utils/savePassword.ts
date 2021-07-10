import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import chalk from 'chalk';

const savePassword = (password: string) => {
  fs.open(path.join(__dirname, '../dist', 'passwords.txt'), 'a', 666, (_e: NodeJS.ErrnoException | null, id: number) => {
    fs.write(id, password + os.EOL, null, 'utf-8', () => {
      fs.close(id, () => {
        console.log(chalk.magentaBright('Password saved to passwords.txt'));
      });
    });
  });
};

export default savePassword;
