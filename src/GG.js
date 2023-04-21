
/*the functions to use frequentily */
 function id (elem){
         return document.getElementById(elem);
 }
 function clas (elem){
      return document.getElementsByClassName(elem);
 }
const tete="Inona ary zany";
let qst=id("qst");
/*tete.style.color='green';*/
/*for the button and their functions */
   const btninstr= id("btninstr");
   const btnhelp=id("btnhelp");
   const btnlalao=id("btnlalao");
   const btnmoyen =id("btnmoyen");
   const btndiff=id("btndiff");
   const chx=clas("choix");
    /*function for the btn instruc et help*/
   function unshowbtn ( idt){
    const show = id(idt);
    show.style.display='block';
    btnhelp.style.display='none';
    btnlalao.style.display='none';
    btninstr.style.display='none';
   }

   /*function for the btn hilalao*/
   function hilalao (){
       btnmoyen.style.display='block';
       btndiff.style.display='block';
       btnhelp.style.display='none';
    btnlalao.style.display='none';
    btninstr.style.display='none';
   } 
   /* function for btn antonony */
    function btnmoyn(){
        btnhelp.style.display='none';
        btnlalao.style.display='none';
        btninstr.style.display='none';
        btndiff.style.display='none';
        btnmoyen.style.display='none';
        rand1();
        randchx();

    }
    /* function for btn sarotra*/
    function btndif(){
        btnhelp.style.display='none';
        btnlalao.style.display='none';
        btninstr.style.display='none';
        btndiff.style.display='none';
        btnmoyen.style.display='none';

        rand2();
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
function rand1(){
    const randomIndex = Math.floor(Math.random() * akammoyen.length);
    const randomQuestion = akammoyen[randomIndex].suj;
  /*const randomAnswer = akammoyen[randomIndex].answer;*/
    qst.innerText=randomQuestion;
    console.log(qst.innerHTML);
    
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
        answer:'Omby'
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
        answer:'Kintana'
       },
       {
        suj: "Andrahoin-tsy masaka ,atono mora foana",
        answer:'volo'
       },
       {
        suj: "vakiana ny vatam-paty,esorina ny lamba mena ,vao tsakoy fa hitera-menaka",
        answer:'Voanjo'
       },
       {
        suj: "ny maty no milanja ny velona",
        answer:'Farafara'
       },
       {
        suj: "Tsy atsipy tsy atoraka nefa mahatonga lavitra",
        answer:'Eritreritra'
       },
       {
        suj: "Tsy atoraka tsy avily nefa mahatonga lavitra",
        answer:'Maso'
       },
       {
        suj: "Ilay kely monina antrano vato",
        answer:'lela'
       }
]
function rand2 (){
    const randomIndex = Math.floor(Math.random() * akamdiff.length);
    const randomQuestion = akamdiff[randomIndex].suj;
  /*const randomAnswer = akammoyen[randomIndex].answer;*/
    qst.innerText=randomQuestion;
}

/*funtion to have a score*/
function score(){
    
} 