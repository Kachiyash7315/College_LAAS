# FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



student.laas01@gmail.com
student.laas02@gmail.com
student.laas03@gmail.com
student.laas04@gmail.com


institute.laas01@gmail.com
institute.laas02@gmail.com
institute.laas03@gmail.com
institute.laas04@gmail.com




Assignment Model:

id: autofield
name: string,
problemStatement: string,
description: string,
labEnvironment: string,
labId: foreignKey <Lab>,
ram: int
dateCreated: date
dueDate: date
programmingLanguage: string || null
dependancies: List || null
dataset: url || null


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




// "@ckeditor/ckeditor5-angular": "^4.0.0",
    // "@ckeditor/ckeditor5-build-classic": "^35.3.2",






const express = require('express');
const Docker = require('dockerode');

const app = express();
const docker = new Docker();

app.get('/', async (req, res) => {
  try {
    // Create a new Docker container
    const container = await docker.createContainer({
      Image: 'node:latest',
      Cmd: ['node', '-e', 'console.log("Hello from Docker!")'],
    });

    // Start the container
    await container.start();

    // Get the URL of the container
    const containerInfo = await container.inspect();
    const containerUrl = `http://${containerInfo.NetworkSettings.IPAddress}:3000`;

    // Return the URL of the container
    res.send(containerUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to spin up Docker container.');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000.'));




//With NGnix


const express = require('express');
const Docker = require('dockerode');
const nginxConf = require('nginx-conf');

const app = express();
const docker = new Docker();

app.get('/', async (req, res) => {
  try {
    // Create a new Docker container
    const container = await docker.createContainer({
      Image: 'node:latest',
      Cmd: ['node', '-e', 'console.log("Hello from Docker!")'],
    });

    // Start the container
    await container.start();

    // Get the IP address of the container
    const containerInfo = await container.inspect();
    const containerIp = containerInfo.NetworkSettings.IPAddress;

    // Generate an Nginx configuration file
    const config = nginxConf(`
      server {
        listen 80;
        server_name ${containerIp};
        location / {
          proxy_pass http://${containerIp}:3000;
          proxy_http_version 1.1;
          proxy_set_header Upgrade $http_upgrade;
          proxy_set_header Connection 'upgrade';
          proxy_set_header Host $host;
          proxy_cache_bypass $http_upgrade;
        }
      }
    `);

    // Write the Nginx configuration file to disk
    const configFile = `/etc/nginx/conf.d/${containerId}.conf`;
    await config.save(configFile);

    // Reload Nginx to apply the new configuration
    await exec('nginx -s reload');

    // Return the URL of the container
    const containerUrl = `http://${containerIp}`;
    res.send(containerUrl);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to spin up Docker container.');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000.'));


This script uses the nginx-conf package to generate an Nginx configuration file for the new Docker container. The configuration file listens on port 80 and proxies all requests to the Docker container running on port 3000. The server_name directive is set to the IP address of the Docker container.

Once the configuration file is generated, the script writes it to disk and reloads Nginx to apply the new configuration. The script then returns the URL of the Docker container in the response to the original HTTP request.

Note that you will need to have Nginx installed and running on the server for this script to work. Additionally, you may need to modify the Nginx configuration to suit your specific use case, such as adding SSL support or configuring access control.

