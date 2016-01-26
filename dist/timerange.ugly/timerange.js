!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.moment=e()}(this,function(){"use strict";function t(){return In.apply(null,arguments)}function e(t){In=t}function n(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function s(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function o(t,e){for(var n in e)r(e,n)&&(t[n]=e[n]);return r(e,"toString")&&(t.toString=e.toString),r(e,"valueOf")&&(t.valueOf=e.valueOf),t}function a(t,e,n,i){return Ot(t,e,n,i,!0).utc()}function u(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function d(t){return null==t._pf&&(t._pf=u()),t._pf}function c(t){if(null==t._isValid){var e=d(t);t._isValid=!(isNaN(t._d.getTime())||!(e.overflow<0)||e.empty||e.invalidMonth||e.invalidWeekday||e.nullInput||e.invalidFormat||e.userInvalidated),t._strict&&(t._isValid=t._isValid&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour)}return t._isValid}function h(t){var e=a(NaN);return null!=t?o(d(e),t):d(e).userInvalidated=!0,e}function f(t,e){var n,i,s;if("undefined"!=typeof e._isAMomentObject&&(t._isAMomentObject=e._isAMomentObject),"undefined"!=typeof e._i&&(t._i=e._i),"undefined"!=typeof e._f&&(t._f=e._f),"undefined"!=typeof e._l&&(t._l=e._l),"undefined"!=typeof e._strict&&(t._strict=e._strict),"undefined"!=typeof e._tzm&&(t._tzm=e._tzm),"undefined"!=typeof e._isUTC&&(t._isUTC=e._isUTC),"undefined"!=typeof e._offset&&(t._offset=e._offset),"undefined"!=typeof e._pf&&(t._pf=d(e)),"undefined"!=typeof e._locale&&(t._locale=e._locale),En.length>0)for(n in En)i=En[n],s=e[i],"undefined"!=typeof s&&(t[i]=s);return t}function l(e){f(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),An===!1&&(An=!0,t.updateOffset(this),An=!1)}function m(t){return t instanceof l||null!=t&&null!=t._isAMomentObject}function _(t){return 0>t?Math.ceil(t):Math.floor(t)}function g(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=_(e)),n}function y(t,e,n){var i,s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),o=0;for(i=0;s>i;i++)(n&&t[i]!==e[i]||!n&&g(t[i])!==g(e[i]))&&o++;return o+r}function p(){}function v(t){return t?t.toLowerCase().replace("_","-"):t}function D(t){for(var e,n,i,s,r=0;r<t.length;){for(s=v(t[r]).split("-"),e=s.length,n=v(t[r+1]),n=n?n.split("-"):null;e>0;){if(i=w(s.slice(0,e).join("-")))return i;if(n&&n.length>=e&&y(s,n,!0)>=e-1)break;e--}r++}return null}function w(t){var e=null;if(!xn[t]&&"undefined"!=typeof module&&module&&module.exports)try{e=Pn._abbr,require("./locale/"+t),M(e)}catch(n){}return xn[t]}function M(t,e){var n;return t&&(n="undefined"==typeof e?S(t):Y(t,e),n&&(Pn=n)),Pn._abbr}function Y(t,e){return null!==e?(e.abbr=t,xn[t]=xn[t]||new p,xn[t].set(e),M(t),xn[t]):(delete xn[t],null)}function S(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Pn;if(!n(t)){if(e=w(t))return e;t=[t]}return D(t)}function k(t,e){var n=t.toLowerCase();Hn[n]=Hn[n+"s"]=Hn[e]=t}function T(t){return"string"==typeof t?Hn[t]||Hn[t.toLowerCase()]:void 0}function b(t){var e,n,i={};for(n in t)r(t,n)&&(e=T(n),e&&(i[e]=t[n]));return i}function O(e,n){return function(i){return null!=i?(U(this,e,i),t.updateOffset(this,n),this):W(this,e)}}function W(t,e){return t._d["get"+(t._isUTC?"UTC":"")+e]()}function U(t,e,n){return t._d["set"+(t._isUTC?"UTC":"")+e](n)}function C(t,e){var n;if("object"==typeof t)for(n in t)this.set(n,t[n]);else if(t=T(t),"function"==typeof this[t])return this[t](e);return this}function G(t,e,n){var i=""+Math.abs(t),s=e-i.length,r=t>=0;return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i}function F(t,e,n,i){var s=i;"string"==typeof i&&(s=function(){return this[i]()}),t&&(Vn[t]=s),e&&(Vn[e[0]]=function(){return G(s.apply(this,arguments),e[1],e[2])}),n&&(Vn[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),t)})}function I(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function P(t){var e,n,i=t.match(Ln);for(e=0,n=i.length;n>e;e++)Vn[i[e]]?i[e]=Vn[i[e]]:i[e]=I(i[e]);return function(s){var r="";for(e=0;n>e;e++)r+=i[e]instanceof Function?i[e].call(s,t):i[e];return r}}function E(t,e){return t.isValid()?(e=A(e,t.localeData()),Nn[e]=Nn[e]||P(e),Nn[e](t)):t.localeData().invalidDate()}function A(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(zn.lastIndex=0;i>=0&&zn.test(t);)t=t.replace(zn,n),zn.lastIndex=0,i-=1;return t}function x(t){return"function"==typeof t&&"[object Function]"===Object.prototype.toString.call(t)}function H(t,e,n){si[t]=x(e)?e:function(t){return t&&n?n:e}}function L(t,e){return r(si,t)?si[t](e._strict,e._locale):new RegExp(z(t))}function z(t){return t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,s){return e||n||i||s}).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function N(t,e){var n,i=e;for("string"==typeof t&&(t=[t]),"number"==typeof e&&(i=function(t,n){n[e]=g(t)}),n=0;n<t.length;n++)ri[t[n]]=i}function V(t,e){N(t,function(t,n,i,s){i._w=i._w||{},e(t,i._w,i,s)})}function Z(t,e,n){null!=e&&r(ri,t)&&ri[t](e,n._a,n,t)}function j(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function B(t){return this._months[t.month()]}function q(t){return this._monthsShort[t.month()]}function J(t,e,n){var i,s,r;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;12>i;i++){if(s=a([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function $(t,e){var n;return"string"==typeof e&&(e=t.localeData().monthsParse(e),"number"!=typeof e)?t:(n=Math.min(t.date(),j(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t)}function R(e){return null!=e?($(this,e),t.updateOffset(this,!0),this):W(this,"Month")}function Q(){return j(this.year(),this.month())}function X(t){var e,n=t._a;return n&&-2===d(t).overflow&&(e=n[ai]<0||n[ai]>11?ai:n[ui]<1||n[ui]>j(n[oi],n[ai])?ui:n[di]<0||n[di]>24||24===n[di]&&(0!==n[ci]||0!==n[hi]||0!==n[fi])?di:n[ci]<0||n[ci]>59?ci:n[hi]<0||n[hi]>59?hi:n[fi]<0||n[fi]>999?fi:-1,d(t)._overflowDayOfYear&&(oi>e||e>ui)&&(e=ui),d(t).overflow=e),t}function K(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function tt(t,e){var n=!0;return o(function(){return n&&(K(t+"\n"+(new Error).stack),n=!1),e.apply(this,arguments)},e)}function et(t,e){_i[t]||(K(e),_i[t]=!0)}function nt(t){var e,n,i=t._i,s=gi.exec(i);if(s){for(d(t).iso=!0,e=0,n=yi.length;n>e;e++)if(yi[e][1].exec(i)){t._f=yi[e][0];break}for(e=0,n=pi.length;n>e;e++)if(pi[e][1].exec(i)){t._f+=(s[6]||" ")+pi[e][0];break}i.match(ei)&&(t._f+="Z"),wt(t)}else t._isValid=!1}function it(e){var n=vi.exec(e._i);return null!==n?void(e._d=new Date(+n[1])):(nt(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function st(t,e,n,i,s,r,o){var a=new Date(t,e,n,i,s,r,o);return 1970>t&&a.setFullYear(t),a}function rt(t){var e=new Date(Date.UTC.apply(null,arguments));return 1970>t&&e.setUTCFullYear(t),e}function ot(t){return at(t)?366:365}function at(t){return t%4===0&&t%100!==0||t%400===0}function ut(){return at(this.year())}function dt(t,e,n){var i,s=n-e,r=n-t.day();return r>s&&(r-=7),s-7>r&&(r+=7),i=Wt(t).add(r,"d"),{week:Math.ceil(i.dayOfYear()/7),year:i.year()}}function ct(t){return dt(t,this._week.dow,this._week.doy).week}function ht(){return this._week.dow}function ft(){return this._week.doy}function lt(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function mt(t){var e=dt(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function _t(t,e,n,i,s){var r,o=6+s-i,a=rt(t,0,1+o),u=a.getUTCDay();return s>u&&(u+=7),n=null!=n?1*n:s,r=1+o+7*(e-1)-u+n,{year:r>0?t:t-1,dayOfYear:r>0?r:ot(t-1)+r}}function gt(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}function yt(t,e,n){return null!=t?t:null!=e?e:n}function pt(t){var e=new Date;return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function vt(t){var e,n,i,s,r=[];if(!t._d){for(i=pt(t),t._w&&null==t._a[ui]&&null==t._a[ai]&&Dt(t),t._dayOfYear&&(s=yt(t._a[oi],i[oi]),t._dayOfYear>ot(s)&&(d(t)._overflowDayOfYear=!0),n=rt(s,0,t._dayOfYear),t._a[ai]=n.getUTCMonth(),t._a[ui]=n.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=r[e]=i[e];for(;7>e;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[di]&&0===t._a[ci]&&0===t._a[hi]&&0===t._a[fi]&&(t._nextDay=!0,t._a[di]=0),t._d=(t._useUTC?rt:st).apply(null,r),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[di]=24)}}function Dt(t){var e,n,i,s,r,o,a;e=t._w,null!=e.GG||null!=e.W||null!=e.E?(r=1,o=4,n=yt(e.GG,t._a[oi],dt(Wt(),1,4).year),i=yt(e.W,1),s=yt(e.E,1)):(r=t._locale._week.dow,o=t._locale._week.doy,n=yt(e.gg,t._a[oi],dt(Wt(),r,o).year),i=yt(e.w,1),null!=e.d?(s=e.d,r>s&&++i):s=null!=e.e?e.e+r:r),a=_t(n,i,s,o,r),t._a[oi]=a.year,t._dayOfYear=a.dayOfYear}function wt(e){if(e._f===t.ISO_8601)return void nt(e);e._a=[],d(e).empty=!0;var n,i,s,r,o,a=""+e._i,u=a.length,c=0;for(s=A(e._f,e._locale).match(Ln)||[],n=0;n<s.length;n++)r=s[n],i=(a.match(L(r,e))||[])[0],i&&(o=a.substr(0,a.indexOf(i)),o.length>0&&d(e).unusedInput.push(o),a=a.slice(a.indexOf(i)+i.length),c+=i.length),Vn[r]?(i?d(e).empty=!1:d(e).unusedTokens.push(r),Z(r,i,e)):e._strict&&!i&&d(e).unusedTokens.push(r);d(e).charsLeftOver=u-c,a.length>0&&d(e).unusedInput.push(a),d(e).bigHour===!0&&e._a[di]<=12&&e._a[di]>0&&(d(e).bigHour=void 0),e._a[di]=Mt(e._locale,e._a[di],e._meridiem),vt(e),X(e)}function Mt(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&12>e&&(e+=12),i||12!==e||(e=0),e):e}function Yt(t){var e,n,i,s,r;if(0===t._f.length)return d(t).invalidFormat=!0,void(t._d=new Date(NaN));for(s=0;s<t._f.length;s++)r=0,e=f({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[s],wt(e),c(e)&&(r+=d(e).charsLeftOver,r+=10*d(e).unusedTokens.length,d(e).score=r,(null==i||i>r)&&(i=r,n=e));o(t,n||e)}function St(t){if(!t._d){var e=b(t._i);t._a=[e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],vt(t)}}function kt(t){var e=new l(X(Tt(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Tt(t){var e=t._i,s=t._f;return t._locale=t._locale||S(t._l),null===e||void 0===s&&""===e?h({nullInput:!0}):("string"==typeof e&&(t._i=e=t._locale.preparse(e)),m(e)?new l(X(e)):(n(s)?Yt(t):s?wt(t):i(e)?t._d=e:bt(t),t))}function bt(e){var r=e._i;void 0===r?e._d=new Date:i(r)?e._d=new Date(+r):"string"==typeof r?it(e):n(r)?(e._a=s(r.slice(0),function(t){return parseInt(t,10)}),vt(e)):"object"==typeof r?St(e):"number"==typeof r?e._d=new Date(r):t.createFromInputFallback(e)}function Ot(t,e,n,i,s){var r={};return"boolean"==typeof n&&(i=n,n=void 0),r._isAMomentObject=!0,r._useUTC=r._isUTC=s,r._l=n,r._i=t,r._f=e,r._strict=i,kt(r)}function Wt(t,e,n,i){return Ot(t,e,n,i,!1)}function Ut(t,e){var i,s;if(1===e.length&&n(e[0])&&(e=e[0]),!e.length)return Wt();for(i=e[0],s=1;s<e.length;++s)(!e[s].isValid()||e[s][t](i))&&(i=e[s]);return i}function Ct(){var t=[].slice.call(arguments,0);return Ut("isBefore",t)}function Gt(){var t=[].slice.call(arguments,0);return Ut("isAfter",t)}function Ft(t){var e=b(t),n=e.year||0,i=e.quarter||0,s=e.month||0,r=e.week||0,o=e.day||0,a=e.hour||0,u=e.minute||0,d=e.second||0,c=e.millisecond||0;this._milliseconds=+c+1e3*d+6e4*u+36e5*a,this._days=+o+7*r,this._months=+s+3*i+12*n,this._data={},this._locale=S(),this._bubble()}function It(t){return t instanceof Ft}function Pt(t,e){F(t,0,0,function(){var t=this.utcOffset(),n="+";return 0>t&&(t=-t,n="-"),n+G(~~(t/60),2)+e+G(~~t%60,2)})}function Et(t){var e=(t||"").match(ei)||[],n=e[e.length-1]||[],i=(n+"").match(Si)||["-",0,0],s=+(60*i[1])+g(i[2]);return"+"===i[0]?s:-s}function At(e,n){var s,r;return n._isUTC?(s=n.clone(),r=(m(e)||i(e)?+e:+Wt(e))-+s,s._d.setTime(+s._d+r),t.updateOffset(s,!1),s):Wt(e).local()}function xt(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function Ht(e,n){var i,s=this._offset||0;return null!=e?("string"==typeof e&&(e=Et(e)),Math.abs(e)<16&&(e=60*e),!this._isUTC&&n&&(i=xt(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),s!==e&&(!n||this._changeInProgress?ee(this,Rt(e-s,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?s:xt(this)}function Lt(t,e){return null!=t?("string"!=typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function zt(t){return this.utcOffset(0,t)}function Nt(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(xt(this),"m")),this}function Vt(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Et(this._i)),this}function Zt(t){return t=t?Wt(t).utcOffset():0,(this.utcOffset()-t)%60===0}function jt(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Bt(){if("undefined"!=typeof this._isDSTShifted)return this._isDSTShifted;var t={};if(f(t,this),t=Tt(t),t._a){var e=t._isUTC?a(t._a):Wt(t._a);this._isDSTShifted=this.isValid()&&y(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function qt(){return!this._isUTC}function Jt(){return this._isUTC}function $t(){return this._isUTC&&0===this._offset}function Rt(t,e){var n,i,s,o=t,a=null;return It(t)?o={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(o={},e?o[e]=t:o.milliseconds=t):(a=ki.exec(t))?(n="-"===a[1]?-1:1,o={y:0,d:g(a[ui])*n,h:g(a[di])*n,m:g(a[ci])*n,s:g(a[hi])*n,ms:g(a[fi])*n}):(a=Ti.exec(t))?(n="-"===a[1]?-1:1,o={y:Qt(a[2],n),M:Qt(a[3],n),d:Qt(a[4],n),h:Qt(a[5],n),m:Qt(a[6],n),s:Qt(a[7],n),w:Qt(a[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(s=Kt(Wt(o.from),Wt(o.to)),o={},o.ms=s.milliseconds,o.M=s.months),i=new Ft(o),It(t)&&r(t,"_locale")&&(i._locale=t._locale),i}function Qt(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Xt(t,e){var n={milliseconds:0,months:0};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Kt(t,e){var n;return e=At(e,t),t.isBefore(e)?n=Xt(t,e):(n=Xt(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n}function te(t,e){return function(n,i){var s,r;return null===i||isNaN(+i)||(et(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period)."),r=n,n=i,i=r),n="string"==typeof n?+n:n,s=Rt(n,i),ee(this,s,t),this}}function ee(e,n,i,s){var r=n._milliseconds,o=n._days,a=n._months;s=null==s?!0:s,r&&e._d.setTime(+e._d+r*i),o&&U(e,"Date",W(e,"Date")+o*i),a&&$(e,W(e,"Month")+a*i),s&&t.updateOffset(e,o||a)}function ne(t,e){var n=t||Wt(),i=At(n,this).startOf("day"),s=this.diff(i,"days",!0),r=-6>s?"sameElse":-1>s?"lastWeek":0>s?"lastDay":1>s?"sameDay":2>s?"nextDay":7>s?"nextWeek":"sameElse";return this.format(e&&e[r]||this.localeData().calendar(r,this,Wt(n)))}function ie(){return new l(this)}function se(t,e){var n;return e=T("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=m(t)?t:Wt(t),+this>+t):(n=m(t)?+t:+Wt(t),n<+this.clone().startOf(e))}function re(t,e){var n;return e=T("undefined"!=typeof e?e:"millisecond"),"millisecond"===e?(t=m(t)?t:Wt(t),+t>+this):(n=m(t)?+t:+Wt(t),+this.clone().endOf(e)<n)}function oe(t,e,n){return this.isAfter(t,n)&&this.isBefore(e,n)}function ae(t,e){var n;return e=T(e||"millisecond"),"millisecond"===e?(t=m(t)?t:Wt(t),+this===+t):(n=+Wt(t),+this.clone().startOf(e)<=n&&n<=+this.clone().endOf(e))}function ue(t,e,n){var i,s,r=At(t,this),o=6e4*(r.utcOffset()-this.utcOffset());return e=T(e),"year"===e||"month"===e||"quarter"===e?(s=de(this,r),"quarter"===e?s/=3:"year"===e&&(s/=12)):(i=this-r,s="second"===e?i/1e3:"minute"===e?i/6e4:"hour"===e?i/36e5:"day"===e?(i-o)/864e5:"week"===e?(i-o)/6048e5:i),n?s:_(s)}function de(t,e){var n,i,s=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(s,"months");return 0>e-r?(n=t.clone().add(s-1,"months"),i=(e-r)/(r-n)):(n=t.clone().add(s+1,"months"),i=(e-r)/(n-r)),-(s+i)}function ce(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function he(){var t=this.clone().utc();return 0<t.year()&&t.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():E(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):E(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function fe(e){var n=E(this,e||t.defaultFormat);return this.localeData().postformat(n)}function le(t,e){return this.isValid()?Rt({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function me(t){return this.from(Wt(),t)}function _e(t,e){return this.isValid()?Rt({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function ge(t){return this.to(Wt(),t)}function ye(t){var e;return void 0===t?this._locale._abbr:(e=S(t),null!=e&&(this._locale=e),this)}function pe(){return this._locale}function ve(t){switch(t=T(t)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t&&this.weekday(0),"isoWeek"===t&&this.isoWeekday(1),"quarter"===t&&this.month(3*Math.floor(this.month()/3)),this}function De(t){return t=T(t),void 0===t||"millisecond"===t?this:this.startOf(t).add(1,"isoWeek"===t?"week":t).subtract(1,"ms")}function we(){return+this._d-6e4*(this._offset||0)}function Me(){return Math.floor(+this/1e3)}function Ye(){return this._offset?new Date(+this):this._d}function Se(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function ke(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function Te(){return c(this)}function be(){return o({},d(this))}function Oe(){return d(this).overflow}function We(t,e){F(0,[t,t.length],0,e)}function Ue(t,e,n){return dt(Wt([t,11,31+e-n]),e,n).week}function Ce(t){var e=dt(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==t?e:this.add(t-e,"y")}function Ge(t){var e=dt(this,1,4).year;return null==t?e:this.add(t-e,"y")}function Fe(){return Ue(this.year(),1,4)}function Ie(){var t=this.localeData()._week;return Ue(this.year(),t.dow,t.doy)}function Pe(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}function Ee(t,e){return"string"!=typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"==typeof t?t:null):parseInt(t,10)}function Ae(t){return this._weekdays[t.day()]}function xe(t){return this._weekdaysShort[t.day()]}function He(t){return this._weekdaysMin[t.day()]}function Le(t){var e,n,i;for(this._weekdaysParse=this._weekdaysParse||[],e=0;7>e;e++)if(this._weekdaysParse[e]||(n=Wt([2e3,1]).day(e),i="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=new RegExp(i.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e}function ze(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Ee(t,this.localeData()),this.add(t-e,"d")):e}function Ne(t){var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Ve(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)}function Ze(t,e){F(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function je(t,e){return e._meridiemParse}function Be(t){return"p"===(t+"").toLowerCase().charAt(0)}function qe(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}function Je(t,e){e[fi]=g(1e3*("0."+t))}function $e(){return this._isUTC?"UTC":""}function Re(){return this._isUTC?"Coordinated Universal Time":""}function Qe(t){return Wt(1e3*t)}function Xe(){return Wt.apply(null,arguments).parseZone()}function Ke(t,e,n){var i=this._calendar[t];return"function"==typeof i?i.call(e,n):i}function tn(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}function en(){return this._invalidDate}function nn(t){return this._ordinal.replace("%d",t)}function sn(t){return t}function rn(t,e,n,i){var s=this._relativeTime[n];return"function"==typeof s?s(t,e,n,i):s.replace(/%d/i,t)}function on(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)}function an(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function un(t,e,n,i){var s=S(),r=a().set(i,e);return s[n](r,t)}function dn(t,e,n,i,s){if("number"==typeof t&&(e=t,t=void 0),t=t||"",null!=e)return un(t,e,n,s);var r,o=[];for(r=0;i>r;r++)o[r]=un(t,r,n,s);return o}function cn(t,e){return dn(t,e,"months",12,"month")}function hn(t,e){return dn(t,e,"monthsShort",12,"month")}function fn(t,e){return dn(t,e,"weekdays",7,"day")}function ln(t,e){return dn(t,e,"weekdaysShort",7,"day")}function mn(t,e){return dn(t,e,"weekdaysMin",7,"day")}function _n(){var t=this._data;return this._milliseconds=$i(this._milliseconds),this._days=$i(this._days),this._months=$i(this._months),t.milliseconds=$i(t.milliseconds),t.seconds=$i(t.seconds),t.minutes=$i(t.minutes),t.hours=$i(t.hours),t.months=$i(t.months),t.years=$i(t.years),this}function gn(t,e,n,i){var s=Rt(e,n);return t._milliseconds+=i*s._milliseconds,t._days+=i*s._days,t._months+=i*s._months,t._bubble()}function yn(t,e){return gn(this,t,e,1)}function pn(t,e){return gn(this,t,e,-1)}function vn(t){return 0>t?Math.floor(t):Math.ceil(t)}function Dn(){var t,e,n,i,s,r=this._milliseconds,o=this._days,a=this._months,u=this._data;return r>=0&&o>=0&&a>=0||0>=r&&0>=o&&0>=a||(r+=864e5*vn(Mn(a)+o),o=0,a=0),u.milliseconds=r%1e3,t=_(r/1e3),u.seconds=t%60,e=_(t/60),u.minutes=e%60,n=_(e/60),u.hours=n%24,o+=_(n/24),s=_(wn(o)),a+=s,o-=vn(Mn(s)),i=_(a/12),a%=12,u.days=o,u.months=a,u.years=i,this}function wn(t){return 4800*t/146097}function Mn(t){return 146097*t/4800}function Yn(t){var e,n,i=this._milliseconds;if(t=T(t),"month"===t||"year"===t)return e=this._days+i/864e5,n=this._months+wn(e),"month"===t?n:n/12;switch(e=this._days+Math.round(Mn(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function Sn(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12)}function kn(t){return function(){return this.as(t)}}function Tn(t){return t=T(t),this[t+"s"]()}function bn(t){return function(){return this._data[t]}}function On(){return _(this.days()/7)}function Wn(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function Un(t,e,n){var i=Rt(t).abs(),s=hs(i.as("s")),r=hs(i.as("m")),o=hs(i.as("h")),a=hs(i.as("d")),u=hs(i.as("M")),d=hs(i.as("y")),c=s<fs.s&&["s",s]||1===r&&["m"]||r<fs.m&&["mm",r]||1===o&&["h"]||o<fs.h&&["hh",o]||1===a&&["d"]||a<fs.d&&["dd",a]||1===u&&["M"]||u<fs.M&&["MM",u]||1===d&&["y"]||["yy",d];return c[2]=e,c[3]=+t>0,c[4]=n,Wn.apply(null,c)}function Cn(t,e){return void 0===fs[t]?!1:void 0===e?fs[t]:(fs[t]=e,!0)}function Gn(t){var e=this.localeData(),n=Un(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}function Fn(){var t,e,n,i=ls(this._milliseconds)/1e3,s=ls(this._days),r=ls(this._months);t=_(i/60),e=_(t/60),i%=60,t%=60,n=_(r/12),r%=12;var o=n,a=r,u=s,d=e,c=t,h=i,f=this.asSeconds();return f?(0>f?"-":"")+"P"+(o?o+"Y":"")+(a?a+"M":"")+(u?u+"D":"")+(d||c||h?"T":"")+(d?d+"H":"")+(c?c+"M":"")+(h?h+"S":""):"P0D"}var In,Pn,En=t.momentProperties=[],An=!1,xn={},Hn={},Ln=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,zn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Nn={},Vn={},Zn=/\d/,jn=/\d\d/,Bn=/\d{3}/,qn=/\d{4}/,Jn=/[+-]?\d{6}/,$n=/\d\d?/,Rn=/\d{1,3}/,Qn=/\d{1,4}/,Xn=/[+-]?\d{1,6}/,Kn=/\d+/,ti=/[+-]?\d+/,ei=/Z|[+-]\d\d:?\d\d/gi,ni=/[+-]?\d+(\.\d{1,3})?/,ii=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,si={},ri={},oi=0,ai=1,ui=2,di=3,ci=4,hi=5,fi=6;F("M",["MM",2],"Mo",function(){return this.month()+1}),F("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),F("MMMM",0,0,function(t){return this.localeData().months(this,t)}),k("month","M"),H("M",$n),H("MM",$n,jn),H("MMM",ii),H("MMMM",ii),N(["M","MM"],function(t,e){e[ai]=g(t)-1}),N(["MMM","MMMM"],function(t,e,n,i){var s=n._locale.monthsParse(t,i,n._strict);null!=s?e[ai]=s:d(n).invalidMonth=t});var li="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),_i={};t.suppressDeprecationWarnings=!1;var gi=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yi=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],pi=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],vi=/^\/?Date\((\-?\d+)/i;t.createFromInputFallback=tt("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),F(0,["YY",2],0,function(){return this.year()%100}),F(0,["YYYY",4],0,"year"),F(0,["YYYYY",5],0,"year"),F(0,["YYYYYY",6,!0],0,"year"),k("year","y"),H("Y",ti),H("YY",$n,jn),H("YYYY",Qn,qn),H("YYYYY",Xn,Jn),H("YYYYYY",Xn,Jn),N(["YYYYY","YYYYYY"],oi),N("YYYY",function(e,n){n[oi]=2===e.length?t.parseTwoDigitYear(e):g(e)}),N("YY",function(e,n){n[oi]=t.parseTwoDigitYear(e)}),t.parseTwoDigitYear=function(t){return g(t)+(g(t)>68?1900:2e3)};var Di=O("FullYear",!1);F("w",["ww",2],"wo","week"),F("W",["WW",2],"Wo","isoWeek"),k("week","w"),k("isoWeek","W"),H("w",$n),H("ww",$n,jn),H("W",$n),H("WW",$n,jn),V(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=g(t)});var wi={dow:0,doy:6};F("DDD",["DDDD",3],"DDDo","dayOfYear"),k("dayOfYear","DDD"),H("DDD",Rn),H("DDDD",Bn),N(["DDD","DDDD"],function(t,e,n){n._dayOfYear=g(t)}),t.ISO_8601=function(){};var Mi=tt("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var t=Wt.apply(null,arguments);return this>t?this:t}),Yi=tt("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var t=Wt.apply(null,arguments);return t>this?this:t});Pt("Z",":"),Pt("ZZ",""),H("Z",ei),H("ZZ",ei),N(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=Et(t)});var Si=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var ki=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ti=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;Rt.fn=Ft.prototype;var bi=te(1,"add"),Oi=te(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Wi=tt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});F(0,["gg",2],0,function(){return this.weekYear()%100}),F(0,["GG",2],0,function(){return this.isoWeekYear()%100}),We("gggg","weekYear"),We("ggggg","weekYear"),We("GGGG","isoWeekYear"),We("GGGGG","isoWeekYear"),k("weekYear","gg"),k("isoWeekYear","GG"),H("G",ti),H("g",ti),H("GG",$n,jn),H("gg",$n,jn),H("GGGG",Qn,qn),H("gggg",Qn,qn),H("GGGGG",Xn,Jn),H("ggggg",Xn,Jn),V(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=g(t)}),V(["gg","GG"],function(e,n,i,s){n[s]=t.parseTwoDigitYear(e)}),F("Q",0,0,"quarter"),k("quarter","Q"),H("Q",Zn),N("Q",function(t,e){e[ai]=3*(g(t)-1)}),F("D",["DD",2],"Do","date"),k("date","D"),H("D",$n),H("DD",$n,jn),H("Do",function(t,e){return t?e._ordinalParse:e._ordinalParseLenient}),N(["D","DD"],ui),N("Do",function(t,e){e[ui]=g(t.match($n)[0],10)});var Ui=O("Date",!0);F("d",0,"do","day"),F("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),F("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),F("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),F("e",0,0,"weekday"),F("E",0,0,"isoWeekday"),k("day","d"),k("weekday","e"),k("isoWeekday","E"),H("d",$n),H("e",$n),H("E",$n),H("dd",ii),H("ddd",ii),H("dddd",ii),V(["dd","ddd","dddd"],function(t,e,n){var i=n._locale.weekdaysParse(t);null!=i?e.d=i:d(n).invalidWeekday=t}),V(["d","e","E"],function(t,e,n,i){e[i]=g(t)});var Ci="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Gi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Fi="Su_Mo_Tu_We_Th_Fr_Sa".split("_");F("H",["HH",2],0,"hour"),F("h",["hh",2],0,function(){return this.hours()%12||12}),Ze("a",!0),Ze("A",!1),k("hour","h"),H("a",je),H("A",je),H("H",$n),H("h",$n),H("HH",$n,jn),H("hh",$n,jn),N(["H","HH"],di),N(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),N(["h","hh"],function(t,e,n){e[di]=g(t),d(n).bigHour=!0});var Ii=/[ap]\.?m?\.?/i,Pi=O("Hours",!0);F("m",["mm",2],0,"minute"),k("minute","m"),H("m",$n),H("mm",$n,jn),N(["m","mm"],ci);var Ei=O("Minutes",!1);F("s",["ss",2],0,"second"),k("second","s"),H("s",$n),H("ss",$n,jn),N(["s","ss"],hi);var Ai=O("Seconds",!1);F("S",0,0,function(){return~~(this.millisecond()/100)}),F(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),F(0,["SSS",3],0,"millisecond"),F(0,["SSSS",4],0,function(){return 10*this.millisecond()}),F(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),F(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),F(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),F(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),F(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),k("millisecond","ms"),H("S",Rn,Zn),H("SS",Rn,jn),H("SSS",Rn,Bn);var xi;for(xi="SSSS";xi.length<=9;xi+="S")H(xi,Kn);for(xi="S";xi.length<=9;xi+="S")N(xi,Je);var Hi=O("Milliseconds",!1);F("z",0,0,"zoneAbbr"),F("zz",0,0,"zoneName");var Li=l.prototype;Li.add=bi,Li.calendar=ne,Li.clone=ie,Li.diff=ue,Li.endOf=De,Li.format=fe,Li.from=le,Li.fromNow=me,Li.to=_e,Li.toNow=ge,Li.get=C,Li.invalidAt=Oe,Li.isAfter=se,Li.isBefore=re,Li.isBetween=oe,Li.isSame=ae,Li.isValid=Te,Li.lang=Wi,Li.locale=ye,Li.localeData=pe,Li.max=Yi,Li.min=Mi,Li.parsingFlags=be,Li.set=C,Li.startOf=ve,Li.subtract=Oi,Li.toArray=Se,Li.toObject=ke,Li.toDate=Ye,Li.toISOString=he,Li.toJSON=he,Li.toString=ce,Li.unix=Me,Li.valueOf=we,Li.year=Di,Li.isLeapYear=ut,Li.weekYear=Ce,Li.isoWeekYear=Ge,Li.quarter=Li.quarters=Pe,Li.month=R,Li.daysInMonth=Q,Li.week=Li.weeks=lt,Li.isoWeek=Li.isoWeeks=mt,Li.weeksInYear=Ie,Li.isoWeeksInYear=Fe,Li.date=Ui,Li.day=Li.days=ze,Li.weekday=Ne,Li.isoWeekday=Ve,Li.dayOfYear=gt,Li.hour=Li.hours=Pi,Li.minute=Li.minutes=Ei,Li.second=Li.seconds=Ai,
Li.millisecond=Li.milliseconds=Hi,Li.utcOffset=Ht,Li.utc=zt,Li.local=Nt,Li.parseZone=Vt,Li.hasAlignedHourOffset=Zt,Li.isDST=jt,Li.isDSTShifted=Bt,Li.isLocal=qt,Li.isUtcOffset=Jt,Li.isUtc=$t,Li.isUTC=$t,Li.zoneAbbr=$e,Li.zoneName=Re,Li.dates=tt("dates accessor is deprecated. Use date instead.",Ui),Li.months=tt("months accessor is deprecated. Use month instead",R),Li.years=tt("years accessor is deprecated. Use year instead",Di),Li.zone=tt("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Lt);var zi=Li,Ni={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Vi={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Zi="Invalid date",ji="%d",Bi=/\d{1,2}/,qi={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ji=p.prototype;Ji._calendar=Ni,Ji.calendar=Ke,Ji._longDateFormat=Vi,Ji.longDateFormat=tn,Ji._invalidDate=Zi,Ji.invalidDate=en,Ji._ordinal=ji,Ji.ordinal=nn,Ji._ordinalParse=Bi,Ji.preparse=sn,Ji.postformat=sn,Ji._relativeTime=qi,Ji.relativeTime=rn,Ji.pastFuture=on,Ji.set=an,Ji.months=B,Ji._months=li,Ji.monthsShort=q,Ji._monthsShort=mi,Ji.monthsParse=J,Ji.week=ct,Ji._week=wi,Ji.firstDayOfYear=ft,Ji.firstDayOfWeek=ht,Ji.weekdays=Ae,Ji._weekdays=Ci,Ji.weekdaysMin=He,Ji._weekdaysMin=Fi,Ji.weekdaysShort=xe,Ji._weekdaysShort=Gi,Ji.weekdaysParse=Le,Ji.isPM=Be,Ji._meridiemParse=Ii,Ji.meridiem=qe,M("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===g(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),t.lang=tt("moment.lang is deprecated. Use moment.locale instead.",M),t.langData=tt("moment.langData is deprecated. Use moment.localeData instead.",S);var $i=Math.abs,Ri=kn("ms"),Qi=kn("s"),Xi=kn("m"),Ki=kn("h"),ts=kn("d"),es=kn("w"),ns=kn("M"),is=kn("y"),ss=bn("milliseconds"),rs=bn("seconds"),os=bn("minutes"),as=bn("hours"),us=bn("days"),ds=bn("months"),cs=bn("years"),hs=Math.round,fs={s:45,m:45,h:22,d:26,M:11},ls=Math.abs,ms=Ft.prototype;ms.abs=_n,ms.add=yn,ms.subtract=pn,ms.as=Yn,ms.asMilliseconds=Ri,ms.asSeconds=Qi,ms.asMinutes=Xi,ms.asHours=Ki,ms.asDays=ts,ms.asWeeks=es,ms.asMonths=ns,ms.asYears=is,ms.valueOf=Sn,ms._bubble=Dn,ms.get=Tn,ms.milliseconds=ss,ms.seconds=rs,ms.minutes=os,ms.hours=as,ms.days=us,ms.weeks=On,ms.months=ds,ms.years=cs,ms.humanize=Gn,ms.toISOString=Fn,ms.toString=Fn,ms.toJSON=Fn,ms.locale=ye,ms.localeData=pe,ms.toIsoString=tt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Fn),ms.lang=Wi,F("X",0,0,"unix"),F("x",0,0,"valueOf"),H("x",ti),H("X",ni),N("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),N("x",function(t,e,n){n._d=new Date(g(t))}),t.version="2.10.6",e(Wt),t.fn=zi,t.min=Ct,t.max=Gt,t.utc=a,t.unix=Qe,t.months=cn,t.isDate=i,t.locale=M,t.invalid=h,t.duration=Rt,t.isMoment=m,t.weekdays=fn,t.parseZone=Xe,t.localeData=S,t.isDuration=It,t.monthsShort=hn,t.weekdaysMin=mn,t.defineLocale=Y,t.weekdaysShort=ln,t.normalizeUnits=T,t.relativeTimeThreshold=Cn;var _s=t;return _s});var BusterTimeSeries;BusterTimeSeries=function(){function t(t){this.config=t,console.log("BusterTimeSeries -----")}return t.prototype.init=function(){return this.targetDate=this.targetDate||moment(this.config.targetDate),this.currentDate=this.currentDate||moment(),this.evergreen_day_before=this.config.evergreen_day_before||!1,this.evergreen_day_of=this.config.evergreen_day_of||!1,this.getTimeDifference()},t.prototype.update=function(t,e){return this.targetDate=moment(t)||this.targetDate,this.currentDate=moment(e)||this.currentDate,this.getTimeDifference()},t.prototype.setImageElement=function(t){var e;if(this.config.imageElement)return e=document.getElementById(this.config.imageElement),e.setAttribute("src",t),e.setAttribute("source",t)},t.prototype.setVideoElement=function(t){var e;if(this.config.videoElement)return e=document.getElementById(this.config.videoElement),window.Enabler?e.setAttribute("sources",Enabler.getUrl(t)):e.setAttribute("src",t)},t.prototype.getTimeDifference=function(){var t,e,n;return n=this.currentDate.isBefore(this.targetDate,"week"),t=this.currentDate.isSame(this.targetDate,"week"),e=this.currentDate.isAfter(this.targetDate,"week"),n?this.setWeekBeforeImage():t?this.setThisWeekImage():e?this.setWeekAfterImage():void 0},t.prototype.setWeekBeforeImage=function(){var t,e,n;return e=this.currentDate.diff(this.targetDate,"days"),n=this.currentDate.diff(this.targetDate,"weeks"),t=-1*e,this.config.images&&this.setImageElement(this.config.images[t+1+"_days_before"]||this.config.images.outside_week),this.config.videos?this.setVideoElement(this.config.videos[t+1+"_days_before"]||this.config.videos.outside_week):void 0},t.prototype.setThisWeekImage=function(){var t,e,n;return e=this.currentDate.diff(this.targetDate,"days"),n=moment(this.config.targetDate),this.currentDate.isSame(this.targetDate,"day")?(this.config.images&&this.setImageElement(this.config.images.today),void(this.config.videos&&this.setVideoElement(this.config.videos.today))):e===-0?(this.config.images&&this.setImageElement(this.config.images.tomorrow),void(this.config.videos&&this.setVideoElement(this.config.videos.tomorrow))):this.currentDate.isAfter(this.targetDate,"day")?this.setWeekAfterImage(!1):(t=-1*e,this.config.images&&this.setImageElement(this.config.images[t+1+"_days_before"]||this.config.images.inside_week),this.config.videos?this.setVideoElement(this.config.videos[t+1+"_days_before"]||this.config.videos.inside_week):void 0)},t.prototype.setWeekAfterImage=function(t){var e,n;if(n=this.currentDate.diff(this.targetDate,"weeks"),e=this.currentDate.diff(this.targetDate,"days"),this.config.images&&this.config.images[e+"_days_after"]&&(t=!1),t!==!1){if(this.currentDate.isoWeekday()===this.targetDate.isoWeekday()&&this.evergreen_day_of)return this.config.videos&&this.setVideoElement(this.config.videos.sustaining_today),void(this.config.images&&this.setImageElement(this.config.images.sustaining_today));if(this.currentDate.isoWeekday()===this.targetDate.isoWeekday()-1&&this.evergreen_day_before)return this.config.videos&&this.setVideoElement(this.config.videos.sustaining_tomorrow),void(this.config.images&&this.setImageElement(this.config.images.sustaining_tomorrow))}return this.config.videos&&this.setVideoElement(this.config.videos[e+"_days_after"]||this.config.videos.sustaining_generic),this.config.images?this.setImageElement(this.config.images[e+"_days_after"]||this.config.images.sustaining_generic):void 0},t}(),window.BusterTimeSeries=BusterTimeSeries;