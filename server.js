var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var airticles = {
    'airticle-one' : {
        title : "Airticle-one : Shukrant tyagi",
        heading : "Airticle-one",
        content : `<p>
                    Files on the sidebar represent the source code of your web app. These files are all actually saved in a git repository on your github account. This console allows you to edit these files, deploy your app, and save these files back to your github repository.
               </p>`
    
    },
    'aititcle-two' : {
        title : "Airticle-two : Shukrant tyagi",
        heading : "Airticle-two",
        content : `<p>
                    Files on the sidebar represent the source code of your web app. These files are all actually saved in a git repository on your github account. This console allows you to edit these files, deploy your app, and save these files back to your github repository.
               </p>`
    
    },
    'airticle-third' : {
         title : "Airticle-third : Shukrant tyagi",
        heading : "Airticle-third",
        content : `<p>
                    Files on the sidebar represent the source code of your web app. These files are all actually saved in a git repository on your github account. This console allows you to edit these files, deploy your app, and save these files back to your github repository.
               </p>`
    }
};

function createTemplate(data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class = "container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `
    ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/airticleName',function(req,res) {
    var airticleName = req.params.airticleName ; 
   res.send(createTemplate(airticles[airticleName]));
});

app.get('/airticle-two',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'airticle-two.html'));
});

app.get('/airticle-third',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'airticle-third.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
