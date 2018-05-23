webpackJsonp([0],{

/***/ 159:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.searchQuery = '';
        // this.initializeItems();
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<h2>Health Insurance Portability and Accountability Act</h2>\n\n<h1>About the App </h1>\n<p>This is an app for healthcare providers to help them determine which diseases they are mandated to report</p>\n\n<h2> About HIPPA </h2>\n<p>Personal information, such as the patient’s medical issues, physical and mental conditions and medications they take, is considered confidential. Confidentiality can be broken only in cases where you must provide this information to medical personnel who will take over care, for mandatory reporting or in certain legal circumstances. </p>\n\n\n<div class="playheader" id= \'romeo\'> Description:</div>\n <div class = "hidden" id ="romeo_plot"><p>The Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule is the first comprehensive federal protection for the privacy of protected health information (PHI). It makes provisions for aspects such as patient control over health information, the use and release of health records, appropriate disclosure of health information, and civil and criminal penalties for violation of patients’ privacy rights.\n</p>\n</div>\n\n\n\n<div class="playheader" id= \'hamlet\'>Protected Health Information: </div>\n<div class = "hidden" id ="hamlet_plot"><p>Because of these privacy stipulations, you cannot relay any identifying information about the patient to anyone without the patient’s specific consent. This includes media, employers, colleagues, friends and even other family members. Once your role with the patient has finished, you cannot speak of the patient with anyone else, including your co-workers, in a way that could somehow reveal the patient’s identity. However, you may release information if you have written consent from the patient or the patient’s parent or guardian. In the case of guardianship, you must have proof that the person is the child’s or mentally incapacitated person’s guardian before accepting consent. The confidentiality of information refers not only to identity, but also to any medical issue or treatments that involved the patient, including primary assessments, physical or mental conditions as determined by your assessment, any treatment you provide and any medical history the patient discloses to you. The information should be written but may be given verbally by the patient or patient’s guardian, though it is always better to get this information in writing.\n</p>\n</div>\n\n\n <div class="playheader" id= \'much\'>Permitted Disclosures of PHI Without Written Patient Consent:</div>\n\n <div class = "hidden" id ="much_plot"><p>By law, there are some circumstances when disclosure of PHI is permitted without patient consent. For example, when a patient is provided with emergency care and transported to a hospital or medical center, there are situations where information must be disclosed for payment for services. This information must be relayed to billing departments for the emergency services and the receiving institution. Insurance companies also require a certain amount of information. The information provided should be limited to what is required by law only. Other situations where disclosure without consent is permissible include cases of mandatory reporting, situations involving public health issues and some law enforcement situations. For example, you must provide requested information if you have been legally summoned via a court-ordered subpoena. There are other special situations where disclosure without permission is possible, including the following:\n- PHI can be disclosed for purposes of research without authorization, under certain conditions.\n- PHI may be disclosed to report abuse, neglect or domestic violence under specified circumstances.\n-  A covered entity may disclose PHI in the course of a judicial or an administrative proceeding under specified circumstances.\n- Organ-procurement agencies may use PHI for the purposes of facilitating a transplant.\n- Covered entities usually may disclose PHI to a health oversight agency for oversight activities authorized by law.\n-  The Privacy Rule permits disclosure of work-related health information as authorized by, and to the extent necessary to comply with, workers’ compensation programs. A valid authorization is required for any use or disclosure of PHI that is not required or otherwise permitted without authorization by the Privacy Rule\n</p>\n</div>\n\n\n<div class="playheader" id= \'temp\'>Special Reporting Requirements:</div> <div class = "hidden" id ="temp_plot"><p> Mandated reporting usually refers to the practice of reporting situations in which a patient’s injuries may have been caused through battery, abuse or other forms of violence. The requirements for reporting vary from state to state, and it is the EMR’s responsibility to learn and follow specific state requirements for reporting incidents in which abuse is suspected. Abuse or neglect of any kind must be reported in accordance with state requirements; this applies to children, the elderly and patients in domestic violence situations. Injuries that may be the result of a crime, such as gunshot and stab wounds, as well as poisoning or drug-related injuries, must also be reported. In some states, you also must report suspected sexual assaults. Mandatory reporting can also apply to some infectious diseases such as tuberculosis, hepatitis B, HIV and AIDS. Knowing the details of mandatory reporting is necessary to ensure that you do not incur legal liability for failure to report or unauthorized disclosure. You are responsible for fully documenting an objective report of your findings when you deem it necessary. However, most states will offer immunity for any potential liability that may result from reporting, such as slander or defamation of character. The most important things to remember are that you should act in good faith, report only what you know to be factual and avoid any speculation as to what you believe may have occurred or reporting how you feel.\nA covered entity must obtain a written authorization from the individual, for the use and disclosure of PHI unless the disclosure is to the individual for treatment, payment, or health care operations, or the disclosure falls under one of the specified exceptions.\nHIPAA privacy rules, specifically 45 CFR §164.512, addresses the uses and disclosures of PHI for which an authorization or an opportunity to agree or object is not required. Specifically:\n• Section 164.512(a) permits disclosures that are required by law, including statutes and rules\n• Section 164.512(b) permits a covered entity to disclose PHI to: <i>\n"A public health authority that is authorized by law to collect or receive such information for the purpose of preventing or controlling disease, injury, or disability, including but not limited to, the reporting of disease, injury, vital events such as birth or death, and the conduct of public health surveillance, public health investigations, and public health interventions; . ..”</i>\nUnder HIPAA, 45 CFR 164.501, public health authority is defined as <i>“an agency or authority of …, a State,  . . ., or a political subdivision of a State ..., that is responsible for public health matters as part of its official mandate.” </i>\nTherefore, to the extent that a public health authority is authorized by law to collect or receive information for public health purposes, covered entities may disclose PHI to such public health authority without the patient’s authorization.\n</p>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

window.onload = nodeList; // loads the nodeList upon window load
function togglePlotSum() {
    var playid = this.id;
    var play1 = document.getElementById("romeo_plot");
    var play2 = document.getElementById("hamlet_plot");
    var play3 = document.getElementById("much_plot");
    var play4 = document.getElementById("temp_plot");
    switch (playid) {
        case "romeo":
            if (play1.className === "hidden") {
                play1.className = "show";
            }
            else if (play1.className === "show") {
                play1.className = "hidden";
            }
            break;
        case "hamlet":
            if (play2.className === "hidden") {
                play2.className = "show";
            }
            else if (play2.className === "show") {
                play2.className = "hidden";
            }
            break;
        case "much":
            if (play3.className === "hidden") {
                play3.className = "show";
            }
            else if (play3.className === "show") {
                play3.className = "hidden";
            }
            break;
        case "temp":
            if (play4.className === "hidden") {
                play4.className = "show";
            }
            else if (play4.className === "show") {
                play4.className = "hidden";
            }
            break;
    }
}
function nodeList() {
    var header = document.getElementsByClassName("playheader"); // gets elements with class "playheader"
    for (var i = 0; i < header.length; i++) {
        var play = header[i];
        play.addEventListener("click", togglePlotSum, false);
    }
}
//# sourceMappingURL=about.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newpage_newpage__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.newpagePage = __WEBPACK_IMPORTED_MODULE_2__newpage_newpage__["a" /* NewpagePage */];
        this.searchQuery = '';
        console.log("okay this loads");
        this.parser = {
            "data": {
                "diseases": {
                    "Public Health Hazard": {
                        "alt_names": [
                            "Public Health Hazard",
                            "Any unusual case or cluster of cases that may indicate a public health hazard",
                            "MERS-CoV",
                            "Ebola Virus Disease",
                            "Acute Flaccid Myelitis"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Bioterrorism Threat or Event": {
                        "alt_names": [
                            "Bioterrorism Threat or Event",
                            "Bioterrorism",
                            "Any suspected bioterrorism threat or event"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Anthrax": {
                        "alt_names": [
                            "Anthrax"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Botulism": {
                        "alt_names": [
                            "Botulism",
                            "Botulism, foodborne",
                            "Botulism, intestinal",
                            "Botulism, wound",
                            "Botulism, other"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Diphtheria": {
                        "alt_names": [
                            "Diphtheria"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 3,
                        "submit_to_lab": 1
                    },
                    "Influenza A": {
                        "alt_names": [
                            "Influenza A",
                            "Influenza",
                            "Influenza A, variant"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Plague": {
                        "alt_names": [
                            "Plague"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Poliomyelitis": {
                        "alt_names": [
                            "Polliomyelitis",
                            "Polio"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Smallpox": {
                        "alt_names": [
                            "Smallpox"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Severe Acute Respiratory Syndrome (SARS)": {
                        "alt_names": [
                            "Severe Acute Respiratory Syndrome (SARS)",
                            "SARS",
                            "Severe Acute Respiratory Syndrome"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "BrucellosisI": {
                        "alt_names": [
                            "Brucellosis",
                            "Brucellosis bioterrorism",
                            "Brucellosis outbreak",
                            "Bioterrorism",
                            "Outbreak"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Q-feverI": {
                        "alt_names": [
                            "Q-fever",
                            "Q-fever bioterrorism",
                            "Q-fever outbreak",
                            "Bioterrorism",
                            "Outbreak"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "TularemiaI": {
                        "alt_names": [
                            "Tularemial",
                            "Tularemial bioterrorism",
                            "Tularemial outbreak",
                            "Bioterrorism",
                            "Outbreak"
                        ],
                        "urgency_i": 0,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Q-fever24": {
                        "alt_names": [
                            "Q-fever"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Tularemia24": {
                        "alt_names": [
                            "Tularemia"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Brucellosis24": {
                        "alt_names": [
                            "Brucellosis"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Chickenpox (Varicella)": {
                        "alt_names": [
                            "Chickenpox (Varicella)",
                            "Chickenpox",
                            "Varicella",
                            "Pox"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Cholera (Vibrio cholera O1 or O139)": {
                        "alt_names": [
                            "Cholera (Vibrio cholera O1 or O139)",
                            "Cholera",
                            "Vibrio cholera",
                            "Vibrio cholera O1",
                            "Vibrio cholera O139",
                            "O1",
                            "O139",
                            "Cholera O1",
                            "Cholera O139"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Enteric Escherichia coli infections(O157:H7, STEC, EHEC, EPEC, ETEC)": {
                        "alt_names": [
                            "Enteric Escherichia coli infections(O157:H7, STEC, EHEC, EPEC, ETEC)",
                            "E. Coli",
                            "Enteric Escherichia coli",
                            "Infections",
                            "O157:H7",
                            "STEC",
                            "EHEC",
                            "EPEC",
                            "ETEC"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 6,
                        "submit_to_lab": 1
                    },
                    "Foodborne or waterborne illness": {
                        "alt_names": [
                            "Foodborne or waterborne illness",
                            "Foodborne illness",
                            "Waterborne illness",
                            "Foodborne",
                            "Waterborne"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Haemophilus influenza, meningitis and other invasive disease": {
                        "alt_names": [
                            "Haemophilus influenza",
                            "meningitis",
                            "invasive disease"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Hantavirus pulmonary syndrome": {
                        "alt_names": [
                            "Hantavirus pulmonary syndrome",
                            "Hantavirus",
                            "Pulmonary syndrome",
                            "Pulmonary"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Hemolytic uremic syndrome, post diarrheal": {
                        "alt_names": [
                            "Hemolytic uremic syndrome",
                            "post diarrheal"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Hepatitis A": {
                        "alt_names": [
                            "Hepatitis A",
                            "Hep A"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 1,
                        "submit_to_lab": 0
                    },
                    "Influenza-associated intensive care unit hospitalization": {
                        "alt_names": [
                            "Influenza-associated intensive care unit hospitalization",
                            "Influenza",
                            "ICU",
                            "Intensive care unit",
                            "Intensive care unit hospitalization",
                            "Hospitalization",
                            "ICU Hospitalization"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Measles": {
                        "alt_names": [
                            "Measles",
                            "Rubeola"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Mumps": {
                        "alt_names": [
                            "Mumps",
                            "Parotitis"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Neisseria meningitidis, meningitis and invasive disease": {
                        "alt_names": [
                            "Neisseria meningitidis",
                            "meningitis",
                            "invasive disease"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Pertussis (whooping cough)": {
                        "alt_names": [
                            "Pertussis",
                            "Whooping Cough"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 3,
                        "submit_to_lab": 1
                    },
                    "Rabies": {
                        "alt_names": [
                            "Rabies",
                            "Animal Exposure"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Rubella": {
                        "alt_names": [
                            "Rubella",
                            "German Measles",
                            "Measles"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Smallpox vaccination": {
                        "alt_names": [
                            "Smallpox",
                            "complications of",
                            "vaccine",
                            "smallpox vaccine",
                            "smallpox vaccination"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Staphylococcus aureus, Methicillin resistant (MRSA) 2 or more cases in a community setting, or in infants under 61 days of age": {
                        "alt_names": [
                            "Staphylococcus aureus, Methicillin resistant (MRSA) 2 or more cases in a community setting, or in infants under 61 days of age",
                            "Staph",
                            "Community setting",
                            "MRSA",
                            "2 or more cases",
                            "Staphylococcus aureus",
                            "Staphylococcus aureus, MRSA",
                            "infants under 61 days of age",
                            "Staphylococcus aureus infants"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Staphylococcus aureus, intermediate or high level resistance to vancomycin": {
                        "alt_names": [
                            "Staphylococcus aureus, intermediate or high level resistance to vancomycin",
                            "Staph",
                            "Staphylococcus aureus",
                            "resistance to vancomycin"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Streptococcal infections, Group A, invasive and sequelae": {
                        "alt_names": [
                            "Streptococcal infections",
                            "Streptococcal",
                            "Group A",
                            "invasive",
                            "sequelae"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 6,
                        "submit_to_lab": 0
                    },
                    "Typhoid Fever": {
                        "alt_names": [
                            "Typhoid",
                            "Typhoid fever",
                            "fever"
                        ],
                        "urgency_i": 1,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "AIDS": {
                        "alt_names": [
                            "AIDS",
                            "HIV"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 5,
                        "submit_to_lab": 0
                    },
                    "Arboviral Infection": {
                        "alt_names": [
                            "Arboviral Infection",
                            "Dengue fever",
                            "California encephalitis",
                            "St. Louis encephalitis",
                            "West Nile Virus",
                            "Chikungunya",
                            "Zika Virus"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Campylobacter": {
                        "alt_names": [
                            "Campylobacter",
                            "Campylobacteriosis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Chancroid": {
                        "alt_names": [
                            "Chancroid"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 2,
                        "submit_to_lab": 0
                    },
                    "Chlamydia (including lymphogranuloma venereum)": {
                        "alt_names": [
                            "Chlamydia (including lymphogranuloma venereum)",
                            "Chlamydia",
                            "Lymphogranuloma venereum"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 2,
                        "submit_to_lab": 0
                    },
                    "Creutzfeldt-Jakob Disease (CJD)": {
                        "alt_names": [
                            "Creutzfeldt-Jakob Disease",
                            "CJD"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Cryptosporidiosis": {
                        "alt_names": [
                            "Cryptosporidiosis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Cyclosporiasis": {
                        "alt_names": [
                            "Cyclosporiasis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Drug-resistant organism": {
                        "alt_names": [
                            "drug-resistant organism",
                            "drug",
                            "drug resistant",
                            "resistant organism"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 7,
                        "submit_to_lab": 0
                    },
                    "Gonorrhea": {
                        "alt_names": [
                            "Gonorrhea"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 2,
                        "submit_to_lab": 0
                    },
                    "Hepatitis B, Hepatitis C, and Hepatitis D": {
                        "alt_names": [
                            "Hepatitis B, Hepatitis C, and Hepatitis D",
                            "Hepatitis B",
                            "Hep B",
                            "Hepatitis C",
                            "Hep C",
                            "Hepatitis D",
                            "Hep D"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 1,
                        "submit_to_lab": 0
                    },
                    "Histoplasmosis": {
                        "alt_names": [
                            "Histoplasmosis",
                            "Cave disease"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "HIV infection": {
                        "alt_names": [
                            "HIV Infection",
                            "HIV",
                            "AIDS"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 5,
                        "submit_to_lab": 0
                    },
                    "Influenza deaths in persons less than 18 years of age": {
                        "alt_names": [
                            "Influenza deaths in persons less than 18 years of age",
                            "Influenza"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Legionellosis": {
                        "alt_names": [
                            "Legionellosis",
                            "Legionnaire",
                            "Legionnaire’s disease"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Leprosy (Hansen’s Disease)": {
                        "alt_names": [
                            "Leprosy (Hansen’s Disease)",
                            "Leprosy",
                            "Hansen’s Disease"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Leptospirosis": {
                        "alt_names": [
                            "Leptospirosis",
                            "Weil’s Disease",
                            "Weil"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Listeriosis": {
                        "alt_names": [
                            "Listeriosis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Malaria": {
                        "alt_names": [
                            "Malaria",
                            "Plasmodium infection"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Ophthalmia neonatorum (gonococcal)": {
                        "alt_names": [
                            "Ophthalmia",
                            "Ophthalmia neonatorum",
                            "gonococcal",
                            "Ophthalmia neonatorum (gonococcal)"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 2,
                        "submit_to_lab": 0
                    },
                    "Psittacosis": {
                        "alt_names": [
                            "Psittacosis",
                            "Ornithosis",
                            "Parrot fever"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Reye Syndrome": {
                        "alt_names": [
                            "Reye Syndrome",
                            "Reye-Johnson syndrome",
                            "Reye",
                            "Reye-Johnson"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Salmonellosis (other than typhoid)": {
                        "alt_names": [
                            "Salmonellosis (other than typhoid)",
                            "Salmonellosis",
                            "Salmonella"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Shigellosis": {
                        "alt_names": [
                            "Shigellosis",
                            "Shigella"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Streptococcus pneumoniae, invasive disease (< 5 years)": {
                        "alt_names": [
                            "Streptococcus",
                            "pneumoniae",
                            "Streptococcus pneumoniae",
                            "Invasive disease"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Syphilis (including congenital syphilis)": {
                        "alt_names": [
                            "Syphilis (including congenital syphilis)",
                            "Syphilis",
                            "Congenital syphilis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Tetanus": {
                        "alt_names": [
                            "Tetanus",
                            "lockjaw"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 3,
                        "submit_to_lab": 0
                    },
                    "Tickborne Disease": {
                        "alt_names": [
                            "tickborne disease",
                            "tick borne",
                            "tick",
                            "tickborne",
                            "ehrlichiosis",
                            "anaplasmosis",
                            "babesiosis",
                            "Lyme",
                            "lyme disease",
                            "spotted fever",
                            "rickettsioses",
                            "spotted fever rickettsioses"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Toxic shock syndrome due to staphylococcus aureus infection": {
                        "alt_names": [
                            "Toxic Shock syndrome",
                            "toxic shock",
                            "staphylococcus",
                            "staphylococcus aureus infection",
                            "staphylococcus aureus"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Trichinosis": {
                        "alt_names": [
                            "Trichinosis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    },
                    "Tuberculosis": {
                        "alt_names": [
                            "Tuberculosis",
                            "TB",
                            "consumption"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 4,
                        "submit_to_lab": 1
                    },
                    "Vibriosis (Non-cholera Vibrio infections)": {
                        "alt_names": [
                            "Vibriosis (Non-cholera Vibrio infections)",
                            "Vibriosis",
                            "non-cholera vibrio",
                            "vibrio"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 1
                    },
                    "Yersiniosis": {
                        "alt_names": [
                            "Yersiniosis"
                        ],
                        "urgency_i": 2,
                        "phone_number_i": 0,
                        "submit_to_lab": 0
                    }
                },
                "phone_numbers": [
                    "Communicable Disease Surveillance: (312) 746-5925 or (312) 746-5377",
                    "Communicable Disease Hepatitis Surveillance: (312) 746-6197",
                    "Sexually Transmitted Infection (STI) Surveillance: (312) 747-0697 \nSexually Transmitted Infection Surveillance Fax: (312) 745-7627",
                    "Vaccine Preventable Disease Surveillance: (312) 746-5911/5901",
                    "Tuberculosis Surveillance: (312) 746-6013; Fax (312) 746-5134",
                    "HIV/AIDS Surveillance: (312) 747-9614",
                    "N/A",
                    "Communicable Disease Surveillance: (312) 746-5925 or (312) 746-5377 \nSexually Transmitted Infection (STI) Surveillance: (312) 747-0697 \nSexually Transmitted Infection Surveillance Fax: (312) 745-7627"
                ],
                "urgency_levels": [
                    "Immediate (within 3 hours by phone)",
                    "24-Hours",
                    "7 days"
                ]
            }
        };
        this.allItems = Object.keys(this.parser["data"]["diseases"]);
        console.log("succ2");
        this.items = this.allItems.sort();
        this.items.push("test");
        /*
        this.http.get('assets/data.json', {}, {})
          .then(data => {
            console.log("succ1");
            this.allItems = Object.keys(JSON.parse(data.data)["data"]["diseases"]);
    
            console.log("succ2");
            this.items = this.allItems.sort();
            this.items.push("test");
          })
          .catch(error => {
            console.log("fails");
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
    
          });
        */
    }
    HomePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.items = this.allItems;
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) == 0);
            });
            this.items = this.items.sort();
        }
    };
    HomePage.prototype.GotoNewPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newpage_newpage__["a" /* NewpagePage */], {
            disease: item
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Chicago Dept. of Health</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Information on reporting</h2>\n  <p>\n    Search Disease\n  </p>\n\n\n\n  <ion-searchbar (ionInput)="getItems($event)" ></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let item of items" (click) = "GotoNewPage(item)">\n      {{ item }}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewpagePage = /** @class */ (function () {
    function NewpagePage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.disease = navParams.get('disease');
        this.http.get('assets/data.json', {}, {})
            .then(function (data) {
            console.log("works");
            console.log(data["data"]);
        })
            .catch(function (error) {
            console.log("fails");
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    }
    NewpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newpage',template:/*ion-inline-start:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/newpage/newpage.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>New Page</ion-list-header>\n    <ion-item>\n\n      {{disease}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/newpage/newpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */]])
    ], NewpagePage);
    return NewpagePage;
}());

//# sourceMappingURL=newpage.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__["a" /* NewpagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_newpage_newpage__["a" /* NewpagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Jiaqi/salad/TechTeam-Chicago-Project/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map