const DATA = {
prompts: {
1: ['2D_Canva_Prompt 01.jpg','2D_Codex_Prompt 01.png','2D_Firefly Image 5_Prompt 01.png','2D_Grok_Prompt 01.jpg','2D_MiriCanvas_Prompt 01_GPT Image 2.png','2D_Flow_Prompt 01_Nano Banana 2.jpeg'],
2: ['2D_Canva_Prompt 02.jpg','2D_Codex_Prompt 02.png','2D_Firefly Image 5_Prompt 02.png','2D_Grok_Prompt 02.jpg','2D_MiriCanvas_Prompt 02_GPT Image 2.png','2D_Flow_Prompt 02_Nano Banana 2.jpeg'],
3: ['2D_Canva_Prompt 03.png','2D_Codex_Prompt 03.png','2D_Firefly Image 5_Prompt 03.png','2D_Grok_Prompt 03.jpg','2D_MiriCanvas_Prompt 03_GPT Image 2.png','2D_Nano Banana 2_Prompt 03.png']
},
prompts3d: {
1: ['3D_Copilot_Prompt 01_front-1.JPG', '3D_Copilot_Prompt 01_side-2.JPG', '3D_Copilot_Prompt 01_back-3.JPG', '3D_Tripo_Prompt 01_front-1.JPG', '3D_Tripo_Prompt 01_side-2.JPG', '3D_Tripo_Prompt 01_back-3.JPG', '3D_Womp_Prompt 01_front-1.JPG', '3D_Womp_Prompt 01_side-2.JPG', '3D_Womp_Prompt 01_back-3.JPG', '3D_Tencent_Prompt 01_front-1.JPG', '3D_Tencent_Prompt 01_side-2.JPG', '3D_Tencent_Prompt 01_back-3.JPG', '3D_Tencent_Prompt 01(2)_front-1.JPG', '3D_Tencent_Prompt 01(2)_side-2.JPG', '3D_Tencent_Prompt 01(2)_back-3.JPG', '3D_Codex_Prompt 01_front-1.JPG', '3D_Codex_Prompt 01_side-2.JPG', '3D_Codex_Prompt 01_back-3.JPG'],
2: ['3D_Copilot_Prompt 02_front-1.png', '3D_Copilot_Prompt 02_side-2.png', '3D_Copilot_Prompt 02_back-3.png', '3D_Tripo_Prompt 02_front-1.JPG', '3D_Tripo_Prompt 02_side-2.JPG', '3D_Tripo_Prompt 02_back.JPG', '3D_Womp_Prompt 02_front-1.JPG', '3D_Womp_Prompt 02_side-2.JPG', '3D_Womp_Prompt 02_back-3.JPG', '3D_Tencent_Prompt 02_front-1.JPG', '3D_Tencent_Prompt 02_side-2.JPG', '3D_Tencent_Prompt 02_back-3.JPG', '3D_Codex_Prompt 02_front-1.JPG', '3D_Codex_Prompt 02_side-2.JPG', '3D_Codex_Prompt 02_back-3.JPG'],
3: ['3D_Copilot_Prompt 03_front-1.png', '3D_Copilot_Prompt 03_side-2.png', '3D_Copilot_Prompt 03_back-3.png', '3D_Tripo_Prompt 03_front-1.JPG', '3D_Tripo_Prompt 03_zoom-2.JPG', '3D_Tripo_Prompt 03_back-3.JPG', '3D_Womp_Prompt 03_front-1.JPG', '3D_Womp_Prompt 03_side-2.JPG', '3D_Womp_Prompt 03_back-3.JPG', '3D_Tencent_Prompt 03_front-1.JPG', '3D_Tencent_Prompt 03_side-2.JPG', '3D_Tencent_Prompt 03_back-3.JPG', '3D_Codex_Prompt 03_front-1.JPG', '3D_Codex_Prompt 03_side-2.JPG', '3D_Codex_Prompt 03_back-3.JPG']
},
fails: ['2D_Canva_Prompt 01-fail.jpg','2D_Flow_Prompt 03_Nano Banana 2_fail.jpeg','2D_Grok_Prompt 03_fail.jpg','2D_Nano Banana 2_Prompt 01_fail (2).png','2D_Nano Banana 2_Prompt 01_fail.png','2D_Nano Banana 2_Prompt 02_fail (1).png','2D_Nano Banana 2_Prompt 02_fail (2).png','2D_Nano Banana 2_Prompt 02_fail (3).png','2D_Nano Banana 2_Prompt 03_fail.png'],
};
const toolName = (name, section = 'main') => {
if (name.includes('Flow_Prompt') && name.includes('Nano Banana 2')) return 'Nano Banana 2';
if (name.includes('MiriCanvas_Prompt') && name.includes('GPT Image 2')) return 'GPT Image 2';
return name
.replace(/^2D_|^3D_/, '')
.split('_Prompt')[0]
.replace(/ Image 5/g,'')
.replace(/Tencent/g, 'Tencent Hunyuan3D')
.replace(/Tripo/g, 'Tripo AI')
.replace(/Copilot/g, 'Copilot 3D')
.replace(/-/g,' ')
.trim();
};
function displayFileName(name){
return name
.replace(/_?Prompt[ _-]*0?[123]/gi, '')
.replace(/_?prompt[ _-]*0?[123]/gi, '')
.replace(/_(front|side|back|zoom)-?\d*/gi, '')
.replace(/_(front|side|back|zoom)/gi, '')
.replace(/-(front|side|back|zoom)-?\d*/gi, '')
.replace(/\s+/g, ' ')
.replace(/__+/g, '_')
.replace(/_\./g, '.')
.replace(/-\./g, '.')
.trim();
}
function card(src, title, file){
const article = document.createElement('article');
article.className='card';
if (file && file.includes('2D_Nano Banana 2_Prompt 03.png')) article.classList.add('nano-prompt03-fit');
article.innerHTML=`<div class="thumb"><img src="${src}" alt="${title}" loading="lazy"></div><div class="card-body"><h3>${title}</h3></div>`;
return article;
}
function render2d(num=1){
const wrap=document.querySelector('#gallery2d'); wrap.innerHTML='';
DATA.prompts[num].forEach(name=>wrap.appendChild(card(`gm_Portfolio_img2d/${name}`, toolName(name, 'main'), name)));
enableLightbox();
}
function render3d(num=1){
const wrap=document.querySelector('#gallery3d');
wrap.innerHTML='';
DATA.prompts3d[num].forEach(name=>{
wrap.appendChild(card(`gm_Portfolio_img3d/${name}`, toolName(name), name));
});
enableLightbox();
}
function renderFails(){
const wrap=document.querySelector('#failGallery');
DATA.fails.forEach(name=>wrap.appendChild(card(`gm_Portfolio_img2d/${name}`, toolName(name, 'failed'), name)));
enableLightbox();
}
document.querySelectorAll('.tabs-2d button').forEach(btn=>btn.addEventListener('click',()=>{
document.querySelectorAll('.tabs-2d button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
render2d(btn.dataset.filter);
}));
document.querySelectorAll('.tabs-3d button').forEach(btn=>btn.addEventListener('click',()=>{
document.querySelectorAll('.tabs-3d button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
render3d(btn.dataset.filter);
}));
function enableLightbox(){
document.querySelectorAll('main section:not(.hero) .thumb img').forEach(img=>{
img.onclick = () => openLightbox(img.src, img.alt);
});
}
function openLightbox(src, alt){
let overlay = document.querySelector('.image-modal');
if(!overlay){
overlay = document.createElement('div');
overlay.className = 'image-modal';
overlay.innerHTML = '<button type="button" aria-label="close image">×</button><img alt="">';
document.body.appendChild(overlay);
overlay.addEventListener('click', (e)=>{
if(e.target === overlay || e.target.tagName === 'BUTTON') overlay.classList.remove('open');
});
document.addEventListener('keydown', (e)=>{
if(e.key === 'Escape') overlay.classList.remove('open');
});
}
const modalImg = overlay.querySelector('img');
modalImg.src = src;
modalImg.alt = alt || 'expanded image';
overlay.classList.add('open');
}
render2d(1); render3d(1); renderFails();