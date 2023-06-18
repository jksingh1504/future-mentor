const serviceProvider = require("../../model/serviceProviders/serviceProvider.model.js")
module.exports = {addServiceProviders}

async function addServiceProviders(serviceProviderDetails){
    try {
        const newServiceProvider = new serviceProvider(serviceProviderDetails)
        await newServiceProvider.save()
        return newServiceProvider
    } catch (error) {
        throw error
    }
}