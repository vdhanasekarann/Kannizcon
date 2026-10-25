import { useId } from "react";

const artworkLabels = {
  ecosystem: "Illustration of Kannizcon's web, app, cloud, AI, and software services",
  web: "Web application dashboard illustration",
  mobile: "Mobile application design illustration",
  cloud: "Connected cloud infrastructure illustration",
  ai: "Artificial intelligence and connected data illustration",
  custom: "Custom business software workflow illustration",
  transformation: "Business process transformation and connected workflow illustration",
  support: "Software maintenance and technical support illustration",
  processing: "Document processing, validation, and conversion illustration",
  publishing: "Digital publishing and eBook workflow illustration",
  data: "Data conversion, validation, and reporting illustration",
};

function ProductScreen({ type }) {
  if (type === "mobile") {
    return (
      <g>
        <rect x="238" y="44" width="164" height="286" rx="29" fill="#193d4d" />
        <rect x="247" y="54" width="146" height="266" rx="22" fill="#fff" />
        <rect x="294" y="62" width="52" height="8" rx="4" fill="#dce8e9" />
        <circle cx="271" cy="97" r="12" fill="#dff1ee" />
        <path d="M267 97h8m-4-4v8" stroke="#19867f" strokeWidth="2" strokeLinecap="round" />
        <rect x="291" y="91" width="74" height="7" rx="3.5" fill="#26495a" />
        <rect x="263" y="122" width="114" height="74" rx="14" fill="#eaf5f3" />
        <path d="M279 177l21-24 17 13 25-28" fill="none" stroke="#218d84" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="342" cy="138" r="5" fill="#83c5ba" />
        <rect x="263" y="210" width="114" height="38" rx="10" fill="#f3f7f8" />
        <circle cx="280" cy="229" r="8" fill="#d5eae6" />
        <rect x="296" y="222" width="62" height="6" rx="3" fill="#75909a" />
        <rect x="296" y="232" width="43" height="5" rx="2.5" fill="#c0cfd2" />
        <rect x="263" y="258" width="114" height="38" rx="10" fill="#f3f7f8" />
        <circle cx="280" cy="277" r="8" fill="#e4e8f4" />
        <rect x="296" y="270" width="62" height="6" rx="3" fill="#75909a" />
        <rect x="296" y="280" width="43" height="5" rx="2.5" fill="#c0cfd2" />
      </g>
    );
  }

  if (type === "cloud") {
    return (
      <g>
        <path d="M214 165c0-27 22-49 49-49 14-34 48-54 84-48 32 5 56 30 61 61 27 3 48 26 48 54 0 30-24 55-55 55H270c-31 0-56-25-56-56 0-6 0-11 2-17Z" fill="#eaf5f3" stroke="#a8d4cd" strokeWidth="2" />
        <rect x="293" y="148" width="78" height="62" rx="13" fill="#fff" stroke="#c9e2de" />
        <path d="M307 168h50m-50 12h34m-34 12h42" stroke="#74aaa4" strokeWidth="5" strokeLinecap="round" />
        <circle cx="276" cy="181" r="13" fill="#d8ece8" />
        <circle cx="389" cy="181" r="13" fill="#d8ece8" />
        <circle cx="331" cy="92" r="13" fill="#d8ece8" />
        <path d="M286 181h7m78 0h5m-45-26v-15" stroke="#358f87" strokeWidth="3" strokeLinecap="round" />
        <circle cx="242" cy="263" r="17" fill="#fff" stroke="#d6e5e7" />
        <circle cx="331" cy="276" r="17" fill="#fff" stroke="#d6e5e7" />
        <circle cx="420" cy="263" r="17" fill="#fff" stroke="#d6e5e7" />
        <path d="M253 250l34-35m44 44v-29m44 14-34-29" fill="none" stroke="#70aaa2" strokeWidth="2" strokeDasharray="5 6" />
      </g>
    );
  }

  if (type === "ai") {
    return (
      <g>
        <circle cx="330" cy="178" r="77" fill="#eaf5f3" />
        <circle cx="330" cy="178" r="55" fill="#fff" stroke="#b9dcd5" strokeWidth="2" />
        <path d="M330 143c-13-14-36-5-36 12 0 8 4 13 10 18-7 7-8 17-4 25 5 11 19 13 30 5m0-60c13-14 36-5 36 12 0 8-4 13-10 18 7 7 8 17 4 25-5 11-19 13-30 5m0-60v60m-17-40h8m18 0h8m-28 24h11m12 0h11" fill="none" stroke="#258c83" strokeWidth="3" strokeLinecap="round" />
        <path d="M289 123l-35-25m115 25 35-25m-116 112-37 23m119-23 37 23" fill="none" stroke="#8bbeb7" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="248" cy="94" r="16" fill="#fff" stroke="#c5dfda" />
        <circle cx="412" cy="94" r="16" fill="#fff" stroke="#c5dfda" />
        <circle cx="244" cy="239" r="16" fill="#fff" stroke="#c5dfda" />
        <circle cx="416" cy="239" r="16" fill="#fff" stroke="#c5dfda" />
        <path d="M242 94h12m-6-6v12m158-6h12m-6-6v12m-164 145h12m-6-6v12m158-6h12m-6-6v12" stroke="#4b9e94" strokeWidth="2" strokeLinecap="round" />
      </g>
    );
  }

  if (type === "transformation") {
    return (
      <g>
        <rect x="116" y="72" width="408" height="236" rx="22" fill="#fff" stroke="#c6d9e5" strokeWidth="3" />
        <rect x="116" y="72" width="408" height="46" rx="22" fill="#eaf2fb" />
        <path d="M116 96v22h408V96" fill="#eaf2fb" />
        <circle cx="142" cy="95" r="6" fill="#2474cb" />
        <circle cx="162" cy="95" r="6" fill="#56a8d8" />
        <circle cx="182" cy="95" r="6" fill="#7d73cc" />
        <rect x="143" y="144" width="104" height="111" rx="15" fill="#edf5ff" stroke="#9fc4e7" strokeWidth="3" />
        <circle cx="195" cy="177" r="19" fill="#2474cb" />
        <path d="M185 177h20m-10-10v20" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <path d="M162 218h66m-66 12h46" stroke="#4c7da9" strokeWidth="6" strokeLinecap="round" />
        <path d="M259 198h51m-13-13 14 13-14 13" fill="none" stroke="#d36d25" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="321" y="144" width="163" height="111" rx="15" fill="#f2f0ff" stroke="#b8afe8" strokeWidth="3" />
        <rect x="342" y="163" width="42" height="34" rx="7" fill="#755ac4" />
        <path d="M352 180h22m-11-10v20" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <rect x="396" y="163" width="66" height="8" rx="4" fill="#6859a7" />
        <rect x="396" y="180" width="52" height="6" rx="3" fill="#afa6d7" />
        <path d="M342 220h120m-120 15h87" stroke="#9185c5" strokeWidth="6" strokeLinecap="round" />
        <path d="M137 278h366l-21 23H159z" fill="#a9bfd0" />
        <path d="M278 280h86l12 10h-110z" fill="#6f8ca2" />
        <circle cx="497" cy="132" r="13" fill="#dff4e9" />
        <path d="m491 132 4 4 8-9" fill="none" stroke="#18855d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (type === "support") {
    return (
      <g>
        <rect x="119" y="75" width="350" height="228" rx="20" fill="#fff" stroke="#cbdce7" strokeWidth="3" />
        <rect x="119" y="75" width="350" height="42" rx="20" fill="#edf4fa" />
        <path d="M119 96v21h350V96" fill="#edf4fa" />
        <circle cx="144" cy="96" r="6" fill="#2677bb" />
        <circle cx="164" cy="96" r="6" fill="#52a1cb" />
        <rect x="143" y="143" width="202" height="27" rx="8" fill="#eaf5ff" />
        <circle cx="160" cy="156" r="8" fill="#277dc0" />
        <path d="m156 156 3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="177" y="152" width="145" height="7" rx="3.5" fill="#567993" />
        <rect x="143" y="183" width="202" height="27" rx="8" fill="#edf8f4" />
        <circle cx="160" cy="196" r="8" fill="#208968" />
        <path d="m156 196 3 3 6-7" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="177" y="192" width="123" height="7" rx="3.5" fill="#567993" />
        <rect x="143" y="223" width="202" height="27" rx="8" fill="#fff4e8" />
        <circle cx="160" cy="236" r="8" fill="#db822e" />
        <path d="M156 236h8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <rect x="177" y="232" width="137" height="7" rx="3.5" fill="#8196a3" />
        <path d="M184 304h220l-22 19H205z" fill="#9db4c3" />
        <path d="M269 306h51l8 8h-67z" fill="#627e91" />
        <circle cx="427" cy="217" r="76" fill="#e9f1ff" stroke="#8eacd8" strokeWidth="5" />
        <circle cx="427" cy="217" r="47" fill="#fff" stroke="#4775b2" strokeWidth="8" />
        <path d="M427 181v17m0 38v17m36-36h-17m-38 0h-17m61-25-12 12m-27 27-12 12m0-51 12 12m27 27 12 12" stroke="#4775b2" strokeWidth="9" strokeLinecap="round" />
        <circle cx="427" cy="217" r="18" fill="#df9140" stroke="#fff" strokeWidth="5" />
        <path d="M355 139c13-20 36-30 62-28m30 10 18 7-14 14" fill="none" stroke="#2583b9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }

  if (type === "processing") {
    return (
      <g>
        <rect x="107" y="88" width="153" height="192" rx="14" fill="#eaf3ff" stroke="#6794c4" strokeWidth="4" />
        <path d="M218 88v39h42" fill="#c7ddf5" stroke="#6794c4" strokeWidth="4" strokeLinejoin="round" />
        <path d="M134 153h89m-89 24h89m-89 24h70" stroke="#4d759b" strokeWidth="8" strokeLinecap="round" />
        <rect x="132" y="226" width="89" height="29" rx="8" fill="#347bb5" />
        <text x="176.5" y="246" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">SOURCE</text>
        <path d="M278 184h64m-16-17 18 17-18 17" fill="none" stroke="#db7d2c" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="401" cy="183" r="63" fill="#e7f7ef" stroke="#36936d" strokeWidth="5" />
        <circle cx="401" cy="183" r="43" fill="#fff" stroke="#9cd7b8" strokeWidth="4" />
        <path d="m380 184 14 14 29-32" fill="none" stroke="#168657" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="342" y="270" width="118" height="29" rx="8" fill="#21845f" />
        <text x="401" y="290" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">VALIDATED</text>
        <path d="M469 124h60v119h-60z" fill="#fff3e4" stroke="#d9913f" strokeWidth="4" />
        <path d="M484 152h31m-31 19h31m-31 19h22" stroke="#a36b30" strokeWidth="6" strokeLinecap="round" />
        <path d="M480 112h50v14h-50z" fill="#dd963e" />
      </g>
    );
  }

  if (type === "custom") {
    return (
      <g>
        <rect x="194" y="73" width="274" height="215" rx="20" fill="#fff" stroke="#d8e7e8" strokeWidth="2" />
        <rect x="194" y="73" width="274" height="43" rx="20" fill="#eaf3f3" />
        <path d="M194 96v20h274V96" fill="#eaf3f3" />
        <circle cx="216" cy="94" r="5" fill="#8bbeb7" />
        <circle cx="233" cy="94" r="5" fill="#b5d2ce" />
        <circle cx="250" cy="94" r="5" fill="#d0e3e1" />
        <rect x="218" y="137" width="89" height="49" rx="10" fill="#eff7f5" stroke="#d5e8e4" />
        <rect x="355" y="137" width="89" height="49" rx="10" fill="#eff4f8" stroke="#dce5ed" />
        <rect x="286" y="222" width="89" height="49" rx="10" fill="#edf3f6" stroke="#dce5ed" />
        <path d="M232 154h60m-60 12h42m137-12h-60m60 12h-42m-51 55v-14m0 0-28-19m28 19 28-19" fill="none" stroke="#739fa0" strokeWidth="3" strokeLinecap="round" />
        <circle cx="259" cy="161" r="7" fill="#80bbb1" />
        <circle cx="397" cy="161" r="7" fill="#8aaac0" />
        <circle cx="330" cy="246" r="7" fill="#80a4b7" />
        <rect x="222" y="305" width="218" height="9" rx="4.5" fill="#d9e7e8" />
      </g>
    );
  }

  if (type === "publishing") {
    return (
      <g>
        <rect x="188" y="77" width="264" height="224" rx="17" fill="#fff" stroke="#d5e5e8" strokeWidth="2" />
        <rect x="201" y="91" width="238" height="194" rx="9" fill="#f7fafb" />
        <path d="M214 113h212" stroke="#d9e5e8" strokeWidth="2" />
        <rect x="222" y="131" width="83" height="122" rx="5" fill="#fff" stroke="#dce7e9" />
        <rect x="316" y="131" width="102" height="122" rx="5" fill="#fff" stroke="#dce7e9" />
        <rect x="236" y="147" width="54" height="7" rx="3.5" fill="#4a788c" />
        <rect x="236" y="163" width="54" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="173" width="54" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="183" width="48" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="203" width="54" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="213" width="49" height="4" rx="2" fill="#c4d3d7" />
        <rect x="329" y="146" width="75" height="48" rx="5" fill="#e5f2ef" />
        <path d="M341 180l15-17 13 10 17-19" fill="none" stroke="#288b82" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="329" y="204" width="74" height="5" rx="2.5" fill="#a9c3c7" />
        <rect x="329" y="216" width="65" height="4" rx="2" fill="#d2dfe1" />
        <rect x="329" y="226" width="68" height="4" rx="2" fill="#d2dfe1" />
        <rect x="281" y="269" width="78" height="6" rx="3" fill="#d1e1e3" />
        <path d="M153 118h22m-11-11v22m313 121 14-14m-7 0 7 0v7" fill="none" stroke="#5ca79e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="170" cy="263" r="18" fill="#e3f1ee" />
        <path d="M164 263h12m-6-6v12" stroke="#288b82" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    );
  }

  if (type === "data") {
    return (
      <g>
        <rect x="174" y="96" width="292" height="190" rx="15" fill="#fff" stroke="#d5e5e8" strokeWidth="2" />
        <rect x="187" y="109" width="266" height="164" rx="8" fill="#f6f9fa" />
        <rect x="202" y="125" width="110" height="132" rx="8" fill="#fff" stroke="#e0e9eb" />
        <rect x="324" y="125" width="114" height="57" rx="8" fill="#fff" stroke="#e0e9eb" />
        <rect x="324" y="193" width="114" height="64" rx="8" fill="#fff" stroke="#e0e9eb" />
        <rect x="215" y="138" width="52" height="6" rx="3" fill="#557a89" />
        <path d="M216 158h81m-81 13h81m-81 13h65m-65 13h75m-75 13h57m-57 13h71" stroke="#d1dfe2" strokeWidth="4" strokeLinecap="round" />
        <circle cx="348" cy="152" r="12" fill="#e3f1ee" />
        <circle cx="348" cy="152" r="5" fill="#2e9187" />
        <rect x="369" y="144" width="53" height="5" rx="2.5" fill="#72909c" />
        <rect x="369" y="155" width="40" height="4" rx="2" fill="#cad8db" />
        <path d="M338 241v-18m16 18v-29m16 29v-13m16 13v-37m16 37v-23" stroke="#258b83" strokeWidth="8" strokeLinecap="round" />
        <path d="M315 159h9m-5-5 5 5-5 5" fill="none" stroke="#66aaa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M319 223h5m-3-5 5 5-5 5" fill="none" stroke="#66aaa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M152 302h334l-24 18H176z" fill="#d2e1e2" />
        <path d="M284 304h70l12 8h-94z" fill="#a8c0c4" />
        <circle cx="486" cy="93" r="17" fill="#eaf4ff" />
        <path d="M478 93h16m-8-8v16" stroke="#297fc5" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    );
  }

  if (type === "publishing") {
    return (
      <g>
        <rect x="188" y="77" width="264" height="224" rx="17" fill="#fff" stroke="#d5e5e8" strokeWidth="2" />
        <rect x="201" y="91" width="238" height="194" rx="9" fill="#f7fafb" />
        <path d="M214 113h212" stroke="#d9e5e8" strokeWidth="2" />
        <rect x="222" y="131" width="83" height="122" rx="5" fill="#fff" stroke="#dce7e9" />
        <rect x="316" y="131" width="102" height="122" rx="5" fill="#fff" stroke="#dce7e9" />
        <rect x="236" y="147" width="54" height="7" rx="3.5" fill="#4a788c" />
        <rect x="236" y="163" width="54" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="173" width="54" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="183" width="48" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="203" width="54" height="4" rx="2" fill="#c4d3d7" />
        <rect x="236" y="213" width="49" height="4" rx="2" fill="#c4d3d7" />
        <rect x="329" y="146" width="75" height="48" rx="5" fill="#e5f2ef" />
        <path d="M341 180l15-17 13 10 17-19" fill="none" stroke="#288b82" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="329" y="204" width="74" height="5" rx="2.5" fill="#a9c3c7" />
        <rect x="329" y="216" width="65" height="4" rx="2" fill="#d2dfe1" />
        <rect x="329" y="226" width="68" height="4" rx="2" fill="#d2dfe1" />
        <rect x="281" y="269" width="78" height="6" rx="3" fill="#d1e1e3" />
        <path d="M153 118h22m-11-11v22m313 121 14-14m-7 0 7 0v7" fill="none" stroke="#5ca79e" strokeWidth="3" strokeLinecap="round" />
        <circle cx="170" cy="263" r="18" fill="#e3f1ee" />
        <path d="M164 263h12m-6-6v12" stroke="#288b82" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    );
  }

  if (type === "data") {
    return (
      <g>
        <rect x="174" y="96" width="292" height="190" rx="15" fill="#fff" stroke="#d5e5e8" strokeWidth="2" />
        <rect x="187" y="109" width="266" height="164" rx="8" fill="#f6f9fa" />
        <rect x="202" y="125" width="110" height="132" rx="8" fill="#fff" stroke="#e0e9eb" />
        <rect x="324" y="125" width="114" height="57" rx="8" fill="#fff" stroke="#e0e9eb" />
        <rect x="324" y="193" width="114" height="64" rx="8" fill="#fff" stroke="#e0e9eb" />
        <rect x="215" y="138" width="52" height="6" rx="3" fill="#557a89" />
        <path d="M216 158h81m-81 13h81m-81 13h65m-65 13h75m-75 13h57m-57 13h71" stroke="#d1dfe2" strokeWidth="4" strokeLinecap="round" />
        <circle cx="348" cy="152" r="12" fill="#e3f1ee" />
        <circle cx="348" cy="152" r="5" fill="#2e9187" />
        <rect x="369" y="144" width="53" height="5" rx="2.5" fill="#72909c" />
        <rect x="369" y="155" width="40" height="4" rx="2" fill="#cad8db" />
        <path d="M338 241v-18m16 18v-29m16 29v-13m16 13v-37m16 37v-23" stroke="#258b83" strokeWidth="8" strokeLinecap="round" />
        <path d="M315 159h9m-5-5 5 5-5 5" fill="none" stroke="#66aaa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M319 223h5m-3-5 5 5-5 5" fill="none" stroke="#66aaa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M152 302h334l-24 18H176z" fill="#d2e1e2" />
        <path d="M284 304h70l12 8h-94z" fill="#a8c0c4" />
        <circle cx="486" cy="93" r="17" fill="#eaf4ff" />
        <path d="M478 93h16m-8-8v16" stroke="#297fc5" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    );
  }

  return (
    <g>
      <rect x="118" y="70" width="391" height="238" rx="18" fill="#183e4d" />
      <rect x="127" y="79" width="373" height="220" rx="12" fill="#fff" />
      <rect x="127" y="79" width="373" height="32" rx="12" fill="#eaf2f2" />
      <path d="M127 99v12h373V99" fill="#eaf2f2" />
      <circle cx="145" cy="95" r="4" fill="#78b8ad" />
      <circle cx="159" cy="95" r="4" fill="#b2d2cc" />
      <circle cx="173" cy="95" r="4" fill="#d0e2df" />
      <rect x="140" y="124" width="78" height="161" rx="8" fill="#f0f6f5" />
      <rect x="153" y="140" width="49" height="7" rx="3.5" fill="#83aaa6" />
      <rect x="153" y="160" width="40" height="6" rx="3" fill="#d0e1e0" />
      <rect x="153" y="177" width="48" height="6" rx="3" fill="#d0e1e0" />
      <rect x="153" y="194" width="34" height="6" rx="3" fill="#d0e1e0" />
      <rect x="153" y="222" width="48" height="27" rx="7" fill="#dcefeb" />
      <rect x="232" y="126" width="250" height="48" rx="10" fill="#f8fafb" stroke="#e8eff0" />
      <circle cx="252" cy="150" r="11" fill="#d9eeea" />
      <rect x="273" y="142" width="92" height="6" rx="3" fill="#496d7b" />
      <rect x="273" y="154" width="62" height="5" rx="2.5" fill="#bccdd1" />
      <rect x="373" y="139" width="92" height="20" rx="7" fill="#dff0ec" />
      <rect x="232" y="187" width="153" height="98" rx="10" fill="#f8fafb" stroke="#e8eff0" />
      <path d="M250 263l28-28 22 14 31-39 36 25" fill="none" stroke="#278e84" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M250 272h117" stroke="#dce8e9" strokeWidth="2" />
      <rect x="395" y="187" width="87" height="98" rx="10" fill="#f8fafb" stroke="#e8eff0" />
      <circle cx="438" cy="228" r="22" fill="none" stroke="#d7e8e6" strokeWidth="9" />
      <path d="M438 206a22 22 0 0 1 19 33" fill="none" stroke="#278e84" strokeWidth="9" strokeLinecap="round" />
      <rect x="416" y="260" width="45" height="5" rx="2.5" fill="#b9cbd0" />
      <path d="M98 310h431l-24 17H122z" fill="#d2e1e2" />
      <path d="M278 312h72l12 8h-96z" fill="#a8c0c4" />
    </g>
  );
}

export default function ServiceArtwork({ type = "ecosystem", compact = false }) {
  const label = artworkLabels[type] || artworkLabels.ecosystem;
  const instanceId = useId().replace(/:/g, "");
  const titleId = `art-title-${type}-${instanceId}`;
  const descriptionId = `art-description-${type}-${instanceId}`;
  const backgroundId = `art-bg-${type}-${instanceId}`;
  const glowId = `art-glow-${type}-${instanceId}`;

  return (
    <figure className={`service-artwork service-artwork--${type}${compact ? " service-artwork--compact" : ""}`}>
      <svg
        viewBox={compact ? "70 48 500 281.25" : "0 0 640 380"}
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
      >
        <title id={titleId}>{label}</title>
        <desc id={descriptionId}>
          A clean vector illustration in Kannizcon's light teal brand palette.
        </desc>
        <defs>
          <linearGradient id={backgroundId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7fbfa" />
            <stop offset="1" stopColor="#e8f2f3" />
          </linearGradient>
          <radialGradient id={glowId}>
            <stop offset="0" stopColor="#a7d8ce" stopOpacity=".42" />
            <stop offset="1" stopColor="#a7d8ce" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="12" y="12" width="616" height="356" rx="30" fill={`url(#${backgroundId})`} />
        <circle cx="522" cy="82" r="104" fill={`url(#${glowId})`} />
        <circle cx="111" cy="294" r="88" fill={`url(#${glowId})`} />
        {type === "ecosystem" && !compact && (
          <g aria-hidden="true">
            <path d="M108 84 76 58m453 33 37-24m-34 216 45 23M104 269l-35 30" fill="none" stroke="#a3c7c5" strokeWidth="2" strokeDasharray="5 7" />
            <rect x="28" y="36" width="108" height="39" rx="19" fill="#fff" stroke="#d7e6e7" />
            <circle cx="49" cy="55" r="6" fill="#258f85" />
            <text x="63" y="59" fill="#476775" fontSize="12" fontFamily="Inter, sans-serif">WEB</text>
            <rect x="504" y="44" width="106" height="39" rx="19" fill="#fff" stroke="#d7e6e7" />
            <circle cx="525" cy="63" r="6" fill="#6792ae" />
            <text x="539" y="67" fill="#476775" fontSize="12" fontFamily="Inter, sans-serif">CLOUD</text>
            <rect x="520" y="317" width="90" height="39" rx="19" fill="#fff" stroke="#d7e6e7" />
            <circle cx="541" cy="336" r="6" fill="#8d8ab0" />
            <text x="555" y="340" fill="#476775" fontSize="12" fontFamily="Inter, sans-serif">AI</text>
            <ProductScreen type="ecosystem" />
            <rect x="454" y="152" width="105" height="158" rx="23" fill="#fff" stroke="#cddfe1" strokeWidth="2" />
            <rect x="463" y="162" width="87" height="138" rx="17" fill="#f4f8f8" />
            <rect x="492" y="168" width="30" height="5" rx="2.5" fill="#cbdcde" />
            <circle cx="506" cy="208" r="21" fill="#e0f0ec" />
            <path d="M498 208h16m-8-8v16" stroke="#238b82" strokeWidth="3" strokeLinecap="round" />
            <rect x="476" y="240" width="61" height="8" rx="4" fill="#a7c8c5" />
            <rect x="476" y="255" width="48" height="6" rx="3" fill="#d4e1e2" />
            <rect x="476" y="272" width="61" height="17" rx="7" fill="#dff0ec" />
            <rect x="73" y="224" width="96" height="43" rx="15" fill="#fff" stroke="#d7e6e7" />
            <circle cx="94" cy="245" r="7" fill="#74aaa2" />
            <text x="109" y="249" fill="#476775" fontSize="11" fontFamily="Inter, sans-serif">SOFTWARE</text>
          </g>
        )}
        {type !== "ecosystem" && <ProductScreen type={type} />}
      </svg>
      {type === "ecosystem" && (
        <figcaption>
          <span>One partner. Every layer.</span>
          <span>Web · Mobile · Cloud · AI · Software</span>
        </figcaption>
      )}
    </figure>
  );
}
