System.register([],(function(e,i){return{execute:function(){e((()=>{"use strict";var e={d:(i,t)=>{for(var a in t)e.o(t,a)&&!e.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:t[a]})},o:(e,i)=>Object.prototype.hasOwnProperty.call(e,i),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},i={};e.r(i),e.d(i,{default:()=>f});var t={xseconds_other:"sekundė_sekundžių_sekundes",xminutes_one:"minutė_minutės_minutę",xminutes_other:"minutės_minučių_minutes",xhours_one:"valanda_valandos_valandą",xhours_other:"valandos_valandų_valandas",xdays_one:"diena_dienos_dieną",xdays_other:"dienos_dienų_dienas",xweeks_one:"savaitė_savaitės_savaitę",xweeks_other:"savaitės_savaičių_savaites",xmonths_one:"mėnuo_mėnesio_mėnesį",xmonths_other:"mėnesiai_mėnesių_mėnesius",xyears_one:"metai_metų_metus",xyears_other:"metai_metų_metus",about:"apie",over:"daugiau nei",almost:"beveik",lessthan:"mažiau nei"},a=function(e,i,t,a){return i?a?"kelių sekundžių":"kelias sekundes":"kelios sekundės"},r=function(e,i,t,a){return i?a?o(t)[1]:o(t)[2]:o(t)[0]},n=function(e,i,t,a){var n=e+" ";return 1===e?n+r(0,i,t,a):i?a?n+o(t)[1]:n+(s(e)?o(t)[1]:o(t)[2]):n+(s(e)?o(t)[1]:o(t)[0])};function s(e){return e%10==0||e>10&&e<20}function o(e){return t[e].split("_")}var d={lessThanXSeconds:{one:a,other:n},xSeconds:{one:a,other:n},halfAMinute:"pusė minutės",lessThanXMinutes:{one:r,other:n},xMinutes:{one:r,other:n},aboutXHours:{one:r,other:n},xHours:{one:r,other:n},xDays:{one:r,other:n},aboutXWeeks:{one:r,other:n},xWeeks:{one:r,other:n},aboutXMonths:{one:r,other:n},xMonths:{one:r,other:n},aboutXYears:{one:r,other:n},xYears:{one:r,other:n},overXYears:{one:r,other:n},almostXYears:{one:r,other:n}};function u(e){return function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=i.width?String(i.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const l={date:u({formats:{full:"y 'm'. MMMM d 'd'., EEEE",long:"y 'm'. MMMM d 'd'.",medium:"y-MM-dd",short:"y-MM-dd"},defaultWidth:"full"}),time:u({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:u({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};var p={lastWeek:"'Praėjusį' eeee p",yesterday:"'Vakar' p",today:"'Šiandien' p",tomorrow:"'Rytoj' p",nextWeek:"eeee p",other:"P"};function m(e){return function(i,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,n=null!=t&&t.width?String(t.width):r;a=e.formattingValues[n]||e.formattingValues[r]}else{var s=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(i):i]}}const v={ordinalNumber:function(e,i){return Number(e)+"-oji"},era:m({values:{narrow:["pr. Kr.","po Kr."],abbreviated:["pr. Kr.","po Kr."],wide:["prieš Kristų","po Kristaus"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["I ketv.","II ketv.","III ketv.","IV ketv."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},defaultWidth:"wide",formattingValues:{narrow:["1","2","3","4"],abbreviated:["I k.","II k.","III k.","IV k."],wide:["I ketvirtis","II ketvirtis","III ketvirtis","IV ketvirtis"]},defaultFormattingWidth:"wide",argumentCallback:function(e){return e-1}}),month:m({values:{narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"]},defaultWidth:"wide",formattingValues:{narrow:["S","V","K","B","G","B","L","R","R","S","L","G"],abbreviated:["saus.","vas.","kov.","bal.","geg.","birž.","liep.","rugp.","rugs.","spal.","lapkr.","gruod."],wide:["sausio","vasario","kovo","balandžio","gegužės","birželio","liepos","rugpjūčio","rugsėjo","spalio","lapkričio","gruodžio"]},defaultFormattingWidth:"wide"}),day:m({values:{narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienis","pirmadienis","antradienis","trečiadienis","ketvirtadienis","penktadienis","šeštadienis"]},defaultWidth:"wide",formattingValues:{narrow:["S","P","A","T","K","P","Š"],short:["Sk","Pr","An","Tr","Kt","Pn","Št"],abbreviated:["sk","pr","an","tr","kt","pn","št"],wide:["sekmadienį","pirmadienį","antradienį","trečiadienį","ketvirtadienį","penktadienį","šeštadienį"]},defaultFormattingWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"vidurdienis",morning:"rytas",afternoon:"diena",evening:"vakaras",night:"naktis"}},defaultWidth:"wide",formattingValues:{narrow:{am:"pr. p.",pm:"pop.",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},abbreviated:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"},wide:{am:"priešpiet",pm:"popiet",midnight:"vidurnaktis",noon:"perpiet",morning:"rytas",afternoon:"popietė",evening:"vakaras",night:"naktis"}},defaultFormattingWidth:"wide"})};function h(e){return function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],n=i.match(r);if(!n)return null;var s,o=n[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(d)?function(e,i){for(var t=0;t<e.length;t++)if(e[t].test(o))return t}(d):function(e,i){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(o))return t}(d);return s=e.valueCallback?e.valueCallback(u):u,{value:s=t.valueCallback?t.valueCallback(s):s,rest:i.slice(o.length)}}}var k,g={ordinalNumber:(k={matchPattern:/^(\d+)(-oji)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e.match(k.matchPattern);if(!t)return null;var a=t[0],r=e.match(k.parsePattern);if(!r)return null;var n=k.valueCallback?k.valueCallback(r[0]):r[0];return{value:n=i.valueCallback?i.valueCallback(n):n,rest:e.slice(a.length)}}),era:h({matchPatterns:{narrow:/^p(r|o)\.?\s?(kr\.?|me)/i,abbreviated:/^(pr\.\s?(kr\.|m\.\s?e\.)|po\s?kr\.|mūsų eroje)/i,wide:/^(prieš Kristų|prieš mūsų erą|po Kristaus|mūsų eroje)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/prieš/i,/(po|mūsų)/i],any:[/^pr/i,/^(po|m)/i]},defaultParseWidth:"any"}),quarter:h({matchPatterns:{narrow:/^([1234])/i,abbreviated:/^(I|II|III|IV)\s?ketv?\.?/i,wide:/^(I|II|III|IV)\s?ketvirtis/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/1/i,/2/i,/3/i,/4/i],any:[/I$/i,/II$/i,/III/i,/IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:h({matchPatterns:{narrow:/^[svkbglr]/i,abbreviated:/^(saus\.|vas\.|kov\.|bal\.|geg\.|birž\.|liep\.|rugp\.|rugs\.|spal\.|lapkr\.|gruod\.)/i,wide:/^(sausi(s|o)|vasari(s|o)|kov(a|o)s|balandž?i(s|o)|gegužės?|birželi(s|o)|liep(a|os)|rugpjū(t|č)i(s|o)|rugsėj(is|o)|spali(s|o)|lapkri(t|č)i(s|o)|gruodž?i(s|o))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^v/i,/^k/i,/^b/i,/^g/i,/^b/i,/^l/i,/^r/i,/^r/i,/^s/i,/^l/i,/^g/i],any:[/^saus/i,/^vas/i,/^kov/i,/^bal/i,/^geg/i,/^birž/i,/^liep/i,/^rugp/i,/^rugs/i,/^spal/i,/^lapkr/i,/^gruod/i]},defaultParseWidth:"any"}),day:h({matchPatterns:{narrow:/^[spatkš]/i,short:/^(sk|pr|an|tr|kt|pn|št)/i,abbreviated:/^(sk|pr|an|tr|kt|pn|št)/i,wide:/^(sekmadien(is|į)|pirmadien(is|į)|antradien(is|į)|trečiadien(is|į)|ketvirtadien(is|į)|penktadien(is|į)|šeštadien(is|į))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^p/i,/^a/i,/^t/i,/^k/i,/^p/i,/^š/i],wide:[/^se/i,/^pi/i,/^an/i,/^tr/i,/^ke/i,/^pe/i,/^še/i],any:[/^sk/i,/^pr/i,/^an/i,/^tr/i,/^kt/i,/^pn/i,/^št/i]},defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:{narrow:/^(pr.\s?p.|pop.|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i,any:/^(priešpiet|popiet$|vidurnaktis|(vidurdienis|perpiet)|rytas|(diena|popietė)|vakaras|naktis)/i},defaultMatchWidth:"any",parsePatterns:{narrow:{am:/^pr/i,pm:/^pop./i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i},any:{am:/^pr/i,pm:/^popiet$/i,midnight:/^vidurnaktis/i,noon:/^(vidurdienis|perp)/i,morning:/rytas/i,afternoon:/(die|popietė)/i,evening:/vakaras/i,night:/naktis/i}},defaultParseWidth:"any"})};const f={code:"lt",formatDistance:function(e,i,a){var r,n=e.match(/about|over|almost|lessthan/i),s=n?e.replace(n[0],""):e,o=void 0!==(null==a?void 0:a.comparison)&&a.comparison>0,u=d[e];if(r="string"==typeof u?u:1===i?u.one(i,!0===(null==a?void 0:a.addSuffix),s.toLowerCase()+"_one",o):u.other(i,!0===(null==a?void 0:a.addSuffix),s.toLowerCase()+"_other",o),n){var l=n[0].toLowerCase();r=t[l]+" "+r}return null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"po "+r:"prieš "+r:r},formatLong:l,formatRelative:function(e,i,t,a){return p[e]},localize:v,match:g,options:{weekStartsOn:1,firstWeekContainsDate:4}};return i})())}}}));