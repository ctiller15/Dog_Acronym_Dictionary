// Define your dictionary of words and definitions here
const dictionary = {
    "akc": ["American Kennel Club"],
    "afc": ["Amateur Field Trial"],
    "bmd": ["Bernese Mountain Dog"],
    "cerf": ["Canine Eye Registration Foundation"],
    "cgc": ["Canine Good Citizen"],
    "fho": ["Femoral Head Ostectomy"],
    "hd": ["Hip Dysplasia"],
    "ofa": ["Orthopedic Foundation for Animals"],
    "ra": ["Rally Advanced"],
    "tdi": ["Therapy Dogs International"],
    "agch": ["Agility Grand Champion"],
    "cch": ["Coonhound Bench Show Champion"],
    "cfc": ["Coonhound Field Champion"],
    "cgch": ["Coonhound Grand Champion"],
    "cgf": ["Coonhound Grand Field Champion"],
    "cgn": ["Grand Nite Champion"],
    "cgw": ["Grand Water Race Champion"],
    "ch": ["Champion"],
    "cnc": ["Nite Champion"],
    "csg": ["Supreme Grand Champion"],
    "csgf": ["Supreme Grand Field Champion"],
    "csgn": ["Supreme Grand Nite Champion"],
    "csgw": ["Supreme Grand Water Race Champion"],
    "ct": ["Champion Tracker"],
    "cwc": ["Water Race Champion"],
    "cwsg": ["World Show Champion"],
    "dc": ["Dual Champion"],
    "fc": ["Field Trial Champion"],
    "gch": ["Grand Champion"],
    "gchb": ["Grand Champion Bronze"],
    "gchg": ["Grand Champion Gold"],
    "gchp": ["Grand Champion Platinum"],
    "gchs": ["Grand Champion Silver"],
    "gdsc": ["Gun Dog Stake Champion"],
    "gafc": ["Grand Amateur Field Champion (Pointing Breeds)"],
    "gfc": ["Grand Field Champion (Pointing Breeds)"],
    "hc": ["Herding Champion"],
    "mach": ["Master Agility Champion"],
    "nac": ["National Agility Champion"],
    "nafc": ["National Amateur Field Champion"],
    "nagdc": ["National Amateur Gundog Champion"],
    "nfc": ["National Field Champion"],
    "ngdc": ["National Gundog Champion"],
    "noc": ["National Obedience Champion"],
    "otch": ["Obedience Trial Champion"],
    "pach": ["Preferred Agility Champion"],
    "pnac": ["Preferred National Agility Champion"],
    "poc": ["Preferred Obedience Champion"],
    "rach": ["Rally Champion"],
    "rgdsc": ["Retrieving Gun Dog Stake Champion"],
    "rnc": ["Rally National Champion"],
    "tc": ["Triple Champion", "Temperament Certification"],
    "vcch": ["Versatile Companion Champion"],
    "wnc": ["World Nite Champion"],
    "act1": ["Agility Course Test 1"],
    "act2": ["Agility Course Test 2"],
    "act1j": ["Agility Course Test 1 Jumpers"],
    "act2j": ["Agility Course Test 2 Jumpers"],
    "ajp": ["Excellent Agility Jumpters With Weaves \"A\" Preferred"],
    "att": ["Temperament Test"],
    "ax": ["Agility Excellent"],
    "axj": ["Excellent Agility Jumper"],
    "axp": ["Agility Excellent \"A\" Preferred"],
    "bcat": ["Fast CAT title, requires 150 points earned at Fast CAT events"],
    "bn": ["Beginner Novice"],
    "bn-v": ["Virtual Beginner Novice"],
    "ca": ["Coursing Ability"],
    "caa": ["Coursing Ability Advanced"],
    "cax": ["Coursing Ability Excellent"],
    "cax2": ["Coursing Ability Excellent 2"],
    "cd": ["Companion Dog"],
    "cd-v": ["Virtual Companion Dog"],
     "cdx": ["Companion Dog Excellent"],
     "cgca": ["AKC Community Canine"],
     "cgcu": ["Canine Good Citizen Urban"],
     "cm": ["Certificate of Merit"],
     "dcat": ["Fast CAT title, requires 500 points at Fast CAT events"],
     "ee": ["Endurance Earthdog"],
     "fcat": ["Fast CAT title, requires 1000 points at Fast CAT events"],
     "fdc": ["Farm Dog Certified"],
     "fitb": ["Bronze AKC FIT DOG title."],
     "fits": ["Silver AKC FIT DOG title."],
     "fitg": ["Gold AKC FIT DOG title."],
     "ftc": ["FAST Century"],
     "ftcp": ["FAST Century Preferred"],
     "gn": ["Graduate Novice"],
     "go": ["Graduate Open"],
     "hi": ["Herding Intermediate"],
     "hiadsc": ["Herding Intermediate Course A (ducks, sheep, cattle)"],
     "hibdsc": ["Herding Intermediate Course B (ducks, sheep, cattle)"],
     "hics": ["Herding Intermediate Course C (sheep)"],
     "hs": ["Herding Started"],
     "hsadsc": ["Herding Started Course A (ducks, sheep, cattle)"],
     "hsbdsc": ["Herding Started Course B (ducks, sheep, cattle)"],
     "hscs": ["Herding Started Course C (sheep)"],
     "ht": ["Herding Tested"],
     "hx": ["Herding Excellent"],
     "hxadsc": ["Herding Advanced Course A (ducks, sheep, cattle)"],
     "hxbdsc": ["Herding Advanced Course B (ducks, sheep, cattle)"],
     "hxcs": ["Herding Advanced Course C (sheep)"],
     "jc": ["Junior Courser"],
     "je": ["Junior Earthdog"],
     "jh": ["Junior Hunter"],
     "jha": ["Junior Hunter Advanced"],
     "jhr": ["Junior Hunter Retriever"],
     "jhu": ["Junior Hunter Upland"],
     "lcx": ["Lure Courser Excellent"],
     "mc": ["Master Courser"],
     "me": ["Master EarthDog"],
     "mfb": ["Master Bronze FAST"],
     "mfc": ["Master Century FAST"],
     "mfg": ["Master Gold FAST"],
     "mfp": ["Master Excellent FAST Preferred"],
     "mfpb": ["Master Bronze FAST Preferred"],
     "mfpc": ["Master Century FAST Preferred"],
     "mfpg": ["Master Gold FAST Preferred"],
     "mfps": ["Master Silver FAST Preferred"],
     "mfs": ["Master Silver FAST"],
     "mh": ["Master Hunter"],
     "mha": ["Master Hunter Advanced"],
     "mhr": ["Master Hunter Retriever"],
     "mhu": ["Master Hunter Upland"],
     "mjb": ["Master Bronze Jumpers With Weaves"],
     "mjc": ["Master Century Jumpers With Weaves"],
     "mjg": ["Master Gold Jumpers With Weaves"],
     "mjp": ["Master Excellend Jumpers With Weaves Preferred"],
     "mjpb": ["Master Bronze Jumper With Weaves Preferred"],
     "mjpc": ["Master Century Jumper With Weaves Preferred"],
     "mjpg": ["Master Gold Jumper With Weaves Preferred"],
     "mjps": ["Master Silver Jumper With Weaves Preferred"],
     "mjs": ["Master Silver Jumpers With Weaves"],
     "mnh": ["Master National Hunter"],
     "mx": ["Master Agility Excellent"],
     "mxb": ["Master Bronze Agility"],
     "mxc": ["Master Century Agility"],
     "mxf": ["Master Excellend FAST"],
     "mxg": ["Master Gold Agility"],
     "mxj": ["Master Excellent Jumpers With Weaves"],
     "mxp": ["Master Agility Excellent Preferred"],
     "mxpb": ["Master Bronze Agility Preferred"],
     "mxpc": ["Master Century Agility Preferred"],
     "mxpg": ["Master Gold Agility PReferred"],
     "mxps": ["Master Silver Agility Preferred"],
     "msx": ["Master Silver Agility"],
     "na": ["Novice Agility"],
     "naj": ["Novice Agility Jumper"],
     "nap": ["Novice Agility Preferred"],
     "nf": ["Novice FAST"],
     "nfp": ["Novice FAST Preferred"],
     "njp": ["Novice Jumpers With Weaves Preferred"],
     "oa": ["Open Agility"],
     "oaj": ["Open Agility Jumper"],
     "oap": ["Open Agility Preferred"],
     "of": ["Open FAST"],
     "ofp": ["Open FAST Preferred"],
     "ogm": ["Obedience Grand Master"],
     "ojp": ["Open Jumpers With Weaves Preferred"],
     "om": ["Obedience Master"],
     "pad": ["Premier Agility Dog"],
     "padp": ["Premier Agility Dog Preferred"],
     "pax": ["Preferred Agility Excellent"],
     "pcd": ["Preferred Companion Dog"],
     "pcdx": ["Preferred Companion Dog Excellent"],
     "pdb": ["Premier Agility Dog Bronze"],
     "pdbp": ["Premier Agility Dog Bronze Preferred"],
     "pdc": ["Premier Agility Dog Century"],
     "pdcp": ["Premier Agility Dog Century Preferred"],
     "pdg": ["Premier Agility Dog Gold"],
     "pdgp": ["Premier Agility Dog Gold Preferred"],
     "pds": ["Premier Agility Dog Silver"],
     "pdsp": ["Premier Agility Dog Silver Preferred"],
     "pjb": ["Premier Jumpers Dog Bronze Preferred"],
     "pjc": ["Premier Jumpers Dog Century"],
     "pjcp": ["Premier Jumpers Dog Century Preferred"],
     "pjd": ["Premier Jumpers Dog"],
     "pjdp": ["Premier Jumpers Dog Preferred"],
     "pjg": ["Premier Jumpers Dog Gold"],
     "pjgp": ["Premier Jumpers Dog Gold Preferred"],
     "pjs": ["Premier Jumpers Dog Silver"],
     "pjsp": ["Premier Jumpers Dog Silver Preferred"],
     "pt": ["Pre-Trial Tested"],
     "pudx": ["Preferred Utility Dog Excellent"],
     "putd": ["Preferred Utility Dog"],
     "rn": ["AKC Rally Novice"],
     "re": ["AKC Rally Excellent"],
     "rae": ["AKC Rally Advanced Excellent"],
     "ri": ["AKC Rally Intermediate"],
     "rm": ["AKC Rally Master"],
     "sba": ["Scent Work Buried Advanced"],
     "sbae": ["Scene Work Buried Advanced Elite"],
     "sbe": ["Scent Work Buried Excellent"],
     "sbee": ["Scent Work Buried Excellent Elite"],
     "sbm": ["Scent Work Buried Master"],
     "sbme": ["Scent Work Buried Master Elite"],
     "sbn": ["Scent Work Buried Novice"],
     "sbne": ["Scent Work Buried Novice Elite"],
     "sc": ["Senior Courser"],
     "sca": ["Scent Work Container Advanced"],
     "scae": ["Scent Work Container Advanced Elite"],
     "sce": ["Scent Work Container Excellent"],
     "scee": ["Scent Work Container Excellent Elite"],
     "scm": ["Scent Work Container Master"],
     "scme": ["Scent Work Container Master Elite"],
     "scn": ["Scent Work Container Novice"],
     "scne": ["Scent Work Container Novice Elite"],
     "se": ["Senior EarthDog"],
     "sea": ["Scent Work Exterior Advanced"],
     "seae": ["Scent Work Exterior Advanced Elite"],
     "see": ["Scent Work Exterior Excellent"],
     "seee": ["Scent Work Exterior Excellent Elite"],
     "sem": ["Scent Work Exterior Master"],
     "seme": ["Scent Work Exterior Master Elite"],
     "sen": ["Scent Work Exterior Novice"],
     "sene": ["Scent Work Exterior Novice Elite"],
     "sh": ["Senior Hunter"],
     "sha": ["Senior Hunter Advanced"],
     "shda": ["Scent Work Handler Discrimination Advanced"],
     "shdae": ["Scent Work Handler Discrimination Advanced"],
     "shde": ["Scent Work Handler Discrimination Excellent"],
     "shdee": ["Scent Work Handler Discrimination Excellent Elite"],
     "shdm": ["Scent Work Handler Discrimination Master"],
     "shdme": ["Scent Work Handler Discrimination Master Elite"],
     "shdn": ["Scent Work Handler Discrimination Novice"],
     "shdne": ["Scent Work Handler Discrimination Novice Elite"],
     "shr": ["Senior Hunter Retriever"],
     "shu": ["Senior Hunter Upland"],
     "sia": ["Scent Work Interior Advanced"],
     "siae": ["Scent Work Interior Advanced Elite"],
     "sie": ["Scent Work Interior Excellent"],
     "siee": ["Scent Work Interior Excellent Elite"],
     "sim": ["Scent Work Interior Master"],
     "sime": ["Scent Work Interior Master Elite"],
     "sin": ["Scent Work Interior Novice"],
     "sine": ["Scent Work Interior Novice Elite"],
     "swa": ["Scent Work Advanced"],
     "swae": ["Scent Work Advanced Elite"],
     "swd": ["Scent Work Detective"],
     "swe": ["Scent Work Excellent"],
     "swee": ["Scent Work Excellent Elite"],
     "swm": ["Scent Work Master"],
     "swme": ["Scent Work Master Elite"],
     "swn": ["Scent Work Novice"],
     "swne": ["Scent Work Novice Elite"],
     "t2b": ["Time 2 Beat"],
     "t2bp": ["Time 2 Beat Preferred"],
     "td": ["Tracking Dog"],
     "tdu": ["Tracking Dog Urban"],
     "tdx": ["Tracking Dog Excellent"],
     "thd": ["Therapy Dog Title"],
     "thda": ["Therapy Dog Advanced"],
     "thdd": ["Distinguished Therapy Dog"],
     "thdn": ["Therapy Dog Novice"],
     "thdx": ["Therapy Dog Excellent"],
     "tkn": ["Novice Trick Dog"],
     "tki": ["Intermediate Trick Dog"],
     "tka": ["Advanced Trick Dog"],
     "tkp": ["Trick Dog Performer"],
     "tke": ["Trick Dog Elite Performer"],
     "tqx": ["Triple Q Excellent"],
     "tqxp": ["Triple Q Excellent Preferred"],
     "ud": ["Utility Dog"],
     "udx": ["Utility Dog Excellent"],
     "vcd1": ["Versatile Companion Dog 1"],
     "vcd2": ["Versatile Companion Dog 2"],
     "vcd3": ["Versatile Companion Dog 3"],
     "vcd4": ["Versatile Companion Dog 4"],
     "ver": ["Versatility"],
     "vst": ["Variable Surface Tracking"],
     "xf": ["Excellent FAST"],
    "xfp": ["Excellent FAST Preferred"],
    "jft": ["Junior Fur Tracker"],
    "sft": ["Senior Fur Tracker"],
    "mft": ["Master Fur Tracker"],
    "mt": ["Man Trailer"],
    "mti": ["Man Trailer Intermediate"],
    "mtx": ["Man Trailer Excellent"],
    "hh": ["Hunting Hound"],
    "shh": ["Senior Hunting Hound"],
    "mhh": ["Master Hunting Hound"],
    "mhe": ["Master Hunting Excellent"],
    "cc": ["Coaching Certificate"],
    "rd": ["Road Dog"],
    "rdx": ["Road Dog Excellent"],
    "wac": ["Working Aptitude Certificate"],
    "cca": ["Certificate of Conformation Assessment"],
    "wc": ["Working Certificate"],
    "wci": ["Working Certificate Intermediate"],
    "wcx": ["Working Certificate Excellent"],
    "pcjh": ["Parent Club Junior Hunter"],
    "pcsh": ["Parent Club Senior Hunter"],
    "pcmh": ["Parent Club Master Hunter"],
    "sd": ["Sled Dog"],
    "sdx": ["Sled Dog Excellent"],
    "sdo": ["Sled Dog Outstanding"],
    "cs": ["Carting Started"],
    "ci": ["Carting Intermediate"],
    "cx": ["Carting Excellent"],
    "cst": ["Carting Started Team"],
    "cit": ["Carting Intermediate Team"],
    "cxt": ["Carting Excellent Team"],
    "ndd": ["Novice Draft Dog"],
    "dd": ["Draft Dog"],
    "nbdd": ["Novice Brace Draft Dog"],
    "bdd": ["Brace Draft Dog"],
    "tdd": ["Team Draft Dog"],
    "bh": ["Basic Companion Dog"],
    "fh1": ["Advanced Tracking"],
    "fh2": ["Superior Tracking"],
    "ipo1": ["International Novice Shutzhund"],
    "ipo2": ["International Intermediate Schutzhund"],
    "ipo3": ["International Master Level Schutzhund"],
    "schh1": ["Novice Schutzhund"],
    "schh2": ["Intermediate Schutzhund"],
    "schh3": ["Master Level Schutzhund"],
    "schha": ["Novice Schutzhund A"],
    'tt': ['Temperament Test'],
    'wds1': ['Working Dog Sport 1'],
    'wds2': ['Working Dog Sport 2'],
    'wds3': ['Working Dog Sport 3'],
    'nafa': ['North American Flyball Association'],
    'fdch': ['Flyball Dog Champion'],
    'fm': ['Flyball Master'],
    'onyx': ['NAFA Flyball ONYX Award. (20000 points)'],
    'cz8b': ['Crazy 8s Bronze'],
    'cz8s': ['Crazy 8s Silver'],
    'cz8g': ['Crazy 8s Gold'],
    'cz8p': ['Crazy 8s Platinum'],
    'ratn': ['Novice Barn Hunt'],
    'rato': ['Open Barn Hunt'],
    'rats': ['Senior Barn Hunt'],
    'ratm': ['Master Barn Hunt'],
    'ratch': ['Barn Hunt Champion'],
    'ratchx': ['Barn Hunt Master Champion'],
    'dn': ['Dock Novice'],
    'dj': ['Dock Junior'],
    'ds': ['Dock Senior'],
    'dm': ['Dock Master'],
    'de': ['Dock Elite'],
    'dna': ['Dock Novice Advanced'],
    'dja': ['Dock Junior Advanced'],
    'dsa': ['Dock Senior Advanced'],
    'dma': ['Dock Master Advanced'],
    'dea': ['Dock Elite Advanced'],
    'dnx': ['Dock Novice Excellent'],
    'djx': ['Dock Junior Excellent'],
    'dsx': ['Dock Senior Excellent'],
    'dmx': ['Dock Master Excellent'],
    'dex': ['Dock Elite Excellent'],
    'an': ['Air Retrieve Novice'],
    'aj': ['Air Retrieve Junior'],
    'as': ['Air Retrieve Senior'],
    'am': ['Air Retrieve Master'],
    'ae': ['Air Retrieve Elite'],
    'ana': ['Air Retrieve Novice Advanced'],
    'aja': ['Air Retrieve Junior Advanced'],
    'asa': ['Air Retrieve Senior Advanced'],
    'ama': ['Air Retrieve Master Advanced'],
    'aea': ['Air Retrieve Elite Advanced'],
    'anx': ['Air Retrieve Novice Excellent'],
    'ajx': ['Air Retrieve Junior Excellent'],
    'asx': ['Air Retrieve Senior Excellent'],
    'amx': ['Air Retrieve Master Excellent'],
    'aex': ['Air Retrieve Elite Excellent'],
    'ddb': ['Disc Dog Bronze'],
    'ddbe': ['Disc Dog Bronze Elite'],
    'ddg': ['Disc Dog Gold'],
    'ddge': ['Disc Dog Gold Elite'],
    'ddp': ['Disc Dog Platinum'],
    'ddpe': ['Disc Dog Platinum Elite'],
    'dds': ['Disc Dog Silver'],
    'ddse': ['Disc Dog Silver Elite'],
    'ddu': ['Disc Dog Unobtanium'],
    'ddue': ['Disc Dog Unobtanium Elite']
  };
  
  // Define the CSS style for the tooltip
  const tooltipStyle = `
    position: fixed;
    z-index: 99999;
    padding: 8px;
    background-color: #fff;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    color: #555;
    border-radius: 3px;
  `
  
  // Create a new tooltip element
  const tooltip = document.createElement("div");
  tooltip.setAttribute("style", tooltipStyle);
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);
  
  // Create a single highlight element that will be reused for all matching words
  const highlight = document.createElement("span");
  highlight.style.color = "#19c319"
  highlight.style.fontWeight = "bold"
  highlight.style.cursor = "pointer"
  highlight.style.textDecoration = 'underline'
  highlight.style.border = '1px dotted #19c319'
  highlight.style.height = '1.4em'
  highlight.className = 'dog-terms-highlight'

  
  // Define the debounce function
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

function highlightWords() {
    const MAX_WORDS = 50; // maximum number of words to highlight
    let count = 0; // number of words highlighted so far
    const divs = Array.from(document.querySelectorAll("div:not(.dog-terms-highlight):not(:empty)")).filter(f => f.textContent.trim().length > 0)

    const cleanedDivs = divs.filter(f => {
            const textContent = Array.from(f.childNodes).reduce(function(a, b) { return a + (b.nodeType === Node.TEXT_NODE ? b.textContent : ''); }, '');
            return textContent.length > 0
    })
    for (const div of cleanedDivs) {
      const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null, false);
      while (count < MAX_WORDS && walker.nextNode()) {
        const node = walker.currentNode;
        if(node.parentElement.className !== 'dog-terms-highlight' && node.parentElement.closest('A') == null){

        const words = node.nodeValue.trim().split(/\s+/);
        
        for (const word of words) {
          if (dictionary.hasOwnProperty(word.toLowerCase())) {
            const range = document.createRange();
            range.setStart(node, node.nodeValue.indexOf(word));
            range.setEnd(node, node.nodeValue.indexOf(word) + word.length);
            const highlightElement = highlight.cloneNode(true);
            highlightElement.textContent = word;
            highlightElement.addEventListener("mouseover", (event) => {
              tooltip.style.display = "block";
              tooltip.position = `fixed`
              const target = event.target
              const rect = target.getBoundingClientRect()
              const mappedDictContent = dictionary[word.toLowerCase()].map((str1, ind) => {
                return `${ind + 1} - ${str1}`
              }).join('<br/>')
              console.log(tooltip)
              console.log(mappedDictContent)
              tooltip.innerHTML = `${word}: ${mappedDictContent}`;
              tooltip.style.left = `${rect.left + rect.width}px`;
              tooltip.style.top = `${rect.top}px`;
            });
            highlightElement.addEventListener("mouseout", () => {
              tooltip.style.display = "none";
            });
            range.surroundContents(highlightElement);
            count++;
          }
        }
        }
      }
    }
  }
  
  window.addEventListener("load", () => {
    highlightWords();
  });
  
  window.addEventListener("scroll", debounce(highlightWords, 50));
  
  window.addEventListener("keydown", debounce(highlightWords, 50));