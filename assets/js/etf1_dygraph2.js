g2 = new Dygraph( document.getElementById('graphdiv2'), 'DATE,Premium/Discount\n2021-11-16,0.0\n2021-11-17,-0.31533834952638395\n2021-11-18,-0.448100751574243\n2021-11-19,-0.5850588712951632\n2021-11-22,-0.4826845528784762\n2021-11-23,-0.4451080715905831\n2021-11-24,-0.08258914949449414\n2021-11-26,-0.11162813519680626\n2021-11-29,-0.15418213941008618\n2021-11-30,0.411762532483273\n2021-12-01,0.028272663202910664\n2021-12-02,-0.20240359358010274\n2021-12-03,-0.4011622687093319\n2021-12-06,0.02937600470016566\n2021-12-07,-0.039015350101800905\n2021-12-08,0.034399028733300696\n2021-12-09,0.04471453832239902\n2021-12-10,-0.05151774522650365\n2021-12-13,-0.18514826103056548\n2021-12-14,-0.20285714285714906\n2021-12-15,-0.2792862684251385\n2021-12-16,-0.09473679912124222\n2021-12-17,-0.0613602336597574\n2021-12-20,-0.12081278553875974\n2021-12-21,-0.032546450788939474\n2021-12-22,0.05749486652977254\n2021-12-23,0.14788415058784032\n2021-12-27,-0.16803967375712547\n2021-12-28,-0.16547861507127948\n2021-12-29,-0.09304240428159583\n2021-12-30,-0.05013870338025361\n2021-12-31,-0.02834013085748488\n2022-01-03,0.14946267550541847\n2022-01-04,-0.0879041434069805\n2022-01-05,0.0353973558998355\n2022-01-06,0.022605278949128227\n2022-01-07,-0.09211948511349544\n2022-01-10,-0.11550999099760872\n2022-01-11,0.08699310181459197\n2022-01-12,-0.008105731157215246\n2022-01-13,-0.10004982238118743\n2022-01-14,0.016601475506750063\n2022-01-18,-0.378542510121449\n2022-01-19,-0.1130098560738757\n2022-01-20,-0.10617296908873586\n2022-01-21,-0.3481947472565583\n2022-01-24,-0.22033045510615468\n2022-01-25,0.020288008569657734\n2022-01-26,-0.08482624824462937\n2022-01-27,-0.03255539503936866\n2022-01-28,-0.04395157187914167\n2022-01-31,-0.11252691741011622\n2022-02-01,-0.0028228879756952985\n2022-02-02,0.03508545526402784\n2022-02-03,-0.014183822337487939\n2022-02-04,-0.0890958793155705\n2022-02-07,-0.045234066098287506\n2022-02-08,-0.10972166196047128\n2022-02-09,-0.10013874645594667\n2022-02-10,-0.10397314430102833\n2022-02-11,-0.16258260245125555\n2022-02-14,-0.08732423975355008\n2022-02-15,-0.021306532663312172\n2022-02-16,-0.037639295424418684\n2022-02-17,-0.10623143967745108\n2022-02-18,-0.0048430058923076835\n2022-02-22,-0.25995099681520584\n2022-02-23,-0.23533033331037956\n2022-02-24,-0.04049460685463524\n2022-02-25,0.07490819674800253\n2022-02-28,0.0008124598848135989\n2022-03-01,-0.12769724736955146\n2022-03-02,-0.23629738613748508\n2022-03-03,0.07986993768522854\n2022-03-04,0.1598074178293052\n2022-03-07,-0.16138594295501685\n2022-03-08,-0.11188581065795233\n2022-03-09,-0.010172650219530954\n2022-03-10,-0.18433630772742848\n2022-03-11,0.06717522017398725\n2022-03-14,-0.15735641227380137\n2022-03-15,0.15068096203998405\n2022-03-16,0.031577029735041506\n2022-03-17,0.2977862000137277\n2022-03-18,-0.05938597295347403\n2022-03-21,-0.11334644360514456\n2022-03-22,-0.03973678354579624\n2022-03-23,-0.016817826896509125\n2022-03-24,-0.061812091242618994\n2022-03-25,0.0335510155173413\n2022-03-28,-0.11976860705118497\n2022-03-29,0.13965598863816542\n2022-03-30,0.15603960396040062\n2022-03-31,0.08982600222158243\n2022-04-01,0.1755496375556831\n2022-04-04,-0.0047347363935523745\n2022-04-05,0.0148136878475702\n2022-04-06,0.028372703837598046\n2022-04-07,-0.00040615074691219277\n2022-04-08,0.0635771953490849\n2022-04-11,-0.16604451476271986\n2022-04-12,-0.0057977736549141845\n2022-04-13,0.014355499591900411\n2022-04-14,0.042650456732573616\n2022-04-18,-0.013720386831750364\n2022-04-19,-0.09990675369655477\n2022-04-20,0.09350592969523674\n2022-04-21,0.051971977385845136\n2022-04-22,-0.04377037128323602\n2022-04-25,-0.0029888345680184614\n2022-04-26,-0.1402890040349547\n2022-04-27,-0.012105386032101872\n2022-04-28,-0.06495489721209946\n2022-04-29,0.06479407498949374\n', { includeZero: true,     xlabel: 'Date',     xRangePad: 10,     ylabel: '<span style="position: absolute; transform: translate(-50%, -10px)">Premium/Discount</span>',     legend: 'always',     title: 'Historical Premium/Discount',     axisLabelFormatter: function (number) {                 if (typeof number === 'object') {                     return new Date(number).toLocaleDateString('en-us');                 }                 return parseFloat(number).toFixed(2) + '%';             },    valueFormatter: function (number) {                 var numDate = new Date(number);                 if (numDate > 1448327658) {                     return new Date(number).toLocaleDateString('en-us');                 }                 return parseFloat(number).toFixed(2) + '%';             }} );