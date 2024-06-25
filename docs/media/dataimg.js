let data_images = {

// Convert common SVG images to data URLs to reduce network usage!

chevron_d: `<svg width="100" height="100" viewBox="-5 5 144 144" xmlns="http://www.w3.org/2000/svg"><style>polygon {fill: #0065fe; stroke: #0065fe; stroke-width: 3; stroke-linejoin: round}</style><polygon points="98.1 50.0 50.0 1.9 35.6 16.3 69.2 50.0 35.6 83.7 50.0 98.1" transform="rotate(90 50 50)"></polygon></svg>`,
chevron_r: `<svg width="100" height="100" viewBox="25 -15 144 144" xmlns="http://www.w3.org/2000/svg"><style>polygon {fill: #0065fe; stroke: #0065fe; stroke-width: 3; stroke-linejoin: round}</style><polygon points="98.1 50.0 50.0 1.9 35.6 16.3 69.2 50.0 35.6 83.7 50.0 98.1"></polygon></svg>`,
copy: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><style>* {stroke: #0065fe; stroke-width: 3; stroke-linejoin: round} polyline {fill: white} .Corner, rect {fill: #0065fe; fill-opacity: 0.2}</style><rect x="2" y="2" width="60" height="80"></rect><polyline points="77,98 37,98 37,18 97,18 97,78 77,98 77,78"></polyline><line x1="42" y1="50" x2="90" y2="50"></line><line x1="42" y1="35" x2="90" y2="35"></line><line x1="42" y1="65" x2="90" y2="65"></line><line x1="42" y1="80" x2="77" y2="80"></line><polyline class="Corner" points="77,98 77,78 97,78 77,98"></polyline></svg>`,
correct: `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg version="1.1" width="64pt" height="64pt" id="svg604" sodipodi:docname="correct1.svg" inkscape:version="1.3.1 (91b66b0783, 2023-11-16)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><sodipodi:namedview id="namedview1" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:showpageshadow="2" inkscape:pageopacity="0.0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:document-units="pt" inkscape:zoom="4.71875" inkscape:cx="41.536424" inkscape:cy="45.245033" inkscape:window-width="1920" inkscape:window-height="1009" inkscape:window-x="-8" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg604" /><metadata id="metadata45"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs id="defs606"><linearGradient id="linearGradient612"><stop id="stop613" style="stop-color:#7fa8e3;stop-opacity:0.74117601" offset="0" /><stop id="stop614" style="stop-color:#ffffff;stop-opacity:0" offset="1" /></linearGradient><linearGradient x1="50.643887" y1="5.3679295" x2="35.752094" y2="68.044357" id="linearGradient615" xlink:href="#linearGradient612" gradientUnits="userSpaceOnUse" spreadMethod="pad" gradientTransform="matrix(0.97943293,0,0,0.95049602,-1.6723513,-0.42594526)" /><defs id="defs611"><linearGradient id="linearGradient626"><stop id="stop627" style="stop-color:#b5772d;stop-opacity:1" offset="0" /><stop id="stop628" style="stop-color:#ffffff;stop-opacity:0" offset="1" /></linearGradient><linearGradient id="linearGradient619"><stop id="stop620" style="stop-color:#770000;stop-opacity:1" offset="0" /><stop id="stop621" style="stop-color:#ffffff;stop-opacity:0" offset="1" /></linearGradient><linearGradient x1="66.331696" y1="23.212469" x2="63.465496" y2="20.962799" id="linearGradient622" xlink:href="#linearGradient619" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.72575984,0,0,0.69799881,31.311655,-0.16322915)" spreadMethod="pad" /><linearGradient x1="56.327614" y1="43.377247" x2="51.654526" y2="39.762909" id="linearGradient625" xlink:href="#linearGradient626" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.65939704,0,0,0.76824715,31.311655,-0.16322915)" spreadMethod="pad" /></defs></defs><path d="M 5.1625405,74.338495 C 2.3590825,73.101803 -1.4637446,69.144593 0.57512039,63.70333 1.5944894,57.767571 19.944274,5.3339432 24.022073,2.8606726 26.570524,0.63474026 30.266102,-0.23093243 35.490681,1.1293832 39.823256,2.1187026 78.816432,12.011897 81.110107,13.990446 c 2.293791,1.978661 4.077799,3.586282 2.293791,7.914533 -1.274226,2.22591 -16.438411,52.186155 -16.693187,55.401508 -1.01945,3.462601 -3.950238,7.667172 -8.792596,7.419811 C 53.075873,84.478938 8.7305571,75.080465 5.1625405,74.338495 Z" id="path609" style="fill:#3d4e67;fill-rule:evenodd;stroke-width:1.13619" /><path d="M 11.024348,70.133924 C 8.0935596,69.391954 3.8881995,68.649872 5.4174318,64.198052 8.2208899,53.315639 22.492956,11.517176 28.609424,6.3232738 30.011211,5.0865825 34.726007,4.5919732 43.646049,7.3126044 53.840431,10.280484 74.483857,16.958326 76.522756,17.947657 c 2.038784,0.98933 2.803458,0.98933 1.274226,5.441262 -2.293676,4.451932 -12.487943,42.540433 -15.036625,48.970914 -1.783893,4.575613 -2.16623,6.677842 -5.224579,6.677842" id="path608" style="fill:#ffffff;fill-rule:evenodd;stroke-width:1.13619" /><path d="m 26.486345,12.643375 c 0,0 3.060728,-5.9406476 10.712548,-4.1584676 7.65182,1.7822276 37.646953,9.5050076 37.34088,11.8812476 -0.306072,2.37624 -5.815383,16.336651 -6.121455,17.524771 -0.306073,1.18812 -28.46477,0.59406 -39.177318,6.83169 -10.712547,6.23763 -18.67044,11.58417 -18.67044,11.58417 0,0 11.018621,-33.267361 15.915785,-43.663411 z" id="path636" style="fill:url(#linearGradient615);fill-rule:evenodd;stroke-width:0.964856" /><path d="M 30.251041,15.979512 72.250649,26.810456" id="path671" style="fill:none;stroke:#42667e;stroke-width:1.01909pt" /><path d="M 27.214438,23.163295 68.825811,34.162994" id="path672" style="fill:none;stroke:#42667e;stroke-width:1.01909pt" /><path d="M 23.495865,32.225992 65.495473,43.056937" id="path673" style="fill:none;stroke:#42667e;stroke-width:1.01909pt" /><path d="M 17.328093,49.327551 59.327701,60.158496" id="path675" style="fill:none;stroke:#42667e;stroke-width:1.01909pt" /><path d="M 14.291776,56.511438 55.903149,67.511137" id="path676" style="fill:none;stroke:#42667e;stroke-width:1.01909pt" /><path d="M 20.459399,39.40983 62.070773,50.409529" id="path674" style="fill:none;stroke:#42667e;stroke-width:1.01909pt" /><g id="g666" transform="matrix(1.0344884,0,0,1.0039249,-1.1752113,-0.83706957)"><path d="m 44.8581,15.0473 c -3.4478,0 -5.1105,-2.5484 -5.1105,-6.38799 0,-3.83962 2.7983,-6.95584 6.2461,-6.95584 3.4478,0 4.5425,1.12884 4.5425,4.96845" transform="matrix(0.948718,0,0,1,4.011168,0.567827)" id="path667" style="fill:none;stroke:#4f4f4f;stroke-width:2.875;stroke-linecap:round" /><path d="m 44.8581,14.7634 c -3.4478,0 -5.3944,-2.2645 -5.3944,-6.10409 0,-3.83962 2.7983,-7.807574 6.2461,-7.807574 3.4478,0 4.8264,1.980574 4.8264,5.820184" transform="matrix(0.948718,0,0,1,4.011168,0.567827)" id="path668" style="fill:none;stroke:#c2c2c2;stroke-width:0.625;stroke-linecap:round" /></g><use transform="translate(11.160724,1.9951813)" id="use669" x="0" y="0" width="90" height="90" xlink:href="#g666" /><path d="M 38.057501,57.412222 C 44.253672,55.763464 51.948916,52.368981 58.594805,48.392613 70.787232,41.506607 77.732957,26.764833 85.27821,15.514511 85.87781,6.2038687 77.632963,4.021746 74.035145,6.0584009 64.890861,17.696634 58.444887,30.353325 48.251176,39.081956 45.103112,46.501327 37.907576,57.848618 38.057501,57.412222 Z" id="path617" style="fill-rule:evenodd;stroke-width:0.711744" /><path d="m 83.329419,14.496159 c -1.249197,1.745727 -2.498467,3.491453 -3.747665,5.237179 -1.648955,-3.78243 -3.597746,-5.673645 -8.544683,-6.110042 1.59903,-1.891215 3.197989,-3.7824299 4.797019,-5.673645 3.997504,-0.4364666 7.095571,2.909567 7.495329,6.546508 z" id="path613" style="fill:#be6d6d;fill-rule:evenodd;stroke-width:0.711744" /><path d="m 70.887153,14.496159 c 3.897582,-0.242458 6.595892,2.57014 8.094929,5.819135 -6.096213,9.553044 -11.143072,18.96067 -21.436704,26.477011 0,0 -2.548392,-7.128464 -6.296056,-6.255531 4.647101,-5.09176 15.440412,-19.639525 19.637831,-26.040615 z" id="path614" style="fill:#ffbc24;fill-rule:evenodd;stroke-width:0.711744" /><path d="m 50.874491,40.973171 c 3.372905,-0.169749 6.221133,3.733981 5.471614,6.110112 -1.449112,1.066801 -3.797589,2.133673 -5.246701,3.200475 -0.24984,-1.939665 -1.549034,-3.442933 -4.347337,-3.200475 1.249197,-2.085224 2.873226,-4.024888 4.122424,-6.110112 z" id="path615" style="fill:#e9dbb9;fill-rule:evenodd;stroke-width:0.711744" /><path d="m 47.051903,46.792305 c 2.57339,-0.581885 3.647743,1.891215 4.197419,3.346034 l -9.59411,4.218827 z" id="path616" style="fill:#586f93;fill-rule:evenodd;stroke-width:0.711744" /><path d="m 83.329419,14.496159 c -1.249197,1.745727 -2.498467,3.491453 -3.747665,5.237179 -1.648955,-3.78243 -3.597746,-5.673645 -8.544683,-6.110042 1.59903,-1.891215 3.197989,-3.7824299 4.797019,-5.673645 3.997504,-0.4364666 7.095571,2.909567 7.495329,6.546508 z" id="path618" style="fill:url(#linearGradient622);fill-rule:evenodd;stroke-width:0.711744" /><path d="m 76.733527,8.3860475 -3.897583,4.8007825 2.09871,0.727374 3.897582,-4.5098045 z" id="path623" style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.711744" /><path d="m 70.887153,14.496159 c 3.897582,-0.242458 6.595892,2.57014 8.094929,5.819135 -6.096213,9.553044 -11.143072,18.96067 -21.436704,26.477011 0,0 -2.548392,-7.128464 -6.296056,-6.255531 4.647101,-5.09176 15.440412,-19.639525 19.637831,-26.040615 z" id="path624" style="fill:url(#linearGradient625);fill-rule:evenodd;stroke-width:0.711744" /><path d="m 52.748359,39.227445 c 0.899436,0.533436 1.798873,1.066801 2.69831,1.600237 6.595964,-7.61338 9.59411,-15.372179 18.43863,-23.712933 -0.849512,-0.533436 -1.698952,-1.066802 -2.548464,-1.600238 -5.296698,8.92264 -11.342987,17.554372 -18.588476,23.712934 z" id="path630" style="fill:#ffffff;fill-rule:evenodd;stroke-width:0.711744" /><path d="m 56.421173,47.010573 c 0.149846,-1.527527 -0.224914,-2.618659 -1.049427,-3.855209 -1.09928,2.376131 -2.798231,4.097597 -5.171779,4.655293 -0.524677,0.436397 0.899437,1.382039 1.049355,2.254902 1.349191,-0.800153 5.171851,-2.618589 5.171851,-3.054986 z" id="path631" style="fill:#9c7850;fill-rule:evenodd;stroke-width:0.711744" /></svg> `,
download: `<svg viewBox="-4 -4 108 108" xmlns="http://www.w3.org/2000/svg"><style>* {fill: none; stroke: #0065fe; stroke-width: 6; stroke-linejoin: round;}</style><line x1="50" y1="0" x2="50" y2="75"></line><polyline points="20,50 50,75 80,50"></polyline><polyline points="0,80 0,100 100,100 100,80"></polyline></svg>`,
gdrv: `<svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>`,
html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/></svg>`,
xml: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><g style="fill: none; stroke: rgb(0, 101, 254); stroke-width: 14px;"><polyline points="80,38 8,128 80,218"></polyline><polyline points="176,38 248,128 176,218"></polyline><line x1="156.8" y1="8" x2="99.2" y2="248"></line></g><rect x="30" y="72" width="196" height="110" style="fill: orange; fill-opacity: 0.8;"></rect><text x="128" y="134" style="font-family: 'Noto Sans', 'Open Sans', sans-serif; font-size: 72px; font-weight: bold; fill: white; text-anchor: middle; dominant-baseline: middle">XML</text></svg>`,
open_tab: `<svg viewBox="-4 -4 108 108" xmlns="http://www.w3.org/2000/svg"><style>* {fill: none; stroke: #0065fe; stroke-width: 6; stroke-linejoin: round}</style><polyline points="40,8 0,8 0,100 92,100 92,60"></polyline><polyline points="60,0 100,0 100,40"></polyline><line x1="100" y1="0" x2="50" y2="50"></line></svg>`,
print: `<svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><style>* {fill: white; stroke: #0065fe; stroke-width: 5; stroke-linejoin: round}</style><polygon points="19.2 64 19.2 3.2 108.8 3.2 108.8 64"></polygon><polygon points="3.2 92.8 3.2 41.6 124.8 41.6 124.8 92.8"></polygon><polygon points="19.2 124.8 19.2 80 108.8 80 108.8 124.8"></polygon><line x1="9.6" y1="80" x2="118.4" y2="80"></line><line x1="12.8" y1="54.4" x2="28.8" y2="54.4"></line><line x1="28.8" y1="96" x2="99.2" y2="96"></line><line x1="28.8" y1="110.7" x2="99.2" y2="110.7"></line></svg>`,
sim: `<svg viewBox="-55 -55 110 110" xmlns="http://www.w3.org/2000/svg"><style>* {stroke-opacity: 0.5} ellipse {stroke: #0065fe; stroke-width: 8; fill: none} ellipse.Red {stroke: red} ellipse.Green {stroke: green} polygon {stroke: none; fill: #a0a0a0} polygon.Left {stroke: none; fill: #808080} polygon.Top {stroke: none; fill: #c0c0c0}</style><ellipse cx="0" cy="0" rx="50" ry="25" transform="rotate(30)"></ellipse><ellipse class="Red" cx="0" cy="0" rx="50" ry="25" transform="rotate(-30)"></ellipse><ellipse class="Green" cx="0" cy="0" rx="50" ry="25" transform="rotate(-90)"></ellipse><polygon class="Left" points="0,0 0,40 -30,20 -30,-20"></polygon><polygon points="0,0 0,40 30,20 30,-20"></polygon><polygon class="Top" points="0,0 -30,-20 0,-36 30,-20"></polygon></svg>`,
slides: `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg id="svg11300" sodipodi:docname="1270295409.svg" inkscape:export-filename="/home/jimmac/Desktop/wi-fi.png" viewBox="0 0 44.999071 44.999027" sodipodi:version="0.32" inkscape:export-xdpi="90.000000" inkscape:output_extension="org.inkscape.output.svg.inkscape" inkscape:export-ydpi="90.000000" inkscape:version="1.3.1 (91b66b0783, 2023-11-16)" version="1.1" width="44.999073" height="44.999027" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/"><defs id="defs3"><radialGradient id="radialGradient2462" gradientUnits="userSpaceOnUse" cy="47.401001" cx="28.284" gradientTransform="scale(1.1642,0.85894)" r="13.804" inkscape:collect="always"><stop id="stop2458" style="stop-color:#000000" offset="0" /><stop id="stop2460" style="stop-color:#000000;stop-opacity:0" offset="1" /></radialGradient><linearGradient id="linearGradient1553" y2="11.004" gradientUnits="userSpaceOnUse" x2="20.945" gradientTransform="matrix(1.8689,0,0,1.5088,-20.391,-10.017)" y1="25.473" x1="27.295" inkscape:collect="always"><stop id="stop13012" style="stop-color:#f5f5f5" offset="0" /><stop id="stop13014" style="stop-color:#e1e1e1" offset="1" /></linearGradient><radialGradient id="radialGradient1537" gradientUnits="userSpaceOnUse" cy="30.990999" cx="24.774" gradientTransform="matrix(3.5025,0,0,3.5025,-61.93,-72.877)" r="0.59020001" inkscape:collect="always"><stop id="stop13046" style="stop-color:#F0F0F0" offset="0" /><stop id="stop13048" style="stop-color:#848484" offset="1" /></radialGradient><linearGradient id="linearGradient9224" y2="7.46" gradientUnits="userSpaceOnUse" x2="24.919001" gradientTransform="matrix(1.9053,0,0,2.5218,-22.821,-13.246)" y1="6.1479001" x1="24.919001" inkscape:collect="always"><stop id="stop13035" style="stop-color:#F0F0F0" offset="0" /><stop id="stop13037" style="stop-color:#686868" offset="1" /></linearGradient><linearGradient id="linearGradient10002" y2="18.75" gradientUnits="userSpaceOnUse" x2="-19.5" y1="29" x1="-20.75" inkscape:collect="always"><stop id="stop6689" style="stop-color:#ffffff" offset="0" /><stop id="stop6691" style="stop-color:#ffffff;stop-opacity:0" offset="1" /></linearGradient><linearGradient id="linearGradient10012" y2="33.015999" gradientUnits="userSpaceOnUse" x2="-14.36" y1="18.516001" x1="-22.976" inkscape:collect="always"><stop id="stop6701" style="stop-color:#ff7171" offset="0" /><stop id="stop6703" style="stop-color:#cc0000" offset="1" /></linearGradient><linearGradient id="linearGradient10014" y2="28.195999" gradientUnits="userSpaceOnUse" x2="-9.7353001" y1="24.454" x1="-16.386999" inkscape:collect="always"><stop id="stop6713" style="stop-color:#5b8ccb" offset="0" /><stop id="stop6715" style="stop-color:#3465a4" offset="1" /></linearGradient><linearGradient id="linearGradient10016" y2="25.014999" gradientUnits="userSpaceOnUse" x2="-20.822001" y1="30.827999" x1="-17.863001" inkscape:collect="always"><stop id="stop6721" style="stop-color:#73d216" offset="0" /><stop id="stop6723" style="stop-color:#d5f7b3" offset="1" /></linearGradient><linearGradient id="linearGradient10026" y2="6" gradientUnits="userSpaceOnUse" x2="24.245001" y1="28.368999" x1="23.379999" inkscape:collect="always"><stop id="stop10022" style="stop-color:#ffffff" offset="0" /><stop id="stop10024" style="stop-color:#ffffff;stop-opacity:0" offset="1" /></linearGradient></defs><sodipodi:namedview id="base" bordercolor="#666666" inkscape:pageshadow="2" inkscape:window-y="-8" pagecolor="#ffffff" inkscape:showpageshadow="false" inkscape:grid-bbox="true" inkscape:zoom="11.313708" inkscape:cx="18.208" inkscape:window-height="1009" showgrid="false" borderopacity="0.25490196" inkscape:current-layer="layer1" stroke="#ef2929" inkscape:cy="18.605747" inkscape:window-x="-8" inkscape:window-width="1920" inkscape:pageopacity="0.0" inkscape:document-units="px" fill="#eeeeec" inkscape:pagecheckerboard="0" inkscape:deskcolor="#d1d1d1" inkscape:window-maximized="1" /><g id="layer1" inkscape:label="Layer 1" inkscape:groupmode="layer" transform="translate(-4.6259688,-1.013963)"><g id="g1" transform="matrix(1.077074,0,0,1.021318,-0.3719775,-0.00735495)"><path id="path10010" d="M 26.482,37.622 H 24.5 V 6 h 1.982 v 31.62 z" style="fill:#a4a4a4;stroke:#555753" inkscape:r_cy="true" inkscape:r_cx="true" /><path id="path13009" style="fill:#a4a4a4" inkscape:r_cx="true" inkscape:r_cy="true" d="M 26,37.622 H 24.982 V 6 H 26 v 31.62 z" /><path id="path13016" style="fill:url(#linearGradient1553);stroke:#888a85;stroke-linejoin:round" inkscape:r_cx="true" inkscape:r_cy="true" d="m 43.5,32.5 h -36 v -27 h 36 z" /><g id="g13020" style="fill:#a4a4a4;stroke:#555753" inkscape:r_cx="true" inkscape:r_cy="true" transform="matrix(1.539,0,0,1.539,-12.899,-11.057)"><path id="path13022" style="stroke:#555753" inkscape:r_cy="true" inkscape:r_cx="true" sodipodi:nodetypes="ccccc" d="m 31.492,35.959 -6.275,-4.638 -0.066,0.345 4.865,4.289 z" /><path id="path13024" style="stroke:#555753" inkscape:r_cy="true" inkscape:r_cx="true" sodipodi:nodetypes="ccccc" d="m 18.408,35.959 6.275,-4.638 -0.05,0.402 -4.75,4.232 z" /></g><path id="path10018" d="M 42.484,31.5 H 8.5 v -25 h 33.984 z" style="fill:none;stroke:url(#linearGradient10026)" inkscape:r_cy="true" inkscape:r_cx="true" /><path id="path13041" style="opacity:0.16;fill:#000000" inkscape:r_cx="true" inkscape:r_cy="true" d="M 37.646,5.8377 H 8 V 8 C 9.6714,5.6515 37.646,5.8377 37.646,5.8377 Z" /><rect id="rect13420" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="9" y="9" x="31" /><rect id="rect9222" style="color:#000000;fill:url(#linearGradient9224);stroke:#555753" inkscape:r_cy="true" inkscape:r_cx="true" rx="1.9414999" ry="1.9414999" height="4" width="40.778999" y="1.5" x="5.1402998" /><rect id="rect9226" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="9" y="11" x="31" /><rect id="rect9228" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="9" y="13" x="31" /><rect id="rect9230" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="9" y="15" x="31" /><rect id="rect9232" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="6" y="17" x="31" /><rect id="rect9234" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="23" y="22" x="11" /><rect id="rect9236" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="23" y="24" x="11" /><rect id="rect9238" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="23" y="26" x="11" /><rect id="rect9240" style="color:#000000;fill:#000000;fill-opacity:0.22807" inkscape:r_cy="true" inkscape:r_cx="true" height="1" width="16" y="28" x="11" /><ellipse id="path1693" style="fill:url(#radialGradient2462);fill-rule:evenodd" transform="matrix(0.51214,0,0,0.51214,2.9975,-5.7789)" inkscape:r_cy="true" inkscape:r_cx="true" cx="32.92857" cy="40.714287" rx="16.071428" ry="11.857142" /><g id="g6727" inkscape:r_cx="true" inkscape:r_cy="true" transform="matrix(0.58737,0,0,0.58737,30.846,-1.3012)"><path id="path3931" style="fill:#670000" inkscape:r_cx="true" inkscape:r_cy="true" d="m -27.529,18.093 c -2.569,1.698 -3.982,4.005 -3.982,6.498 v 2.069 c 0,2.491 1.413,4.798 3.982,6.497 2.427,1.603 5.634,2.487 9.03,2.487 3.394,0 6.601,-0.884 9.0288,-2.487 2.5678,-1.699 3.9817,-4.005 3.9817,-6.497 v -2.069 c 0,-2.493 -1.4146,-4.801 -3.9817,-6.498 -2.4268,-1.603 -5.6338,-2.487 -9.0288,-2.487 -3.396,0 -6.603,0.884 -9.03,2.487 z" /><path id="path3933" style="fill:#a40000" inkscape:r_cx="true" inkscape:r_cy="true" d="m -7.0244,24.454 c -1.3786,-3.387 -6.0526,-5.881 -11.613,-5.881 -5.559,0 -10.234,2.494 -11.612,5.881 h -0.415 v 2.07 c 0,4.39 5.385,7.948 12.027,7.948 6.643,0 12.027,-3.558 12.027,-7.948 l -3e-4,-2.07 h -0.4141 z" /><path id="path3935" style="fill:url(#linearGradient10012)" inkscape:r_cx="true" inkscape:r_cy="true" d="m -6.6103,24.454 c 0,4.39 -5.3837,7.949 -12.027,7.949 -6.642,0 -12.027,-3.559 -12.027,-7.949 0,-4.391 5.385,-7.95 12.027,-7.95 6.643,0 12.027,3.559 12.027,7.95 h -3e-4 z" /><path id="path3937" style="fill:#204a87" inkscape:r_cx="true" inkscape:r_cy="true" d="m -6.6103,26.833 -0.0154,-2.166 c -1.3041,4.5 -4.2363,6.407 -7.9233,7.341 v 1.994 c 3.99,-1.004 7.5618,-3.289 7.9387,-7.169 z" /><path id="path3939" style="fill:url(#linearGradient10014)" inkscape:r_cx="true" inkscape:r_cy="true" d="m -6.6103,24.454 c -0.2754,5.079 -6.5577,7.395 -7.9617,7.484 l -4.065,-7.484 h 12.026 z" /><path id="path3941" style="fill:#4e9a06" inkscape:r_cx="true" inkscape:r_cy="true" d="m -21.154,34.298 v -2.069 c 2.263,0.295 4.34,0.347 6.582,-0.214 l 0.023,1.988 c -1.88,0.616 -4.82,0.645 -6.605,0.296 z" /><path id="path3943" style="fill:url(#linearGradient10016)" inkscape:r_cx="true" inkscape:r_cy="true" d="m -18.637,24.454 4.065,7.484 c -2.489,0.949 -6.582,0.291 -6.582,0.291 z" /><ellipse id="path5959" style="color:#000000;display:block;opacity:0.31111;fill:none;stroke:url(#linearGradient10002);stroke-width:1.8548" transform="matrix(0.94698,0,0,0.8897,-0.98746,2.6885)" inkscape:r_cy="true" inkscape:r_cx="true" cx="-18.625" cy="24.375" rx="11.75" ry="7.75" /></g><g id="g10004" style="fill:#a4a4a4" transform="matrix(1.539,0,0,1.539,-12.899,-11.057)" inkscape:r_cy="true" inkscape:r_cx="true"><path id="path10006" d="m 30.015,35.956 1.477,0.003 -6.275,-4.638 -0.439,-0.014 5.238,4.648 z" inkscape:r_cy="true" inkscape:r_cx="true" /><path id="path10008" d="m 19.884,35.956 -1.476,0.003 6.275,-4.638 0.438,-0.014 -5.238,4.648 z" inkscape:r_cy="true" inkscape:r_cx="true" /></g><path id="path13050" style="fill:url(#radialGradient1537);stroke:#555753" inkscape:r_cx="true" inkscape:r_cy="true" d="m 27.84,36.5 c 0,1.292 -1.048,2.34 -2.34,2.34 -1.292,0 -2.34,-1.048 -2.34,-2.34 0,-1.289 1.048,-2.34 2.34,-2.34 1.292,0 2.34,1.051 2.34,2.34 z" /></g></g><metadata id="metadata1"><rdf:RDF><cc:Work><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><cc:license rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/" /><dc:publisher><cc:Agent rdf:about="http://openclipart.org/"><dc:title>Openclipart</dc:title></cc:Agent></dc:publisher><dc:title>tango x office presentation</dc:title><dc:date>2010-04-03T11:50:09</dc:date><dc:description>An icon from Tango Project. Since version 0.8.90 Tango Project icons are Public Domain.</dc:description><dc:source>https://openclipart.org/detail/36505/tango-x-office-presentation-by-warszawianka</dc:source><dc:creator><cc:Agent><dc:title>warszawianka</dc:title></cc:Agent></dc:creator><dc:subject><rdf:Bag><rdf:li>externalsource</rdf:li><rdf:li>icon</rdf:li><rdf:li>tango</rdf:li></rdf:Bag></dc:subject></cc:Work><cc:License rdf:about="http://creativecommons.org/publicdomain/zero/1.0/"><cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction" /><cc:permits rdf:resource="http://creativecommons.org/ns#Distribution" /><cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks" /></cc:License></rdf:RDF></metadata></svg>`,

};

for (let i in data_images)
    data_images[i] = `data:image/svg+xml;base64,` + btoa(data_images[i]);
