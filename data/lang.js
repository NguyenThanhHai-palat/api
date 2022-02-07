window.onload = function useronserver() {
  let lang = navigator.language;
  var id01 = 'Quốc Gia-Ngôn Ngữ';
  var id02 = 'Việt Nam (CHXHCNVN)';
  var id03 = 'Country-Language';
  var id04 = 'Country Out of Scope-with lang website is English';
  if (lang=="vi-VN"){
    document.getElementById("lang-warm").innerHTML = id01
    document.getElementById("lang-con").innerHTML = id02
  }
  else {
  document.getElementById("lang-warm").innerHTML = id03
  document.getElementById("lang-con").innerHTML = id04
}
}
