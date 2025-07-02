/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import {writeFile,createWriteStream} from 'fs';
 const response =  await inquirer.prompt([
    {
        name:'url',
        message:'Enter a URL: '
    }
  ])

  var image = qr.image(response.url,{type:'png'});
  writeFile('answer.txt',response.url,(err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
  image.pipe(createWriteStream('qrcode.png'));