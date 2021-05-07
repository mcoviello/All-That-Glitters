gdjs.OptionsCode = {};
gdjs.OptionsCode.GDFullscreenObjects1= [];
gdjs.OptionsCode.GDFullscreenObjects2= [];
gdjs.OptionsCode.GDFullscrToggleObjects1= [];
gdjs.OptionsCode.GDFullscrToggleObjects2= [];
gdjs.OptionsCode.GDMusicSliderObjects1= [];
gdjs.OptionsCode.GDMusicSliderObjects2= [];
gdjs.OptionsCode.GDSFXSliderObjects1= [];
gdjs.OptionsCode.GDSFXSliderObjects2= [];
gdjs.OptionsCode.GDMasterSliderObjects1= [];
gdjs.OptionsCode.GDMasterSliderObjects2= [];
gdjs.OptionsCode.GDBorderObjects1= [];
gdjs.OptionsCode.GDBorderObjects2= [];
gdjs.OptionsCode.GDMusic_95VolumeObjects1= [];
gdjs.OptionsCode.GDMusic_95VolumeObjects2= [];
gdjs.OptionsCode.GDSFX_95VolumeObjects1= [];
gdjs.OptionsCode.GDSFX_95VolumeObjects2= [];
gdjs.OptionsCode.GDMaster_95VolumeObjects1= [];
gdjs.OptionsCode.GDMaster_95VolumeObjects2= [];
gdjs.OptionsCode.GDtempBackObjects1= [];
gdjs.OptionsCode.GDtempBackObjects2= [];

gdjs.OptionsCode.conditionTrue_0 = {val:false};
gdjs.OptionsCode.condition0IsTrue_0 = {val:false};
gdjs.OptionsCode.condition1IsTrue_0 = {val:false};
gdjs.OptionsCode.condition2IsTrue_0 = {val:false};
gdjs.OptionsCode.conditionTrue_1 = {val:false};
gdjs.OptionsCode.condition0IsTrue_1 = {val:false};
gdjs.OptionsCode.condition1IsTrue_1 = {val:false};
gdjs.OptionsCode.condition2IsTrue_1 = {val:false};


gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDtempBackObjects1Objects = Hashtable.newFrom({"tempBack": gdjs.OptionsCode.GDtempBackObjects1});gdjs.OptionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDFullscrToggleObjects1Objects = Hashtable.newFrom({"FullscrToggle": gdjs.OptionsCode.GDFullscrToggleObjects1});gdjs.OptionsCode.eventsList1 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12836012);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).mul(-(1));
}}

}


};gdjs.OptionsCode.eventsList2 = function(runtimeScene) {

{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition0IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12829260);
}
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("MasterSlider"), gdjs.OptionsCode.GDMasterSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.OptionsCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SFXSlider"), gdjs.OptionsCode.GDSFXSliderObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDMasterSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMasterSliderObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDSFXSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDSFXSliderObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.OptionsCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDMusicSliderObjects1[i].getBehavior("DraggableSliderControl").SetValue(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) / 100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MasterSlider"), gdjs.OptionsCode.GDMasterSliderObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDMasterSliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDMasterSliderObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDMasterSliderObjects1[k] = gdjs.OptionsCode.GDMasterSliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMasterSliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDMasterSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((( gdjs.OptionsCode.GDMasterSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDMasterSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SFXSlider"), gdjs.OptionsCode.GDSFXSliderObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDSFXSliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDSFXSliderObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDSFXSliderObjects1[k] = gdjs.OptionsCode.GDSFXSliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDSFXSliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDSFXSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber((( gdjs.OptionsCode.GDSFXSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDSFXSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.OptionsCode.GDMusicSliderObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.OptionsCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.OptionsCode.GDMusicSliderObjects1[i].getBehavior("DraggableSliderControl").IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.OptionsCode.condition0IsTrue_0.val = true;
        gdjs.OptionsCode.GDMusicSliderObjects1[k] = gdjs.OptionsCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.OptionsCode.GDMusicSliderObjects1.length = k;}if (gdjs.OptionsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.OptionsCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber((( gdjs.OptionsCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.OptionsCode.GDMusicSliderObjects1[0].getBehavior("DraggableSliderControl").Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) * 100);
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) * gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("tempBack"), gdjs.OptionsCode.GDtempBackObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDtempBackObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FullscrToggle"), gdjs.OptionsCode.GDFullscrToggleObjects1);

gdjs.OptionsCode.condition0IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.OptionsCode.mapOfGDgdjs_46OptionsCode_46GDFullscrToggleObjects1Objects, runtimeScene, true, false);
}if (gdjs.OptionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.OptionsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == -(1);
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12836564);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FullscrToggle"), gdjs.OptionsCode.GDFullscrToggleObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDFullscrToggleObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDFullscrToggleObjects1[i].setAnimationName("off");
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.OptionsCode.condition0IsTrue_0.val = false;
gdjs.OptionsCode.condition1IsTrue_0.val = false;
{
gdjs.OptionsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if ( gdjs.OptionsCode.condition0IsTrue_0.val ) {
{
{gdjs.OptionsCode.conditionTrue_1 = gdjs.OptionsCode.condition1IsTrue_0;
gdjs.OptionsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12837644);
}
}}
if (gdjs.OptionsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("FullscrToggle"), gdjs.OptionsCode.GDFullscrToggleObjects1);
{for(var i = 0, len = gdjs.OptionsCode.GDFullscrToggleObjects1.length ;i < len;++i) {
    gdjs.OptionsCode.GDFullscrToggleObjects1[i].setAnimationName("on");
}
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs.OptionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OptionsCode.GDFullscreenObjects1.length = 0;
gdjs.OptionsCode.GDFullscreenObjects2.length = 0;
gdjs.OptionsCode.GDFullscrToggleObjects1.length = 0;
gdjs.OptionsCode.GDFullscrToggleObjects2.length = 0;
gdjs.OptionsCode.GDMusicSliderObjects1.length = 0;
gdjs.OptionsCode.GDMusicSliderObjects2.length = 0;
gdjs.OptionsCode.GDSFXSliderObjects1.length = 0;
gdjs.OptionsCode.GDSFXSliderObjects2.length = 0;
gdjs.OptionsCode.GDMasterSliderObjects1.length = 0;
gdjs.OptionsCode.GDMasterSliderObjects2.length = 0;
gdjs.OptionsCode.GDBorderObjects1.length = 0;
gdjs.OptionsCode.GDBorderObjects2.length = 0;
gdjs.OptionsCode.GDMusic_95VolumeObjects1.length = 0;
gdjs.OptionsCode.GDMusic_95VolumeObjects2.length = 0;
gdjs.OptionsCode.GDSFX_95VolumeObjects1.length = 0;
gdjs.OptionsCode.GDSFX_95VolumeObjects2.length = 0;
gdjs.OptionsCode.GDMaster_95VolumeObjects1.length = 0;
gdjs.OptionsCode.GDMaster_95VolumeObjects2.length = 0;
gdjs.OptionsCode.GDtempBackObjects1.length = 0;
gdjs.OptionsCode.GDtempBackObjects2.length = 0;

gdjs.OptionsCode.eventsList2(runtimeScene);
return;

}

gdjs['OptionsCode'] = gdjs.OptionsCode;
