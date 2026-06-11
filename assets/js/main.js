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
fails: {
1: ['2D_Nano Banana 2_Prompt 01_fail (2).png','2D_Nano Banana 2_Prompt 01_fail.png'],
2: ['2D_Nano Banana 2_Prompt 02_fail (1).png','2D_Nano Banana 2_Prompt 02_fail (2).png','2D_Nano Banana 2_Prompt 02_fail (3).png'],
3: ['2D_Grok_Prompt 03_fail.jpg','2D_Flow_Prompt 03_Nano Banana 2_fail.jpeg','2D_Nano Banana 2_Prompt 03_fail.png']
},
glb: {
1: [
{label:'Copilot 3D Prompt 01', src:'gm_Portfolio_img3d/3D_Copilot_Prompt 01.glb'},
{label:'Copilot 3D Prompt 02', src:'gm_Portfolio_img3d/3D_Copilot_Prompt 02.glb'},
{label:'Copilot 3D Prompt 03', src:'gm_Portfolio_img3d/3D_Copilot_Prompt 03.glb'},
{label:'Womp Prompt 01', src:'gm_Portfolio_img3d/3D_Womp_Prompt 01.glb'},
{label:'Womp Prompt 02', src:'gm_Portfolio_img3d/3D_Womp_Prompt 02.glb'},
{label:'Womp Prompt 03', src:'gm_Portfolio_img3d/3D_Womp_Prompt 03.glb'},
{label:'Tencent Hunyuan3D Prompt 01', src:'gm_Portfolio_img3d/3D_Tencent_Prompt 01.glb'},
{label:'Tencent Hunyuan3D Prompt 01-2', src:'gm_Portfolio_img3d/3D_Tencent_Prompt 01(2).glb'},
{label:'Tencent Hunyuan3D Prompt 02', src:'gm_Portfolio_img3d/3D_Tencent_Prompt 02.glb'},
{label:'Tencent Hunyuan3D Prompt 03', src:'gm_Portfolio_img3d/3D_Tencent_Prompt 03.glb'},
{label:'Codex Prompt 01', src:'gm_Portfolio_img3d/3D_Codex_Prompt 01_Blender.glb'},
{label:'Codex Prompt 02', src:'gm_Portfolio_img3d/3D_Codex_Prompt 02_Blender.glb'},
{label:'Codex Prompt 03', src:'gm_Portfolio_img3d/3D_Codex_Prompt 03_Blender.glb'}
],
2: [],
3: []
},
more: {
'2D_Canva_Prompt 01.jpg': ['2D_Canva_Prompt 01-fail.jpg']
},
};
const descriptions = {
'2D_Nano Banana 2_Prompt 01_fail (2).png': '배경 구성이 아쉬워 의도한 방향과 다르게 표현되었습니다.',
'2D_Nano Banana 2_Prompt 01_fail.png': '네온 느낌이 강해 배경과 모델 착장이 의도한 방향과 다르게 표현되었습니다.',
'2D_Nano Banana 2_Prompt 02_fail (1).png': '첫인상이 해파리처럼 보여 의도한 리테일 오브제 방향과 다르게 표현되었습니다.',
'2D_Nano Banana 2_Prompt 02_fail (2).png': '고급스럽고 럭셔리한 분위기는 잘 드러났지만, 명품 브랜드 이미지가 강하게 연상되어 이번 실험 방향과는 다르게 표현되었습니다.',
'2D_Nano Banana 2_Prompt 02_fail (3).png': '오브제와 쇼윈도 설치물처럼 자연스럽게 배치된 안경을 원했지만, 안경이 너무 직접적으로 강조되어 아쉬웠습니다.',
'2D_Grok_Prompt 03_fail.jpg': '안경알이 그대로 보존된 이미지를 원했지만, 렌즈 형태가 깨져 아쉬웠습니다.',
'2D_Flow_Prompt 03_Nano Banana 2_fail.jpeg': '안경 프레임보다 렌즈가 더 강하게 강조되어 의도한 균형과 다르게 표현되었습니다.',
'2D_Nano Banana 2_Prompt 03_fail.png': '안경이 겹치면서 이미지가 뭉개져 전체 형태가 불안정하게 보였습니다.'
};
const toolName = (name, section = 'main') => {
if (name.includes('Flow_Prompt') && name.includes('Nano Banana 2')) return 'Nano Banana 2';
if (name.includes('MiriCanvas_Prompt') && name.includes('GPT Image 2')) return 'GPT Image 2';
return name
.replace(/^2D_|^3D_/, '')
.split('_Prompt')[0]
.replace(/ Image 5/g,'')
.replace(/Tencent/g, 'Tencent Hunyuan3D')
.replace(/Tripo/g, 'Tripo 3D')
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
article.innerHTML=`<div class="thumb"><img src="${src}" alt="${title}" loading="lazy" data-file="${file || ''}"></div><div class="card-body"><h3>${title}</h3>${descriptions[file] ? `<p>${descriptions[file]}</p>` : ''}</div>`;
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
function renderFails(num=1){
const wrap=document.querySelector('#failGallery');
wrap.innerHTML='';
(DATA.fails[num] || []).forEach(name=>wrap.appendChild(card(`gm_Portfolio_img2d/${name}`, toolName(name, 'failed'), name)));
enableLightbox();
}
document.querySelectorAll('.tabs-2d button').forEach(btn=>btn.addEventListener('click',()=>{
document.querySelectorAll('.tabs-2d button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
render2d(btn.dataset.filter);
}));
document.querySelectorAll('.tabs-3d button[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
document.querySelectorAll('.tabs-3d button[data-filter]').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
current3dPrompt = Number(btn.dataset.filter);
render3d(btn.dataset.filter);
}));
document.querySelectorAll('.tabs-fail button').forEach(btn=>btn.addEventListener('click',()=>{
document.querySelectorAll('.tabs-fail button').forEach(b=>b.classList.remove('active'));
btn.classList.add('active');
renderFails(btn.dataset.filter);
}));
function enableLightbox(){
document.querySelectorAll('main section:not(.hero) .thumb img').forEach(img=>{
img.onclick = () => openLightbox(img.src, img.alt, img.dataset.file);
});
}
function openLightbox(src, alt, file){
let overlay = document.querySelector('.image-modal');
if(!overlay){
overlay = document.createElement('div');
overlay.className = 'image-modal';
overlay.innerHTML = '<button type="button" aria-label="close image">×</button><div class="modal-content"><img class="modal-main" alt=""><aside class="modal-more" hidden><h3>More</h3><div class="modal-more-grid"></div></aside></div>';
document.body.appendChild(overlay);
overlay.addEventListener('click', (e)=>{
if(e.target === overlay || e.target.tagName === 'BUTTON') overlay.classList.remove('open');
});
document.addEventListener('keydown', (e)=>{
if(e.key === 'Escape') overlay.classList.remove('open');
});
}
const modalImg = overlay.querySelector('.modal-main');
const more = overlay.querySelector('.modal-more');
const moreGrid = overlay.querySelector('.modal-more-grid');
modalImg.src = src;
modalImg.alt = alt || 'expanded image';
moreGrid.innerHTML = '';
const related = DATA.more[file] || [];
if(related.length){
related.forEach(name=>{
const fig = document.createElement('figure');
fig.innerHTML = `<img src="gm_Portfolio_img2d/${name}" alt="${toolName(name, 'failed')} failed result" data-related-src="gm_Portfolio_img2d/${name}"><figcaption>${toolName(name, 'failed')}</figcaption>`;
fig.querySelector('img').onclick = (e) => { e.stopPropagation(); modalImg.src = e.currentTarget.dataset.relatedSrc; modalImg.alt = e.currentTarget.alt; };
moreGrid.appendChild(fig);
});
more.hidden = false;
} else {
more.hidden = true;
}
overlay.classList.add('open');
}
let current3dPrompt = 1;
function renderGlbViewer(num = current3dPrompt){
  const stack = document.querySelector('#glbViewerStack');
  const promptTitle = document.querySelector('#glbPromptTitle');
  if(!stack || !promptTitle) return;
  promptTitle.textContent = '13 GLB Models';
  stack.innerHTML = '';
  const models = DATA.glb[1] || [];
  const wrap = document.createElement('div');
  wrap.className = 'glb-viewer-wrap';
  const aside = document.createElement('aside');
  aside.className = 'glb-viewer-aside';
  const main = document.createElement('section');
  main.className = 'glb-viewer-main';
  const renderMain = (model) => {
    main.innerHTML = '';
    const info = document.createElement('div');
    info.className = 'glb-info';
    const titleBox = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = model.label;
    titleBox.appendChild(h2);
    info.appendChild(titleBox);
    if(model.src){
      const actions = document.createElement('div');
      actions.className = 'glb-actions';
      const download = document.createElement('a');
      download.className = 'glb-btn';
      download.href = encodeURI(model.src);
      download.download = model.src.split('/').pop();
      download.textContent = 'GLB 다운로드';
      actions.appendChild(download);
      info.appendChild(actions);
    }
    main.appendChild(info);
    if(model.src){
      const viewer = document.createElement('model-viewer');
      viewer.id = 'glbMainViewer';
      viewer.setAttribute('src', encodeURI(model.src));
      viewer.setAttribute('camera-controls', '');
      viewer.setAttribute('auto-rotate', '');
      viewer.setAttribute('shadow-intensity', '1');
      viewer.setAttribute('exposure', '1');
      viewer.setAttribute('environment-image', 'neutral');
      viewer.setAttribute('alt', model.label);
      main.appendChild(viewer);
    } else {
      const missing = document.createElement('div');
      missing.className = 'glb-missing';
      missing.textContent = '해당 Prompt의 GLB 파일은 현재 ZIP에 포함되어 있지 않습니다.';
      main.appendChild(missing);
    }
  };
  models.forEach((model, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'glb-card';
    if(!model.src) button.classList.add('is-missing');
    if(index === 0) button.classList.add('active');
    button.innerHTML = `<b>${model.label}</b>`;
    button.addEventListener('click', () => {
      document.querySelectorAll('.glb-card').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderMain(model);
    });
    aside.appendChild(button);
  });
  wrap.appendChild(aside);
  wrap.appendChild(main);
  stack.appendChild(wrap);
  const firstAvailable = models.find(m => m.src) || models[0];
  if(firstAvailable){
    const firstIndex = models.indexOf(firstAvailable);
    aside.querySelectorAll('.glb-card').forEach((btn, i) => btn.classList.toggle('active', i === firstIndex));
    renderMain(firstAvailable);
  }
}
function openGlbViewer(){
  const overlay = document.querySelector('#glbOverlay');
  if(!overlay) return;
  renderGlbViewer(current3dPrompt);
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}
function closeGlbViewer(){
  const overlay = document.querySelector('#glbOverlay');
  if(!overlay) return;
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}
document.querySelector('#openGlbViewer')?.addEventListener('click', openGlbViewer);
document.querySelector('#closeGlbViewer')?.addEventListener('click', closeGlbViewer);
document.querySelector('#glbOverlay')?.addEventListener('click', (e) => { if(e.target.id === 'glbOverlay') closeGlbViewer(); });
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeGlbViewer(); });
render2d(1); render3d(1); renderFails(1);