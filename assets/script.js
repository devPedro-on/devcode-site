
/* ===================== CONSTELLATION ANIMATION ===================== */
(function(){
  const canvas = document.getElementById('constellation');
  const ctx = canvas.getContext('2d');
  const hero = canvas.parentElement;
  let w, h, dpr;
  let stars = [];
  let mouse = { x: null, y: null };
  const STAR_COUNT_DENSITY = 9000; // px^2 per star
  const LINK_DIST = 150;
  const MOUSE_LINK_DIST = 220;

  function resize(){
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.offsetWidth;
    h = hero.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    initStars();
  }

  function initStars(){
    const count = Math.max(40, Math.floor((w*h) / STAR_COUNT_DENSITY));
    stars = [];
    for(let i=0;i<count;i++){
      stars.push({
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-0.5)*0.18,
        vy: (Math.random()-0.5)*0.18,
        r: Math.random()*1.4 + 0.6,
        tw: Math.random()*Math.PI*2,
        twSpeed: 0.01 + Math.random()*0.02
      });
    }
  }

  function step(){
    ctx.clearRect(0,0,w,h);

    // update + draw stars
    for(let s of stars){
      s.x += s.vx;
      s.y += s.vy;
      if(s.x < -10) s.x = w+10;
      if(s.x > w+10) s.x = -10;
      if(s.y < -10) s.y = h+10;
      if(s.y > h+10) s.y = -10;
      s.tw += s.twSpeed;
    }

    // links between nearby stars
    for(let i=0;i<stars.length;i++){
      for(let j=i+1;j<stars.length;j++){
        const a = stars[i], b = stars[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < LINK_DIST){
          const alpha = (1 - dist/LINK_DIST) * 0.35;
          const grad = ctx.createLinearGradient(a.x,a.y,b.x,b.y);
          grad.addColorStop(0, `rgba(59,130,246,${alpha})`);
          grad.addColorStop(1, `rgba(34,211,238,${alpha})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
      // link to mouse
      if(mouse.x !== null){
        const dx = stars[i].x-mouse.x, dy = stars[i].y-mouse.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < MOUSE_LINK_DIST){
          const alpha = (1 - dist/MOUSE_LINK_DIST) * 0.5;
          ctx.strokeStyle = `rgba(148,197,255,${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // draw stars on top
    for(let s of stars){
      const twinkle = 0.55 + Math.sin(s.tw)*0.45;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(210,230,255,${twinkle})`;
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  hero.addEventListener('mousemove', (e)=>{
    const rect = hero.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  hero.addEventListener('mouseleave', ()=>{
    mouse.x = null; mouse.y = null;
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.addEventListener('resize', resize);
  resize();
  if(!prefersReduced){
    requestAnimationFrame(step);
  } else {
    step_once();
    function step_once(){ ctx.clearRect(0,0,w,h); for(let s of stars){ ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle='rgba(210,230,255,0.7)'; ctx.fill(); } }
  }
})();
