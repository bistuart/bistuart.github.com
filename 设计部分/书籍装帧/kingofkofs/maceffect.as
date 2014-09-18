package kingofkofs{
	/*
	   苹果菜单效果类
	   作者：唐炜春
	   
	   
	*/
	import flash.display.*;
	import flash.events.*;
	import flash.utils.getDefinitionByName;
	import flash.utils.Timer;
	import flash.geom.Point;
	public class maceffect extends Sprite {

		public var range:Number=4;
		public var multiple:Number=2;
		private var limitPlusNum;
		private var timer:Timer=new Timer(1000/60);
		private var iconArr:Array=new Array();
		private var doEasing=false;
		private var numIcon:int;
		private var oriAllWid;
		private var easingNum:Number=3;
		private var firstIcon;
		private var point:Point=new Point();
		private var firstRun:Boolean=true
		
		public var doSpring:Boolean=false
		private var vx=0,vy=0,f=0.7,spring=.9
		public function maceffect() {
			
		}
			
			
		
		
		
		private function update(e:TimerEvent):void {
			if (numIcon>0) {
				
				var allWid=0;
				if(!doSpring){
				var bf:Number=doEasing?easingNum:1;
				firstRun?(bf=1,firstRun=false):0
				point.x+=(mouseX-point.x)/bf;
				point.y+=(mouseY-point.y)/bf;
				}else{
					firstRun?(point.x=mouseX,point.y=mouseY,firstRun=false):0
					var ax:Number=(mouseX-point.x)*spring
					var ay:Number=(mouseY-point.y)*spring
					vx+=ax,vy+=ay,vy*=f,vx*=f,point.x+=vx/5,point.y+=vy/5
				}
				for (var i=0; i<iconArr.length; i++) {
					var disX:Number=Math.abs(iconArr[i].oriX-point.x);
					var disY:Number=Math.abs(iconArr[i].oriY-point.y);
					var limitDisX=iconArr[i].oriWid/2* range;
					var limitDisY=iconArr[i].oriWid/2* range/2;
					disX>limitDisX&&[disX=limitDisX];
					disY>limitDisY&&[disY=limitDisY];
					var perX:Number=1-(disX/limitDisX);
					var perY:Number=1-(disY/limitDisY);
					limitPlusNum=firstIcon.oriWid*(multiple-1);
					var plusWid=perY*perX*limitPlusNum;
					iconArr[i].width=iconArr[i].oriWid+ plusWid;
					iconArr[i].height=iconArr[i].width*(iconArr[i].oriHei/iconArr[i].oriWid);
					allWid+=iconArr[i].width;
				}
				firstIcon.x=firstIcon.oriX+oriAllWid/2-allWid/2;
				for (var j=1; j<iconArr.length; j++) {
					iconArr[j].x=iconArr[j-1].x+iconArr[j-1].width/2+iconArr[j].width/2
				}
				e.updateAfterEvent();
			}
		}
		public function createMenu(...arg):Object {
			numIcon=arg.length;
			oriAllWid=0;
			for (var j=0; j<arg.length; j++) {
				var myClass:Class=getDefinitionByName(arg[j]) as Class;
				var IC=new myClass();
				IC.x=j*IC.width+IC.width/2-1
				IC.oriX=IC.x;
				IC.oriY=IC.y;
				oriAllWid+=IC.oriWid=IC.width;
				IC.oriHei=IC.height;
				iconArr.push(addChild(IC));
			}
			firstIcon=iconArr[0];
			limitPlusNum=firstIcon.oriWid*(multiple-1);
			timer.addEventListener(TimerEvent.TIMER,update);
			return this;
		}
		public function stop() {
			timer.stop();
			timer.removeEventListener(TimerEvent.TIMER,update);
		}
		public function start(...arg) {
			
			arg[0]&&[timer=new Timer(arg[0])];
			timer.addEventListener(TimerEvent.TIMER,update);
			timer.start();
			
		}
		public function setEasing(...arg) {
			arg.length>0?[doEasing=arg[0],easingNum=arg[1]]:[doEasing=false,easingNum=3];
		}
	}
}