"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6259],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),g=u(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||d[m]||i;return n?a.createElement(c,l(l({ref:e},p),{},{components:n})):a.createElement(c,l({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3786:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),l=["components"],o={title:"Nifi",sidebar_label:"Nifi",slug:"/generated/ingestion/sources/nifi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md"},s="Nifi",u={unversionedId:"docs/generated/ingestion/sources/nifi",id:"docs/generated/ingestion/sources/nifi",isDocsHomePage:!1,title:"Nifi",description:"Module nifi",source:"@site/genDocs/docs/generated/ingestion/sources/nifi.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/nifi",permalink:"/docs/generated/ingestion/sources/nifi",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md",tags:[],version:"current",frontMatter:{title:"Nifi",sidebar_label:"Nifi",slug:"/generated/ingestion/sources/nifi",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/nifi.md"},sidebar:"overviewSidebar",previous:{title:"MySQL",permalink:"/docs/generated/ingestion/sources/mysql"},next:{title:"Okta",permalink:"/docs/generated/ingestion/sources/okta"}},p=[{value:"Module <code>nifi</code>",id:"module-nifi",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],d={toc:p};function g(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nifi"},"Nifi"),(0,i.kt)("h2",{id:"module-nifi"},"Module ",(0,i.kt)("inlineCode",{parentName:"h2"},"nifi")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Nifi flow as ",(0,i.kt)("inlineCode",{parentName:"li"},"DataFlow")," entity"),(0,i.kt)("li",{parentName:"ul"},"Ingress, egress processors, remote input and output ports as ",(0,i.kt)("inlineCode",{parentName:"li"},"DataJob")," entity"),(0,i.kt)("li",{parentName:"ul"},"Input and output ports receiving remote connections as ",(0,i.kt)("inlineCode",{parentName:"li"},"Dataset")," entity"),(0,i.kt)("li",{parentName:"ul"},"Lineage information between external datasets and ingress/egress processors by analyzing provenance events")),(0,i.kt)("p",null,"Current limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Limited ingress/egress processors are supported",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"S3: ",(0,i.kt)("inlineCode",{parentName:"li"},"ListS3"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FetchS3Object"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PutS3Object")),(0,i.kt)("li",{parentName:"ul"},"SFTP: ",(0,i.kt)("inlineCode",{parentName:"li"},"ListSFTP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"FetchSFTP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"GetSFTP"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PutSFTP"))))),(0,i.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[nifi]`\n")),(0,i.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "nifi"\n  config:\n    # Coordinates\n    site_url: "https://localhost:8443/nifi/"\n\n    # Credentials\n    auth: SINGLE_USER\n    username: admin\n    password: password\n\nsink:\n  # sink configs\n')),(0,i.kt)("h3",{id:"config-details"},"Config Details"),(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"View All Configuration Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"env"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The environment that all assets produced by this connector belong to"),(0,i.kt)("td",{parentName:"tr",align:null},"PROD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"site_url"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URI to connect"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"auth"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"enum(NifiAuthType)"),(0,i.kt)("td",{parentName:"tr",align:null},"Nifi authentication. must be one of : NO_AUTH, SINGLE_USER, CLIENT_CERT"),(0,i.kt)("td",{parentName:"tr",align:null},"NO_AUTH")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"provenance_days"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"time window to analyze provenance events for external datasets"),(0,i.kt)("td",{parentName:"tr",align:null},"7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"site_name"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Site name to identify this site with, useful when using input and output ports receiving remote connections"),(0,i.kt)("td",{parentName:"tr",align:null},"default")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"site_url_to_site_name"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,i.kt)("td",{parentName:"tr",align:null},"Lookup to find site_name for site_url, required if using remote process groups in nifi flow"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Nifi username, must be set for auth = "SINGLE_USER"'),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Nifi password, must be set for auth = "SINGLE_USER"'),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_cert_file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},'Path to PEM file containing the public certificates for the user/client identity, must be set for auth = "CLIENT_CERT"'),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_key_file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to PEM file containing the client\u2019s secret key"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"client_key_password"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The password to decrypt the client_key_file"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ca_file"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to PEM file containing certs for the root CA(s) for the NiFi"),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"AllowDenyPattern (see below for fields)"),(0,i.kt)("td",{parentName:"tr",align:null},"regex patterns for filtering process groups"),(0,i.kt)("td",{parentName:"tr",align:null},"{'allow': ","['.*']",", 'deny': [], 'ignoreCase': True, 'alphabet': '","[A-Za-z0-9 _.-]","'}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.allow"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to include in ingestion"),(0,i.kt)("td",{parentName:"tr",align:null},"['.*']")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.deny"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,i.kt)("td",{parentName:"tr",align:null},"List of regex patterns for process groups to exclude from ingestion."),(0,i.kt)("td",{parentName:"tr",align:null},"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.ignoreCase"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"process_group_pattern.alphabet"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Allowed alphabets pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"[A-Za-z0-9 _.-]"))))),(0,i.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.nifi.NifiSource")),(0,i.kt)("li",{parentName:"ul"},"Browse on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/nifi.py"},"GitHub"))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring ingestion for Nifi, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);