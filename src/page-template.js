

function managerCard(manager) {
    return `
    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
        <div class="card-header fs-3">${manager.getRole()}</div>
        <div class="card-body">
            <h4 class="card-subtitle mb-2">${manager.getName()}</h4>
            <p class="man-id">ID: ${manager.getId()}</p>
            <p class="man-email">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="office">Office Number: ${manager.getOffice()}</p>
        </div>
    </div>
    `
}

/* <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */

function internCard(intern) {
    let internCard = '';
    for (let i = 0; i < intern.length; i++) {
    internCard += `
    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
    <div class="card-header fs-3">${intern[i].getRole()}</div>
        <div class="card-body">
            <h4 class="card-subtitle mb-2">${intern[i].getName()}</h4>
            <p class="man-id">ID: ${intern[i].getId()}</p>
            <p class="man-email">Email: <a href="mailto:${intern[i].getEmail()}">${intern[i].getEmail()}</a></p>
            <p class="school">School: ${intern[i].getSchool()}</p>
        </div>
    </div>
    `
    }
    return internCard;
}

function engineerCard(engineer) {
    let engineerCard = '';
    for (let i = 0; i < engineer.length; i++) {
    engineerCard += `
    <div class="card text-white bg-dark mb-3" style="width: 18rem;">
    <div class="card-header fs-3">${engineer[i].getRole()}</div>
        <div class="card-body">
            <h4 class="card-subtitle mb-2 ">${engineer[i].getName()}</h4>
            <p class="id">ID: ${engineer[i].getId()}</p>
            <p class="email">Email: <a href="mailto:${engineer[i].getEmail()}">${engineer[i].getEmail()}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer[i].getGitHub()}">${engineer[i].getGitHub()}</a></p>
        </div>
    </div>
    `
    }
    return engineerCard;
}




function generatePage(manager, engineer, intern) {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
    </head>
    <header>
    <h1>Team Profile</h1>
    </header>
    <body>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    ${managerCard(manager)}
    </div>
    <div class="col">
    ${internCard(intern)}
    </div>
    <div class="col">
    ${engineerCard(engineer)}
    </div>
  </div>
</div>
    
    
    
    

    




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js">
    </body>
    </html>
    `;
};



module.exports = generatePage;