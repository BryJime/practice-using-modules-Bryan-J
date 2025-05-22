const yargs = require('yargs');
const chalk = require('chalk');

const argv = yargs
    .option('city', {
        alias: 'c',
        describe: 'City name to fetch weather for',
        type: 'string',
        demandOption: true
    })
    .argv;

// Simulate Weather Data
const getWeather = (city) => {
    const weatherData = {
        'New York': 'Sunny, 62 Degrees',
        'Atlanta': 'Cloudy, 80 Degrees',

    };
    return weatherData[city] || 'Weather data not availble.';
};

// Display Styled output
const cityName = argv.city;
const weatherInfo = getWeather(cityName);

console.log(chalk.blue.bold(`Weather for ${cityName}: `));
console.log(chalk.green(weatherInfo));


// package.json manages dependencies by keeping track of important information about the node.js file such as version, project descriptions, and scripts

// Including node_modules is bad practice because it can be a very large file and can easily be installed via npm install. 

// npm install allows to reinstall dependencies if they're accientally deleted or to update projects with new dependencies.