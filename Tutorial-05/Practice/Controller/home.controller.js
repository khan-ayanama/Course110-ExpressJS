const path = require('path')

const homeController = (req,res)=>{
    res.sendFile(path.join(process.cwd(),'View','home.html'))
}

module.exports = homeController;