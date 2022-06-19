import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import chalk from 'chalk';
import { log } from '..';

const savePassword = (password: string, comment: string = '') => {
  comment = comment != '' ? `#${comment}` : '';

  fs.open(
    path.join(__dirname, '../dist', 'passwords.txt'),
    'a',
    664,
    (_e: NodeJS.ErrnoException | null, id: number) => {
      fs.write(id, `${password} ${comment}` + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          log(chalk.magentaBright('Password saved to passwords.txt'));
        });
      });
    }
  );
};

export default savePassword;
