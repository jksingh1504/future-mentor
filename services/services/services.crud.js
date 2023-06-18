const service = require("../../model/service/service.model.js")
module.exports = {addServices}

async function addServices(serviceDetails){
    try {
        const newService = new service(serviceDetails)
        newService.save()
        return newService
    } catch (error) {
        throw error
    }
}