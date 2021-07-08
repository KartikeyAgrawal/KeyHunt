var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["528f5485-c417-48d4-846a-c9f68cf5f8a3","966bf9e7-6dc2-48f5-8ee3-891ff5765089","89dfa1f1-e620-4acc-9453-97740d586382","80b1142b-3087-45e5-9cf9-df2023a2ee8f","c795337e-1854-4250-b68f-64f839cf13d6","6ca31bc9-97ea-4c05-83f3-b9876bb95721","5dcd74ac-aa11-4dd2-b0a4-d0db7d0e2fd5","bb2533a0-6ea3-4980-9de9-8698c51338d2","5868adce-b558-4f9c-b209-b757e1f84598","0b46cc75-294b-4447-ab4a-c29011b66206","66ce05fc-7fee-41fc-9522-1bc05ec0ef26","d7e2446b-52ed-4650-8f99-20c707d717ee","252025c0-6ad9-48ca-a966-eedfc3020c42","fdd387ba-e159-4e7e-9c9b-d7eb5e9e6cff","63afaf6e-aa34-42f8-a620-db809e554b4c","738c28b8-fed3-4066-81dc-43a1ea5f6f7b","1e0b6e35-1427-45c0-8c8b-2e8d3ca1bbcc"],"propsByKey":{"528f5485-c417-48d4-846a-c9f68cf5f8a3":{"name":"front_of_house_1","sourceUrl":"assets/api/v1/animation-library/gamelab/z3ET79WW37k.pBuHD2iYymrSx8eUmFAs/category_backgrounds/front_of_house.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"z3ET79WW37k.pBuHD2iYymrSx8eUmFAs","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/z3ET79WW37k.pBuHD2iYymrSx8eUmFAs/category_backgrounds/front_of_house.png"},"966bf9e7-6dc2-48f5-8ee3-891ff5765089":{"name":"Tree-Transparent-File.png_1","sourceUrl":"assets/v3/animations/Fbz7pLpyhNc7J_p2Ee47iv9JPBMbJbszQ2ImxBFrA0s/966bf9e7-6dc2-48f5-8ee3-891ff5765089.png","frameSize":{"x":600,"y":513},"frameCount":1,"looping":true,"frameDelay":4,"version":"F5JyPrf.yFJXJuBdXf13FyeHiZtpMB02","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":513},"rootRelativePath":"assets/v3/animations/Fbz7pLpyhNc7J_p2Ee47iv9JPBMbJbszQ2ImxBFrA0s/966bf9e7-6dc2-48f5-8ee3-891ff5765089.png"},"89dfa1f1-e620-4acc-9453-97740d586382":{"name":"brown_sweater_hand_in_pocket_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png","frameSize":{"x":126,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":126,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_pnzOaMejiNWn0gEbHtT8nuRGsq22uqi/category_people/brown_sweater_hand_in_pocket.png"},"80b1142b-3087-45e5-9cf9-df2023a2ee8f":{"name":"tiger_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kvqx_NCr8jVBOR7lt.z.NnCflk_DYM0n/category_animals/tiger.png","frameSize":{"x":398,"y":223},"frameCount":1,"looping":true,"frameDelay":2,"version":"kvqx_NCr8jVBOR7lt.z.NnCflk_DYM0n","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":223},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kvqx_NCr8jVBOR7lt.z.NnCflk_DYM0n/category_animals/tiger.png"},"c795337e-1854-4250-b68f-64f839cf13d6":{"name":"panther_1","sourceUrl":"assets/api/v1/animation-library/gamelab/1D2z0SOPxnoUwh1Q7hehPWMIxVe0O8.G/category_animals/panther.png","frameSize":{"x":397,"y":226},"frameCount":1,"looping":true,"frameDelay":2,"version":"1D2z0SOPxnoUwh1Q7hehPWMIxVe0O8.G","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":226},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1D2z0SOPxnoUwh1Q7hehPWMIxVe0O8.G/category_animals/panther.png"},"6ca31bc9-97ea-4c05-83f3-b9876bb95721":{"name":"key_1","sourceUrl":null,"frameSize":{"x":63,"y":65},"frameCount":1,"looping":true,"frameDelay":12,"version":"qDD.6FKe1xYeKkzG_oWVFz4pK_oODe6k","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":65},"rootRelativePath":"assets/6ca31bc9-97ea-4c05-83f3-b9876bb95721.png"},"5dcd74ac-aa11-4dd2-b0a4-d0db7d0e2fd5":{"name":"keys_1","sourceUrl":"assets/api/v1/animation-library/gamelab/fo7eF5zTqdtj.Bfn1btJn9fiHy8y3xcv/category_household_objects/keys.png","frameSize":{"x":94,"y":73},"frameCount":1,"looping":true,"frameDelay":2,"version":"fo7eF5zTqdtj.Bfn1btJn9fiHy8y3xcv","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":94,"y":73},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fo7eF5zTqdtj.Bfn1btJn9fiHy8y3xcv/category_household_objects/keys.png"},"bb2533a0-6ea3-4980-9de9-8698c51338d2":{"name":"croquetball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xO0n9nwJzb7DzH6thbotnjeQ6keriHM2/category_sports/croquetball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"xO0n9nwJzb7DzH6thbotnjeQ6keriHM2","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xO0n9nwJzb7DzH6thbotnjeQ6keriHM2/category_sports/croquetball.png"},"5868adce-b558-4f9c-b209-b757e1f84598":{"name":"opdr1.jpg_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/5868adce-b558-4f9c-b209-b757e1f84598.png","frameSize":{"x":180,"y":309},"frameCount":1,"looping":true,"frameDelay":4,"version":"DFBDt44tcvYksljw2SAp.wIjHoiGkB52","loadedFromSource":true,"saved":true,"sourceSize":{"x":180,"y":309},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/5868adce-b558-4f9c-b209-b757e1f84598.png"},"0b46cc75-294b-4447-ab4a-c29011b66206":{"name":"Untitled1.png_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/0b46cc75-294b-4447-ab4a-c29011b66206.png","frameSize":{"x":307,"y":402},"frameCount":1,"looping":true,"frameDelay":4,"version":"7tB_6ua2l6LR9wkXAMEI0PxWQvVK234d","loadedFromSource":true,"saved":true,"sourceSize":{"x":307,"y":402},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/0b46cc75-294b-4447-ab4a-c29011b66206.png"},"66ce05fc-7fee-41fc-9522-1bc05ec0ef26":{"name":"Home6.png_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/66ce05fc-7fee-41fc-9522-1bc05ec0ef26.png","frameSize":{"x":278,"y":190},"frameCount":1,"looping":true,"frameDelay":4,"version":"alyx49ixhkXTeTFT_w9yW3JChJw0D2ZJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":190},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/66ce05fc-7fee-41fc-9522-1bc05ec0ef26.png"},"d7e2446b-52ed-4650-8f99-20c707d717ee":{"name":"Player8.png_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/d7e2446b-52ed-4650-8f99-20c707d717ee.png","frameSize":{"x":620,"y":650},"frameCount":1,"looping":true,"frameDelay":4,"version":"I8OGgYkgwJE7ueLPd.p.zeSWuKSAm_IG","loadedFromSource":true,"saved":true,"sourceSize":{"x":620,"y":650},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/d7e2446b-52ed-4650-8f99-20c707d717ee.png"},"252025c0-6ad9-48ca-a966-eedfc3020c42":{"name":"Home_Inside.jpg_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/252025c0-6ad9-48ca-a966-eedfc3020c42.png","frameSize":{"x":800,"y":554},"frameCount":1,"looping":true,"frameDelay":4,"version":"wob3zwIAldszZYBCGdJzjBTwVglS_GV0","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":554},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/252025c0-6ad9-48ca-a966-eedfc3020c42.png"},"fdd387ba-e159-4e7e-9c9b-d7eb5e9e6cff":{"name":"balloon6.png_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/fdd387ba-e159-4e7e-9c9b-d7eb5e9e6cff.png","frameSize":{"x":189,"y":267},"frameCount":1,"looping":true,"frameDelay":4,"version":"4rCpvF0J8BGLadPyy4BOv7gDdFBeg5R0","loadedFromSource":true,"saved":true,"sourceSize":{"x":189,"y":267},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/fdd387ba-e159-4e7e-9c9b-d7eb5e9e6cff.png"},"63afaf6e-aa34-42f8-a620-db809e554b4c":{"name":"balloon7.png_1","sourceUrl":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/63afaf6e-aa34-42f8-a620-db809e554b4c.png","frameSize":{"x":255,"y":198},"frameCount":1,"looping":true,"frameDelay":4,"version":"n907k.hg1O8w3QeZvHt7_uA.0X2jtMiT","loadedFromSource":true,"saved":true,"sourceSize":{"x":255,"y":198},"rootRelativePath":"assets/v3/animations/qyvfwnCEdUCO7I5W3b0MvIcqG4t72r8GfVgBWgS4QaY/63afaf6e-aa34-42f8-a620-db809e554b4c.png"},"738c28b8-fed3-4066-81dc-43a1ea5f6f7b":{"name":"balloons5.png_1","sourceUrl":"assets/v3/animations/8CxRglCRJt9fa-7hIE-l8BF3DnV8YzfRBoMeFjccw2w/738c28b8-fed3-4066-81dc-43a1ea5f6f7b.png","frameSize":{"x":303,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"JKi2Vps0y1wt62b6TBdEww6x3OLqPHE2","loadedFromSource":true,"saved":true,"sourceSize":{"x":303,"y":200},"rootRelativePath":"assets/v3/animations/8CxRglCRJt9fa-7hIE-l8BF3DnV8YzfRBoMeFjccw2w/738c28b8-fed3-4066-81dc-43a1ea5f6f7b.png"},"1e0b6e35-1427-45c0-8c8b-2e8d3ca1bbcc":{"name":"balloon9.png_1","sourceUrl":"assets/v3/animations/8CxRglCRJt9fa-7hIE-l8BF3DnV8YzfRBoMeFjccw2w/1e0b6e35-1427-45c0-8c8b-2e8d3ca1bbcc.png","frameSize":{"x":404,"y":450},"frameCount":1,"looping":true,"frameDelay":4,"version":"7tJ6ROB4dknPL8S_BLObvUkbOUWCIjY9","loadedFromSource":true,"saved":true,"sourceSize":{"x":404,"y":450},"rootRelativePath":"assets/v3/animations/8CxRglCRJt9fa-7hIE-l8BF3DnV8YzfRBoMeFjccw2w/1e0b6e35-1427-45c0-8c8b-2e8d3ca1bbcc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var home = createSprite(200, 200);
home.setAnimation("Home6.png_1");
home.scale = 2.1;
home.visible = false;

var player = createSprite(180, 380);
player.setAnimation("brown_sweater_hand_in_pocket_1");
player.scale = 0.1;
player.visible = false;
var Chabi = createSprite(80, 20);
Chabi.setAnimation("key_1");
Chabi.scale = 0.3;
Chabi.visible = false;
var Tiger = createSprite(360, 60);
Tiger.setAnimation("tiger_1");
Tiger.scale = 0.1;
Tiger.visible = false;
var Panther = createSprite(20, 135);
Panther.setAnimation("panther_1");
Panther.scale = 0.1;
Panther.visible = false;
var tree2 = createSprite(85, 80);
tree2.setAnimation("Tree-Transparent-File.png_1");
tree2.scale = 0.12;
tree2.visible = false;
var tree3 = createSprite(200, 140);
tree3.setAnimation("Tree-Transparent-File.png_1");
tree3.scale = 0.12;
tree3.visible = false;
var tree4 = createSprite(80, 200);
tree4.setAnimation("Tree-Transparent-File.png_1");
tree4.scale =0.14;
tree4.visible = false;
var tree6 = createSprite(330, 220);
tree6.setAnimation("Tree-Transparent-File.png_1");
tree6.scale =0.14;
tree6.visible = false;
var tree7 = createSprite(80, 330);
tree7.setAnimation("Tree-Transparent-File.png_1");
tree7.scale =0.12;
tree7.visible = false;
var tree9 = createSprite(210, 280);
tree9.setAnimation("Tree-Transparent-File.png_1");
tree9.scale =0.12;
tree9.visible = false;
var tree12 = createSprite(320, 340);
tree12.setAnimation("Tree-Transparent-File.png_1");
tree12.scale =0.14;
tree12.visible = false;
var tree14 = createSprite(280, 60);
tree14.setAnimation("Tree-Transparent-File.png_1");
tree14.scale =0.12;
tree14.visible = false;
var gamelevel = 0;
var k = 0;
var chabi2 = createSprite(245, 55);
chabi2.setAnimation("keys_1");
chabi2.scale = 0.2;
var wall1 = createSprite(115, 15, 2, 30);
var wall2 = createSprite(60, 30, 40, 2);
var wall3 = createSprite(80, 47, 2, 35);
var wall4 = createSprite(114, 64, 70, 2);
var wall5 = createSprite(150, 47, 2, 35);
var wall6 = createSprite(172, 30, 42, 2);
var wall7 = createSprite(192, 47, 2, 35);
var wall8 = createSprite(114, 82, 2, 38);
var wall9 = createSprite(148, 100, 70, 2);
var wall10 = createSprite(148, 149, 2, 100);
var wall11 = createSprite(20, 65, 40, 2);
var wall12 = createSprite(40, 85, 2, 40);
var wall13 = createSprite(59, 104, 40, 2);
var wall14 = createSprite(20, 135, 40, 2);
var wall15 = createSprite(35, 175, 82, 2);
var wall16 = createSprite(75, 157, 2, 40);
var wall17 = createSprite(95, 137, 40, 2);
var wall18 = createSprite(130, 168, 35, 2);
var wall19 = createSprite(112, 185, 2, 35);
var wall20 = createSprite(92, 202, 40, 2);
var wall21 = createSprite(72, 217, 2, 30);
var wall22 = createSprite(92, 232, 40, 2);
var wall23 = createSprite(20, 235, 40, 2);
var wall24 = createSprite(40, 250, 2, 32);
var wall25 = createSprite(150, 265, 220, 2);
var wall26 = createSprite(260, 245, 2, 40);
var wall27 = createSprite(230, 290, 2, 50);
var wall28 = createSprite(212, 315, 35, 2);
var wall29 = createSprite(195, 305, 2, 20);
var wall30 = createSprite(165, 295, 60, 2);
var wall31 = createSprite(45, 295, 90, 2);
var wall32 = createSprite(40, 365, 2, 70);
var wall33 = createSprite(112, 360, 145, 2);
var wall34 = createSprite(92, 368, 2, 15);
var wall36 = createSprite(185, 365, 2, 10);
var wall37 = createSprite(197, 370, 25, 2);
var wall38 = createSprite(210, 365, 2, 10);
var wall39 = createSprite(235, 360, 50, 2);
var wall40 = createSprite(260, 330, 2, 60);
var wall41 = createSprite(182, 160, 2, 120);
var wall42 = createSprite(182, 220, 70, 2);
var wall43 = createSprite(216, 200, 2, 40);
var wall44 = createSprite(255, 180, 80, 2);
var wall45 = createSprite(295, 210, 2, 220);
var wall46 = createSprite(260, 100, 70, 2);
var wall47 = createSprite(225, 122, 2, 45);
var wall48 = createSprite(245, 145, 40, 2);
var wall49 = createSprite(265, 138, 2, 15);
var wall52 = createSprite(260, 85, 2, 30);
var wall53 = createSprite(245, 70, 30, 2);
var wall54 = createSprite(230, 55, 2, 30);
var wall55 = createSprite(280, 40, 100, 2);
var wall56 = createSprite(330, 55, 2, 30);
var wall57 = createSprite(380, 125, 50, 2);
var wall58 = createSprite(355, 105, 2, 40);
var wall59 = createSprite(315, 150, 40, 2);
var wall60 = createSprite(380, 175, 40, 2);
var wall61 = createSprite(350, 220, 112, 2);
var wall62 = createSprite(315, 320, 40, 2);
var wall63 = createSprite(335, 345, 2, 52);
var wall64 = createSprite(380, 285, 40, 2);
var wall65 = createSprite(360, 265, 2, 40);
var wall66 = createSprite(145, 345, 2, 30);
var wall68 = createSprite(365, 360, 2, 80);
var dushman1 = createSprite(345, 300);
dushman1.setAnimation("croquetball_1");
dushman1.scale = 0.04;
dushman1.velocityX = 4;
var dushman2 = createSprite(310, 65);
dushman2.setAnimation("croquetball_1");
dushman2.scale = 0.04;
dushman2.velocityY = 4;
var dushman3 = createSprite(105, 315);
dushman3.setAnimation("croquetball_1");
dushman3.scale = 0.04;
dushman3.velocityY = 4;
var dushman4 = createSprite(125, 215);
dushman4.setAnimation("croquetball_1");
dushman4.scale = 0.04;
dushman4.velocityY = 4;
var dushman5 = createSprite(205, 130); 
dushman5.setAnimation("croquetball_1");
dushman5.scale = 0.04;
dushman5.velocityY = 4;



chabi2.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
wall9.visible = false;
wall10.visible = false;
wall11.visible = false;
wall12.visible = false;
wall13.visible = false;
wall14.visible = false;
wall15.visible = false;
wall16.visible = false;
wall17.visible = false;
wall18.visible = false;
wall19.visible = false;
wall20.visible = false;
wall21.visible = false;
wall22.visible = false;
wall23.visible = false;
wall24.visible = false;
wall25.visible = false;
wall26.visible = false;
wall27.visible = false;
wall28.visible = false;
wall29.visible = false;
wall30.visible = false;
wall31.visible = false;
wall32.visible = false;
wall33.visible = false;
wall34.visible = false;
wall36.visible = false; 
wall37.visible = false;
wall38.visible = false;
wall39.visible = false;
wall40.visible = false;
wall41.visible = false;
wall42.visible = false;
wall43.visible = false;
wall44.visible = false;
wall45.visible = false;
wall46.visible = false;
wall47.visible = false;
wall48.visible = false;
wall49.visible = false;
wall52.visible = false;
wall53.visible = false;
wall54.visible = false;
wall55.visible = false;
wall56.visible = false;
wall57.visible = false;
wall58.visible = false;
wall59.visible = false;
wall60.visible = false;
wall61.visible = false;
wall62.visible = false;
wall63.visible = false;
wall64.visible = false;
wall65.visible = false;
wall66.visible = false;
wall68.visible = false;
dushman1.visible = false;
dushman2.visible = false;
dushman3.visible = false;
dushman4.visible = false;
dushman5.visible = false;

wall1.shapeColor = "white";
wall2.shapeColor = "white";
wall3.shapeColor = "white";
wall4.shapeColor = "white";
wall5.shapeColor = "white";
wall6.shapeColor = "white";
wall7.shapeColor = "white";
wall8.shapeColor = "white";
wall9.shapeColor = "white";
wall10.shapeColor = "white";
wall11.shapeColor = "white";
wall12.shapeColor = "white";
wall13.shapeColor = "white";
wall14.shapeColor = "white";
wall15.shapeColor = "white";
wall16.shapeColor = "white";
wall17.shapeColor = "white";
wall18.shapeColor = "white";
wall19.shapeColor = "white";
wall20.shapeColor = "white";
wall21.shapeColor = "white";
wall22.shapeColor = "white";
wall23.shapeColor = "white";
wall24.shapeColor = "white";
wall25.shapeColor = "white";
wall26.shapeColor = "white";
wall27.shapeColor = "white";
wall28.shapeColor = "white";
wall29.shapeColor = "white";
wall30.shapeColor = "white";
wall31.shapeColor = "white";
wall32.shapeColor = "white";
wall33.shapeColor = "white";
wall34.shapeColor = "white";
wall36.shapeColor = "white";
wall37.shapeColor = "white";
wall38.shapeColor = "white";
wall39.shapeColor = "white";
wall40.shapeColor = "white";
wall41.shapeColor = "white";
wall42.shapeColor = "white";
wall43.shapeColor = "white";
wall44.shapeColor = "white";
wall45.shapeColor = "white";
wall46.shapeColor = "white";
wall47.shapeColor = "white";
wall48.shapeColor = "white";
wall49.shapeColor = "white";
wall52.shapeColor = "white";
wall53.shapeColor = "white";
wall54.shapeColor = "white";
wall55.shapeColor = "white";
wall56.shapeColor = "white";
wall57.shapeColor = "white";
wall58.shapeColor = "white";
wall59.shapeColor = "white";
wall60.shapeColor = "white";
wall61.shapeColor = "white";
wall62.shapeColor = "white";
wall63.shapeColor = "white";
wall64.shapeColor = "white";
wall65.shapeColor = "white";
wall66.shapeColor = "white";
wall68.shapeColor = "white";

var balloon1 = createSprite(30, 290);
balloon1.setAnimation("balloon6.png_1"); 
var balloon2 = createSprite(370, 290);
balloon2.setAnimation("balloon7.png_1");
var balloon3 = createSprite(180, 320);
balloon3.setAnimation("balloons5.png_1");
var balloon4 = createSprite(210, 330);
balloon4.setAnimation("balloon9.png_1");
balloon1.visible = false;
balloon2.visible = false;
balloon3.visible = false;
balloon4.visible = false;
balloon1.scale = 0.5;
balloon2.scale = 0.5;
balloon3.scale = 0.5;
balloon4.scale = 0.5;


function draw() {
  if(gamelevel === 0){
    playSound("assets/pirates_of_caribbean.mp3",true);
    fill("black");
    textSize(20);
    text("Once there was a man who had a son ", 25, 40);
    text("named Raju. When Raju was a child he ", 15, 60);
    text("bought a house for him and decided to give ", 15, 80);
    text("it to Raju when he becomes 18 years old.", 15, 100);
    text("But before giving the house to him he ", 15, 120);
    text("wanted to test him. So he hid the 2 keys ", 15, 140);
    text("and told Raju to collect the keys from there.", 15, 160);
    text("Only people with great courage can get the", 15, 180);
    text("keys.Now help Raju to get the keys.\n\t\t\t\t\t\t\t\t\t\t Good Luck....", 15, 200);
    textSize(30);
    text("Press 'ctrl' To Continue", 30, 260);
    gamelevel = 5;
  }
  if( keyDown("ctrl") && gamelevel === 5){
    background("white");
    textSize(20);
    fill("black");
    text("While playing:-", 15, 40);
    text("-> The player has to collect the keys and \nthen move to the yellow point.", 15, 70);
    text("-> You can use left,right,up and down arrow\nkeys to move in the respective directions.", 15, 130);
    text("-> While moving around he has to \nsafeguard himself from certain obstacles.", 15, 190);
    textSize(30);
    text("Press 'space' To Continue", 30, 260);
    gamelevel = 1;
    
  }
  if((keyDown("space") || k === 1) && gamelevel === 1){
    if(k != 1){
    player.x = 180;
    player.y = 380;
    Tiger.x = 360;
    Tiger.y = 60;
    Panther.x = 20;
    Panther.y = 135;
    Chabi.x = 80;
    Chabi.y = 20;
    player.visible = true;
    Tiger.visible = true;
    Panther.visible = true;
    Chabi.visible = true;
    tree2.visible = true;
    tree3.visible = true;
    tree4.visible = true;
    tree6.visible = true;
    tree7.visible = true;
    tree9.visible = true;
    tree12.visible = true;
    tree14.visible = true;
    player.rotation = 0;
    }
  k = 1;
  background("lightblue");
  createEdgeSprites();
  
  
  if(keyDown("LEFT_ARROW")){
    player.x = player.x-4;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x+4;
  }
  if(keyDown("UP_ARROW")){
    player.y = player.y-4;
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y+4;
  }
  player.collide(edges);
  player.collide(tree2);
  player.collide(tree3);
  player.collide(tree4);
  player.collide(tree6);
  player.collide(tree7);
  player.collide(tree9);
  player.collide(tree12);
  player.collide(tree14);
  if(player.x < Tiger.x && player.y>Tiger.y){
    if(Tiger.x-player.x <= 200 && player.y-Tiger.y<=200){
      Tiger.x = Tiger.x-3.2;
      Tiger.y = Tiger.y+3.2;
    }
  }
  if(player.x>Tiger.x && player.y>Tiger.y){
    if(player.x-Tiger.x <= 200 && player.y-Tiger.y <=200){
      Tiger.x = Tiger.x+3.2;
      Tiger.y = Tiger.y+3.2;
    }
  }
  if(player.x<Tiger.x && player.y<Tiger.y){
    if(Tiger.x-player.x<=200 && Tiger.y-player.y<=200){
      Tiger.x = Tiger.x-3.2;
      Tiger.y = Tiger.y-3.2;
    }
  }
  if(player.x>Tiger.x && player.y<Tiger.y){
    if(player.x-Tiger.x<=200 && Tiger.y-player.y<=200){
      Tiger.x = Tiger.x+3.2;
      Tiger.y = Tiger.y-3.2;
    }
  }
  if(player.x === Tiger.x && player.y>Tiger.y){
    if(player.y-Tiger.y<=200){
      Tiger.y = Tiger.y+3.2;
    }
  }
  if(player.x === Tiger.x && player.y<Tiger.y){
   if(Tiger.y-player.y <= 200){
     Tiger.y = Tiger.y-3.2;
   }
  }
  if(player.x>Tiger.x && player.y === Tiger.y){
    if(player.x-Tiger.x<=200){
      Tiger.x = Tiger.x+3.2;
    }
  }
  if(player.x<Tiger.x && player.y === Tiger.y){
    if(Tiger.x-player.x<=200){
      Tiger.x = Tiger.x-3.2;
    }
  }
  Tiger.collide(edges);
  Tiger.bounceOff(tree2);
  Tiger.bounceOff(tree3);
  Tiger.bounceOff(tree4);
  Tiger.bounceOff(tree6);
  Tiger.bounceOff(tree7);
  Tiger.bounceOff(tree9);
  Tiger.bounceOff(tree12);
  Tiger.bounceOff(tree14);
  
  if(player.x < Panther.x && player.y>Panther.y){
    if(Panther.x-player.x <= 200 && player.y-Panther.y<=200){
      Panther.x = Panther.x-3.4;
      Panther.y = Panther.y+3.4;
    }
  }
  if(player.x>Panther.x && player.y>Panther.y){
    if(player.x-Panther.x <= 200 && player.y-Panther.y <=200){
      Panther.x = Panther.x+3.4;
      Panther.y = Panther.y+3.4;
    }
  }
  if(player.x<Panther.x && player.y<Panther.y){
    if(Panther.x-player.x<=200 && Panther.y-player.y<=200){
      Panther.x = Panther.x-3.4;
      Panther.y = Panther.y-3.4;
    }
  }
  if(player.x>Panther.x && player.y<Panther.y){
    if(player.x-Panther.x<=200 && Panther.y-player.y<=200){
      Panther.x = Panther.x+3.4;
      Panther.y = Panther.y-3.4;
    }
  }
  if(player.x === Panther.x && player.y>Panther.y){
    if(player.y-Panther.y<=200){
      Panther.y = Panther.y+3.4;
    }
  }
  if(player.x === Panther.x && player.y<Panther.y){
   if(Panther.y-player.y <= 200){
     Panther.y = Panther.y-3.4;
   }
  }
  if(player.x>Panther.x && player.y === Panther.y){
    if(player.x-Panther.x<=200){
      Panther.x = Panther.x+3.4;
    }
  }
  if(player.x<Panther.x && player.y === Panther.y){
    if(Panther.x-player.x<=200){
      Panther.x = Panther.x-3.4;
    }
  }
  
  
  Panther.collide(edges);
  Panther.bounceOff(tree2);
  Panther.bounceOff(tree3);
  Panther.bounceOff(tree4);
  Panther.bounceOff(tree6);
  Panther.bounceOff(tree7);
  Panther.bounceOff(tree9);
  Panther.bounceOff(tree12);
  Panther.bounceOff(tree14);
  if(Tiger.isTouching(player) || Panther.isTouching(player)){
    player.rotation = 90;
    textSize(20);
    fill("red");
    text("Player Dead....", 140, 200);
    fill("black");
    text("Press 'space' To Continue", 85, 220 );
    k = 0;
  }
  Panther.collide(Tiger);
  if(player.isTouching(Chabi)){
    Chabi.x = player.x-5;
    Chabi.y = player.y;
  }
  fill("yellow");
  rect(380, 350, 20, 50);
  if(player.x > 390 && player.y > 360 &&
     Chabi.x === player.x-5 && Chabi.y === player.y){
    textSize(30);
    background("black");
    fill("green");
    text("Level 1 Completed. \n\tGot the first key", 80, 180);
    text("Press 'tab' to go to next level", 10, 255);
    player.visible = false;
    Tiger.visible = false;
    Panther.visible = false;
    Chabi.visible = false;
    tree2.visible = false;
    tree3.visible = false;
    tree4.visible = false;
    tree6.visible = false;
    tree7.visible = false;
    tree9.visible = false;
    tree12.visible = false;
    tree14.visible = false;
    gamelevel = 2;
  }
  }
  if((keyDown("tab") || k === 2) && gamelevel === 2){
    if(k!=2){
      player.x = 20;
      player.y = 20;
      player.visible = true;
      player.scale = 0.06;
      player.rotation = 0;
      
      chabi2.visible = true;
      chabi2.x = 245;
      chabi2.y = 55;
      
      dushman1.x = 345;
      dushman1.y = 300;
      dushman2.x = 310;
      dushman2.y = 65;
      dushman3.x = 105;
      dushman3.y = 315;
      dushman4.x = 125;
      dushman4.y = 215;
      dushman5.x = 205;
      dushman5.y = 130;
      
      dushman1.velocityX = 4;
      dushman2.velocityY = 4;
      dushman3.velocityY = 4;
      dushman4.velocityY = 4;
      dushman5.velocityY = 4;
      
      wall1.visible = true;
      wall2.visible = true;
      wall3.visible = true;
      wall4.visible = true;
      wall5.visible = true;
      wall6.visible = true;
      wall7.visible = true;
      wall8.visible = true;
      wall9.visible = true;
      wall10.visible = true;
      wall11.visible = true;
      wall12.visible = true;
      wall13.visible = true;
      wall14.visible = true;
      wall15.visible = true;
      wall16.visible = true;
      wall17.visible = true;
      wall18.visible = true;
      wall19.visible = true;
      wall20.visible = true;
      wall21.visible = true;
      wall22.visible = true;
      wall23.visible = true;
      wall24.visible = true;
      wall25.visible = true;
      wall26.visible = true;
      wall27.visible = true;
      wall28.visible = true;
      wall29.visible = true;
      wall30.visible = true;
      wall31.visible = true;
      wall32.visible = true;
      wall33.visible = true;
      wall34.visible = true;
      wall36.visible = true;
      wall37.visible = true;
      wall38.visible = true;
      wall39.visible = true;
      wall40.visible = true;
      wall41.visible = true;
      wall42.visible = true;
      wall43.visible = true;
      wall44.visible = true;
      wall45.visible = true;
      wall46.visible = true;
      wall47.visible = true;
      wall48.visible = true;
      wall49.visible = true;
      wall52.visible = true;
      wall53.visible = true;
      wall54.visible = true;
      wall55.visible = true;
      wall56.visible = true;
      wall57.visible = true;
      wall58.visible = true;
      wall59.visible = true;
      wall60.visible = true;
      wall61.visible = true;
      wall62.visible = true;
      wall63.visible = true;
      wall64.visible = true;
      wall65.visible = true;
      wall66.visible = true;
      wall68.visible = true;
      
      dushman1.visible = true;
      dushman2.visible = true;
      dushman3.visible = true;
      dushman4.visible = true;
      dushman5.visible = true;
      
    }
    
    k = 2;
    background("blue");
    createEdgeSprites();
    
  dushman1.bounceOff(edges);
  dushman1.bounceOff(wall45);
  dushman2.bounceOff(edges);
  dushman2.bounceOff(wall55);
  dushman2.bounceOff(wall59);
  dushman3.bounceOff(edges);
  dushman3.bounceOff(wall25);
  dushman3.bounceOff(wall33);
  dushman4.bounceOff(edges);
  dushman4.bounceOff(wall25);
  dushman4.bounceOff(wall18);
  dushman5.bounceOff(edges);
  dushman5.bounceOff(wall42);
  
  if(keyDown("LEFT_ARROW")){
    player.x = player.x-3;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x+3;
  }
  if(keyDown("UP_ARROW")){
    player.y = player.y-3;
  }
  if(keyDown("DOWN_ARROW")){
    player.y = player.y+3;
  }
    player.collide(edges);
    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    player.collide(wall9);
    player.collide(wall10);
    player.collide(wall11);
    player.collide(wall12);
    player.collide(wall13);
    player.collide(wall14);
    player.collide(wall15);
    player.collide(wall16);
    player.collide(wall17);
    player.collide(wall18);
    player.collide(wall19);
    player.collide(wall20);
    player.collide(wall21);
    player.collide(wall22);
    player.collide(wall23);
    player.collide(wall24);
    player.collide(wall25);
    player.collide(wall26);
    player.collide(wall27);
    player.collide(wall28);
    player.collide(wall29);
    player.collide(wall30);
    player.collide(wall31);
    player.collide(wall32);
    player.collide(wall33);
    player.collide(wall34);
    player.collide(wall36);
    player.collide(wall37);
    player.collide(wall38);
    player.collide(wall39);
    player.collide(wall40);
    player.collide(wall41);
    player.collide(wall42);
    player.collide(wall43);
    player.collide(wall44);
    player.collide(wall45);
    player.collide(wall46);
    player.collide(wall47);
    player.collide(wall48);
    player.collide(wall49);
    player.collide(wall52);
    player.collide(wall53);
    player.collide(wall54);
    player.collide(wall55);
    player.collide(wall56);
    player.collide(wall57);
    player.collide(wall58);
    player.collide(wall59);
    player.collide(wall60);
    player.collide(wall61);
    player.collide(wall62);
    player.collide(wall63);
    player.collide(wall64);
    player.collide(wall65);
    player.collide(wall66);
    player.collide(wall68);
    
    
  if(player.isTouching(chabi2)){
    chabi2.x = player.x-5;
    chabi2.y = player.y;
    chabi2.scale = 0.15;
  }
  if(player.isTouching(dushman1) || player.isTouching(dushman2) ||
     player.isTouching(dushman3) || player.isTouching(dushman4) ||
     player.isTouching(dushman5)){
    player.rotation = 90;
    textSize(20);
    fill("red");
    text("Sorry!You got hit by the ball.Try again", 35, 200);
    fill("black");
    text("Press 'tab' To Continue", 85, 220 );
    k = 0;
    dushman1.velocityX = 0;
    dushman2.velocityY = 0;
    dushman3.velocityY = 0;
    dushman4.velocityY = 0;
    dushman5.velocityY = 0;
  }
  fill("yellow");
  rect(0, 370, 20, 30);
  if(player.x < 20 && player.y > 370 &&
     chabi2.x === player.x-5 && chabi2.y === player.y){
       background("black");
    textSize(30);
    fill("green");
    text("Level 2 Completed \n\t\t\t  got the  \n\t\t second key", 80, 150);
    textSize(28);
    text("Press 'Shift' to go to the house", 10, 260);
    gamelevel = 3;
    
player.visible = false;    
chabi2.visible = false;
wall1.visible = false;
wall2.visible = false;
wall3.visible = false;
wall4.visible = false;
wall5.visible = false;
wall6.visible = false;
wall7.visible = false;
wall8.visible = false;
wall9.visible = false;
wall10.visible = false;
wall11.visible = false;
wall12.visible = false;
wall13.visible = false;
wall14.visible = false;
wall15.visible = false;
wall16.visible = false;
wall17.visible = false;
wall18.visible = false;
wall19.visible = false;
wall20.visible = false;
wall21.visible = false;
wall22.visible = false;
wall23.visible = false;
wall24.visible = false;
wall25.visible = false;
wall26.visible = false;
wall27.visible = false;
wall28.visible = false;
wall29.visible = false;
wall30.visible = false;
wall31.visible = false;
wall32.visible = false;
wall33.visible = false;
wall34.visible = false;
wall36.visible = false; 
wall37.visible = false;
wall38.visible = false;
wall39.visible = false;
wall40.visible = false;
wall41.visible = false;
wall42.visible = false;
wall43.visible = false;
wall44.visible = false;
wall45.visible = false;
wall46.visible = false;
wall47.visible = false;
wall48.visible = false;
wall49.visible = false;
wall52.visible = false;
wall53.visible = false;
wall54.visible = false;
wall55.visible = false;
wall56.visible = false;
wall57.visible = false;
wall58.visible = false;
wall59.visible = false;
wall60.visible = false;
wall61.visible = false;
wall62.visible = false;
wall63.visible = false;
wall64.visible = false;
wall65.visible = false;
wall66.visible = false;
wall68.visible = false;
dushman1.visible = false;
dushman2.visible = false;
dushman3.visible = false;
dushman4.visible = false;
dushman5.visible = false;
  }
  }
  if((keyDown("shift") || k === 3) && gamelevel === 3){
    if(k != 3){
    player.setAnimation("Player8.png_1");
    player.x = 200;
    player.y = 300;
    player.scale = 0.5;
    player.visible = true; 
    home.visible = true;
    Chabi.scale = player.scale;
    Chabi.visible = true;
    Chabi.x = player.x - 30;
    Chabi.y = player.y + 10;
    chabi2.scale = player.scale;
    chabi2.visible = true;
    
    chabi2.x = player.x + 50;
    chabi2.y = player.y + 30;
    }
    k = 3;
      if(player.y > 192){
        player.y = player.y-1; 
      }
      if(player.scale > 0.17){
      player.scale = player.scale-0.003;
      Chabi.x = player.x - (player.scale/(1/60));
      Chabi.y = player.y + (player.scale/0.05);
      chabi2.x = player.x + (player.scale/0.01);
      chabi2.y = player.y + (player.scale/(1/60));
      Chabi.scale = player.scale;
      chabi2.scale = player.scale;
      }
    if(player.y === 192 && player.scale <= 0.17){
      home.visible = false;
      player.visible = false;
      Chabi.visible = false;
      chabi2.visible = false;
      textSize(25);
      fill("black");
      text("Press 'e' to enter the house", 30, 200);
      gamelevel = 4;
    }
  }
  
  if((keyDown("e") || k === 4) && gamelevel === 4){
    if(k != 4){
    home.setAnimation("Home_Inside.jpg_1");
    home.x = 150;
    home.y = 200;
    home.scale = 0.72;
    home.visible = true;
    player.setAnimation("Player8.png_1");
    player.x = 180;
    player.y = 380;
    player.scale = 0.5;
    player.visible = true;
    }
    k = 4;
      if(player.y > 280){
      player.y = player.y-1;
      }
      if(player.scale > 0.32){
        player.scale = player.scale-0.0018;
    }
      if(player.y <= 280 && player.scale <= 0.32){
        player.visible = false;
        home.visible = false;
        Chabi.visible = false;
        chabi2.visible = false;
        background("lightblue");
        balloon1.visible = true;
        balloon2.visible = true;
        balloon3.visible = true;
        balloon4.visible = true;
        balloon1.y = balloon1.y-2;
        balloon2.y = balloon2.y-2;
        balloon3.y = balloon3.y-2;
        balloon4.y = balloon4.y-2;
        textSize(35);
        fill("green");
        text("\t Congratulations! \nRaju reached Home...", 50, 200);
      } 
  }
  drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
