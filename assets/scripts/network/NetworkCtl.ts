const { ccclass, property } = cc._decorator;

import EventCenter from "../EventCenter";
import Network from "./Network";
import Tips from "../tips/Tips";
import * as pb_100 from "../../plugins/protobuf/create/pb_100_example";

@ccclass
export default class NetworkCtl extends cc.Component {

    private heartTime: number = 0;

    onLoad() {
        console.log("NetworkCtl load ");
        cc.game.addPersistRootNode(this.node);
        EventCenter.register("net_connect", "onConnect", this);
        EventCenter.register("net_reconnect", "onReconnect", this);
        EventCenter.register("net_disconnect", "onDisconnect", this);
        Network.connect();
    }

    update(dt) {
        this.heartTime -= dt;
        if (this.heartTime <= 0 && Network.isReady()) {
            Network.send(pb_100.c10000.create({}));
            this.heartTime = 15;

        }
    }

    public static reconnect() {
        Network.reconnect();
    }

    public onConnect() {
        console.log("onConnect");
        Tips.show("connect", 2);
    }

    public onReconnect() {
        console.log("onReconnect");
        Tips.show("reconnect", 2);
    }

    public onDisconnect() {
        console.log("onDisconnect");
        Network.connect();
        Tips.show("disconnect", 2);
    }
}
