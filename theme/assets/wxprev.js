/* Local preview of the Wix replica sections (the store is password-locked). Renders theme sources with liquidjs + sample data. */
window.wxPreview=async function(secs,data){
  const base='/cdn/shop/t/2/assets/';
  if(!window.liquidjs){await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/liquidjs@10.16.1/dist/liquid.browser.min.js';s.onload=ok;s.onerror=no;document.head.appendChild(s);});}
  const CDN='https://cdn.shopify.com/s/files/1/0976/5332/6111/files/';
  const eng=new liquidjs.Liquid({jsTruthy:false});
  eng.registerFilter('file_img_url',(n)=>CDN+n);
  eng.registerFilter('file_url',(n)=>CDN+n);
  eng.registerFilter('image_url',(u)=>u);
  eng.registerFilter('money_without_currency',(c)=>(c/100).toLocaleString('en-IN',{minimumFractionDigits:2}));
  eng.registerFilter('money',(c)=>'Rs. '+(c/100).toLocaleString('en-IN',{minimumFractionDigits:2}));
  const cache={};async function src(n){if(!cache[n]){const r=await fetch(base+'wxsrc-'+n+'.txt?'+Date.now());cache[n]=await r.text();}return cache[n];}
  async function pre(s){
    s=s.replace(/\{%-?\s*schema\s*-?%\}[\s\S]*?\{%-?\s*endschema\s*-?%\}/g,'');
    s=s.replace(/\{%-?\s*form [^%]*%\}/g,'<form>').replace(/\{%-?\s*endform\s*-?%\}/g,'</form>');
    const m=[...s.matchAll(/\{%-?\s*render '([^']+)'\s*-?%\}/g)];
    for(const x of m){s=s.replace(x[0],await pre(await src(x[1])));}
    return s;
  }
  let html='';
  for(const [n,settings] of secs){
    const t=await pre(await src(n));
    const out=await eng.parseAndRender(t,Object.assign({},data,{section:{settings}}));
    html+='<div class="shopify-section">'+out+'</div>';
  }
  document.open();document.write('<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body>'+html+'</body></html>');document.close();
  return html.length;
};
window.wxData=function(){
  const C='https://cdn.shopify.com/s/files/1/0976/5332/6111/files/';
  const rows=[["Three’s Company Climber Earrings","8685ef_4ac8b22f2a2144188464baf90c12e861_mv2.jpg",9000],["Orbit Moissanite - Solo Climber Earring","8685ef_f6371e16dce8405aae2dc1098d55761d_mv2.jpg",7500],["Plus One Linked Drop Earrings","8685ef_f7abc1e1e2924f7cae84fe6f969a4a6a_mv2.jpg",11000],["Orbit Ear Climber - Solo","8685ef_60d0f55b7a6747b3aa5d00f674da5e92_mv2.jpg",7500],["Setting Sail Choker","8685ef_ec34644e8b8545ac8af8532fd38a7269_mv2.jpg",30000],["Twist of Fate Stud Earring","file_2de9227a-2a3b-4a99-93c2-711fb635df96.png",15500]];
  const prods=rows.map(r=>({title:r[0],url:'#',price:r[2]*100,featured_media:C+r[1]}));
  const L=(t,arr)=>({title:t,links:arr.map(x=>typeof x==='string'?{title:x,url:'#',links:[]}:x)});
  return {collections:{'home-new-in':{products:prods}},
    linklists:{'main-menu':L('Main menu',[{title:'Shop',url:'#',links:[{title:'New In',url:'#',links:[]},{title:'Jewellery',url:'#',links:[{title:'Explore all',url:'#'},{title:'Rings',url:'#'}]}]},'Gift Finder','June Gold Forming','About Us']),
      footer:L('Information',['My Profile','June Care Program','Return Form','Shipping','My Orders','Size Guide','FAQ']),
      'get-in-touch':L('Get in touch',['Email','Phone','Contact Us','Online consultation','Careers'])},
    shop:{name:'June.'},routes:{root_url:'/',search_url:'/search',cart_url:'/cart',account_url:'/account'},cart:{item_count:0}};
};
