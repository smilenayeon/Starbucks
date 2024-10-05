var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      function onYouTubeIframeAPIReady() {
          new YT.Player('player', {
          videoId: 'An6LvWQuj_8', //최소 재생할 비디오의 아이디
          playerVars: {
            autoplay: true, //자동재생
            loop: true, //반복 재생 반듯이 반복재생한 목록을 playList로 비디오 아이디를 제공해줘햐함
            playlist: 'An6LvWQuj_8',
          },
          events:{
            onReady: function (event) {    //비디오가 준비가 되면 함수를 실행하는 메소드
              event.target.mute() //비디오 음소거

            }
          }
          
        });
      }