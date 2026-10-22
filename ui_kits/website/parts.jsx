/* BluePixel marketing site — UI kit parts. Namespaced on window.BPSite.
   Uses design-system tokens (var(--bp-*)) + the Logo component from the bundle. */
const { useState } = React;
const DS = window.BluePixelDesignSystem_ced77e || {};
const Logo = DS.Logo || (() => <b style={{fontFamily:'var(--bp-font-title)',fontWeight:700}}>BLUEPIXEL</b>);
const Glyph = DS.Glyph || (() => null);
const Pixelio = window.Group43768 || (() => null);

const PixelMark = ({size=30}) => (
  <div style={{width:size,height:size,background:'var(--bp-blue)',flex:'none'}}/>
);

/* ─── Button ─── */
function Btn({children, kind='primary', href='#', onClick}){
  const [h,setH]=useState(false);
  const base={display:'inline-flex',alignItems:'center',gap:8,fontFamily:'var(--bp-font-body)',
    fontWeight:700,fontSize:15,padding:'13px 24px',borderRadius:'var(--bp-radius-md)',
    cursor:'pointer',transition:'all var(--bp-dur) var(--bp-ease)',border:'2px solid transparent',textDecoration:'none'};
  const styles = kind==='primary'
    ? {...base,background:h?'var(--bp-blue-600)':'var(--bp-blue)',color:'#fff',boxShadow:h?'var(--bp-shadow-blue)':'none',transform:h?'translateY(-1px)':'none'}
    : kind==='ghost-dark'
    ? {...base,background:'transparent',color:'#fff',borderColor:h?'#fff':'rgba(255,255,255,.35)'}
    : {...base,background:'transparent',color:'var(--bp-ink)',borderColor:h?'var(--bp-blue)':'var(--bp-border)'};
  return <a href={href} onClick={onClick} style={styles} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{children}</a>;
}

/* ─── Nav ─── */
function Nav(){
  const [lang,setLang]=useState('Eng');
  const links=['About','Services','Capabilities','Work'];
  return (
    <header style={{position:'sticky',top:0,zIndex:50,background:'rgba(255,255,255,.86)',
      backdropFilter:'blur(14px)',borderBottom:'1px solid var(--bp-border)'}}>
      <div className="wrap" style={{display:'flex',alignItems:'center',gap:32,height:76}}>
        <a href="#top" style={{display:'flex',alignItems:'center'}}><Logo property1="dark" style={{transform:'scale(.92)',transformOrigin:'left center'}}/></a>
        <nav style={{display:'flex',gap:28,marginLeft:20}}>
          {links.map((l,i)=><NavLink key={l} label={l} active={i===0}/>)}
        </nav>
        <div style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:18}}>
          <div style={{display:'flex',border:'1px solid var(--bp-border)',borderRadius:'var(--bp-radius-pill)',overflow:'hidden',fontSize:13,fontWeight:700}}>
            {['Eng','Esp'].map(x=>(
              <button key={x} onClick={()=>setLang(x)} style={{border:0,cursor:'pointer',padding:'6px 14px',
                background:lang===x?'var(--bp-blue)':'transparent',color:lang===x?'#fff':'var(--bp-ink-soft)',fontFamily:'var(--bp-font-body)',fontWeight:700}}>{x}</button>
            ))}
          </div>
          <Btn kind="primary" href="#contact">Contact</Btn>
        </div>
      </div>
    </header>
  );
}
function NavLink({label,active}){
  const [h,setH]=useState(false);
  return <a href="#" style={{fontSize:15,fontWeight:active?700:500,color:active||h?'var(--bp-blue)':'var(--bp-ink)',position:'relative',paddingBottom:2}}
    onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{label}
    <span style={{position:'absolute',left:0,bottom:-4,height:2,width:active||h?'100%':0,background:'var(--bp-blue)',transition:'width var(--bp-dur) var(--bp-ease)'}}/>
  </a>;
}

/* ─── Hero ─── */
function Hero(){
  return (
    <section id="top" style={{background:'var(--bp-gradient-cover)',color:'#fff',position:'relative',overflow:'hidden'}}>
      {/* pixel confetti motif */}
      <div aria-hidden style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        {[['8%','22%','var(--bp-cyan)',14],['90%','30%','var(--bp-lime)',18],['82%','70%','var(--bp-magenta)',12],['14%','72%','var(--bp-purple)',16],['50%','12%','var(--bp-green)',10]].map((p,i)=>(
          <div key={i} style={{position:'absolute',left:p[0],top:p[1],width:p[3],height:p[3],background:p[2],opacity:.85,transform:`rotate(${i*18}deg)`}}/>
        ))}
      </div>
      <div className="wrap" style={{padding:'110px 40px 120px',position:'relative',display:'flex',alignItems:'center',gap:40}}>
        <div style={{maxWidth:640,flex:'1 1 auto'}}>
          <div className="eyebrow" style={{color:'var(--bp-cyan)'}}>Digital Evolution Partner</div>
          <h1 style={{fontSize:60,fontWeight:800,marginTop:20}}>We Build, Evolve, and Scale <span style={{color:'var(--bp-cyan)'}}>AI-Powered</span> Digital Platforms</h1>
          <p style={{fontSize:20,lineHeight:1.5,color:'rgba(255,255,255,.82)',marginTop:24,maxWidth:620}}>
            A long-term technology partner for companies investing in digital products, data, and AI.
          </p>
          <div style={{display:'flex',gap:14,marginTop:36,flexWrap:'wrap'}}>
            <Btn kind="primary" href="#model">Explore our model</Btn>
            <Btn kind="ghost-dark" href="#contact">Talk to our team</Btn>
          </div>
        </div>
        <div aria-hidden style={{flex:'0 0 300px',height:300,overflow:'hidden',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{transform:'scale(.52)',transformOrigin:'center'}}><Pixelio/></div>
        </div>
      </div>
    </section>
  );
}

/* ─── Client logos strip (wordmark placeholders) ─── */
function Logos(){
  const names=['Bimbo','LATAM','Sanborns','Grupo Bimbo','Nutresa','Cemex'];
  return (
    <div style={{background:'var(--bp-surface)',borderBottom:'1px solid var(--bp-border)'}}>
      <div className="wrap" style={{padding:'32px 40px',display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'center'}}>
        {names.map(n=><span key={n} style={{fontFamily:'var(--bp-font-title)',fontWeight:700,fontSize:22,color:'var(--bp-ink)',opacity:.32}}>{n}</span>)}
      </div>
    </div>
  );
}

/* ─── Capabilities ─── */
const CAPS=[
  {t:'Custom Software Development',c:'var(--bp-blue)',pts:['Scalable web and mobile platforms','Cloud-native and modular architecture','API integrations with existing systems','CI/CD pipelines and deployment automation']},
  {t:'UX Research & Product Strategy',c:'var(--bp-magenta)',pts:['Business-driven product strategy','User research and behavioral insights','User-centered platform design','Digital twins, UX audits & friction analysis']},
  {t:'Data & Analytics',c:'var(--bp-green)',pts:['AI-ready data architecture','Executive & operational dashboards','Real-time business intelligence','Conversational interfaces on live data']},
  {t:'AI Agents & Automation',c:'var(--bp-purple)',pts:['AI agents trained on real business data','Workflow & process automation','AI copilots for critical operations','Embedded AI within digital platforms']},
];
function Capabilities(){
  const [open,setOpen]=useState(0);
  return (
    <section id="capabilities" style={{padding:'96px 0',background:'var(--bp-surface-alt)'}}>
      <div className="wrap">
        <div className="eyebrow">Capabilities</div>
        <h2 style={{fontSize:40,fontWeight:800,marginTop:14,maxWidth:760}}>Everything your platform needs to launch, scale, and evolve intelligently.</h2>
        <div style={{marginTop:44,display:'grid',gridTemplateColumns:'1fr',gap:14}}>
          {CAPS.map((cap,i)=>(
            <div key={cap.t} onClick={()=>setOpen(open===i?-1:i)} style={{background:'#fff',borderRadius:'var(--bp-radius-lg)',
              padding:'26px 30px',cursor:'pointer',boxShadow:open===i?'var(--bp-shadow-md)':'var(--bp-shadow-sm)',
              transition:'box-shadow var(--bp-dur) var(--bp-ease)',borderLeft:`5px solid ${cap.c}`}}>
              <div style={{display:'flex',alignItems:'center',gap:16}}>
                <h3 style={{fontSize:24,fontWeight:700,flex:1}}>{cap.t}</h3>
                <span style={{color:cap.c,fontSize:26,transition:'transform var(--bp-dur)',transform:open===i?'rotate(45deg)':'none'}}>+</span>
              </div>
              <div style={{maxHeight:open===i?260:0,overflow:'hidden',transition:'max-height var(--bp-dur-slow) var(--bp-ease)'}}>
                <ul style={{margin:'18px 0 4px',paddingLeft:0,listStyle:'none',columns:2,columnGap:40}}>
                  {cap.pts.map(p=><li key={p} style={{fontSize:15,color:'var(--bp-ink-soft)',padding:'6px 0 6px 20px',position:'relative'}}>
                    <span style={{position:'absolute',left:0,top:12,width:7,height:7,background:cap.c}}/>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Service model ─── */
const MODEL=[
  {k:'01',t:'Build',s:'Platform Development',d:'We design and build scalable digital platforms, validated with real users and engineered to integrate AI agents from day one.'},
  {k:'02',t:'Futureproof',s:'Continuous Evolution',d:'This is where the real work begins. We continuously evolve, measure, and amplify your platform’s impact through real-world data and a living roadmap.'},
  {k:'03',t:'Agentic',s:'Operational Intelligence',d:'Every platform we build is agentic—powered by integrated AI that learns from user behavior and automates operational workflows.'},
];
function ServiceModel(){
  return (
    <section id="model" style={{padding:'100px 0',background:'var(--bp-navy)',color:'#fff'}}>
      <div className="wrap">
        <div className="eyebrow" style={{color:'var(--bp-cyan)'}}>Our Service Model</div>
        <h2 style={{fontSize:40,fontWeight:800,marginTop:14}}>One partner across the whole lifecycle</h2>
        <div style={{marginTop:52,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
          {MODEL.map(m=>(
            <div key={m.k} style={{background:'linear-gradient(160deg, rgba(45,201,216,.10), rgba(72,101,232,.06))',
              border:'1px solid rgba(255,255,255,.12)',borderRadius:'var(--bp-radius-xl)',padding:'32px 30px'}}>
              <div style={{fontFamily:'var(--bp-font-display)',fontSize:34,color:'var(--bp-cyan)'}}>{m.k}</div>
              <h3 style={{fontSize:26,fontWeight:800,marginTop:22,textTransform:'uppercase',letterSpacing:'.02em'}}>{m.t}</h3>
              <div style={{fontSize:15,fontWeight:700,color:'var(--bp-cyan)',marginTop:4}}>{m.s}</div>
              <p style={{fontSize:15,lineHeight:1.55,color:'rgba(255,255,255,.78)',marginTop:16}}>{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Featured work ─── */
const WORK=[
  {t:'Data-driven platforms for a global consumer goods leader',tags:'UX/UI • Data & Analytics • Branding',c:'var(--bp-blue)'},
  {t:'Optimizing one of LATAM’s leading loyalty platforms',tags:'UX/UI • Web Development • Responsive',c:'var(--bp-magenta)'},
  {t:'Reinventing digital commerce for an iconic retail brand',tags:'UX/UI • Mobile App • Web Development',c:'var(--bp-purple)'},
];
function Work(){
  return (
    <section id="work" style={{padding:'96px 0'}}>
      <div className="wrap">
        <div className="eyebrow">Our featured work</div>
        <h2 style={{fontSize:40,fontWeight:800,marginTop:14,maxWidth:820}}>Platforms that deliver measurable business impact — not just great interfaces.</h2>
        <div style={{marginTop:44,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
          {WORK.map(w=><WorkCard key={w.t} {...w}/>)}
        </div>
      </div>
    </section>
  );
}
function WorkCard({t,tags,c}){
  const [h,setH]=useState(false);
  return (
    <a href="#" onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{display:'block',borderRadius:'var(--bp-radius-lg)',overflow:'hidden',border:'1px solid var(--bp-border)',
      background:'#fff',boxShadow:h?'var(--bp-shadow-lg)':'var(--bp-shadow-sm)',transform:h?'translateY(-4px)':'none',
      transition:'all var(--bp-dur) var(--bp-ease)'}}>
      <div style={{height:180,background:`linear-gradient(150deg, ${c}, var(--bp-navy))`,position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',right:-20,bottom:-20,width:120,height:120,background:'rgba(255,255,255,.12)'}}/>
        <div style={{position:'absolute',left:24,top:24,width:26,height:26,background:'#fff'}}/>
      </div>
      <div style={{padding:'22px 24px'}}>
        <h3 style={{fontSize:19,fontWeight:700,lineHeight:1.25}}>{t}</h3>
        <div style={{fontSize:12,fontWeight:700,color:'var(--bp-ink-soft)',marginTop:14,letterSpacing:'.02em'}}>{tags}</div>
      </div>
    </a>
  );
}

/* ─── Contact CTA ─── */
function Contact(){
  return (
    <section id="contact" style={{padding:'90px 0'}}>
      <div className="wrap">
        <div style={{background:'var(--bp-gradient-cover)',borderRadius:'var(--bp-radius-xl)',padding:'64px 56px',
          color:'#fff',display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',position:'relative',overflow:'hidden'}}>
          <div style={{flex:'1 1 380px'}}>
            <div className="eyebrow" style={{color:'var(--bp-cyan)'}}>Let’s talk</div>
            <h2 style={{fontSize:38,fontWeight:800,marginTop:14}}>Do you want to start a project together?</h2>
            <p style={{fontSize:17,color:'rgba(255,255,255,.8)',marginTop:14}}>Fill out the form and we’ll get back to you within 24 hours.</p>
          </div>
          <div style={{flex:'0 0 auto',display:'flex',flexDirection:'column',gap:12}}>
            <Btn kind="primary" href="mailto:hello@bluepixel.mx">hello@bluepixel.mx</Btn>
            <Btn kind="ghost-dark" href="#">Book a call</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer(){
  const cols=[
    ['Capabilities',['Custom Software','UX Research & Strategy','Data & Analytics','AI Agents & Automation']],
    ['Services',['Build','Futureproof','Agentic']],
    ['Company',['About Us','Case Studies','Careers','Blog']],
  ];
  return (
    <footer style={{background:'var(--bp-navy-deep)',color:'rgba(255,255,255,.7)',padding:'64px 0 40px'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:40}}>
        <div>
          <Logo property1="white" style={{transform:'scale(.92)',transformOrigin:'left center'}}/>
          <p style={{marginTop:18,fontSize:14,maxWidth:240}}>Software that Feels Right. A UX/UI &amp; software consultancy building AI-powered platforms.</p>
          <div style={{display:'flex',gap:14,marginTop:20,fontSize:13,fontWeight:700}}>
            <a href="#" style={{color:'var(--bp-cyan)'}}>LinkedIn</a>
            <a href="#" style={{color:'var(--bp-cyan)'}}>Instagram</a>
            <a href="#" style={{color:'var(--bp-cyan)'}}>Facebook</a>
          </div>
        </div>
        {cols.map(([h,items])=>(
          <div key={h}>
            <div style={{fontFamily:'var(--bp-font-title)',fontWeight:700,color:'#fff',fontSize:14,textTransform:'uppercase',letterSpacing:'.12em'}}>{h}</div>
            <div style={{display:'flex',flexDirection:'column',gap:10,marginTop:16}}>
              {items.map(x=><a key={x} href="#" style={{fontSize:14}}>{x}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="wrap" style={{marginTop:48,paddingTop:24,borderTop:'1px solid rgba(255,255,255,.12)',fontSize:13,display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
        <span>© 2026 BluePixel. All rights reserved.</span>
        <span>hello@bluepixel.mx · Privacy · Terms</span>
      </div>
    </footer>
  );
}

window.BPSite={Nav,Hero,Logos,Capabilities,ServiceModel,Work,Contact,Footer,Btn};
