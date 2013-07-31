goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____2909 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2909))
{return or__3548__auto____2909;
} else
{var or__3548__auto____2910 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2910))
{return or__3548__auto____2910;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__2974 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____2911 = this$;

if(cljs.core.truth_(and__3546__auto____2911))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2911;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____2912 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2912))
{return or__3548__auto____2912;
} else
{var or__3548__auto____2913 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2913))
{return or__3548__auto____2913;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2975 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____2914 = this$;

if(cljs.core.truth_(and__3546__auto____2914))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2914;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____2915 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2915))
{return or__3548__auto____2915;
} else
{var or__3548__auto____2916 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2916))
{return or__3548__auto____2916;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__2976 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____2917 = this$;

if(cljs.core.truth_(and__3546__auto____2917))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2917;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____2918 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2918))
{return or__3548__auto____2918;
} else
{var or__3548__auto____2919 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2919))
{return or__3548__auto____2919;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__2977 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____2920 = this$;

if(cljs.core.truth_(and__3546__auto____2920))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2920;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____2921 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2921))
{return or__3548__auto____2921;
} else
{var or__3548__auto____2922 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2922))
{return or__3548__auto____2922;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__2978 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____2923 = this$;

if(cljs.core.truth_(and__3546__auto____2923))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2923;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____2924 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2924))
{return or__3548__auto____2924;
} else
{var or__3548__auto____2925 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2925))
{return or__3548__auto____2925;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__2979 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____2926 = this$;

if(cljs.core.truth_(and__3546__auto____2926))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2926;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____2927 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2927))
{return or__3548__auto____2927;
} else
{var or__3548__auto____2928 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2928))
{return or__3548__auto____2928;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__2980 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____2929 = this$;

if(cljs.core.truth_(and__3546__auto____2929))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2929;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____2930 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2930))
{return or__3548__auto____2930;
} else
{var or__3548__auto____2931 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2931))
{return or__3548__auto____2931;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__2981 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____2932 = this$;

if(cljs.core.truth_(and__3546__auto____2932))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2932;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____2933 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2933))
{return or__3548__auto____2933;
} else
{var or__3548__auto____2934 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2934))
{return or__3548__auto____2934;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__2982 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____2935 = this$;

if(cljs.core.truth_(and__3546__auto____2935))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2935;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____2936 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2936))
{return or__3548__auto____2936;
} else
{var or__3548__auto____2937 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2937))
{return or__3548__auto____2937;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__2983 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____2938 = this$;

if(cljs.core.truth_(and__3546__auto____2938))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2938;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____2939 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2939))
{return or__3548__auto____2939;
} else
{var or__3548__auto____2940 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2940))
{return or__3548__auto____2940;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__2984 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____2941 = this$;

if(cljs.core.truth_(and__3546__auto____2941))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2941;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____2942 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2942))
{return or__3548__auto____2942;
} else
{var or__3548__auto____2943 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2943))
{return or__3548__auto____2943;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__2985 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____2944 = this$;

if(cljs.core.truth_(and__3546__auto____2944))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2944;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____2945 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2945))
{return or__3548__auto____2945;
} else
{var or__3548__auto____2946 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2946))
{return or__3548__auto____2946;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__2986 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____2947 = this$;

if(cljs.core.truth_(and__3546__auto____2947))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2947;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____2948 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2948))
{return or__3548__auto____2948;
} else
{var or__3548__auto____2949 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2949))
{return or__3548__auto____2949;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__2987 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____2950 = this$;

if(cljs.core.truth_(and__3546__auto____2950))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2950;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____2951 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2951))
{return or__3548__auto____2951;
} else
{var or__3548__auto____2952 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2952))
{return or__3548__auto____2952;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__2988 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____2953 = this$;

if(cljs.core.truth_(and__3546__auto____2953))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2953;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____2954 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2954))
{return or__3548__auto____2954;
} else
{var or__3548__auto____2955 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2955))
{return or__3548__auto____2955;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__2989 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____2956 = this$;

if(cljs.core.truth_(and__3546__auto____2956))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2956;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____2957 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2957))
{return or__3548__auto____2957;
} else
{var or__3548__auto____2958 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2958))
{return or__3548__auto____2958;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__2990 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____2959 = this$;

if(cljs.core.truth_(and__3546__auto____2959))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2959;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____2960 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2960))
{return or__3548__auto____2960;
} else
{var or__3548__auto____2961 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2961))
{return or__3548__auto____2961;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__2991 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____2962 = this$;

if(cljs.core.truth_(and__3546__auto____2962))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2962;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____2963 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2963))
{return or__3548__auto____2963;
} else
{var or__3548__auto____2964 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2964))
{return or__3548__auto____2964;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__2992 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____2965 = this$;

if(cljs.core.truth_(and__3546__auto____2965))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2965;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____2966 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2966))
{return or__3548__auto____2966;
} else
{var or__3548__auto____2967 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2967))
{return or__3548__auto____2967;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__2993 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____2968 = this$;

if(cljs.core.truth_(and__3546__auto____2968))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2968;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____2969 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2969))
{return or__3548__auto____2969;
} else
{var or__3548__auto____2970 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__2994 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____2971 = this$;

if(cljs.core.truth_(and__3546__auto____2971))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2971;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____2972 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2972))
{return or__3548__auto____2972;
} else
{var or__3548__auto____2973 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2973))
{return or__3548__auto____2973;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__2974.call(this,this$);
case  2 :
return _invoke__2975.call(this,this$,a);
case  3 :
return _invoke__2976.call(this,this$,a,b);
case  4 :
return _invoke__2977.call(this,this$,a,b,c);
case  5 :
return _invoke__2978.call(this,this$,a,b,c,d);
case  6 :
return _invoke__2979.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__2980.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__2981.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__2982.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__2983.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__2984.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__2985.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__2986.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__2987.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__2988.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__2989.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__2990.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__2991.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__2992.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__2993.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__2994.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2996 = coll;

if(cljs.core.truth_(and__3546__auto____2996))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2996;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2997 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2997))
{return or__3548__auto____2997;
} else
{var or__3548__auto____2998 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2998))
{return or__3548__auto____2998;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2999 = coll;

if(cljs.core.truth_(and__3546__auto____2999))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2999;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3000 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3000))
{return or__3548__auto____3000;
} else
{var or__3548__auto____3001 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3001))
{return or__3548__auto____3001;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3002 = coll;

if(cljs.core.truth_(and__3546__auto____3002))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3002;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3003 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3003))
{return or__3548__auto____3003;
} else
{var or__3548__auto____3004 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3004))
{return or__3548__auto____3004;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__3011 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3005 = coll;

if(cljs.core.truth_(and__3546__auto____3005))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3005;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3006 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3006))
{return or__3548__auto____3006;
} else
{var or__3548__auto____3007 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3007))
{return or__3548__auto____3007;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3012 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3008 = coll;

if(cljs.core.truth_(and__3546__auto____3008))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3008;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3009 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3009))
{return or__3548__auto____3009;
} else
{var or__3548__auto____3010 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3010))
{return or__3548__auto____3010;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__3011.call(this,coll,n);
case  3 :
return _nth__3012.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3014 = coll;

if(cljs.core.truth_(and__3546__auto____3014))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3014;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3015 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3015))
{return or__3548__auto____3015;
} else
{var or__3548__auto____3016 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3016))
{return or__3548__auto____3016;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3017 = coll;

if(cljs.core.truth_(and__3546__auto____3017))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3017;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3018 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3018))
{return or__3548__auto____3018;
} else
{var or__3548__auto____3019 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3019))
{return or__3548__auto____3019;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__3026 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3020 = o;

if(cljs.core.truth_(and__3546__auto____3020))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3020;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3021 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3021))
{return or__3548__auto____3021;
} else
{var or__3548__auto____3022 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3022))
{return or__3548__auto____3022;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3027 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3023 = o;

if(cljs.core.truth_(and__3546__auto____3023))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3023;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3024 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3024))
{return or__3548__auto____3024;
} else
{var or__3548__auto____3025 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3025))
{return or__3548__auto____3025;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__3026.call(this,o,k);
case  3 :
return _lookup__3027.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3029 = coll;

if(cljs.core.truth_(and__3546__auto____3029))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3029;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3030 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
} else
{var or__3548__auto____3031 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3031))
{return or__3548__auto____3031;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3032 = coll;

if(cljs.core.truth_(and__3546__auto____3032))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3032;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3033 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{var or__3548__auto____3034 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3034))
{return or__3548__auto____3034;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3035 = coll;

if(cljs.core.truth_(and__3546__auto____3035))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3035;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3036 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3036))
{return or__3548__auto____3036;
} else
{var or__3548__auto____3037 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3037))
{return or__3548__auto____3037;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3038 = coll;

if(cljs.core.truth_(and__3546__auto____3038))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3038;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3039 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3039))
{return or__3548__auto____3039;
} else
{var or__3548__auto____3040 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3040))
{return or__3548__auto____3040;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3041 = coll;

if(cljs.core.truth_(and__3546__auto____3041))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3041;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3042 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3042))
{return or__3548__auto____3042;
} else
{var or__3548__auto____3043 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3043))
{return or__3548__auto____3043;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3044 = coll;

if(cljs.core.truth_(and__3546__auto____3044))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3044;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3045 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3045))
{return or__3548__auto____3045;
} else
{var or__3548__auto____3046 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3046))
{return or__3548__auto____3046;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3047 = coll;

if(cljs.core.truth_(and__3546__auto____3047))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3047;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3048 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3048))
{return or__3548__auto____3048;
} else
{var or__3548__auto____3049 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3049))
{return or__3548__auto____3049;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3050 = o;

if(cljs.core.truth_(and__3546__auto____3050))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3050;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3051 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{var or__3548__auto____3052 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3052))
{return or__3548__auto____3052;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3053 = o;

if(cljs.core.truth_(and__3546__auto____3053))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3053;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3054 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3054))
{return or__3548__auto____3054;
} else
{var or__3548__auto____3055 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3055))
{return or__3548__auto____3055;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3056 = o;

if(cljs.core.truth_(and__3546__auto____3056))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3056;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3057 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{var or__3548__auto____3058 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3059 = o;

if(cljs.core.truth_(and__3546__auto____3059))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3059;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3060 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3060))
{return or__3548__auto____3060;
} else
{var or__3548__auto____3061 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__3068 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3062 = coll;

if(cljs.core.truth_(and__3546__auto____3062))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3062;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3063 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{var or__3548__auto____3064 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3069 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3065 = coll;

if(cljs.core.truth_(and__3546__auto____3065))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3065;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3066 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3066))
{return or__3548__auto____3066;
} else
{var or__3548__auto____3067 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3067))
{return or__3548__auto____3067;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__3068.call(this,coll,f);
case  3 :
return _reduce__3069.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3071 = o;

if(cljs.core.truth_(and__3546__auto____3071))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3071;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3072 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3072))
{return or__3548__auto____3072;
} else
{var or__3548__auto____3073 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3073))
{return or__3548__auto____3073;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3074 = o;

if(cljs.core.truth_(and__3546__auto____3074))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3074;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3075 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3075))
{return or__3548__auto____3075;
} else
{var or__3548__auto____3076 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3076))
{return or__3548__auto____3076;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3077 = o;

if(cljs.core.truth_(and__3546__auto____3077))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3077;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3078 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{var or__3548__auto____3079 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3079))
{return or__3548__auto____3079;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____3080 = o;

if(cljs.core.truth_(and__3546__auto____3080))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3080;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3081 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3081))
{return or__3548__auto____3081;
} else
{var or__3548__auto____3082 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3082))
{return or__3548__auto____3082;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3083 = d;

if(cljs.core.truth_(and__3546__auto____3083))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3083;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3084 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3084))
{return or__3548__auto____3084;
} else
{var or__3548__auto____3085 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3085))
{return or__3548__auto____3085;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3086 = this$;

if(cljs.core.truth_(and__3546__auto____3086))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3086;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3087 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3087))
{return or__3548__auto____3087;
} else
{var or__3548__auto____3088 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3088))
{return or__3548__auto____3088;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3089 = this$;

if(cljs.core.truth_(and__3546__auto____3089))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3089;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3090 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3090))
{return or__3548__auto____3090;
} else
{var or__3548__auto____3091 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3091))
{return or__3548__auto____3091;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3092 = this$;

if(cljs.core.truth_(and__3546__auto____3092))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3092;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3093 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3093))
{return or__3548__auto____3093;
} else
{var or__3548__auto____3094 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3094))
{return or__3548__auto____3094;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3095 = null;
var G__3095__3096 = (function (o,k){
return null;
});
var G__3095__3097 = (function (o,k,not_found){
return not_found;
});
G__3095 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3095__3096.call(this,o,k);
case  3 :
return G__3095__3097.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3095;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3099 = null;
var G__3099__3100 = (function (_,f){
return f.call(null);
});
var G__3099__3101 = (function (_,f,start){
return start;
});
G__3099 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3099__3100.call(this,_,f);
case  3 :
return G__3099__3101.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3099;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3103 = null;
var G__3103__3104 = (function (_,n){
return null;
});
var G__3103__3105 = (function (_,n,not_found){
return not_found;
});
G__3103 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3103__3104.call(this,_,n);
case  3 :
return G__3103__3105.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3103;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__3113 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3107 = cljs.core._nth.call(null,cicoll,0);
var n__3108 = 1;

while(true){
if(cljs.core.truth_((n__3108 < cljs.core._count.call(null,cicoll))))
{{
var G__3117 = f.call(null,val__3107,cljs.core._nth.call(null,cicoll,n__3108));
var G__3118 = (n__3108 + 1);
val__3107 = G__3117;
n__3108 = G__3118;
continue;
}
} else
{return val__3107;
}
break;
}
}
});
var ci_reduce__3114 = (function (cicoll,f,val){
var val__3109 = val;
var n__3110 = 0;

while(true){
if(cljs.core.truth_((n__3110 < cljs.core._count.call(null,cicoll))))
{{
var G__3119 = f.call(null,val__3109,cljs.core._nth.call(null,cicoll,n__3110));
var G__3120 = (n__3110 + 1);
val__3109 = G__3119;
n__3110 = G__3120;
continue;
}
} else
{return val__3109;
}
break;
}
});
var ci_reduce__3115 = (function (cicoll,f,val,idx){
var val__3111 = val;
var n__3112 = idx;

while(true){
if(cljs.core.truth_((n__3112 < cljs.core._count.call(null,cicoll))))
{{
var G__3121 = f.call(null,val__3111,cljs.core._nth.call(null,cicoll,n__3112));
var G__3122 = (n__3112 + 1);
val__3111 = G__3121;
n__3112 = G__3122;
continue;
}
} else
{return val__3111;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3113.call(this,cicoll,f);
case  3 :
return ci_reduce__3114.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3115.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3123 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3136 = null;
var G__3136__3137 = (function (_,f){
var this__3124 = this;
return cljs.core.ci_reduce.call(null,this__3124.a,f,(this__3124.a[this__3124.i]),(this__3124.i + 1));
});
var G__3136__3138 = (function (_,f,start){
var this__3125 = this;
return cljs.core.ci_reduce.call(null,this__3125.a,f,start,this__3125.i);
});
G__3136 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3136__3137.call(this,_,f);
case  3 :
return G__3136__3138.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3136;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3126 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3127 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3140 = null;
var G__3140__3141 = (function (coll,n){
var this__3128 = this;
var i__3129 = (n + this__3128.i);

if(cljs.core.truth_((i__3129 < this__3128.a.length)))
{return (this__3128.a[i__3129]);
} else
{return null;
}
});
var G__3140__3142 = (function (coll,n,not_found){
var this__3130 = this;
var i__3131 = (n + this__3130.i);

if(cljs.core.truth_((i__3131 < this__3130.a.length)))
{return (this__3130.a[i__3131]);
} else
{return not_found;
}
});
G__3140 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3140__3141.call(this,coll,n);
case  3 :
return G__3140__3142.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3140;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3132 = this;
return (this__3132.a.length - this__3132.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3133 = this;
return (this__3133.a[this__3133.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3134 = this;
if(cljs.core.truth_(((this__3134.i + 1) < this__3134.a.length)))
{return (new cljs.core.IndexedSeq(this__3134.a,(this__3134.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3135 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3144 = null;
var G__3144__3145 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3144__3146 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3144 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3144__3145.call(this,array,f);
case  3 :
return G__3144__3146.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3144;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3148 = null;
var G__3148__3149 = (function (array,k){
return (array[k]);
});
var G__3148__3150 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3148 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3148__3149.call(this,array,k);
case  3 :
return G__3148__3150.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3148;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3152 = null;
var G__3152__3153 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3152__3154 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3152 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3152__3153.call(this,array,n);
case  3 :
return G__3152__3154.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3152;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____3156 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3156))
{var s__3157 = temp__3698__auto____3156;

return cljs.core._first.call(null,s__3157);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__3158 = cljs.core.next.call(null,s);
s = G__3158;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__3159 = cljs.core.seq.call(null,x);
var n__3160 = 0;

while(true){
if(cljs.core.truth_(s__3159))
{{
var G__3161 = cljs.core.next.call(null,s__3159);
var G__3162 = (n__3160 + 1);
s__3159 = G__3161;
n__3160 = G__3162;
continue;
}
} else
{return n__3160;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__3163 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3164 = (function() { 
var G__3166__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3167 = conj.call(null,coll,x);
var G__3168 = cljs.core.first.call(null,xs);
var G__3169 = cljs.core.next.call(null,xs);
coll = G__3167;
x = G__3168;
xs = G__3169;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3166 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3166__delegate.call(this, coll, x, xs);
};
G__3166.cljs$lang$maxFixedArity = 2;
G__3166.cljs$lang$applyTo = (function (arglist__3170){
var coll = cljs.core.first(arglist__3170);
var x = cljs.core.first(cljs.core.next(arglist__3170));
var xs = cljs.core.rest(cljs.core.next(arglist__3170));
return G__3166__delegate.call(this, coll, x, xs);
});
return G__3166;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3163.call(this,coll,x);
default:
return conj__3164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3164.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__3171 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3172 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3171.call(this,coll,n);
case  3 :
return nth__3172.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__3174 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3175 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3174.call(this,o,k);
case  3 :
return get__3175.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3178 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3179 = (function() { 
var G__3181__delegate = function (coll,k,v,kvs){
while(true){
var ret__3177 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3182 = ret__3177;
var G__3183 = cljs.core.first.call(null,kvs);
var G__3184 = cljs.core.second.call(null,kvs);
var G__3185 = cljs.core.nnext.call(null,kvs);
coll = G__3182;
k = G__3183;
v = G__3184;
kvs = G__3185;
continue;
}
} else
{return ret__3177;
}
break;
}
};
var G__3181 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3181__delegate.call(this, coll, k, v, kvs);
};
G__3181.cljs$lang$maxFixedArity = 3;
G__3181.cljs$lang$applyTo = (function (arglist__3186){
var coll = cljs.core.first(arglist__3186);
var k = cljs.core.first(cljs.core.next(arglist__3186));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3186)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3186)));
return G__3181__delegate.call(this, coll, k, v, kvs);
});
return G__3181;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3178.call(this,coll,k,v);
default:
return assoc__3179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3179.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__3188 = (function (coll){
return coll;
});
var dissoc__3189 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3190 = (function() { 
var G__3192__delegate = function (coll,k,ks){
while(true){
var ret__3187 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3193 = ret__3187;
var G__3194 = cljs.core.first.call(null,ks);
var G__3195 = cljs.core.next.call(null,ks);
coll = G__3193;
k = G__3194;
ks = G__3195;
continue;
}
} else
{return ret__3187;
}
break;
}
};
var G__3192 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3192__delegate.call(this, coll, k, ks);
};
G__3192.cljs$lang$maxFixedArity = 2;
G__3192.cljs$lang$applyTo = (function (arglist__3196){
var coll = cljs.core.first(arglist__3196);
var k = cljs.core.first(cljs.core.next(arglist__3196));
var ks = cljs.core.rest(cljs.core.next(arglist__3196));
return G__3192__delegate.call(this, coll, k, ks);
});
return G__3192;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3188.call(this,coll);
case  2 :
return dissoc__3189.call(this,coll,k);
default:
return dissoc__3190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3190.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__359__auto____3197 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3198 = x__359__auto____3197;

if(cljs.core.truth_(and__3546__auto____3198))
{var and__3546__auto____3199 = x__359__auto____3197.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3199))
{return cljs.core.not.call(null,x__359__auto____3197.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3199;
}
} else
{return and__3546__auto____3198;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__359__auto____3197);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__3201 = (function (coll){
return coll;
});
var disj__3202 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3203 = (function() { 
var G__3205__delegate = function (coll,k,ks){
while(true){
var ret__3200 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3206 = ret__3200;
var G__3207 = cljs.core.first.call(null,ks);
var G__3208 = cljs.core.next.call(null,ks);
coll = G__3206;
k = G__3207;
ks = G__3208;
continue;
}
} else
{return ret__3200;
}
break;
}
};
var G__3205 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3205__delegate.call(this, coll, k, ks);
};
G__3205.cljs$lang$maxFixedArity = 2;
G__3205.cljs$lang$applyTo = (function (arglist__3209){
var coll = cljs.core.first(arglist__3209);
var k = cljs.core.first(cljs.core.next(arglist__3209));
var ks = cljs.core.rest(cljs.core.next(arglist__3209));
return G__3205__delegate.call(this, coll, k, ks);
});
return G__3205;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3201.call(this,coll);
case  2 :
return disj__3202.call(this,coll,k);
default:
return disj__3203.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3203.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__359__auto____3210 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3211 = x__359__auto____3210;

if(cljs.core.truth_(and__3546__auto____3211))
{var and__3546__auto____3212 = x__359__auto____3210.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3212))
{return cljs.core.not.call(null,x__359__auto____3210.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3212;
}
} else
{return and__3546__auto____3211;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__359__auto____3210);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__359__auto____3213 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3214 = x__359__auto____3213;

if(cljs.core.truth_(and__3546__auto____3214))
{var and__3546__auto____3215 = x__359__auto____3213.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3215))
{return cljs.core.not.call(null,x__359__auto____3213.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3215;
}
} else
{return and__3546__auto____3214;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__359__auto____3213);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__359__auto____3216 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3217 = x__359__auto____3216;

if(cljs.core.truth_(and__3546__auto____3217))
{var and__3546__auto____3218 = x__359__auto____3216.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3218))
{return cljs.core.not.call(null,x__359__auto____3216.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3218;
}
} else
{return and__3546__auto____3217;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__359__auto____3216);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__359__auto____3219 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3220 = x__359__auto____3219;

if(cljs.core.truth_(and__3546__auto____3220))
{var and__3546__auto____3221 = x__359__auto____3219.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3221))
{return cljs.core.not.call(null,x__359__auto____3219.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3221;
}
} else
{return and__3546__auto____3220;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__359__auto____3219);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__359__auto____3222 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3223 = x__359__auto____3222;

if(cljs.core.truth_(and__3546__auto____3223))
{var and__3546__auto____3224 = x__359__auto____3222.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3224))
{return cljs.core.not.call(null,x__359__auto____3222.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3224;
}
} else
{return and__3546__auto____3223;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__359__auto____3222);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__359__auto____3225 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3226 = x__359__auto____3225;

if(cljs.core.truth_(and__3546__auto____3226))
{var and__3546__auto____3227 = x__359__auto____3225.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3227))
{return cljs.core.not.call(null,x__359__auto____3225.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3227;
}
} else
{return and__3546__auto____3226;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__359__auto____3225);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__359__auto____3228 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3229 = x__359__auto____3228;

if(cljs.core.truth_(and__3546__auto____3229))
{var and__3546__auto____3230 = x__359__auto____3228.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3230))
{return cljs.core.not.call(null,x__359__auto____3228.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3230;
}
} else
{return and__3546__auto____3229;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__359__auto____3228);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3231 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3231.push(key);
}));
return keys__3231;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_((s === null)))
{return false;
} else
{var x__359__auto____3232 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3233 = x__359__auto____3232;

if(cljs.core.truth_(and__3546__auto____3233))
{var and__3546__auto____3234 = x__359__auto____3232.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3234))
{return cljs.core.not.call(null,x__359__auto____3232.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3234;
}
} else
{return and__3546__auto____3233;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__359__auto____3232);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____3235 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3235))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3236 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____3236))
{return or__3548__auto____3236;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____3235;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3237 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3237))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____3237;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3238 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3238))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____3238;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____3239 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3239))
{return (n == n.toFixed());
} else
{return and__3546__auto____3239;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3240 = coll;

if(cljs.core.truth_(and__3546__auto____3240))
{var and__3546__auto____3241 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3241))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3241;
}
} else
{return and__3546__auto____3240;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___3246 = (function (x){
return true;
});
var distinct_QMARK___3247 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3248 = (function() { 
var G__3250__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3242 = cljs.core.set([y,x]);
var xs__3243 = more;

while(true){
var x__3244 = cljs.core.first.call(null,xs__3243);
var etc__3245 = cljs.core.next.call(null,xs__3243);

if(cljs.core.truth_(xs__3243))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3242,x__3244)))
{return false;
} else
{{
var G__3251 = cljs.core.conj.call(null,s__3242,x__3244);
var G__3252 = etc__3245;
s__3242 = G__3251;
xs__3243 = G__3252;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3250 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3250__delegate.call(this, x, y, more);
};
G__3250.cljs$lang$maxFixedArity = 2;
G__3250.cljs$lang$applyTo = (function (arglist__3253){
var x = cljs.core.first(arglist__3253);
var y = cljs.core.first(cljs.core.next(arglist__3253));
var more = cljs.core.rest(cljs.core.next(arglist__3253));
return G__3250__delegate.call(this, x, y, more);
});
return G__3250;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3246.call(this,x);
case  2 :
return distinct_QMARK___3247.call(this,x,y);
default:
return distinct_QMARK___3248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3248.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__3254 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3254)))
{return r__3254;
} else
{if(cljs.core.truth_(r__3254))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__3256 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3257 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3255 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3255,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3255);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3256.call(this,comp);
case  2 :
return sort__3257.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__3259 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3260 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3259.call(this,keyfn,comp);
case  3 :
return sort_by__3260.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__3262 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3263 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3262.call(this,f,val);
case  3 :
return reduce__3263.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3269 = (function (f,coll){
var temp__3695__auto____3265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3265))
{var s__3266 = temp__3695__auto____3265;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3266),cljs.core.next.call(null,s__3266));
} else
{return f.call(null);
}
});
var seq_reduce__3270 = (function (f,val,coll){
var val__3267 = val;
var coll__3268 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3268))
{{
var G__3272 = f.call(null,val__3267,cljs.core.first.call(null,coll__3268));
var G__3273 = cljs.core.next.call(null,coll__3268);
val__3267 = G__3272;
coll__3268 = G__3273;
continue;
}
} else
{return val__3267;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3269.call(this,f,val);
case  3 :
return seq_reduce__3270.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3274 = null;
var G__3274__3275 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3274__3276 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3274 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3274__3275.call(this,coll,f);
case  3 :
return G__3274__3276.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3274;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3278 = (function (){
return 0;
});
var _PLUS___3279 = (function (x){
return x;
});
var _PLUS___3280 = (function (x,y){
return (x + y);
});
var _PLUS___3281 = (function() { 
var G__3283__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3283 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3283__delegate.call(this, x, y, more);
};
G__3283.cljs$lang$maxFixedArity = 2;
G__3283.cljs$lang$applyTo = (function (arglist__3284){
var x = cljs.core.first(arglist__3284);
var y = cljs.core.first(cljs.core.next(arglist__3284));
var more = cljs.core.rest(cljs.core.next(arglist__3284));
return G__3283__delegate.call(this, x, y, more);
});
return G__3283;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3278.call(this);
case  1 :
return _PLUS___3279.call(this,x);
case  2 :
return _PLUS___3280.call(this,x,y);
default:
return _PLUS___3281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3281.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___3285 = (function (x){
return (- x);
});
var ___3286 = (function (x,y){
return (x - y);
});
var ___3287 = (function() { 
var G__3289__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3289__delegate.call(this, x, y, more);
};
G__3289.cljs$lang$maxFixedArity = 2;
G__3289.cljs$lang$applyTo = (function (arglist__3290){
var x = cljs.core.first(arglist__3290);
var y = cljs.core.first(cljs.core.next(arglist__3290));
var more = cljs.core.rest(cljs.core.next(arglist__3290));
return G__3289__delegate.call(this, x, y, more);
});
return G__3289;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3285.call(this,x);
case  2 :
return ___3286.call(this,x,y);
default:
return ___3287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3287.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3291 = (function (){
return 1;
});
var _STAR___3292 = (function (x){
return x;
});
var _STAR___3293 = (function (x,y){
return (x * y);
});
var _STAR___3294 = (function() { 
var G__3296__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3296 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3296__delegate.call(this, x, y, more);
};
G__3296.cljs$lang$maxFixedArity = 2;
G__3296.cljs$lang$applyTo = (function (arglist__3297){
var x = cljs.core.first(arglist__3297);
var y = cljs.core.first(cljs.core.next(arglist__3297));
var more = cljs.core.rest(cljs.core.next(arglist__3297));
return G__3296__delegate.call(this, x, y, more);
});
return G__3296;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3291.call(this);
case  1 :
return _STAR___3292.call(this,x);
case  2 :
return _STAR___3293.call(this,x,y);
default:
return _STAR___3294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3294.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___3298 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3299 = (function (x,y){
return (x / y);
});
var _SLASH___3300 = (function() { 
var G__3302__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3302 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3302__delegate.call(this, x, y, more);
};
G__3302.cljs$lang$maxFixedArity = 2;
G__3302.cljs$lang$applyTo = (function (arglist__3303){
var x = cljs.core.first(arglist__3303);
var y = cljs.core.first(cljs.core.next(arglist__3303));
var more = cljs.core.rest(cljs.core.next(arglist__3303));
return G__3302__delegate.call(this, x, y, more);
});
return G__3302;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3298.call(this,x);
case  2 :
return _SLASH___3299.call(this,x,y);
default:
return _SLASH___3300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3300.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___3304 = (function (x){
return true;
});
var _LT___3305 = (function (x,y){
return (x < y);
});
var _LT___3306 = (function() { 
var G__3308__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3309 = y;
var G__3310 = cljs.core.first.call(null,more);
var G__3311 = cljs.core.next.call(null,more);
x = G__3309;
y = G__3310;
more = G__3311;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3308 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3308__delegate.call(this, x, y, more);
};
G__3308.cljs$lang$maxFixedArity = 2;
G__3308.cljs$lang$applyTo = (function (arglist__3312){
var x = cljs.core.first(arglist__3312);
var y = cljs.core.first(cljs.core.next(arglist__3312));
var more = cljs.core.rest(cljs.core.next(arglist__3312));
return G__3308__delegate.call(this, x, y, more);
});
return G__3308;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3304.call(this,x);
case  2 :
return _LT___3305.call(this,x,y);
default:
return _LT___3306.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3306.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___3313 = (function (x){
return true;
});
var _LT__EQ___3314 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3315 = (function() { 
var G__3317__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3318 = y;
var G__3319 = cljs.core.first.call(null,more);
var G__3320 = cljs.core.next.call(null,more);
x = G__3318;
y = G__3319;
more = G__3320;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3317__delegate.call(this, x, y, more);
};
G__3317.cljs$lang$maxFixedArity = 2;
G__3317.cljs$lang$applyTo = (function (arglist__3321){
var x = cljs.core.first(arglist__3321);
var y = cljs.core.first(cljs.core.next(arglist__3321));
var more = cljs.core.rest(cljs.core.next(arglist__3321));
return G__3317__delegate.call(this, x, y, more);
});
return G__3317;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3313.call(this,x);
case  2 :
return _LT__EQ___3314.call(this,x,y);
default:
return _LT__EQ___3315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3315.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___3322 = (function (x){
return true;
});
var _GT___3323 = (function (x,y){
return (x > y);
});
var _GT___3324 = (function() { 
var G__3326__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3327 = y;
var G__3328 = cljs.core.first.call(null,more);
var G__3329 = cljs.core.next.call(null,more);
x = G__3327;
y = G__3328;
more = G__3329;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3326 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3326__delegate.call(this, x, y, more);
};
G__3326.cljs$lang$maxFixedArity = 2;
G__3326.cljs$lang$applyTo = (function (arglist__3330){
var x = cljs.core.first(arglist__3330);
var y = cljs.core.first(cljs.core.next(arglist__3330));
var more = cljs.core.rest(cljs.core.next(arglist__3330));
return G__3326__delegate.call(this, x, y, more);
});
return G__3326;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3322.call(this,x);
case  2 :
return _GT___3323.call(this,x,y);
default:
return _GT___3324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3324.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___3331 = (function (x){
return true;
});
var _GT__EQ___3332 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3333 = (function() { 
var G__3335__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3336 = y;
var G__3337 = cljs.core.first.call(null,more);
var G__3338 = cljs.core.next.call(null,more);
x = G__3336;
y = G__3337;
more = G__3338;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3335 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3335__delegate.call(this, x, y, more);
};
G__3335.cljs$lang$maxFixedArity = 2;
G__3335.cljs$lang$applyTo = (function (arglist__3339){
var x = cljs.core.first(arglist__3339);
var y = cljs.core.first(cljs.core.next(arglist__3339));
var more = cljs.core.rest(cljs.core.next(arglist__3339));
return G__3335__delegate.call(this, x, y, more);
});
return G__3335;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3331.call(this,x);
case  2 :
return _GT__EQ___3332.call(this,x,y);
default:
return _GT__EQ___3333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3333.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__3340 = (function (x){
return x;
});
var max__3341 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3342 = (function() { 
var G__3344__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3344__delegate.call(this, x, y, more);
};
G__3344.cljs$lang$maxFixedArity = 2;
G__3344.cljs$lang$applyTo = (function (arglist__3345){
var x = cljs.core.first(arglist__3345);
var y = cljs.core.first(cljs.core.next(arglist__3345));
var more = cljs.core.rest(cljs.core.next(arglist__3345));
return G__3344__delegate.call(this, x, y, more);
});
return G__3344;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3340.call(this,x);
case  2 :
return max__3341.call(this,x,y);
default:
return max__3342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3342.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3346 = (function (x){
return x;
});
var min__3347 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3348 = (function() { 
var G__3350__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3350 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3350__delegate.call(this, x, y, more);
};
G__3350.cljs$lang$maxFixedArity = 2;
G__3350.cljs$lang$applyTo = (function (arglist__3351){
var x = cljs.core.first(arglist__3351);
var y = cljs.core.first(cljs.core.next(arglist__3351));
var more = cljs.core.rest(cljs.core.next(arglist__3351));
return G__3350__delegate.call(this, x, y, more);
});
return G__3350;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3346.call(this,x);
case  2 :
return min__3347.call(this,x,y);
default:
return min__3348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3348.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__3352 = (n % d);

return cljs.core.fix.call(null,((n - rem__3352) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3353 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3353));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3354 = (function (){
return Math.random.call(null);
});
var rand__3355 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3354.call(this);
case  1 :
return rand__3355.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___3357 = (function (x){
return true;
});
var _EQ__EQ___3358 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3359 = (function() { 
var G__3361__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3362 = y;
var G__3363 = cljs.core.first.call(null,more);
var G__3364 = cljs.core.next.call(null,more);
x = G__3362;
y = G__3363;
more = G__3364;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3361 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3361__delegate.call(this, x, y, more);
};
G__3361.cljs$lang$maxFixedArity = 2;
G__3361.cljs$lang$applyTo = (function (arglist__3365){
var x = cljs.core.first(arglist__3365);
var y = cljs.core.first(cljs.core.next(arglist__3365));
var more = cljs.core.rest(cljs.core.next(arglist__3365));
return G__3361__delegate.call(this, x, y, more);
});
return G__3361;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3357.call(this,x);
case  2 :
return _EQ__EQ___3358.call(this,x,y);
default:
return _EQ__EQ___3359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3359.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__3366 = n;
var xs__3367 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3368 = xs__3367;

if(cljs.core.truth_(and__3546__auto____3368))
{return (n__3366 > 0);
} else
{return and__3546__auto____3368;
}
})()))
{{
var G__3369 = (n__3366 - 1);
var G__3370 = cljs.core.next.call(null,xs__3367);
n__3366 = G__3369;
xs__3367 = G__3370;
continue;
}
} else
{return xs__3367;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3375 = null;
var G__3375__3376 = (function (coll,n){
var temp__3695__auto____3371 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3371))
{var xs__3372 = temp__3695__auto____3371;

return cljs.core.first.call(null,xs__3372);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3375__3377 = (function (coll,n,not_found){
var temp__3695__auto____3373 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3373))
{var xs__3374 = temp__3695__auto____3373;

return cljs.core.first.call(null,xs__3374);
} else
{return not_found;
}
});
G__3375 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3375__3376.call(this,coll,n);
case  3 :
return G__3375__3377.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3375;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3379 = (function (){
return "";
});
var str_STAR___3380 = (function (x){
if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___3381 = (function() { 
var G__3383__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3384 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3385 = cljs.core.next.call(null,more);
sb = G__3384;
more = G__3385;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3383 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3383__delegate.call(this, x, ys);
};
G__3383.cljs$lang$maxFixedArity = 1;
G__3383.cljs$lang$applyTo = (function (arglist__3386){
var x = cljs.core.first(arglist__3386);
var ys = cljs.core.rest(arglist__3386);
return G__3383__delegate.call(this, x, ys);
});
return G__3383;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3379.call(this);
case  1 :
return str_STAR___3380.call(this,x);
default:
return str_STAR___3381.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3381.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__3387 = (function (){
return "";
});
var str__3388 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_((x === null)))
{return "";
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__3389 = (function() { 
var G__3391__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3392 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3393 = cljs.core.next.call(null,more);
sb = G__3392;
more = G__3393;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3391 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3391__delegate.call(this, x, ys);
};
G__3391.cljs$lang$maxFixedArity = 1;
G__3391.cljs$lang$applyTo = (function (arglist__3394){
var x = cljs.core.first(arglist__3394);
var ys = cljs.core.rest(arglist__3394);
return G__3391__delegate.call(this, x, ys);
});
return G__3391;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3387.call(this);
case  1 :
return str__3388.call(this,x);
default:
return str__3389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3389.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3395 = (function (s,start){
return s.substring(start);
});
var subs__3396 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3395.call(this,s,start);
case  3 :
return subs__3396.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__3398 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"\uFDD1","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"\uFDD1","'",name);
});
var symbol__3399 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3398.call(this,ns);
case  2 :
return symbol__3399.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__3401 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__3402 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3401.call(this,ns);
case  2 :
return keyword__3402.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3404 = cljs.core.seq.call(null,x);
var ys__3405 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__3404 === null)))
{return (ys__3405 === null);
} else
{if(cljs.core.truth_((ys__3405 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3404),cljs.core.first.call(null,ys__3405))))
{{
var G__3406 = cljs.core.next.call(null,xs__3404);
var G__3407 = cljs.core.next.call(null,ys__3405);
xs__3404 = G__3406;
ys__3405 = G__3407;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3408_SHARP_,p2__3409_SHARP_){
return cljs.core.hash_combine.call(null,p1__3408_SHARP_,cljs.core.hash.call(null,p2__3409_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3410__3411 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3410__3411))
{var G__3413__3415 = cljs.core.first.call(null,G__3410__3411);
var vec__3414__3416 = G__3413__3415;
var key_name__3417 = cljs.core.nth.call(null,vec__3414__3416,0,null);
var f__3418 = cljs.core.nth.call(null,vec__3414__3416,1,null);
var G__3410__3419 = G__3410__3411;

var G__3413__3420 = G__3413__3415;
var G__3410__3421 = G__3410__3419;

while(true){
var vec__3422__3423 = G__3413__3420;
var key_name__3424 = cljs.core.nth.call(null,vec__3422__3423,0,null);
var f__3425 = cljs.core.nth.call(null,vec__3422__3423,1,null);
var G__3410__3426 = G__3410__3421;

var str_name__3427 = cljs.core.name.call(null,key_name__3424);

obj[str_name__3427] = f__3425;
var temp__3698__auto____3428 = cljs.core.next.call(null,G__3410__3426);

if(cljs.core.truth_(temp__3698__auto____3428))
{var G__3410__3429 = temp__3698__auto____3428;

{
var G__3430 = cljs.core.first.call(null,G__3410__3429);
var G__3431 = G__3410__3429;
G__3413__3420 = G__3430;
G__3410__3421 = G__3431;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3432 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3433 = this;
return (new cljs.core.List(this__3433.meta,o,coll,(this__3433.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3434 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3435 = this;
return this__3435.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3436 = this;
return this__3436.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3437 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3438 = this;
return this__3438.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3439 = this;
return this__3439.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3440 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3441 = this;
return (new cljs.core.List(meta,this__3441.first,this__3441.rest,this__3441.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3442 = this;
return this__3442.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3443 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3445 = this;
return (new cljs.core.List(this__3445.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3446 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3447 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3448 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3449 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3450 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3451 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3452 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3453 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3454 = this;
return this__3454.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3455 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__3456){
var items = cljs.core.seq( arglist__3456 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3457 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3458 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3459 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3460 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3460.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3461 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3462 = this;
return this__3462.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3463 = this;
if(cljs.core.truth_((this__3463.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__3463.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3464 = this;
return this__3464.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3465 = this;
return (new cljs.core.Cons(meta,this__3465.first,this__3465.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3466 = null;
var G__3466__3467 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3466__3468 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3466 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3466__3467.call(this,string,f);
case  3 :
return G__3466__3468.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3466;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3470 = null;
var G__3470__3471 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3470__3472 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3470 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3470__3471.call(this,string,k);
case  3 :
return G__3470__3472.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3470;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3474 = null;
var G__3474__3475 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3474__3476 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3474 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3474__3475.call(this,string,n);
case  3 :
return G__3474__3476.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3474;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3484 = null;
var G__3484__3485 = (function (tsym3478,coll){
var tsym3478__3480 = this;

var this$__3481 = tsym3478__3480;

return cljs.core.get.call(null,coll,this$__3481.toString());
});
var G__3484__3486 = (function (tsym3479,coll,not_found){
var tsym3479__3482 = this;

var this$__3483 = tsym3479__3482;

return cljs.core.get.call(null,coll,this$__3483.toString(),not_found);
});
G__3484 = function(tsym3479,coll,not_found){
switch(arguments.length){
case  2 :
return G__3484__3485.call(this,tsym3479,coll);
case  3 :
return G__3484__3486.call(this,tsym3479,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3484;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__3488 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3488;
} else
{lazy_seq.x = x__3488.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3489 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3490 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3491 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3492 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3492.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3493 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3494 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3495 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3496 = this;
return this__3496.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3497 = this;
return (new cljs.core.LazySeq(meta,this__3497.realized,this__3497.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3498 = [];

var s__3499 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3499)))
{ary__3498.push(cljs.core.first.call(null,s__3499));
{
var G__3500 = cljs.core.next.call(null,s__3499);
s__3499 = G__3500;
continue;
}
} else
{return ary__3498;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3501 = s;
var i__3502 = n;
var sum__3503 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3504 = (i__3502 > 0);

if(cljs.core.truth_(and__3546__auto____3504))
{return cljs.core.seq.call(null,s__3501);
} else
{return and__3546__auto____3504;
}
})()))
{{
var G__3505 = cljs.core.next.call(null,s__3501);
var G__3506 = (i__3502 - 1);
var G__3507 = (sum__3503 + 1);
s__3501 = G__3505;
i__3502 = G__3506;
sum__3503 = G__3507;
continue;
}
} else
{return sum__3503;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_((arglist === null)))
{return null;
} else
{if(cljs.core.truth_((cljs.core.next.call(null,arglist) === null)))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__3511 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3512 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3513 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3508 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3508))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3508),concat.call(null,cljs.core.rest.call(null,s__3508),y));
} else
{return y;
}
})));
});
var concat__3514 = (function() { 
var G__3516__delegate = function (x,y,zs){
var cat__3510 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3509 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3509))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3509),cat.call(null,cljs.core.rest.call(null,xys__3509),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3510.call(null,concat.call(null,x,y),zs);
};
var G__3516 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3516__delegate.call(this, x, y, zs);
};
G__3516.cljs$lang$maxFixedArity = 2;
G__3516.cljs$lang$applyTo = (function (arglist__3517){
var x = cljs.core.first(arglist__3517);
var y = cljs.core.first(cljs.core.next(arglist__3517));
var zs = cljs.core.rest(cljs.core.next(arglist__3517));
return G__3516__delegate.call(this, x, y, zs);
});
return G__3516;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3511.call(this);
case  1 :
return concat__3512.call(this,x);
case  2 :
return concat__3513.call(this,x,y);
default:
return concat__3514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3514.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___3518 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3519 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3520 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3521 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3522 = (function() { 
var G__3524__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3524 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3524__delegate.call(this, a, b, c, d, more);
};
G__3524.cljs$lang$maxFixedArity = 4;
G__3524.cljs$lang$applyTo = (function (arglist__3525){
var a = cljs.core.first(arglist__3525);
var b = cljs.core.first(cljs.core.next(arglist__3525));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3525)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3525))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3525))));
return G__3524__delegate.call(this, a, b, c, d, more);
});
return G__3524;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3518.call(this,a);
case  2 :
return list_STAR___3519.call(this,a,b);
case  3 :
return list_STAR___3520.call(this,a,b,c);
case  4 :
return list_STAR___3521.call(this,a,b,c,d);
default:
return list_STAR___3522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3522.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__3535 = (function (f,args){
var fixed_arity__3526 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3526 + 1)) <= fixed_arity__3526)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3536 = (function (f,x,args){
var arglist__3527 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3528 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3527,fixed_arity__3528) <= fixed_arity__3528)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3527));
} else
{return f.cljs$lang$applyTo(arglist__3527);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3527));
}
});
var apply__3537 = (function (f,x,y,args){
var arglist__3529 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3530 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3529,fixed_arity__3530) <= fixed_arity__3530)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3529));
} else
{return f.cljs$lang$applyTo(arglist__3529);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3529));
}
});
var apply__3538 = (function (f,x,y,z,args){
var arglist__3531 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3532 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3531,fixed_arity__3532) <= fixed_arity__3532)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3531));
} else
{return f.cljs$lang$applyTo(arglist__3531);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3531));
}
});
var apply__3539 = (function() { 
var G__3541__delegate = function (f,a,b,c,d,args){
var arglist__3533 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3534 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3533,fixed_arity__3534) <= fixed_arity__3534)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3533));
} else
{return f.cljs$lang$applyTo(arglist__3533);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3533));
}
};
var G__3541 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3541__delegate.call(this, f, a, b, c, d, args);
};
G__3541.cljs$lang$maxFixedArity = 5;
G__3541.cljs$lang$applyTo = (function (arglist__3542){
var f = cljs.core.first(arglist__3542);
var a = cljs.core.first(cljs.core.next(arglist__3542));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3542)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3542))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3542)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3542)))));
return G__3541__delegate.call(this, f, a, b, c, d, args);
});
return G__3541;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3535.call(this,f,a);
case  3 :
return apply__3536.call(this,f,a,b);
case  4 :
return apply__3537.call(this,f,a,b,c);
case  5 :
return apply__3538.call(this,f,a,b,c,d);
default:
return apply__3539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3539.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3543){
var obj = cljs.core.first(arglist__3543);
var f = cljs.core.first(cljs.core.next(arglist__3543));
var args = cljs.core.rest(cljs.core.next(arglist__3543));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___3544 = (function (x){
return false;
});
var not_EQ___3545 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3546 = (function() { 
var G__3548__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3548 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3548__delegate.call(this, x, y, more);
};
G__3548.cljs$lang$maxFixedArity = 2;
G__3548.cljs$lang$applyTo = (function (arglist__3549){
var x = cljs.core.first(arglist__3549);
var y = cljs.core.first(cljs.core.next(arglist__3549));
var more = cljs.core.rest(cljs.core.next(arglist__3549));
return G__3548__delegate.call(this, x, y, more);
});
return G__3548;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3544.call(this,x);
case  2 :
return not_EQ___3545.call(this,x,y);
default:
return not_EQ___3546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3546.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_((cljs.core.seq.call(null,coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3550 = pred;
var G__3551 = cljs.core.next.call(null,coll);
pred = G__3550;
coll = G__3551;
continue;
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____3552 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3552))
{return or__3548__auto____3552;
} else
{{
var G__3553 = pred;
var G__3554 = cljs.core.next.call(null,coll);
pred = G__3553;
coll = G__3554;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3555 = null;
var G__3555__3556 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3555__3557 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3555__3558 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3555__3559 = (function() { 
var G__3561__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3561 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3561__delegate.call(this, x, y, zs);
};
G__3561.cljs$lang$maxFixedArity = 2;
G__3561.cljs$lang$applyTo = (function (arglist__3562){
var x = cljs.core.first(arglist__3562);
var y = cljs.core.first(cljs.core.next(arglist__3562));
var zs = cljs.core.rest(cljs.core.next(arglist__3562));
return G__3561__delegate.call(this, x, y, zs);
});
return G__3561;
})()
;
G__3555 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3555__3556.call(this);
case  1 :
return G__3555__3557.call(this,x);
case  2 :
return G__3555__3558.call(this,x,y);
default:
return G__3555__3559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3555.cljs$lang$maxFixedArity = 2;
G__3555.cljs$lang$applyTo = G__3555__3559.cljs$lang$applyTo;
return G__3555;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3563__delegate = function (args){
return x;
};
var G__3563 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3563__delegate.call(this, args);
};
G__3563.cljs$lang$maxFixedArity = 0;
G__3563.cljs$lang$applyTo = (function (arglist__3564){
var args = cljs.core.seq( arglist__3564 );;
return G__3563__delegate.call(this, args);
});
return G__3563;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3568 = (function (){
return cljs.core.identity;
});
var comp__3569 = (function (f){
return f;
});
var comp__3570 = (function (f,g){
return (function() {
var G__3574 = null;
var G__3574__3575 = (function (){
return f.call(null,g.call(null));
});
var G__3574__3576 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3574__3577 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3574__3578 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3574__3579 = (function() { 
var G__3581__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3581 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3581__delegate.call(this, x, y, z, args);
};
G__3581.cljs$lang$maxFixedArity = 3;
G__3581.cljs$lang$applyTo = (function (arglist__3582){
var x = cljs.core.first(arglist__3582);
var y = cljs.core.first(cljs.core.next(arglist__3582));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3582)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3582)));
return G__3581__delegate.call(this, x, y, z, args);
});
return G__3581;
})()
;
G__3574 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3574__3575.call(this);
case  1 :
return G__3574__3576.call(this,x);
case  2 :
return G__3574__3577.call(this,x,y);
case  3 :
return G__3574__3578.call(this,x,y,z);
default:
return G__3574__3579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3574.cljs$lang$maxFixedArity = 3;
G__3574.cljs$lang$applyTo = G__3574__3579.cljs$lang$applyTo;
return G__3574;
})()
});
var comp__3571 = (function (f,g,h){
return (function() {
var G__3583 = null;
var G__3583__3584 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3583__3585 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3583__3586 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3583__3587 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3583__3588 = (function() { 
var G__3590__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3590 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3590__delegate.call(this, x, y, z, args);
};
G__3590.cljs$lang$maxFixedArity = 3;
G__3590.cljs$lang$applyTo = (function (arglist__3591){
var x = cljs.core.first(arglist__3591);
var y = cljs.core.first(cljs.core.next(arglist__3591));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3591)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3591)));
return G__3590__delegate.call(this, x, y, z, args);
});
return G__3590;
})()
;
G__3583 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3583__3584.call(this);
case  1 :
return G__3583__3585.call(this,x);
case  2 :
return G__3583__3586.call(this,x,y);
case  3 :
return G__3583__3587.call(this,x,y,z);
default:
return G__3583__3588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3583.cljs$lang$maxFixedArity = 3;
G__3583.cljs$lang$applyTo = G__3583__3588.cljs$lang$applyTo;
return G__3583;
})()
});
var comp__3572 = (function() { 
var G__3592__delegate = function (f1,f2,f3,fs){
var fs__3565 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3593__delegate = function (args){
var ret__3566 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3565),args);
var fs__3567 = cljs.core.next.call(null,fs__3565);

while(true){
if(cljs.core.truth_(fs__3567))
{{
var G__3594 = cljs.core.first.call(null,fs__3567).call(null,ret__3566);
var G__3595 = cljs.core.next.call(null,fs__3567);
ret__3566 = G__3594;
fs__3567 = G__3595;
continue;
}
} else
{return ret__3566;
}
break;
}
};
var G__3593 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3593__delegate.call(this, args);
};
G__3593.cljs$lang$maxFixedArity = 0;
G__3593.cljs$lang$applyTo = (function (arglist__3596){
var args = cljs.core.seq( arglist__3596 );;
return G__3593__delegate.call(this, args);
});
return G__3593;
})()
;
};
var G__3592 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3592__delegate.call(this, f1, f2, f3, fs);
};
G__3592.cljs$lang$maxFixedArity = 3;
G__3592.cljs$lang$applyTo = (function (arglist__3597){
var f1 = cljs.core.first(arglist__3597);
var f2 = cljs.core.first(cljs.core.next(arglist__3597));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3597)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3597)));
return G__3592__delegate.call(this, f1, f2, f3, fs);
});
return G__3592;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3568.call(this);
case  1 :
return comp__3569.call(this,f1);
case  2 :
return comp__3570.call(this,f1,f2);
case  3 :
return comp__3571.call(this,f1,f2,f3);
default:
return comp__3572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3572.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3598 = (function (f,arg1){
return (function() { 
var G__3603__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3603 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3603__delegate.call(this, args);
};
G__3603.cljs$lang$maxFixedArity = 0;
G__3603.cljs$lang$applyTo = (function (arglist__3604){
var args = cljs.core.seq( arglist__3604 );;
return G__3603__delegate.call(this, args);
});
return G__3603;
})()
;
});
var partial__3599 = (function (f,arg1,arg2){
return (function() { 
var G__3605__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3605 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3605__delegate.call(this, args);
};
G__3605.cljs$lang$maxFixedArity = 0;
G__3605.cljs$lang$applyTo = (function (arglist__3606){
var args = cljs.core.seq( arglist__3606 );;
return G__3605__delegate.call(this, args);
});
return G__3605;
})()
;
});
var partial__3600 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3607__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3607 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3607__delegate.call(this, args);
};
G__3607.cljs$lang$maxFixedArity = 0;
G__3607.cljs$lang$applyTo = (function (arglist__3608){
var args = cljs.core.seq( arglist__3608 );;
return G__3607__delegate.call(this, args);
});
return G__3607;
})()
;
});
var partial__3601 = (function() { 
var G__3609__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3610__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3610 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3610__delegate.call(this, args);
};
G__3610.cljs$lang$maxFixedArity = 0;
G__3610.cljs$lang$applyTo = (function (arglist__3611){
var args = cljs.core.seq( arglist__3611 );;
return G__3610__delegate.call(this, args);
});
return G__3610;
})()
;
};
var G__3609 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3609__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3609.cljs$lang$maxFixedArity = 4;
G__3609.cljs$lang$applyTo = (function (arglist__3612){
var f = cljs.core.first(arglist__3612);
var arg1 = cljs.core.first(cljs.core.next(arglist__3612));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3612)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3612))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3612))));
return G__3609__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3609;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3598.call(this,f,arg1);
case  3 :
return partial__3599.call(this,f,arg1,arg2);
case  4 :
return partial__3600.call(this,f,arg1,arg2,arg3);
default:
return partial__3601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3601.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3613 = (function (f,x){
return (function() {
var G__3617 = null;
var G__3617__3618 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__3617__3619 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__3617__3620 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__3617__3621 = (function() { 
var G__3623__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__3623 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3623__delegate.call(this, a, b, c, ds);
};
G__3623.cljs$lang$maxFixedArity = 3;
G__3623.cljs$lang$applyTo = (function (arglist__3624){
var a = cljs.core.first(arglist__3624);
var b = cljs.core.first(cljs.core.next(arglist__3624));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3624)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3624)));
return G__3623__delegate.call(this, a, b, c, ds);
});
return G__3623;
})()
;
G__3617 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3617__3618.call(this,a);
case  2 :
return G__3617__3619.call(this,a,b);
case  3 :
return G__3617__3620.call(this,a,b,c);
default:
return G__3617__3621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3617.cljs$lang$maxFixedArity = 3;
G__3617.cljs$lang$applyTo = G__3617__3621.cljs$lang$applyTo;
return G__3617;
})()
});
var fnil__3614 = (function (f,x,y){
return (function() {
var G__3625 = null;
var G__3625__3626 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3625__3627 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__3625__3628 = (function() { 
var G__3630__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__3630 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3630__delegate.call(this, a, b, c, ds);
};
G__3630.cljs$lang$maxFixedArity = 3;
G__3630.cljs$lang$applyTo = (function (arglist__3631){
var a = cljs.core.first(arglist__3631);
var b = cljs.core.first(cljs.core.next(arglist__3631));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3631)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3631)));
return G__3630__delegate.call(this, a, b, c, ds);
});
return G__3630;
})()
;
G__3625 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3625__3626.call(this,a,b);
case  3 :
return G__3625__3627.call(this,a,b,c);
default:
return G__3625__3628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3625.cljs$lang$maxFixedArity = 3;
G__3625.cljs$lang$applyTo = G__3625__3628.cljs$lang$applyTo;
return G__3625;
})()
});
var fnil__3615 = (function (f,x,y,z){
return (function() {
var G__3632 = null;
var G__3632__3633 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__3632__3634 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__3632__3635 = (function() { 
var G__3637__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__3637 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3637__delegate.call(this, a, b, c, ds);
};
G__3637.cljs$lang$maxFixedArity = 3;
G__3637.cljs$lang$applyTo = (function (arglist__3638){
var a = cljs.core.first(arglist__3638);
var b = cljs.core.first(cljs.core.next(arglist__3638));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3638)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3638)));
return G__3637__delegate.call(this, a, b, c, ds);
});
return G__3637;
})()
;
G__3632 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3632__3633.call(this,a,b);
case  3 :
return G__3632__3634.call(this,a,b,c);
default:
return G__3632__3635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3632.cljs$lang$maxFixedArity = 3;
G__3632.cljs$lang$applyTo = G__3632__3635.cljs$lang$applyTo;
return G__3632;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3613.call(this,f,x);
case  3 :
return fnil__3614.call(this,f,x,y);
case  4 :
return fnil__3615.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3641 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3639))
{var s__3640 = temp__3698__auto____3639;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3640)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3640)));
} else
{return null;
}
})));
});

return mapi__3641.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3642 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3642))
{var s__3643 = temp__3698__auto____3642;

var x__3644 = f.call(null,cljs.core.first.call(null,s__3643));

if(cljs.core.truth_((x__3644 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3643));
} else
{return cljs.core.cons.call(null,x__3644,keep.call(null,f,cljs.core.rest.call(null,s__3643)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3654 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3651))
{var s__3652 = temp__3698__auto____3651;

var x__3653 = f.call(null,idx,cljs.core.first.call(null,s__3652));

if(cljs.core.truth_((x__3653 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3652));
} else
{return cljs.core.cons.call(null,x__3653,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3652)));
}
} else
{return null;
}
})));
});

return keepi__3654.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3699 = (function (p){
return (function() {
var ep1 = null;
var ep1__3704 = (function (){
return true;
});
var ep1__3705 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3706 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3661 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3661))
{return p.call(null,y);
} else
{return and__3546__auto____3661;
}
})());
});
var ep1__3707 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3662 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3662))
{var and__3546__auto____3663 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3663))
{return p.call(null,z);
} else
{return and__3546__auto____3663;
}
} else
{return and__3546__auto____3662;
}
})());
});
var ep1__3708 = (function() { 
var G__3710__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3664 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3664))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3664;
}
})());
};
var G__3710 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3710__delegate.call(this, x, y, z, args);
};
G__3710.cljs$lang$maxFixedArity = 3;
G__3710.cljs$lang$applyTo = (function (arglist__3711){
var x = cljs.core.first(arglist__3711);
var y = cljs.core.first(cljs.core.next(arglist__3711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3711)));
return G__3710__delegate.call(this, x, y, z, args);
});
return G__3710;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3704.call(this);
case  1 :
return ep1__3705.call(this,x);
case  2 :
return ep1__3706.call(this,x,y);
case  3 :
return ep1__3707.call(this,x,y,z);
default:
return ep1__3708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3708.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3700 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3712 = (function (){
return true;
});
var ep2__3713 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3665 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3665))
{return p2.call(null,x);
} else
{return and__3546__auto____3665;
}
})());
});
var ep2__3714 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3666 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3666))
{var and__3546__auto____3667 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3667))
{var and__3546__auto____3668 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3668))
{return p2.call(null,y);
} else
{return and__3546__auto____3668;
}
} else
{return and__3546__auto____3667;
}
} else
{return and__3546__auto____3666;
}
})());
});
var ep2__3715 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3669 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3669))
{var and__3546__auto____3670 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3670))
{var and__3546__auto____3671 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3671))
{var and__3546__auto____3672 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3672))
{var and__3546__auto____3673 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3673))
{return p2.call(null,z);
} else
{return and__3546__auto____3673;
}
} else
{return and__3546__auto____3672;
}
} else
{return and__3546__auto____3671;
}
} else
{return and__3546__auto____3670;
}
} else
{return and__3546__auto____3669;
}
})());
});
var ep2__3716 = (function() { 
var G__3718__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3674 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3674))
{return cljs.core.every_QMARK_.call(null,(function (p1__3645_SHARP_){
var and__3546__auto____3675 = p1.call(null,p1__3645_SHARP_);

if(cljs.core.truth_(and__3546__auto____3675))
{return p2.call(null,p1__3645_SHARP_);
} else
{return and__3546__auto____3675;
}
}),args);
} else
{return and__3546__auto____3674;
}
})());
};
var G__3718 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3718__delegate.call(this, x, y, z, args);
};
G__3718.cljs$lang$maxFixedArity = 3;
G__3718.cljs$lang$applyTo = (function (arglist__3719){
var x = cljs.core.first(arglist__3719);
var y = cljs.core.first(cljs.core.next(arglist__3719));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3719)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3719)));
return G__3718__delegate.call(this, x, y, z, args);
});
return G__3718;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3712.call(this);
case  1 :
return ep2__3713.call(this,x);
case  2 :
return ep2__3714.call(this,x,y);
case  3 :
return ep2__3715.call(this,x,y,z);
default:
return ep2__3716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3716.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3701 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3720 = (function (){
return true;
});
var ep3__3721 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3676 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3676))
{var and__3546__auto____3677 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3677))
{return p3.call(null,x);
} else
{return and__3546__auto____3677;
}
} else
{return and__3546__auto____3676;
}
})());
});
var ep3__3722 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3678 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3678))
{var and__3546__auto____3679 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3679))
{var and__3546__auto____3680 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3680))
{var and__3546__auto____3681 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3681))
{var and__3546__auto____3682 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3682))
{return p3.call(null,y);
} else
{return and__3546__auto____3682;
}
} else
{return and__3546__auto____3681;
}
} else
{return and__3546__auto____3680;
}
} else
{return and__3546__auto____3679;
}
} else
{return and__3546__auto____3678;
}
})());
});
var ep3__3723 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3683 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3683))
{var and__3546__auto____3684 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3684))
{var and__3546__auto____3685 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3685))
{var and__3546__auto____3686 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3686))
{var and__3546__auto____3687 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3687))
{var and__3546__auto____3688 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3688))
{var and__3546__auto____3689 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3689))
{var and__3546__auto____3690 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3690))
{return p3.call(null,z);
} else
{return and__3546__auto____3690;
}
} else
{return and__3546__auto____3689;
}
} else
{return and__3546__auto____3688;
}
} else
{return and__3546__auto____3687;
}
} else
{return and__3546__auto____3686;
}
} else
{return and__3546__auto____3685;
}
} else
{return and__3546__auto____3684;
}
} else
{return and__3546__auto____3683;
}
})());
});
var ep3__3724 = (function() { 
var G__3726__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3691 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3691))
{return cljs.core.every_QMARK_.call(null,(function (p1__3646_SHARP_){
var and__3546__auto____3692 = p1.call(null,p1__3646_SHARP_);

if(cljs.core.truth_(and__3546__auto____3692))
{var and__3546__auto____3693 = p2.call(null,p1__3646_SHARP_);

if(cljs.core.truth_(and__3546__auto____3693))
{return p3.call(null,p1__3646_SHARP_);
} else
{return and__3546__auto____3693;
}
} else
{return and__3546__auto____3692;
}
}),args);
} else
{return and__3546__auto____3691;
}
})());
};
var G__3726 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3726__delegate.call(this, x, y, z, args);
};
G__3726.cljs$lang$maxFixedArity = 3;
G__3726.cljs$lang$applyTo = (function (arglist__3727){
var x = cljs.core.first(arglist__3727);
var y = cljs.core.first(cljs.core.next(arglist__3727));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3727)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3727)));
return G__3726__delegate.call(this, x, y, z, args);
});
return G__3726;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3720.call(this);
case  1 :
return ep3__3721.call(this,x);
case  2 :
return ep3__3722.call(this,x,y);
case  3 :
return ep3__3723.call(this,x,y,z);
default:
return ep3__3724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3724.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3702 = (function() { 
var G__3728__delegate = function (p1,p2,p3,ps){
var ps__3694 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3729 = (function (){
return true;
});
var epn__3730 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3647_SHARP_){
return p1__3647_SHARP_.call(null,x);
}),ps__3694);
});
var epn__3731 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3648_SHARP_){
var and__3546__auto____3695 = p1__3648_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3695))
{return p1__3648_SHARP_.call(null,y);
} else
{return and__3546__auto____3695;
}
}),ps__3694);
});
var epn__3732 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3649_SHARP_){
var and__3546__auto____3696 = p1__3649_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3696))
{var and__3546__auto____3697 = p1__3649_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3697))
{return p1__3649_SHARP_.call(null,z);
} else
{return and__3546__auto____3697;
}
} else
{return and__3546__auto____3696;
}
}),ps__3694);
});
var epn__3733 = (function() { 
var G__3735__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3698 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3698))
{return cljs.core.every_QMARK_.call(null,(function (p1__3650_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3650_SHARP_,args);
}),ps__3694);
} else
{return and__3546__auto____3698;
}
})());
};
var G__3735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3735__delegate.call(this, x, y, z, args);
};
G__3735.cljs$lang$maxFixedArity = 3;
G__3735.cljs$lang$applyTo = (function (arglist__3736){
var x = cljs.core.first(arglist__3736);
var y = cljs.core.first(cljs.core.next(arglist__3736));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3736)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3736)));
return G__3735__delegate.call(this, x, y, z, args);
});
return G__3735;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3729.call(this);
case  1 :
return epn__3730.call(this,x);
case  2 :
return epn__3731.call(this,x,y);
case  3 :
return epn__3732.call(this,x,y,z);
default:
return epn__3733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3733.cljs$lang$applyTo;
return epn;
})()
};
var G__3728 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3728__delegate.call(this, p1, p2, p3, ps);
};
G__3728.cljs$lang$maxFixedArity = 3;
G__3728.cljs$lang$applyTo = (function (arglist__3737){
var p1 = cljs.core.first(arglist__3737);
var p2 = cljs.core.first(cljs.core.next(arglist__3737));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3737)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3737)));
return G__3728__delegate.call(this, p1, p2, p3, ps);
});
return G__3728;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3699.call(this,p1);
case  2 :
return every_pred__3700.call(this,p1,p2);
case  3 :
return every_pred__3701.call(this,p1,p2,p3);
default:
return every_pred__3702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3702.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3777 = (function (p){
return (function() {
var sp1 = null;
var sp1__3782 = (function (){
return null;
});
var sp1__3783 = (function (x){
return p.call(null,x);
});
var sp1__3784 = (function (x,y){
var or__3548__auto____3739 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3739))
{return or__3548__auto____3739;
} else
{return p.call(null,y);
}
});
var sp1__3785 = (function (x,y,z){
var or__3548__auto____3740 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3740))
{return or__3548__auto____3740;
} else
{var or__3548__auto____3741 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3741))
{return or__3548__auto____3741;
} else
{return p.call(null,z);
}
}
});
var sp1__3786 = (function() { 
var G__3788__delegate = function (x,y,z,args){
var or__3548__auto____3742 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3742))
{return or__3548__auto____3742;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3788 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3788__delegate.call(this, x, y, z, args);
};
G__3788.cljs$lang$maxFixedArity = 3;
G__3788.cljs$lang$applyTo = (function (arglist__3789){
var x = cljs.core.first(arglist__3789);
var y = cljs.core.first(cljs.core.next(arglist__3789));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3789)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3789)));
return G__3788__delegate.call(this, x, y, z, args);
});
return G__3788;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3782.call(this);
case  1 :
return sp1__3783.call(this,x);
case  2 :
return sp1__3784.call(this,x,y);
case  3 :
return sp1__3785.call(this,x,y,z);
default:
return sp1__3786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3786.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3778 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3790 = (function (){
return null;
});
var sp2__3791 = (function (x){
var or__3548__auto____3743 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3743))
{return or__3548__auto____3743;
} else
{return p2.call(null,x);
}
});
var sp2__3792 = (function (x,y){
var or__3548__auto____3744 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3744))
{return or__3548__auto____3744;
} else
{var or__3548__auto____3745 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3745))
{return or__3548__auto____3745;
} else
{var or__3548__auto____3746 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3746))
{return or__3548__auto____3746;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3793 = (function (x,y,z){
var or__3548__auto____3747 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3747))
{return or__3548__auto____3747;
} else
{var or__3548__auto____3748 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3748))
{return or__3548__auto____3748;
} else
{var or__3548__auto____3749 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3749))
{return or__3548__auto____3749;
} else
{var or__3548__auto____3750 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3750))
{return or__3548__auto____3750;
} else
{var or__3548__auto____3751 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3751))
{return or__3548__auto____3751;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3794 = (function() { 
var G__3796__delegate = function (x,y,z,args){
var or__3548__auto____3752 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3752))
{return or__3548__auto____3752;
} else
{return cljs.core.some.call(null,(function (p1__3655_SHARP_){
var or__3548__auto____3753 = p1.call(null,p1__3655_SHARP_);

if(cljs.core.truth_(or__3548__auto____3753))
{return or__3548__auto____3753;
} else
{return p2.call(null,p1__3655_SHARP_);
}
}),args);
}
};
var G__3796 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3796__delegate.call(this, x, y, z, args);
};
G__3796.cljs$lang$maxFixedArity = 3;
G__3796.cljs$lang$applyTo = (function (arglist__3797){
var x = cljs.core.first(arglist__3797);
var y = cljs.core.first(cljs.core.next(arglist__3797));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3797)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3797)));
return G__3796__delegate.call(this, x, y, z, args);
});
return G__3796;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3790.call(this);
case  1 :
return sp2__3791.call(this,x);
case  2 :
return sp2__3792.call(this,x,y);
case  3 :
return sp2__3793.call(this,x,y,z);
default:
return sp2__3794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3794.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3779 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3798 = (function (){
return null;
});
var sp3__3799 = (function (x){
var or__3548__auto____3754 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3754))
{return or__3548__auto____3754;
} else
{var or__3548__auto____3755 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3755))
{return or__3548__auto____3755;
} else
{return p3.call(null,x);
}
}
});
var sp3__3800 = (function (x,y){
var or__3548__auto____3756 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3756))
{return or__3548__auto____3756;
} else
{var or__3548__auto____3757 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3757))
{return or__3548__auto____3757;
} else
{var or__3548__auto____3758 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3758))
{return or__3548__auto____3758;
} else
{var or__3548__auto____3759 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3759))
{return or__3548__auto____3759;
} else
{var or__3548__auto____3760 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3760))
{return or__3548__auto____3760;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3801 = (function (x,y,z){
var or__3548__auto____3761 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3761))
{return or__3548__auto____3761;
} else
{var or__3548__auto____3762 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3762))
{return or__3548__auto____3762;
} else
{var or__3548__auto____3763 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3763))
{return or__3548__auto____3763;
} else
{var or__3548__auto____3764 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3764))
{return or__3548__auto____3764;
} else
{var or__3548__auto____3765 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3765))
{return or__3548__auto____3765;
} else
{var or__3548__auto____3766 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3766))
{return or__3548__auto____3766;
} else
{var or__3548__auto____3767 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3767))
{return or__3548__auto____3767;
} else
{var or__3548__auto____3768 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3768))
{return or__3548__auto____3768;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3802 = (function() { 
var G__3804__delegate = function (x,y,z,args){
var or__3548__auto____3769 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3769))
{return or__3548__auto____3769;
} else
{return cljs.core.some.call(null,(function (p1__3656_SHARP_){
var or__3548__auto____3770 = p1.call(null,p1__3656_SHARP_);

if(cljs.core.truth_(or__3548__auto____3770))
{return or__3548__auto____3770;
} else
{var or__3548__auto____3771 = p2.call(null,p1__3656_SHARP_);

if(cljs.core.truth_(or__3548__auto____3771))
{return or__3548__auto____3771;
} else
{return p3.call(null,p1__3656_SHARP_);
}
}
}),args);
}
};
var G__3804 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3804__delegate.call(this, x, y, z, args);
};
G__3804.cljs$lang$maxFixedArity = 3;
G__3804.cljs$lang$applyTo = (function (arglist__3805){
var x = cljs.core.first(arglist__3805);
var y = cljs.core.first(cljs.core.next(arglist__3805));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3805)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3805)));
return G__3804__delegate.call(this, x, y, z, args);
});
return G__3804;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3798.call(this);
case  1 :
return sp3__3799.call(this,x);
case  2 :
return sp3__3800.call(this,x,y);
case  3 :
return sp3__3801.call(this,x,y,z);
default:
return sp3__3802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3802.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3780 = (function() { 
var G__3806__delegate = function (p1,p2,p3,ps){
var ps__3772 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3807 = (function (){
return null;
});
var spn__3808 = (function (x){
return cljs.core.some.call(null,(function (p1__3657_SHARP_){
return p1__3657_SHARP_.call(null,x);
}),ps__3772);
});
var spn__3809 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3658_SHARP_){
var or__3548__auto____3773 = p1__3658_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3773))
{return or__3548__auto____3773;
} else
{return p1__3658_SHARP_.call(null,y);
}
}),ps__3772);
});
var spn__3810 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3659_SHARP_){
var or__3548__auto____3774 = p1__3659_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3774))
{return or__3548__auto____3774;
} else
{var or__3548__auto____3775 = p1__3659_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3775))
{return or__3548__auto____3775;
} else
{return p1__3659_SHARP_.call(null,z);
}
}
}),ps__3772);
});
var spn__3811 = (function() { 
var G__3813__delegate = function (x,y,z,args){
var or__3548__auto____3776 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3776))
{return or__3548__auto____3776;
} else
{return cljs.core.some.call(null,(function (p1__3660_SHARP_){
return cljs.core.some.call(null,p1__3660_SHARP_,args);
}),ps__3772);
}
};
var G__3813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3813__delegate.call(this, x, y, z, args);
};
G__3813.cljs$lang$maxFixedArity = 3;
G__3813.cljs$lang$applyTo = (function (arglist__3814){
var x = cljs.core.first(arglist__3814);
var y = cljs.core.first(cljs.core.next(arglist__3814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3814)));
return G__3813__delegate.call(this, x, y, z, args);
});
return G__3813;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3807.call(this);
case  1 :
return spn__3808.call(this,x);
case  2 :
return spn__3809.call(this,x,y);
case  3 :
return spn__3810.call(this,x,y,z);
default:
return spn__3811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3811.cljs$lang$applyTo;
return spn;
})()
};
var G__3806 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3806__delegate.call(this, p1, p2, p3, ps);
};
G__3806.cljs$lang$maxFixedArity = 3;
G__3806.cljs$lang$applyTo = (function (arglist__3815){
var p1 = cljs.core.first(arglist__3815);
var p2 = cljs.core.first(cljs.core.next(arglist__3815));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3815)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3815)));
return G__3806__delegate.call(this, p1, p2, p3, ps);
});
return G__3806;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3777.call(this,p1);
case  2 :
return some_fn__3778.call(this,p1,p2);
case  3 :
return some_fn__3779.call(this,p1,p2,p3);
default:
return some_fn__3780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3780.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3828 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3816 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3816))
{var s__3817 = temp__3698__auto____3816;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3817)),map.call(null,f,cljs.core.rest.call(null,s__3817)));
} else
{return null;
}
})));
});
var map__3829 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3818 = cljs.core.seq.call(null,c1);
var s2__3819 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3820 = s1__3818;

if(cljs.core.truth_(and__3546__auto____3820))
{return s2__3819;
} else
{return and__3546__auto____3820;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3818),cljs.core.first.call(null,s2__3819)),map.call(null,f,cljs.core.rest.call(null,s1__3818),cljs.core.rest.call(null,s2__3819)));
} else
{return null;
}
})));
});
var map__3830 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3821 = cljs.core.seq.call(null,c1);
var s2__3822 = cljs.core.seq.call(null,c2);
var s3__3823 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3824 = s1__3821;

if(cljs.core.truth_(and__3546__auto____3824))
{var and__3546__auto____3825 = s2__3822;

if(cljs.core.truth_(and__3546__auto____3825))
{return s3__3823;
} else
{return and__3546__auto____3825;
}
} else
{return and__3546__auto____3824;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3821),cljs.core.first.call(null,s2__3822),cljs.core.first.call(null,s3__3823)),map.call(null,f,cljs.core.rest.call(null,s1__3821),cljs.core.rest.call(null,s2__3822),cljs.core.rest.call(null,s3__3823)));
} else
{return null;
}
})));
});
var map__3831 = (function() { 
var G__3833__delegate = function (f,c1,c2,c3,colls){
var step__3827 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3826 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3826)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3826),step.call(null,map.call(null,cljs.core.rest,ss__3826)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3738_SHARP_){
return cljs.core.apply.call(null,f,p1__3738_SHARP_);
}),step__3827.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3833 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3833__delegate.call(this, f, c1, c2, c3, colls);
};
G__3833.cljs$lang$maxFixedArity = 4;
G__3833.cljs$lang$applyTo = (function (arglist__3834){
var f = cljs.core.first(arglist__3834);
var c1 = cljs.core.first(cljs.core.next(arglist__3834));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3834)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3834))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3834))));
return G__3833__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3833;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3828.call(this,f,c1);
case  3 :
return map__3829.call(this,f,c1,c2);
case  4 :
return map__3830.call(this,f,c1,c2,c3);
default:
return map__3831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3831.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____3835 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3835))
{var s__3836 = temp__3698__auto____3835;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3836),take.call(null,(n - 1),cljs.core.rest.call(null,s__3836)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3839 = (function (n,coll){
while(true){
var s__3837 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3838 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3838))
{return s__3837;
} else
{return and__3546__auto____3838;
}
})()))
{{
var G__3840 = (n - 1);
var G__3841 = cljs.core.rest.call(null,s__3837);
n = G__3840;
coll = G__3841;
continue;
}
} else
{return s__3837;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3839.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3842 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3843 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3842.call(this,n);
case  2 :
return drop_last__3843.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3845 = cljs.core.seq.call(null,coll);
var lead__3846 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3846))
{{
var G__3847 = cljs.core.next.call(null,s__3845);
var G__3848 = cljs.core.next.call(null,lead__3846);
s__3845 = G__3847;
lead__3846 = G__3848;
continue;
}
} else
{return s__3845;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3851 = (function (pred,coll){
while(true){
var s__3849 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3850 = s__3849;

if(cljs.core.truth_(and__3546__auto____3850))
{return pred.call(null,cljs.core.first.call(null,s__3849));
} else
{return and__3546__auto____3850;
}
})()))
{{
var G__3852 = pred;
var G__3853 = cljs.core.rest.call(null,s__3849);
pred = G__3852;
coll = G__3853;
continue;
}
} else
{return s__3849;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3851.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3854 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3854))
{var s__3855 = temp__3698__auto____3854;

return cljs.core.concat.call(null,s__3855,cycle.call(null,s__3855));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3856 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3857 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3856.call(this,n);
case  2 :
return repeat__3857.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3859 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3860 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3859.call(this,n);
case  2 :
return repeatedly__3860.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3866 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3862 = cljs.core.seq.call(null,c1);
var s2__3863 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3864 = s1__3862;

if(cljs.core.truth_(and__3546__auto____3864))
{return s2__3863;
} else
{return and__3546__auto____3864;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3862),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3863),interleave.call(null,cljs.core.rest.call(null,s1__3862),cljs.core.rest.call(null,s2__3863))));
} else
{return null;
}
})));
});
var interleave__3867 = (function() { 
var G__3869__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3865 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3865)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3865),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3865)));
} else
{return null;
}
})));
};
var G__3869 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3869__delegate.call(this, c1, c2, colls);
};
G__3869.cljs$lang$maxFixedArity = 2;
G__3869.cljs$lang$applyTo = (function (arglist__3870){
var c1 = cljs.core.first(arglist__3870);
var c2 = cljs.core.first(cljs.core.next(arglist__3870));
var colls = cljs.core.rest(cljs.core.next(arglist__3870));
return G__3869__delegate.call(this, c1, c2, colls);
});
return G__3869;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3866.call(this,c1,c2);
default:
return interleave__3867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3867.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3873 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3871 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3871))
{var coll__3872 = temp__3695__auto____3871;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3872),cat.call(null,cljs.core.rest.call(null,coll__3872),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3873.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3874 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3875 = (function() { 
var G__3877__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3877 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3877__delegate.call(this, f, coll, colls);
};
G__3877.cljs$lang$maxFixedArity = 2;
G__3877.cljs$lang$applyTo = (function (arglist__3878){
var f = cljs.core.first(arglist__3878);
var coll = cljs.core.first(cljs.core.next(arglist__3878));
var colls = cljs.core.rest(cljs.core.next(arglist__3878));
return G__3877__delegate.call(this, f, coll, colls);
});
return G__3877;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3874.call(this,f,coll);
default:
return mapcat__3875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3875.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3879))
{var s__3880 = temp__3698__auto____3879;

var f__3881 = cljs.core.first.call(null,s__3880);
var r__3882 = cljs.core.rest.call(null,s__3880);

if(cljs.core.truth_(pred.call(null,f__3881)))
{return cljs.core.cons.call(null,f__3881,filter.call(null,pred,r__3882));
} else
{return filter.call(null,pred,r__3882);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3884 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3884.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3883_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3883_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3891 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3892 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3885))
{var s__3886 = temp__3698__auto____3885;

var p__3887 = cljs.core.take.call(null,n,s__3886);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3887))))
{return cljs.core.cons.call(null,p__3887,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3886)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3893 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3888))
{var s__3889 = temp__3698__auto____3888;

var p__3890 = cljs.core.take.call(null,n,s__3889);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3890))))
{return cljs.core.cons.call(null,p__3890,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3889)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3890,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3891.call(this,n,step);
case  3 :
return partition__3892.call(this,n,step,pad);
case  4 :
return partition__3893.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3899 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3900 = (function (m,ks,not_found){
var sentinel__3895 = cljs.core.lookup_sentinel;
var m__3896 = m;
var ks__3897 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3897))
{var m__3898 = cljs.core.get.call(null,m__3896,cljs.core.first.call(null,ks__3897),sentinel__3895);

if(cljs.core.truth_((sentinel__3895 === m__3898)))
{return not_found;
} else
{{
var G__3902 = sentinel__3895;
var G__3903 = m__3898;
var G__3904 = cljs.core.next.call(null,ks__3897);
sentinel__3895 = G__3902;
m__3896 = G__3903;
ks__3897 = G__3904;
continue;
}
}
} else
{return m__3896;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3899.call(this,m,ks);
case  3 :
return get_in__3900.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3905,v){
var vec__3906__3907 = p__3905;
var k__3908 = cljs.core.nth.call(null,vec__3906__3907,0,null);
var ks__3909 = cljs.core.nthnext.call(null,vec__3906__3907,1);

if(cljs.core.truth_(ks__3909))
{return cljs.core.assoc.call(null,m,k__3908,assoc_in.call(null,cljs.core.get.call(null,m,k__3908),ks__3909,v));
} else
{return cljs.core.assoc.call(null,m,k__3908,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3910,f,args){
var vec__3911__3912 = p__3910;
var k__3913 = cljs.core.nth.call(null,vec__3911__3912,0,null);
var ks__3914 = cljs.core.nthnext.call(null,vec__3911__3912,1);

if(cljs.core.truth_(ks__3914))
{return cljs.core.assoc.call(null,m,k__3913,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3913),ks__3914,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3913,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3913),args));
}
};
var update_in = function (m,p__3910,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3910, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3915){
var m = cljs.core.first(arglist__3915);
var p__3910 = cljs.core.first(cljs.core.next(arglist__3915));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3915)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3915)));
return update_in__delegate.call(this, m, p__3910, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3916 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3949 = null;
var G__3949__3950 = (function (coll,k){
var this__3917 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3949__3951 = (function (coll,k,not_found){
var this__3918 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3949 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3949__3950.call(this,coll,k);
case  3 :
return G__3949__3951.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3949;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3919 = this;
var new_array__3920 = cljs.core.aclone.call(null,this__3919.array);

(new_array__3920[k] = v);
return (new cljs.core.Vector(this__3919.meta,new_array__3920));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__3953 = null;
var G__3953__3954 = (function (tsym3921,k){
var this__3923 = this;
var tsym3921__3924 = this;

var coll__3925 = tsym3921__3924;

return cljs.core._lookup.call(null,coll__3925,k);
});
var G__3953__3955 = (function (tsym3922,k,not_found){
var this__3926 = this;
var tsym3922__3927 = this;

var coll__3928 = tsym3922__3927;

return cljs.core._lookup.call(null,coll__3928,k,not_found);
});
G__3953 = function(tsym3922,k,not_found){
switch(arguments.length){
case  2 :
return G__3953__3954.call(this,tsym3922,k);
case  3 :
return G__3953__3955.call(this,tsym3922,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3953;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3929 = this;
var new_array__3930 = cljs.core.aclone.call(null,this__3929.array);

new_array__3930.push(o);
return (new cljs.core.Vector(this__3929.meta,new_array__3930));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3957 = null;
var G__3957__3958 = (function (v,f){
var this__3931 = this;
return cljs.core.ci_reduce.call(null,this__3931.array,f);
});
var G__3957__3959 = (function (v,f,start){
var this__3932 = this;
return cljs.core.ci_reduce.call(null,this__3932.array,f,start);
});
G__3957 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3957__3958.call(this,v,f);
case  3 :
return G__3957__3959.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3957;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3933 = this;
if(cljs.core.truth_((this__3933.array.length > 0)))
{var vector_seq__3934 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3933.array.length)))
{return cljs.core.cons.call(null,(this__3933.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3934.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3935 = this;
return this__3935.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3936 = this;
var count__3937 = this__3936.array.length;

if(cljs.core.truth_((count__3937 > 0)))
{return (this__3936.array[(count__3937 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3938 = this;
if(cljs.core.truth_((this__3938.array.length > 0)))
{var new_array__3939 = cljs.core.aclone.call(null,this__3938.array);

new_array__3939.pop();
return (new cljs.core.Vector(this__3938.meta,new_array__3939));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3940 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3941 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3942 = this;
return (new cljs.core.Vector(meta,this__3942.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3943 = this;
return this__3943.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3961 = null;
var G__3961__3962 = (function (coll,n){
var this__3944 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3945 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3945))
{return (n < this__3944.array.length);
} else
{return and__3546__auto____3945;
}
})()))
{return (this__3944.array[n]);
} else
{return null;
}
});
var G__3961__3963 = (function (coll,n,not_found){
var this__3946 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3947 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3947))
{return (n < this__3946.array.length);
} else
{return and__3546__auto____3947;
}
})()))
{return (this__3946.array[n]);
} else
{return not_found;
}
});
G__3961 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3961__3962.call(this,coll,n);
case  3 :
return G__3961__3963.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3961;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3948 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3948.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__3965 = pv.cnt;

if(cljs.core.truth_((cnt__3965 < 32)))
{return 0;
} else
{return (((cnt__3965 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__3966 = level;
var ret__3967 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__3966)))
{return ret__3967;
} else
{var embed__3968 = ret__3967;
var r__3969 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___3970 = (r__3969[0] = embed__3968);

{
var G__3971 = (ll__3966 - 5);
var G__3972 = r__3969;
ll__3966 = G__3971;
ret__3967 = G__3972;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__3973 = cljs.core.aclone.call(null,parent);
var subidx__3974 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__3973[subidx__3974] = tailnode);
return ret__3973;
} else
{var temp__3695__auto____3975 = (parent[subidx__3974]);

if(cljs.core.truth_(temp__3695__auto____3975))
{var child__3976 = temp__3695__auto____3975;

var node_to_insert__3977 = push_tail.call(null,pv,(level - 5),child__3976,tailnode);
var ___3978 = (ret__3973[subidx__3974] = node_to_insert__3977);

return ret__3973;
} else
{var node_to_insert__3979 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___3980 = (ret__3973[subidx__3974] = node_to_insert__3979);

return ret__3973;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____3981 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____3981))
{return (i < pv.cnt);
} else
{return and__3546__auto____3981;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__3982 = pv.root;
var level__3983 = pv.shift;

while(true){
if(cljs.core.truth_((level__3983 > 0)))
{{
var G__3984 = (node__3982[((i >> level__3983) & 31)]);
var G__3985 = (level__3983 - 5);
node__3982 = G__3984;
level__3983 = G__3985;
continue;
}
} else
{return node__3982;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__3986 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__3986[(i & 31)] = val);
return ret__3986;
} else
{var subidx__3987 = ((i >> level) & 31);
var ___3988 = (ret__3986[subidx__3987] = do_assoc.call(null,pv,(level - 5),(node[subidx__3987]),i,val));

return ret__3986;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__3989 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__3990 = pop_tail.call(null,pv,(level - 5),(node[subidx__3989]));

if(cljs.core.truth_((function (){var and__3546__auto____3991 = (new_child__3990 === null);

if(cljs.core.truth_(and__3546__auto____3991))
{return (subidx__3989 === 0);
} else
{return and__3546__auto____3991;
}
})()))
{return null;
} else
{var ret__3992 = cljs.core.aclone.call(null,node);
var ___3993 = (ret__3992[subidx__3989] = new_child__3990);

return ret__3992;
}
} else
{if(cljs.core.truth_((subidx__3989 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__3994 = cljs.core.aclone.call(null,node);
var ___3995 = (ret__3994[subidx__3989] = null);

return ret__3994;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3996 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4036 = null;
var G__4036__4037 = (function (coll,k){
var this__3997 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4036__4038 = (function (coll,k,not_found){
var this__3998 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4036 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4036__4037.call(this,coll,k);
case  3 :
return G__4036__4038.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4036;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3999 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4000 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____4000))
{return (k < this__3999.cnt);
} else
{return and__3546__auto____4000;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__4001 = cljs.core.aclone.call(null,this__3999.tail);

(new_tail__4001[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__3999.meta,this__3999.cnt,this__3999.shift,this__3999.root,new_tail__4001));
} else
{return (new cljs.core.PersistentVector(this__3999.meta,this__3999.cnt,this__3999.shift,cljs.core.do_assoc.call(null,coll,this__3999.shift,this__3999.root,k,v),this__3999.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__3999.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__3999.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__4040 = null;
var G__4040__4041 = (function (tsym4002,k){
var this__4004 = this;
var tsym4002__4005 = this;

var coll__4006 = tsym4002__4005;

return cljs.core._lookup.call(null,coll__4006,k);
});
var G__4040__4042 = (function (tsym4003,k,not_found){
var this__4007 = this;
var tsym4003__4008 = this;

var coll__4009 = tsym4003__4008;

return cljs.core._lookup.call(null,coll__4009,k,not_found);
});
G__4040 = function(tsym4003,k,not_found){
switch(arguments.length){
case  2 :
return G__4040__4041.call(this,tsym4003,k);
case  3 :
return G__4040__4042.call(this,tsym4003,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4040;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4010 = this;
if(cljs.core.truth_(((this__4010.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__4011 = cljs.core.aclone.call(null,this__4010.tail);

new_tail__4011.push(o);
return (new cljs.core.PersistentVector(this__4010.meta,(this__4010.cnt + 1),this__4010.shift,this__4010.root,new_tail__4011));
} else
{var root_overflow_QMARK___4012 = ((this__4010.cnt >> 5) > (1 << this__4010.shift));
var new_shift__4013 = (cljs.core.truth_(root_overflow_QMARK___4012)?(this__4010.shift + 5):this__4010.shift);
var new_root__4015 = (cljs.core.truth_(root_overflow_QMARK___4012)?(function (){var n_r__4014 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__4014[0] = this__4010.root);
(n_r__4014[1] = cljs.core.new_path.call(null,this__4010.shift,this__4010.tail));
return n_r__4014;
})():cljs.core.push_tail.call(null,coll,this__4010.shift,this__4010.root,this__4010.tail));

return (new cljs.core.PersistentVector(this__4010.meta,(this__4010.cnt + 1),new_shift__4013,new_root__4015,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4044 = null;
var G__4044__4045 = (function (v,f){
var this__4016 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__4044__4046 = (function (v,f,start){
var this__4017 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__4044 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4044__4045.call(this,v,f);
case  3 :
return G__4044__4046.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4044;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4018 = this;
if(cljs.core.truth_((this__4018.cnt > 0)))
{var vector_seq__4019 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4018.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4019.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4020 = this;
return this__4020.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4021 = this;
if(cljs.core.truth_((this__4021.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__4021.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4022 = this;
if(cljs.core.truth_((this__4022.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__4022.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4022.meta);
} else
{if(cljs.core.truth_((1 < (this__4022.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__4022.meta,(this__4022.cnt - 1),this__4022.shift,this__4022.root,cljs.core.aclone.call(null,this__4022.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__4023 = cljs.core.array_for.call(null,coll,(this__4022.cnt - 2));
var nr__4024 = cljs.core.pop_tail.call(null,this__4022.shift,this__4022.root);
var new_root__4025 = (cljs.core.truth_((nr__4024 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__4024);
var cnt_1__4026 = (this__4022.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____4027 = (5 < this__4022.shift);

if(cljs.core.truth_(and__3546__auto____4027))
{return ((new_root__4025[1]) === null);
} else
{return and__3546__auto____4027;
}
})()))
{return (new cljs.core.PersistentVector(this__4022.meta,cnt_1__4026,(this__4022.shift - 5),(new_root__4025[0]),new_tail__4023));
} else
{return (new cljs.core.PersistentVector(this__4022.meta,cnt_1__4026,this__4022.shift,new_root__4025,new_tail__4023));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4028 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4029 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4030 = this;
return (new cljs.core.PersistentVector(meta,this__4030.cnt,this__4030.shift,this__4030.root,this__4030.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4031 = this;
return this__4031.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4048 = null;
var G__4048__4049 = (function (coll,n){
var this__4032 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__4048__4050 = (function (coll,n,not_found){
var this__4033 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4034 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4034))
{return (n < this__4033.cnt);
} else
{return and__3546__auto____4034;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__4048 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4048__4049.call(this,coll,n);
case  3 :
return G__4048__4050.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4048;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4035 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__4035.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = (new Array(32));
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__4052){
var args = cljs.core.seq( arglist__4052 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4053 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4081 = null;
var G__4081__4082 = (function (coll,k){
var this__4054 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4081__4083 = (function (coll,k,not_found){
var this__4055 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4081 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4081__4082.call(this,coll,k);
case  3 :
return G__4081__4083.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4081;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4056 = this;
var v_pos__4057 = (this__4056.start + key);

return (new cljs.core.Subvec(this__4056.meta,cljs.core._assoc.call(null,this__4056.v,v_pos__4057,val),this__4056.start,((this__4056.end > (v_pos__4057 + 1)) ? this__4056.end : (v_pos__4057 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4085 = null;
var G__4085__4086 = (function (tsym4058,k){
var this__4060 = this;
var tsym4058__4061 = this;

var coll__4062 = tsym4058__4061;

return cljs.core._lookup.call(null,coll__4062,k);
});
var G__4085__4087 = (function (tsym4059,k,not_found){
var this__4063 = this;
var tsym4059__4064 = this;

var coll__4065 = tsym4059__4064;

return cljs.core._lookup.call(null,coll__4065,k,not_found);
});
G__4085 = function(tsym4059,k,not_found){
switch(arguments.length){
case  2 :
return G__4085__4086.call(this,tsym4059,k);
case  3 :
return G__4085__4087.call(this,tsym4059,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4085;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4066 = this;
return (new cljs.core.Subvec(this__4066.meta,cljs.core._assoc_n.call(null,this__4066.v,this__4066.end,o),this__4066.start,(this__4066.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4089 = null;
var G__4089__4090 = (function (coll,f){
var this__4067 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4089__4091 = (function (coll,f,start){
var this__4068 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4089 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4089__4090.call(this,coll,f);
case  3 :
return G__4089__4091.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4089;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4069 = this;
var subvec_seq__4070 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4069.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4069.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4070.call(null,this__4069.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4071 = this;
return (this__4071.end - this__4071.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4072 = this;
return cljs.core._nth.call(null,this__4072.v,(this__4072.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4073 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4073.start,this__4073.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4073.meta,this__4073.v,this__4073.start,(this__4073.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4074 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4075 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4076 = this;
return (new cljs.core.Subvec(meta,this__4076.v,this__4076.start,this__4076.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4077 = this;
return this__4077.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4093 = null;
var G__4093__4094 = (function (coll,n){
var this__4078 = this;
return cljs.core._nth.call(null,this__4078.v,(this__4078.start + n));
});
var G__4093__4095 = (function (coll,n,not_found){
var this__4079 = this;
return cljs.core._nth.call(null,this__4079.v,(this__4079.start + n),not_found);
});
G__4093 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4093__4094.call(this,coll,n);
case  3 :
return G__4093__4095.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4093;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4080 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4080.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__4097 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4098 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4097.call(this,v,start);
case  3 :
return subvec__4098.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4100 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4101 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4102 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4103 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4103.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4104 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4105 = this;
return cljs.core._first.call(null,this__4105.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4106 = this;
var temp__3695__auto____4107 = cljs.core.next.call(null,this__4106.front);

if(cljs.core.truth_(temp__3695__auto____4107))
{var f1__4108 = temp__3695__auto____4107;

return (new cljs.core.PersistentQueueSeq(this__4106.meta,f1__4108,this__4106.rear));
} else
{if(cljs.core.truth_((this__4106.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4106.meta,this__4106.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4109 = this;
return this__4109.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4110 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4110.front,this__4110.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4111 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4112 = this;
if(cljs.core.truth_(this__4112.front))
{return (new cljs.core.PersistentQueue(this__4112.meta,(this__4112.count + 1),this__4112.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4113 = this__4112.rear;

if(cljs.core.truth_(or__3548__auto____4113))
{return or__3548__auto____4113;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4112.meta,(this__4112.count + 1),cljs.core.conj.call(null,this__4112.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4114 = this;
var rear__4115 = cljs.core.seq.call(null,this__4114.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4116 = this__4114.front;

if(cljs.core.truth_(or__3548__auto____4116))
{return or__3548__auto____4116;
} else
{return rear__4115;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4114.front,cljs.core.seq.call(null,rear__4115)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4117 = this;
return this__4117.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4118 = this;
return cljs.core._first.call(null,this__4118.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4119 = this;
if(cljs.core.truth_(this__4119.front))
{var temp__3695__auto____4120 = cljs.core.next.call(null,this__4119.front);

if(cljs.core.truth_(temp__3695__auto____4120))
{var f1__4121 = temp__3695__auto____4120;

return (new cljs.core.PersistentQueue(this__4119.meta,(this__4119.count - 1),f1__4121,this__4119.rear));
} else
{return (new cljs.core.PersistentQueue(this__4119.meta,(this__4119.count - 1),cljs.core.seq.call(null,this__4119.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4122 = this;
return cljs.core.first.call(null,this__4122.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4123 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4124 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4125 = this;
return (new cljs.core.PersistentQueue(meta,this__4125.count,this__4125.front,this__4125.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4126 = this;
return this__4126.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4127 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4128 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__4129 = array.length;

var i__4130 = 0;

while(true){
if(cljs.core.truth_((i__4130 < len__4129)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4130]))))
{return i__4130;
} else
{{
var G__4131 = (i__4130 + incr);
i__4130 = G__4131;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___4133 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4134 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4132 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4132))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4132;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___4133.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4134.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__4137 = cljs.core.hash.call(null,a);
var b__4138 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__4137 < b__4138)))
{return -1;
} else
{if(cljs.core.truth_((a__4137 > b__4138)))
{return 1;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4139 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4166 = null;
var G__4166__4167 = (function (coll,k){
var this__4140 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4166__4168 = (function (coll,k,not_found){
var this__4141 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4141.strobj,(this__4141.strobj[k]),not_found);
});
G__4166 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4166__4167.call(this,coll,k);
case  3 :
return G__4166__4168.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4166;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4142 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4143 = goog.object.clone.call(null,this__4142.strobj);
var overwrite_QMARK___4144 = new_strobj__4143.hasOwnProperty(k);

(new_strobj__4143[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4144))
{return (new cljs.core.ObjMap(this__4142.meta,this__4142.keys,new_strobj__4143));
} else
{var new_keys__4145 = cljs.core.aclone.call(null,this__4142.keys);

new_keys__4145.push(k);
return (new cljs.core.ObjMap(this__4142.meta,new_keys__4145,new_strobj__4143));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4142.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4146 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4146.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4170 = null;
var G__4170__4171 = (function (tsym4147,k){
var this__4149 = this;
var tsym4147__4150 = this;

var coll__4151 = tsym4147__4150;

return cljs.core._lookup.call(null,coll__4151,k);
});
var G__4170__4172 = (function (tsym4148,k,not_found){
var this__4152 = this;
var tsym4148__4153 = this;

var coll__4154 = tsym4148__4153;

return cljs.core._lookup.call(null,coll__4154,k,not_found);
});
G__4170 = function(tsym4148,k,not_found){
switch(arguments.length){
case  2 :
return G__4170__4171.call(this,tsym4148,k);
case  3 :
return G__4170__4172.call(this,tsym4148,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4170;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4155 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4156 = this;
if(cljs.core.truth_((this__4156.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4136_SHARP_){
return cljs.core.vector.call(null,p1__4136_SHARP_,(this__4156.strobj[p1__4136_SHARP_]));
}),this__4156.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4157 = this;
return this__4157.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4158 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4159 = this;
return (new cljs.core.ObjMap(meta,this__4159.keys,this__4159.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4160 = this;
return this__4160.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4161 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4161.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4162 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4163 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4163))
{return this__4162.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4163;
}
})()))
{var new_keys__4164 = cljs.core.aclone.call(null,this__4162.keys);
var new_strobj__4165 = goog.object.clone.call(null,this__4162.strobj);

new_keys__4164.splice(cljs.core.scan_array.call(null,1,k,new_keys__4164),1);
cljs.core.js_delete.call(null,new_strobj__4165,k);
return (new cljs.core.ObjMap(this__4162.meta,new_keys__4164,new_strobj__4165));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4175 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4213 = null;
var G__4213__4214 = (function (coll,k){
var this__4176 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4213__4215 = (function (coll,k,not_found){
var this__4177 = this;
var bucket__4178 = (this__4177.hashobj[cljs.core.hash.call(null,k)]);
var i__4179 = (cljs.core.truth_(bucket__4178)?cljs.core.scan_array.call(null,2,k,bucket__4178):null);

if(cljs.core.truth_(i__4179))
{return (bucket__4178[(i__4179 + 1)]);
} else
{return not_found;
}
});
G__4213 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4213__4214.call(this,coll,k);
case  3 :
return G__4213__4215.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4213;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4180 = this;
var h__4181 = cljs.core.hash.call(null,k);
var bucket__4182 = (this__4180.hashobj[h__4181]);

if(cljs.core.truth_(bucket__4182))
{var new_bucket__4183 = cljs.core.aclone.call(null,bucket__4182);
var new_hashobj__4184 = goog.object.clone.call(null,this__4180.hashobj);

(new_hashobj__4184[h__4181] = new_bucket__4183);
var temp__3695__auto____4185 = cljs.core.scan_array.call(null,2,k,new_bucket__4183);

if(cljs.core.truth_(temp__3695__auto____4185))
{var i__4186 = temp__3695__auto____4185;

(new_bucket__4183[(i__4186 + 1)] = v);
return (new cljs.core.HashMap(this__4180.meta,this__4180.count,new_hashobj__4184));
} else
{new_bucket__4183.push(k,v);
return (new cljs.core.HashMap(this__4180.meta,(this__4180.count + 1),new_hashobj__4184));
}
} else
{var new_hashobj__4187 = goog.object.clone.call(null,this__4180.hashobj);

(new_hashobj__4187[h__4181] = [k,v]);
return (new cljs.core.HashMap(this__4180.meta,(this__4180.count + 1),new_hashobj__4187));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4188 = this;
var bucket__4189 = (this__4188.hashobj[cljs.core.hash.call(null,k)]);
var i__4190 = (cljs.core.truth_(bucket__4189)?cljs.core.scan_array.call(null,2,k,bucket__4189):null);

if(cljs.core.truth_(i__4190))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4217 = null;
var G__4217__4218 = (function (tsym4191,k){
var this__4193 = this;
var tsym4191__4194 = this;

var coll__4195 = tsym4191__4194;

return cljs.core._lookup.call(null,coll__4195,k);
});
var G__4217__4219 = (function (tsym4192,k,not_found){
var this__4196 = this;
var tsym4192__4197 = this;

var coll__4198 = tsym4192__4197;

return cljs.core._lookup.call(null,coll__4198,k,not_found);
});
G__4217 = function(tsym4192,k,not_found){
switch(arguments.length){
case  2 :
return G__4217__4218.call(this,tsym4192,k);
case  3 :
return G__4217__4219.call(this,tsym4192,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4217;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4199 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4200 = this;
if(cljs.core.truth_((this__4200.count > 0)))
{var hashes__4201 = cljs.core.js_keys.call(null,this__4200.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4174_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4200.hashobj[p1__4174_SHARP_])));
}),hashes__4201);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4202 = this;
return this__4202.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4203 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4204 = this;
return (new cljs.core.HashMap(meta,this__4204.count,this__4204.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4205 = this;
return this__4205.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4206 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4206.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4207 = this;
var h__4208 = cljs.core.hash.call(null,k);
var bucket__4209 = (this__4207.hashobj[h__4208]);
var i__4210 = (cljs.core.truth_(bucket__4209)?cljs.core.scan_array.call(null,2,k,bucket__4209):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4210)))
{return coll;
} else
{var new_hashobj__4211 = goog.object.clone.call(null,this__4207.hashobj);

if(cljs.core.truth_((3 > bucket__4209.length)))
{cljs.core.js_delete.call(null,new_hashobj__4211,h__4208);
} else
{var new_bucket__4212 = cljs.core.aclone.call(null,bucket__4209);

new_bucket__4212.splice(i__4210,2);
(new_hashobj__4211[h__4208] = new_bucket__4212);
}
return (new cljs.core.HashMap(this__4207.meta,(this__4207.count - 1),new_hashobj__4211));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4221 = ks.length;

var i__4222 = 0;
var out__4223 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4222 < len__4221)))
{{
var G__4224 = (i__4222 + 1);
var G__4225 = cljs.core.assoc.call(null,out__4223,(ks[i__4222]),(vs[i__4222]));
i__4222 = G__4224;
out__4223 = G__4225;
continue;
}
} else
{return out__4223;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__4226 = cljs.core.seq.call(null,keyvals);
var out__4227 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4226))
{{
var G__4228 = cljs.core.nnext.call(null,in$__4226);
var G__4229 = cljs.core.assoc.call(null,out__4227,cljs.core.first.call(null,in$__4226),cljs.core.second.call(null,in$__4226));
in$__4226 = G__4228;
out__4227 = G__4229;
continue;
}
} else
{return out__4227;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__4230){
var keyvals = cljs.core.seq( arglist__4230 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__4231_SHARP_,p2__4232_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4233 = p1__4231_SHARP_;

if(cljs.core.truth_(or__3548__auto____4233))
{return or__3548__auto____4233;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4232_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__4234){
var maps = cljs.core.seq( arglist__4234 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__4237 = (function (m,e){
var k__4235 = cljs.core.first.call(null,e);
var v__4236 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4235)))
{return cljs.core.assoc.call(null,m,k__4235,f.call(null,cljs.core.get.call(null,m,k__4235),v__4236));
} else
{return cljs.core.assoc.call(null,m,k__4235,v__4236);
}
});
var merge2__4239 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4237,(function (){var or__3548__auto____4238 = m1;

if(cljs.core.truth_(or__3548__auto____4238))
{return or__3548__auto____4238;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4239,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__4240){
var f = cljs.core.first(arglist__4240);
var maps = cljs.core.rest(arglist__4240);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4242 = cljs.core.ObjMap.fromObject([],{});
var keys__4243 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4243))
{var key__4244 = cljs.core.first.call(null,keys__4243);
var entry__4245 = cljs.core.get.call(null,map,key__4244,"\uFDD0'user/not-found");

{
var G__4246 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4245,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__4242,key__4244,entry__4245):ret__4242);
var G__4247 = cljs.core.next.call(null,keys__4243);
ret__4242 = G__4246;
keys__4243 = G__4247;
continue;
}
} else
{return ret__4242;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4248 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4269 = null;
var G__4269__4270 = (function (coll,v){
var this__4249 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4269__4271 = (function (coll,v,not_found){
var this__4250 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4250.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4269 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4269__4270.call(this,coll,v);
case  3 :
return G__4269__4271.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4269;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4273 = null;
var G__4273__4274 = (function (tsym4251,k){
var this__4253 = this;
var tsym4251__4254 = this;

var coll__4255 = tsym4251__4254;

return cljs.core._lookup.call(null,coll__4255,k);
});
var G__4273__4275 = (function (tsym4252,k,not_found){
var this__4256 = this;
var tsym4252__4257 = this;

var coll__4258 = tsym4252__4257;

return cljs.core._lookup.call(null,coll__4258,k,not_found);
});
G__4273 = function(tsym4252,k,not_found){
switch(arguments.length){
case  2 :
return G__4273__4274.call(this,tsym4252,k);
case  3 :
return G__4273__4275.call(this,tsym4252,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4273;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4259 = this;
return (new cljs.core.Set(this__4259.meta,cljs.core.assoc.call(null,this__4259.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4260 = this;
return cljs.core.keys.call(null,this__4260.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4261 = this;
return (new cljs.core.Set(this__4261.meta,cljs.core.dissoc.call(null,this__4261.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4262 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4263 = this;
var and__3546__auto____4264 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4264))
{var and__3546__auto____4265 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4265))
{return cljs.core.every_QMARK_.call(null,(function (p1__4241_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4241_SHARP_);
}),other);
} else
{return and__3546__auto____4265;
}
} else
{return and__3546__auto____4264;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4266 = this;
return (new cljs.core.Set(meta,this__4266.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4267 = this;
return this__4267.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4268 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4268.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4278 = cljs.core.seq.call(null,coll);
var out__4279 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4278))))
{{
var G__4280 = cljs.core.rest.call(null,in$__4278);
var G__4281 = cljs.core.conj.call(null,out__4279,cljs.core.first.call(null,in$__4278));
in$__4278 = G__4280;
out__4279 = G__4281;
continue;
}
} else
{return out__4279;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__4282 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4283 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4283))
{var e__4284 = temp__3695__auto____4283;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4284));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4282,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4277_SHARP_){
var temp__3695__auto____4285 = cljs.core.find.call(null,smap,p1__4277_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4285))
{var e__4286 = temp__3695__auto____4285;

return cljs.core.second.call(null,e__4286);
} else
{return p1__4277_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4294 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4287,seen){
while(true){
var vec__4288__4289 = p__4287;
var f__4290 = cljs.core.nth.call(null,vec__4288__4289,0,null);
var xs__4291 = vec__4288__4289;

var temp__3698__auto____4292 = cljs.core.seq.call(null,xs__4291);

if(cljs.core.truth_(temp__3698__auto____4292))
{var s__4293 = temp__3698__auto____4292;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4290)))
{{
var G__4295 = cljs.core.rest.call(null,s__4293);
var G__4296 = seen;
p__4287 = G__4295;
seen = G__4296;
continue;
}
} else
{return cljs.core.cons.call(null,f__4290,step.call(null,cljs.core.rest.call(null,s__4293),cljs.core.conj.call(null,seen,f__4290)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4294.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4297 = cljs.core.PersistentVector.fromArray([]);
var s__4298 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4298)))
{{
var G__4299 = cljs.core.conj.call(null,ret__4297,cljs.core.first.call(null,s__4298));
var G__4300 = cljs.core.next.call(null,s__4298);
ret__4297 = G__4299;
s__4298 = G__4300;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4297);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4301 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4301))
{return or__3548__auto____4301;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4302 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4302 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4302 + 1));
}
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____4303 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4303))
{return or__3548__auto____4303;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4304 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4304 > -1)))
{return cljs.core.subs.call(null,x,2,i__4304);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__4307 = cljs.core.ObjMap.fromObject([],{});
var ks__4308 = cljs.core.seq.call(null,keys);
var vs__4309 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4310 = ks__4308;

if(cljs.core.truth_(and__3546__auto____4310))
{return vs__4309;
} else
{return and__3546__auto____4310;
}
})()))
{{
var G__4311 = cljs.core.assoc.call(null,map__4307,cljs.core.first.call(null,ks__4308),cljs.core.first.call(null,vs__4309));
var G__4312 = cljs.core.next.call(null,ks__4308);
var G__4313 = cljs.core.next.call(null,vs__4309);
map__4307 = G__4311;
ks__4308 = G__4312;
vs__4309 = G__4313;
continue;
}
} else
{return map__4307;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__4316 = (function (k,x){
return x;
});
var max_key__4317 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4318 = (function() { 
var G__4320__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4305_SHARP_,p2__4306_SHARP_){
return max_key.call(null,k,p1__4305_SHARP_,p2__4306_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4320 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4320__delegate.call(this, k, x, y, more);
};
G__4320.cljs$lang$maxFixedArity = 3;
G__4320.cljs$lang$applyTo = (function (arglist__4321){
var k = cljs.core.first(arglist__4321);
var x = cljs.core.first(cljs.core.next(arglist__4321));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4321)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4321)));
return G__4320__delegate.call(this, k, x, y, more);
});
return G__4320;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4316.call(this,k,x);
case  3 :
return max_key__4317.call(this,k,x,y);
default:
return max_key__4318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4318.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4322 = (function (k,x){
return x;
});
var min_key__4323 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4324 = (function() { 
var G__4326__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4314_SHARP_,p2__4315_SHARP_){
return min_key.call(null,k,p1__4314_SHARP_,p2__4315_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4326 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4326__delegate.call(this, k, x, y, more);
};
G__4326.cljs$lang$maxFixedArity = 3;
G__4326.cljs$lang$applyTo = (function (arglist__4327){
var k = cljs.core.first(arglist__4327);
var x = cljs.core.first(cljs.core.next(arglist__4327));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4327)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4327)));
return G__4326__delegate.call(this, k, x, y, more);
});
return G__4326;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4322.call(this,k,x);
case  3 :
return min_key__4323.call(this,k,x,y);
default:
return min_key__4324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4324.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4330 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4331 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4328 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4328))
{var s__4329 = temp__3698__auto____4328;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4329),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4329)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4330.call(this,n,step);
case  3 :
return partition_all__4331.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4333 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4333))
{var s__4334 = temp__3698__auto____4333;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4334))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4334),take_while.call(null,pred,cljs.core.rest.call(null,s__4334)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__4335 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4336 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4352 = null;
var G__4352__4353 = (function (rng,f){
var this__4337 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4352__4354 = (function (rng,f,s){
var this__4338 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4352 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4352__4353.call(this,rng,f);
case  3 :
return G__4352__4354.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4352;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4339 = this;
var comp__4340 = (cljs.core.truth_((this__4339.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4340.call(null,this__4339.start,this__4339.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4341 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4341.end - this__4341.start) / this__4341.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4342 = this;
return this__4342.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4343 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4343.meta,(this__4343.start + this__4343.step),this__4343.end,this__4343.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4344 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4345 = this;
return (new cljs.core.Range(meta,this__4345.start,this__4345.end,this__4345.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4346 = this;
return this__4346.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4356 = null;
var G__4356__4357 = (function (rng,n){
var this__4347 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4347.start + (n * this__4347.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4348 = (this__4347.start > this__4347.end);

if(cljs.core.truth_(and__3546__auto____4348))
{return cljs.core._EQ_.call(null,this__4347.step,0);
} else
{return and__3546__auto____4348;
}
})()))
{return this__4347.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4356__4358 = (function (rng,n,not_found){
var this__4349 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4349.start + (n * this__4349.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4350 = (this__4349.start > this__4349.end);

if(cljs.core.truth_(and__3546__auto____4350))
{return cljs.core._EQ_.call(null,this__4349.step,0);
} else
{return and__3546__auto____4350;
}
})()))
{return this__4349.start;
} else
{return not_found;
}
}
});
G__4356 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4356__4357.call(this,rng,n);
case  3 :
return G__4356__4358.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4356;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4351 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4351.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4360 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4361 = (function (end){
return range.call(null,0,end,1);
});
var range__4362 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4363 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4360.call(this);
case  1 :
return range__4361.call(this,start);
case  2 :
return range__4362.call(this,start,end);
case  3 :
return range__4363.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4365 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4365))
{var s__4366 = temp__3698__auto____4365;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4366),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4366)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4368))
{var s__4369 = temp__3698__auto____4368;

var fst__4370 = cljs.core.first.call(null,s__4369);
var fv__4371 = f.call(null,fst__4370);
var run__4372 = cljs.core.cons.call(null,fst__4370,cljs.core.take_while.call(null,(function (p1__4367_SHARP_){
return cljs.core._EQ_.call(null,fv__4371,f.call(null,p1__4367_SHARP_));
}),cljs.core.next.call(null,s__4369)));

return cljs.core.cons.call(null,run__4372,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4372),s__4369))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__4387 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4383 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4383))
{var s__4384 = temp__3695__auto____4383;

return reductions.call(null,f,cljs.core.first.call(null,s__4384),cljs.core.rest.call(null,s__4384));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4388 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4385 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4385))
{var s__4386 = temp__3698__auto____4385;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4386)),cljs.core.rest.call(null,s__4386));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4387.call(this,f,init);
case  3 :
return reductions__4388.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__4391 = (function (f){
return (function() {
var G__4396 = null;
var G__4396__4397 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4396__4398 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4396__4399 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4396__4400 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4396__4401 = (function() { 
var G__4403__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4403 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4403__delegate.call(this, x, y, z, args);
};
G__4403.cljs$lang$maxFixedArity = 3;
G__4403.cljs$lang$applyTo = (function (arglist__4404){
var x = cljs.core.first(arglist__4404);
var y = cljs.core.first(cljs.core.next(arglist__4404));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4404)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4404)));
return G__4403__delegate.call(this, x, y, z, args);
});
return G__4403;
})()
;
G__4396 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4396__4397.call(this);
case  1 :
return G__4396__4398.call(this,x);
case  2 :
return G__4396__4399.call(this,x,y);
case  3 :
return G__4396__4400.call(this,x,y,z);
default:
return G__4396__4401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4396.cljs$lang$maxFixedArity = 3;
G__4396.cljs$lang$applyTo = G__4396__4401.cljs$lang$applyTo;
return G__4396;
})()
});
var juxt__4392 = (function (f,g){
return (function() {
var G__4405 = null;
var G__4405__4406 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4405__4407 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4405__4408 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4405__4409 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4405__4410 = (function() { 
var G__4412__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4412 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4412__delegate.call(this, x, y, z, args);
};
G__4412.cljs$lang$maxFixedArity = 3;
G__4412.cljs$lang$applyTo = (function (arglist__4413){
var x = cljs.core.first(arglist__4413);
var y = cljs.core.first(cljs.core.next(arglist__4413));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4413)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4413)));
return G__4412__delegate.call(this, x, y, z, args);
});
return G__4412;
})()
;
G__4405 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4405__4406.call(this);
case  1 :
return G__4405__4407.call(this,x);
case  2 :
return G__4405__4408.call(this,x,y);
case  3 :
return G__4405__4409.call(this,x,y,z);
default:
return G__4405__4410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4405.cljs$lang$maxFixedArity = 3;
G__4405.cljs$lang$applyTo = G__4405__4410.cljs$lang$applyTo;
return G__4405;
})()
});
var juxt__4393 = (function (f,g,h){
return (function() {
var G__4414 = null;
var G__4414__4415 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4414__4416 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4414__4417 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4414__4418 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4414__4419 = (function() { 
var G__4421__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4421 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4421__delegate.call(this, x, y, z, args);
};
G__4421.cljs$lang$maxFixedArity = 3;
G__4421.cljs$lang$applyTo = (function (arglist__4422){
var x = cljs.core.first(arglist__4422);
var y = cljs.core.first(cljs.core.next(arglist__4422));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4422)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4422)));
return G__4421__delegate.call(this, x, y, z, args);
});
return G__4421;
})()
;
G__4414 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4414__4415.call(this);
case  1 :
return G__4414__4416.call(this,x);
case  2 :
return G__4414__4417.call(this,x,y);
case  3 :
return G__4414__4418.call(this,x,y,z);
default:
return G__4414__4419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4414.cljs$lang$maxFixedArity = 3;
G__4414.cljs$lang$applyTo = G__4414__4419.cljs$lang$applyTo;
return G__4414;
})()
});
var juxt__4394 = (function() { 
var G__4423__delegate = function (f,g,h,fs){
var fs__4390 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4424 = null;
var G__4424__4425 = (function (){
return cljs.core.reduce.call(null,(function (p1__4373_SHARP_,p2__4374_SHARP_){
return cljs.core.conj.call(null,p1__4373_SHARP_,p2__4374_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__4390);
});
var G__4424__4426 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4375_SHARP_,p2__4376_SHARP_){
return cljs.core.conj.call(null,p1__4375_SHARP_,p2__4376_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__4390);
});
var G__4424__4427 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4377_SHARP_,p2__4378_SHARP_){
return cljs.core.conj.call(null,p1__4377_SHARP_,p2__4378_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__4390);
});
var G__4424__4428 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4379_SHARP_,p2__4380_SHARP_){
return cljs.core.conj.call(null,p1__4379_SHARP_,p2__4380_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__4390);
});
var G__4424__4429 = (function() { 
var G__4431__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4381_SHARP_,p2__4382_SHARP_){
return cljs.core.conj.call(null,p1__4381_SHARP_,cljs.core.apply.call(null,p2__4382_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__4390);
};
var G__4431 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4431__delegate.call(this, x, y, z, args);
};
G__4431.cljs$lang$maxFixedArity = 3;
G__4431.cljs$lang$applyTo = (function (arglist__4432){
var x = cljs.core.first(arglist__4432);
var y = cljs.core.first(cljs.core.next(arglist__4432));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4432)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4432)));
return G__4431__delegate.call(this, x, y, z, args);
});
return G__4431;
})()
;
G__4424 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4424__4425.call(this);
case  1 :
return G__4424__4426.call(this,x);
case  2 :
return G__4424__4427.call(this,x,y);
case  3 :
return G__4424__4428.call(this,x,y,z);
default:
return G__4424__4429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4424.cljs$lang$maxFixedArity = 3;
G__4424.cljs$lang$applyTo = G__4424__4429.cljs$lang$applyTo;
return G__4424;
})()
};
var G__4423 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4423__delegate.call(this, f, g, h, fs);
};
G__4423.cljs$lang$maxFixedArity = 3;
G__4423.cljs$lang$applyTo = (function (arglist__4433){
var f = cljs.core.first(arglist__4433);
var g = cljs.core.first(cljs.core.next(arglist__4433));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4433)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4433)));
return G__4423__delegate.call(this, f, g, h, fs);
});
return G__4423;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4391.call(this,f);
case  2 :
return juxt__4392.call(this,f,g);
case  3 :
return juxt__4393.call(this,f,g,h);
default:
return juxt__4394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4394.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__4435 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4438 = cljs.core.next.call(null,coll);
coll = G__4438;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4436 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4434 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4434))
{return (n > 0);
} else
{return and__3546__auto____4434;
}
})()))
{{
var G__4439 = (n - 1);
var G__4440 = cljs.core.next.call(null,coll);
n = G__4439;
coll = G__4440;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__4435.call(this,n);
case  2 :
return dorun__4436.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__4441 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4442 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4441.call(this,n);
case  2 :
return doall__4442.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__4444 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4444),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4444),1)))
{return cljs.core.first.call(null,matches__4444);
} else
{return cljs.core.vec.call(null,matches__4444);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__4445 = re.exec(s);

if(cljs.core.truth_((matches__4445 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4445),1)))
{return cljs.core.first.call(null,matches__4445);
} else
{return cljs.core.vec.call(null,matches__4445);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4446 = cljs.core.re_find.call(null,re,s);
var match_idx__4447 = s.search(re);
var match_str__4448 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4446))?cljs.core.first.call(null,match_data__4446):match_data__4446);
var post_match__4449 = cljs.core.subs.call(null,s,(match_idx__4447 + cljs.core.count.call(null,match_str__4448)));

if(cljs.core.truth_(match_data__4446))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4446,re_seq.call(null,re,post_match__4449));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__4451__4452 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___4453 = cljs.core.nth.call(null,vec__4451__4452,0,null);
var flags__4454 = cljs.core.nth.call(null,vec__4451__4452,1,null);
var pattern__4455 = cljs.core.nth.call(null,vec__4451__4452,2,null);

return (new RegExp(pattern__4455,flags__4454));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4450_SHARP_){
return print_one.call(null,p1__4450_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_((obj === null)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4456 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____4456))
{var and__3546__auto____4460 = (function (){var x__359__auto____4457 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4458 = x__359__auto____4457;

if(cljs.core.truth_(and__3546__auto____4458))
{var and__3546__auto____4459 = x__359__auto____4457.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4459))
{return cljs.core.not.call(null,x__359__auto____4457.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4459;
}
} else
{return and__3546__auto____4458;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__359__auto____4457);
}
})();

if(cljs.core.truth_(and__3546__auto____4460))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4460;
}
} else
{return and__3546__auto____4456;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__359__auto____4461 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4462 = x__359__auto____4461;

if(cljs.core.truth_(and__3546__auto____4462))
{var and__3546__auto____4463 = x__359__auto____4461.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4463))
{return cljs.core.not.call(null,x__359__auto____4461.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4463;
}
} else
{return and__3546__auto____4462;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__359__auto____4461);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__4464 = cljs.core.first.call(null,objs);
var sb__4465 = (new goog.string.StringBuffer());

var G__4466__4467 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4466__4467))
{var obj__4468 = cljs.core.first.call(null,G__4466__4467);
var G__4466__4469 = G__4466__4467;

while(true){
if(cljs.core.truth_((obj__4468 === first_obj__4464)))
{} else
{sb__4465.append(" ");
}
var G__4470__4471 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4468,opts));

if(cljs.core.truth_(G__4470__4471))
{var string__4472 = cljs.core.first.call(null,G__4470__4471);
var G__4470__4473 = G__4470__4471;

while(true){
sb__4465.append(string__4472);
var temp__3698__auto____4474 = cljs.core.next.call(null,G__4470__4473);

if(cljs.core.truth_(temp__3698__auto____4474))
{var G__4470__4475 = temp__3698__auto____4474;

{
var G__4478 = cljs.core.first.call(null,G__4470__4475);
var G__4479 = G__4470__4475;
string__4472 = G__4478;
G__4470__4473 = G__4479;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4476 = cljs.core.next.call(null,G__4466__4469);

if(cljs.core.truth_(temp__3698__auto____4476))
{var G__4466__4477 = temp__3698__auto____4476;

{
var G__4480 = cljs.core.first.call(null,G__4466__4477);
var G__4481 = G__4466__4477;
obj__4468 = G__4480;
G__4466__4469 = G__4481;
continue;
}
} else
{}
break;
}
} else
{}
return sb__4465;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.call(null,cljs.core.pr_sb.call(null,objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__4482 = cljs.core.pr_sb.call(null,objs,opts);

sb__4482.append("\n");
return cljs.core.str.call(null,sb__4482);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4483 = cljs.core.first.call(null,objs);

var G__4484__4485 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4484__4485))
{var obj__4486 = cljs.core.first.call(null,G__4484__4485);
var G__4484__4487 = G__4484__4485;

while(true){
if(cljs.core.truth_((obj__4486 === first_obj__4483)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4488__4489 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4486,opts));

if(cljs.core.truth_(G__4488__4489))
{var string__4490 = cljs.core.first.call(null,G__4488__4489);
var G__4488__4491 = G__4488__4489;

while(true){
cljs.core.string_print.call(null,string__4490);
var temp__3698__auto____4492 = cljs.core.next.call(null,G__4488__4491);

if(cljs.core.truth_(temp__3698__auto____4492))
{var G__4488__4493 = temp__3698__auto____4492;

{
var G__4496 = cljs.core.first.call(null,G__4488__4493);
var G__4497 = G__4488__4493;
string__4490 = G__4496;
G__4488__4491 = G__4497;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4494 = cljs.core.next.call(null,G__4484__4487);

if(cljs.core.truth_(temp__3698__auto____4494))
{var G__4484__4495 = temp__3698__auto____4494;

{
var G__4498 = cljs.core.first.call(null,G__4484__4495);
var G__4499 = G__4484__4495;
obj__4486 = G__4498;
G__4484__4487 = G__4499;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__4500){
var objs = cljs.core.seq( arglist__4500 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__4501){
var objs = cljs.core.seq( arglist__4501 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__4502){
var objs = cljs.core.seq( arglist__4502 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__4503){
var objs = cljs.core.seq( arglist__4503 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__4504){
var objs = cljs.core.seq( arglist__4504 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__4505){
var objs = cljs.core.seq( arglist__4505 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__4506){
var objs = cljs.core.seq( arglist__4506 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__4507){
var objs = cljs.core.seq( arglist__4507 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4508 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4508,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4509 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4509))
{var nspc__4510 = temp__3698__auto____4509;

return cljs.core.str.call(null,nspc__4510,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4511 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4511))
{var nspc__4512 = temp__3698__auto____4511;

return cljs.core.str.call(null,nspc__4512,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4513 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4513,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4514 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4515 = this;
var G__4516__4517 = cljs.core.seq.call(null,this__4515.watches);

if(cljs.core.truth_(G__4516__4517))
{var G__4519__4521 = cljs.core.first.call(null,G__4516__4517);
var vec__4520__4522 = G__4519__4521;
var key__4523 = cljs.core.nth.call(null,vec__4520__4522,0,null);
var f__4524 = cljs.core.nth.call(null,vec__4520__4522,1,null);
var G__4516__4525 = G__4516__4517;

var G__4519__4526 = G__4519__4521;
var G__4516__4527 = G__4516__4525;

while(true){
var vec__4528__4529 = G__4519__4526;
var key__4530 = cljs.core.nth.call(null,vec__4528__4529,0,null);
var f__4531 = cljs.core.nth.call(null,vec__4528__4529,1,null);
var G__4516__4532 = G__4516__4527;

f__4531.call(null,key__4530,this$,oldval,newval);
var temp__3698__auto____4533 = cljs.core.next.call(null,G__4516__4532);

if(cljs.core.truth_(temp__3698__auto____4533))
{var G__4516__4534 = temp__3698__auto____4533;

{
var G__4541 = cljs.core.first.call(null,G__4516__4534);
var G__4542 = G__4516__4534;
G__4519__4526 = G__4541;
G__4516__4527 = G__4542;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__4535 = this;
return this$.watches = cljs.core.assoc.call(null,this__4535.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4536 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4536.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4537 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4537.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4538 = this;
return this__4538.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4539 = this;
return this__4539.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4540 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__4549 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4550 = (function() { 
var G__4552__delegate = function (x,p__4543){
var map__4544__4545 = p__4543;
var map__4544__4546 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4544__4545))?cljs.core.apply.call(null,cljs.core.hash_map,map__4544__4545):map__4544__4545);
var validator__4547 = cljs.core.get.call(null,map__4544__4546,"\uFDD0'validator");
var meta__4548 = cljs.core.get.call(null,map__4544__4546,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__4548,validator__4547,null));
};
var G__4552 = function (x,var_args){
var p__4543 = null;
if (goog.isDef(var_args)) {
  p__4543 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4552__delegate.call(this, x, p__4543);
};
G__4552.cljs$lang$maxFixedArity = 1;
G__4552.cljs$lang$applyTo = (function (arglist__4553){
var x = cljs.core.first(arglist__4553);
var p__4543 = cljs.core.rest(arglist__4553);
return G__4552__delegate.call(this, x, p__4543);
});
return G__4552;
})()
;
atom = function(x,var_args){
var p__4543 = var_args;
switch(arguments.length){
case  1 :
return atom__4549.call(this,x);
default:
return atom__4550.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4550.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4554 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4554))
{var validate__4555 = temp__3698__auto____4554;

if(cljs.core.truth_(validate__4555.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__4556 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4556,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___4557 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4558 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4559 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4560 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4561 = (function() { 
var G__4563__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4563 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4563__delegate.call(this, a, f, x, y, z, more);
};
G__4563.cljs$lang$maxFixedArity = 5;
G__4563.cljs$lang$applyTo = (function (arglist__4564){
var a = cljs.core.first(arglist__4564);
var f = cljs.core.first(cljs.core.next(arglist__4564));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4564)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4564))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4564)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4564)))));
return G__4563__delegate.call(this, a, f, x, y, z, more);
});
return G__4563;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4557.call(this,a,f);
case  3 :
return swap_BANG___4558.call(this,a,f,x);
case  4 :
return swap_BANG___4559.call(this,a,f,x,y);
case  5 :
return swap_BANG___4560.call(this,a,f,x,y,z);
default:
return swap_BANG___4561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4561.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4565){
var iref = cljs.core.first(arglist__4565);
var f = cljs.core.first(cljs.core.next(arglist__4565));
var args = cljs.core.rest(cljs.core.next(arglist__4565));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__4566 = (function (){
return gensym.call(null,"G__");
});
var gensym__4567 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4566.call(this);
case  1 :
return gensym__4567.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__4569 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__4569.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4570 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__4570.state,(function (p__4571){
var curr_state__4572 = p__4571;
var curr_state__4573 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__4572))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__4572):curr_state__4572);
var done__4574 = cljs.core.get.call(null,curr_state__4573,"\uFDD0'done");

if(cljs.core.truth_(done__4574))
{return curr_state__4573;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__4570.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__4575__4576 = options;
var map__4575__4577 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4575__4576))?cljs.core.apply.call(null,cljs.core.hash_map,map__4575__4576):map__4575__4576);
var keywordize_keys__4578 = cljs.core.get.call(null,map__4575__4577,"\uFDD0'keywordize-keys");
var keyfn__4579 = (cljs.core.truth_(keywordize_keys__4578)?cljs.core.keyword:cljs.core.str);
var f__4585 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__428__auto____4584 = (function iter__4580(s__4581){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4581__4582 = s__4581;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4581__4582)))
{var k__4583 = cljs.core.first.call(null,s__4581__4582);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__4579.call(null,k__4583),thisfn.call(null,(x[k__4583]))]),iter__4580.call(null,cljs.core.rest.call(null,s__4581__4582)));
} else
{return null;
}
break;
}
})));
});

return iter__428__auto____4584.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__4585.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4586){
var x = cljs.core.first(arglist__4586);
var options = cljs.core.rest(arglist__4586);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__4587 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4591__delegate = function (args){
var temp__3695__auto____4588 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4587),args);

if(cljs.core.truth_(temp__3695__auto____4588))
{var v__4589 = temp__3695__auto____4588;

return v__4589;
} else
{var ret__4590 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4587,cljs.core.assoc,args,ret__4590);
return ret__4590;
}
};
var G__4591 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4591__delegate.call(this, args);
};
G__4591.cljs$lang$maxFixedArity = 0;
G__4591.cljs$lang$applyTo = (function (arglist__4592){
var args = cljs.core.seq( arglist__4592 );;
return G__4591__delegate.call(this, args);
});
return G__4591;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__4594 = (function (f){
while(true){
var ret__4593 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4593)))
{{
var G__4597 = ret__4593;
f = G__4597;
continue;
}
} else
{return ret__4593;
}
break;
}
});
var trampoline__4595 = (function() { 
var G__4598__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4598 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4598__delegate.call(this, f, args);
};
G__4598.cljs$lang$maxFixedArity = 1;
G__4598.cljs$lang$applyTo = (function (arglist__4599){
var f = cljs.core.first(arglist__4599);
var args = cljs.core.rest(arglist__4599);
return G__4598__delegate.call(this, f, args);
});
return G__4598;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4594.call(this,f);
default:
return trampoline__4595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4595.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4600 = (function (){
return rand.call(null,1);
});
var rand__4601 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4600.call(this);
case  1 :
return rand__4601.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__4603 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4603,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4603,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___4612 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4613 = (function (h,child,parent){
var or__3548__auto____4604 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4604))
{return or__3548__auto____4604;
} else
{var or__3548__auto____4605 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4605))
{return or__3548__auto____4605;
} else
{var and__3546__auto____4606 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4606))
{var and__3546__auto____4607 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4607))
{var and__3546__auto____4608 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4608))
{var ret__4609 = true;
var i__4610 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4611 = cljs.core.not.call(null,ret__4609);

if(cljs.core.truth_(or__3548__auto____4611))
{return or__3548__auto____4611;
} else
{return cljs.core._EQ_.call(null,i__4610,cljs.core.count.call(null,parent));
}
})()))
{return ret__4609;
} else
{{
var G__4615 = isa_QMARK_.call(null,h,child.call(null,i__4610),parent.call(null,i__4610));
var G__4616 = (i__4610 + 1);
ret__4609 = G__4615;
i__4610 = G__4616;
continue;
}
}
break;
}
} else
{return and__3546__auto____4608;
}
} else
{return and__3546__auto____4607;
}
} else
{return and__3546__auto____4606;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4612.call(this,h,child);
case  3 :
return isa_QMARK___4613.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__4617 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4618 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4617.call(this,h);
case  2 :
return parents__4618.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__4620 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4621 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4620.call(this,h);
case  2 :
return ancestors__4621.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__4623 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4624 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4623.call(this,h);
case  2 :
return descendants__4624.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__4634 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4635 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__4629 = "\uFDD0'parents".call(null,h);
var td__4630 = "\uFDD0'descendants".call(null,h);
var ta__4631 = "\uFDD0'ancestors".call(null,h);
var tf__4632 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4633 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4629.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4631.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4631.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4629,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__4632.call(null,"\uFDD0'ancestors".call(null,h),tag,td__4630,parent,ta__4631),"\uFDD0'descendants":tf__4632.call(null,"\uFDD0'descendants".call(null,h),parent,ta__4631,tag,td__4630)});
})());

if(cljs.core.truth_(or__3548__auto____4633))
{return or__3548__auto____4633;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4634.call(this,h,tag);
case  3 :
return derive__4635.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__4641 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4642 = (function (h,tag,parent){
var parentMap__4637 = "\uFDD0'parents".call(null,h);
var childsParents__4638 = (cljs.core.truth_(parentMap__4637.call(null,tag))?cljs.core.disj.call(null,parentMap__4637.call(null,tag),parent):cljs.core.set([]));
var newParents__4639 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4638))?cljs.core.assoc.call(null,parentMap__4637,tag,childsParents__4638):cljs.core.dissoc.call(null,parentMap__4637,tag));
var deriv_seq__4640 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4626_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4626_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4626_SHARP_),cljs.core.second.call(null,p1__4626_SHARP_)));
}),cljs.core.seq.call(null,newParents__4639)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4637.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4627_SHARP_,p2__4628_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4627_SHARP_,p2__4628_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4640));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4641.call(this,h,tag);
case  3 :
return underive__4642.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__4644 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4646 = (cljs.core.truth_((function (){var and__3546__auto____4645 = xprefs__4644;

if(cljs.core.truth_(and__3546__auto____4645))
{return xprefs__4644.call(null,y);
} else
{return and__3546__auto____4645;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4646))
{return or__3548__auto____4646;
} else
{var or__3548__auto____4648 = (function (){var ps__4647 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4647) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4647),prefer_table)))
{} else
{}
{
var G__4651 = cljs.core.rest.call(null,ps__4647);
ps__4647 = G__4651;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4648))
{return or__3548__auto____4648;
} else
{var or__3548__auto____4650 = (function (){var ps__4649 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4649) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4649),y,prefer_table)))
{} else
{}
{
var G__4652 = cljs.core.rest.call(null,ps__4649);
ps__4649 = G__4652;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4650))
{return or__3548__auto____4650;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4653 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4653))
{return or__3548__auto____4653;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4662 = cljs.core.reduce.call(null,(function (be,p__4654){
var vec__4655__4656 = p__4654;
var k__4657 = cljs.core.nth.call(null,vec__4655__4656,0,null);
var ___4658 = cljs.core.nth.call(null,vec__4655__4656,1,null);
var e__4659 = vec__4655__4656;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4657)))
{var be2__4661 = (cljs.core.truth_((function (){var or__3548__auto____4660 = (be === null);

if(cljs.core.truth_(or__3548__auto____4660))
{return or__3548__auto____4660;
} else
{return cljs.core.dominates.call(null,k__4657,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4659:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4661),k__4657,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4657," and ",cljs.core.first.call(null,be2__4661),", and neither is preferred")));
}
return be2__4661;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4662))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4662));
return cljs.core.second.call(null,best_entry__4662);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4663 = mf;

if(cljs.core.truth_(and__3546__auto____4663))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4663;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4664 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4664))
{return or__3548__auto____4664;
} else
{var or__3548__auto____4665 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4665))
{return or__3548__auto____4665;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4666 = mf;

if(cljs.core.truth_(and__3546__auto____4666))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4666;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4667 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4667))
{return or__3548__auto____4667;
} else
{var or__3548__auto____4668 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4668))
{return or__3548__auto____4668;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4669 = mf;

if(cljs.core.truth_(and__3546__auto____4669))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4669;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4670 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4670))
{return or__3548__auto____4670;
} else
{var or__3548__auto____4671 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4671))
{return or__3548__auto____4671;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4672 = mf;

if(cljs.core.truth_(and__3546__auto____4672))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4672;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4673 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4673))
{return or__3548__auto____4673;
} else
{var or__3548__auto____4674 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4674))
{return or__3548__auto____4674;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4675 = mf;

if(cljs.core.truth_(and__3546__auto____4675))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4675;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4676 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4676))
{return or__3548__auto____4676;
} else
{var or__3548__auto____4677 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4677))
{return or__3548__auto____4677;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4678 = mf;

if(cljs.core.truth_(and__3546__auto____4678))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4678;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4679 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4679))
{return or__3548__auto____4679;
} else
{var or__3548__auto____4680 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4680))
{return or__3548__auto____4680;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4681 = mf;

if(cljs.core.truth_(and__3546__auto____4681))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4681;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4682 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4682))
{return or__3548__auto____4682;
} else
{var or__3548__auto____4683 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4683))
{return or__3548__auto____4683;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4684 = mf;

if(cljs.core.truth_(and__3546__auto____4684))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4684;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4685 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4685))
{return or__3548__auto____4685;
} else
{var or__3548__auto____4686 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4686))
{return or__3548__auto____4686;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4687 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4688 = cljs.core._get_method.call(null,mf,dispatch_val__4687);

if(cljs.core.truth_(target_fn__4688))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4687)));
}
return cljs.core.apply.call(null,target_fn__4688,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__275__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__4689 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4690 = this;
cljs.core.swap_BANG_.call(null,this__4690.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4690.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4690.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4690.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4691 = this;
cljs.core.swap_BANG_.call(null,this__4691.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4691.method_cache,this__4691.method_table,this__4691.cached_hierarchy,this__4691.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4692 = this;
cljs.core.swap_BANG_.call(null,this__4692.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4692.method_cache,this__4692.method_table,this__4692.cached_hierarchy,this__4692.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4693 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4693.cached_hierarchy),cljs.core.deref.call(null,this__4693.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4693.method_cache,this__4693.method_table,this__4693.cached_hierarchy,this__4693.hierarchy);
}
var temp__3695__auto____4694 = cljs.core.deref.call(null,this__4693.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4694))
{var target_fn__4695 = temp__3695__auto____4694;

return target_fn__4695;
} else
{var temp__3695__auto____4696 = cljs.core.find_and_cache_best_method.call(null,this__4693.name,dispatch_val,this__4693.hierarchy,this__4693.method_table,this__4693.prefer_table,this__4693.method_cache,this__4693.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4696))
{var target_fn__4697 = temp__3695__auto____4696;

return target_fn__4697;
} else
{return cljs.core.deref.call(null,this__4693.method_table).call(null,this__4693.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4698 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4698.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4698.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4698.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4698.method_cache,this__4698.method_table,this__4698.cached_hierarchy,this__4698.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4699 = this;
return cljs.core.deref.call(null,this__4699.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4700 = this;
return cljs.core.deref.call(null,this__4700.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4701 = this;
return cljs.core.do_dispatch.call(null,mf,this__4701.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4702__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4702 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4702__delegate.call(this, _, args);
};
G__4702.cljs$lang$maxFixedArity = 1;
G__4702.cljs$lang$applyTo = (function (arglist__4703){
var _ = cljs.core.first(arglist__4703);
var args = cljs.core.rest(arglist__4703);
return G__4702__delegate.call(this, _, args);
});
return G__4702;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
