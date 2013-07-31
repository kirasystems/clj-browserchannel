goog.provide('bc.core');
goog.require('cljs.core');
goog.require('bc.dom_helpers');
goog.require('goog.net.BrowserChannel');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('goog.events.KeyHandler');
bc.core.handler = (function handler(){
var h__2898 = (new goog.net.BrowserChannel.Handler());

h__2898.channelOpened = (function (channel){
return bc.core.enable_chat.call(null);
});
h__2898.channelHandleArray = (function (x,data){
var msg__2899 = (data["msg"]);

return bc.dom_helpers.append.call(null,bc.dom_helpers.get_element.call(null,"room"),bc.dom_helpers.element.call(null,"\uFDD0'div",cljs.core.str.call(null,"MSG::",msg__2899)));
});
return h__2898;
});
bc.core.say = (function say(text){
return bc.core.channel.sendMap((function (){var G__2900__2901 = cljs.core.js_obj.call(null);

(G__2900__2901["msg"] = text);
return G__2900__2901;
})());
});
bc.core.enable_chat = (function enable_chat(){
var msg_input__2902 = bc.dom_helpers.get_element.call(null,"msg-input");
var send_button__2903 = bc.dom_helpers.get_element.call(null,"send-button");
var handler__2904 = (function (e){
bc.core.say.call(null,bc.dom_helpers.value.call(null,msg_input__2902));
return bc.dom_helpers.set_value.call(null,msg_input__2902,"");
});

bc.dom_helpers.set_disabled.call(null,msg_input__2902,false);
bc.dom_helpers.set_disabled.call(null,send_button__2903,false);
goog.events.listen.call(null,(new goog.events.KeyHandler(msg_input__2902)),"key",(function (e){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.keyCode,goog.events.KeyCodes.ENTER)))
{return handler__2904.call(null,e);
} else
{return null;
}
}));
return goog.events.listen.call(null,send_button__2903,"click",handler__2904);
});
bc.core.channel = (new goog.net.BrowserChannel());
bc.core.run = (function run(){
goog.events.listen.call(null,window,"unload",(function (){
bc.core.channel.disconnect(cljs.core.List.EMPTY);
return goog.events.removeAll.call(null);
}));
var G__2905__2906 = bc.core.channel.getChannelDebug().getLogger();

G__2905__2906.setLevel(goog.debug.Logger.Level.OFF);
G__2905__2906;
var G__2907__2908 = bc.core.channel;

G__2907__2908.setHandler(bc.core.handler.call(null));
G__2907__2908.connect("/channel/test","/channel/bind");
return G__2907__2908;
});
goog.exportSymbol('bc.core.run', bc.core.run);
