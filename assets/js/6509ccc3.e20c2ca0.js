"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4153],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7358:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),i=n(1048),o=n(2713);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(2613),u=n(6010),p="tabItem_1uMI";function d(e){var t,n,a,i=e.lazy,o=e.block,d=e.defaultValue,m=e.values,c=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,s.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=l(),_=N.tabGroupChoices,y=N.setTabGroupChoices,v=(0,r.useState)(b),O=v[0],w=v[1],x=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var D=_[c];null!=D&&D!==O&&f.some((function(e){return e.value===D}))&&w(D)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==O&&(C(t),w(a),null!=c&&y(c,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;n=x[r]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},k)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:T,onClick:T},null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),o=n(7358),l=n(8448),s=["components"],u={title:"Okta",sidebar_label:"Okta",slug:"/generated/ingestion/sources/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md"},p="Okta",d={unversionedId:"docs/generated/ingestion/sources/okta",id:"docs/generated/ingestion/sources/okta",isDocsHomePage:!1,title:"Okta",description:"Module okta",source:"@site/genDocs/docs/generated/ingestion/sources/okta.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/okta",permalink:"/docs/generated/ingestion/sources/okta",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md",tags:[],version:"current",frontMatter:{title:"Okta",sidebar_label:"Okta",slug:"/generated/ingestion/sources/okta",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/okta.md"},sidebar:"overviewSidebar",previous:{title:"Nifi",permalink:"/docs/generated/ingestion/sources/nifi"},next:{title:"OpenAPI",permalink:"/docs/generated/ingestion/sources/openapi"}},m=[{value:"Module <code>okta</code>",id:"module-okta",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3},{value:"Extracting DataHub Users",id:"extracting-datahub-users",children:[{value:"Usernames",id:"usernames",children:[],level:4},{value:"Profiles",id:"profiles",children:[],level:4}],level:3},{value:"Extracting DataHub Groups",id:"extracting-datahub-groups",children:[{value:"Group Names",id:"group-names",children:[],level:4},{value:"Profiles",id:"profiles-1",children:[],level:4}],level:3},{value:"Extracting Group Membership",id:"extracting-group-membership",children:[],level:3},{value:"Filtering and Searching",id:"filtering-and-searching",children:[],level:3},{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3}],level:2},{value:"Compatibility",id:"compatibility",children:[{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],c={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"okta"},"Okta"),(0,i.kt)("h2",{id:"module-okta"},"Module ",(0,i.kt)("inlineCode",{parentName:"h2"},"okta")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,i.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Capability"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"Optionally enabled via configuration")))),(0,i.kt)("p",null,"This plugin extracts the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users"),(0,i.kt)("li",{parentName:"ul"},"Groups"),(0,i.kt)("li",{parentName:"ul"},"Group Membership")),(0,i.kt)("p",null,"from your Okta instance."),(0,i.kt)("h3",{id:"extracting-datahub-users"},"Extracting DataHub Users"),(0,i.kt)("h4",{id:"usernames"},"Usernames"),(0,i.kt)("p",null,'Usernames serve as unique identifiers for users on DataHub. This connector extracts usernames using the\n"login" field of an ',(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/docs/reference/api/users/#profile-object"},"Okta User Profile"),".\nBy default, the 'login' attribute, which contains an email, is parsed to extract the text before the \"@\" and map that to the DataHub username."),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub usernames, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_username_regex"),"."),(0,i.kt)("h4",{id:"profiles"},"Profiles"),(0,i.kt)("p",null,"This connector also extracts basic user profile information from Okta. The following fields of the Okta User Profile are extracted\nand mapped to the DataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpUserInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"display name"),(0,i.kt)("li",{parentName:"ul"},"first name"),(0,i.kt)("li",{parentName:"ul"},"last name"),(0,i.kt)("li",{parentName:"ul"},"email"),(0,i.kt)("li",{parentName:"ul"},"title"),(0,i.kt)("li",{parentName:"ul"},"department"),(0,i.kt)("li",{parentName:"ul"},"country code")),(0,i.kt)("h3",{id:"extracting-datahub-groups"},"Extracting DataHub Groups"),(0,i.kt)("h4",{id:"group-names"},"Group Names"),(0,i.kt)("p",null,'Group names serve as unique identifiers for groups on DataHub. This connector extracts group names using the "name" attribute of an Okta Group Profile.\nBy default, a URL-encoded version of the full group name is used as the unique identifier (CorpGroupKey) and the raw "name" attribute is mapped\nas the display name that will appear in DataHub\'s UI.'),(0,i.kt)("p",null,"If this is not how you wish to map to DataHub group names, you can provide a custom mapping using the configurations options detailed below. Namely, ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_attr"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_profile_to_group_name_regex"),"."),(0,i.kt)("h4",{id:"profiles-1"},"Profiles"),(0,i.kt)("p",null,"This connector also extracts basic group information from Okta. The following fields of the Okta Group Profile are extracted and mapped to the\nDataHub ",(0,i.kt)("inlineCode",{parentName:"p"},"CorpGroupInfo")," aspect:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name"),(0,i.kt)("li",{parentName:"ul"},"description")),(0,i.kt)("h3",{id:"extracting-group-membership"},"Extracting Group Membership"),(0,i.kt)("p",null,"This connector additional extracts the edges between Users and Groups that are stored in Okta. It maps them to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GroupMembership")," aspect\nassociated with DataHub users (CorpUsers). Today this has the unfortunate side effect of ",(0,i.kt)("strong",{parentName:"p"},"overwriting")," any Group Membership information that\nwas created outside of the connector. That means if you've used the DataHub REST API to assign users to groups, this information will be overridden\nwhen the Okta source is executed. If you intend to ",(0,i.kt)("em",{parentName:"p"},"always")," pull users, groups, and their relationships from your Identity Provider, then\nthis should not matter."),(0,i.kt)("p",null,"This is a known limitation in our data model that is being tracked by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/issues/3065"},"this ticket"),"."),(0,i.kt)("h3",{id:"filtering-and-searching"},"Filtering and Searching"),(0,i.kt)("p",null,"You can also choose to ingest a subset of users or groups to Datahub by adding flags for filtering or searching. For\nusers, set either the ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_users_filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_users_search")," flag (only one can be set at a time). For groups, set\neither the ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_groups_filter")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"okta_groups_search")," flag. Note that these are not regular expressions. See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration\noptions."),(0,i.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[okta]'\n")),(0,i.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,i.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,i.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,i.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: okta\n  config:\n    # Coordinates\n    okta_domain: "dev-35531955.okta.com"\n\n    # Credentials\n    okta_api_token: "11be4R_M2MzDqXawbTHfKGpKee0kuEOfX1RCQSRx99"\n\nsink:\n  # sink configs\n')),(0,i.kt)("h3",{id:"config-details"},"Config Details"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,"Note that a ",(0,i.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,i.kt)("details",{open:!0},(0,i.kt)("summary",null,"View All Configuration Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_domain"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The location of your Okta Domain, without a protocol. Can be found in Okta Developer console."),(0,i.kt)("td",{parentName:"tr",align:null},"dev-33231928.okta.com")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_api_token"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"An API token generated for the DataHub application inside your Okta Developer Console."),(0,i.kt)("td",{parentName:"tr",align:null},"00be4R_M2MzDqXawbWgfKGpKee0kuEOfX1RCQSRx00")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingest_users"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether users should be ingested into DataHub."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingest_groups"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether groups should be ingested into DataHub."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ingest_group_membership"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True."),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_username_attr"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Which Okta User Profile attribute to use as input to DataHub username mapping."),(0,i.kt)("td",{parentName:"tr",align:null},"login")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_username_regex"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub username from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_username_attr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"(",(0,i.kt)("sup",{parentName:"td",id:"fnref-@"},(0,i.kt)("a",{parentName:"sup",href:"#fn-@",className:"footnote-ref"},"@")),"+)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_group_name_attr"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Which Okta Group Profile attribute to use as input to DataHub group name mapping."),(0,i.kt)("td",{parentName:"tr",align:null},"name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_profile_to_group_name_regex"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"A regex used to parse the DataHub group name from the attribute specified in ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_profile_to_group_name_attr"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"(.*)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"include_deprovisioned_users"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the DEPROVISIONED state from Okta."),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"include_suspended_users"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to ingest users in the SUSPENDED state from Okta."),(0,i.kt)("td",{parentName:"tr",align:null},"False")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"page_size"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The number of entities requested from Okta's REST APIs in one request."),(0,i.kt)("td",{parentName:"tr",align:null},"100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"delay_seconds"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"Generic dict"),(0,i.kt)("td",{parentName:"tr",align:null},"Number of seconds to wait between calls to Okta's REST APIs. (Okta rate limits). Defaults to 10ms."),(0,i.kt)("td",{parentName:"tr",align:null},"0.01")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_users_filter"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta filter expression (not regex) for ingesting users. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter"},"https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_users_search"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta search expression (not regex) for ingesting users. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_users_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/users/#list-users-with-search"},"https://developer.okta.com/docs/reference/api/users/#list-users-with-search"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_groups_filter"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta filter expression (not regex) for ingesting groups. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/groups/#filters"},"https://developer.okta.com/docs/reference/api/groups/#filters"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"okta_groups_search"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"Okta search expression (not regex) for ingesting groups. Only one of ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_filter")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"okta_groups_search")," can be set. See (",(0,i.kt)("a",{parentName:"td",href:"https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search"},"https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search"),") for more info."),(0,i.kt)("td",{parentName:"tr",align:null},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mask_group_id"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"True")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mask_user_id"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},"True")))))),(0,i.kt)(l.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "OktaConfig",\n  "type": "object",\n  "properties": {\n    "okta_domain": {\n      "title": "Okta Domain",\n      "description": "The location of your Okta Domain, without a protocol. Can be found in Okta Developer console.",\n      "default": "dev-33231928.okta.com",\n      "type": "string"\n    },\n    "okta_api_token": {\n      "title": "Okta Api Token",\n      "description": "An API token generated for the DataHub application inside your Okta Developer Console.",\n      "default": "00be4R_M2MzDqXawbWgfKGpKee0kuEOfX1RCQSRx00",\n      "type": "string"\n    },\n    "ingest_users": {\n      "title": "Ingest Users",\n      "description": "Whether users should be ingested into DataHub.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_groups": {\n      "title": "Ingest Groups",\n      "description": "Whether groups should be ingested into DataHub.",\n      "default": true,\n      "type": "boolean"\n    },\n    "ingest_group_membership": {\n      "title": "Ingest Group Membership",\n      "description": "Whether group membership should be ingested into DataHub. ingest_groups must be True if this is True.",\n      "default": true,\n      "type": "boolean"\n    },\n    "okta_profile_to_username_attr": {\n      "title": "Okta Profile To Username Attr",\n      "description": "Which Okta User Profile attribute to use as input to DataHub username mapping.",\n      "default": "login",\n      "type": "string"\n    },\n    "okta_profile_to_username_regex": {\n      "title": "Okta Profile To Username Regex",\n      "description": "A regex used to parse the DataHub username from the attribute specified in `okta_profile_to_username_attr`.",\n      "default": "([^@]+)",\n      "type": "string"\n    },\n    "okta_profile_to_group_name_attr": {\n      "title": "Okta Profile To Group Name Attr",\n      "description": "Which Okta Group Profile attribute to use as input to DataHub group name mapping.",\n      "default": "name",\n      "type": "string"\n    },\n    "okta_profile_to_group_name_regex": {\n      "title": "Okta Profile To Group Name Regex",\n      "description": "A regex used to parse the DataHub group name from the attribute specified in `okta_profile_to_group_name_attr`.",\n      "default": "(.*)",\n      "type": "string"\n    },\n    "include_deprovisioned_users": {\n      "title": "Include Deprovisioned Users",\n      "description": "Whether to ingest users in the DEPROVISIONED state from Okta.",\n      "default": false,\n      "type": "boolean"\n    },\n    "include_suspended_users": {\n      "title": "Include Suspended Users",\n      "description": "Whether to ingest users in the SUSPENDED state from Okta.",\n      "default": false,\n      "type": "boolean"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "The number of entities requested from Okta\'s REST APIs in one request.",\n      "default": 100,\n      "type": "integer"\n    },\n    "delay_seconds": {\n      "title": "Delay Seconds",\n      "description": "Number of seconds to wait between calls to Okta\'s REST APIs. (Okta rate limits). Defaults to 10ms.",\n      "default": 0.01,\n      "anyOf": [\n        {\n          "type": "number"\n        },\n        {\n          "type": "integer"\n        }\n      ]\n    },\n    "okta_users_filter": {\n      "title": "Okta Users Filter",\n      "description": "Okta filter expression (not regex) for ingesting users. Only one of `okta_users_filter` and `okta_users_search` can be set. See (https://developer.okta.com/docs/reference/api/users/#list-users-with-a-filter) for more info.",\n      "type": "string"\n    },\n    "okta_users_search": {\n      "title": "Okta Users Search",\n      "description": "Okta search expression (not regex) for ingesting users. Only one of `okta_users_filter` and `okta_users_search` can be set. See (https://developer.okta.com/docs/reference/api/users/#list-users-with-search) for more info.",\n      "type": "string"\n    },\n    "okta_groups_filter": {\n      "title": "Okta Groups Filter",\n      "description": "Okta filter expression (not regex) for ingesting groups. Only one of `okta_groups_filter` and `okta_groups_search` can be set. See (https://developer.okta.com/docs/reference/api/groups/#filters) for more info.",\n      "type": "string"\n    },\n    "okta_groups_search": {\n      "title": "Okta Groups Search",\n      "description": "Okta search expression (not regex) for ingesting groups. Only one of `okta_groups_filter` and `okta_groups_search` can be set. See (https://developer.okta.com/docs/reference/api/groups/#list-groups-with-search) for more info.",\n      "type": "string"\n    },\n    "mask_group_id": {\n      "title": "Mask Group Id",\n      "default": true,\n      "type": "boolean"\n    },\n    "mask_user_id": {\n      "title": "Mask User Id",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,i.kt)("p",null,"As a prerequisite, you should create a DataHub Application within the Okta Developer Console with full permissions to read your organization's Users and Groups."),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null," Validated against Okta API Versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"2021.07.2")),(0,i.kt)("p",{parentName:"li"},"Validated against load:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User Count: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group Count: ",(0,i.kt)("inlineCode",{parentName:"p"},"100"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Group Membership Edges: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000")," (1 per User)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Run Time (Wall Clock): ",(0,i.kt)("inlineCode",{parentName:"p"},"2min 7sec")))),(0,i.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Class Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.identity.okta.OktaSource")),(0,i.kt)("li",{parentName:"ul"},"Browse on ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/identity/okta.py"},"GitHub"))),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring ingestion for Okta, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}k.isMDXComponent=!0}}]);