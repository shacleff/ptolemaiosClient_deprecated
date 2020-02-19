const { ccclass, property } = cc._decorator;

@ccclass
export default class EventCenter extends cc.Component {
    static _instance;

    public static register(event, fun, register) {
        if (EventCenter._instance === undefined) {
            EventCenter._instance = new Object();
        }
        if (EventCenter._instance[event] === undefined) {
            EventCenter._instance[event] = new Array(255);
        }
        for (let i = 0; i < EventCenter._instance[event].length; i++) {
            if (EventCenter._instance[event][i] === undefined || EventCenter._instance[event][i] === null) {
                EventCenter._instance[event][i] = [fun, register]
                return
            }
        }
        EventCenter._instance[event].push([fun, register])
    }

    public static unregister(event, register) {
        if (EventCenter._instance === undefined || EventCenter._instance[event] === undefined) {
            return
        }
        for (let i = 0; i < EventCenter._instance[event].length; i++) {
            if (EventCenter._instance[event][i] === undefined) {
                return
            } else if (EventCenter._instance[event][i] === null) {
            } else if (EventCenter._instance[event][i][1] === register) {
                EventCenter._instance[event][i] = null;
                return
            }
        }
    }

    public static emit(event, data) {
        if (EventCenter._instance === undefined || EventCenter._instance[event] === undefined) {
            return
        }
        var optimize = 0;
        for (let i = 0; i < EventCenter._instance[event].length; i++) {
            if (optimize > 0) EventCenter._instance[event][i] = EventCenter._instance[event][i + optimize]
            if (EventCenter._instance[event][i] === undefined) {
                return
            } else if (EventCenter._instance[event][i] === null) {
                optimize++;
                i--;
            } else {
                if(EventCenter._instance[event][i][1]){
                    EventCenter._instance[event][i][1][EventCenter._instance[event][i][0]](data)
                }else{
                    optimize++;
                    i--;
                }
            }
        }
    }
}
