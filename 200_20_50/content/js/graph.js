/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 9377.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 1.0], [4.4, 1.0], [4.5, 1.0], [4.6, 1.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 3.0], [11.7, 3.0], [11.8, 3.0], [11.9, 3.0], [12.0, 3.0], [12.1, 3.0], [12.2, 3.0], [12.3, 3.0], [12.4, 3.0], [12.5, 3.0], [12.6, 3.0], [12.7, 3.0], [12.8, 3.0], [12.9, 3.0], [13.0, 3.0], [13.1, 3.0], [13.2, 3.0], [13.3, 3.0], [13.4, 3.0], [13.5, 3.0], [13.6, 3.0], [13.7, 3.0], [13.8, 3.0], [13.9, 3.0], [14.0, 3.0], [14.1, 3.0], [14.2, 3.0], [14.3, 3.0], [14.4, 3.0], [14.5, 3.0], [14.6, 3.0], [14.7, 3.0], [14.8, 3.0], [14.9, 3.0], [15.0, 3.0], [15.1, 3.0], [15.2, 3.0], [15.3, 3.0], [15.4, 4.0], [15.5, 4.0], [15.6, 4.0], [15.7, 4.0], [15.8, 4.0], [15.9, 4.0], [16.0, 4.0], [16.1, 4.0], [16.2, 4.0], [16.3, 4.0], [16.4, 4.0], [16.5, 4.0], [16.6, 4.0], [16.7, 4.0], [16.8, 4.0], [16.9, 4.0], [17.0, 4.0], [17.1, 4.0], [17.2, 4.0], [17.3, 4.0], [17.4, 4.0], [17.5, 4.0], [17.6, 4.0], [17.7, 4.0], [17.8, 4.0], [17.9, 4.0], [18.0, 4.0], [18.1, 4.0], [18.2, 4.0], [18.3, 5.0], [18.4, 5.0], [18.5, 5.0], [18.6, 5.0], [18.7, 5.0], [18.8, 5.0], [18.9, 5.0], [19.0, 5.0], [19.1, 5.0], [19.2, 5.0], [19.3, 5.0], [19.4, 5.0], [19.5, 5.0], [19.6, 5.0], [19.7, 5.0], [19.8, 5.0], [19.9, 5.0], [20.0, 5.0], [20.1, 5.0], [20.2, 5.0], [20.3, 5.0], [20.4, 5.0], [20.5, 5.0], [20.6, 5.0], [20.7, 6.0], [20.8, 6.0], [20.9, 6.0], [21.0, 6.0], [21.1, 6.0], [21.2, 6.0], [21.3, 6.0], [21.4, 6.0], [21.5, 6.0], [21.6, 6.0], [21.7, 6.0], [21.8, 6.0], [21.9, 6.0], [22.0, 6.0], [22.1, 6.0], [22.2, 6.0], [22.3, 6.0], [22.4, 6.0], [22.5, 6.0], [22.6, 6.0], [22.7, 6.0], [22.8, 6.0], [22.9, 6.0], [23.0, 7.0], [23.1, 7.0], [23.2, 7.0], [23.3, 7.0], [23.4, 7.0], [23.5, 7.0], [23.6, 7.0], [23.7, 7.0], [23.8, 7.0], [23.9, 7.0], [24.0, 7.0], [24.1, 7.0], [24.2, 7.0], [24.3, 7.0], [24.4, 7.0], [24.5, 7.0], [24.6, 7.0], [24.7, 7.0], [24.8, 7.0], [24.9, 8.0], [25.0, 8.0], [25.1, 8.0], [25.2, 8.0], [25.3, 8.0], [25.4, 8.0], [25.5, 8.0], [25.6, 8.0], [25.7, 8.0], [25.8, 8.0], [25.9, 8.0], [26.0, 8.0], [26.1, 8.0], [26.2, 8.0], [26.3, 8.0], [26.4, 9.0], [26.5, 9.0], [26.6, 9.0], [26.7, 9.0], [26.8, 9.0], [26.9, 9.0], [27.0, 9.0], [27.1, 9.0], [27.2, 9.0], [27.3, 9.0], [27.4, 9.0], [27.5, 9.0], [27.6, 9.0], [27.7, 9.0], [27.8, 10.0], [27.9, 10.0], [28.0, 10.0], [28.1, 10.0], [28.2, 10.0], [28.3, 10.0], [28.4, 10.0], [28.5, 10.0], [28.6, 10.0], [28.7, 10.0], [28.8, 10.0], [28.9, 10.0], [29.0, 10.0], [29.1, 10.0], [29.2, 11.0], [29.3, 11.0], [29.4, 11.0], [29.5, 11.0], [29.6, 11.0], [29.7, 11.0], [29.8, 11.0], [29.9, 11.0], [30.0, 11.0], [30.1, 11.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 14.0], [32.4, 14.0], [32.5, 14.0], [32.6, 14.0], [32.7, 14.0], [32.8, 14.0], [32.9, 14.0], [33.0, 14.0], [33.1, 14.0], [33.2, 15.0], [33.3, 15.0], [33.4, 15.0], [33.5, 15.0], [33.6, 15.0], [33.7, 15.0], [33.8, 15.0], [33.9, 15.0], [34.0, 16.0], [34.1, 16.0], [34.2, 16.0], [34.3, 16.0], [34.4, 16.0], [34.5, 16.0], [34.6, 16.0], [34.7, 17.0], [34.8, 17.0], [34.9, 17.0], [35.0, 17.0], [35.1, 17.0], [35.2, 17.0], [35.3, 18.0], [35.4, 18.0], [35.5, 18.0], [35.6, 18.0], [35.7, 18.0], [35.8, 18.0], [35.9, 19.0], [36.0, 19.0], [36.1, 19.0], [36.2, 19.0], [36.3, 19.0], [36.4, 20.0], [36.5, 20.0], [36.6, 20.0], [36.7, 20.0], [36.8, 21.0], [36.9, 21.0], [37.0, 21.0], [37.1, 21.0], [37.2, 22.0], [37.3, 22.0], [37.4, 22.0], [37.5, 22.0], [37.6, 23.0], [37.7, 23.0], [37.8, 23.0], [37.9, 24.0], [38.0, 24.0], [38.1, 24.0], [38.2, 25.0], [38.3, 25.0], [38.4, 26.0], [38.5, 26.0], [38.6, 26.0], [38.7, 27.0], [38.8, 28.0], [38.9, 28.0], [39.0, 29.0], [39.1, 29.0], [39.2, 30.0], [39.3, 30.0], [39.4, 31.0], [39.5, 32.0], [39.6, 33.0], [39.7, 35.0], [39.8, 36.0], [39.9, 38.0], [40.0, 39.0], [40.1, 41.0], [40.2, 44.0], [40.3, 48.0], [40.4, 52.0], [40.5, 60.0], [40.6, 68.0], [40.7, 80.0], [40.8, 101.0], [40.9, 109.0], [41.0, 121.0], [41.1, 131.0], [41.2, 144.0], [41.3, 150.0], [41.4, 156.0], [41.5, 177.0], [41.6, 189.0], [41.7, 196.0], [41.8, 209.0], [41.9, 223.0], [42.0, 240.0], [42.1, 297.0], [42.2, 319.0], [42.3, 334.0], [42.4, 351.0], [42.5, 363.0], [42.6, 368.0], [42.7, 378.0], [42.8, 385.0], [42.9, 392.0], [43.0, 397.0], [43.1, 402.0], [43.2, 408.0], [43.3, 413.0], [43.4, 416.0], [43.5, 420.0], [43.6, 425.0], [43.7, 431.0], [43.8, 438.0], [43.9, 449.0], [44.0, 457.0], [44.1, 461.0], [44.2, 473.0], [44.3, 480.0], [44.4, 485.0], [44.5, 493.0], [44.6, 498.0], [44.7, 513.0], [44.8, 531.0], [44.9, 535.0], [45.0, 546.0], [45.1, 573.0], [45.2, 660.0], [45.3, 685.0], [45.4, 705.0], [45.5, 716.0], [45.6, 720.0], [45.7, 724.0], [45.8, 733.0], [45.9, 736.0], [46.0, 743.0], [46.1, 758.0], [46.2, 767.0], [46.3, 786.0], [46.4, 793.0], [46.5, 801.0], [46.6, 811.0], [46.7, 817.0], [46.8, 838.0], [46.9, 849.0], [47.0, 857.0], [47.1, 868.0], [47.2, 877.0], [47.3, 887.0], [47.4, 901.0], [47.5, 912.0], [47.6, 920.0], [47.7, 928.0], [47.8, 942.0], [47.9, 947.0], [48.0, 957.0], [48.1, 972.0], [48.2, 993.0], [48.3, 1041.0], [48.4, 1057.0], [48.5, 1062.0], [48.6, 1068.0], [48.7, 1077.0], [48.8, 1083.0], [48.9, 1089.0], [49.0, 1094.0], [49.1, 1098.0], [49.2, 1104.0], [49.3, 1110.0], [49.4, 1118.0], [49.5, 1122.0], [49.6, 1128.0], [49.7, 1137.0], [49.8, 1143.0], [49.9, 1150.0], [50.0, 1161.0], [50.1, 1164.0], [50.2, 1179.0], [50.3, 1203.0], [50.4, 1219.0], [50.5, 1230.0], [50.6, 1249.0], [50.7, 1282.0], [50.8, 1340.0], [50.9, 1346.0], [51.0, 1356.0], [51.1, 1361.0], [51.2, 1364.0], [51.3, 1376.0], [51.4, 1383.0], [51.5, 1388.0], [51.6, 1398.0], [51.7, 1405.0], [51.8, 1409.0], [51.9, 1412.0], [52.0, 1414.0], [52.1, 1415.0], [52.2, 1416.0], [52.3, 1420.0], [52.4, 1424.0], [52.5, 1428.0], [52.6, 1441.0], [52.7, 1448.0], [52.8, 1456.0], [52.9, 1468.0], [53.0, 1473.0], [53.1, 1478.0], [53.2, 1489.0], [53.3, 1505.0], [53.4, 1512.0], [53.5, 1537.0], [53.6, 1547.0], [53.7, 1552.0], [53.8, 1559.0], [53.9, 1571.0], [54.0, 1588.0], [54.1, 1616.0], [54.2, 1620.0], [54.3, 1628.0], [54.4, 1649.0], [54.5, 1671.0], [54.6, 1703.0], [54.7, 1729.0], [54.8, 1824.0], [54.9, 1855.0], [55.0, 1862.0], [55.1, 1875.0], [55.2, 1887.0], [55.3, 2000.0], [55.4, 2038.0], [55.5, 2049.0], [55.6, 2078.0], [55.7, 2095.0], [55.8, 2108.0], [55.9, 2131.0], [56.0, 2144.0], [56.1, 2154.0], [56.2, 2164.0], [56.3, 2206.0], [56.4, 2210.0], [56.5, 2213.0], [56.6, 2233.0], [56.7, 2251.0], [56.8, 2260.0], [56.9, 2299.0], [57.0, 2302.0], [57.1, 2309.0], [57.2, 2312.0], [57.3, 2317.0], [57.4, 2319.0], [57.5, 2325.0], [57.6, 2327.0], [57.7, 2341.0], [57.8, 2344.0], [57.9, 2346.0], [58.0, 2349.0], [58.1, 2353.0], [58.2, 2359.0], [58.3, 2366.0], [58.4, 2372.0], [58.5, 2373.0], [58.6, 2376.0], [58.7, 2384.0], [58.8, 2393.0], [58.9, 2414.0], [59.0, 2437.0], [59.1, 2451.0], [59.2, 2454.0], [59.3, 2458.0], [59.4, 2475.0], [59.5, 2490.0], [59.6, 2496.0], [59.7, 2499.0], [59.8, 2500.0], [59.9, 2503.0], [60.0, 2514.0], [60.1, 2518.0], [60.2, 2526.0], [60.3, 2541.0], [60.4, 2546.0], [60.5, 2551.0], [60.6, 2556.0], [60.7, 2571.0], [60.8, 2584.0], [60.9, 2593.0], [61.0, 2615.0], [61.1, 2622.0], [61.2, 2635.0], [61.3, 2643.0], [61.4, 2644.0], [61.5, 2649.0], [61.6, 2653.0], [61.7, 2658.0], [61.8, 2658.0], [61.9, 2659.0], [62.0, 2661.0], [62.1, 2669.0], [62.2, 2670.0], [62.3, 2673.0], [62.4, 2679.0], [62.5, 2680.0], [62.6, 2682.0], [62.7, 2692.0], [62.8, 2700.0], [62.9, 2705.0], [63.0, 2708.0], [63.1, 2710.0], [63.2, 2711.0], [63.3, 2713.0], [63.4, 2718.0], [63.5, 2724.0], [63.6, 2738.0], [63.7, 2744.0], [63.8, 2746.0], [63.9, 2765.0], [64.0, 2778.0], [64.1, 2798.0], [64.2, 2812.0], [64.3, 2818.0], [64.4, 2824.0], [64.5, 2832.0], [64.6, 2836.0], [64.7, 2843.0], [64.8, 2853.0], [64.9, 2857.0], [65.0, 2883.0], [65.1, 2894.0], [65.2, 2897.0], [65.3, 2916.0], [65.4, 2919.0], [65.5, 2930.0], [65.6, 2936.0], [65.7, 2944.0], [65.8, 2952.0], [65.9, 2956.0], [66.0, 2960.0], [66.1, 2965.0], [66.2, 2968.0], [66.3, 2974.0], [66.4, 2976.0], [66.5, 3004.0], [66.6, 3007.0], [66.7, 3009.0], [66.8, 3012.0], [66.9, 3019.0], [67.0, 3023.0], [67.1, 3050.0], [67.2, 3057.0], [67.3, 3061.0], [67.4, 3073.0], [67.5, 3111.0], [67.6, 3115.0], [67.7, 3126.0], [67.8, 3131.0], [67.9, 3134.0], [68.0, 3144.0], [68.1, 3146.0], [68.2, 3150.0], [68.3, 3153.0], [68.4, 3157.0], [68.5, 3162.0], [68.6, 3166.0], [68.7, 3174.0], [68.8, 3176.0], [68.9, 3180.0], [69.0, 3181.0], [69.1, 3183.0], [69.2, 3186.0], [69.3, 3192.0], [69.4, 3202.0], [69.5, 3215.0], [69.6, 3232.0], [69.7, 3235.0], [69.8, 3238.0], [69.9, 3240.0], [70.0, 3241.0], [70.1, 3244.0], [70.2, 3245.0], [70.3, 3248.0], [70.4, 3252.0], [70.5, 3262.0], [70.6, 3270.0], [70.7, 3275.0], [70.8, 3289.0], [70.9, 3295.0], [71.0, 3299.0], [71.1, 3303.0], [71.2, 3306.0], [71.3, 3307.0], [71.4, 3323.0], [71.5, 3326.0], [71.6, 3336.0], [71.7, 3337.0], [71.8, 3339.0], [71.9, 3347.0], [72.0, 3351.0], [72.1, 3353.0], [72.2, 3356.0], [72.3, 3368.0], [72.4, 3378.0], [72.5, 3382.0], [72.6, 3386.0], [72.7, 3395.0], [72.8, 3400.0], [72.9, 3406.0], [73.0, 3409.0], [73.1, 3414.0], [73.2, 3418.0], [73.3, 3428.0], [73.4, 3429.0], [73.5, 3430.0], [73.6, 3435.0], [73.7, 3455.0], [73.8, 3465.0], [73.9, 3476.0], [74.0, 3478.0], [74.1, 3479.0], [74.2, 3483.0], [74.3, 3486.0], [74.4, 3489.0], [74.5, 3491.0], [74.6, 3496.0], [74.7, 3500.0], [74.8, 3503.0], [74.9, 3510.0], [75.0, 3522.0], [75.1, 3527.0], [75.2, 3534.0], [75.3, 3539.0], [75.4, 3546.0], [75.5, 3558.0], [75.6, 3564.0], [75.7, 3570.0], [75.8, 3576.0], [75.9, 3578.0], [76.0, 3617.0], [76.1, 3643.0], [76.2, 3678.0], [76.3, 3684.0], [76.4, 3689.0], [76.5, 3691.0], [76.6, 3692.0], [76.7, 3696.0], [76.8, 3698.0], [76.9, 3701.0], [77.0, 3702.0], [77.1, 3702.0], [77.2, 3704.0], [77.3, 3706.0], [77.4, 3708.0], [77.5, 3712.0], [77.6, 3715.0], [77.7, 3721.0], [77.8, 3724.0], [77.9, 3733.0], [78.0, 3738.0], [78.1, 3741.0], [78.2, 3744.0], [78.3, 3746.0], [78.4, 3747.0], [78.5, 3749.0], [78.6, 3751.0], [78.7, 3753.0], [78.8, 3756.0], [78.9, 3779.0], [79.0, 3783.0], [79.1, 3786.0], [79.2, 3829.0], [79.3, 3835.0], [79.4, 3852.0], [79.5, 3862.0], [79.6, 3868.0], [79.7, 3872.0], [79.8, 3875.0], [79.9, 3882.0], [80.0, 3887.0], [80.1, 3892.0], [80.2, 3900.0], [80.3, 3909.0], [80.4, 3916.0], [80.5, 3922.0], [80.6, 3962.0], [80.7, 3985.0], [80.8, 3991.0], [80.9, 3996.0], [81.0, 4014.0], [81.1, 4018.0], [81.2, 4031.0], [81.3, 4043.0], [81.4, 4047.0], [81.5, 4049.0], [81.6, 4054.0], [81.7, 4063.0], [81.8, 4081.0], [81.9, 4103.0], [82.0, 4107.0], [82.1, 4115.0], [82.2, 4139.0], [82.3, 4146.0], [82.4, 4214.0], [82.5, 4219.0], [82.6, 4224.0], [82.7, 4228.0], [82.8, 4232.0], [82.9, 4235.0], [83.0, 4241.0], [83.1, 4289.0], [83.2, 4301.0], [83.3, 4329.0], [83.4, 4370.0], [83.5, 4382.0], [83.6, 4395.0], [83.7, 4403.0], [83.8, 4412.0], [83.9, 4415.0], [84.0, 4420.0], [84.1, 4428.0], [84.2, 4431.0], [84.3, 4433.0], [84.4, 4436.0], [84.5, 4446.0], [84.6, 4466.0], [84.7, 4488.0], [84.8, 4495.0], [84.9, 4533.0], [85.0, 4563.0], [85.1, 4573.0], [85.2, 4581.0], [85.3, 4599.0], [85.4, 4613.0], [85.5, 4632.0], [85.6, 4637.0], [85.7, 4643.0], [85.8, 4665.0], [85.9, 4685.0], [86.0, 4688.0], [86.1, 4693.0], [86.2, 4710.0], [86.3, 4715.0], [86.4, 4718.0], [86.5, 4741.0], [86.6, 4757.0], [86.7, 4778.0], [86.8, 4796.0], [86.9, 4826.0], [87.0, 4846.0], [87.1, 4853.0], [87.2, 4868.0], [87.3, 4885.0], [87.4, 4923.0], [87.5, 4947.0], [87.6, 4973.0], [87.7, 4993.0], [87.8, 5006.0], [87.9, 5007.0], [88.0, 5011.0], [88.1, 5026.0], [88.2, 5038.0], [88.3, 5050.0], [88.4, 5094.0], [88.5, 5116.0], [88.6, 5118.0], [88.7, 5146.0], [88.8, 5149.0], [88.9, 5168.0], [89.0, 5203.0], [89.1, 5211.0], [89.2, 5225.0], [89.3, 5248.0], [89.4, 5256.0], [89.5, 5262.0], [89.6, 5270.0], [89.7, 5279.0], [89.8, 5286.0], [89.9, 5292.0], [90.0, 5302.0], [90.1, 5309.0], [90.2, 5311.0], [90.3, 5312.0], [90.4, 5320.0], [90.5, 5324.0], [90.6, 5327.0], [90.7, 5332.0], [90.8, 5343.0], [90.9, 5353.0], [91.0, 5360.0], [91.1, 5387.0], [91.2, 5421.0], [91.3, 5439.0], [91.4, 5441.0], [91.5, 5443.0], [91.6, 5451.0], [91.7, 5482.0], [91.8, 5495.0], [91.9, 5513.0], [92.0, 5520.0], [92.1, 5527.0], [92.2, 5544.0], [92.3, 5549.0], [92.4, 5565.0], [92.5, 5571.0], [92.6, 5576.0], [92.7, 5580.0], [92.8, 5594.0], [92.9, 5599.0], [93.0, 5618.0], [93.1, 5628.0], [93.2, 5632.0], [93.3, 5641.0], [93.4, 5668.0], [93.5, 5688.0], [93.6, 5708.0], [93.7, 5734.0], [93.8, 5769.0], [93.9, 5775.0], [94.0, 5781.0], [94.1, 5790.0], [94.2, 5801.0], [94.3, 5810.0], [94.4, 5842.0], [94.5, 5868.0], [94.6, 5880.0], [94.7, 5884.0], [94.8, 5891.0], [94.9, 5904.0], [95.0, 5914.0], [95.1, 5921.0], [95.2, 5925.0], [95.3, 5927.0], [95.4, 5929.0], [95.5, 5946.0], [95.6, 5961.0], [95.7, 5979.0], [95.8, 6013.0], [95.9, 6029.0], [96.0, 6055.0], [96.1, 6084.0], [96.2, 6121.0], [96.3, 6130.0], [96.4, 6141.0], [96.5, 6149.0], [96.6, 6151.0], [96.7, 6153.0], [96.8, 6187.0], [96.9, 6226.0], [97.0, 6228.0], [97.1, 6235.0], [97.2, 6252.0], [97.3, 6357.0], [97.4, 6387.0], [97.5, 6452.0], [97.6, 6499.0], [97.7, 6515.0], [97.8, 6522.0], [97.9, 6539.0], [98.0, 6548.0], [98.1, 6774.0], [98.2, 6780.0], [98.3, 6787.0], [98.4, 7061.0], [98.5, 7165.0], [98.6, 7219.0], [98.7, 7339.0], [98.8, 7516.0], [98.9, 7701.0], [99.0, 7832.0], [99.1, 7863.0], [99.2, 7898.0], [99.3, 7936.0], [99.4, 8019.0], [99.5, 8164.0], [99.6, 8402.0], [99.7, 8558.0], [99.8, 8592.0], [99.9, 8968.0], [100.0, 9377.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 4078.0, "series": [{"data": [[0.0, 4078.0], [600.0, 22.0], [700.0, 110.0], [800.0, 91.0], [900.0, 83.0], [1000.0, 89.0], [1100.0, 118.0], [1200.0, 43.0], [1300.0, 92.0], [1400.0, 164.0], [1500.0, 77.0], [1600.0, 54.0], [1700.0, 21.0], [1800.0, 45.0], [1900.0, 5.0], [2000.0, 45.0], [2100.0, 52.0], [2300.0, 194.0], [2200.0, 65.0], [2400.0, 91.0], [2500.0, 119.0], [2600.0, 184.0], [2700.0, 132.0], [2800.0, 111.0], [2900.0, 119.0], [3000.0, 106.0], [3100.0, 187.0], [3200.0, 168.0], [3300.0, 174.0], [3400.0, 192.0], [3500.0, 125.0], [3700.0, 227.0], [3600.0, 91.0], [3800.0, 107.0], [3900.0, 74.0], [4000.0, 96.0], [4200.0, 84.0], [4100.0, 46.0], [4300.0, 44.0], [4600.0, 82.0], [4400.0, 118.0], [4500.0, 51.0], [4800.0, 52.0], [4700.0, 69.0], [5000.0, 70.0], [4900.0, 38.0], [5100.0, 53.0], [5200.0, 100.0], [5300.0, 119.0], [5600.0, 67.0], [5500.0, 107.0], [5400.0, 68.0], [5700.0, 62.0], [5800.0, 67.0], [5900.0, 88.0], [6100.0, 71.0], [6000.0, 40.0], [6200.0, 36.0], [6300.0, 20.0], [6500.0, 46.0], [6400.0, 20.0], [6700.0, 24.0], [6800.0, 3.0], [6900.0, 1.0], [7100.0, 13.0], [7000.0, 9.0], [7200.0, 7.0], [7300.0, 7.0], [7400.0, 2.0], [7500.0, 11.0], [7600.0, 2.0], [7800.0, 23.0], [7900.0, 11.0], [7700.0, 12.0], [8100.0, 2.0], [8000.0, 16.0], [8700.0, 5.0], [8500.0, 14.0], [8400.0, 7.0], [8300.0, 9.0], [8600.0, 1.0], [8900.0, 3.0], [9200.0, 5.0], [8800.0, 1.0], [9300.0, 5.0], [100.0, 97.0], [200.0, 36.0], [300.0, 95.0], [400.0, 155.0], [500.0, 55.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 365.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4659.0, "series": [{"data": [[0.0, 365.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 843.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4659.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4133.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 89.6876832844574, "minX": 1.57493136E12, "maxY": 199.3697478991594, "series": [{"data": [[1.57493142E12, 199.3697478991594], [1.57493136E12, 89.6876832844574], [1.57493148E12, 136.47247360482598]], "isOverall": false, "label": "1. Save API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493148E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2.0, "minX": 1.0, "maxY": 8125.291666666667, "series": [{"data": [[2.0, 596.5], [3.0, 41.666666666666664], [4.0, 113.0], [5.0, 333.04545454545456], [6.0, 49.5], [7.0, 41.545454545454554], [8.0, 647.3333333333334], [9.0, 230.66666666666666], [10.0, 112.33333333333334], [11.0, 131.9230769230769], [12.0, 351.875], [13.0, 246.65624999999994], [14.0, 102.62500000000001], [15.0, 135.41538461538465], [16.0, 944.1666666666667], [17.0, 540.8235294117648], [18.0, 59.62499999999999], [19.0, 55.73333333333335], [20.0, 623.7142857142856], [21.0, 106.33333333333333], [22.0, 251.29999999999998], [23.0, 195.92857142857142], [24.0, 295.3333333333333], [25.0, 290.875], [26.0, 280.75], [27.0, 365.91666666666663], [28.0, 125.71428571428575], [29.0, 288.73333333333335], [30.0, 120.66666666666666], [31.0, 348.3846153846154], [32.0, 421.0], [33.0, 431.4], [34.0, 386.1818181818182], [35.0, 265.0], [36.0, 212.0857142857143], [37.0, 300.99999999999994], [38.0, 361.5], [39.0, 66.21428571428572], [40.0, 270.5652173913043], [41.0, 330.47058823529414], [42.0, 194.38461538461536], [43.0, 259.99999999999994], [44.0, 267.63157894736844], [45.0, 369.25], [46.0, 164.96296296296288], [47.0, 503.0], [48.0, 203.88571428571427], [49.0, 349.53333333333325], [50.0, 446.0526315789474], [51.0, 500.2], [52.0, 239.5172413793103], [53.0, 254.34210526315792], [55.0, 405.90909090909093], [54.0, 15.0], [56.0, 497.5], [57.0, 85.10000000000001], [58.0, 280.87499999999994], [59.0, 641.5833333333334], [60.0, 278.6923076923077], [61.0, 465.0714285714285], [62.0, 110.42857142857142], [63.0, 544.6666666666667], [65.0, 660.7391304347829], [66.0, 589.4166666666667], [67.0, 448.49999999999994], [64.0, 8.23076923076923], [68.0, 854.3000000000001], [69.0, 80.37499999999999], [70.0, 449.8148148148147], [71.0, 444.73333333333323], [72.0, 178.90277777777786], [73.0, 368.07407407407396], [74.0, 517.6666666666667], [75.0, 304.25641025641016], [76.0, 520.3], [77.0, 850.0], [78.0, 417.1666666666667], [79.0, 377.3461538461538], [80.0, 418.9565217391304], [81.0, 1014.1111111111112], [82.0, 892.7777777777778], [83.0, 166.89772727272725], [85.0, 115.91588785046734], [86.0, 401.08333333333314], [87.0, 9.5], [84.0, 5.666666666666667], [88.0, 33.93103448275861], [90.0, 639.2558139534888], [91.0, 568.6969696969696], [89.0, 9.785714285714286], [92.0, 403.875], [93.0, 511.8055555555555], [94.0, 198.09433962264154], [95.0, 32.8], [96.0, 54.53846153846154], [97.0, 467.6470588235296], [99.0, 771.6666666666663], [98.0, 21.5], [102.0, 868.1525423728816], [103.0, 137.88888888888889], [101.0, 7.1818181818181825], [100.0, 13.058823529411766], [105.0, 436.40350877193], [106.0, 572.5882352941176], [107.0, 489.0], [104.0, 6.0], [108.0, 200.15384615384613], [109.0, 34.261904761904745], [110.0, 646.7222222222222], [111.0, 309.78947368421046], [112.0, 398.91666666666674], [115.0, 512.7931034482759], [114.0, 2.5], [113.0, 4.5], [119.0, 13.100000000000001], [118.0, 13.333333333333336], [117.0, 14.0], [116.0, 3.5], [120.0, 36.22916666666668], [121.0, 213.94000000000005], [122.0, 324.1785714285714], [123.0, 598.3589743589744], [125.0, 1253.125], [126.0, 433.6545454545453], [127.0, 5.404761904761905], [124.0, 10.133333333333333], [128.0, 757.4637681159423], [129.0, 3792.0], [132.0, 102.43902439024393], [133.0, 457.78431372549034], [134.0, 17.597122302158276], [135.0, 13.945652173913043], [131.0, 7.666666666666667], [130.0, 13.0], [136.0, 66.93902439024387], [137.0, 159.29921259842519], [138.0, 164.13775510204073], [140.0, 6506.649999999999], [142.0, 1553.2459016393443], [143.0, 18.205882352941178], [141.0, 8125.291666666667], [139.0, 9.15], [144.0, 1151.5294117647059], [146.0, 905.2307692307692], [148.0, 1267.0263157894738], [151.0, 1004.6190476190476], [150.0, 580.4722222222222], [149.0, 503.44186046511606], [147.0, 851.0588235294117], [145.0, 358.8483412322277], [152.0, 788.5333333333334], [153.0, 709.3921568627449], [155.0, 1534.0], [157.0, 1322.5853658536582], [158.0, 950.4999999999998], [159.0, 845.9999999999997], [156.0, 271.44999999999993], [154.0, 15.0], [162.0, 1187.2999999999997], [165.0, 631.3015873015869], [167.0, 4.875], [166.0, 990.8333333333333], [164.0, 604.7], [163.0, 6.499999999999999], [161.0, 3.76056338028169], [160.0, 2.6666666666666665], [168.0, 448.5222222222222], [171.0, 1666.125], [174.0, 1312.2142857142853], [175.0, 285.50000000000006], [173.0, 242.17999999999992], [172.0, 31.0], [170.0, 335.52631578947364], [169.0, 2.0], [180.0, 1711.2222222222226], [182.0, 1967.0769230769233], [183.0, 1056.4444444444443], [181.0, 3.6], [179.0, 2.5], [178.0, 293.8070175438595], [177.0, 313.1666666666667], [176.0, 253.0851063829788], [184.0, 1282.5897435897436], [186.0, 1812.125], [187.0, 1325.8888888888887], [190.0, 1318.2727272727273], [191.0, 1914.5151515151508], [189.0, 3.7500000000000004], [188.0, 2.8999999999999995], [185.0, 6.0], [193.0, 271.23170731707336], [195.0, 180.66315789473697], [196.0, 4059.9680851063845], [197.0, 4234.4], [199.0, 5801.574074074075], [198.0, 6346.5], [194.0, 12.666666666666666], [192.0, 5.25531914893617], [200.0, 3903.9034323770425], [1.0, 50.142857142857146]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}, {"data": [[151.04839999999976, 1970.22750000001]], "isOverall": false, "label": "Save API HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 6524.466666666666, "minX": 1.57493136E12, "maxY": 935514.5333333333, "series": [{"data": [[1.57493142E12, 15938.066666666668], [1.57493136E12, 6524.466666666666], [1.57493148E12, 179945.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.57493142E12, 935514.5333333333], [1.57493136E12, 382965.73333333334], [1.57493148E12, 328777.76666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493148E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 961.6268328445748, "minX": 1.57493136E12, "maxY": 3449.2466986794743, "series": [{"data": [[1.57493142E12, 3449.2466986794743], [1.57493136E12, 961.6268328445748], [1.57493148E12, 1300.4762443438888]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493148E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 961.58797653959, "minX": 1.57493136E12, "maxY": 3449.237094837933, "series": [{"data": [[1.57493142E12, 3449.237094837933], [1.57493136E12, 961.58797653959], [1.57493148E12, 1283.0113122171974]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493148E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.5007331378299115, "minX": 1.57493136E12, "maxY": 17.407616892911, "series": [{"data": [[1.57493142E12, 0.7839135654261715], [1.57493136E12, 0.5007331378299115], [1.57493148E12, 17.407616892911]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493148E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 29.0, "minX": 1.57493136E12, "maxY": 9377.0, "series": [{"data": [[1.57493142E12, 6230.0], [1.57493136E12, 2049.0], [1.57493148E12, 9377.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.57493142E12, 1858.0], [1.57493136E12, 44.0], [1.57493148E12, 29.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.57493142E12, 4643.0], [1.57493136E12, 1553.5], [1.57493148E12, 7564.799999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.57493142E12, 5918.34], [1.57493136E12, 2026.3999999999996], [1.57493148E12, 8922.639999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.57493142E12, 5116.0], [1.57493136E12, 1669.0], [1.57493148E12, 8020.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 2.0, "minX": 5.0, "maxY": 8442.0, "series": [{"data": [[845.0, 5638.0], [935.0, 8383.0], [1125.0, 8300.5], [5.0, 40.0], [9.0, 4573.0], [10.0, 5922.0], [13.0, 6446.0], [15.0, 101.0], [17.0, 6075.5], [19.0, 4430.0], [20.0, 4957.0], [24.0, 6229.5], [25.0, 4831.0], [27.0, 4446.0], [29.0, 4768.0], [31.0, 4251.0], [33.0, 4069.0], [32.0, 5892.5], [35.0, 5230.5], [34.0, 4935.5], [37.0, 4717.0], [38.0, 4524.0], [39.0, 5619.0], [41.0, 2680.0], [42.0, 5287.0], [44.0, 3664.0], [45.0, 5806.5], [46.0, 3044.5], [49.0, 4019.0], [48.0, 5913.5], [51.0, 3713.0], [50.0, 5596.5], [52.0, 4245.0], [54.0, 3234.5], [55.0, 3430.0], [56.0, 5046.0], [57.0, 3753.0], [59.0, 3151.0], [58.0, 2670.0], [60.0, 2712.5], [61.0, 4065.0], [63.0, 2812.5], [64.0, 3248.0], [67.0, 4105.0], [68.0, 1189.5], [71.0, 1736.0], [70.0, 3828.0], [75.0, 2635.0], [79.0, 425.0], [76.0, 2382.0], [77.0, 2812.0], [83.0, 2058.0], [82.0, 3183.0], [87.0, 429.0], [85.0, 1120.0], [84.0, 1466.0], [89.0, 461.0], [95.0, 2548.0], [97.0, 2214.0], [100.0, 1511.0], [105.0, 2698.0], [104.0, 1739.5], [109.0, 1408.0], [120.0, 2745.0], [122.0, 7124.5], [129.0, 1093.0], [141.0, 1359.5], [236.0, 7318.0], [272.0, 8442.0], [443.0, 7705.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 4.0], [272.0, 11.0], [1125.0, 8.0], [141.0, 2.0], [86.0, 2.0], [845.0, 3.0], [104.0, 2.0], [443.0, 8.0], [56.0, 1100.0], [236.0, 3.0], [935.0, 7.0], [122.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1125.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 5.0, "maxY": 8442.0, "series": [{"data": [[845.0, 5637.0], [935.0, 8383.0], [1125.0, 8300.5], [5.0, 40.0], [9.0, 4573.0], [10.0, 5922.0], [13.0, 6446.0], [15.0, 101.0], [17.0, 6075.5], [19.0, 4430.0], [20.0, 4957.0], [24.0, 6229.5], [25.0, 4831.0], [27.0, 4446.0], [29.0, 4768.0], [31.0, 4251.0], [33.0, 4069.0], [32.0, 5892.5], [35.0, 5230.5], [34.0, 4935.5], [37.0, 4717.0], [38.0, 4524.0], [39.0, 5619.0], [41.0, 2680.0], [42.0, 5287.0], [44.0, 3664.0], [45.0, 5806.5], [46.0, 3044.5], [49.0, 4019.0], [48.0, 5913.5], [51.0, 3713.0], [50.0, 5596.5], [52.0, 4245.0], [54.0, 3234.5], [55.0, 3430.0], [56.0, 5046.0], [57.0, 3753.0], [59.0, 3151.0], [58.0, 2669.5], [60.0, 2712.5], [61.0, 4065.0], [63.0, 2812.5], [64.0, 3248.0], [67.0, 4105.0], [68.0, 1189.5], [71.0, 1736.0], [70.0, 3828.0], [75.0, 2634.5], [79.0, 425.0], [76.0, 2382.0], [77.0, 2812.0], [83.0, 2058.0], [82.0, 3183.0], [87.0, 429.0], [85.0, 1120.0], [84.0, 1466.0], [89.0, 461.0], [95.0, 2548.0], [97.0, 2214.0], [100.0, 1511.0], [105.0, 2698.0], [104.0, 1739.5], [109.0, 1408.0], [120.0, 2745.0], [122.0, 7124.5], [129.0, 1092.0], [141.0, 1359.5], [236.0, 7316.0], [272.0, 8442.0], [443.0, 7705.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 0.0], [272.0, 0.0], [1125.0, 0.0], [141.0, 0.0], [86.0, 0.0], [845.0, 0.0], [104.0, 0.0], [443.0, 0.0], [56.0, 0.0], [236.0, 0.0], [935.0, 0.0], [122.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1125.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 25.616666666666667, "minX": 1.57493136E12, "maxY": 85.06666666666666, "series": [{"data": [[1.57493142E12, 55.983333333333334], [1.57493136E12, 25.616666666666667], [1.57493148E12, 85.06666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493148E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 19.516666666666666, "minX": 1.57493136E12, "maxY": 68.88333333333334, "series": [{"data": [[1.57493142E12, 55.53333333333333], [1.57493136E12, 22.733333333333334], [1.57493148E12, 19.516666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57493148E12, 68.88333333333334]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493148E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 19.516666666666666, "minX": 1.57493136E12, "maxY": 68.88333333333334, "series": [{"data": [[1.57493148E12, 68.88333333333334]], "isOverall": false, "label": "Save API HTTP Request-failure", "isController": false}, {"data": [[1.57493142E12, 55.53333333333333], [1.57493136E12, 22.733333333333334], [1.57493148E12, 19.516666666666666]], "isOverall": false, "label": "Save API HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493148E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 19.516666666666666, "minX": 1.57493136E12, "maxY": 68.88333333333334, "series": [{"data": [[1.57493142E12, 55.53333333333333], [1.57493136E12, 22.733333333333334], [1.57493148E12, 19.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57493148E12, 68.88333333333334]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493148E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

