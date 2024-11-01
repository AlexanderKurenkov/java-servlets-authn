"use strict";
(function(root,module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(root,exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(global,exports);}else{module(root,root);}}(typeof self!=='undefined'?self:this,function($rt_globals,$rt_exports){var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,
cls){return obj instanceof $rt_objcls()&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_castToInterface(obj,cls){if(obj!==null&&!$rt_isInstance(obj,cls)){$rt_throwCCE();}return obj;}function $rt_castToClass(obj,
cls){if(obj!==null&&!(obj instanceof cls)){$rt_throwCCE();}return obj;}$rt_globals.Array.prototype.fill=$rt_globals.Array.prototype.fill||function(value,start,end){var len=this.length;if(!len)return this;start=start|0;var i=start<0?$rt_globals.Math.max(len+start,0):$rt_globals.Math.min(start,len);end=end===$rt_globals.undefined?len:end|0;end=end<0?$rt_globals.Math.max(len+end,0):$rt_globals.Math.min(end,len);for(;i<end;i++){this[i]=value;}return this;};function $rt_createArray(cls,sz){var data=new $rt_globals.Array(sz);data.fill(null);return new $rt_array(cls,
data);}function $rt_createArrayFromData(cls,init){return $rt_wrapArray(cls,init);}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new $rt_globals.Array(sz));}function $rt_createNumericArray(cls,nativeArray){return new $rt_array(cls,nativeArray);}var $rt_createLongArray;var $rt_createLongArrayFromData;if(typeof $rt_globals.BigInt64Array!=='function'){$rt_createLongArray=function(sz){var data=new $rt_globals.Array(sz);var arr=new $rt_array($rt_longcls(),
data);data.fill(Long_ZERO);return arr;};$rt_createLongArrayFromData=function(init){return new $rt_array($rt_longcls(),init);};}else {$rt_createLongArray=function(sz){return $rt_createNumericArray($rt_longcls(),new $rt_globals.BigInt64Array(sz));};$rt_createLongArrayFromData=function(data){var buffer=new $rt_globals.BigInt64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_longcls(),buffer);};}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new $rt_globals.Uint16Array(sz));}function $rt_createCharArrayFromData(data)
{var buffer=new $rt_globals.Uint16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_charcls(),buffer);}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new $rt_globals.Int8Array(sz));}function $rt_createByteArrayFromData(data){var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_bytecls(),buffer);}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new $rt_globals.Int16Array(sz));}function $rt_createShortArrayFromData(data)
{var buffer=new $rt_globals.Int16Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_shortcls(),buffer);}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new $rt_globals.Int32Array(sz));}function $rt_createIntArrayFromData(data){var buffer=new $rt_globals.Int32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_intcls(),buffer);}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),new $rt_globals.Int8Array(sz));}function $rt_createBooleanArrayFromData(data)
{var buffer=new $rt_globals.Int8Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_booleancls(),buffer);}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new $rt_globals.Float32Array(sz));}function $rt_createFloatArrayFromData(data){var buffer=new $rt_globals.Float32Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_floatcls(),buffer);}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new $rt_globals.Float64Array(sz));}function $rt_createDoubleArrayFromData(data)
{var buffer=new $rt_globals.Float64Array(data.length);buffer.set(data);return $rt_createNumericArray($rt_doublecls(),buffer);}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};arraycls.classObject=null;arraycls.$array=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls()
{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}var $rt_javaExceptionProp=$rt_globals.Symbol("javaException");function $rt_exception(ex){var err=ex.$jsException;if(!err){var javaCause=$rt_throwableCause(ex);var jsCause=javaCause!==null?javaCause.$jsException:$rt_globals.undefined;var cause=typeof jsCause==="object"?{cause:
jsCause}:$rt_globals.undefined;err=new JavaError("Java exception thrown",cause);if(typeof $rt_globals.Error.captureStackTrace==="function"){$rt_globals.Error.captureStackTrace(err);}err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_stecls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element
=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays
=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),
arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if
(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i
=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions)
{var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new $rt_globals.Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),
arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]
=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&$rt_globals.isNaN(value)){throw "NaN";}return value;}function $rt_createOutputFunction(printFunction){var buffer="";var utf8Buffer=0;var utf8Remaining=0;function putCodePoint(ch){if(ch===0xA){printFunction(buffer);buffer="";}else if(ch<0x10000){buffer+=$rt_globals.String.fromCharCode(ch);}else {ch=ch -0x10000|0;var hi=(ch>>10)+
0xD800;var lo=(ch&0x3FF)+0xDC00;buffer+=$rt_globals.String.fromCharCode(hi,lo);}}return function(ch){if((ch&0x80)===0){putCodePoint(ch);}else if((ch&0xC0)===0x80){if(utf8Buffer>0){utf8Remaining<<=6;utf8Remaining|=ch&0x3F;if( --utf8Buffer===0){putCodePoint(utf8Remaining);}}}else if((ch&0xE0)===0xC0){utf8Remaining=ch&0x1F;utf8Buffer=1;}else if((ch&0xF0)===0xE0){utf8Remaining=ch&0x0F;utf8Buffer=2;}else if((ch&0xF8)===0xF0){utf8Remaining=ch&0x07;utf8Buffer=3;}};}var $rt_putStdout=typeof $rt_putStdoutCustom==="function"
?$rt_putStdoutCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.info(msg);}):function(){};var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof $rt_globals.console==="object"?$rt_createOutputFunction(function(msg){$rt_globals.console.error(msg);}):function(){};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new $rt_globals.Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix
=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if
(m.superclass){m.supertypes.push(m.superclass);cls.prototype=$rt_globals.Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {var enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;var declaringClass
=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;var simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}}function $rt_wrapFunction0(f)
{return function(){return f(this);};}function $rt_wrapFunction1(f){return function(p1){return f(this,p1);};}function $rt_wrapFunction2(f){return function(p1,p2){return f(this,p1,p2);};}function $rt_wrapFunction3(f){return function(p1,p2,p3){return f(this,p1,p2,p3,p3);};}function $rt_wrapFunction4(f){return function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);};}function $rt_threadStarter(f){return function(){var args=$rt_globals.Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f)
{return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance=new $rt_globals.Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target)
{return target.$clinit=function(){};}var $rt_numberConversionBuffer=new $rt_globals.ArrayBuffer(16);var $rt_numberConversionView=new $rt_globals.DataView($rt_numberConversionBuffer);var $rt_numberConversionFloatArray=new $rt_globals.Float32Array($rt_numberConversionBuffer);var $rt_numberConversionDoubleArray=new $rt_globals.Float64Array($rt_numberConversionBuffer);var $rt_numberConversionIntArray=new $rt_globals.Int32Array($rt_numberConversionBuffer);var $rt_doubleToRawLongBits;var $rt_longBitsToDouble;if(typeof $rt_globals.BigInt
!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);};}else if(typeof $rt_globals.BigInt64Array!=='function'){$rt_doubleToRawLongBits=function(n){$rt_numberConversionView.setFloat64(0,n,
true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32));};$rt_longBitsToDouble=function(n){$rt_numberConversionView.setFloat64(0,n,true);var lo=$rt_numberConversionView.getInt32(0,true);var hi=$rt_numberConversionView.getInt32(4,true);return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(32,$rt_globals.BigInt(lo))|$rt_globals.BigInt(hi)
<<$rt_globals.BigInt(32));};}else {var $rt_numberConversionLongArray=new $rt_globals.BigInt64Array($rt_numberConversionBuffer);$rt_doubleToRawLongBits=function(n){$rt_numberConversionDoubleArray[0]=n;return $rt_numberConversionLongArray[0];};$rt_longBitsToDouble=function(n){$rt_numberConversionLongArray[0]=n;return $rt_numberConversionDoubleArray[0];};}function $rt_floatToRawIntBits(n){$rt_numberConversionFloatArray[0]=n;return $rt_numberConversionIntArray[0];}function $rt_intBitsToFloat(n){$rt_numberConversionIntArray[0]
=n;return $rt_numberConversionFloatArray[0];}function $rt_equalDoubles(a,b){if(a!==a){return b!==b;}$rt_numberConversionDoubleArray[0]=a;$rt_numberConversionDoubleArray[1]=b;return $rt_numberConversionIntArray[0]===$rt_numberConversionIntArray[2]&&$rt_numberConversionIntArray[1]===$rt_numberConversionIntArray[3];}var JavaError;if(typeof $rt_globals.Reflect==='object'){var defaultMessage=$rt_globals.Symbol("defaultMessage");JavaError=function JavaError(message,cause){var self=$rt_globals.Reflect.construct($rt_globals.Error,
[$rt_globals.undefined,cause],JavaError);$rt_globals.Object.setPrototypeOf(self,JavaError.prototype);self[defaultMessage]=message;return self;};JavaError.prototype=$rt_globals.Object.create($rt_globals.Error.prototype,{constructor:{configurable:true,writable:true,value:JavaError},message:{get:function(){try {var javaException=this[$rt_javaExceptionProp];if(typeof javaException==='object'){var javaMessage=$rt_throwableMessage(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString()
:null;}}return this[defaultMessage];}catch(e){return "Exception occurred trying to extract Java exception message: "+e;}}}});}else {JavaError=$rt_globals.Error;}function $rt_javaException(e){return e instanceof $rt_globals.Error&&typeof e[$rt_javaExceptionProp]==='object'?e[$rt_javaExceptionProp]:null;}function $rt_jsException(e){return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err[$rt_javaExceptionProp];if(!ex){ex=$rt_createException($rt_str("(JavaScript) "
+err.toString()));err[$rt_javaExceptionProp]=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName
="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};function Long_isPositive(a){return (a.hi&0x80000000)===0;}function Long_isNegative(a){return (a.hi&0x80000000)!==0;}var Long_MAX_NORMAL=1<<18;var Long_ZERO;var Long_create;var Long_fromInt;var Long_fromNumber;var Long_toNumber;var Long_hi;var Long_lo;if
(typeof $rt_globals.BigInt!=="function"){Long.prototype.toString=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push($rt_globals.String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};Long_ZERO=new Long(0,0);Long_fromInt=function(val){return new Long(val,
 -(val<0)|0);};Long_fromNumber=function(val){if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}};Long_create=function(lo,hi){return new Long(lo,hi);};Long_toNumber=function(val){return 0x100000000*val.hi+(val.lo>>>0);};Long_hi=function(val){return val.hi;};Long_lo=function(val){return val.lo;};}else {Long_ZERO=$rt_globals.BigInt(0);Long_create=function(lo,hi){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(lo))
|$rt_globals.BigInt.asUintN(64,$rt_globals.BigInt(hi)<<$rt_globals.BigInt(32)));};Long_fromInt=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val|0));};Long_fromNumber=function(val){return $rt_globals.BigInt.asIntN(64,$rt_globals.BigInt(val>=0?$rt_globals.Math.floor(val):$rt_globals.Math.ceil(val)));};Long_toNumber=function(val){return $rt_globals.Number(val);};Long_hi=function(val){return $rt_globals.Number($rt_globals.BigInt.asIntN(64,val>>$rt_globals.BigInt(32)))|0;};Long_lo=function(val)
{return $rt_globals.Number($rt_globals.BigInt.asIntN(32,val))|0;};}var $rt_imul=$rt_globals.Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){return (a>>>0)/(b>>>0)>>>0;};var $rt_umod=function(a,b){return (a>>>0)%(b>>>0)>>>0;};var $rt_ucmp=function(a,b){a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function $rt_checkBounds(index,array){if(index<0||index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkUpperBound(index,
array){if(index>=array.length){$rt_throwAIOOBE();}return index;}function $rt_checkLowerBound(index){if(index<0){$rt_throwAIOOBE();}return index;}function $rt_classWithoutFields(superclass){if(superclass===0){return function(){};}if(superclass===void 0){superclass=$rt_objcls();}return function(){superclass.call(this);};}function $rt_setCloneMethod(target, f){target.bd=f;}
function $rt_cls(cls){return Cg(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return C1(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.b.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_stecls(){return B;}
function $rt_throwableMessage(t){return CP(t);}
function $rt_throwableCause(t){return CT(t);}
function $rt_nullCheck(val) {if (val === null) {$rt_throw(Dd());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return De(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
function $rt_throwAIOOBE(){}
function $rt_throwCCE(){}
var A=Object.create(null);
var O=$rt_throw;var Df=$rt_compare;var Dg=$rt_nullCheck;var BX=$rt_cls;var C2=$rt_createArray;var Dh=$rt_isInstance;var Di=$rt_nativeThread;var Dj=$rt_suspending;var Dk=$rt_resuming;var Dl=$rt_invalidPointer;var D=$rt_s;var BC=$rt_eraseClinit;var Dm=$rt_imul;var Dn=$rt_wrapException;var Do=$rt_checkBounds;var Dp=$rt_checkUpperBound;var Dq=$rt_checkLowerBound;var Dr=$rt_wrapFunction0;var Ds=$rt_wrapFunction1;var Dt=$rt_wrapFunction2;var Du=$rt_wrapFunction3;var Dv=$rt_wrapFunction4;var C=$rt_classWithoutFields;var Dw
=$rt_createArrayFromData;var Dx=$rt_createCharArrayFromData;var Dy=$rt_createByteArrayFromData;var Dz=$rt_createShortArrayFromData;var DA=$rt_createIntArrayFromData;var DB=$rt_createBooleanArrayFromData;var DC=$rt_createFloatArrayFromData;var DD=$rt_createDoubleArrayFromData;var DE=$rt_createLongArrayFromData;var DF=$rt_createBooleanArray;var DG=$rt_createByteArray;var DH=$rt_createShortArray;var Bf=$rt_createCharArray;var DI=$rt_createIntArray;var DJ=$rt_createLongArray;var DK=$rt_createFloatArray;var DL=$rt_createDoubleArray;var Df
=$rt_compare;var DM=$rt_castToClass;var DN=$rt_castToInterface;var DO=$rt_equalDoubles;var DP=Long_toNumber;var DQ=Long_fromInt;var DR=Long_fromNumber;var DS=Long_create;var DT=Long_ZERO;var DU=Long_hi;var DV=Long_lo;
function B(){this.$id$=0;}
function Bx(a){return Cg(a.constructor);}
function CN(a){var b,c,d,e,f,g,h,i,j,k,l;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}d=a.$id$;if(!d)e=D(0);else{if(!d)f=32;else{g=0;f=d>>>16|0;if(f)g=16;else f=d;h=f>>>8|0;if(!h)h=f;else g=g|8;i=h>>>4|0;if(!i)i=h;else g=g|4;h=i>>>2|0;if(!h)h=i;else g=g|2;if(h>>>1|0)g=g|1;f=(32-g|0)-1|0;}j=(((32-f|0)+4|0)-1|0)/4|0;k=Bf(j);l=k.data;j=(j-1|0)*4|0;f=0;while(j>=0){g=f+1|0;h=(d>>>j|0)&15;l[f]=h>=0&&h<16?(h<10?(48+h|0)&65535:((97+h|0)-10|0)&65535):0;j=j-4|0;f=g;}e=C1(k);}b=new BI;b.a=Bf(16);BR(BR(b,D(1)),e);return CX(b.a,
0,b.e);}
var Cm=C();
function CZ(b){var c,d,e;Ce();B9();c=$rt_globals.window.document;d=c.createElement("div");e=c.createTextNode("generated element");d.appendChild(e);c.body.appendChild(d);}
var Bs=C(0);
var BB=C(0);
function BA(){B.call(this);this.h=null;}
function Cg(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new BA;c.h=b;d=c;b.classObject=d;}return c;}
function W(a){return a.h.$meta.primitive?1:0;}
function BE(a){return Cg(a.h.$meta.item);}
var Ca=C();
function Cd(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function Bq(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
var Co=C();
function Cl(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Cl(d[e],c))return 1;e=e+1|0;}return 0;}
function P(){var a=this;B.call(a);a.l=null;a.s=null;a.n=0;a.m=0;}
function DW(a){var b=new P();Z(b,a);return b;}
function Z(a,b){a.n=1;a.m=1;a.l=b;}
function CO(a){return a;}
function CP(a){return a.l;}
function CT(a){var b;b=a.s;if(b===a)b=null;return b;}
var Bp=C(P);
var I=C(Bp);
function DX(){var a=new I();L(a);return a;}
function De(a){var b=new I();CB(b,a);return b;}
function L(a){a.n=1;a.m=1;}
function CB(a,b){Z(a,b);}
var Cu=C(I);
var T=C(0);
var X=C(0);
var Bi=C(0);
function N(){var a=this;B.call(a);a.b=null;a.f=0;}
var DY=null;var DZ=null;var D0=null;function Cj(){Cj=BC(N);CJ();}
function C1(a){var b=new N();B0(b,a);return b;}
function CX(a,b,c){var d=new N();BT(d,a,b,c);return d;}
function B0(a,b){Cj();BT(a,b,0,b.data.length);}
function BT(a,b,c,d){var e,f,g,h,i,j,k,l,m,n;Cj();e=Bf(d);a.b=e;if(b===null){f=new BF;Z(f,D(2));O(f);}if(c>=0&&d>=0&&(c+d|0)<=Bn(b)&&(0+d|0)<=Bn(e)){a:{b:{c:{if(b!==e){g=BE(Bx(b));f=BE(Bx(e));if(g!==null&&f!==null){if(g===f)break c;if(!W(g)&&!W(f)){h=b;i=0;j=c;while(i<d){k=h.data;l=j+1|0;m=k[j];n=f.h;if(!(m!==null&&!(typeof m.constructor.$meta==='undefined'?1:0)&&Cl(m.constructor,n)?1:0)){Bd(b,c,e,0,i);g=new Y;L(g);O(g);}i=i+1|0;j=l;}Bd(b,c,e,0,d);break a;}if(!W(g))break b;if(W(f))break c;else break b;}g=new Y;L(g);O(g);}}Bd(b,
c,e,0,d);break a;}g=new Y;L(g);O(g);}return;}g=new S;L(g);O(g);}
function Bo(a,b){var c,d;if(b>=0){c=a.b.data;if(b<c.length)return c[b];}d=new Bm;L(d);O(d);}
function M(a){return a.b.data.length;}
function Bb(a,b){var c;if(a===b)return 1;if(!(b instanceof N))return 0;if(M(b)!=M(a))return 0;c=0;while(c<M(b)){if(Bo(a,c)!=Bo(b,c))return 0;c=c+1|0;}return 1;}
function CM(a){var b,c,d,e;a:{if(!a.f){b=a.b.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.f=(31*a.f|0)+e|0;d=d+1|0;}}}return a.f;}
function CJ(){var b,c;b=Bf(0);DY=b;c=new N;Cj();c.b=b;DZ=c;D0=new BV;}
var Bj=C(P);
var R=C(Bj);
var B1=C(R);
var Be=C();
var BK=C(Be);
var D1=null;function Ce(){D1=BX($rt_intcls());}
function Bk(){var a=this;B.call(a);a.a=null;a.e=0;}
function B3(a,b){var c,d,e,f,g;c=a.a.data.length;if(c>=b)return;d=c>=1073741823?2147483647:Cf(b,Cf(c*2|0,5));e=a.a.data;f=Bf(d);b=e.length;if(d<b)b=d;g=f.data;c=0;while(c<b){g[c]=e[c];c=c+1|0;}a.a=f;}
var BW=C(0);
var BI=C(Bk);
function BR(a,b){var c,d,e,f,g;c=a.e;if(b===null)b=D(3);if(c>=0&&c<=c){if(!(b.b.data.length?0:1)){B3(a,c+M(b)|0);d=a.e-1|0;while(d>=c){a.a.data[d+M(b)|0]=a.a.data[d];d=d+(-1)|0;}a.e=a.e+M(b)|0;e=0;while(e<M(b)){f=a.a.data;g=c+1|0;f[c]=Bo(b,e);e=e+1|0;c=g;}}return a;}b=new Bm;Ct(b);O(b);}
var Q=C(R);
var Cr=C(Q);
function D2(a){var b=new Cr();CR(b,a);return b;}
function CR(a,b){Z(a,b);}
var B_=C(Q);
function D3(a){var b=new B_();CC(b,a);return b;}
function CC(a,b){Z(a,b);}
var H=C(0);
var Bu=C(0);
var Bz=C(0);
var K=C(0);
var BY=C(0);
var B$=C();
function C3(b,c,d,e,f){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=Bn(b)&&(e+f|0)<=Bn(d)){Bd(b,c,d,e,f);return;}b=new S;L(b);O(b);}
function Bd(b,c,d,e,f){if(f===0){return;}else if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}}else{c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
var Cq=C();
var BO=C(0);
var BL=C(0);
var BD=C(0);
var BJ=C(0);
var BG=C(0);
var Bt=C(0);
var BS=C(0);
var By=C(0);
var Cb=C();
function Cx(a,b){b=a.D(b);BM();return b===null?null:b instanceof $rt_objcls()&&b instanceof J?Bg(b):b;}
function CI(a,b,c){a.J($rt_str(b),Bq(c,"handleEvent"));}
function CV(a,b,c){a.bc($rt_str(b),Bq(c,"handleEvent"));}
function CS(a,b,c,d){a.Q($rt_str(b),Bq(c,"handleEvent"),d?1:0);}
function Cz(a,b){return !!a.P(b);}
function Cy(a){return a.ba();}
function CF(a,b,c,d){a.R($rt_str(b),Bq(c,"handleEvent"),d?1:0);}
var BQ=C(0);
var BV=C();
var S=C(I);
function D4(){var a=new S();Ct(a);return a;}
function Ct(a){L(a);}
var B2=C();
function Bn(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(D5());}return b.data.length;}
var BF=C(I);
var Y=C(I);
var Ba=C();
var D6=null;var D7=null;function B9(){D6=BX($rt_charcls());D7=C2(Ba,128);}
function J(){B.call(this);this.k=null;}
var D8=null;var D9=null;var D$=null;var D_=null;var Ea=null;var Eb=null;function BM(){BM=BC(J);CA();}
function BP(a){var b=new J();Ci(b,a);return b;}
function Ci(a,b){BM();a.k=b;}
function Bg(b){BM();if(b!==null)return b.k;return null;}
function BH(b){var c,d;BM();if(b===null)return null;if(b instanceof $rt_objcls())b=b;else a:{b=b;if(b===null)b=null;else{b:{c=b;if(D9!==null){d=$rt_str(typeof c);if(!Bb(d,D(4))&&!Bb(d,D(5))){if(Bb(d,D(6))){b=D$.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=BP(c);d=b;D$.set(c,new $rt_globals.WeakRef(d));BN(Ea,d,c);break a;}if(!Bb(d,D(7)))break b;else{b=D_.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b
=BP(c);d=b;D_.set(c,new $rt_globals.WeakRef(d));BN(Eb,d,c);break a;}}b=D9.get(c);b=(typeof b==='undefined'?1:0)?void 0:b.deref();if(!(typeof b==='undefined'?1:0)){b=b;break a;}b=BP(c);D9.set(c,new $rt_globals.WeakRef(b));break a;}}b=BP(c);}}return b;}
function CA(){D8=new $rt_globals.WeakMap();D9=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.WeakMap();D$=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();D_=!(typeof $rt_globals.WeakRef!=='undefined'?1:0)?null:new $rt_globals.Map();Ea=D$===null?null:new $rt_globals.FinalizationRegistry(Cd(new Bv,"accept"));Eb=D_===null?null:new $rt_globals.FinalizationRegistry(Cd(new Bw,"accept"));}
function BN(b,c,d){return b.register(c,d);}
var Ch=C();
var B6=C();
var Cp=C();
var Bh=C(0);
var Bv=C();
function CU(a,b){var c;b=BH(b);c=D$;b=Bg(b);c.delete(b);}
var BZ=C();
var Bw=C();
function CG(a,b){var c;b=BH(b);c=D_;b=Bg(b);c.delete(b);}
var Cv=C();
var Bm=C(S);
var B7=C();
function Cf(b,c){if(b>c)c=b;return c;}
var Cw=C();
$rt_packages([]);
$rt_metadata([B,0,0,[],0,3,0,0,0,Cm,0,B,[],0,3,0,0,0,Bs,0,B,[],3,3,0,0,0,BB,0,B,[],3,3,0,0,0,BA,0,B,[Bs,BB],0,3,0,0,0,Ca,0,B,[],4,0,0,0,0,Co,0,B,[],4,3,0,0,0,P,0,B,[],0,3,0,0,0,Bp,0,P,[],0,3,0,0,0,I,0,Bp,[],0,3,0,0,0,Cu,0,I,[],0,3,0,0,0,T,0,B,[],3,3,0,0,0,X,0,B,[],3,3,0,0,0,Bi,0,B,[],3,3,0,0,0,N,0,B,[T,X,Bi],0,3,0,Cj,0,Bj,0,P,[],0,3,0,0,0,R,0,Bj,[],0,3,0,0,0,B1,0,R,[],0,3,0,0,0,Be,0,B,[T],1,3,0,0,0,BK,0,Be,[X],0,3,0,0,0,Bk,0,B,[T,Bi],0,0,0,0,0,BW,0,B,[],3,3,0,0,0,BI,0,Bk,[BW],0,3,0,0,0,Q,0,R,[],0,3,0,0,0,Cr,
0,Q,[],0,3,0,0,0,B_,0,Q,[],0,3,0,0,0,H,0,B,[],3,3,0,0,0,Bu,0,B,[H],3,3,0,0,0,Bz,0,B,[Bu],3,3,0,0,0,K,0,B,[H],3,3,0,0,0,BY,0,B,[Bz,K],3,3,0,0,0,B$,0,B,[],4,3,0,0,0,Cq,0,B,[],4,3,0,0,0,BO,0,B,[K],3,3,0,0,0,BL,0,B,[K],3,3,0,0,0,BD,0,B,[K],3,3,0,0,0,BJ,0,B,[K],3,3,0,0,0,BG,0,B,[K],3,3,0,0,0,Bt,0,B,[K,BO,BL,BD,BJ,BG],3,3,0,0,0,BS,0,B,[],3,3,0,0,0,By,0,B,[H],3,3,0,0,0,Cb,0,B,[H,Bt,BS,By],1,3,0,0,["C",Ds(Cx),"bb",Dt(CI),"E",Dt(CV),"T",Du(CS),"M",Ds(Cz),"V",Dr(Cy),"U",Du(CF)],BQ,0,B,[],3,3,0,0,0,BV,0,B,[BQ],0,3,0,0,
0,S,0,I,[],0,3,0,0,0,B2,0,B,[],4,3,0,0,0,BF,0,I,[],0,3,0,0,0,Y,0,I,[],0,3,0,0,0,Ba,0,B,[X],0,3,0,0,0,J,0,B,[],4,3,0,BM,0]);
$rt_metadata([Ch,0,B,[H],1,3,0,0,0,B6,0,B,[H],1,3,0,0,0,Cp,0,B,[H],1,3,0,0,0,Bh,0,B,[H],3,3,0,0,0,Bv,0,B,[Bh],0,3,0,0,["p",Ds(CU)],BZ,0,B,[H],1,3,0,0,0,Bw,0,B,[Bh],0,3,0,0,["p",Ds(CG)],Cv,0,B,[],4,3,0,0,0,Bm,0,S,[],0,3,0,0,0,B7,0,B,[],4,3,0,0,0,Cw,0,B,[],0,3,0,0,0]);
function $rt_array(cls,data){this.bp=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=$rt_globals.Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["0","<java_object>@","Either src or dest is null","null","object","function","string","number"]);
N.prototype.toString=function(){return $rt_ustr(this);};
N.prototype.valueOf=N.prototype.toString;B.prototype.toString=function(){return $rt_ustr(CN(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof $rt_globals.Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}$rt_exports.main=$rt_mainStarter(CZ);
$rt_exports.main.javaException=$rt_javaException;
(function(){var c;c=Cb.prototype;c.removeEventListener=c.T;c.dispatchEvent=c.M;c.get=c.C;c.addEventListener=c.U;Object.defineProperty(c,"length",{get:c.V});c=Bv.prototype;c.accept=c.p;c=Bw.prototype;c.accept=c.p;})();
}));
