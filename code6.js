gdjs.ControlsCode = {};
gdjs.ControlsCode.GDWASDObjects1= [];
gdjs.ControlsCode.GDWASDObjects2= [];
gdjs.ControlsCode.GDMouseObjects1= [];
gdjs.ControlsCode.GDMouseObjects2= [];
gdjs.ControlsCode.GDControlsObjects1= [];
gdjs.ControlsCode.GDControlsObjects2= [];
gdjs.ControlsCode.GDAttackObjects1= [];
gdjs.ControlsCode.GDAttackObjects2= [];
gdjs.ControlsCode.GDSpaceObjects1= [];
gdjs.ControlsCode.GDSpaceObjects2= [];
gdjs.ControlsCode.GDMoveObjects1= [];
gdjs.ControlsCode.GDMoveObjects2= [];
gdjs.ControlsCode.GDBorderObjects1= [];
gdjs.ControlsCode.GDBorderObjects2= [];
gdjs.ControlsCode.GDtempBackObjects1= [];
gdjs.ControlsCode.GDtempBackObjects2= [];
gdjs.ControlsCode.GDNewObjectObjects1= [];
gdjs.ControlsCode.GDNewObjectObjects2= [];
gdjs.ControlsCode.GDDevCheatsObjects1= [];
gdjs.ControlsCode.GDDevCheatsObjects2= [];

gdjs.ControlsCode.conditionTrue_0 = {val:false};
gdjs.ControlsCode.condition0IsTrue_0 = {val:false};
gdjs.ControlsCode.condition1IsTrue_0 = {val:false};


gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDtempBackObjects1Objects = Hashtable.newFrom({"tempBack": gdjs.ControlsCode.GDtempBackObjects1});gdjs.ControlsCode.eventsList0 = function(runtimeScene) {

{


gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.ControlsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("tempBack"), gdjs.ControlsCode.GDtempBackObjects1);

gdjs.ControlsCode.condition0IsTrue_0.val = false;
{
gdjs.ControlsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ControlsCode.mapOfGDgdjs_46ControlsCode_46GDtempBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.ControlsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ControlsCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.ControlsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ControlsCode.GDWASDObjects1.length = 0;
gdjs.ControlsCode.GDWASDObjects2.length = 0;
gdjs.ControlsCode.GDMouseObjects1.length = 0;
gdjs.ControlsCode.GDMouseObjects2.length = 0;
gdjs.ControlsCode.GDControlsObjects1.length = 0;
gdjs.ControlsCode.GDControlsObjects2.length = 0;
gdjs.ControlsCode.GDAttackObjects1.length = 0;
gdjs.ControlsCode.GDAttackObjects2.length = 0;
gdjs.ControlsCode.GDSpaceObjects1.length = 0;
gdjs.ControlsCode.GDSpaceObjects2.length = 0;
gdjs.ControlsCode.GDMoveObjects1.length = 0;
gdjs.ControlsCode.GDMoveObjects2.length = 0;
gdjs.ControlsCode.GDBorderObjects1.length = 0;
gdjs.ControlsCode.GDBorderObjects2.length = 0;
gdjs.ControlsCode.GDtempBackObjects1.length = 0;
gdjs.ControlsCode.GDtempBackObjects2.length = 0;
gdjs.ControlsCode.GDNewObjectObjects1.length = 0;
gdjs.ControlsCode.GDNewObjectObjects2.length = 0;
gdjs.ControlsCode.GDDevCheatsObjects1.length = 0;
gdjs.ControlsCode.GDDevCheatsObjects2.length = 0;

gdjs.ControlsCode.eventsList1(runtimeScene);
return;

}

gdjs['ControlsCode'] = gdjs.ControlsCode;
