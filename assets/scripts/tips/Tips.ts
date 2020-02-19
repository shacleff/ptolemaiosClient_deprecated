import EventCenter from "../EventCenter";
import * as pb_100 from "../../plugins/protobuf/create/pb_100_example"

const { ccclass, property } = cc._decorator;

@ccclass
export default class Tips extends cc.Component {

    @property(cc.Label)
    tips: cc.Label = null;

    static _instance: Tips = null;
    private showTime: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        EventCenter.register("s10000", "on10000", this);
        Tips._instance = this;
        this.tips.node.active = false;
    }

    update(dt) {
        if (this.showTime <= 0) return;
        if (this.showTime < dt) {
            this.showTime = 0;
            this.tips.node.active = false;
        } else {
            this.tips.node.opacity = Math.min(1, this.showTime / 2) * 255;
            this.showTime -= dt;
            this.tips.node.active = true;
        }
    }

    public static show(text: string, time: number) {
        Tips._instance.tips.string = text;
        Tips._instance.showTime = time;
    }

    public on10000(data: pb_100.s10000) {
        console.log("heart " + data.time);
        Tips.show("heart " + data.time, 2);
    }
}
