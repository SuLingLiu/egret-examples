/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


class GUIExplorer extends ns_egret.DisplayObjectContainer{

    public constructor(){
        super();
    }

    public startGame():void{
        //设置屏幕适配策略
        var container = new ns_egret.EqualToFrame();
        var content = ns_egret.Browser.getInstance().isMobile ? new ns_egret.FixedWidth() : new ns_egret.FixedSize(960, 640);
        var policy = new ns_egret.ResolutionPolicy(container, content);
        ns_egret.StageDelegate.getInstance().setDesignSize(960, 640, policy);

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComp,this);
        RES.loadConfig("resources/resource.json","resources/");
        RES.loadGroup("preload");
    }

    public onGroupComp(event:RES.ResourceEvent):void{
        if(event.groupName=="preload"){
           this.createExporer();
        }
    }

    public createExporer():void{
        var stage:ns_egret.Stage = ns_egret.MainContext.instance.stage;
        var sm:ns_egret.SystemManager = new ns_egret.SystemManager();
        stage.addChild(sm);
        var asset:ns_egret.UIAsset = new ns_egret.UIAsset();
        asset.source = "resources/assets/background-disabled-skin.png";
        sm.addElement(asset);
    }
}

var app = new GUIExplorer();