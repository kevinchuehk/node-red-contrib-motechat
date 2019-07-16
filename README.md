##  node-red-contrib-motechat

### Install

```bash
npm install node-red-contrib-motechat
```
[Get Started](docs/how-to-run.md)

### Simple Motechat Samples

 <https://github.com/motebus/motechat>

The above link provides 6 examples to help you develop your uBots in JavaScript. <br />
It explains and shows samples for send, call, urt, onEvent, retEvent, and Page.

Node| Description | 
--- | --- | 
*send* | sending messages to telegram with chat-id being fully customizable |
*call* | similar to send, but has an input for a function, able to obtain the output that the function desires |
*onEvent* | wait until recieve a signal and read the signal |
*retEvent* | upon onEvent, tells the sender if the device has made an action |
*page* | allows the user a way to attach/upload a JavaScript file in order for them to work conveniently |

### Examples On Node-Red
**Overall Flow for Send Node** <br />
>>Grab { Inject Node } from Input <br />
>>Grab { Send Node } from Motechat <br />
 
>><img src="/node-red-examples/sendflow.png" width="300">

**Send Node Info** <br />
DDN section can input other device's DDN or its EI_NAME <br />
<img src="/node-red-examples/sendnodes.info.png" width="300">

**Inject Node Ino** <br />
<img src="/node-red-examples/InjectSendNode.png" width="300">

**Result** <br />
From Other Device's Terminal <br />
<img src="/node-red-examples/result.jpg" width="300">

**Debug Flow. Using OnEvent**  <br />
In order to read signals from other devices  <br />
Grab { Debug Node } from Output  <br />
Grab { OnEvent Node } from motechat <br />
<img src="/node-red-examples/DebubFlow.png" width="300">

**Debug Node Info** <br />
<img src="/node-red-examples/DebugNode.png" width="300">






