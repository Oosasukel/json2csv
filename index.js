const fs = require('fs');
const { parse } = require('json2csv');

const jsonName = 'myfile.json';
const csvName = 'myfile.csv';

const myData = require(`./${jsonName}`);

myData.forEach((data) => {
  data.phone = data.phones.length > 0 ? data.phones[0] : undefined;
  delete data.phones;
});

const saveFile = (filename, text) => {
  fs.writeFile(filename, text, 'utf8', function (err) {
    if (err) {
      console.log('An error occured while writing File.');
      return console.log(err);
    }

    console.log('File has been saved.');
  });
};

try {
  const csv = parse(myData, {
    delimiter: ',',
  });
  saveFile(csvName, csv);
} catch (err) {
  console.error(err);
}
