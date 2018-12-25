#!/usr/bin/env node

import * as inquirer from 'inquirer';
import { configTargets } from './configTargets';
import { createApp } from './createApp';
var configKeys = Object.keys(configTargets);

inquirer
    .prompt([
        {
            type: 'list',
            name: 'target',
            message: 'What config webpack?',
            choices: configKeys.map(function(key) {
                return configTargets[key].message 
            })
        },
        {
            type: 'input',
            name: 'name',
            message: 'Name you project'
        }
    ])
    .then(response => {
        for (var i = 0; i < configKeys.length; ++i) {
            if (configTargets[configKeys[i]].message === response['target']) {
                response['target'] = configKeys[i];
                break;
            }
        }
        
        console.log(response);
        createApp(response);
    });