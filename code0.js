gdjs.MenuCode = {};
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDParticle_95Gold_95GlitterObjects1= [];
gdjs.MenuCode.GDParticle_95Gold_95GlitterObjects2= [];
gdjs.MenuCode.GDStartBtnObjects1= [];
gdjs.MenuCode.GDStartBtnObjects2= [];
gdjs.MenuCode.GDCtrlBtnObjects1= [];
gdjs.MenuCode.GDCtrlBtnObjects2= [];
gdjs.MenuCode.GDOptsBtnObjects1= [];
gdjs.MenuCode.GDOptsBtnObjects2= [];
gdjs.MenuCode.GDBorderObjects1= [];
gdjs.MenuCode.GDBorderObjects2= [];
gdjs.MenuCode.GDCreditsObjects1= [];
gdjs.MenuCode.GDCreditsObjects2= [];
gdjs.MenuCode.GDNewObjectObjects1= [];
gdjs.MenuCode.GDNewObjectObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartBtnObjects1Objects = Hashtable.newFrom({"StartBtn": gdjs.MenuCode.GDStartBtnObjects1});gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", true);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartBtnObjects1Objects = Hashtable.newFrom({"StartBtn": gdjs.MenuCode.GDStartBtnObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptsBtnObjects1Objects = Hashtable.newFrom({"OptsBtn": gdjs.MenuCode.GDOptsBtnObjects1});gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Options");
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptsBtnObjects1Objects = Hashtable.newFrom({"OptsBtn": gdjs.MenuCode.GDOptsBtnObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCtrlBtnObjects1Objects = Hashtable.newFrom({"CtrlBtn": gdjs.MenuCode.GDCtrlBtnObjects1});gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Controls", true);
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCtrlBtnObjects1Objects = Hashtable.newFrom({"CtrlBtn": gdjs.MenuCode.GDCtrlBtnObjects1});gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartBtn"), gdjs.MenuCode.GDStartBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDStartBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStartBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartBtnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartBtn"), gdjs.MenuCode.GDStartBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDStartBtnObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12449884);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDStartBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDStartBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDStartBtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OptsBtn"), gdjs.MenuCode.GDOptsBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptsBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDOptsBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDOptsBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOptsBtnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OptsBtn"), gdjs.MenuCode.GDOptsBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDOptsBtnObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12451900);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDOptsBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDOptsBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDOptsBtnObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CtrlBtn"), gdjs.MenuCode.GDCtrlBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCtrlBtnObjects1Objects, runtimeScene, true, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCtrlBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCtrlBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCtrlBtnObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MenuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CtrlBtn"), gdjs.MenuCode.GDCtrlBtnObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDCtrlBtnObjects1Objects, runtimeScene, true, true);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12454084);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDCtrlBtnObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDCtrlBtnObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDCtrlBtnObjects1[i].setAnimation(0);
}
}}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDParticle_95Gold_95GlitterObjects1.length = 0;
gdjs.MenuCode.GDParticle_95Gold_95GlitterObjects2.length = 0;
gdjs.MenuCode.GDStartBtnObjects1.length = 0;
gdjs.MenuCode.GDStartBtnObjects2.length = 0;
gdjs.MenuCode.GDCtrlBtnObjects1.length = 0;
gdjs.MenuCode.GDCtrlBtnObjects2.length = 0;
gdjs.MenuCode.GDOptsBtnObjects1.length = 0;
gdjs.MenuCode.GDOptsBtnObjects2.length = 0;
gdjs.MenuCode.GDBorderObjects1.length = 0;
gdjs.MenuCode.GDBorderObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDNewObjectObjects1.length = 0;
gdjs.MenuCode.GDNewObjectObjects2.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
