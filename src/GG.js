
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
    function bntmoyn(){
        btnhelp.style.display='none';
        btnlalao.style.display='none';
        btninstr.style.display='none';
        btndiff.style.display='none';
        btnmoyen.style.display='none';
        
        rand1();
    }


const akammoyen =[
    {
        suj: "aleveno aho hipody amin'ny vatako taloha ",
    answer:'Katsaka'
    },  
  {
    suj:"jerena izy menamena,hoanina izy tavi-kena,arina iz chocolat",
    answer:'Letisy'
  },
  {
    suj:"ilay boka mitaingi-tseza",
    answer:'Mananasy',
  },  
  {
    suj:"lasa aho fa ianao avelako eo",
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
        suj:"kapaina tsy hita fery",
        answer:'rano'
    },
    {
        suj: "bibilava mifoka sigara",
        answer:'Masinina',
    },  
    {
       suj: "loharano antedronkazo",
        anwer:'voasary'
    },
    {
        suj: "Ny ray aman-drenyy mitsangana ny zanaka mitsivalana",
        answer:'tohatra',
    },
    {
        suj:"maty aho fa sady lanin'ny tany no laninn'ny olona",
        answer:'Tsihy'
    },
    {
        suj:"soa tsy fangalatra",
        answer:'vadinolo'
   },
   {
    suj:"totohina tsy fotsy,avela fotsy ho azy",
    answer:'volo'
   },
   {
    suj: "ilay mahia mihankin-drindrina",
     answer:'kifafa'
   },
   {
    suj: "akana vao mitombo",
    answer:'aloka'
   }
   
]

/* function to rand the suj in the niv moyen*/
const verbs=[
    "think",
    "will go",
    "are",
    "did",
    "eat",
 ];
function rand1(){
   
    let sbj = Math.trunc(Math.random()*(akammoyen.suj));
    qst.innerText=akammoyen[sbj];
    console.log(qst.innerHTML);
    
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
