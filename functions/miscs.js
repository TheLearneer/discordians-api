class MiscsFunctions {

    constructor() {
        throw new Error('Cant be invoked with new.');
    }

    static randomDate(start, end) {
        return new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
    }

}

module.exports = MiscsFunctions;
