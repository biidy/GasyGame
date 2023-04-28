
/*the functions to use frequentily */
 function id (elem){
         return document.getElementById(elem);
 }
 function clas (elem){
      return document.getElementsByClassName(elem);
 }
/*function for the display block and display none*/
 function none(BTN){
    BTN.style.display='none';
}

function block(ELE){
    ELE.style.display='block';
}
/*var header of question*/
const tete="Inona ary zany";
let qst=id("qst");
/*for the button and their functions */
   const btninstr= id("btninstr");
   const btnhelp=id("btnhelp");
   const btnlalao=id("btnlalao");
   const btnmoyen =id("btnmoyen");
   const btndiff=id("btndiff");
   const chx=clas("choix");
   const afapo =id("btnafapo");
   const btnakm=id("btnakam");
   const prev=id("prev");
    /*function for the btn instruc et help*/
   function unshowbtn ( idt){
    const show = id(idt);
    block(show);
    none(btnhelp);
    none(btnlalao);
    none(btninstr);

   }

   /*function for the btn hilalao*/
   function hilalao (){
       block(btnmoyen);
       block(btndiff);
       block(btnhelp);
       none(btnlalao);
        none(btninstr);

   } 
   let ipt = id("input");
   
   /* function for btn antonony */
   var niv =0;
    function btnmoyn(){
        none(btnhelp);
       none(btnlalao) ;
        none(btninstr);
        none(btndiff);
        none(btnmoyen);
        block(ipt);
        block(afapo);
        block(btnakm);
        block(prev);
        block(qst);

        rand1();
        randchx();
        niv=1
        return niv;

    }
    /* function for btn sarotra*/
    function btndif(){
        none(btnhelp);
        none(btnlalao);
        none(btninstr);
        none(btndiff);
        none(btnmoyen);
        block(ipt);
        block(afapo);
        block(btnakm);
        block(prev);
        block(qst);
        rand2();
        niv=2;
        return niv;
    }


const akammoyen =[
    {
        suj: "Aleveno aho hipody amin'ny vatako taloha ",
    answer:'Katsaka'
    },  
  {
    suj:"Jerena izy menamena,hoanina izy tavi-kena,arina iz chocolat",
    answer:'Letisy'
  },
  {
    suj:"Ilay boka mitaingi-tseza",
    answer:'Mananasy',
  },  
  {
    suj:"Lasa aho fa ianao avelako eo",
    answer:'Diatongotra'
  },
    {
        suj: "Rehefa mandalo i kotokely dia miala satroka ingahy lehibe ",
        answer:'zinga'
    },

    {
        suj:"Ilay kely monina antrano an-trano vato",
        answer:'lela'
    },
    {
        suj:"Kapaina tsy hita fery",
        answer:'rano'
    },
    {
        suj: "Bibilava mifoka sigara",
        answer:'Masinina',
    },  
    {
       suj: "Loharano antedronkazo",
        anwer:'voasary'
    },
    {
        suj: "Ny ray aman-drenyy mitsangana ny zanaka mitsivalana",
        answer:'tohatra',
    },
    {
        suj:"Maty aho fa sady lanin'ny tany no laninn'ny olona",
        answer:'Tsihy'
    },
    {
        suj:"Soa tsy fangalatra",
        answer:'vadinolo'
   },
   {
    suj:"Totohina tsy fotsy,avela fotsy ho azy",
    answer:'volo'
   },
   {
    suj: "Ilay mahia mihankin-drindrina",
     answer:'kifafa'
   },
   {
    suj: "Akana vao mitombo",
    answer:'aloka'
   }
   
]


/* function to rand the suj in the niv moyen*/
var indice1;
function rand1(){
    const randomIndex = Math.floor(Math.random() * akammoyen.length);
    const randomQuestion = akammoyen[randomIndex].suj;
  /*const randomAnswer = akammoyen[randomIndex].answer;*/
    qst.innerText= tete +": " + randomQuestion;
    console.log(qst.innerHTML);
    indice1=randomIndex;
    
    
    
}
/*for the btn choose*/
const choix=[
    "aloka",
    "kifafa",
    "lela",
    "torimaso",
    "lela",
    "volo",
    "rano",
    "vadinolo",
    "fasana",
    "valala",
    "tsihy",
    "voasary",
    "katsaka",
    "mananasy",
    "masinina",
    "diatongotra",
    "tohatra",

 ];
 /*function to rand the btn choix*/
   const chx1=id("chx1");
   const chx2=id("chx2");
   const chx3=id("chx3");
   const chx4=id("chx4");

 function randchx (){
    chx1.style.display='block';
    chx2.style.display='block'; 
    chx3.style.display='block';
    chx4.style.display='block';

    const idx1 = Math.trunc(Math.random( )*(choix.length+1));
    const idx2= Math.trunc(Math.random( )*(choix.length+1));
    const idx3= Math.trunc(Math.random( )*(choix.length+1));
    const idx4= Math.trunc(Math.random( )*(choix.length+1));

    chx1.innerText= choix[idx1];
    chx2.innerText= choix[idx2];
    chx3.innerText= choix[idx3];
    chx4.innerText= choix[idx4];
 }


const akamdiff=[
    {
        suj: "faladia ambony ranjo",
    answer:'ravin-tsonjo'
    },
    {
    suj: "Mihiratra tsy mahita azy,mikimpy vao mahita azy",
    answer:'torimaso'
    },
    {
        suj: "akana vao mitombo",
        answer:'aloka'
     },
     {
        suj: "tsy omby tsy ondry nef mahalala ny mando",
        answer:'fanala'
       },
       {
        suj: "Izy efa-dahy milanja ,kotokely mikapoka lalitra,ingiahyNdriana ery ampiandrianana",
        answer:'omby'
       },
       {
        suj: "Any antsaha no mamela-pandrika ka ny any an-tanana no voa",
        answer:'fasana'
       },
       {
        suj: "bolobolo mitera-bato fotsy,vato fotsy mitera-bolobolo",
        answer:'akoho sy atody'
       },
       {
        suj: "Raha mihoka izy ambony ny lohany,raha mitsilany ambany ny lohany",
        answer:'valala'
       },
       {
        suj: "akao bararata tsy laoka aho hisotroako rano",
        answer:'fary'
       },
       {
        suj: "alina izy tonga tsy nagalarina ,atoandro very tsy nangalarina ",
        answer:'kintana'
       },
       {
        suj: "Andrahoin-tsy masaka ,atono mora foana",
        answer:'volo'
       },
       {
        suj: "vakiana ny vatam-paty,esorina ny lamba mena ,vao tsakoy fa hitera-menaka",
        answer:'voanjo'
       },
       {
        suj: "ny maty no milanja ny velona",
        answer:'farafara'
       },
       {
        suj: "Tsy atsipy tsy atoraka nefa mahatonga lavitra",
        answer:'eritreritra'
       },
       {
        suj: "Tsy atoraka tsy avily nefa mahatonga lavitra",
        answer:'maso'
       },
       {
        suj: "Ilay kely monina antrano vato",
        answer:'lela'
       }
]
var indice2;
function rand2 (){
    const randomIndex = Math.floor(Math.random() * akamdiff.length);
    const randomQuestion = akamdiff[randomIndex].suj;
  /*const randomAnswer = akammoyen[randomIndex].answer;*/
    qst.innerText= tete +":  " + randomQuestion;
    indice2=randomIndex;

    
}

/*funtion to have a score*/
var scr=0;
function score(idx,akam){
    let ipt = id("input");
    if(ipt.value==akam[idx].answer);
    
    scr++;  
    console.log(scr);  
} 
/*function to the button akamantatra*/
function btnakam (){
    if(niv==1){
        rand1();
     score(indice1,akammoyen);
     randchx();
    }
    else if(niv==2){
        rand2()
        score(indice2,akamdiff);
    }
    block(afapo);
    block(ipt);
    ipt.value="";
    rep.innerText="";
    
}
/*function for the button afapo*/
function btnafapo (){
    let rep =id("rep");
    if(niv==1){
    
     rep.innerText=akammoyen[indice1].answer;
    }
    else if(niv==2){
        rep.innerText=akamdiff[indice2].answer;   
    }
    block(rep);
   none(afapo);
   none(ipt) ;
}
/*function for the btn isa in the help and the btn help*/
const btnisa=id("isa");
function isa (){
       let p1= id("p1");
       p1.innerText=scr;
      none(btnisa);

}
btnhelp.addEventListener('click',(e)=>{
    e.preventDefault();
    none(btnmoyen);
    none(btndiff);

})
const instr =id("instruction");
const hlp =id("help");
function close1(){
    block(btnlalao);
    block(btninstr);
    none(instr);

}
function close2 (){
    block(btndiff);
    block(btnmoyen);
    block(btnhelp);
    none(hlp);
}
/*function for the button prev*/
function fprev (){
    block(btndiff);
    block(btnmoyen);
    block(btnhelp);
    none(ipt);
    none(btnakm);
    none(afapo);
    none(qst);
    none(chx1);none(chx2);none(chx3);none(chx4);
    none(hlp);
    none(rep);
    none(prev);
}
