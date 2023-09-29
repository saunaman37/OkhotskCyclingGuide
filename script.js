/*ローディング画面から画面遷移
================================*/
const loadingAreaGrey = document.querySelector('#loading');
const loadingAreagreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  //ローディング中(グレースクリーン)
  loadingAreaGrey.animate (
    {
      opacity: [1, 0],
      visibility: 'hidden',
    },
    {
      duration: 2000,
      delay: 1200,
      easing: 'ease',
      fill:'forwards',
    }
  );

//ローディング中(薄緑スクリーン)
loadingAreagreen.animate (
{
  translate: ['0 100vh','0 0','0 -100vh']
},
{
  duration: 2000,
  delay:800,
  easing: 'ease',
  fill: 'forwards',
}
);

//ローディング中テキスト
loadingText.animate (
  {
    opacity : [1, 0],
  },
  {
    duration: 1200,
    easing: 'ease',
    fill: 'forwards',
  }
);
});


