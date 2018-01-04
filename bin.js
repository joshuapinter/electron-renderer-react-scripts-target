#!/usr/bin/env node
var editor = require('react-scripts-webpack-config-editor')
var path = require('path')
var configModifier = path.resolve(__dirname, 'index.js')
var debug = require('debug')('electron-renderer-react-scripts-target:bin')
debug(`configModifier: ${configModifier}`)
editor(configModifier)
