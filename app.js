const render = (obj) => {
    const tbody = document.querySelector('tbody');
    const files = obj.reduce( (acc, a) => {
      const arr =[];
      for (let key in a.files){
        arr.push(a.files[key])
      };
      return [...acc, ...arr];
    }, []);
    let i = 1
    files.forEach( f => {
    //   let i = 1;
      const tr = document.createElement('TR');
      const th = document.createElement('TH');
      th.setAttribute('scope', 'col');
      th.innerHTML = i;
      tr.appendChild(th);
      tbody.appendChild(tr);
      const arr = [f.filename, f.language, f.raw_url];
      arr.forEach(el => {
        const td = document.createElement('TD');
        td.innerHTML = el;
        tr.appendChild(td);

      });
      i++;
    });
};


  fetch('https://api.github.com/gists/public')
  .then(response => response.json())
  .then(data => {
    render(data);
  })
  .catch(error => console.error(error));
  as
