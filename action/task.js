const {Task} = require('../db/model')
const {successTemp, failTemp} = require('../tools')

module.exports = {
    
    async getTask (params) {
        const tasks = await Task.find(params)
        return tasks ? successTemp(tasks) : failTemp()
    },
    
    async addTask (taskObj) {
        const task = new Task(taskObj)
        let res = await task.save()
        return res ? successTemp() : failTemp() 
    },

    async deleteTask (id) {
        const res = await Task.findByIdAndDelete(id)
        return res ? successTemp() : failTemp()
    },

    async putTask (obj) {
        const res = await Task.findByIdAndUpdate(obj._id, obj)
        return res ? successTemp() : failTemp()
    },

    async addLog (logObj) {
        const task = await Task.findById(logObj.id)
        task.logs.push({time: logObj.time, remark: logObj.remark})
        const res = task.save()
        return res ? successTemp() : failTemp()
    }

}