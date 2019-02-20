module.exports = (RED) => {
    "use strict"
    const toUrt = require('./lib/toUrtObject')
    const service = require('./lib/service')

    function URT(config) {
        RED.nodes.createNode(this, config)
        const node = this
        node.on('input', msg => {
            const { topic, to } = toUrt(msg.urt)
            const { payload, context } = msg
            service(context, topic, to, payload).then(
                res => node.send([res, null])
            ).catch(
                err => node.send([null, err])
            )
        })
    }
    RED.nodes.registerType("urt", URT)
}