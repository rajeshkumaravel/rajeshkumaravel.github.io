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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7783.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 2.0], [1.4, 2.0], [1.5, 2.0], [1.6, 2.0], [1.7, 2.0], [1.8, 2.0], [1.9, 2.0], [2.0, 2.0], [2.1, 2.0], [2.2, 2.0], [2.3, 2.0], [2.4, 2.0], [2.5, 2.0], [2.6, 2.0], [2.7, 2.0], [2.8, 2.0], [2.9, 3.0], [3.0, 3.0], [3.1, 3.0], [3.2, 3.0], [3.3, 3.0], [3.4, 3.0], [3.5, 3.0], [3.6, 3.0], [3.7, 3.0], [3.8, 3.0], [3.9, 4.0], [4.0, 4.0], [4.1, 4.0], [4.2, 4.0], [4.3, 4.0], [4.4, 4.0], [4.5, 4.0], [4.6, 4.0], [4.7, 4.0], [4.8, 4.0], [4.9, 4.0], [5.0, 4.0], [5.1, 5.0], [5.2, 5.0], [5.3, 5.0], [5.4, 5.0], [5.5, 5.0], [5.6, 5.0], [5.7, 5.0], [5.8, 5.0], [5.9, 5.0], [6.0, 5.0], [6.1, 5.0], [6.2, 5.0], [6.3, 5.0], [6.4, 5.0], [6.5, 5.0], [6.6, 5.0], [6.7, 6.0], [6.8, 6.0], [6.9, 6.0], [7.0, 6.0], [7.1, 6.0], [7.2, 6.0], [7.3, 6.0], [7.4, 6.0], [7.5, 6.0], [7.6, 6.0], [7.7, 6.0], [7.8, 6.0], [7.9, 6.0], [8.0, 6.0], [8.1, 7.0], [8.2, 7.0], [8.3, 7.0], [8.4, 7.0], [8.5, 7.0], [8.6, 7.0], [8.7, 7.0], [8.8, 7.0], [8.9, 7.0], [9.0, 7.0], [9.1, 7.0], [9.2, 7.0], [9.3, 7.0], [9.4, 7.0], [9.5, 8.0], [9.6, 8.0], [9.7, 8.0], [9.8, 8.0], [9.9, 8.0], [10.0, 8.0], [10.1, 8.0], [10.2, 8.0], [10.3, 8.0], [10.4, 8.0], [10.5, 8.0], [10.6, 8.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 9.0], [11.2, 9.0], [11.3, 9.0], [11.4, 9.0], [11.5, 9.0], [11.6, 9.0], [11.7, 9.0], [11.8, 9.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 11.0], [13.0, 11.0], [13.1, 11.0], [13.2, 11.0], [13.3, 11.0], [13.4, 11.0], [13.5, 11.0], [13.6, 11.0], [13.7, 11.0], [13.8, 11.0], [13.9, 11.0], [14.0, 11.0], [14.1, 11.0], [14.2, 12.0], [14.3, 12.0], [14.4, 12.0], [14.5, 12.0], [14.6, 12.0], [14.7, 12.0], [14.8, 12.0], [14.9, 12.0], [15.0, 12.0], [15.1, 12.0], [15.2, 12.0], [15.3, 12.0], [15.4, 12.0], [15.5, 12.0], [15.6, 12.0], [15.7, 13.0], [15.8, 13.0], [15.9, 13.0], [16.0, 13.0], [16.1, 13.0], [16.2, 13.0], [16.3, 13.0], [16.4, 13.0], [16.5, 13.0], [16.6, 13.0], [16.7, 13.0], [16.8, 13.0], [16.9, 13.0], [17.0, 13.0], [17.1, 13.0], [17.2, 13.0], [17.3, 13.0], [17.4, 14.0], [17.5, 14.0], [17.6, 14.0], [17.7, 14.0], [17.8, 14.0], [17.9, 14.0], [18.0, 14.0], [18.1, 14.0], [18.2, 14.0], [18.3, 14.0], [18.4, 14.0], [18.5, 14.0], [18.6, 14.0], [18.7, 14.0], [18.8, 15.0], [18.9, 15.0], [19.0, 15.0], [19.1, 15.0], [19.2, 15.0], [19.3, 15.0], [19.4, 15.0], [19.5, 15.0], [19.6, 15.0], [19.7, 15.0], [19.8, 15.0], [19.9, 15.0], [20.0, 15.0], [20.1, 15.0], [20.2, 15.0], [20.3, 16.0], [20.4, 16.0], [20.5, 16.0], [20.6, 16.0], [20.7, 16.0], [20.8, 16.0], [20.9, 16.0], [21.0, 16.0], [21.1, 16.0], [21.2, 16.0], [21.3, 17.0], [21.4, 17.0], [21.5, 17.0], [21.6, 17.0], [21.7, 17.0], [21.8, 17.0], [21.9, 17.0], [22.0, 17.0], [22.1, 17.0], [22.2, 17.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 19.0], [23.2, 19.0], [23.3, 19.0], [23.4, 19.0], [23.5, 19.0], [23.6, 19.0], [23.7, 19.0], [23.8, 19.0], [23.9, 20.0], [24.0, 20.0], [24.1, 20.0], [24.2, 20.0], [24.3, 20.0], [24.4, 20.0], [24.5, 20.0], [24.6, 20.0], [24.7, 21.0], [24.8, 21.0], [24.9, 21.0], [25.0, 21.0], [25.1, 21.0], [25.2, 21.0], [25.3, 21.0], [25.4, 21.0], [25.5, 21.0], [25.6, 22.0], [25.7, 22.0], [25.8, 22.0], [25.9, 22.0], [26.0, 22.0], [26.1, 22.0], [26.2, 22.0], [26.3, 22.0], [26.4, 23.0], [26.5, 23.0], [26.6, 23.0], [26.7, 23.0], [26.8, 23.0], [26.9, 23.0], [27.0, 23.0], [27.1, 23.0], [27.2, 23.0], [27.3, 24.0], [27.4, 24.0], [27.5, 24.0], [27.6, 24.0], [27.7, 24.0], [27.8, 24.0], [27.9, 25.0], [28.0, 25.0], [28.1, 25.0], [28.2, 25.0], [28.3, 25.0], [28.4, 25.0], [28.5, 26.0], [28.6, 26.0], [28.7, 26.0], [28.8, 26.0], [28.9, 26.0], [29.0, 27.0], [29.1, 27.0], [29.2, 27.0], [29.3, 28.0], [29.4, 28.0], [29.5, 28.0], [29.6, 28.0], [29.7, 28.0], [29.8, 28.0], [29.9, 29.0], [30.0, 29.0], [30.1, 29.0], [30.2, 29.0], [30.3, 30.0], [30.4, 30.0], [30.5, 30.0], [30.6, 31.0], [30.7, 31.0], [30.8, 31.0], [30.9, 32.0], [31.0, 32.0], [31.1, 32.0], [31.2, 33.0], [31.3, 33.0], [31.4, 33.0], [31.5, 33.0], [31.6, 34.0], [31.7, 34.0], [31.8, 35.0], [31.9, 35.0], [32.0, 35.0], [32.1, 35.0], [32.2, 36.0], [32.3, 36.0], [32.4, 36.0], [32.5, 36.0], [32.6, 37.0], [32.7, 37.0], [32.8, 37.0], [32.9, 37.0], [33.0, 37.0], [33.1, 37.0], [33.2, 38.0], [33.3, 38.0], [33.4, 38.0], [33.5, 38.0], [33.6, 38.0], [33.7, 38.0], [33.8, 39.0], [33.9, 39.0], [34.0, 39.0], [34.1, 39.0], [34.2, 39.0], [34.3, 39.0], [34.4, 39.0], [34.5, 40.0], [34.6, 40.0], [34.7, 40.0], [34.8, 40.0], [34.9, 40.0], [35.0, 40.0], [35.1, 40.0], [35.2, 40.0], [35.3, 40.0], [35.4, 41.0], [35.5, 41.0], [35.6, 41.0], [35.7, 41.0], [35.8, 41.0], [35.9, 41.0], [36.0, 41.0], [36.1, 41.0], [36.2, 41.0], [36.3, 41.0], [36.4, 41.0], [36.5, 42.0], [36.6, 42.0], [36.7, 42.0], [36.8, 42.0], [36.9, 42.0], [37.0, 42.0], [37.1, 42.0], [37.2, 42.0], [37.3, 42.0], [37.4, 43.0], [37.5, 43.0], [37.6, 43.0], [37.7, 43.0], [37.8, 43.0], [37.9, 43.0], [38.0, 43.0], [38.1, 43.0], [38.2, 44.0], [38.3, 44.0], [38.4, 44.0], [38.5, 44.0], [38.6, 44.0], [38.7, 44.0], [38.8, 44.0], [38.9, 44.0], [39.0, 45.0], [39.1, 45.0], [39.2, 45.0], [39.3, 45.0], [39.4, 45.0], [39.5, 46.0], [39.6, 46.0], [39.7, 46.0], [39.8, 46.0], [39.9, 46.0], [40.0, 46.0], [40.1, 47.0], [40.2, 47.0], [40.3, 47.0], [40.4, 47.0], [40.5, 47.0], [40.6, 48.0], [40.7, 48.0], [40.8, 48.0], [40.9, 49.0], [41.0, 49.0], [41.1, 49.0], [41.2, 50.0], [41.3, 50.0], [41.4, 50.0], [41.5, 51.0], [41.6, 51.0], [41.7, 51.0], [41.8, 52.0], [41.9, 52.0], [42.0, 53.0], [42.1, 53.0], [42.2, 53.0], [42.3, 54.0], [42.4, 54.0], [42.5, 54.0], [42.6, 54.0], [42.7, 54.0], [42.8, 55.0], [42.9, 55.0], [43.0, 55.0], [43.1, 55.0], [43.2, 56.0], [43.3, 56.0], [43.4, 56.0], [43.5, 56.0], [43.6, 56.0], [43.7, 56.0], [43.8, 57.0], [43.9, 57.0], [44.0, 57.0], [44.1, 57.0], [44.2, 57.0], [44.3, 57.0], [44.4, 58.0], [44.5, 58.0], [44.6, 58.0], [44.7, 58.0], [44.8, 58.0], [44.9, 59.0], [45.0, 59.0], [45.1, 59.0], [45.2, 59.0], [45.3, 59.0], [45.4, 59.0], [45.5, 59.0], [45.6, 60.0], [45.7, 60.0], [45.8, 60.0], [45.9, 60.0], [46.0, 60.0], [46.1, 61.0], [46.2, 61.0], [46.3, 61.0], [46.4, 61.0], [46.5, 62.0], [46.6, 62.0], [46.7, 62.0], [46.8, 62.0], [46.9, 63.0], [47.0, 63.0], [47.1, 63.0], [47.2, 64.0], [47.3, 64.0], [47.4, 64.0], [47.5, 65.0], [47.6, 65.0], [47.7, 65.0], [47.8, 65.0], [47.9, 66.0], [48.0, 66.0], [48.1, 66.0], [48.2, 66.0], [48.3, 66.0], [48.4, 66.0], [48.5, 66.0], [48.6, 66.0], [48.7, 67.0], [48.8, 67.0], [48.9, 67.0], [49.0, 67.0], [49.1, 67.0], [49.2, 67.0], [49.3, 67.0], [49.4, 67.0], [49.5, 68.0], [49.6, 68.0], [49.7, 68.0], [49.8, 68.0], [49.9, 68.0], [50.0, 68.0], [50.1, 69.0], [50.2, 69.0], [50.3, 69.0], [50.4, 69.0], [50.5, 69.0], [50.6, 69.0], [50.7, 70.0], [50.8, 70.0], [50.9, 70.0], [51.0, 70.0], [51.1, 70.0], [51.2, 70.0], [51.3, 71.0], [51.4, 71.0], [51.5, 71.0], [51.6, 71.0], [51.7, 71.0], [51.8, 71.0], [51.9, 72.0], [52.0, 72.0], [52.1, 72.0], [52.2, 72.0], [52.3, 72.0], [52.4, 72.0], [52.5, 73.0], [52.6, 73.0], [52.7, 73.0], [52.8, 73.0], [52.9, 73.0], [53.0, 73.0], [53.1, 74.0], [53.2, 74.0], [53.3, 74.0], [53.4, 74.0], [53.5, 74.0], [53.6, 74.0], [53.7, 74.0], [53.8, 74.0], [53.9, 75.0], [54.0, 75.0], [54.1, 75.0], [54.2, 75.0], [54.3, 75.0], [54.4, 75.0], [54.5, 76.0], [54.6, 76.0], [54.7, 76.0], [54.8, 76.0], [54.9, 76.0], [55.0, 77.0], [55.1, 77.0], [55.2, 77.0], [55.3, 77.0], [55.4, 77.0], [55.5, 78.0], [55.6, 78.0], [55.7, 78.0], [55.8, 78.0], [55.9, 78.0], [56.0, 78.0], [56.1, 79.0], [56.2, 79.0], [56.3, 79.0], [56.4, 79.0], [56.5, 79.0], [56.6, 80.0], [56.7, 80.0], [56.8, 80.0], [56.9, 80.0], [57.0, 80.0], [57.1, 80.0], [57.2, 81.0], [57.3, 81.0], [57.4, 81.0], [57.5, 81.0], [57.6, 81.0], [57.7, 82.0], [57.8, 82.0], [57.9, 82.0], [58.0, 83.0], [58.1, 83.0], [58.2, 83.0], [58.3, 83.0], [58.4, 84.0], [58.5, 84.0], [58.6, 84.0], [58.7, 84.0], [58.8, 85.0], [58.9, 85.0], [59.0, 85.0], [59.1, 86.0], [59.2, 86.0], [59.3, 86.0], [59.4, 87.0], [59.5, 87.0], [59.6, 87.0], [59.7, 87.0], [59.8, 87.0], [59.9, 87.0], [60.0, 88.0], [60.1, 88.0], [60.2, 88.0], [60.3, 88.0], [60.4, 88.0], [60.5, 88.0], [60.6, 89.0], [60.7, 89.0], [60.8, 89.0], [60.9, 89.0], [61.0, 89.0], [61.1, 89.0], [61.2, 90.0], [61.3, 90.0], [61.4, 90.0], [61.5, 90.0], [61.6, 90.0], [61.7, 90.0], [61.8, 90.0], [61.9, 91.0], [62.0, 91.0], [62.1, 91.0], [62.2, 91.0], [62.3, 92.0], [62.4, 92.0], [62.5, 92.0], [62.6, 92.0], [62.7, 92.0], [62.8, 93.0], [62.9, 93.0], [63.0, 93.0], [63.1, 93.0], [63.2, 93.0], [63.3, 94.0], [63.4, 94.0], [63.5, 95.0], [63.6, 95.0], [63.7, 95.0], [63.8, 96.0], [63.9, 96.0], [64.0, 96.0], [64.1, 96.0], [64.2, 96.0], [64.3, 97.0], [64.4, 97.0], [64.5, 97.0], [64.6, 97.0], [64.7, 97.0], [64.8, 97.0], [64.9, 98.0], [65.0, 98.0], [65.1, 98.0], [65.2, 99.0], [65.3, 100.0], [65.4, 101.0], [65.5, 101.0], [65.6, 102.0], [65.7, 102.0], [65.8, 103.0], [65.9, 103.0], [66.0, 103.0], [66.1, 103.0], [66.2, 104.0], [66.3, 104.0], [66.4, 104.0], [66.5, 104.0], [66.6, 104.0], [66.7, 105.0], [66.8, 105.0], [66.9, 105.0], [67.0, 105.0], [67.1, 105.0], [67.2, 105.0], [67.3, 105.0], [67.4, 106.0], [67.5, 106.0], [67.6, 106.0], [67.7, 107.0], [67.8, 107.0], [67.9, 108.0], [68.0, 108.0], [68.1, 109.0], [68.2, 109.0], [68.3, 109.0], [68.4, 109.0], [68.5, 110.0], [68.6, 110.0], [68.7, 111.0], [68.8, 111.0], [68.9, 111.0], [69.0, 112.0], [69.1, 112.0], [69.2, 114.0], [69.3, 116.0], [69.4, 118.0], [69.5, 122.0], [69.6, 126.0], [69.7, 131.0], [69.8, 135.0], [69.9, 139.0], [70.0, 141.0], [70.1, 145.0], [70.2, 149.0], [70.3, 154.0], [70.4, 161.0], [70.5, 165.0], [70.6, 167.0], [70.7, 171.0], [70.8, 175.0], [70.9, 178.0], [71.0, 183.0], [71.1, 190.0], [71.2, 198.0], [71.3, 205.0], [71.4, 214.0], [71.5, 232.0], [71.6, 255.0], [71.7, 261.0], [71.8, 266.0], [71.9, 272.0], [72.0, 279.0], [72.1, 285.0], [72.2, 294.0], [72.3, 298.0], [72.4, 305.0], [72.5, 313.0], [72.6, 318.0], [72.7, 327.0], [72.8, 334.0], [72.9, 345.0], [73.0, 351.0], [73.1, 356.0], [73.2, 364.0], [73.3, 372.0], [73.4, 381.0], [73.5, 388.0], [73.6, 420.0], [73.7, 444.0], [73.8, 456.0], [73.9, 461.0], [74.0, 481.0], [74.1, 560.0], [74.2, 566.0], [74.3, 586.0], [74.4, 594.0], [74.5, 631.0], [74.6, 667.0], [74.7, 689.0], [74.8, 701.0], [74.9, 705.0], [75.0, 707.0], [75.1, 714.0], [75.2, 729.0], [75.3, 737.0], [75.4, 739.0], [75.5, 751.0], [75.6, 758.0], [75.7, 768.0], [75.8, 776.0], [75.9, 793.0], [76.0, 800.0], [76.1, 809.0], [76.2, 819.0], [76.3, 826.0], [76.4, 841.0], [76.5, 855.0], [76.6, 865.0], [76.7, 870.0], [76.8, 878.0], [76.9, 886.0], [77.0, 889.0], [77.1, 898.0], [77.2, 920.0], [77.3, 947.0], [77.4, 1014.0], [77.5, 1173.0], [77.6, 1382.0], [77.7, 1493.0], [77.8, 1546.0], [77.9, 1569.0], [78.0, 1582.0], [78.1, 1599.0], [78.2, 1603.0], [78.3, 1612.0], [78.4, 1635.0], [78.5, 1659.0], [78.6, 1668.0], [78.7, 1679.0], [78.8, 1696.0], [78.9, 1717.0], [79.0, 1736.0], [79.1, 1777.0], [79.2, 1792.0], [79.3, 1830.0], [79.4, 1843.0], [79.5, 1890.0], [79.6, 1931.0], [79.7, 1956.0], [79.8, 2044.0], [79.9, 2064.0], [80.0, 2073.0], [80.1, 2089.0], [80.2, 2098.0], [80.3, 2106.0], [80.4, 2152.0], [80.5, 2217.0], [80.6, 2232.0], [80.7, 2271.0], [80.8, 2302.0], [80.9, 2311.0], [81.0, 2315.0], [81.1, 2322.0], [81.2, 2343.0], [81.3, 2372.0], [81.4, 2393.0], [81.5, 2402.0], [81.6, 2418.0], [81.7, 2434.0], [81.8, 2458.0], [81.9, 2460.0], [82.0, 2465.0], [82.1, 2538.0], [82.2, 2567.0], [82.3, 2586.0], [82.4, 2592.0], [82.5, 2596.0], [82.6, 2620.0], [82.7, 2636.0], [82.8, 2640.0], [82.9, 2647.0], [83.0, 2655.0], [83.1, 2661.0], [83.2, 2668.0], [83.3, 2693.0], [83.4, 2699.0], [83.5, 2734.0], [83.6, 2747.0], [83.7, 2755.0], [83.8, 2762.0], [83.9, 2768.0], [84.0, 2783.0], [84.1, 2814.0], [84.2, 2827.0], [84.3, 2833.0], [84.4, 2851.0], [84.5, 2866.0], [84.6, 2892.0], [84.7, 2900.0], [84.8, 2908.0], [84.9, 2925.0], [85.0, 2928.0], [85.1, 2934.0], [85.2, 2957.0], [85.3, 2960.0], [85.4, 2991.0], [85.5, 3012.0], [85.6, 3016.0], [85.7, 3029.0], [85.8, 3037.0], [85.9, 3040.0], [86.0, 3048.0], [86.1, 3057.0], [86.2, 3069.0], [86.3, 3079.0], [86.4, 3087.0], [86.5, 3090.0], [86.6, 3093.0], [86.7, 3104.0], [86.8, 3108.0], [86.9, 3150.0], [87.0, 3179.0], [87.1, 3201.0], [87.2, 3211.0], [87.3, 3218.0], [87.4, 3236.0], [87.5, 3246.0], [87.6, 3253.0], [87.7, 3282.0], [87.8, 3288.0], [87.9, 3298.0], [88.0, 3308.0], [88.1, 3330.0], [88.2, 3361.0], [88.3, 3412.0], [88.4, 3454.0], [88.5, 3485.0], [88.6, 3509.0], [88.7, 3520.0], [88.8, 3526.0], [88.9, 3557.0], [89.0, 3572.0], [89.1, 3601.0], [89.2, 3605.0], [89.3, 3619.0], [89.4, 3625.0], [89.5, 3633.0], [89.6, 3655.0], [89.7, 3677.0], [89.8, 3684.0], [89.9, 3694.0], [90.0, 3708.0], [90.1, 3716.0], [90.2, 3740.0], [90.3, 3799.0], [90.4, 3806.0], [90.5, 3823.0], [90.6, 3842.0], [90.7, 3858.0], [90.8, 3880.0], [90.9, 3890.0], [91.0, 3900.0], [91.1, 3920.0], [91.2, 3934.0], [91.3, 3938.0], [91.4, 3951.0], [91.5, 3968.0], [91.6, 3972.0], [91.7, 3981.0], [91.8, 4017.0], [91.9, 4045.0], [92.0, 4070.0], [92.1, 4075.0], [92.2, 4077.0], [92.3, 4081.0], [92.4, 4090.0], [92.5, 4095.0], [92.6, 4099.0], [92.7, 4128.0], [92.8, 4155.0], [92.9, 4164.0], [93.0, 4172.0], [93.1, 4219.0], [93.2, 4247.0], [93.3, 4275.0], [93.4, 4292.0], [93.5, 4336.0], [93.6, 4354.0], [93.7, 4364.0], [93.8, 4371.0], [93.9, 4377.0], [94.0, 4398.0], [94.1, 4458.0], [94.2, 4461.0], [94.3, 4489.0], [94.4, 4497.0], [94.5, 4506.0], [94.6, 4538.0], [94.7, 4576.0], [94.8, 4585.0], [94.9, 4599.0], [95.0, 4625.0], [95.1, 4641.0], [95.2, 4646.0], [95.3, 4705.0], [95.4, 4722.0], [95.5, 4815.0], [95.6, 4858.0], [95.7, 4940.0], [95.8, 4963.0], [95.9, 4981.0], [96.0, 4996.0], [96.1, 5025.0], [96.2, 5035.0], [96.3, 5038.0], [96.4, 5066.0], [96.5, 5083.0], [96.6, 5116.0], [96.7, 5128.0], [96.8, 5178.0], [96.9, 5242.0], [97.0, 5250.0], [97.1, 5256.0], [97.2, 5261.0], [97.3, 5294.0], [97.4, 5359.0], [97.5, 5363.0], [97.6, 5377.0], [97.7, 5445.0], [97.8, 5570.0], [97.9, 5594.0], [98.0, 5599.0], [98.1, 5648.0], [98.2, 5658.0], [98.3, 5676.0], [98.4, 5728.0], [98.5, 5761.0], [98.6, 5787.0], [98.7, 5797.0], [98.8, 5817.0], [98.9, 5873.0], [99.0, 5923.0], [99.1, 5966.0], [99.2, 6217.0], [99.3, 6226.0], [99.4, 6681.0], [99.5, 6778.0], [99.6, 6830.0], [99.7, 7197.0], [99.8, 7558.0], [99.9, 7773.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 13054.0, "series": [{"data": [[0.0, 13054.0], [600.0, 74.0], [700.0, 240.0], [800.0, 223.0], [900.0, 51.0], [1000.0, 22.0], [1100.0, 7.0], [1200.0, 9.0], [1300.0, 19.0], [1400.0, 17.0], [1500.0, 77.0], [1600.0, 141.0], [1700.0, 79.0], [1800.0, 66.0], [1900.0, 49.0], [2000.0, 87.0], [2100.0, 46.0], [2300.0, 126.0], [2200.0, 68.0], [2400.0, 124.0], [2500.0, 97.0], [2600.0, 181.0], [2800.0, 132.0], [2700.0, 120.0], [2900.0, 150.0], [3000.0, 248.0], [3100.0, 80.0], [3200.0, 164.0], [3300.0, 79.0], [3400.0, 56.0], [3500.0, 100.0], [3700.0, 69.0], [3600.0, 177.0], [3800.0, 138.0], [3900.0, 147.0], [4000.0, 174.0], [4300.0, 119.0], [4100.0, 86.0], [4200.0, 75.0], [4600.0, 76.0], [4500.0, 90.0], [4400.0, 91.0], [4700.0, 34.0], [4800.0, 40.0], [5000.0, 103.0], [5100.0, 61.0], [4900.0, 74.0], [5300.0, 56.0], [5200.0, 100.0], [5500.0, 47.0], [5600.0, 76.0], [5400.0, 28.0], [5700.0, 68.0], [5800.0, 46.0], [5900.0, 37.0], [6100.0, 11.0], [6000.0, 1.0], [6200.0, 26.0], [6300.0, 3.0], [6400.0, 5.0], [6600.0, 7.0], [6800.0, 20.0], [6900.0, 8.0], [6700.0, 27.0], [7100.0, 6.0], [7200.0, 17.0], [7500.0, 9.0], [7700.0, 32.0], [100.0, 1192.0], [200.0, 222.0], [300.0, 243.0], [400.0, 93.0], [500.0, 80.0]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 742.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 13993.0, "series": [{"data": [[0.0, 811.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 742.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 4454.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 13993.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 66.22679045092835, "minX": 1.57493484E12, "maxY": 194.51894470951504, "series": [{"data": [[1.5749349E12, 194.51894470951504], [1.57493496E12, 141.74264853640582], [1.57493484E12, 66.22679045092835]], "isOverall": false, "label": "1. Save API", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493496E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.0, "maxY": 3395.1360231940116, "series": [{"data": [[2.0, 37.57142857142857], [3.0, 24.976744186046506], [4.0, 14.909090909090912], [5.0, 41.099999999999994], [6.0, 19.333333333333332], [7.0, 23.666666666666664], [8.0, 51.6], [9.0, 88.28571428571429], [10.0, 83.41666666666667], [11.0, 109.85714285714286], [12.0, 129.26666666666668], [13.0, 52.333333333333336], [14.0, 99.30769230769229], [15.0, 107.69999999999997], [16.0, 86.48], [17.0, 11.142857142857142], [18.0, 73.29999999999998], [19.0, 172.47619047619048], [20.0, 112.25000000000001], [21.0, 169.57142857142856], [22.0, 126.43478260869563], [23.0, 44.25], [24.0, 92.02439024390243], [25.0, 54.18749999999999], [26.0, 150.33333333333334], [27.0, 86.97619047619048], [28.0, 26.568181818181834], [29.0, 140.28125], [30.0, 147.2083333333333], [31.0, 190.88888888888889], [32.0, 164.22580645161293], [33.0, 100.66666666666666], [34.0, 222.5], [35.0, 105.93103448275858], [36.0, 135.42465753424662], [37.0, 158.78947368421055], [38.0, 207.0], [39.0, 173.14285714285714], [40.0, 185.08333333333331], [41.0, 271.11111111111114], [42.0, 85.91666666666669], [43.0, 67.88709677419354], [44.0, 163.73333333333332], [45.0, 104.39999999999999], [46.0, 221.5], [47.0, 266.0], [48.0, 57.71014492753622], [49.0, 141.1973684210527], [50.0, 137.5], [51.0, 138.50000000000003], [52.0, 87.53125000000001], [53.0, 167.20270270270274], [54.0, 46.82142857142857], [55.0, 74.95555555555553], [56.0, 370.96666666666664], [57.0, 358.73333333333335], [58.0, 340.3636363636364], [59.0, 62.931818181818194], [60.0, 193.9016393442623], [61.0, 124.42857142857144], [62.0, 334.5882352941176], [63.0, 96.62162162162163], [64.0, 244.74999999999997], [65.0, 449.38095238095235], [66.0, 147.20833333333331], [67.0, 338.2727272727273], [68.0, 51.84705882352941], [69.0, 345.42857142857144], [70.0, 260.8032786885245], [71.0, 557.8], [72.0, 339.0], [73.0, 78.78181818181814], [74.0, 120.9], [75.0, 383.409090909091], [76.0, 142.8666666666667], [78.0, 446.8333333333333], [79.0, 622.2692307692307], [77.0, 6.0], [80.0, 740.2666666666667], [81.0, 239.75], [82.0, 159.86486486486487], [83.0, 568.6923076923077], [84.0, 262.96551724137925], [85.0, 223.87499999999997], [86.0, 551.9591836734694], [87.0, 167.45652173913044], [88.0, 167.23809523809516], [89.0, 188.38461538461536], [90.0, 510.06249999999994], [91.0, 141.972972972973], [93.0, 295.86666666666673], [94.0, 318.66666666666663], [95.0, 460.12499999999994], [92.0, 26.666666666666664], [96.0, 83.33720930232559], [97.0, 370.30232558139534], [99.0, 142.8474576271187], [98.0, 79.67499999999997], [100.0, 263.4565217391305], [101.0, 407.67272727272706], [102.0, 294.99999999999994], [103.0, 589.9230769230769], [104.0, 26.142857142857135], [105.0, 698.6666666666667], [106.0, 629.8235294117648], [107.0, 45.26751592356689], [108.0, 151.41071428571428], [109.0, 95.89473684210529], [110.0, 211.80882352941174], [111.0, 177.78571428571425], [112.0, 85.02040816326532], [113.0, 392.67924528301876], [115.0, 81.64285714285717], [114.0, 75.92647058823535], [116.0, 153.4293193717277], [117.0, 388.95049504950504], [118.0, 176.96721311475412], [119.0, 530.8461538461539], [120.0, 101.08333333333337], [122.0, 167.6415094339622], [123.0, 99.1767441860465], [121.0, 72.82396088019561], [125.0, 357.9285714285714], [126.0, 176.5350553505535], [127.0, 95.87407407407406], [124.0, 41.0], [130.0, 564.7142857142857], [131.0, 355.60937500000006], [133.0, 178.92523364485987], [135.0, 199.89538602101425], [134.0, 107.41304347826083], [132.0, 106.33620689655172], [129.0, 93.06481481481481], [128.0, 200.87499999999997], [137.0, 76.35922330097087], [138.0, 826.4545454545454], [139.0, 374.7090909090909], [142.0, 130.38095238095235], [143.0, 1501.8133971291854], [141.0, 18.972602739726025], [140.0, 13.0], [136.0, 287.06786171574913], [144.0, 2107.391891891892], [145.0, 1960.1714285714284], [147.0, 395.52631578947387], [148.0, 159.17647058823522], [150.0, 608.7894736842104], [151.0, 42.7843137254902], [149.0, 11.063829787234042], [146.0, 6.6400000000000015], [152.0, 143.79999999999998], [153.0, 189.57607433217183], [155.0, 410.09433962264126], [157.0, 496.60937500000006], [158.0, 82.14754098360655], [159.0, 8.444444444444445], [156.0, 4.367924528301888], [154.0, 1.6666666666666667], [160.0, 1087.4444444444443], [161.0, 185.87612612612602], [162.0, 663.1538461538461], [165.0, 1674.1562500000005], [166.0, 1053.4230769230771], [167.0, 7.57142857142857], [164.0, 1.75], [163.0, 1.5], [168.0, 433.37500000000006], [169.0, 1389.857142857143], [171.0, 418.00000000000006], [174.0, 1642.0277777777774], [175.0, 285.66666666666663], [173.0, 8.071428571428571], [172.0, 4.0], [170.0, 4.0], [176.0, 1367.3225806451615], [177.0, 1408.8500000000004], [180.0, 1950.5714285714287], [182.0, 1664.8461538461538], [183.0, 12.839999999999998], [181.0, 4.736842105263158], [184.0, 61.249999999999986], [187.0, 322.16521739130445], [189.0, 622.8333333333334], [191.0, 7.6], [190.0, 14.846153846153845], [188.0, 8.4], [186.0, 9.689655172413795], [185.0, 6.952380952380953], [193.0, 752.7142857142854], [195.0, 737.2321428571429], [196.0, 187.9501424501424], [199.0, 2.5], [198.0, 6.0], [197.0, 1.6799999999999997], [194.0, 15.394736842105258], [192.0, 16.584905660377363], [200.0, 3395.1360231940116], [1.0, 2.6363636363636367]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}, {"data": [[145.4502999999996, 890.3437000000124]], "isOverall": false, "label": "Save API HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 7213.266666666666, "minX": 1.57493484E12, "maxY": 1000371.6333333333, "series": [{"data": [[1.5749349E12, 17043.016666666666], [1.57493496E12, 594748.5833333334], [1.57493484E12, 7213.266666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5749349E12, 1000371.6333333333], [1.57493496E12, 262797.6], [1.57493484E12, 423396.13333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493496E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 390.93395404916475, "minX": 1.57493484E12, "maxY": 3147.4737580690426, "series": [{"data": [[1.5749349E12, 3147.4737580690426], [1.57493496E12, 390.93395404916475], [1.57493484E12, 501.4403183023873]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493496E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 348.33257418447675, "minX": 1.57493484E12, "maxY": 3147.4681448217725, "series": [{"data": [[1.5749349E12, 3147.4681448217725], [1.57493496E12, 348.33257418447675], [1.57493484E12, 501.42904509283795]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493496E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.4244031830238727, "minX": 1.57493484E12, "maxY": 42.564672784513505, "series": [{"data": [[1.5749349E12, 0.9744597249508835], [1.57493496E12, 42.564672784513505], [1.57493484E12, 0.4244031830238727]], "isOverall": false, "label": "Save API HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493496E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.57493484E12, "maxY": 7783.0, "series": [{"data": [[1.5749349E12, 5313.0], [1.57493496E12, 7783.0], [1.57493484E12, 1173.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5749349E12, 1229.0], [1.57493496E12, 3799.0], [1.57493484E12, 11.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5749349E12, 4367.0], [1.57493496E12, 6781.6], [1.57493484E12, 875.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5749349E12, 5082.0], [1.57493496E12, 7775.0], [1.57493484E12, 1031.7300000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5749349E12, 4597.799999999999], [1.57493496E12, 7247.45], [1.57493484E12, 905.6499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493496E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 5.0, "minX": 10.0, "maxY": 7767.0, "series": [{"data": [[599.0, 5665.0], [790.0, 6829.0], [1292.0, 7767.0], [1331.0, 4298.5], [1418.0, 6778.0], [1519.0, 4801.0], [1558.0, 4404.0], [1632.0, 6388.5], [10.0, 4795.0], [11.0, 4935.0], [13.0, 5251.0], [17.0, 4586.5], [19.0, 3666.0], [24.0, 5591.0], [25.0, 5256.0], [27.0, 3149.0], [28.0, 5088.5], [29.0, 1338.0], [33.0, 4405.0], [32.0, 4534.0], [34.0, 3938.0], [36.0, 3040.0], [39.0, 3232.0], [38.0, 4972.5], [40.0, 5035.5], [43.0, 3854.0], [42.0, 3824.5], [45.0, 5106.0], [46.0, 4156.5], [47.0, 4287.0], [48.0, 3806.5], [50.0, 3457.0], [51.0, 3870.0], [53.0, 2941.0], [52.0, 4076.0], [55.0, 24.0], [54.0, 3110.0], [57.0, 2848.0], [58.0, 2699.0], [61.0, 3800.0], [63.0, 4805.5], [62.0, 5581.5], [66.0, 2571.0], [64.0, 4453.5], [69.0, 2899.0], [68.0, 2956.0], [70.0, 4497.0], [72.0, 2128.0], [75.0, 3315.0], [74.0, 4377.0], [78.0, 1966.0], [79.0, 2914.0], [81.0, 581.0], [80.0, 2461.0], [82.0, 4364.0], [85.0, 2665.0], [86.0, 2736.5], [90.0, 3839.5], [97.0, 2315.0], [102.0, 757.5], [104.0, 1782.0], [107.0, 2302.0], [110.0, 171.0], [111.0, 689.0], [120.0, 783.0], [121.0, 1660.0], [125.0, 3077.0], [130.0, 274.0], [134.0, 738.5], [141.0, 333.0], [146.0, 191.0], [154.0, 407.5], [158.0, 890.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[599.0, 5.0], [1292.0, 15.0], [1331.0, 96.0], [1408.0, 33.0], [1418.0, 49.0], [1519.0, 72.0], [790.0, 7.0], [1558.0, 81.0], [1632.0, 12.0], [844.0, 15.0], [1832.0, 53.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1832.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 10.0, "maxY": 7767.0, "series": [{"data": [[599.0, 5665.0], [790.0, 6829.0], [1292.0, 7767.0], [1331.0, 4298.5], [1418.0, 6778.0], [1519.0, 4801.0], [1558.0, 4404.0], [1632.0, 6388.5], [10.0, 4795.0], [11.0, 4934.0], [13.0, 5251.0], [17.0, 4586.5], [19.0, 3666.0], [24.0, 5591.0], [25.0, 5256.0], [27.0, 3149.0], [28.0, 5088.5], [29.0, 1338.0], [33.0, 4405.0], [32.0, 4534.0], [34.0, 3938.0], [36.0, 3040.0], [39.0, 3232.0], [38.0, 4972.5], [40.0, 5035.5], [43.0, 3854.0], [42.0, 3824.5], [45.0, 5106.0], [46.0, 4156.5], [47.0, 4287.0], [48.0, 3806.5], [50.0, 3457.0], [51.0, 3870.0], [53.0, 2941.0], [52.0, 4076.0], [55.0, 24.0], [54.0, 3110.0], [57.0, 2848.0], [58.0, 2699.0], [61.0, 3800.0], [63.0, 4805.5], [62.0, 5581.5], [66.0, 2571.0], [64.0, 4453.5], [69.0, 2899.0], [68.0, 2956.0], [70.0, 4497.0], [72.0, 2128.0], [75.0, 3315.0], [74.0, 4377.0], [78.0, 1966.0], [79.0, 2914.0], [81.0, 581.0], [80.0, 2461.0], [82.0, 4364.0], [85.0, 2665.0], [86.0, 2736.5], [90.0, 3839.5], [97.0, 2315.0], [102.0, 757.5], [104.0, 1782.0], [107.0, 2302.0], [110.0, 171.0], [111.0, 689.0], [120.0, 783.0], [121.0, 1660.0], [125.0, 3077.0], [130.0, 274.0], [134.0, 738.5], [141.0, 333.0], [146.0, 191.0], [154.0, 407.5], [158.0, 890.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[599.0, 0.0], [1292.0, 0.0], [1331.0, 0.0], [1408.0, 0.0], [1418.0, 0.0], [1519.0, 0.0], [790.0, 0.0], [1558.0, 0.0], [1632.0, 0.0], [844.0, 0.0], [1832.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1832.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 27.233333333333334, "minX": 1.57493484E12, "maxY": 245.48333333333332, "series": [{"data": [[1.5749349E12, 60.61666666666667], [1.57493496E12, 245.48333333333332], [1.57493484E12, 27.233333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493496E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 15.6, "minX": 1.57493484E12, "maxY": 233.21666666666667, "series": [{"data": [[1.5749349E12, 59.38333333333333], [1.57493496E12, 15.6], [1.57493484E12, 25.133333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.57493496E12, 233.21666666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.57493496E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 15.6, "minX": 1.57493484E12, "maxY": 233.21666666666667, "series": [{"data": [[1.57493496E12, 233.21666666666667]], "isOverall": false, "label": "Save API HTTP Request-failure", "isController": false}, {"data": [[1.5749349E12, 59.38333333333333], [1.57493496E12, 15.6], [1.57493484E12, 25.133333333333333]], "isOverall": false, "label": "Save API HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493496E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 15.6, "minX": 1.57493484E12, "maxY": 233.21666666666667, "series": [{"data": [[1.5749349E12, 59.38333333333333], [1.57493496E12, 15.6], [1.57493484E12, 25.133333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.57493496E12, 233.21666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.57493496E12, "title": "Total Transactions Per Second"}},
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

