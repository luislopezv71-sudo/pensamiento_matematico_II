(()=>{'use strict';const $=id=>document.getElementById(id);const temas=window.PMII_MODULOS||[];const cont=$('modulos');function render(q=''){cont.replaceChildren();const items=temas.filter(m=>(''+m.numero+' '+m.titulo+' '+m.descripcion).toLocaleLowerCase('es').includes(q.trim().toLocaleLowerCase('es')));for(const m of items){const card=document.createElement('article');card.className='module';const top=document.createElement('div');top.className='module-top';const number=document.createElement('span');number.className='module-num';number.textContent='PROGRESIÓN '+String(m.numero).padStart(2,'0');const status=document.createElement('span');status.className='status'+(m.estado==='disponible'?' ready':'');status.textContent=m.estado==='disponible'?'Disponible':'En preparación';top.append(number,status);const title=document.createElement('h3');title.textContent=m.titulo;const desc=document.createElement('p');desc.textContent=m.descripcion;card.append(top,title,desc);if(m.estado==='disponible'){const a=document.createElement('a');a.href=m.slug+'/index.html';a.textContent='Abrir módulo →';card.append(a)}else{const s=document.createElement('span');s.className='module-action';s.textContent='Próximamente';card.append(s)}cont.append(card)}$('sin-resultados').hidden=items.length>0;$('publicados').textContent=temas.filter(m=>m.estado==='disponible').length;$('total-modulos').textContent=temas.length}$('buscar').addEventListener('input',e=>render(e.target.value));render();const tasks=[['Definiciones','Conceptos fundamentales escritos con claridad.',5],['Ejemplos resueltos','Dos ejemplos con procedimiento explicado.',5],['Ejercicios en cuaderno','Tres ejercicios desarrollados y comprobados.',10],['Reflexión matemática','Explicación personal de lo aprendido.',5]];const list=$('lista-cuaderno');const checks=[];for(const [i,t] of tasks.entries()){const row=document.createElement('div');row.className='task';const input=document.createElement('input');input.type='checkbox';input.id='task-'+i;const label=document.createElement('label');label.htmlFor=input.id;const strong=document.createElement('strong');strong.textContent=t[0];const small=document.createElement('small');small.textContent=t[1];label.append(strong,small);const points=document.createElement('span');points.className='task-points';points.textContent=t[2]+' pts';row.append(input,label,points);list.append(row);checks.push(input);input.addEventListener('change',update)}function update(){const pts=checks.reduce((sum,c,i)=>sum+(c.checked?tasks[i][2]:0),0);$('puntos-cuaderno').textContent=pts+' / 25';$('barra-cuaderno').style.width=(pts/25*100)+'%'}function renderProgress(){
 let digital=0, pending=0, reported=0, complete=0;
 for(const m of temas){
   try{
     const raw=localStorage.getItem('pmii-p'+m.numero+'-v1');
     if(!raw)continue;
     const v=JSON.parse(raw), groups=['concept','practice','challenge','explain'];
     let points=0;
     for(const k of groups){if(Array.isArray(v[k]))points+=v[k].filter(x=>x===true).length*5;}
     points=Math.min(75,points);digital+=points;
     if(points===75)complete++;
     if(Array.isArray(v.notebook)){
       const weights=[5,5,10,5];pending+=weights.reduce((n,w,i)=>n+(v.notebook[i]===true?w:0),0);
       if(v.notebook.some(x=>x===true))reported++;
     }
   }catch(e){ /* Entrada local inválida: no contabilizar */ }
 }
 $('puntos-portal').textContent=String(digital)+' / 1050';
 const pendingEl=$('cuadernos-pendientes');if(pendingEl)pendingEl.textContent=String(pending)+' / 350';
 const label=$('resumen-modulos');if(label)label.textContent=complete+' módulos con 75 puntos digitales; '+reported+' cuadernos con actividades marcadas (sin calificación docente).';
}
window.addEventListener('storage',renderProgress);
window.addEventListener('pageshow',renderProgress);
renderProgress();
$('limpiar').addEventListener('click',()=>{checks.forEach(c=>c.checked=false);update()});update()})();