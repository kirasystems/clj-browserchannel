goog.provide('bc.dom_helpers');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('goog.Timer');
/**
* Return the element with the passed id.
*/
bc.dom_helpers.get_element = (function get_element(id){
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
bc.dom_helpers.show_element = (function show_element(e,b){
return goog.style.showElement.call(null,e,b);
});
bc.dom_helpers.add_remove_class = (function add_remove_class(e,add_classes,remove_classes){
return goog.dom.classes.addRemove.call(null,e,remove_classes,add_classes);
});
bc.dom_helpers.get_radio_value = (function get_radio_value(form_name,name){
return goog.dom.forms.getValueByName.call(null,bc.dom_helpers.get_element.call(null,form_name),name);
});
bc.dom_helpers.value = (function value(element){
return goog.dom.forms.getValue.call(null,element);
});
bc.dom_helpers.set_value = (function set_value(element){
return goog.dom.forms.setValue.call(null,element);
});
bc.dom_helpers.set_disabled = (function set_disabled(element,disabled){
return goog.dom.forms.setDisabled.call(null,element,disabled);
});
/**
* Append all children to parent.
* @param {...*} var_args
*/
bc.dom_helpers.append = (function() { 
var append__delegate = function (parent,children){
var G__2854__2855 = cljs.core.seq.call(null,children);

if(cljs.core.truth_(G__2854__2855))
{var child__2856 = cljs.core.first.call(null,G__2854__2855);
var G__2854__2857 = G__2854__2855;

while(true){
goog.dom.appendChild.call(null,parent,child__2856);
var temp__3698__auto____2858 = cljs.core.next.call(null,G__2854__2857);

if(cljs.core.truth_(temp__3698__auto____2858))
{var G__2854__2859 = temp__3698__auto____2858;

{
var G__2860 = cljs.core.first.call(null,G__2854__2859);
var G__2861 = G__2854__2859;
child__2856 = G__2860;
G__2854__2857 = G__2861;
continue;
}
} else
{}
break;
}
} else
{}
return parent;
};
var append = function (parent,var_args){
var children = null;
if (goog.isDef(var_args)) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return append__delegate.call(this, parent, children);
};
append.cljs$lang$maxFixedArity = 1;
append.cljs$lang$applyTo = (function (arglist__2862){
var parent = cljs.core.first(arglist__2862);
var children = cljs.core.rest(arglist__2862);
return append__delegate.call(this, parent, children);
});
return append;
})()
;
/**
* Set the text content for the passed element returning the
* element. If a keyword is passed in the place of e, the element with
* that id will be used and returned.
*/
bc.dom_helpers.set_text = (function set_text(e,s){
var e__2865 = (cljs.core.truth_((function (){var or__3548__auto____2864 = cljs.core.keyword_QMARK_.call(null,e);

if(cljs.core.truth_(or__3548__auto____2864))
{return or__3548__auto____2864;
} else
{return cljs.core.string_QMARK_.call(null,e);
}
})())?bc.dom_helpers.get_element.call(null,e):e);

var G__2866__2867 = e__2865;

goog.dom.setTextContent.call(null,G__2866__2867,s);
return G__2866__2867;
});
bc.dom_helpers.normalize_args = (function normalize_args(tag,args){
var parts__2871 = clojure.string.split.call(null,tag,/(\.|#)/);
var vec__2870__2872 = cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,parts__2871),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.map.call(null,(function (p1__2863_SHARP_){
if(cljs.core.truth_(cljs.core._EQ_.call(null,p1__2863_SHARP_,".")))
{return "\uFDD0'class";
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,p1__2863_SHARP_,"#")))
{return "\uFDD0'id";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return p1__2863_SHARP_;
} else
{return null;
}
}
}
}),cljs.core.rest.call(null,parts__2871)))]);
var tag__2873 = cljs.core.nth.call(null,vec__2870__2872,0,null);
var attrs__2874 = cljs.core.nth.call(null,vec__2870__2872,1,null);

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))))
{return cljs.core.PersistentVector.fromArray([tag__2873,cljs.core.merge.call(null,attrs__2874,cljs.core.first.call(null,args)),cljs.core.rest.call(null,args)]);
} else
{return cljs.core.PersistentVector.fromArray([tag__2873,attrs__2874,args]);
}
});
/**
* Create a dom element using a keyword for the element name and a map
* for the attributes. Append all children to parent. If the first
* child is a string then the string will be set as the text content of
* the parent and all remaining children will be appended.
* @param {...*} var_args
*/
bc.dom_helpers.element = (function() { 
var element__delegate = function (tag,args){
var vec__2875__2877 = bc.dom_helpers.normalize_args.call(null,tag,args);
var tag__2878 = cljs.core.nth.call(null,vec__2875__2877,0,null);
var attrs__2879 = cljs.core.nth.call(null,vec__2875__2877,1,null);
var children__2880 = cljs.core.nth.call(null,vec__2875__2877,2,null);
var parent__2886 = goog.dom.createDom.call(null,cljs.core.subs.call(null,tag__2878,1),cljs.core.reduce.call(null,(function (m,p__2881){
var vec__2882__2883 = p__2881;
var k__2884 = cljs.core.nth.call(null,vec__2882__2883,0,null);
var v__2885 = cljs.core.nth.call(null,vec__2882__2883,1,null);

return cljs.core.assoc.call(null,m,k__2884,v__2885);
}),cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p1__2868_SHARP_,p2__2869_SHARP_){
return cljs.core.vector.call(null,cljs.core.name.call(null,p1__2868_SHARP_),p2__2869_SHARP_);
}),cljs.core.keys.call(null,attrs__2879),cljs.core.vals.call(null,attrs__2879))).strobj);
var vec__2876__2887 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,children__2880)))?cljs.core.PersistentVector.fromArray([bc.dom_helpers.set_text.call(null,element.call(null,tag__2878,attrs__2879),cljs.core.first.call(null,children__2880)),cljs.core.rest.call(null,children__2880)]):cljs.core.PersistentVector.fromArray([parent__2886,children__2880]));
var parent__2888 = cljs.core.nth.call(null,vec__2876__2887,0,null);
var children__2889 = cljs.core.nth.call(null,vec__2876__2887,1,null);

return cljs.core.apply.call(null,bc.dom_helpers.append,parent__2888,children__2889);
};
var element = function (tag,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return element__delegate.call(this, tag, args);
};
element.cljs$lang$maxFixedArity = 1;
element.cljs$lang$applyTo = (function (arglist__2890){
var tag = cljs.core.first(arglist__2890);
var args = cljs.core.rest(arglist__2890);
return element__delegate.call(this, tag, args);
});
return element;
})()
;
/**
* Remove all children from the element with the passed id.
*/
bc.dom_helpers.remove_children = (function remove_children(parent_el){
return goog.dom.removeChildren.call(null,parent_el);
});
/**
* Create a dom element from an html string.
*/
bc.dom_helpers.html = (function html(s){
return goog.dom.htmlToDocumentFragment.call(null,s);
});
bc.dom_helpers.element_arg_QMARK_ = (function element_arg_QMARK_(x){
var or__3548__auto____2891 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____2891))
{return or__3548__auto____2891;
} else
{var or__3548__auto____2892 = cljs.core.map_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____2892))
{return or__3548__auto____2892;
} else
{return cljs.core.string_QMARK_.call(null,x);
}
}
});
/**
* Build up a dom element from nested vectors.
*/
bc.dom_helpers.build = (function build(x){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,x)))
{var vec__2893__2894 = (cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,cljs.core.first.call(null,x)))?cljs.core.PersistentVector.fromArray([cljs.core.apply.call(null,bc.dom_helpers.element,cljs.core.take_while.call(null,bc.dom_helpers.element_arg_QMARK_,x)),cljs.core.drop_while.call(null,bc.dom_helpers.element_arg_QMARK_,x)]):cljs.core.PersistentVector.fromArray([cljs.core.first.call(null,x),cljs.core.rest.call(null,x)]));
var parent__2895 = cljs.core.nth.call(null,vec__2893__2894,0,null);
var children__2896 = cljs.core.nth.call(null,vec__2893__2894,1,null);
var children__2897 = cljs.core.map.call(null,build,children__2896);

return cljs.core.apply.call(null,bc.dom_helpers.append,parent__2895,children__2897);
} else
{return x;
}
});
/**
* Insert a child element at a specific location.
*/
bc.dom_helpers.insert_at = (function insert_at(parent,child,index){
return goog.dom.insertChildAt.call(null,parent,child,index);
});
bc.dom_helpers.set_timeout = (function set_timeout(func,ttime){
return goog.Timer.callOnce.call(null,func,ttime);
});
bc.dom_helpers.set_position = (function set_position(e,x,y){
return goog.style.setPosition.call(null,e,x,y);
});
bc.dom_helpers.get_position = (function get_position(e){
return goog.style.getPosition.call(null,e);
});
bc.dom_helpers.toggle_class = (function toggle_class(el,classname){
return goog.dom.classes.toggle.call(null,el,classname);
});
bc.dom_helpers.add_class = (function add_class(el,classname){
return goog.dom.classes.add.call(null,el,classname);
});
bc.dom_helpers.remove_class = (function remove_class(el,classname){
return goog.dom.classes.remove.call(null,el,classname);
});
