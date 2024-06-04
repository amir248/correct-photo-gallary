

// let news=document.createElement('gallary');
// news.innerHTML='gallary';
// document.querySelector('main').append(news);


document.getElementsByTagName('gallary')[0].innerHTML=`
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8196-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8196-700.webp" />

    <source srcset="full-site/img/DSC_8196.webp" type="image/webp" />
    <img src="full-site/img/DSC_8196.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8197-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8197-700.webp" />

    <source srcset="full-site/img/DSC_8197.webp" type="image/webp" />
    <img src="full-site/img/DSC_8197.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8198-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8198-700.webp" />

    <source srcset="full-site/img/DSC_8198.webp" type="image/webp" />
    <img src="full-site/img/DSC_8198.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8199-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8199-700.webp" />

    <source srcset="full-site/img/DSC_8199.webp" type="image/webp" />
    <img src="full-site/img/DSC_8199.JPG" alt="correct-photo-gallary-in-js">
</picture>

<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8200-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8200-700.webp" />

    <source srcset="full-site/img/DSC_8200.webp" type="image/webp" />
    <img src="full-site/img/DSC_8200.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8201-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8201-700.webp" />

    <source srcset="full-site/img/DSC_8201.webp" type="image/webp" />
    <img src="full-site/img/DSC_8201.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8202-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8202-700.webp" />

    <source srcset="full-site/img/DSC_8202.webp" type="image/webp" />
    <img src="full-site/img/DSC_8202.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8203-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8203-700.webp" />

    <source srcset="full-site/img/DSC_8203.webp" type="image/webp" />
    <img src="full-site/img/DSC_8203.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8204-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8204-700.webp" />

    <source srcset="full-site/img/DSC_8204.webp" type="image/webp" />
    <img src="full-site/img/DSC_8204.JPG" alt="correct-photo-gallary-in-js">
</picture>
<picture>
    <source media="(max-width: 300px)" srcset="full-site/img/DSC_8457-300.webp" />
    <source media="(max-width: 700px)" srcset="full-site/img/DSC_8457-700.webp" />

    <source srcset="full-site/img/DSC_8457.webp" type="image/webp" />
    <img src="full-site/img/DSC_8457.JPG" alt="correct-photo-gallary-in-js">
</picture>
`;
let countPhoto=document.querySelectorAll('gallary > picture > img');
// console.log(countPhoto.length);
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
// siteCondition.number==7;
let countNumber=+0;

document.querySelector('.leftArrow').addEventListener('click',()=>{
// console.log(countNumber+ " " + countPhoto.length);
        if(countNumber>0){
            if(countPhoto.length!==undefined){
                countPhoto[countNumber].style.display="none";
                countNumber--;
                countPhoto[countNumber].style.display="block";
            }else{
                countPhoto[countNumber].style.display="none";
                countNumber--;
                countPhoto[countNumber].style.display="block";
            }
        // console.log(countPhoto[countNumber]);
        }else if(countNumber==countPhoto.length){
            countPhoto[countNumber].style.display="none";
            countNumber--;
            countPhoto[countNumber].style.display='block';
        }else if(countNumber===0){
            countPhoto[countNumber].style.display="none";
            countNumber=countPhoto.length-1;// it's very important number because something don't woking
            countPhoto[countNumber].style.display='block';
        }else{
            countPhoto[countNumber].style.display="none";
            // countNumber=countPhoto.length;
            countPhoto[countNumber].style.display='block';
            // console.log('countNumber is null');
        }


});
document.querySelector('.rightArrow').addEventListener('click',()=>{
    // console.log(countNumber+ " " + countPhoto.length);

        if(countNumber<countPhoto.length-1){
            if(countPhoto.length!==undefined){
            countPhoto[countNumber].style.display="none";
            countNumber++;
        }
        // console.log(countPhoto[countNumber]);
        document.querySelectorAll('gallary > picture > img')[countNumber].style.display="block";
        }else if(countNumber>=countPhoto.length){
            countNumber=0;
        }else{
            countPhoto[countNumber].style.display="none";
            countNumber=0;
            countPhoto[countNumber].style.display='block';
            // console.log('countNumber is null');
        }


    });
