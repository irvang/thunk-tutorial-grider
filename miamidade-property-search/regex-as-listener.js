const table = document.querySelector('#property_info');

table.addEventListener('click', () => {
  const tbody = table.querySelector('tbody');
  let trs = Array.from(tbody.children);

  let trsTds = trs.map(tr => Array.from(tr.children));

  array1 = trsTds.map(tdArr => {

    return tdArr.map(elm => {
      return elm.textContent.replace(/(\r\n|\n|\r|\t)/gm, '');
    });
  });

  console.table(array1)
})