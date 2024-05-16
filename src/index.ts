import { convertToPem } from './lib/p12';
//import * as fs from 'fs';

export const Name = (name: string) => `Hello ${name}`;

/*export function getPemFromP12(certPath: string, password: string) {
  const p12File = fs.readFileSync(certPath, { encoding: 'binary' });
  return convertToPem(p12File, password);
}*/

export function getPemFromP12Buffer(p12base64: any, password: string) {
  return convertToPem(p12base64, password);
}
