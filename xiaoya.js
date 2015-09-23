(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/s1_island.png", id:"s1_island"},
		{src:"images/s1_jia.png", id:"s1_jia"},
		{src:"images/s1_lighthouse.png", id:"s1_lighthouse"},
		{src:"images/s1_lun.png", id:"s1_lun"},
		{src:"images/s1_p.png", id:"s1_p"},
		{src:"images/s1_sea.png", id:"s1_sea"},
		{src:"images/s1_sun.png", id:"s1_sun"},
		{src:"images/s1_title.png", id:"s1_title"},
		{src:"images/s1_txt.png", id:"s1_txt"},
		{src:"images/s2_flower_1.png", id:"s2_flower_1"},
		{src:"images/s2_flower_2.png", id:"s2_flower_2"},
		{src:"images/s2_heart.png", id:"s2_heart"},
		{src:"images/s2_title.png", id:"s2_title"},
		{src:"images/s2_top.png", id:"s2_top"},
		{src:"images/s2_txt_1.png", id:"s2_txt_1"},
		{src:"images/s2_txt_2.png", id:"s2_txt_2"},
		{src:"images/s2_txt_bg.png", id:"s2_txt_bg"}
	]
};



// symbols:



(lib.s1_island = function() {
	this.initialize(img.s1_island);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,151);


(lib.s1_jia = function() {
	this.initialize(img.s1_jia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,98);


(lib.s1_lighthouse = function() {
	this.initialize(img.s1_lighthouse);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,163);


(lib.s1_lun = function() {
	this.initialize(img.s1_lun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,139);


(lib.s1_p = function() {
	this.initialize(img.s1_p);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,628);


(lib.s1_sea = function() {
	this.initialize(img.s1_sea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,638);


(lib.s1_sun = function() {
	this.initialize(img.s1_sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,399,227);


(lib.s1_title = function() {
	this.initialize(img.s1_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,150);


(lib.s1_txt = function() {
	this.initialize(img.s1_txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,101);


(lib.s2_flower_1 = function() {
	this.initialize(img.s2_flower_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,314);


(lib.s2_flower_2 = function() {
	this.initialize(img.s2_flower_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,329);


(lib.s2_heart = function() {
	this.initialize(img.s2_heart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,268,64);


(lib.s2_title = function() {
	this.initialize(img.s2_title);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,490,100);


(lib.s2_top = function() {
	this.initialize(img.s2_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,142);


(lib.s2_txt_1 = function() {
	this.initialize(img.s2_txt_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,519,152);


(lib.s2_txt_2 = function() {
	this.initialize(img.s2_txt_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,372,80);


(lib.s2_txt_bg = function() {
	this.initialize(img.s2_txt_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,509);


(lib.s2_txt_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_txt_bg();
	this.instance.setTransform(-319.5,-509);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.5,-509,639,509);


(lib.s2_txt_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_txt_1();
	this.instance.setTransform(-259.5,-152);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-259.5,-152,519,152);


(lib.s2_tst_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_txt_2();
	this.instance.setTransform(-186,-80);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186,-80,372,80);


(lib.s2_top_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_top();
	this.instance.setTransform(-320,-142);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-142,640,142);


(lib.s2_title_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_title();
	this.instance.setTransform(-245,-100);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-245,-100,490,100);


(lib.s2_heart_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_heart();
	this.instance.setTransform(-134,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-134,-64,268,64);


(lib.s2_flower_right = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_flower_1();
	this.instance.setTransform(-58.5,-314);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-314,117,314);


(lib.s2_flower_left = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s2_flower_2();
	this.instance.setTransform(-61.5,-329);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-61.5,-329,123,329);


(lib.s2_bg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3E891").s().p("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");
	this.shape.setTransform(-3.8,-814.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-325,-1200,645.1,1200);


(lib.s1_txt_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_txt();
	this.instance.setTransform(-240,-70);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-240,-70,480,101);


(lib.s1_title_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_title();
	this.instance.setTransform(-150,-75);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150,-75,300,150);


(lib.s1_sun_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_sun();
	this.instance.setTransform(-199.5,-113.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-199.5,-113.5,399,227);


(lib.s1_sky_pic = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAE3E6").s().p("EgEtApyQiJAWhqA/QgjhDhqghQg1gRgugDQhviejkAbQhyAOhcAtQhliejQAHQhoADhUAjQhRitjQgaQhogOhZAVQAAhIhMhLQgmgmgmgXQAymYjwieQhLgxhggSQgvgJghAAQAAiJhsiCQg2hAg2gmQBpjUhuijQg3hRhNgpIgu0EIAAAAMgAKggsMBnNAAAMAADAgsIANT0Qi6AShSCdQgZAxgNA5IgHAwQkZCeAcEeQAJBZAnBbIAlBKQi6A1g6CzQgSA4gDA+IAAAyQiqAIhpCBQggApgWAvIgQAoQj7gIioDEQg0A9gmBKIgcA+QgZgWgyAEIgtAKQi/iAjMBgQhAAdg6AxIgsAqQjJhhjUBTQhDAag7ApIgvAjQhQg0h0AxQglAPgjAYIgcAUQiVjLkQAug");
	this.shape.setTransform(2.3,-1109.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-328.7,-1392.5,662.2,1392.5);


(lib.s1_sea_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_sea();
	this.instance.setTransform(-320,-319);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-320,-319,640,638);


(lib.s1_p_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_p();
	this.instance.setTransform(-215,-314);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-215,-314,430,628);


(lib.s1_lun_pic = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_lun();
	this.instance.setTransform(-69.5,-139);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.5,-139,139,139);


(lib.s1_lighthouse_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_lighthouse();
	this.instance.setTransform(-57.5,-81.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.5,-81.5,115,163);


(lib.s1_jia_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_jia();
	this.instance.setTransform(-45.5,-49);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.5,-49,91,98);


(lib.s1_island_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1_island();
	this.instance.setTransform(-106,-75.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106,-75.5,212,151);


(lib.s2_bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s2_title
	this.instance = new lib.s2_title_1();
	this.instance.setTransform(1.2,-503,1,1,0,0,0,0,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhLGAgJMAAAhDbMCWNAAAMAAABDbQ07BozjA2IAAjtI02AAIAAh1MgmTAAAIAAGNQ68go3qihg");
	mask.setTransform(-15.7,-701.6);

	// s2_flower_right
	this.instance_1 = new lib.s2_flower_right();
	this.instance_1.setTransform(8.1,-681.7,1,1,80.7,0,0,-225.6,-176.7);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:0,regY:-157,rotation:65.4,x:84.3,y:-468.5},0).wait(1).to({rotation:54.8,x:122.2,y:-486.1},0).wait(1).to({rotation:46.6,x:148.9,y:-504.4},0).wait(1).to({rotation:39.8,x:168.7,y:-522.1},0).wait(1).to({rotation:34.2,x:183.6,y:-538.6},0).wait(1).to({rotation:29.4,x:195,y:-553.9},0).wait(1).to({rotation:25.2,x:203.8,y:-567.9},0).wait(1).to({rotation:21.5,x:210.7,y:-580.6},0).wait(1).to({rotation:18.3,x:216,y:-592.1},0).wait(1).to({rotation:15.5,x:220.2,y:-602.5},0).wait(1).to({rotation:13,x:223.5,y:-611.9},0).wait(1).to({rotation:10.8,x:226,y:-620.1},0).wait(1).to({rotation:8.9,x:227.9,y:-627.6},0).wait(1).to({rotation:7.2,x:229.4,y:-634.1},0).wait(1).to({rotation:5.7,x:230.6,y:-639.8},0).wait(1).to({rotation:4.4,x:231.5,y:-644.8},0).wait(1).to({rotation:3.3,x:232.1,y:-649.1},0).wait(1).to({rotation:2.4,x:232.6,y:-652.7},0).wait(1).to({rotation:1.6,x:233,y:-655.6},0).wait(1).to({rotation:1,x:233.2,y:-658},0).wait(1).to({rotation:0.6,x:233.4,y:-659.8},0).wait(1).to({rotation:0.3,x:233.6,y:-661.1},0).wait(1).to({rotation:0.1,y:-661.8},0).wait(1).to({regX:-225.6,regY:-176.7,rotation:0,x:8.1,y:-681.8},0).wait(1));

	// s2_flower_left
	this.instance_2 = new lib.s2_flower_left();
	this.instance_2.setTransform(6.7,-677.4,1,1,-85.2,0,0,241.4,-170.3);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:0,regY:-164.5,rotation:-69,x:-74.4,y:-449.9},0).wait(1).to({rotation:-57.8,x:-117,y:-469.9},0).wait(1).to({rotation:-49.2,x:-146.8,y:-490.9},0).wait(1).to({rotation:-42.1,x:-168.6,y:-511.2},0).wait(1).to({rotation:-36.1,x:-184.9,y:-530.3},0).wait(1).to({rotation:-31,x:-197.2,y:-547.9},0).wait(1).to({rotation:-26.6,x:-206.6,y:-564},0).wait(1).to({rotation:-22.7,x:-213.7,y:-578.6},0).wait(1).to({rotation:-19.3,x:-219.2,y:-591.9},0).wait(1).to({rotation:-16.4,x:-223.4,y:-603.8},0).wait(1).to({rotation:-13.7,x:-226.5,y:-614.4},0).wait(1).to({rotation:-11.4,x:-228.8,y:-623.9},0).wait(1).to({rotation:-9.3,x:-230.6,y:-632.3},0).wait(1).to({rotation:-7.6,x:-231.9,y:-639.8},0).wait(1).to({rotation:-6,x:-232.8,y:-646.3},0).wait(1).to({rotation:-4.6,x:-233.5,y:-652},0).wait(1).to({rotation:-3.5,x:-233.9,y:-656.8},0).wait(1).to({rotation:-2.5,x:-234.3,y:-660.9},0).wait(1).to({rotation:-1.7,x:-234.5,y:-664.2},0).wait(1).to({rotation:-1.1,x:-234.6,y:-666.9},0).wait(1).to({rotation:-0.6,x:-234.7,y:-669},0).wait(1).to({rotation:-0.3,y:-670.4},0).wait(1).to({rotation:-0.1,x:-234.8,y:-671.2},0).wait(1).to({regX:241.4,regY:-170.3,rotation:0,x:6.6,y:-677.3},0).wait(1));

	// s2_heart
	this.instance_3 = new lib.s2_heart_1();
	this.instance_3.setTransform(1.1,-111.7,1,1,0,0,0,0,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25));

	// s2_tst_2
	this.instance_4 = new lib.s2_tst_2();
	this.instance_4.setTransform(3,-203,1,1,0,0,0,0,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25));

	// s2_txt_1
	this.instance_5 = new lib.s2_txt_1_1();
	this.instance_5.setTransform(4.8,-359.4,1,1,0,0,0,0,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25));

	// s2_txt_bg.png
	this.instance_6 = new lib.s2_txt_bg_1();
	this.instance_6.setTransform(0,-254.5,1,1,0,0,0,0,-254.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.5,-553,639,553);


(lib.s1_title_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,step1:28,step2:49,end:75});

	// Layer 4
	this.instance = new lib.s2_top_1();
	this.instance.setTransform(3.9,-75.9,1,1,0,0,0,0,-71);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).wait(1).to({y:-43.4},0).wait(1).to({y:-20.8},0).wait(1).to({y:-3.3},0).wait(1).to({y:10.9},0).wait(1).to({y:22.7},0).wait(1).to({y:32.6},0).wait(1).to({y:41},0).wait(1).to({y:48.1},0).wait(1).to({y:53.9},0).wait(1).to({y:58.8},0).wait(1).to({y:62.7},0).wait(1).to({y:65.8},0).wait(1).to({y:68.2},0).wait(1).to({y:69.8},0).wait(1).to({y:70.7},0).wait(1).to({y:71},0).wait(1));

	// s1_title
	this.instance_1 = new lib.s1_title_1();
	this.instance_1.setTransform(-1.9,346.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(1)).wait(15).to({y:345.4},0).wait(1).to({y:342.3},0).wait(1).to({y:336.9},0).wait(1).to({y:329.1},0).wait(1).to({y:318.8},0).wait(1).to({y:306.1},0).wait(1).to({y:291.2},0).wait(1).to({y:274.7},0).wait(1).to({y:257.1},0).wait(1).to({y:239.4},0).wait(1).to({y:222.4},0).wait(1).to({y:206.5},0).wait(1).to({y:192.3},0).wait(1).to({y:179.9},0).wait(1).to({y:169.5},0).wait(1).to({y:161},0).wait(1).to({y:154.3},0).wait(1).to({y:149.3},0).wait(1).to({y:145.9},0).wait(1).to({y:144},0).wait(1).to({y:143.4},0).to({y:123.9,alpha:0},15).to({_off:true},1).wait(11));

	// s1_txt
	this.instance_2 = new lib.s1_txt_1();
	this.instance_2.setTransform(0,541.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:502.2,alpha:1},14,cjs.Ease.get(1)).wait(7).to({regY:-19.5,y:481.7},0).wait(1).to({y:478.6},0).wait(1).to({y:473.2},0).wait(1).to({y:465.4},0).wait(1).to({y:455.1},0).wait(1).to({y:442.4},0).wait(1).to({y:427.5},0).wait(1).to({y:411},0).wait(1).to({y:393.4},0).wait(1).to({y:375.7},0).wait(1).to({y:358.7},0).wait(1).to({y:342.8},0).wait(1).to({y:328.6},0).wait(1).to({y:316.2},0).wait(1).to({y:305.8},0).wait(1).to({y:297.3},0).wait(1).to({y:290.6},0).wait(1).to({y:285.6},0).wait(1).to({y:282.2},0).wait(1).to({y:280.3},0).wait(1).to({regY:0,y:299.2},0).to({y:279.7,alpha:0},15).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.9,271.4,300,150);


(lib.s1_lun_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.s1_lun_pic();
	this.instance.setTransform(5,4,1,1,0,0,0,5,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},149).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-69.5,139,139);


(lib.s1_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"step1":19,"end":39});

	// Layer 3
	this.instance = new lib.s2_bg();
	this.instance.setTransform(0,600,1,1,0,0,0,0,-600);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},20).wait(1));

	// Layer 1
	this.instance_1 = new lib.s1_sky_pic();
	this.instance_1.setTransform(0,784.7,1,1,0,0,0,0,-600);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:2.3,regY:-1109.3,x:2.3,y:273.8},0).wait(1).to({y:269},0).wait(1).to({y:260.8},0).wait(1).to({y:249.1},0).wait(1).to({y:233.9},0).wait(1).to({y:215.7},0).wait(1).to({y:195},0).wait(1).to({y:172.6},0).wait(1).to({y:149.6},0).wait(1).to({y:127},0).wait(1).to({y:105.8},0).wait(1).to({y:86.6},0).wait(1).to({y:69.9},0).wait(1).to({y:55.9},0).wait(1).to({y:44.7},0).wait(1).to({y:36.2},0).wait(1).to({y:30.4},0).wait(1).to({y:27},0).wait(1).to({regX:0,regY:-600,x:0,y:535.3},0).wait(1).to({regX:2.3,regY:-1109.3,x:2.3,y:24.1,alpha:0.989},0).wait(1).to({y:18,alpha:0.954},0).wait(1).to({y:7.3,alpha:0.892},0).wait(1).to({y:-8.2,alpha:0.803},0).wait(1).to({y:-27.8,alpha:0.69},0).wait(1).to({y:-49.5,alpha:0.565},0).wait(1).to({y:-71.2,alpha:0.44},0).wait(1).to({y:-90.9,alpha:0.327},0).wait(1).to({y:-107.7,alpha:0.23},0).wait(1).to({y:-121.2,alpha:0.152},0).wait(1).to({y:-131.5,alpha:0.093},0).wait(1).to({y:-139,alpha:0.05},0).wait(1).to({y:-143.9,alpha:0.021},0).wait(1).to({y:-146.7,alpha:0.005},0).wait(1).to({regX:0,regY:-600,x:0,y:361.7,alpha:0},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-328.7,-7.8,662.2,566.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0,"step1":51,"end":89});

	// Layer 11
	this.instance = new lib.s2_bottom("single",0);
	this.instance.setTransform(-0.4,134.9,1,1,0,0,0,0,-418.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(1).to({regX:-5.8,regY:-418,x:-6.2,y:58.7},0).wait(1).to({y:-6.7},0).wait(1).to({y:-64.4},0).wait(1).to({y:-115.7},0).wait(1).to({y:-161.4},0).wait(1).to({y:-201.7},0).wait(1).to({y:-237.2},0).wait(1).to({y:-267.9},0).wait(1).to({y:-294.2},0).wait(1).to({y:-316.2},0).wait(1).to({y:-333.9},0).wait(1).to({y:-347.6},0).wait(1).to({y:-357.3},0).wait(1).to({y:-363},0).wait(1).to({regX:0,regY:-418.1,x:-0.4,y:-365,mode:"synched",loop:false},0).wait(21));

	// bg (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EhF0BF0Ugc6gc7AAAgo5UAAAgo5Ac6gc7UAc8gc6Ao4AAAUAo6AAAAc6Ac6UAc7Ac7AAAAo5UAAAAo5gc7Ac7Ugc6Ac7go6AAAUgo4AAAgc8gc7g");
	var mask_graphics_51 = new cjs.Graphics().p("EhF0BF0Ugc6gc7AAAgo5UAAAgo5Ac6gc7UAc8gc6Ao4AAAUAo6AAAAc6Ac6UAc7Ac7AAAAo5UAAAAo5gc7Ac7Ugc6Ac7go6AAAUgo4AAAgc8gc7g");
	var mask_graphics_52 = new cjs.Graphics().p("Eg/5A/5UgadgaeAAAglbUAAAglbAadgaeUAafgadAlaAAAUAlcAAAAadAadUAaeAaeAAAAlbUAAAAlbgaeAaeUgadAaeglcAAAUglaAAAgafgaeg");
	var mask_graphics_53 = new cjs.Graphics().p("Eg6cA6dUgYNgYOAAAgiPUAAAgiOAYNgYOUAYOgYNAiOAAAUAiQAAAAYMAYNUAYOAYOAAAAiOUAAAAiPgYOAYOUgYMAYNgiQAAAUgiOAAAgYOgYNg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg1eA1eQ2I2KAA/UQAA/TWI2LQWL2JfTAAQfVABWIWIQWKWKAAfUQAAfU2KWKQ2IWK/VAAQ/TAA2L2Kg");
	var mask_graphics_55 = new cjs.Graphics().p("Egw9Aw9Q0S0RAA8sQAA8rUS0SQUT0ScqAAQcsAAUSUSQUSUSAAcrQAAcs0SURQ0SUT8sAAQ8qAA0T0Tg");
	var mask_graphics_56 = new cjs.Graphics().p("Egs7As8QynyogB6UQAB6USnynQSoyoaTAAQaVAASmSoQSoSnAAaUQAAaUyoSoQymSn6VAAQ6TAAyoyng");
	var mask_graphics_57 = new cjs.Graphics().p("EgpYApYQxIxJAA4PQAA4PRIxJQRKxJYOAAQYPAARJRJQRKRJgBYPQABYPxKRJQxJRK4PAAQ4OAAxKxKg");
	var mask_graphics_58 = new cjs.Graphics().p("EgmTAmTQv3v3AA2cQAA2bP3v4QP4v3WbAAQWcAAP3P3QP4P4AAWbQAAWcv4P3Qv3P42cAAQ2bAAv4v4g");
	var mask_graphics_59 = new cjs.Graphics().p("EgjsAjtQuyuzAA06QAA06OyuyQOzuyU5AAQU6AAOyOyQOzOyAAU6QAAU6uzOzQuyOy06AAQ05AAuzuyg");
	var mask_graphics_60 = new cjs.Graphics().p("EghjAhkQt6t6AAzqQAAzpN6t6QN6t6TpAAQTqAAN6N6QN6N6AATpQAATqt6N6Qt6N6zqAAQzpAAt6t6g");
	var mask_graphics_61 = new cjs.Graphics().p("A/5f6QtOtOAAysQAAyrNOtOQNOtOSrAAQSsAANONOQNONOAASrQAASstONOQtONOysAAQyrAAtOtOg");
	var mask_graphics_62 = new cjs.Graphics().p("A+teuQsvsuAAyAQAAx/MvsuQMvsvR+AAQSAAAMuMvQMvMugBR/QABSAsvMuQsuMvyAgBQx+ABsvsvg");
	var mask_graphics_63 = new cjs.Graphics().p("A+AeBQsbsdAAxkQAAxkMbscQMdsbRjAAQRlAAMcMbQMbMcAARkQAARksbMdQscMbxlAAQxjAAsdsbg");
	var mask_graphics_64 = new cjs.Graphics().p("A9xdxQsVsVAAxcQAAxbMVsWQMWsVRbAAQRcAAMVMVQMWMWAARbQAARcsWMVQsVMWxcAAQxbAAsWsWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-3.6,y:-490}).wait(51).to({graphics:mask_graphics_51,x:-3.6,y:-490}).wait(1).to({graphics:mask_graphics_52,x:-2.8,y:-511.7}).wait(1).to({graphics:mask_graphics_53,x:-2,y:-531.8}).wait(1).to({graphics:mask_graphics_54,x:-1.3,y:-550.1}).wait(1).to({graphics:mask_graphics_55,x:-0.6,y:-566.6}).wait(1).to({graphics:mask_graphics_56,x:0,y:-581.4}).wait(1).to({graphics:mask_graphics_57,x:0.5,y:-594.5}).wait(1).to({graphics:mask_graphics_58,x:0.9,y:-605.9}).wait(1).to({graphics:mask_graphics_59,x:1.3,y:-615.4}).wait(1).to({graphics:mask_graphics_60,x:1.6,y:-623.3}).wait(1).to({graphics:mask_graphics_61,x:1.8,y:-629.4}).wait(1).to({graphics:mask_graphics_62,x:2,y:-633.7}).wait(1).to({graphics:mask_graphics_63,x:2.1,y:-636.3}).wait(1).to({graphics:mask_graphics_64,x:2.1,y:-637.2}).wait(26));

	// s1_p
	this.instance_1 = new lib.s1_p_1();
	this.instance_1.setTransform(227.7,480.3,4.325,4.325);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({scaleX:4.29,scaleY:4.29,x:225.9,y:472.3,alpha:0.01},0).wait(1).to({scaleX:4.2,scaleY:4.2,x:220.9,y:449.4,alpha:0.037},0).wait(1).to({scaleX:4.06,scaleY:4.06,x:213.1,y:414,alpha:0.08},0).wait(1).to({scaleX:3.88,scaleY:3.88,x:203.1,y:368.7,alpha:0.134},0).wait(1).to({scaleX:3.67,scaleY:3.67,x:191.5,y:316.1,alpha:0.197},0).wait(1).to({scaleX:3.44,scaleY:3.44,x:178.9,y:259,alpha:0.266},0).wait(1).to({scaleX:3.2,scaleY:3.2,x:165.8,y:199.5,alpha:0.337},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:152.7,y:139.7,alpha:0.409},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:139.7,y:81,alpha:0.48},0).wait(1).to({scaleX:2.51,scaleY:2.51,x:127.3,y:24.6,alpha:0.547},0).wait(1).to({scaleX:2.29,scaleY:2.29,x:115.5,y:-28.8,alpha:0.611},0).wait(1).to({scaleX:2.09,scaleY:2.09,x:104.6,y:-78.5,alpha:0.671},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:94.5,y:-124.1,alpha:0.726},0).wait(1).to({scaleX:1.75,scaleY:1.75,x:85.4,y:-165.6,alpha:0.776},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:77.2,y:-202.7,alpha:0.82},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:70,y:-235.5,alpha:0.86},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:63.7,y:-263.9,alpha:0.894},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:58.4,y:-288.2,alpha:0.923},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:53.9,y:-308.4,alpha:0.947},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:50.4,y:-324.6,alpha:0.967},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:47.6,y:-336.9,alpha:0.982},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:45.7,y:-345.6,alpha:0.992},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:44.6,y:-350.6,alpha:0.998},0).wait(1).to({scaleX:1,scaleY:1,x:44.3,y:-352.3,alpha:1},0).wait(26).to({scaleX:1,scaleY:1,x:44.4,y:-353.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:44.7,y:-358.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:45.4,y:-366.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:46.4,y:-379.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:47.9,y:-397.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:49.5,y:-418.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:51.2,y:-439.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:52.7,y:-457.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:53.8,y:-471.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:54.6,y:-481.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:55.1,y:-487.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:55.3,y:-490.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:55.4,y:-491.7},0).wait(26));

	// s1_sea
	this.instance_2 = new lib.s1_sea_1();
	this.instance_2.setTransform(-27.6,635.4,1.976,1.976);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1.97,scaleY:1.97,x:-27.3,y:627.2},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:-26.6,y:604},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:-25.4,y:568},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:-23.9,y:521.9},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-22.1,y:468.4},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:-20.2,y:410.3},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:-18.2,y:349.9},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:-16.2,y:289},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:-14.2,y:229.3},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:-12.3,y:171.9},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-10.5,y:117.6},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-8.9,y:67.1},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-7.3,y:20.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-6,y:-21.5},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-4.7,y:-59.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-3.6,y:-92.6},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-2.7,y:-121.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-1.8,y:-146.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-1.2,y:-166.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-0.6,y:-183.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-0.2,y:-195.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:0.1,y:-204.5},0).wait(1).to({scaleX:1,scaleY:1,x:0.2,y:-209.7},0).wait(1).to({scaleX:1,scaleY:1,x:0.3,y:-211.4},0).wait(28).to({scaleX:1,scaleY:1,y:-212.8,alpha:0.989},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:0.4,y:-217.6,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:0.6,y:-226.2,alpha:0.89},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:0.8,y:-239.1,alpha:0.794},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:1.1,y:-256,alpha:0.668},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:1.5,y:-275.3,alpha:0.525},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:1.8,y:-294.7,alpha:0.381},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:2.1,y:-311.7,alpha:0.254},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:2.4,y:-325.1,alpha:0.154},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:2.5,y:-334.9,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:2.7,y:-341.3,alpha:0.034},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-344.8,alpha:0.008},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:2.8,y:-345.9,alpha:0},0).to({_off:true},1).wait(25));

	// s1_sun
	this.instance_3 = new lib.s1_sun_1();
	this.instance_3.setTransform(-5.8,-395.6);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({y:-628.4},25,cjs.Ease.get(1)).wait(3).to({scaleX:1,scaleY:1,y:-630.4,alpha:0.989},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-5.7,y:-636.9,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-5.6,y:-648.8,alpha:0.89},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-5.4,y:-666.5,alpha:0.794},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-5.2,y:-689.6,alpha:0.668},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-5,y:-716.2,alpha:0.525},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-4.7,y:-742.7,alpha:0.381},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-4.5,y:-766,alpha:0.254},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-4.4,y:-784.5,alpha:0.154},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-4.2,y:-797.9,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-806.7,alpha:0.034},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-4.1,y:-811.5,alpha:0.008},0).wait(1).to({scaleX:1.12,scaleY:1.12,y:-813,alpha:0},0).to({_off:true},1).wait(25));

	// s1_jia
	this.instance_4 = new lib.s1_jia_1();
	this.instance_4.setTransform(763.6,135.7,1.976,1.976);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleX:1.97,scaleY:1.97,x:758.9,y:129.4},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:745.4,y:111.4},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:724.6,y:83.6},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:698,y:48.1},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:667.1,y:6.8},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:633.5,y:-38},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:598.5,y:-84.7},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:563.3,y:-131.7},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:528.8,y:-177.7},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:495.6,y:-222},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:464.2,y:-263.9},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:435,y:-302.9},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:408.2,y:-338.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:383.8,y:-371.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:362,y:-400.4},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:342.7,y:-426.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:326,y:-448.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:311.7,y:-467.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:299.8,y:-483.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:290.3,y:-496},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:283.1,y:-505.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:278,y:-512.5},0).wait(1).to({scaleX:1,scaleY:1,x:275,y:-516.5},0).wait(1).to({scaleX:1,scaleY:1,x:274,y:-517.8},0).wait(28).to({scaleX:1,scaleY:1,x:274.4,y:-519.6,alpha:0.989},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:275.6,y:-525.7,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:277.9,y:-536.7,alpha:0.89},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:281.3,y:-553.1,alpha:0.794},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:285.7,y:-574.6,alpha:0.668},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:290.8,y:-599.2,alpha:0.525},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:295.8,y:-623.8,alpha:0.381},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:300.3,y:-645.5,alpha:0.254},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:303.8,y:-662.6,alpha:0.154},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:306.4,y:-675.1,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:308,y:-683.2,alpha:0.034},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:309,y:-687.7,alpha:0.008},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:309.3,y:-689,alpha:0},0).to({_off:true},1).wait(25));

	// s1_lun
	this.instance_5 = new lib.s1_lun_1();
	this.instance_5.setTransform(811,36.8,1.976,1.976);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.97,scaleY:1.97,x:806.1,y:31},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:792,y:14.4},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:770.2,y:-11.3},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:742.2,y:-44.3},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:709.9,y:-82.4},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:674.6,y:-123.9},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:638,y:-167.1},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:601.2,y:-210.5},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:565,y:-253.2},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:530.2,y:-294.2},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:497.3,y:-332.9},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:466.7,y:-369},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:438.6,y:-402.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:413.1,y:-432.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:390.2,y:-459.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:370,y:-483},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:352.4,y:-503.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:337.5,y:-521.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:325.1,y:-535.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:315.1,y:-547.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:307.5,y:-556.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:302.2,y:-562.9},0).wait(1).to({scaleX:1,scaleY:1,x:299,y:-566.6},0).wait(1).to({scaleX:1,scaleY:1,x:298,y:-567.8},0).wait(28).to({scaleX:1,scaleY:1,x:298.4,y:-569.8,alpha:0.989},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:299.8,y:-576,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:302.2,y:-587.4,alpha:0.89},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:305.9,y:-604.4,alpha:0.794},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:310.6,y:-626.6,alpha:0.668},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:316.1,y:-652.1,alpha:0.525},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:321.6,y:-677.6,alpha:0.381},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:326.4,y:-700,alpha:0.254},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:330.3,y:-717.7,alpha:0.154},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:333,y:-730.6,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:334.8,y:-739,alpha:0.034},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:335.8,y:-743.7,alpha:0.008},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:336.2,y:-745.1,alpha:0},0).to({_off:true},1).wait(25));

	// s1_island
	this.instance_6 = new lib.s1_island_1();
	this.instance_6.setTransform(759.9,238.5,1.976,1.976);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:1.97,scaleY:1.97,x:755.2,y:231.7},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:741.8,y:212.4},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:721.1,y:182.4},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:694.5,y:144.1},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:663.7,y:99.6},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:630.3,y:51.3},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:595.4,y:1},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:560.4,y:-49.6},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:526,y:-99.2},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:492.9,y:-147},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:461.7,y:-192.1},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:432.6,y:-234.1},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:405.8,y:-272.8},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:381.5,y:-307.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:359.8,y:-339.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:340.6,y:-366.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:323.9,y:-391},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:309.7,y:-411.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:297.9,y:-428.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:288.4,y:-442.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:281.2,y:-452.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:276.1,y:-460},0).wait(1).to({scaleX:1,scaleY:1,x:273.1,y:-464.3},0).wait(1).to({scaleX:1,scaleY:1,x:272.2,y:-465.7},0).wait(28).to({scaleX:1,scaleY:1,x:272.5,y:-467.5,alpha:0.989},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:273.8,y:-473.3,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:276,y:-483.9,alpha:0.89},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:279.4,y:-499.7,alpha:0.794},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:283.8,y:-520.4,alpha:0.668},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:288.8,y:-544.2,alpha:0.525},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:293.9,y:-567.9,alpha:0.381},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:298.3,y:-588.8,alpha:0.254},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:301.8,y:-605.3,alpha:0.154},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:304.3,y:-617.3,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:306,y:-625.1,alpha:0.034},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:306.9,y:-629.4,alpha:0.008},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:307.2,y:-630.7,alpha:0},0).to({_off:true},1).wait(25));

	// s1_lighthouse
	this.instance_7 = new lib.s1_lighthouse_1();
	this.instance_7.setTransform(-747,102.1,1.976,1.976);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1.97,scaleY:1.97,x:-742.3,y:96.1},0).wait(1).to({scaleX:1.94,scaleY:1.94,x:-729,y:78.9},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:-708.5,y:52.2},0).wait(1).to({scaleX:1.85,scaleY:1.85,x:-682.1,y:18.1},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:-651.5,y:-21.4},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:-618.3,y:-64.4},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:-583.7,y:-109.2},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:-548.9,y:-154.2},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:-514.8,y:-198.4},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:-482,y:-240.8},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:-450.9,y:-281},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:-422.1,y:-318.4},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:-395.5,y:-352.7},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-371.4,y:-383.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:-349.8,y:-411.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:-330.8,y:-436.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-314.2,y:-458},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:-300.1,y:-476.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:-288.3,y:-491.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-278.9,y:-503.6},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-271.8,y:-512.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-266.7,y:-519.4},0).wait(1).to({scaleX:1,scaleY:1,x:-263.8,y:-523.2},0).wait(1).to({scaleX:1,scaleY:1,x:-262.8,y:-524.4},0).wait(28).to({scaleX:1,scaleY:1,x:-263.1,y:-526.3,alpha:0.989},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-264.1,y:-532.4,alpha:0.954},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-266,y:-543.4,alpha:0.89},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:-268.8,y:-559.9,alpha:0.794},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:-272.4,y:-581.5,alpha:0.668},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-276.6,y:-606.2,alpha:0.525},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:-280.8,y:-631,alpha:0.381},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:-284.5,y:-652.7,alpha:0.254},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:-287.4,y:-669.9,alpha:0.154},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-289.5,y:-682.4,alpha:0.082},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-290.9,y:-690.6,alpha:0.034},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-291.7,y:-695.1,alpha:0.008},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:-291.9,y:-696.5,alpha:0},0).to({_off:true},1).wait(25));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,230,240,0)").s().p("EhF0BF0Ugc6gc7AAAgo5UAAAgo5Ac6gc7UAc8gc6Ao4AAAUAo6AAAAc6Ac6UAc7Ac7AAAAo5UAAAAo5gc7Ac7Ugc6Ac7go6AAAUgo4AAAgc8gc7g");
	this.shape.setTransform(-3.6,-490);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,230,240,0.149)").s().p("Eg/5A/5UgadgaeAAAglbUAAAglbAadgaeUAafgadAlaAAAUAlcAAAAadAadUAaeAaeAAAAlbUAAAAlbgaeAaeUgadAaeglcAAAUglaAAAgafgaeg");
	this.shape_1.setTransform(-2.8,-511.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,230,240,0.282)").s().p("Eg6cA6dUgYNgYOAAAgiPUAAAgiOAYNgYOUAYOgYNAiOAAAUAiQAAAAYMAYNUAYOAYOAAAAiOUAAAAiPgYOAYOUgYMAYNgiQAAAUgiOAAAgYOgYNg");
	this.shape_2.setTransform(-2,-531.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,230,240,0.408)").s().p("Eg1eA1eQ2I2KAA/UQAA/TWI2LQWL2JfTAAQfVABWIWIQWKWKAAfUQAAfU2KWKQ2IWK/VAAQ/TAA2L2Kg");
	this.shape_3.setTransform(-1.3,-550.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,230,240,0.522)").s().p("Egw9Aw9Q0S0RAA8sQAA8rUS0SQUT0ScqAAQcsAAUSUSQUSUSAAcrQAAcs0SURQ0SUT8sAAQ8qAA0T0Tg");
	this.shape_4.setTransform(-0.6,-566.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,230,240,0.62)").s().p("Egs7As8QynyogB6UQAB6USnynQSoyoaTAAQaVAASmSoQSoSnAAaUQAAaUyoSoQymSn6VAAQ6TAAyoyng");
	this.shape_5.setTransform(0,-581.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(204,230,240,0.71)").s().p("EgpYApYQxIxJAA4PQAA4PRIxJQRKxJYOAAQYPAARJRJQRKRJgBYPQABYPxKRJQxJRK4PAAQ4OAAxKxKg");
	this.shape_6.setTransform(0.5,-594.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(204,230,240,0.788)").s().p("EgmTAmTQv3v3AA2cQAA2bP3v4QP4v3WbAAQWcAAP3P3QP4P4AAWbQAAWcv4P3Qv3P42cAAQ2bAAv4v4g");
	this.shape_7.setTransform(0.9,-605.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(204,230,240,0.851)").s().p("EgjsAjtQuyuzAA06QAA06OyuyQOzuyU5AAQU6AAOyOyQOzOyAAU6QAAU6uzOzQuyOy06AAQ05AAuzuyg");
	this.shape_8.setTransform(1.3,-615.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(204,230,240,0.906)").s().p("EghjAhkQt6t6AAzqQAAzpN6t6QN6t6TpAAQTqAAN6N6QN6N6AATpQAATqt6N6Qt6N6zqAAQzpAAt6t6g");
	this.shape_9.setTransform(1.6,-623.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(204,230,240,0.945)").s().p("A/5f6QtOtOAAysQAAyrNOtOQNOtOSrAAQSsAANONOQNONOAASrQAASstONOQtONOysAAQyrAAtOtOg");
	this.shape_10.setTransform(1.8,-629.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(204,230,240,0.976)").s().p("A+teuQsvsuAAyAQAAx/MvsuQMvsvR+AAQSAAAMuMvQMvMugBR/QABSAsvMuQsuMvyAgBQx+ABsvsvg");
	this.shape_11.setTransform(2,-633.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(204,230,240,0.992)").s().p("A+AeBQsbsdAAxkQAAxkMbscQMdsbRjAAQRlAAMcMbQMbMcAARkQAARksbMdQscMbxlAAQxjAAsdsbg");
	this.shape_12.setTransform(2.1,-636.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCE6F0").s().p("A9xdxQsVsVAAxcQAAxbMVsWQMWsVRbAAQRcAAMVMVQMWMWAARbQAARcsWMVQsVMWxcAAQxbAAsWsWg");
	this.shape_13.setTransform(2.1,-637.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},51).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-635.6,-58.9,1264,201);


(lib.s1 = function() {
	this.initialize();

	// s1_title
	this.title_mc = new lib.s1_title_mc();
	this.title_mc.setTransform(317.6,0);

	// s1_island
	this.pic_mc = new lib.Symbol1();
	this.pic_mc.setTransform(320.9,1000);

	// s1_bg
	this.bg_mc = new lib.s1_bg();
	this.bg_mc.setTransform(320.6,0);

	this.addChild(this.bg_mc,this.pic_mc,this.title_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-539.7,-121.9,1830,2387.6);


// stage content:
(lib.xiaoya = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.s1();
	this.instance.setTransform(350.1,600,1,1,0,0,0,350.7,600);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-220.3,378.1,1830,2387.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;