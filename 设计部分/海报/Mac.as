package {
	import flash.display.*;
	import flash.events.*;
	import kingofkofs.maceffect;
	//导入maceffect
	public class Mac extends Sprite {

		public function Mac() {
			var oldX:Number = 300;

			stage.addEventListener(MouseEvent.MOUSE_MOVE,MouseMove);

			function MouseMove(e:MouseEvent):void {

				if (mouseX > oldX) {
					macMenu.x=-(macMenu.width*mouseX)/stage.stageWidth+stage.stageWidth/2;
					//macMenu.x=macMenu.x-3;
					//向右移
				} else {
					macMenu.x=-(macMenu.width*mouseX)/stage.stageWidth+stage.stageWidth/2;
					//macMenu.x=macMenu.x+3;
					//向右移
				}

				//oldX = mouseX;

			}
			//============中间==========
			var macMenu=addChild(new maceffect);
			//创建一个macMenu实例
			macMenu.createMenu("Icon1","Icon2","Icon3","Icon4","Icon5","Icon6","Icon7","Icon8");
			//创建菜单
			macMenu.setEasing(true,5);

			//设置缓动，默认是不缓动的

			macMenu.doSpring=true;
			//设置是否具有弹性

			macMenu.start(1000/60);
			//激活,并以60f/s的速度刷新
			//macMenu.x=-(macMenu.width*mouseX)/stage.stageWidth;
			macMenu.y=150;
			//macMenu.x=-macMenu.width/2+stage.stageWidth/2;
			//macMenu.y=-macMenu.height/2+stage.stageHeight/2;


			macMenu.multiple=2;
			//放大倍数，默认2倍
			macMenu.range=4;
			//相应范围，默认是4，最好偶数,按菜单数目和大小而定
			
		}
	}
}