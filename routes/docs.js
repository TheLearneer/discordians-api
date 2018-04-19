const express = require('express');
const Route = require('../structures/route');

class NoEndpoint extends Route {

    usage() {
        this.app.use('/', express.static('apidoc'));		
    }

}

module.exports = NoEndpoint;
