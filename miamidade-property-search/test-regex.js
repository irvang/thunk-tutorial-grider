// scrape 

const table = document.querySelector('#property_info');
const tbody = table.querySelector('tbody');
let trs = Array.from(tbody.children);
// let trsText = trs.map(tr => tr.textContent.replace(/[\t\n\r]/gm,''));
// let trsText = trs.map(tr => tr.textContent.replace(/[\t\n\r]/gm, '').trim())

let trsTds = trs.map(tr => Array.from(tr.children));

array1 = trsTds.map(tdArr => {

  return tdArr.map(elm => {
    // return td.textContent.replace(/[\t\n\r]/gm, '').trim();
    // td = Array.from(td.chidlren)
    //    return td.map( elm => elm.textContent.replace(/(\r\n|\n|\r|\t)/gm, ''))
    return elm.textContent.replace(/(\r\n|\n|\r|\t)/gm, '');
  });
});

// let array2 = array1.map(elmArr => {
  // return Object.assign({}, elmArr[0].toString(), elmArr[1].toString());

array2 = array1.map(elmArr => {

  let obj = {};

  let value1 = elmArr[0];


  if (elmArr.length === 1) {
    return {
      value1
    }
  } else if (elmArr.length > 1) {
    let value2 = elmArr[1];
    return obj[value1] = value2;
  }

});