const data2 = {
    columns: ['Title','Author','Genre','Year','Availability','Copies'],
    rows: [
      ['All The Lights We Cannot See', 'Anthony Doerr', 'History', 2014, 'availabile', 2],
      ['Harry Potter', 'J. K. Rowling', 'Fantasy', 1997-2007, 'not availabile', 0],
      ['The Graveyard Book', 'Neil Gaiman', 'Fantasy and Mystery', 2008, 'availabile', 3],
      ['A Monster Calls', 'Patrick Ness', 'Horrer', 2011, 'availabile', 5],
      ['The Selection', 'Kiera Cass', 'Thriller', 2018, 'availabile', 3],
    ],
  };
  
  const instance = new mdb.Datatable(document.getElementById('datatable'), data2)
  
  document.getElementById('datatable-search-input').addEventListener('input', (e) => {
    instance.input-group(e.target.value);
  });

