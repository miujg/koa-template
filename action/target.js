const {Target} = require('../db/model')
const {successTemp, failTemp} = require('../tools')

module.exports = {
    
    async addTarget (targetObj) {
        const target = new Target(targetObj)
        let res = await target.save()
        return res ? successTemp() : failTemp()
    },

    async getTarget (query) {
        const targets = await Target.find({userId: query.userId}).sort({lastModify: -1})
        return targets ? successTemp(targets) : failTemp()
    }
}