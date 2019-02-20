module.exports = function (RED) {
    "use strict"
    let caller = {
        call: require('../lib/mcClient.js').call
    }
    let getDDN = require('../lib/mcClient.js').getDDN

    function call(config) {
        RED.nodes.createNode(this, config)
        let node = this

        node.on('input', msg => {
            let [topic, func, name] = [
                msg.topic || config.topic,
                msg.func || config.func,
                config.name
            ]

            if (!name) {
                console.log('name should not be empty !!!')
                return
            }

            if (topic && topic != '') {
                caller.call(topic, func, msg.payload, name).then(reply => {
                    let newMsg = Object.assign(msg, {
                        hostDDN: getDDN(),
                        name: name,
                        payload: reply
                    })

                    node.send([newMsg, null])
                }).catch(err => node.send([null, err]))
            }
        })
    }
    RED.nodes.registerType("call", call)
}
