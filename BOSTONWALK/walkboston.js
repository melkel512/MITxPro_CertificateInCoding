  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags

 // Task1// topSalaries = top 5 earners over 200k - name line 8, sal line 11
  function renderTopSalaries(boston, container) {
    var people = boston.data;
    var salaries = people.sort((a, b) => b[11] - a[11]).slice(0, 5);
    const len = salaries.length;
    var html = '';
    for (let i = 0; i < len; i++) {
      html +=
      '<li class="topSalaries">' + 
      '<h2>' + salaries[i][8] + '</h2>' + 
      '<h3>' + salaries[i][11] + '</h3>';
    }
    container.innerHTML = '<ul id = "topSalaries">' + html + '</ul>';
  }
  renderTopSalaries(boston, document.getElementById('container'));
  
//Task 2//topEmployees =  //all employees earning over 200k - name line 8, sal line 11
function renderTopEmployees(boston, container) {
    var people = boston.data;
    var employees = people.filter((a) => a[11] > 200000);
    const len = employees.length;
    var html = '';
    for (let i = 0; i < len; i++) {
      html +=
      '<li class="topEmployees">' + 
      '<h4>' + employees[i][8] + '</h4>' + 
      '<h5>' + employees[i][11] + '</h5>';
   }
   container.innerHTML = `<ul id = "topEmployees">${html}</ul>`;
  }
  renderTopEmployees(boston, document.getElementById('container'));
  
 