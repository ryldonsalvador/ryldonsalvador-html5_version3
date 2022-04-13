window.onload = function(e){

  var band_intro_anim = bodymovin.loadAnimation({
    container: document.getElementById('band_intro_anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_lgypiugq.json'
  })


  var second_ribbon = bodymovin.loadAnimation({
    container: document.getElementById('second_ribbon'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_wrbj9zzh.json'
  })

  var logo_intro = bodymovin.loadAnimation({
    container: document.getElementById('logo_intro'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets3.lottiefiles.com/packages/lf20_rssihawr.json',
  })

  var text_anim = bodymovin.loadAnimation({
    container: document.getElementById('text_anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_abuoe0ud.json',
  })

  var small_logo_anim = bodymovin.loadAnimation({
    container: document.getElementById('small_logo_anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets6.lottiefiles.com/packages/lf20_0xvs7vwk.json',
  })

  var block_party_logo_anim = bodymovin.loadAnimation({
    container: document.getElementById('block_party_logo_anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets5.lottiefiles.com/packages/lf20_uvzoo2qr.json',
  })

  var cta_anim = bodymovin.loadAnimation({
    container: document.getElementById('cta_anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets2.lottiefiles.com/packages/lf20_1nv3frj4.json',
  })

  band_intro_anim.addEventListener('data_ready', () => { 
    band_intro_anim.play(); 
  });

  band_intro_anim.onComplete = function() {
    document.getElementById("band_intro_anim").style.opacity = '0';
    second_ribbon.play();  
    logo_intro.play(); 
  }


  logo_intro.onEnterFrame = function () {
    if(second_ribbon.currentFrame >= 15){
      text_anim.setSpeed(.8); 
      small_logo_anim.setSpeed(.8); 
      cta_anim.setSpeed(.8); 
      text_anim.play();
      small_logo_anim.play();
      cta_anim.play();
    }
  }


  small_logo_anim.onEnterFrame = function () {
    console.log(small_logo_anim.currentFrame)
    if(small_logo_anim.currentFrame >= 18){
      block_party_logo_anim.play();
      document.getElementById("block_party_logo_anim").style.opacity = '1';
    }
  }
}