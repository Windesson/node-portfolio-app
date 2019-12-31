const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {   
    const {projects} = req;
    res.render("index", {projects});
});

router.get('/about', (req, res) => {   
    res.render("about");
});

router.get('/project/:id', (req, res, next) => {  
    const { id } = req.params; 
    const {projects} = req;
    const project = projects.find(project => project.id == id);
    
    if(!project) return next();

    res.render("project", {project});
});

module.exports = router;