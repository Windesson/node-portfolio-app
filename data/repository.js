const { projects } = require('./data.json');

module.exports = (req, res, next) => {
    req.projects = projects;
    next();
}