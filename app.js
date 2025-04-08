const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Docker Demo</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
            background-color: #f0f0f0;
          }
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Welcome to Docker Demo!</h1>
          <p>This is a simple Node.js application running in a Docker container.</p>
          <p>Try running some Docker commands to interact with this container!</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
}); 