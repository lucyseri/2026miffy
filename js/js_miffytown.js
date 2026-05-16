const charactersInner = document.querySelector('section.characters-sec .inner');
const characterInnerA = document.querySelectorAll('section.characters-sec .inner a.character');
const characterInnerAImg = document.querySelectorAll('section.characters-sec .inner a.character img');
const characterInnerATXT = document.querySelectorAll('section.characters-sec .inner a.character span.txt');
const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup span.close-btn');
const popupImg = document.querySelector('.popup .popup-con img');
const popupH5 = document.querySelector('.popup .popup-con h5');
const popupP = document.querySelector('.popup .popup-con p');
const characterInfo = [
  {name: '미피', sub: '미피는 순수하고 긍정적인 성격에 새로운 경험을 즐기는 토끼랍니다.'},
  {name: '미피의 엄마 아빠', sub: '미피의 엄마와 아빠는 언제나 다정하게 미피를 돌봐주는 가족이에요. 미피가 새로운 것을 배우고 자랄 수 있도록 항상 옆에서 응원해 준답니다.'},
  {name: '미피의 할머니 할아버지', sub: '할머니와 할아버지는 미피에게 따뜻한 사랑을 주는 소중한 가족이에요. 함께 이야기를 나누고 즐거운 시간을 보내는 걸 좋아해요.'},
  {name: '미피 동생', sub: '미피의 동생은 작고 귀여운 아기 토끼예요. 미피는 동생을 아끼고 잘 돌봐주는 다정한 언니랍니다.'},
  {name: '밥 삼촌', sub: '삼촌은 항상 밝고 재미있는 이야기를 들려주는 멋진 어른이에요. 미피와 함께 놀아주는 것을 좋아해요.'},
  {name: '앨리스 고모', sub: '고모는 친절하고 상냥한 성격을 가지고 있어요. 미피에게 따뜻한 관심을 주며 함께 시간을 보내는 걸 좋아한답니다.'},
  {name: '스너피', sub: '스너피는 미피의 귀여운 강아지 친구예요. 항상 미피와 함께 놀며 즐거운 시간을 보내는 소중한 친구랍니다.'},
  {name: '멜라니', sub: '멜라니는 미피의 친구로, 멀리서 온 토끼예요. 미피와 사이좋게 지내며 함께 다양한 놀이를 즐겨요.'},
  {name: '댄', sub: '댄은 씩씩하고 활발한 미피의 친구예요. 밖에서 뛰어노는 것을 좋아하고, 친구들과 즐겁게 어울린답니다.'},
  {name: '보리스와 바바라', sub: '보리스는 힘이 세고 듬직하지만 마음은 아주 따뜻하고 친절한 곰 친구예요. 바바라는 차분하고 다정해 친구들을 잘 도와주고 함께 지내는 것을 좋아한답니다.'},
  {name: '뽀삐', sub: '뽀삐는 귀엽고 발랄한 돼지 친구예요. 친구들과 함께 노는 것을 정말 좋아해요.'}
];
//character list info
for(let i = 0;i<characterInnerA.length;i++){
  characterInnerAImg[i].setAttribute('src', `img/miffytown-page/miffytown-img${i}.png`);
  characterInnerAImg[i].setAttribute('alt', characterInfo[i].name);
  characterInnerATXT[i].innerText = characterInfo[i].name;
};
//popup
charactersInner.addEventListener('click', function(e){
  e.preventDefault();
  characterInnerA.forEach((el, idx)=>{
    if(e.target.parentElement==el){
      popup.classList.add('on');
      popupImg.setAttribute('src', `img/miffytown-page/miffytown-img${idx}.png`);
      popupImg.setAttribute('alt', characterInfo[idx].name);
      popupH5.innerText = characterInfo[idx].name;
      popupP.innerText = characterInfo[idx].sub;
    }
  })
});
popupCloseBtn.addEventListener('click', function(e){
  popup.classList.remove('on');
});