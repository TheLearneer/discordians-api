define({ "api": [
  {
    "type": "get",
    "url": "/comic/dilbert",
    "title": "Dilbert",
    "name": "Dilbert",
    "group": "Comic",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "image",
            "description": "<p>URL to the image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"image\": 'http://assets.amuniversal.com/717011b0fe7a01335e46005056a9545d'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "today",
            "defaultValue": "false",
            "description": "<p>Whether to get today's comic or not.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/comic/dilbert"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/dilbert.js",
    "groupTitle": "Comic"
  },
  {
    "type": "get",
    "url": "/comic/garfield",
    "title": "Garfield",
    "name": "Garfield",
    "group": "Comic",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "URL",
            "optional": false,
            "field": "image",
            "description": "<p>URL to the image.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"image\": 'https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/2018/2018-04-19.gif'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "today",
            "defaultValue": "false",
            "description": "<p>Whether to get today's comic or not.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/comic/garfield"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/garfield.js",
    "groupTitle": "Comic"
  },
  {
    "type": "get",
    "url": "/translate/cursive",
    "title": "Cursive",
    "name": "Cursive",
    "group": "Translate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The translated text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": ''\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be converted.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/translate/cursive"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/cursive.js",
    "groupTitle": "Translate"
  },
  {
    "type": "get",
    "url": "/translate/fancy",
    "title": "Fancy",
    "name": "Fancy",
    "group": "Translate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The translated text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": ''\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be converted.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/translate/fancy"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/fancy.js",
    "groupTitle": "Translate"
  },
  {
    "type": "get",
    "url": "/translate/fancy2",
    "title": "Fancy2",
    "name": "Fancy2",
    "group": "Translate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The translated text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": 'ωєℓ¢σмє тσ тнє αρι.'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be converted.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/translate/fancy2"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/fancy2.js",
    "groupTitle": "Translate"
  },
  {
    "type": "get",
    "url": "/translate/leet",
    "title": "Leet",
    "name": "Leet",
    "group": "Translate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The translated text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": '\\\\/\\\\/31<0443 +[] 7`[-]3 @|°9.'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be converted.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/translate/leet"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/leet.js",
    "groupTitle": "Translate"
  },
  {
    "type": "get",
    "url": "/translate/pirate",
    "title": "Pirate",
    "name": "Pirate",
    "group": "Translate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The translated text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": 'Welcome t\\' thar API.'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be converted.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/translate/pirate"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/pirate.js",
    "groupTitle": "Translate"
  },
  {
    "type": "get",
    "url": "/translate/zalgolize",
    "title": "Zalgolize",
    "name": "Zalgolize",
    "group": "Translate",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The translated text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": 'W̎̕èl̗com̖è̖ ̘̎t̘̗o ̛t̘̕h̘̀e̖ ̕A̗P̎̄I̗̘.̘̘'\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>The text to be converted.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/translate/zalgolize"
      }
    ],
    "version": "0.0.0",
    "filename": "./routes/zalgolize.js",
    "groupTitle": "Translate"
  }
] });
