var path = require('path')
var fs = require('fs')
var webpack = require('webpack')
var mkdirp = require('mkdirp')
var postcss = require('postcss')
var cssnano = require('cssnano')
require('shelljs/global')
function clearDist() {
  var distPath = path.resolve(__dirname, '../dist/')
  rm('-rf', distPath)
}
clearDist()
function genComponents () {
  var p = path.resolve(__dirname, '../src/components/')

  fs.readdir(p, function (err, files) {
    if (err) {
      throw err
    }
    files.filter(function (file) {
      return fs.statSync(path.join(p, file)).isDirectory()
    }).forEach(function (file) {
      buildComponents(file)
    })
  })
}
function buildComponents(name) {
  let file = path.join(__dirname, `../src/components/${name}/index`)
  let _config = require('./webpack.base.conf')
  _config.entry = {}
  _config.entry[name] = file
  _config.output.filename = 'index.js'
  _config.output.libraryTarget = 'umd'
  _config.output.library = 'vui' + name
  _config.output.path = path.resolve(__dirname, '../dist/components/' + name.toLowerCase() + '/')

  touchDir(_config.output.path)

  webpack(_config, function () {
  })
}
genComponents()
function genStyles() {
  var p = path.resolve(__dirname, '../src/styles/')
  var pathStyles = path.resolve(__dirname, '../dist/styles/')
  touchDir(pathStyles)
  fs.readdir(p, function (err, files) {
    if (err) {
      throw err
    }
    files.filter(function (file) {
      return fs.statSync(path.join(p, file)).isFile()
    }).forEach(function (file) {
      buildStyles(file)
    })
  })
}
genStyles()
function buildStyles (file) {
  var fromPath = path.resolve(__dirname, `../src/styles/${file}`)
  var toPath = path.resolve(__dirname, `../dist/styles/${file}`)
  var code = fs.readFileSync(fromPath)
  code = code.toString()
  mkdirp('./dist/styles/', function () {
    touch('./dist/styles/' + file)
  })
  postcss([
    require('postcss-salad')({
      browsers: ['ie > 8', 'last 2 versions'],
      features: {
        'bem': {
          'shortcuts': {
            'component': 'b',
            'modifier': 'm',
            'descendent': 'e'
          },
          'separators': {
            'descendent': '__',
            'modifier': '--'
          }
        }
      }
    }),
    require('postcss-discard-comments')({removeAll: true}),
    cssnano({autoprefixer: false}),
    require('postcss-px2rem')({remUnit: 40})
  ])
  .process(code, {from: fromPath, to: toPath})
  .then(function (result) {
    fs.writeFileSync(toPath, result.css)
  })
}

function touchDir(filePath) {
  mkdirp(filePath, function () {
  })
}

