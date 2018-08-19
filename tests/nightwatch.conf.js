module.export = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_assertions_path: ['test/e2e/custom-assertions'],
  test_settings : {
    "desiredCapabilities" : {
      "browserName" : "phantomjs",
      "javascriptEnabled" : true,
      "acceptSslCerts" : true,
      "phantomjs.binary.path" : "/home/declan/Documents/Dev_Force/phantomjs/bin",
      "phantomjs.cli.args" : ['--ignore-ssl-errors=true']
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    "test_runner": {
      "type": "mocha",
      "options": {
        "ui": "bdd",
        "reporter": "list"
      }
    }
  }
}