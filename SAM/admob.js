function miAdmob() {
      var admob_ios_key = 'admob ios key here'; //put your admob IOS id here
      var admob_android_key = 'ca-app-pub-5798084021048325/4355786494'; //put your admob ANDROID id here
      var adId = (navigator.userAgent.indexOf('Android') &gt;=0) ?
      admob_android_key : admob_ios_key; //Detects if the mobile is ios or android and puts the id you need

      if ( window.plugins &amp;&amp; window.plugins.AdMob ) {

          var am = window.plugins.AdMob;
          am.createBannerView(
              {
                    'pub-5798084021048325': adId, //Add your publisher id
                    'adSize': am.AD_SIZE.BANNER, // for banner type
                    'bannerAtTop': false //Indicates whether you want the banner above all (true) or down at all (false)
                  }, function() {
                    am.requestAd( { 'isTesting':true }, function() {
                      am.showAd( true );
                    }, function() {
                      alert('Failed to load the ad');
                    })
                  }, function(){
                    alert( "Failed to create the ad view" );
                  });
      } else {
        alert('The AdMob plugin not ready.');
      }
    }
    function showAd( bshow ) {
      if ( window.plugins &amp;&amp; window.plugins.AdMob ) {
          var am = window.plugins.AdMob;
          am.showAd( bshow );
      } else {
        alert('The AdMob plugin not ready');
      }
    }
