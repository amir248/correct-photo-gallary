

// let news=document.createElement('gallary');
// news.innerHTML='gallary';
// document.querySelector('main').append(news);


document.getElementsByTagName('gallary')[0].innerHTML=`
<picture>
    <img src="full-site/img/DSC_8196.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8197.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8198.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8199.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8196.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8200.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8201.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8202.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <img src="full-site/img/DSC_8203.JPG" alt="correct-photo-gallary-in-js">
</picture>
`;
let countPhoto=document.querySelectorAll('gallary > picture > img');
console.log(countPhoto.length);
// let number=1;
if(countPhoto!==null&&countPhoto!==undefined){
    for(let number=1;number<=countPhoto.length;number++){
        if(countPhoto[number]!==undefined){
            countPhoto[number].style.display="none";
        }
    }
}else{
    console.log('else');
}

const arrow=document.createElement('div');
arrow.className='arrow';
document.querySelector('gallary').append(arrow);
const leftArrow=document.createElement('span');
leftArrow.innerHTML=`<`;
leftArrow.className='leftArrow'
document.querySelector('gallary > .arrow').append(leftArrow);
const rightArrow=document.createElement('span');
rightArrow.innerHTML=`>`;
rightArrow.className='rightArrow';
document.querySelector('gallary > .arrow').append(rightArrow);
const siteCondition={};
siteCondition.number=+0;
document.querySelector('.leftArrow').addEventListener('click',()=>{
    siteCondition.number--;
    document.querySelector('gallary > picture > img').setAttribyte('src','');
    if(countPhoto[siteCondition.number]!==undefined&&countPhoto[siteCondition.number]!==null){
        countPhoto[siteCondition.number].style.display='block';
    }else{
        console.log(countPhoto[7].src +' !!!')
    }
});
