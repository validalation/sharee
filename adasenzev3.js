//<![CDATA[
function seocipsgrid(a){for(var t=a.feed.entry||[],e=['<div class="recent-gallery">'],i=0;i<t.length;++i){for(var l=t[i],r=l.title.$t,n=l.media$thumbnail?l.media$thumbnail.url:"http://2.bp.blogspot.com/-4fCf53FqYKM/Vccsy7apoZI/AAAAAAAAK4o/XJkv3RkC0pw/s1600/default%2Bimage.png",s=n.replace("s72-c","s"+seocips_thumbs+"-c"),h=l.link||[],c=0;c<h.length&&"alternate"!=h[c].rel;++c);var d=h[c].href,m='<img src="'+s+'" width="'+seocips_thumbs+'" height="'+seocips_thumbs+'"/>',p=seocips_title?'<span class="ptitle">'+r+"</span>":"",g='<a href="'+d+'" target="_blank" title="'+r+'">'+m+p+"</a>";e.push('<div class="gallerytem">',g,"</div>")}e.push("</div>"),document.write(e.join(""))}
//
var _0xc295=["\x6C\x65\x6E\x67\x74\x68","\x65\x6E\x74\x72\x79","\x66\x65\x65\x64","\x24\x74","\x74\x69\x74\x6C\x65","\x6C\x69\x6E\x6B","\x72\x65\x6C","\x61\x6C\x74\x65\x72\x6E\x61\x74\x65","\x68\x72\x65\x66","\x73\x70\x6C\x69\x63\x65","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x3C\x68\x32\x3E","\x3C\x2F\x68\x32\x3E","\x77\x72\x69\x74\x65","\x3C\x75\x6C\x3E","\x3C\x6C\x69\x3E\x3C\x61\x20\x68\x72\x65\x66\x3D\x22","\x22\x20\x74\x69\x74\x6C\x65\x3D\x22","\x22\x20\x3E","\x3C\x2F\x61\x3E\x3C\x2F\x6C\x69\x3E","\x3C\x2F\x75\x6C\x3E","\x42\x79\x20\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x66\x61\x64\x68\x65\x6C\x39\x38\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x46\x61\x64\x68\x65\x6C\x20\x4B\x61\x6E\x73\x61\x7A\x22\x3E\x46\x61\x64\x68\x65\x6C\x20\x4B\x61\x6E\x73\x61\x7A\x3C\x2F\x61\x3E","\x68\x74\x6D\x6C","\x2E\x63\x72\x65\x64\x69\x74\x73","\x2E\x63\x72\x65\x64\x69\x74\x73\x3A\x76\x69\x73\x69\x62\x6C\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x66\x61\x64\x68\x65\x6C\x39\x38\x2E\x62\x6C\x6F\x67\x73\x70\x6F\x74\x2E\x63\x6F\x6D\x2F","\x72\x65\x61\x64\x79"];var relatedTitles= new Array();var relatedTitlesNum=0;var relatedUrls= new Array();function related_results_labels(_0x4ab7x5){for(var _0x4ab7x6=0;_0x4ab7x6<_0x4ab7x5[_0xc295[2]][_0xc295[1]][_0xc295[0]];_0x4ab7x6++){var _0x4ab7x7=_0x4ab7x5[_0xc295[2]][_0xc295[1]][_0x4ab7x6];relatedTitles[relatedTitlesNum]=_0x4ab7x7[_0xc295[4]][_0xc295[3]];for(var _0x4ab7x8=0;_0x4ab7x8<_0x4ab7x7[_0xc295[5]][_0xc295[0]];_0x4ab7x8++){if(_0x4ab7x7[_0xc295[5]][_0x4ab7x8][_0xc295[6]]==_0xc295[7]){relatedUrls[relatedTitlesNum]=_0x4ab7x7[_0xc295[5]][_0x4ab7x8][_0xc295[8]];relatedTitlesNum++;break}}}}function removeRelatedDuplicates(){var _0x4ab7x6= new Array(0);var _0x4ab7x5= new Array(0);for(var _0x4ab7x8=0;_0x4ab7x8<relatedUrls[_0xc295[0]];_0x4ab7x8++){if(!contains(_0x4ab7x6,relatedUrls[_0x4ab7x8])){_0x4ab7x6[_0xc295[0]]+=1;_0x4ab7x6[_0x4ab7x6[_0xc295[0]]-1]=relatedUrls[_0x4ab7x8];_0x4ab7x5[_0xc295[0]]+=1;_0x4ab7x5[_0x4ab7x5[_0xc295[0]]-1]=relatedTitles[_0x4ab7x8]}};relatedTitles=_0x4ab7x5;relatedUrls=_0x4ab7x6}function contains(_0x4ab7x6,_0x4ab7x7){for(var _0x4ab7x5=0;_0x4ab7x5<_0x4ab7x6[_0xc295[0]];_0x4ab7x5++){if(_0x4ab7x6[_0x4ab7x5]==_0x4ab7x7){return true}};return false}function printRelatedLabels(_0x4ab7x8){for(var _0x4ab7x6=0;_0x4ab7x6<relatedUrls[_0xc295[0]];_0x4ab7x6++){if(relatedUrls[_0x4ab7x6]==_0x4ab7x8){relatedUrls[_0xc295[9]](_0x4ab7x6,1);relatedTitles[_0xc295[9]](_0x4ab7x6,1)}};var _0x4ab7x5=Math[_0xc295[11]]((relatedTitles[_0xc295[0]]-1)*Math[_0xc295[10]]());var _0x4ab7x6=0;if(relatedTitles[_0xc295[0]]>1){document[_0xc295[14]](_0xc295[12]+relatedpoststitle+_0xc295[13])};document[_0xc295[14]](_0xc295[15]);while(_0x4ab7x6<relatedTitles[_0xc295[0]]&&_0x4ab7x6<20&&_0x4ab7x6<maxresults){document[_0xc295[14]](_0xc295[16]+relatedUrls[_0x4ab7x5]+_0xc295[17]+relatedTitles[_0x4ab7x5]+_0xc295[18]+relatedTitles[_0x4ab7x5]+_0xc295[19]);if(_0x4ab7x5<relatedTitles[_0xc295[0]]-1){_0x4ab7x5++}else {_0x4ab7x5=0};_0x4ab7x6++};document[_0xc295[14]](_0xc295[20]);relatedUrls[_0xc295[9]](0,relatedUrls[_0xc295[0]]);relatedTitles[_0xc295[9]](0,relatedTitles[_0xc295[0]])}$(document)[_0xc295[27]](function(){$(_0xc295[23])[_0xc295[22]](_0xc295[21]);setInterval(function(){if(!$(_0xc295[24])[_0xc295[0]]){window[_0xc295[25]][_0xc295[8]]=_0xc295[26]}},3000)})
//]]>
